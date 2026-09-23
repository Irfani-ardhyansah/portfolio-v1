type EventProps = Record<string, unknown>;

type AnalyticsEvent = {
	event_id: string;
	name: string;
	ts: string;
	props: EventProps;
};

type Utm = {
	source: string | null;
	medium: string | null;
	campaign: string | null;
	content: string | null;
	term: string | null;
};

const VID_KEY = 'pf_vid';
const SID_KEY = 'pf_sid';
const LAST_TS_KEY = 'pf_last_ts';
const UTC_DAY_KEY = 'pf_utc_day';
const CAMPAIGN_KEY = 'pf_campaign';
const SECTIONS_KEY = 'pf_sections';
const CARDS_KEY = 'pf_cards';

const IDLE_MS = 30 * 60 * 1000;
const HEARTBEAT_MS = 15_000;
const HEARTBEAT_MAX_MS = 20 * 60 * 1000;
const SECTION_DWELL_MS = 500;
const FLUSH_DEBOUNCE_MS = 2000;
const MAX_EVENTS = 50;
const MAX_BODY_BYTES = 32 * 1024;
const SCROLL_MARKS = [25, 50, 75, 90, 100] as const;

const COLLECT_PATH = '/api/v1/analytics/collect';

let booted = false;
let visitorId = '';
let sessionId = '';
let pageId: 'home' | 'work' = 'home';
let queue: AnalyticsEvent[] = [];
let flushTimer: number | null = null;
let sending = false;
let visibleSince = 0;
let accumulatedMs = 0;
let heartbeatStarted = 0;
let heartbeatTimer: number | null = null;
const scrollSeen = new Set<number>();
const sectionTimers = new Map<string, number>();

type PfWindow = Window & {
	pfTrack?: (name: string, props?: EventProps) => void;
	pfQueue?: Array<[string, EventProps?]>;
};

function apiBase(): string {
	return (import.meta.env.PUBLIC_ANALYTICS_API_BASE ?? '').replace(/\/+$/, '');
}

function writeKey(): string {
	return import.meta.env.PUBLIC_ANALYTICS_WRITE_KEY ?? '';
}

function uuid(): string {
	if (typeof crypto !== 'undefined' && typeof crypto.randomUUID === 'function') {
		return crypto.randomUUID();
	}
	return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
		const r = (Math.random() * 16) | 0;
		const v = c === 'x' ? r : (r & 0x3) | 0x8;
		return v.toString(16);
	});
}

function storageGet(store: Storage, key: string): string | null {
	try {
		return store.getItem(key);
	} catch {
		return null;
	}
}

function storageSet(store: Storage, key: string, value: string): void {
	try {
		store.setItem(key, value);
	} catch {
		/* ignore quota / private mode */
	}
}

function storageRemove(store: Storage, key: string): void {
	try {
		store.removeItem(key);
	} catch {
		/* ignore */
	}
}

function parseUtm(): Utm {
	const params = new URLSearchParams(location.search);
	const read = (key: string) => {
		const value = params.get(key);
		return value && value.trim() ? value.trim() : null;
	};
	return {
		source: read('utm_source'),
		medium: read('utm_medium'),
		campaign: read('utm_campaign'),
		content: read('utm_content'),
		term: read('utm_term'),
	};
}

function utmPresent(utm: Utm): boolean {
	return Boolean(utm.source || utm.medium || utm.campaign || utm.content || utm.term);
}

function externalReferrer(): string {
	const raw = document.referrer;
	if (!raw) return '';
	try {
		const url = new URL(raw);
		if (url.origin === location.origin) return '';
		return raw;
	} catch {
		return '';
	}
}

function campaignSignature(): string {
	const utm = parseUtm();
	return JSON.stringify({
		utm,
		ref: utmPresent(utm) ? '' : externalReferrer(),
	});
}

function campaignIsEmpty(signature: string): boolean {
	try {
		const parsed = JSON.parse(signature) as { utm: Utm; ref: string };
		return !utmPresent(parsed.utm) && !parsed.ref;
	} catch {
		return true;
	}
}

function resolvePageId(path: string): 'home' | 'work' {
	return /(?:^|\/)work\/?$/.test(path) ? 'work' : 'home';
}

function isSitePath(path: string): boolean {
	if (!path.startsWith('/')) return false;
	if (path.includes('..') || path.includes('.env')) return false;
	return true;
}

function jsonSetAdd(key: string, value: string): boolean {
	const current = storageGet(sessionStorage, key);
	const list: string[] = current ? (JSON.parse(current) as string[]) : [];
	if (list.includes(value)) return false;
	list.push(value);
	storageSet(sessionStorage, key, JSON.stringify(list));
	return true;
}

function touchSession(): void {
	storageSet(sessionStorage, LAST_TS_KEY, String(Date.now()));
}

function ensureIdentity(): { isNewSession: boolean } {
	let vid = storageGet(localStorage, VID_KEY);
	if (!vid) {
		vid = uuid();
		storageSet(localStorage, VID_KEY, vid);
	}
	visitorId = vid;

	const now = Date.now();
	const utcDay = new Date().toISOString().slice(0, 10);
	const incomingCampaign = campaignSignature();
	const storedSid = storageGet(sessionStorage, SID_KEY);
	const lastTs = Number(storageGet(sessionStorage, LAST_TS_KEY) || 0);
	const lastDay = storageGet(sessionStorage, UTC_DAY_KEY);
	const storedCampaign = storageGet(sessionStorage, CAMPAIGN_KEY);

	const idle = Boolean(lastTs) && now - lastTs > IDLE_MS;
	const newDay = Boolean(lastDay) && lastDay !== utcDay;
	const campaignChanged =
		Boolean(storedCampaign) &&
		!campaignIsEmpty(incomingCampaign) &&
		incomingCampaign !== storedCampaign;

	const isNewSession = !storedSid || idle || newDay || campaignChanged;
	if (isNewSession) {
		sessionId = uuid();
		storageSet(sessionStorage, SID_KEY, sessionId);
		storageRemove(sessionStorage, SECTIONS_KEY);
		storageRemove(sessionStorage, CARDS_KEY);
	} else {
		sessionId = storedSid ?? uuid();
	}

	storageSet(sessionStorage, LAST_TS_KEY, String(now));
	storageSet(sessionStorage, UTC_DAY_KEY, utcDay);
	if (!storedCampaign || !campaignIsEmpty(incomingCampaign)) {
		storageSet(sessionStorage, CAMPAIGN_KEY, incomingCampaign);
	}

	return { isNewSession };
}

function pageContext() {
	return {
		path: location.pathname,
		title: document.title,
		referrer: externalReferrer() || document.referrer || '',
		utm: parseUtm(),
	};
}

function deviceContext() {
	return {
		locale: navigator.language,
		timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
		viewport: { w: window.innerWidth, h: window.innerHeight },
		screen: {
			w: window.screen.width,
			h: window.screen.height,
			dpr: window.devicePixelRatio || 1,
		},
	};
}

function enqueue(name: string, props: EventProps = {}): void {
	if (!apiBase() || !visitorId || !sessionId) return;
	queue.push({
		event_id: uuid(),
		name,
		ts: new Date().toISOString(),
		props,
	});
	touchSession();
	if (queue.length >= 8) {
		void flush('fetch');
		return;
	}
	scheduleFlush();
}

export function track(name: string, props: EventProps = {}): void {
	enqueue(name, props);
}

function scheduleFlush(): void {
	if (flushTimer !== null) return;
	flushTimer = window.setTimeout(() => {
		flushTimer = null;
		void flush('fetch');
	}, FLUSH_DEBOUNCE_MS);
}

function takeBatch(): AnalyticsEvent[] {
	if (queue.length === 0) return [];
	const batch = queue.slice(0, MAX_EVENTS);
	while (batch.length > 1) {
		const body = buildBody(batch);
		if (new Blob([body]).size <= MAX_BODY_BYTES) break;
		batch.pop();
	}
	queue = queue.slice(batch.length);
	return batch;
}

function buildBody(events: AnalyticsEvent[]): string {
	return JSON.stringify({
		schema_version: 1,
		visitor_id: visitorId,
		session_id: sessionId,
		sent_at: new Date().toISOString(),
		page: pageContext(),
		context: deviceContext(),
		events,
	});
}

function collectUrl(): string {
	return `${apiBase()}${COLLECT_PATH}`;
}

function headers(): HeadersInit {
	const next: Record<string, string> = { 'Content-Type': 'application/json' };
	const key = writeKey();
	if (key) next.Authorization = `Bearer ${key}`;
	return next;
}

async function flush(mode: 'fetch' | 'beacon'): Promise<void> {
	if (sending && mode === 'fetch') return;
	if (!apiBase() || queue.length === 0) return;

	if (mode === 'beacon') {
		const events = takeBatch();
		if (events.length === 0) return;
		const body = buildBody(events);
		try {
			const blob = new Blob([body], { type: 'application/json' });
			navigator.sendBeacon(collectUrl(), blob);
		} catch {
			/* drop */
		}
		if (queue.length > 0) {
			const rest = takeBatch();
			if (rest.length > 0) {
				try {
					navigator.sendBeacon(
						collectUrl(),
						new Blob([buildBody(rest)], { type: 'application/json' }),
					);
				} catch {
					queue = [];
				}
			}
		}
		queue = [];
		return;
	}

	sending = true;
	try {
		while (queue.length > 0) {
			const events = takeBatch();
			if (events.length === 0) break;
			const body = buildBody(events);
			try {
				const res = await fetch(collectUrl(), {
					method: 'POST',
					headers: headers(),
					body,
					keepalive: true,
					mode: 'cors',
					credentials: 'omit',
				});
				if (!res.ok) {
					queue = [];
					break;
				}
			} catch {
				queue = [];
				break;
			}
		}
	} finally {
		sending = false;
	}
}

function activeMs(): number {
	const extra = document.visibilityState === 'visible' && visibleSince ? Date.now() - visibleSince : 0;
	return accumulatedMs + extra;
}

function startHeartbeat(): void {
	visibleSince = Date.now();
	heartbeatStarted = Date.now();
	heartbeatTimer = window.setInterval(() => {
		if (Date.now() - heartbeatStarted >= HEARTBEAT_MAX_MS) {
			if (heartbeatTimer !== null) window.clearInterval(heartbeatTimer);
			heartbeatTimer = null;
			return;
		}
		if (document.visibilityState !== 'visible') return;
		enqueue('engagement_heartbeat', { active_ms: activeMs(), page_id: pageId });
	}, HEARTBEAT_MS);
}

function observeSections(): void {
	const nodes = document.querySelectorAll<HTMLElement>('[data-section]');
	if (nodes.length === 0) return;

	const io = new IntersectionObserver(
		(entries) => {
			for (const entry of entries) {
				const id = entry.target.getAttribute('data-section');
				if (!id) continue;
				const existing = sectionTimers.get(id);
				if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
					if (existing) continue;
					sectionTimers.set(
						id,
						window.setTimeout(() => {
							sectionTimers.delete(id);
							if (jsonSetAdd(SECTIONS_KEY, id)) {
								enqueue('section_view', { section_id: id });
							}
							io.unobserve(entry.target);
						}, SECTION_DWELL_MS),
					);
				} else if (existing) {
					window.clearTimeout(existing);
					sectionTimers.delete(id);
				}
			}
		},
		{ threshold: [0.5] },
	);

	nodes.forEach((node) => io.observe(node));
}

function observeWorkCards(): void {
	const cards = document.querySelectorAll<HTMLElement>('[data-track-card]');
	if (cards.length === 0) return;

	const io = new IntersectionObserver(
		(entries) => {
			for (const entry of entries) {
				if (!entry.isIntersecting || entry.intersectionRatio < 0.5) continue;
				const slug = entry.target.getAttribute('data-work-slug');
				if (!slug) continue;
				if (jsonSetAdd(CARDS_KEY, slug)) {
					enqueue('work_card_view', { work_slug: slug });
				}
				io.unobserve(entry.target);
			}
		},
		{ threshold: [0.5] },
	);

	cards.forEach((card) => io.observe(card));
}

function onScroll(): void {
	const doc = document.documentElement;
	const scrollable = doc.scrollHeight - window.innerHeight;
	const percent = scrollable <= 0 ? 100 : Math.round((window.scrollY / scrollable) * 100);
	for (const mark of SCROLL_MARKS) {
		if (percent >= mark && !scrollSeen.has(mark)) {
			scrollSeen.add(mark);
			enqueue('scroll_depth', { percent: mark });
		}
	}
}

function closestTrack(target: EventTarget | null): HTMLElement | null {
	if (!(target instanceof Element)) return null;
	return target.closest('[data-track]');
}

function outboundChannel(href: string | null): 'email' | 'whatsapp' | 'instagram' | null {
	if (!href) return null;
	const value = href.toLowerCase();
	if (value.startsWith('mailto:')) return 'email';
	if (value.includes('wa.me/') || value.includes('api.whatsapp.com')) return 'whatsapp';
	if (value.includes('instagram.com')) return 'instagram';
	return null;
}

function onClick(event: MouseEvent): void {
	const el = closestTrack(event.target);
	if (!el) return;
	const elementId = el.dataset.track;
	if (!elementId || elementId === 'faq_item') return;

	const href = el instanceof HTMLAnchorElement ? el.getAttribute('href') : el.querySelector('a')?.getAttribute('href');
	const label = (el.getAttribute('data-track-label') || el.textContent || '').replace(/\s+/g, ' ').trim().slice(0, 120);
	const props: EventProps = {
		element_id: elementId,
		element_type: el.dataset.trackType || (el.tagName === 'BUTTON' ? 'button' : 'link'),
		label,
		section_id: el.closest('[data-section]')?.getAttribute('data-section') || undefined,
	};
	if (href) props.href = href;
	if (el.dataset.workSlug) props.work_slug = el.dataset.workSlug;
	if (el.dataset.trackGroup) props.group = el.dataset.trackGroup;
	if (el.dataset.trackTitle) props.title = el.dataset.trackTitle;
	if (el.dataset.trackIndex) props.index = Number(el.dataset.trackIndex);

	enqueue('click', props);

	const channel = outboundChannel(href);
	if (channel) {
		enqueue('outbound_click', { channel, element_id: elementId });
	}
}

function onFaqToggle(event: Event): void {
	const el = event.target;
	if (!(el instanceof HTMLDetailsElement)) return;
	if (el.dataset.track !== 'faq_item') return;
	enqueue('click', {
		element_id: 'faq_item',
		element_type: 'disclosure',
		question: el.dataset.trackQuestion || '',
		open: el.open,
		section_id: 'faq',
		label: el.dataset.trackQuestion || 'FAQ',
	});
}

function drainWindowQueue(): void {
	const w = window as PfWindow;
	w.pfTrack = track;
	const pending = w.pfQueue ?? [];
	w.pfQueue = [];
	for (const [name, props] of pending) {
		enqueue(name, props ?? {});
	}
}

function onHidden(): void {
	if (document.visibilityState === 'hidden') {
		if (visibleSince) {
			accumulatedMs += Date.now() - visibleSince;
			visibleSince = 0;
		}
		void flush(writeKey() ? 'fetch' : 'beacon');
		return;
	}
	visibleSince = Date.now();
}

export function initAnalytics(): void {
	if (booted || typeof window === 'undefined') return;
	booted = true;

	if (!apiBase()) {
		drainWindowQueue();
		return;
	}

	const path = location.pathname;
	if (!isSitePath(path)) return;

	pageId = resolvePageId(path);
	const { isNewSession } = ensureIdentity();

	if (isNewSession) {
		enqueue('session_start', {
			landing_path: path,
			referrer: externalReferrer() || document.referrer || '',
		});
	}
	enqueue('page_view', { page_id: pageId });
	drainWindowQueue();

	document.addEventListener('click', onClick);
	document.addEventListener('toggle', onFaqToggle, true);
	window.addEventListener('scroll', onScroll, { passive: true });
	document.addEventListener('visibilitychange', onHidden);
	window.addEventListener('pagehide', () => {
		void flush(writeKey() ? 'fetch' : 'beacon');
	});

	observeSections();
	observeWorkCards();
	onScroll();
	startHeartbeat();
}
