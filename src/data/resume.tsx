import {
	CitiLogo,
	McGillLogo,
	PostgreSQLLogo,
	SGLogo,
	StockLogo,
	TailwindCSSLogo,
} from "../components/logos";
import Image from "next/image";

export interface MapLocationEntry {
	type: "job" | "education";
	name: string;
	logo: React.ReactNode;
	positions: {
		id: string;
		title: string;
		points?: string[];
		timeline: string;
	}[];
}

export interface MapLocation {
	id: string;
	name: string;
	coordinates: [number, number]; // [longitude, latitude]
	entries: MapLocationEntry[];
}

export interface SkillLeaf {
	name: string;
	icon?: React.ReactNode;
	proficiency?:
		| "beginner"
		| "intermediate"
		| "advanced"
		| "expert"
		| "fluent";
	yearsOfExperience?: number;
}

export interface SkillBranch {
	name: string;
	children: (SkillBranch | SkillLeaf)[];
}

export interface SkillTree {
	name: string;
	icon?: React.ReactNode;
	branches: SkillBranch[];
}

export const JOBS = [
	{
		name: "Citi Bank",
		logo: <CitiLogo className="h-10 w-10 mb-1" />,
		positions: [
			{
				id: "citi_avp",
				title: "Software Engineer, Associate Vice President | Equities Market Data",
				points: [],
				timeline: "Current Position",
			},
			{
				id: "citi_analyst2",
				title: "Software Engineer, Analyst II | Equities Market Data",
				points: [
					"Led a team of 3 for the development of a trading platform, gathering requirements through direct client interactions, managing project deadlines, and ensuring timely feature delivery.",
					"Built customizable dashboards for data visualization and manipulation, including filtering and data slicing for portfolio performances using AngularJs and Spring Boot.",
					"Reorganized and optimized the loading of traded stocks into balanced groups using KDB+/q, improving feed handler efficiency by 20% and eliminating timeout issues.",
					"Increased DevOps productivity by 30% by building CI/CD pipelines to optimize the testing, building, and deployment of critical business services.",
					"Engineered a monitoring tool for our support team enabling rapid identification of production issues and faster recovery time of services using Grafana and KDB+/q.",
					"Mentored junior developers and interns, fostering technical growth and supporting the expansion of our team.",
				],
				timeline: "July 2024 - July 2025",
			},
			{
				id: "citi_analyst",
				title: "UI Developer, Analyst | Rates Trading",
				points: [
					"Migrated application from WPF to Angular to reduce load times by at least 150% and improve user experience.",
					"Reduced department costs by integrating Bloomberg features into our trading application across multiple flows.",
					"Heavily tested front-end components using regression and unit testing to ensure their consistency and functionalities using the jest framework.",
					"Successfully coordinated multiple releases, overseeing and ensuring smooth launch and troubleshooting, and resolving production issues to ensure high-quality customer service.",
				],
				timeline: "July 2023 - July 2024",
			},
		],
	},
	{
		name: "Société Générale",
		logo: <SGLogo className="h-8 w-8" />,
		positions: [
			{
				id: "sg_internship",
				title: "Full Stack Developer, Intern",
				points: [
					"Streamlined the communication process between SG and vendors by designing and developing a website that allows the user to answer questionnaires, leave comments, and upload attachments.",
					"Designed the database to 3NF and developed CRDU APIs to save, modify, and delete vendor responses.",
					"Designed and built the front end of the questionnaire page using React, while using hooks and redux to manage the different states to decrease by 15% the number of API calls being made and allow a faster and more responsive user experience.",
				],
				timeline: "May 2022 - August 2022",
			},
		],
	},
];

export const EDUCATION = [
	{
		name: "McGill University",
		logo: <McGillLogo className="h-12 w-12" />,
		positions: [
			{
				id: "bachelor's",
				title: "Bachelor of Engineering, Computer Engineering",
				timeline: "2019 - 2023",
			},
		],
	},
	{
		name: "Collège Notre Dame de Jamhour",
		logo: (
			<Image
				width={0}
				height={0}
				className="h-6 w-6"
				src="/images/cndj.png"
				alt="cndj logo"
			/>
		),
		positions: [
			{
				id: "highschool",
				title: "French baccalaureate - Highest Honors",
				timeline: "2016 - 2019",
			},
		],
	},
	{
		name: "EFIR - French International School of Riyadh",
		logo: null,
		positions: [
			{
				id: "highschool_riyadh",
				title: "Middle School",
				timeline: "2006 - 2016",
			},
		],
	},
	{
		name: "French School - Kuwait",
		logo: null,
		positions: [
			{
				id: "highschool_kuwait",
				title: "Kindergarten",
				timeline: "2003 - 2006",
			},
		],
	},
	{
		name: "Born in Khobar, Saudi Arabia",
		logo: null,
		positions: [
			{
				id: "born_khobar",
				title: "Born in Khobar, Saudi Arabia",
				timeline: "2001 - 2003",
			},
		],
	},
];

export const MAP_LOCATIONS: MapLocation[] = [
	{
		id: "toronto",
		name: "Toronto, Canada",
		coordinates: [-79.3832, 43.6532],
		entries: [
			{
				type: "job",
				name: JOBS[0].name,
				logo: JOBS[0].logo,
				positions: JOBS[0].positions,
			},
		],
	},
	{
		id: "montreal",
		name: "Montreal, Canada",
		coordinates: [-73.5674, 45.5019],
		entries: [
			{
				type: "job",
				name: JOBS[1].name,
				logo: JOBS[1].logo,
				positions: JOBS[1].positions,
			},
			{
				type: "education",
				name: EDUCATION[0].name,
				logo: EDUCATION[0].logo,
				positions: EDUCATION[0].positions,
			},
		],
	},
	{
		id: "beirut",
		name: "Beirut, Lebanon",
		coordinates: [35.4955, 33.8938],
		entries: [
			{
				type: "education",
				name: EDUCATION[1].name,
				logo: EDUCATION[1].logo,
				positions: EDUCATION[1].positions,
			},
		],
	},
	{
		id: "riyadh",
		name: "Riyadh, Saudi Arabia",
		coordinates: [34.7122, 24.7136],
		entries: [
			{
				type: "education",
				name: EDUCATION[2].name,
				logo: EDUCATION[2].logo,
				positions: EDUCATION[2].positions,
			},
		],
	},
	{
		id: "kuwait",
		name: "Kuwait City, Kuwait",
		coordinates: [47.9774, 29.3759],
		entries: [
			{
				type: "education",
				name: EDUCATION[3].name,
				logo: EDUCATION[3].logo,
				positions: EDUCATION[3].positions,
			},
		],
	},
	{
		id: "khobar",
		name: "Khobar, Saudi Arabia",
		coordinates: [50.2092, 26.2175],
		entries: [
			{
				type: "education",
				name: EDUCATION[4].name,
				logo: EDUCATION[4].logo,
				positions: EDUCATION[4].positions,
			},
		],
	},
];

export const CERTIFICATES = [
	{
		name: "Quantitative Finance & Algoritmic Trading in Python",
		logo: <StockLogo className="h-8 w-8" />,
		provider: "Udemy",
		timeline: "2025",
	},
	{
		name: "Tailwind CSS v4 - Beginner to Pro",
		logo: <TailwindCSSLogo className="h-8 w-8" />,
		provider: "Udemy",
		timeline: "2025",
	},
	{
		name: "PostgreSQL for Everybody",
		logo: <PostgreSQLLogo className="h-8 w-8" />,
		provider: "Coursera",
		timeline: "2022",
	},
];

export const SKILLS: SkillTree[] = [
	{
		name: "Software",
		branches: [
			{
				name: "Frontend",
				children: [
					{
						name: "React",
						proficiency: "advanced",
						yearsOfExperience: 4,
					},
					{
						name: "Angular",
						proficiency: "intermediate",
						yearsOfExperience: 2,
					},
					{
						name: "Tailwind CSS",
						proficiency: "advanced",
						yearsOfExperience: 3,
					},
				],
			},
			{
				name: "Backend",
				children: [
					{
						name: "Java",
						proficiency: "advanced",
						yearsOfExperience: 3,
					},
					{
						name: "Spring Boot",
						proficiency: "advanced",
						yearsOfExperience: 3,
					},
					{
						name: "Python",
						proficiency: "intermediate",
						yearsOfExperience: 2,
					},
					{
						name: "FastAPI",
						proficiency: "intermediate",
						yearsOfExperience: 1,
					},
				],
			},
			{
				name: "Data",
				children: [
					{
						name: "KDB+/q",
						proficiency: "intermediate",
						yearsOfExperience: 1,
					},
					{
						name: "PostgreSQL",
						proficiency: "advanced",
						yearsOfExperience: 3,
					},
				],
			},
			{
				name: "DevOps",
				children: [
					{
						name: "CI/CD Pipelines",
						proficiency: "intermediate",
						yearsOfExperience: 2,
					},
					{
						name: "Docker",
						proficiency: "intermediate",
						yearsOfExperience: 2,
					},
				],
			},
		],
	},
	{
		name: "Soft Skills",
		branches: [
			{
				name: "Leadership",
				children: [
					{ name: "Team Management", proficiency: "advanced" },
					{ name: "Mentoring", proficiency: "advanced" },
				],
			},
			{
				name: "Communication",
				children: [
					{ name: "Client-facing", proficiency: "advanced" },
					{ name: "Technical Writing", proficiency: "intermediate" },
				],
			},
		],
	},
	{
		name: "Languages",
		branches: [
			{
				name: "Spoken",
				children: [
					{ name: "English", proficiency: "fluent" },
					{ name: "French", proficiency: "fluent" },
					{ name: "Arabic", proficiency: "advanced" },
				],
			},
		],
	},
	{
		name: "Hobbies",
		branches: [
			{
				name: "Sports",
				children: [
					{ name: "Snowboarding", proficiency: "advanced" },
					{ name: "Parkour", proficiency: "intermediate" },
				],
			},
			{
				name: "Cuisine",
				children: [
					{ name: "Cooking", proficiency: "advanced" },
					{ name: "Cocktails", proficiency: "advanced" },
				],
			},
			{
				name: "Building",
				children: [
					{ name: "Home Server", proficiency: "intermediate" },
					{ name: "3D Printing", proficiency: "beginner" },
				],
			},
		],
	},
];
