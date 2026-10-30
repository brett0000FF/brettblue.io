// Everything on the page comes from this file. Edit here, then push to publish.

export const profile = {
	name: 'Brett Blue',
	title: 'Staff Technical Writer',
	about:
		'Staff Technical Writer passionate about distilling complex information into crisp documentation for developers. I enjoy using my technical background and communication expertise to design and scale documentation systems that deliver an exceptional user experience.',
	links: [
		{ label: 'Email', href: 'mailto:brettb@hey.com', text: 'brettb@hey.com' },
		{ label: 'LinkedIn', href: 'https://www.linkedin.com/in/brett-blue-04351367', text: 'LinkedIn' },
		{ label: 'GitHub', href: 'https://github.com/brett0000FF', text: 'GitHub' },
	],
};

export type Role = { title: string; dates: string };
export type Job = { company: string; dates: string; roles: Role[]; highlights: string[] };

export const experience: Job[] = [
	{
		company: 'Datadog',
		dates: 'Jun 2023 – Present',
		roles: [
			{ title: 'Staff Technical Writer', dates: 'Oct 2025 – Present' },
			{ title: 'Senior Technical Writer', dates: 'Jun 2023 – Oct 2025' },
		],
		highlights: [
			'Write developer documentation for OpenTelemetry and APM',
			'Launched the Datadog Docs AI chatbot',
			'Lead AI enablement and initiatives for the documentation team',
			'Introduced coding agents (Claude Code, Codex) into the docs team’s workflow for drafting, reviews, and docs maintenance',
		],
	},
	{
		company: 'Appian',
		dates: 'May 2021 – Jun 2023',
		roles: [{ title: 'Senior Information Developer', dates: 'May 2021 – Jun 2023' }],
		highlights: [
			'Led low-code developer documentation and product language guidelines as Process Mining Head Writer',
			'Collaborated with a team of 15 tech writers to write and maintain nearly 2,000 docs',
			'Created feature docs, installation guides, architecture overviews, and release notes in Markdown with a Docs as Code workflow',
			'Embedded with engineering teams to document complex topics like process mining and AI',
			'Built dynamic, maintainable content with Liquid and DataTables, including a searchable glossary and conditional content',
			'Developed internal tools for writers, including a content planning app that streamlined the team’s workflow',
			'Wrote UX content, ran UX content consultations, and created UX content standards',
			'Promoted from Information Developer II to Senior Information Developer; Top Performer award, 2021',
		],
	},
	{
		company: 'Fast Enterprises',
		dates: 'Jun 2016 – May 2021',
		roles: [{ title: 'Technical Writer', dates: 'Jun 2016 – May 2021' }],
		highlights: [
			'Supervised four technical writers creating developer documentation for an integrated software suite',
			'Researched new features through early builds and SME interviews, and documented them in release notes',
			'Enforced documentation standards for an internal code repository and version control system',
			'Performed UX reviews with developers across multiple areas of the software',
		],
	},
	{
		company: 'TDS Telecom',
		dates: 'Dec 2014 – May 2016',
		roles: [{ title: 'IT Architect Intern', dates: 'Dec 2014 – May 2016' }],
		highlights: [
			'Created reference architecture documents for the wireline and cable businesses',
			'Contributed to software requirement specification documents',
		],
	},
];

export const skills = [
	{
		group: 'AI for docs',
		items: ['AI docs assistants (RAG)', 'AI answer evaluation', 'LLM-ready docs (llms.txt)', 'AI enablement', 'Prompt engineering'],
	},
	{
		group: 'AI agents',
		items: ['Claude Code', 'OpenAI Codex', 'Agentic docs workflows', 'AGENTS.md & context files', 'MCP'],
	},
	{
		group: 'Strategy',
		items: ['Documentation strategy', 'Information architecture', 'Docs analytics', 'Program leadership', 'Mentoring writers'],
	},
	{
		group: 'Developer docs',
		items: ['API & reference docs', 'Tutorials & how-tos', 'Release notes', 'Technical diagrams', 'UX writing'],
	},
	{
		group: 'Docs as Code',
		items: ['Markdown', 'Git & GitHub', 'Hugo', 'Astro', 'Docs CI/CD', 'Vale linting', 'Liquid'],
	},
	{
		group: 'Domain',
		items: ['Observability', 'OpenTelemetry', 'APM & tracing'],
	},
	{ group: 'Languages', items: ['Python', 'JavaScript', 'SQL', 'YAML'] },
];

export const education = [
	{
		school: 'University of Wisconsin–Madison',
		degree: 'B.S. Computer Science',
		dates: '2013 – 2016',
	},
];
