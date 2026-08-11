export const site = {
	name: 'Irfan',
	fullName: 'Mochamad Irfani Ardhyansah',
	role: 'Fullstack Developer',
	headline: 'Irfan — Fullstack Developer',
	subheadline:
		'Fullstack developer with 4+ years building reliable web systems — bridging engineering and stakeholders to ship on time.',
	description:
		'Portfolio of Mochamad Irfani Ardhyansah, a fullstack developer focused on backend architecture, APIs, and client-facing project coordination.',
	location: 'Surabaya, Indonesia',
	nav: [
		{ label: 'About', href: '#about' },
		{ label: 'Work', href: '#work' },
		{ label: 'Services', href: '#services' },
		{ label: 'Contact', href: '#contact' },
	],
	ctas: {
		primary: { label: 'View projects', href: '#work' },
		secondary: { label: 'Hire me', href: '#contact' },
	},
	about: {
		title: 'Fullstack builder. Stakeholder-aware.',
		paragraphs: [
			'I am a fullstack developer based in Surabaya with 4+ years of experience across PHP, JavaScript, and modern web stacks — designing databases, building RESTful APIs, and shipping admin and user-facing modules.',
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
			impact:
				'Moved to a microservices architecture with REST APIs, Dockerized services, and gateway routing — improving maintainability and performance.',
			image: '/images/work-1.svg',
			imageAlt: 'Abstract illustration of a microservices architecture',
		},
		{
			title: 'Campus & Operations Platforms',
			role: 'Software engineer — integrated multiple applications in a large campus ecosystem.',
			challenge:
				'Separate modules for academics, health admin, mapping, and reporting needed consistent integration and reliable ops.',
			impact:
				'Delivered integrated web/mobile modules, ETL/reporting dashboards, geospatial mapping, and multi-stream CCTV tooling on Linux/Nginx infrastructure.',
			image: '/images/work-2.svg',
			imageAlt: 'Abstract illustration of an integrated platform ecosystem',
		},
		{
			title: 'SaaS Backend & Admin Modules',
			role: 'Backend engineer — database architecture, REST APIs, and admin web modules.',
			challenge:
				'SaaS features required solid data models, documented APIs, and close collaboration with frontend and business analysts.',
			impact:
				'Designed PostgreSQL schemas, built Laravel APIs with Swagger docs, and shipped admin modules while reinforcing backend best practices.',
			image: '/images/work-3.svg',
			imageAlt: 'Abstract illustration of SaaS backend and admin modules',
		},
	],
	beyondCode: {
		title: 'Beyond Code',
		subtitle: 'Leadership & collaboration',
		intro:
			'From April 2024 to August 2025 I served as Point of Contact (POC) / project liaison — bridging business stakeholders and technical teams while supervising delivery quality and timelines.',
		image: '/images/beyond-code.svg',
		imageAlt: 'Abstract illustration of a collaboration meeting',
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
			description:
				'Database design, microservices planning, and Laravel/Node backends built for scale and maintainability.',
		},
		{
			title: 'API & System Integration',
			description:
				'RESTful APIs, gateway setup, and integrations across services — including queues, Redis, and Dockerized deployments.',
		},
		{
			title: 'Fullstack Web Apps',
			description:
				'Admin panels and product UIs with React/Vue, plus backend modules — from requirements through delivery.',
		},
	],
	contact: {
		headline: 'Have a project or need a fullstack partner?',
		body: 'Send a short brief — I reply via email or WhatsApp. Based in Yogyakarta, Indonesia.',
		email: 'mohamadfani99@gmail.com',
		whatsapp: 'https://wa.me/6281332695709',
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
