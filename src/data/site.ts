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
		'Portfolio of Mochamad Irfani Ardhyansah, a fullstack developer based in Surabaya, Indonesia — focused on backend architecture, APIs, and client-facing project coordination.',
	location: 'Surabaya, Indonesia',
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
		allWork: { label: 'View all work', href: '/work' },
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
			title: 'E-Commerce Platform: Features, Support & Architecture',
			role: 'Backend developer on an e-commerce platform — features, user support, integrations, and architecture.',
			challenge:
				'The product needed day-to-day feature delivery and user support while the underlying monolith was becoming a bottleneck for scale.',
			impactParts: [
				{ text: 'Owned end-to-end backend work: ', accent: false },
				{ text: 'building new features, fixing bugs', accent: true },
				{ text: ', and ', accent: false },
				{ text: 'working directly with end users', accent: true },
				{
					text: ' to resolve issues and gather feedback — while ',
					accent: false,
				},
				{
					text: 'coordinated with a central/head office team on data integration',
					accent: true,
				},
				{
					text: ', and led the migration from monolith to microservices (Laravel, RabbitMQ, Kong Gateway, Docker) for long-term scalability.',
					accent: false,
				},
			],
			impactHighlight: '',
			impactMetric: '',
			impactDetail: '',
			stack: 'laravel · rabbitmq · kong gateway · docker',
			image: '/images/work-1.svg',
			imageAlt: 'Illustration of an e-commerce platform with microservices and integrations',
		},
		{
			title: 'Campus & Operations Platforms',
			role: 'Software engineer — integrated multiple applications in a large campus ecosystem.',
			challenge:
				'Separate modules for academics, health admin, mapping, and reporting needed consistent integration and reliable ops.',
			impactHighlight:
				'Unified disconnected campus systems into one reliable platform',
			impactMetric: '',
			impactDetail:
				'integrated a Health Management System, Academic Information System (Vue.js), RFID-based Library Application (C#), geospatial mapping with CCTV data, and SmartClass multi-stream CCTV — plus ETL/reporting with Pentaho on PostgreSQL.',
			stack: 'vue.js · postgresql · leaflet · pentaho',
			image: '/images/work-2.svg',
			imageAlt: 'Illustration of campus platform modules including GIS and CCTV',
		},
		{
			title: 'Backend at Scale — Kledo',
			role: 'Backend Developer — shipping features safely in a large production SaaS (Oct 2025 – Present).',
			challenge:
				'Every change lands in a busy production system — with many active users and multiple developers touching the same mature codebase.',
			impactParts: [
				{ text: 'Working within a ', accent: false },
				{ text: 'large, mature codebase', accent: true },
				{ text: ' serving ', accent: false },
				{ text: '250K+ users', accent: true },
				{ text: ', with a ', accent: false },
				{ text: 'growing team of developers', accent: true },
				{
					text: ' — where every feature and bug fix requires careful coordination to avoid breaking existing functionality. Focus on query optimization, feature development, and safe, well-tested changes at scale.',
					accent: false,
				},
			],
			impactHighlight: '',
			impactMetric: '',
			impactDetail: '',
			stack: 'laravel · queue · mysql · sql optimization',
			image: '/images/work-3.svg',
			imageAlt: 'Illustration of a large-scale SaaS backend and database optimization',
		},
		{
			title: 'International Freelance Delivery',
			role: 'Web Developer — freelance work for a Canada-based company, concurrent with full-time role.',
			challenge:
				'Existing admin interface and database structures needed stability fixes and new feature support (EOS and VTO features) without disrupting active users.',
			impactHighlight:
				'Delivered stable, maintainable features for an international client',
			impactMetric: '',
			impactDetail:
				'while coordinating closely with a remote team lead across time zones — including admin UI work, database design for EOS/VTO features, and stability fixes on CakePHP/MySQL.',
			stack: 'php · cakephp · jquery · mysql',
			image: '/images/work-4.svg',
			imageAlt: 'Illustration of remote freelance delivery across time zones',
		},
	],
	workCatalog: {
		careerProgression: [
			{ label: 'Backend Developer @ Cyber Olympus', detail: 'Monolith to Microservices Migration' },
			{ label: 'Software Engineer', detail: 'Naval Academy' },
			{ label: 'PIC (PM equivalent)', detail: 'Military Academy' },
			{ label: 'Backend Engineer @ Maxxima Innovative Engineering', detail: 'SaaS Academic' },
			{
				label: 'Backend Developer @ Kledo',
				detail: 'SaaS Accounting Application',
				status: 'Present',
			},
		],
		professional: [
			{
				title: 'Backend Developer — Kledo',
				role: 'Backend Developer',
				period: 'Oct 2025 – Present',
				org: 'Kledo',
				descriptionParts: [
					{ text: 'Working within a ', accent: false },
					{ text: 'large, mature codebase', accent: true },
					{ text: ' serving ', accent: false },
					{ text: '250K+ users', accent: true },
					{ text: ', with a ', accent: false },
					{ text: 'growing team of developers', accent: true },
					{
						text: ' — where every feature and bug fix requires careful coordination to avoid breaking existing functionality across a big, actively-used system. Focus on query optimization, feature development, and safe, well-tested changes at scale.',
						accent: false,
					},
				],
				stack: 'laravel · queue · mysql · sql optimization',
				category: 'Professional',
				links: [{ label: 'View live →', href: 'https://kledo.com' }],
			},
			{
				title: 'Backend Engineer — SaaS Academic System',
				role: 'Backend Engineer',
				period: 'Aug 2025 – Oct 2025',
				org: 'Maxxima Innovative Engineering',
				descriptionHighlight: 'Chose to return to technical depth after a leadership role —',
				description:
					'after leading cross-functional delivery as PIC, moved back into a hands-on backend seat: designing SaaS database architecture, building RESTful APIs, and partnering with frontend and business analyst teams to ship features fast.',
				stack: 'laravel · postgresql · swagger',
				badge: 'Internal / Confidential',
				category: 'Professional',
			},
			{
				title: 'PIC (Project-in-Charge) — Military Academy Project',
				role: 'PIC / Project-in-Charge',
				period: 'Apr 2024 – Aug 2025',
				org: 'Maxxima Innovative Engineering',
				descriptionHighlight:
					'Promoted to PIC — a role equivalent to Project Manager —',
				description:
					'leading end-to-end delivery across operator, hardware, and technical teams. Owned server infrastructure, feature roadmap coordination, and served as the primary technical liaison between field users and engineering. Delivered enhancements across Ebook, Room Management, Guest Book (C#), and E-Kiosk systems, ran user training programs, and refactored core modules including Geospatial mapping, Table Reporting, and Chart Integration.',
				stack: 'leadership · geospatial · c# · server ops',
				badge: 'Internal / Confidential',
				category: 'Professional',
			},
			{
				title: 'Software Engineer — Naval Academy Project (incl. War Gaming System)',
				role: 'Software Engineer',
				period: 'Oct 2022 – Apr 2024',
				org: 'Maxxima Innovative Engineering',
				description:
					'Owned technical delivery across a portfolio of applications — remediating penetration test findings (rate limiting, CAPTCHA, access control hardening, scheduled backups), enhancing Health Management, Library Management, Multimedia, and Asset Management systems, and migrating the Academic Information System from CodeIgniter 3 to Vue.js. Also built a 360° virtual tour feature with Leaflet, and developed formation and ammunition-storage features for a War Gaming simulation system.',
				stack: 'vue.js · c# · leaflet · postgresql · security hardening',
				badge: 'Internal / Confidential',
				category: 'Professional',
			},
			{
				title: 'E-Commerce Platform: Features, Support & Architecture',
				role: 'Backend Developer',
				period: 'Sept 2021 – Oct 2022',
				org: 'Cyber Olympus',
				descriptionParts: [
					{ text: 'Backend developer for an e-commerce platform — ', accent: false },
					{ text: 'building new features, fixing bugs', accent: true },
					{ text: ', and ', accent: false },
					{ text: 'working directly with end users', accent: true },
					{
						text: ' to resolve issues and gather feedback. Also ',
						accent: false,
					},
					{
						text: 'coordinated with a central/head office team on data integration',
						accent: true,
					},
					{
						text: " requirements, while leading the platform's migration from a monolith to a microservices architecture to support long-term scalability.",
						accent: false,
					},
				],
				stack: 'laravel · rabbitmq · kong gateway · docker',
				category: 'Professional',
			},
		],
		freelance: [
			// TODO: confirm dates for Void Serverlist & WaterSolution
			{
				title: 'Void Serverlist',
				role: 'Freelance — Fullstack Developer',
				period: '',
				org: 'via Upwork',
				description:
					'Minecraft server listing platform with member area and admin CMS — visitors browse, filter, and vote for servers; owners self-manage their listings with auto-updated online status and player counts synced via the Votifier plugin.',
				stack: 'laravel 11 · alpine.js · tailwind · mysql',
				badge: 'Upwork',
				category: 'Freelance',
				links: [{ label: 'View live →', href: 'http://voidserverlist.com' }],
			},
			{
				title: 'WaterSolution (Water Solutions Technology)',
				role: 'Freelance — Fullstack Developer',
				period: '',
				org: 'via Upwork',
				description:
					'Corporate website with member portal and admin CMS for a water efficiency advisory firm — gated premium content (case studies, webinars, white papers), plus admin tools for managing leads, events, and consultation requests.',
				stack: 'laravel 12 · alpine.js · tailwind · datatables',
				badge: 'Upwork',
				category: 'Freelance',
				links: [{ label: 'View live →', href: 'http://woterz.com/industries' }],
			},
			{
				title: 'Booking Management System (HotelDruid Customization)',
				role: 'Freelance — Backend Developer',
				period: 'Jul – Aug 2025',
				org: 'via Upwork',
				description:
					'Customized an open-source hotel PMS (HotelDruid) with a custom room-bidding module — guests submit stay requests, admins approve them, and the highest bid for overlapping dates automatically wins, with synced reservations and payment verification.',
				stack: 'php · mysql · pdo · cron jobs',
				badge: 'Upwork',
				category: 'Freelance',
			},
			{
				title: 'Admin Interface & Database Redesign (EOS/VTO features)',
				role: 'Web Developer',
				period: 'May 2023 – May 2025',
				org: 'Resolve Corporation, Canada',
				stack: 'php · cakephp · jquery · mysql',
				badge: 'Upwork',
				category: 'Freelance',
			},
			{
				title: 'Laravel CRUD Project',
				role: 'Backend Developer',
				period: 'May – Aug 2023',
				org: 'via Upwork',
				stack: 'laravel',
				badge: 'Upwork',
				category: 'Freelance',
			},
			// TODO: confirm dates for the four team freelance projects below
			{
				title: 'POS System — Equipment Rental (Multi-Outlet)',
				role: 'Freelance Team — Web Developer',
				period: '',
				description:
					'Point-of-sale system for multi-outlet equipment rental — managing borrow/return transactions, stock, deposits, payment/penalty tracking, packages, customers, and revenue reports with role-based access control.',
				stack: 'yii2 · mysql · adminlte · docker',
				badge: 'Freelance Team',
				category: 'Freelance',
			},
			{
				title: 'Sales & Inventory System — Retail Distributor',
				role: 'Freelance Team — Web Developer',
				period: '',
				description:
					'Sales and inventory management system for a bottled water distributor — handling purchase/sales transactions with automatic stock updates, journal posting, and role-based access for cashier, warehouse, and owner.',
				stack: 'codeigniter 3 · mysql · adminlte · dompdf',
				badge: 'Freelance Team',
				category: 'Freelance',
			},
			{
				title: 'Accounting Information System — Agricultural Retail',
				role: 'Freelance Team — Web Developer',
				period: '',
				description:
					'Accounting system for an agricultural supply store — tracking stock, purchase/sales transactions with tax handling, automated journal and ledger posting, and generating financial reports (P&L, balance sheet) by period.',
				stack: 'codeigniter 3 · mysql · datatables · dompdf',
				badge: 'Freelance Team',
				category: 'Freelance',
			},
			{
				title: 'E-Commerce Platform — Custom Sticker & Printing Business',
				role: 'Freelance Team — Web Developer',
				period: '',
				description:
					'E-commerce site with customer portal and admin dashboard for a custom printing business — custom-size checkout, design upload/approval flow, Midtrans payment integration, RajaOngkir shipping calculation, and sales reporting.',
				stack: 'laravel 8 · midtrans · rajaongkir api · mysql',
				badge: 'Freelance Team',
				category: 'Freelance',
			},
		],
		personal: [
			{
				title: 'Family Suites',
				role: 'Personal Project — Full-Stack',
				period: '',
				descriptionParts: [
					{ text: 'A ', accent: false },
					{ text: 'modular full-stack platform', accent: true },
					{
						text: ' for family life — one ecosystem spanning identity, a ',
						accent: false,
					},
					{ text: 'family relationship graph', accent: true },
					{ text: ', events & memorials, and ', accent: false },
					{ text: 'financial workflows', accent: true },
					{
						text: '. The backend exposes a modular API with ',
						accent: false,
					},
					{ text: 'authentication & security boundaries', accent: true },
					{
						text: ' (passwordless family-code login, JWT + refresh rotation, secondary gates for sensitive modules), ',
						accent: false,
					},
					{ text: 'async data import', accent: true },
					{
						text: ', media/notifications, and audit-ready admin controls. The frontend is a modular SPA with graph and map visualizations, rich-text memorials, financial dashboards, Web Push, and an API/Mock switcher for development. Family Core is still UI-in-development with some mock data; Household remains planned.',
						accent: false,
					},
				],
				stackLines: [
					{
						label: 'BE',
						value:
							'Node.js · TypeScript · Express · Knex · MySQL · JWT · Vitest · Docker',
					},
					{
						label: 'FE',
						value:
							'React · TypeScript · Vite · React Router · Tailwind · React Flow · Leaflet · TipTap · Docker',
					},
				],
				category: 'Personal',
			},
			{
				title: 'Scholarship Decision Support System (SAW Method) — Final Thesis',
				role: 'Personal Project — Final Thesis (Tugas Akhir)',
				// TODO: confirm thesis year / graduation date
				period: '',
				description:
					'Decision support system for university scholarship selection using the SAW (Simple Additive Weighting) method — multi-role dashboard for students, admin, and leadership, with automated ranking calculation, document upload, and PDF/Excel export.',
				stack: 'laravel 5.4 · chart.js · yajra datatables · mysql',
				category: 'Personal',
			},
			{
				title: 'Internship Registration System',
				role: 'Web Developer',
				period: 'Jun – Nov 2020',
				org: 'Kreasi Kode (Intern)',
				stack: 'backend logic · registration workflow',
				category: 'Personal',
			},
		],
	},
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
		companyContext: 'at Maxxima Innovative Engineering',
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
		{
			title: 'Server Setup & Configuration',
			pitch: 'A production-ready server — without the guesswork.',
			description:
				'From a blank VPS to a secure, deployable stack: Linux hardening, Nginx, SSL, Docker, databases, and environment setup — so your app ships on infrastructure you can trust.',
			icon: 'server' as const,
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
				"Yes — I'm based in Surabaya (GMT+7) and regularly work async with clients across timezones, with overlap windows for calls when needed.",
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
		body: 'Send a short brief — I reply via email or WhatsApp. Based in Surabaya, Indonesia.',
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
};
