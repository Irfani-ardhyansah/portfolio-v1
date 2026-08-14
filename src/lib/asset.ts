/** Prefix public asset paths with Astro `base` (e.g. `/portfolio/`). */
export function withBase(path: string): string {
	const base = import.meta.env.BASE_URL.endsWith('/')
		? import.meta.env.BASE_URL
		: `${import.meta.env.BASE_URL}/`;
	return `${base}${path.replace(/^\//, '')}`;
}

/** @deprecated use withBase — kept for existing imports */
export const asset = withBase;
