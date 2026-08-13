export const site = {
	/** Short display name used in nav/hero (nickname of Irfani) */
	name: 'Irfan',
	/** Legal / footer name — "Irfani" is correct, not a typo of Irfan */
	fullName: 'Mochamad Irfani Ardhyansah',
	role: 'Fullstack Developer',
	headline: 'Irfan — Fullstack Developer',
	subheadline:
		'Fullstack developer with 4+ years building reliable web systems — bridging engineering and stakeholders to ship on time.',
	valueProp: [
		{ text: "I don't just write code — I ", accent: false },
		{ text: 'translate business needs into working software', accent: true },
		{ text: ', and keep both ', accent: false },
		{ text: 'engineers and stakeholders aligned', accent: true },
		{ text: '.', accent: false },
	],
	description:
		'Portfolio of Mochamad Irfani Ardhyansah, a fullstack developer focused on backend architecture, APIs, and client-facing project coordination.',
	location: 'Yogyakarta, Indonesia',
	nav: [
		{ label: 'About', href: '#about' },
		{ label: 'Work', href: '#work' },
		{ label: 'Reviews', href: '#reviews' },
		{ label: 'Services', href: '#services' },
		{ label: 'Contact', href: '#contact' },
	],
	ctas: {
		primary: { label: 'View projects', href: '#work' },
		secondary: {
			label: "Let's talk about your project",
			labelShort: 'Start a project',
			href: '#contact',
		},
	},
	availability: 'Currently taking on new projects for Q1 2026',
	stats: [
		{ value: '4+', label: 'Years Experience' },
		{ value: '15+', label: 'Projects Delivered' },
		{ value: '1.5', label: 'Yrs as POC / Liaison' },
		{ value: '5.0★', label: 'Upwork Rating' },
	],
	about: {
		title: 'Fullstack builder. Stakeholder-aware.',
		paragraphs: [
			'I am a fullstack developer based in Yogyakarta with 4+ years of experience across PHP, JavaScript, and modern web stacks — designing databases, building RESTful APIs, and shipping admin and user-facing modules.',
			'Beyond code, I have spent ~1.5 years as a project liaison (POC): coordinating clients, operations, and engineering, gathering feedback, and keeping delivery on track without sacrificing technical quality.',
		],
		techStack: [
			'PHP',
			'JavaScript',
			'Go',
			'SQL',
			'Laravel',
			'React.js',
			'Vue.js',
			'Node.js',
			'Flutter',
			'PostgreSQL',
			'MySQL',
			'MongoDB',
			'Redis',
			'Docker',
			'RabbitMQ',
			'Nginx',
			'Git',
		],
	},
	work: [
		{
			title: 'Monolith to Microservices Migration',
			role: 'Backend developer — led migration and API design for a growing product platform.',
			challenge:
				'A monolith limited scalability and slowed feature delivery as the product grew.',
			impactHighlight:
				'Cut feature delivery time without breaking existing systems',
			// TODO: isi angka aktual — e.g. "by ~X%" or "from N days to M days"
			impactMetric: '',
			impactDetail:
				'moved to a microservices architecture with REST APIs, Dockerized services, and gateway routing, improving maintainability and performance.',
			stack: 'queue · worker · pdf',
			image: '/images/work-1.svg',
			imageAlt: 'Illustration of a microservices pipeline with queue, worker, and output',
		},
		{
			title: 'Campus & Operations Platforms',
			role: 'Software engineer — integrated multiple applications in a large campus ecosystem.',
			challenge:
				'Separate modules for academics, health admin, mapping, and reporting needed consistent integration and reliable ops.',
			impactHighlight:
				'Unified disconnected systems into one reliable platform',
			// TODO: isi angka aktual — e.g. "X apps integrated" or "Y teams on one platform"
			impactMetric: '',
			impactDetail:
				'delivered integrated web/mobile modules, ETL/reporting dashboards, geospatial mapping, and multi-stream CCTV tooling on Linux/Nginx infrastructure.',
			stack: 'etl · gis · cctv',
			image: '/images/work-2.svg',
			imageAlt: 'Illustration of ETL, GIS mapping, and CCTV streams in one platform',
		},
		{
			title: 'SaaS Backend & Admin Modules',
			role: 'Backend engineer — database architecture, REST APIs, and admin web modules.',
			challenge:
				'SaaS features required solid data models, documented APIs, and close collaboration with frontend and business analysts.',
			impactHighlight:
				'Shipped a scalable, well-documented backend any team can build on',
			// TODO: isi angka aktual — e.g. "X endpoints documented" or "N admin modules shipped"
			impactMetric: '',
			impactDetail:
				'designed PostgreSQL schemas, built Laravel APIs with Swagger docs, and shipped admin modules while reinforcing backend best practices.',
			stack: 'postgresql · laravel · swagger',
			image: '/images/work-3.svg',
			imageAlt: 'Illustration of PostgreSQL, Laravel API, and Swagger documentation',
		},
	],
	testimonials: [
		{
			project: 'Customization of Open-Source Booking Management Software',
			rating: 5,
			quote:
				'I worked with Irfani on a project and was very satisfied. He is professional, reliable, and delivers high-quality work. Highly recommended.',
			tags: ['Professional', 'Reliable', 'Committed to Quality'],
			source: 'Upwork',
		},
		{
			project: 'Laravel CRUD project and show results',
			rating: 5,
			quote:
				"The developer demonstrated exceptional skills and proficiency in Laravel, showcasing a deep understanding of the framework's intricacies. Their code was not only well-structured and efficient but also highly maintainable. Whenever challenges arose, they proved to be a truly resourceful problem-solver, devising innovative solutions to complex issues.",
			tags: ['Solution Oriented', 'Detail Oriented', 'Committed to Quality', 'Reliable'],
			source: 'Upwork',
		},
	],
	beyondCode: {
		title: 'Beyond Code',
		subtitle: 'Leadership & collaboration',
		intro:
			'From April 2024 to August 2025 I served as Point of Contact (POC) / project liaison — bridging business stakeholders and technical teams while supervising delivery quality and timelines.',
		image: '/images/beyond-code.svg',
		imageAlt: 'Flow diagram: Client connected to You as POC connected to Dev Team',
		points: [
			{
				label: 'Cross-team coordination',
				detail:
					'Coordinated clients, hardware, operations, and development teams so execution stayed aligned across handoffs.',
			},
			{
				label: 'Stakeholder bridge',
				detail:
					'Translated business needs into technical workstreams and kept communication clear between stakeholders and engineers.',
			},
			{
				label: 'Delivery & enablement',
				detail:
					'Supervised quality and timeliness, led user training, gathered feedback, and supported planning, documentation, and client presentations.',
			},
		],
	},
	services: [
		{
			title: 'Backend Architecture',
			pitch: 'Built to scale without a rewrite.',
			description:
				'Database design, microservices planning, and Laravel/Node backends built for scale and maintainability.',
			icon: 'architecture' as const,
		},
		{
			title: 'API & System Integration',
			pitch: 'Systems that finally talk to each other.',
			description:
				'RESTful APIs, gateway setup, and integrations across services — including queues, Redis, and Dockerized deployments.',
			icon: 'integration' as const,
		},
		{
			title: 'Fullstack Web Apps',
			pitch: 'From requirements to shipped product — no gaps.',
			description:
				'Admin panels and product UIs with React/Vue, plus backend modules — from requirements through delivery.',
			icon: 'browser' as const,
		},
	],
	process: {
		title: 'How I work',
		subtitle: 'A simple, transparent process from first message to shipped product.',
		steps: [
			{
				title: 'Discovery call',
				detail: 'A short call to understand your goals, scope, and timeline.',
			},
			{
				title: 'Proposal & scope',
				detail:
					'You get a clear plan — deliverables, timeline, and cost, no surprises.',
			},
			{
				title: 'Build & check-ins',
				detail:
					"Regular updates as I build, so you're never left wondering what's happening.",
			},
			{
				title: 'Handoff & support',
				detail: 'Clean handoff with documentation, plus support after launch.',
			},
		],
	},
	faq: [
		{
			question: 'Do you work with clients in different timezones?',
			answer:
				"Yes — I'm based in Yogyakarta (GMT+7) and regularly work async with clients across timezones, with overlap windows for calls when needed.",
		},
		{
			question: 'How do you handle payments?',
			answer:
				'Typically milestone-based for larger projects, or hourly for smaller/ongoing work — details agreed before we start.',
		},
		{
			question: 'Can you sign an NDA?',
			answer: 'Yes, happy to sign an NDA before discussing project details.',
		},
		{
			question: 'What if I only have a rough idea, not a full spec?',
			answer:
				"That's fine — the discovery call is exactly for turning a rough idea into a clear, scoped plan.",
		},
	],
	contact: {
		headline: 'Have a project or need a fullstack partner?',
		body: 'Send a short brief — I reply via email or WhatsApp. Based in Yogyakarta, Indonesia.',
		/** Split to reduce plain-text scraping; assembled in Contact.astro script */
		emailUser: 'mohamadfani99',
		emailDomain: 'gmail.com',
		waDigits: '6281332695709',
		phoneDisplay: '+62 813-3269-5709',
		socials: [
			{ label: 'Instagram', href: 'https://instagram.com/irfani_ardhyan' },
		],
	},
	introModules: [
		'backend engineering',
		'system architecture',
		'communication & stakeholder management',
		'leadership: 1.5yr as point of contact',
		'compiling profile',
	],
} as const;
