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
					{ name: "Swimming", proficiency: "advanced" },
					{ name: "Gym", proficiency: "intermediate" },
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

// ========================
// TYPES
// ========================

export type LayerCategory =
	| "hardware"
	| "os"
	| "virtualization"
	| "runtime"
	| "application"
	| "networking";

export type ConnectionType =
	| "data-flow"
	| "network"
	| "passthrough"
	| "mount"
	| "api"
	| "vpn";

export type NarrativeType = "constraint" | "tradeoff" | "decision" | "lesson";

// ========================
// INTERFACES
// ========================

export interface SystemComponent {
	id: string;
	name: string;
	description: string;
	layer: LayerCategory;
	icon: string;
	color: string;
	tags?: string[];
	metadata?: Record<string, string>;
}

export interface SystemConnection {
	from: string;
	to: string;
	type: ConnectionType;
	label: string;
	animated?: boolean;
}

export interface ArchitectureLayer {
	id: string;
	name: string;
	category: LayerCategory;
	depth: number;
	color: string;
	componentIds: string[];
}

export interface NarrativeEntry {
	id: string;
	type: NarrativeType;
	title: string;
	body: string;
	relatedComponentIds?: string[];
}

export interface Project {
	id: string;
	name: string;
	tagline: string;
	description: string;
	accentColor: string;
	icon: string;
	components: SystemComponent[];
	connections: SystemConnection[];
	layers: ArchitectureLayer[];
	narratives: NarrativeEntry[];
	startDate?: string;
	techStack?: string[];
}

// ========================
// DATA
// ========================

const HOME_SERVER_PROJECT: Project = {
	id: "homeserver",
	name: "Home Server",
	tagline: "Self-hosted server on Proxmox",
	description:
		"A personal home server built on Proxmox with LXC containers and Docker, hosting media streaming, photo backup with ML classification, and system monitoring — all accessible remotely via Tailscale VPN.",
	accentColor: "#22c55e",
	icon: "server",
	startDate: "2026",
	techStack: ["Proxmox", "Docker", "Tailscale", "Linux"],

	components: [
		// Layer 0: Hardware
		{
			id: "cpu",
			name: "CPU",
			description: "Main processor handling all compute workloads",
			layer: "hardware",
			icon: "cpu",
			color: "#f97316",
			metadata: { role: "Compute" },
		},
		{
			id: "ram",
			name: "RAM",
			description: "System memory allocated across containers",
			layer: "hardware",
			icon: "memory",
			color: "#f97316",
			metadata: { role: "Memory" },
		},
		{
			id: "gpu",
			name: "GPU",
			description:
				"Graphics card passed through to containers for video transcoding and ML inference",
			layer: "hardware",
			icon: "gpu",
			color: "#f97316",
			tags: ["passthrough"],
			metadata: { role: "Accelerator" },
		},
		{
			id: "disks",
			name: "Storage Disks",
			description:
				"Physical drives mounted into containers for media, photos, and system data",
			layer: "hardware",
			icon: "hard-drive",
			color: "#f97316",
			tags: ["mount"],
			metadata: { role: "Storage" },
		},

		// Layer 1: OS / Hypervisor
		{
			id: "proxmox",
			name: "Proxmox VE",
			description:
				"Debian-based hypervisor managing LXC containers and system resources",
			layer: "os",
			icon: "box",
			color: "#3b82f6",
			metadata: { base: "Debian" },
		},

		// Layer 2: Virtualization
		{
			id: "lxc-media",
			name: "LXC: Media",
			description:
				"Lightweight container hosting Docker for media services with GPU passthrough",
			layer: "virtualization",
			icon: "container",
			color: "#8b5cf6",
			tags: ["gpu-passthrough"],
		},
		{
			id: "lxc-photos",
			name: "LXC: Photos",
			description:
				"Container running photo backup and ML classification services with GPU access",
			layer: "virtualization",
			icon: "container",
			color: "#8b5cf6",
			tags: ["gpu-passthrough"],
		},
		{
			id: "lxc-monitoring",
			name: "LXC: Monitoring",
			description:
				"Container running the server dashboard and monitoring stack",
			layer: "virtualization",
			icon: "container",
			color: "#8b5cf6",
		},

		// Layer 3: Container Runtime
		{
			id: "docker-media",
			name: "Docker (Media)",
			description: "Docker engine running media server containers",
			layer: "runtime",
			icon: "docker",
			color: "#06b6d4",
		},
		{
			id: "docker-photos",
			name: "Docker (Photos)",
			description: "Docker engine running photo application containers",
			layer: "runtime",
			icon: "docker",
			color: "#06b6d4",
		},
		{
			id: "docker-monitoring",
			name: "Docker (Monitoring)",
			description: "Docker engine running monitoring stack",
			layer: "runtime",
			icon: "docker",
			color: "#06b6d4",
		},

		// Layer 4: Applications
		{
			id: "media-server",
			name: "Jellyfin",
			description:
				"Streams media library with hardware-accelerated transcoding via GPU",
			layer: "application",
			icon: "play",
			color: "#22c55e",
			tags: ["gpu-accelerated"],
			metadata: { transcoding: "GPU HW Accel" },
		},
		{
			id: "photo-app",
			name: "Immich",
			description:
				"Photo backup, organization, and ML-powered classification using GPU inference",
			layer: "application",
			icon: "image",
			color: "#22c55e",
			tags: ["gpu-accelerated", "ml"],
			metadata: { ml: "GPU Inference" },
		},
		{
			id: "dashboard",
			name: "Homarr",
			description:
				"Real-time server stats: storage usage, RAM, CPU, and application health",
			layer: "application",
			icon: "layout-dashboard",
			color: "#22c55e",
			metadata: { metrics: "CPU, RAM, Disk, App Status" },
		},

		// Layer 5: Networking
		{
			id: "tailscale",
			name: "Tailscale VPN",
			description:
				"Mesh VPN providing secure remote access to all services without port forwarding",
			layer: "networking",
			icon: "network",
			color: "#eab308",
			metadata: { access: "Remote + Local" },
		},
	],

	connections: [
		// Hardware → Proxmox
		{
			from: "cpu",
			to: "proxmox",
			type: "passthrough",
			label: "Compute resources",
		},
		{
			from: "ram",
			to: "proxmox",
			type: "passthrough",
			label: "Memory allocation",
		},
		{
			from: "disks",
			to: "proxmox",
			type: "mount",
			label: "Block devices",
		},
		{
			from: "gpu",
			to: "proxmox",
			type: "passthrough",
			label: "GPU device",
		},

		// Proxmox → LXC
		{
			from: "proxmox",
			to: "lxc-media",
			type: "passthrough",
			label: "GPU passthrough + container mgmt",
			animated: true,
		},
		{
			from: "proxmox",
			to: "lxc-photos",
			type: "passthrough",
			label: "GPU passthrough + container mgmt",
			animated: true,
		},
		{
			from: "proxmox",
			to: "lxc-monitoring",
			type: "passthrough",
			label: "Container mgmt",
		},

		// Disk mounts
		{
			from: "disks",
			to: "lxc-media",
			type: "mount",
			label: "Media volume mount",
		},
		{
			from: "disks",
			to: "lxc-photos",
			type: "mount",
			label: "Photos volume mount",
		},

		// LXC → Docker
		{
			from: "lxc-media",
			to: "docker-media",
			type: "passthrough",
			label: "Docker host",
		},
		{
			from: "lxc-photos",
			to: "docker-photos",
			type: "passthrough",
			label: "Docker host",
		},
		{
			from: "lxc-monitoring",
			to: "docker-monitoring",
			type: "passthrough",
			label: "Docker host",
		},

		// Docker → Applications
		{
			from: "docker-media",
			to: "media-server",
			type: "passthrough",
			label: "Container",
		},
		{
			from: "docker-photos",
			to: "photo-app",
			type: "passthrough",
			label: "Container",
		},
		{
			from: "docker-monitoring",
			to: "dashboard",
			type: "passthrough",
			label: "Container",
		},

		// Tailscale → Applications
		{
			from: "tailscale",
			to: "media-server",
			type: "vpn",
			label: "Secure tunnel",
			animated: true,
		},
		{
			from: "tailscale",
			to: "photo-app",
			type: "vpn",
			label: "Secure tunnel",
			animated: true,
		},
		{
			from: "tailscale",
			to: "dashboard",
			type: "vpn",
			label: "Secure tunnel",
			animated: true,
		},

		// Dashboard monitors apps
		{
			from: "dashboard",
			to: "media-server",
			type: "api",
			label: "Health checks",
		},
		{
			from: "dashboard",
			to: "photo-app",
			type: "api",
			label: "Health checks",
		},
	],

	layers: [
		{
			id: "l0-hardware",
			name: "Hardware",
			category: "hardware",
			depth: 0,
			color: "#f97316",
			componentIds: ["cpu", "ram", "gpu", "disks"],
		},
		{
			id: "l1-os",
			name: "Proxmox",
			category: "os",
			depth: 1,
			color: "#3b82f6",
			componentIds: ["proxmox"],
		},
		{
			id: "l2-virtualization",
			name: "LXC",
			category: "virtualization",
			depth: 2,
			color: "#8b5cf6",
			componentIds: ["lxc-media", "lxc-photos", "lxc-monitoring"],
		},
		{
			id: "l3-runtime",
			name: "Docker",
			category: "runtime",
			depth: 3,
			color: "#06b6d4",
			componentIds: [
				"docker-media",
				"docker-photos",
				"docker-monitoring",
			],
		},
		{
			id: "l4-apps",
			name: "Applications",
			category: "application",
			depth: 4,
			color: "#22c55e",
			componentIds: ["media-server", "photo-app", "dashboard"],
		},
		{
			id: "l5-network",
			name: "Networking",
			category: "networking",
			depth: 5,
			color: "#eab308",
			componentIds: ["tailscale"],
		},
	],

	narratives: [
		// Constraints
		{
			id: "n1",
			type: "constraint",
			title: "Single GPU, Multiple Consumers",
			body: "Only one GPU available, but both the media server (transcoding) and photo app (ML inference) need it. GPU passthrough in LXC allows multiple LXCs to share the GPU.",
			relatedComponentIds: [
				"gpu",
				"lxc-media",
				"lxc-photos",
				"media-server",
				"photo-app",
			],
		},
		{
			id: "n2",
			type: "constraint",
			title: "LXC vs VM Trade-off",
			body: "LXC containers share the host kernel, meaning less overhead, isolation and are easier to setup. Full VMs would have been heavier but offer better GPU passthrough support out of the box.",
			relatedComponentIds: [
				"proxmox",
				"lxc-media",
				"lxc-photos",
				"lxc-monitoring",
			],
		},
		{
			id: "n3",
			type: "constraint",
			title: "No Public IP / Dynamic DNS",
			body: "The home network does not expose services publicly. All remote access goes through Tailscale. There is no need for port forwarding, no dynamic DNS, and no SSL certificate management for external access.",
			relatedComponentIds: ["tailscale"],
		},

		// Tradeoffs
		{
			id: "n5",
			type: "tradeoff",
			title: "Docker Inside LXC",
			body: "Running Docker inside LXC (nested containerization) adds complexity but provides the flexibility of Docker Compose for application management while keeping the LXC layer for resource isolation.",
			relatedComponentIds: [
				"docker-media",
				"docker-photos",
				"docker-monitoring",
			],
		},

		// Decisions
		{
			id: "n6",
			type: "decision",
			title: "Tailscale for Remote Access",
			body: "Selected Tailscale over WireGuard manual setup or Cloudflare Tunnels. Tailscale provides zero-config mesh networking with MagicDNS, ACLs, and works behind NAT without port forwarding.",
			relatedComponentIds: ["tailscale"],
		},
		{
			id: "n7",
			type: "decision",
			title: "Proxmox as Hypervisor",
			body: "Chose Proxmox over bare Debian + manual LXC or TrueNAS because Proxmox provides a web GUI for container management, snapshot/backup tools, and a mature ecosystem while still being Debian underneath.",
			relatedComponentIds: ["proxmox"],
		},

		// Lessons
		{
			id: "n9",
			type: "lesson",
			title: "GPU Passthrough Requires Kernel-Level Config",
			body: "Getting GPU passthrough working in LXC required editing cgroup device rules, mapping /dev/dri and /dev/nvidia* into the container, and ensuring host kernel modules were loaded.",
			relatedComponentIds: ["gpu", "lxc-media", "lxc-photos"],
		},
		{
			id: "n10",
			type: "lesson",
			title: "Unix Permissions Are Everything",
			body: "Disk mount permissions between host and LXC containers require careful UID/GID mapping. Unprivileged containers remap UIDs, so a file owned by UID 1000 on the host appears as a different UID inside the container.",
			relatedComponentIds: ["disks", "proxmox"],
		},
		{
			id: "n11",
			type: "lesson",
			title: "Monitoring Is Not Optional",
			body: "Initially ran without a dashboard. After a disk filled up silently and crashed the media server, added monitoring as a first-class citizen. Now tracks disk usage, RAM, CPU, and application health with alerts.",
			relatedComponentIds: ["dashboard", "disks"],
		},
	],
};

const GIRLFRIEND_SITE_PROJECT: Project = {
	id: "girlfriend-site",
	name: "Gift Website",
	tagline: "A personal website built as a gift for my girlfriend",
	description:
		"A custom-built website using Next.js with React and CSS, deployed on Vercel. Features four unique pages including a storybook, a custom crossword puzzle, a custom connections puzzle and a 'Be My valentine Page'.",
	accentColor: "#f472b6",
	icon: "heart",
	startDate: "Never Ending",
	techStack: ["Next.js", "React", "CSS", "Vercel"],

	components: [
		// Layer 0: Hosting
		{
			id: "vercel",
			name: "Vercel",
			description: "Hosting platform with automatic deployments from Git",
			layer: "hardware" as const,
			icon: "cloud",
			color: "#f97316",
			metadata: { type: "PaaS" },
		},

		// Layer 1: Framework
		{
			id: "nextjs",
			name: "Next.js",
			description:
				"React framework handling routing, server-side rendering, and image optimization",
			layer: "os" as const,
			icon: "code",
			color: "#3b82f6",
			metadata: { router: "App Router" },
		},

		// Layer 2: UI Layer
		{
			id: "react",
			name: "React Components",
			description:
				"Custom React components for each page section with local state management",
			layer: "virtualization" as const,
			icon: "code",
			color: "#8b5cf6",
		},
		{
			id: "css",
			name: "CSS Stylesheets",
			description:
				"Custom CSS stylesheets for layout, animations, and responsive design",
			layer: "virtualization" as const,
			icon: "palette",
			color: "#8b5cf6",
		},

		// Layer 3: Pages
		{
			id: "page-home",
			name: "Home",
			description: "Landing page with the list of pages to explore",
			layer: "runtime" as const,
			icon: "home",
			color: "#06b6d4",
			metadata: { route: "/" },
		},
		{
			id: "page-storybook",
			name: "Storybook",
			description: "A Storybook of our first year together",
			layer: "runtime" as const,
			icon: "storybook",
			color: "#06b6d4",
			metadata: { route: "/storybook" },
		},
		{
			id: "page-crossword",
			name: "Crossword",
			description: "A Crossword puzzle about our lives",
			layer: "runtime" as const,
			icon: "crossword",
			color: "#06b6d4",
			metadata: { route: "/crossword" },
		},
		{
			id: "page-connections",
			name: "Connections",
			description:
				"A recreation of the New York Times 'Connections' game with custom clues about us",
			layer: "runtime" as const,
			icon: "connections",
			color: "#06b6d4",
			metadata: { route: "/connections" },
		},
		{
			id: "page-be-my-valentine",
			name: "Be My Valentine",
			description: "A fun page asking her to be my valentine",
			layer: "runtime" as const,
			icon: "heart",
			color: "#06b6d4",
			metadata: { route: "/be-my-valentine" },
		},

		// Layer 4: Data & Assets
		{
			id: "images",
			name: "Local Images",
			description:
				"Photos and assets stored directly in the project, optimized via Next.js Image component",
			layer: "application" as const,
			icon: "image",
			color: "#22c55e",
			metadata: { storage: "In-project" },
		},
		{
			id: "static-data",
			name: "Static Data",
			description:
				"Storybook content, crossword clues, and connections data stored in local JSON files",
			layer: "application" as const,
			icon: "database",
			color: "#22c55e",
		},

		// Layer 5: Delivery
		{
			id: "vercel-edge",
			name: "Vercel Edge Network",
			description:
				"Vercel's built-in edge network serving pre-rendered pages and static assets globally",
			layer: "networking" as const,
			icon: "network",
			color: "#eab308",
			metadata: { rendering: "SSR + Static" },
		},
	],

	connections: [
		// Infrastructure
		{
			from: "vercel",
			to: "nextjs",
			type: "passthrough" as const,
			label: "Build & deploy",
		},

		// Framework → UI
		{
			from: "nextjs",
			to: "react",
			type: "passthrough" as const,
			label: "Component rendering",
		},
		{
			from: "nextjs",
			to: "css",
			type: "passthrough" as const,
			label: "Style bundling",
		},

		// UI → Pages
		{
			from: "react",
			to: "page-home",
			type: "passthrough" as const,
			label: "Components",
		},
		{
			from: "react",
			to: "page-storybook",
			type: "passthrough" as const,
			label: "Components",
		},
		{
			from: "react",
			to: "page-crossword",
			type: "passthrough" as const,
			label: "Components",
		},
		{
			from: "react",
			to: "page-connections",
			type: "passthrough" as const,
			label: "Components",
		},
		{
			from: "react",
			to: "page-be-my-valentine",
			type: "passthrough" as const,
			label: "Components",
		},
		{
			from: "css",
			to: "page-home",
			type: "passthrough" as const,
			label: "Styles",
		},
		{
			from: "css",
			to: "page-storybook",
			type: "passthrough" as const,
			label: "Styles",
		},
		{
			from: "css",
			to: "page-crossword",
			type: "passthrough" as const,
			label: "Styles",
		},
		{
			from: "css",
			to: "page-connections",
			type: "passthrough" as const,
			label: "Styles",
		},
		{
			from: "css",
			to: "page-be-my-valentine",
			type: "passthrough" as const,
			label: "Styles",
		},

		// Pages → Data
		{
			from: "page-storybook",
			to: "images",
			type: "data-flow" as const,
			label: "Photo assets",
			animated: true,
		},
		{
			from: "page-storybook",
			to: "static-data",
			type: "data-flow" as const,
			label: "Event data",
			animated: true,
		},
		{
			from: "page-connections",
			to: "static-data",
			type: "data-flow" as const,
			label: "Milestone photos",
			animated: true,
		},
		{
			from: "page-crossword",
			to: "static-data",
			type: "data-flow" as const,
			label: "Letter content",
			animated: true,
		},

		// Delivery
		{
			from: "vercel",
			to: "vercel-edge",
			type: "network" as const,
			label: "Edge deployment",
		},
		{
			from: "vercel-edge",
			to: "page-home",
			type: "network" as const,
			label: "Page delivery",
			animated: true,
		},
	],

	layers: [
		{
			id: "l0-hosting",
			name: "Hosting",
			category: "hardware" as const,
			depth: 0,
			color: "#f97316",
			componentIds: ["vercel", "domain"],
		},
		{
			id: "l1-framework",
			name: "Next.js",
			category: "os" as const,
			depth: 1,
			color: "#3b82f6",
			componentIds: ["nextjs"],
		},
		{
			id: "l2-ui",
			name: "React & CSS",
			category: "virtualization" as const,
			depth: 2,
			color: "#8b5cf6",
			componentIds: ["react", "css"],
		},
		{
			id: "l3-pages",
			name: "Pages",
			category: "runtime" as const,
			depth: 3,
			color: "#06b6d4",
			componentIds: [
				"page-home",
				"page-storybook",
				"page-crossword",
				"page-connections",
				"page-be-my-valentine",
			],
		},
		{
			id: "l4-data",
			name: "Data & Assets",
			category: "application" as const,
			depth: 4,
			color: "#22c55e",
			componentIds: ["images", "static-data"],
		},
		{
			id: "l5-delivery",
			name: "Delivery",
			category: "networking" as const,
			depth: 5,
			color: "#eab308",
			componentIds: ["vercel-edge"],
		},
	],

	narratives: [
		// Constraints
		{
			id: "gf-n1",
			type: "constraint" as const,
			title: "Fully Static — No Backend",
			body: "The site has no database or API. All content is stored as static typed data files bundled at build time. This keeps hosting free on Vercel and removes any maintenance overhead.",
			relatedComponentIds: ["static-data", "vercel"],
		},
		{
			id: "gf-n2",
			type: "constraint" as const,
			title: "All Images Stored Locally",
			body: "All photos are stored directly in the project repository rather than using an external service. This means the bundle size grows with each photo, but there are no external dependencies or CDN costs.",
			relatedComponentIds: ["images", "page-gallery"],
		},

		// Tradeoffs
		{
			id: "gf-n3",
			type: "tradeoff" as const,
			title: "Static Data vs CMS",
			body: "Chose static JSON files over a headless CMS. Updating content requires a code push, but avoids the complexity of CMS integration, API keys, and the risk of a third-party service going down.",
			relatedComponentIds: ["static-data", "nextjs"],
		},

		// Decisions
		{
			id: "gf-n5",
			type: "decision" as const,
			title: "Vercel for Deployment",
			body: "Chose Vercel for seamless Next.js integration, automatic preview deployments on every push, and a generous free tier that covers the site's needs.",
			relatedComponentIds: ["vercel", "vercel-edge"],
		},
		{
			id: "gf-n6",
			type: "decision" as const,
			title: "Four Distinct Pages over Single Page",
			body: "Opted for a multi-page layout with dedicated routes instead of a single scrolling page. Each page represents a different 'gift' — giving each section its own space and allowing the recipient to explore at their own pace.",
			relatedComponentIds: [
				"page-home",
				"page-gallery",
				"page-timeline",
				"page-letters",
				"page-bucket-list",
			],
		},
		{
			id: "gf-n7",
			type: "decision" as const,
			title: "Next.js Image for Local Photos",
			body: "Used Next.js Image component to automatically optimize local images at build time — resizing, format conversion, and lazy loading without needing an external image service.",
			relatedComponentIds: ["images", "nextjs"],
		},
	],
};

const DINNER_NIGHT_PROJECT: Project = {
	id: "dinner-night",
	name: "Dinner Night",
	tagline:
		"A three-course dinner: braised short ribs, mashed potatoes, and chocolate fondant",
	description:
		"A carefully planned dinner featuring red wine braised short ribs with creamy Yukon Gold mashed potatoes, finished with individual chocolate fondants with molten centers. Every element timed to land on the table together.",
	accentColor: "#dc2626",
	icon: "chef-hat",
	startDate: "Any Night",
	techStack: ["Braising", "Baking", "Plating"],

	components: [
		// Layer 0: Ingredients
		{
			id: "short-ribs",
			name: "Short Ribs",
			description: "Bone-in beef short ribs, the dinner's centerpiece",
			layer: "hardware" as const,
			icon: "meat",
			color: "#f97316",
			metadata: { cut: "Bone-in" },
		},
		{
			id: "potatoes",
			name: "Yukon Gold Potatoes",
			description:
				"Naturally buttery potatoes perfect for getting the perfect creamy texture",
			layer: "hardware" as const,
			icon: "leaf",
			color: "#f97316",
			metadata: { variety: "Yukon Gold" },
		},
		{
			id: "chocolate",
			name: "Dark Chocolate",
			description: "High-quality dark chocolate (70%) for the fondant",
			layer: "hardware" as const,
			icon: "candy",
			color: "#f97316",
			metadata: { cacao: "70%" },
		},
		{
			id: "butter-sugar-flour",
			name: "Butter, Sugar & Flour",
			description: "Butter, Sugar and Flour for the fondant",
			layer: "hardware" as const,
			icon: "butter",
			color: "#f97316",
			metadata: { type: "Unsalted" },
			tags: ["dairy"],
		},
		{
			id: "cream",
			name: "Cream",
			description:
				"Heavy cream infused with Rosemary and Garlic for the mashed potatoes",
			layer: "hardware" as const,
			icon: "droplet",
			color: "#f97316",
		},
		{
			id: "aromatics",
			name: "Aromatics & Wine",
			description:
				"Onions, garlic, carrots, celery, thyme, bay leaves, a full bottle of red wine and beef stock for the braising liquid",
			layer: "hardware" as const,
			icon: "wine",
			color: "#f97316",
			metadata: { wine: "Red" },
		},

		// Layer 1: Equipment
		{
			id: "dutch-oven",
			name: "Dutch Oven",
			description:
				"Heavy cast-iron pot for searing the ribs on the stovetop and then transferring to the oven to braise for 3 hours at 350°F",
			layer: "os" as const,
			icon: "pot",
			color: "#3b82f6",
			metadata: { material: "Cast Iron" },
		},
		{
			id: "oven-stove",
			name: "Stovetop & Oven",
			description:
				"The stovetop used for boiling the potatoes and preparing the cream infusion",
			layer: "os" as const,
			icon: "flame",
			color: "#3b82f6",
			metadata: { braise: "325°F", bake: "425°F" },
		},
		{
			id: "ramekins",
			name: "Ramekins",
			description:
				"Individual ceramic ramekins buttered and dusted with cocoa powder for the chocolate fondants",
			layer: "os" as const,
			icon: "cup",
			color: "#3b82f6",
			metadata: { size: "6 oz" },
		},

		// Layer 2: Techniques
		{
			id: "braising",
			name: "Braising",
			description:
				"Low-and-slow cooking in of the short ribs for 3 hours until fork-tender",
			layer: "virtualization" as const,
			icon: "clock",
			color: "#8b5cf6",
			metadata: { time: "3 hours" },
		},
		{
			id: "boil-mash",
			name: "Boiling & Mashing",
			description:
				"Boil potatoes until tender, then mash with the infused cream and season to taste",
			layer: "virtualization" as const,
			icon: "tool",
			color: "#8b5cf6",
			metadata: { time: "25 min" },
		},
		{
			id: "baking",
			name: "Baking",
			description:
				"High heat for exactly 11 minutes to get a perfect molten center",
			layer: "virtualization" as const,
			icon: "clock",
			color: "#8b5cf6",
			metadata: { time: "11 min", temp: "425°F" },
		},

		// Layer 3: Dishes
		{
			id: "dish-ribs",
			name: "Braised Short Ribs",
			description: "Fork-tender short ribs in a reduced red wine sauce",
			layer: "runtime" as const,
			icon: "star",
			color: "#06b6d4",
			metadata: { course: "Main" },
		},
		{
			id: "dish-potatoes",
			name: "Mashed Potatoes",
			description: "Creamy Yukon Gold mash with butter and cream",
			layer: "runtime" as const,
			icon: "bowl",
			color: "#06b6d4",
			metadata: { course: "Side" },
		},
		{
			id: "dish-fondant",
			name: "Chocolate Fondant",
			description:
				"Individual chocolate cakes with a molten center that flows when you break through the top with a spoon",
			layer: "runtime" as const,
			icon: "cake",
			color: "#06b6d4",
			metadata: { course: "Dessert" },
		},

		// Layer 4: Plating
		{
			id: "plating",
			name: "Plate Composition",
			description:
				"Mashed potatoes as the base, short ribs placed on top, sauce spooned over, garnished with fresh thyme",
			layer: "application" as const,
			icon: "palette",
			color: "#22c55e",
		},
		{
			id: "garnish",
			name: "Garnishes",
			description:
				"Fresh thyme sprigs on the ribs, flaky sea salt on the potatoes, vanilla ice cream on the fondant",
			layer: "application" as const,
			icon: "leaf",
			color: "#22c55e",
		},

		// Layer 5: Service
		{
			id: "dinner-service",
			name: "Dinner Service",
			description:
				"Everything hits the table at the right temperature. The ribs rested and tender, potatoes fresh, fondant straight from the oven",
			layer: "networking" as const,
			icon: "users",
			color: "#eab308",
			metadata: { serves: "2" },
		},
	],

	connections: [
		// Ingredients → Equipment
		{
			from: "short-ribs",
			to: "dutch-oven",
			type: "passthrough" as const,
			label: "Sear & braise",
		},
		{
			from: "aromatics",
			to: "dutch-oven",
			type: "passthrough" as const,
			label: "Flavor base",
		},
		{
			from: "potatoes",
			to: "oven-stove",
			type: "passthrough" as const,
			label: "Boil",
		},
		{
			from: "cream",
			to: "oven-stove",
			type: "passthrough" as const,
			label: "Mash enrichment",
		},
		{
			from: "chocolate",
			to: "ramekins",
			type: "passthrough" as const,
			label: "Fondant batter",
		},
		{
			from: "butter-sugar-flour",
			to: "ramekins",
			type: "passthrough" as const,
			label: "Batter & grease",
		},

		// Equipment → Techniques
		{
			from: "dutch-oven",
			to: "braising",
			type: "passthrough" as const,
			label: "Low & slow",
		},
		{
			from: "oven-stove",
			to: "boil-mash",
			type: "passthrough" as const,
			label: "Stovetop",
		},
		{
			from: "oven-stove",
			to: "braising",
			type: "passthrough" as const,
			label: "Oven heat",
		},
		{
			from: "short-ribs",
			to: "oven-stove",
			type: "passthrough" as const,
			label: "Oven heat",
		},
		{
			from: "ramekins",
			to: "baking",
			type: "passthrough" as const,
			label: "Into the oven",
		},

		// Techniques → Dishes
		{
			from: "braising",
			to: "dish-ribs",
			type: "data-flow" as const,
			label: "3-hour braise",
			animated: true,
		},
		{
			from: "boil-mash",
			to: "dish-potatoes",
			type: "data-flow" as const,
			label: "Mash & season",
			animated: true,
		},
		{
			from: "baking",
			to: "dish-fondant",
			type: "data-flow" as const,
			label: "12-min bake",
			animated: true,
		},

		// Dishes → Plating
		{
			from: "dish-ribs",
			to: "plating",
			type: "data-flow" as const,
			label: "Main plate",
			animated: true,
		},
		{
			from: "dish-potatoes",
			to: "plating",
			type: "data-flow" as const,
			label: "Base layer",
			animated: true,
		},
		{
			from: "dish-fondant",
			to: "plating",
			type: "data-flow" as const,
			label: "Dessert plate",
		},
		{
			from: "garnish",
			to: "plating",
			type: "passthrough" as const,
			label: "Finishing touches",
		},

		// Plating → Service
		{
			from: "plating",
			to: "dinner-service",
			type: "network" as const,
			label: "To the table",
			animated: true,
		},
	],

	layers: [
		{
			id: "l0-ingredients",
			name: "Ingredients",
			category: "hardware" as const,
			depth: 0,
			color: "#f97316",
			componentIds: [
				"short-ribs",
				"aromatics",
				"potatoes",
				"cream",
				"chocolate",
				"butter-sugar-flour",
			],
		},
		{
			id: "l1-equipment",
			name: "Equipment",
			category: "os" as const,
			depth: 1,
			color: "#3b82f6",
			componentIds: ["dutch-oven", "oven-stove", "ramekins"],
		},
		{
			id: "l2-techniques",
			name: "Techniques",
			category: "virtualization" as const,
			depth: 2,
			color: "#8b5cf6",
			componentIds: ["braising", "boil-mash", "baking"],
		},
		{
			id: "l3-dishes",
			name: "Dishes",
			category: "runtime" as const,
			depth: 3,
			color: "#06b6d4",
			componentIds: ["dish-ribs", "dish-potatoes", "dish-fondant"],
		},
		{
			id: "l4-plating",
			name: "Plating",
			category: "application" as const,
			depth: 4,
			color: "#22c55e",
			componentIds: ["plating", "garnish"],
		},
		{
			id: "l5-service",
			name: "Service",
			category: "networking" as const,
			depth: 5,
			color: "#eab308",
			componentIds: ["dinner-service"],
		},
	],

	narratives: [
		// Constraints
		{
			id: "dn-n1",
			type: "constraint" as const,
			title: "Timing Three Dishes to Land Together",
			body: "The ribs need 3 hours of braising, the potatoes 25 minutes, and the fondant exactly 11 minutes. The short ribs and mashed potatoes have to be ready at the same time. The ribs go in first, potatoes start when the ribs are resting, and the fondant goes into the oven as you are finishing dinner.",
			relatedComponentIds: [
				"braising",
				"boil-mash",
				"baking",
				"dinner-service",
			],
		},
		{
			id: "dn-n2",
			type: "constraint" as const,
			title: "One Oven, Two Temperatures",
			body: "The short ribs braise at 325°F and the fondant bakes at 425°F. Since both need oven time, the ribs have to finish and come out before cranking the heat up for the fondant.",
			relatedComponentIds: ["oven-stove", "dutch-oven", "ramekins"],
		},

		// Tradeoffs
		{
			id: "dn-n3",
			type: "tradeoff" as const,
			title: "Bone-In vs Boneless Short Ribs",
			body: "Bone-in short ribs give better flavor from the marrow and a more impressive presentation, but they take longer to braise and are trickier to plate neatly. The bone should slide out cleanly when done.",
			relatedComponentIds: ["short-ribs", "braising", "dish-ribs"],
		},
		{
			id: "dn-n4",
			type: "tradeoff" as const,
			title: "Dark Chocolate",
			body: "70% dark chocolate gives a deeper, more sophisticated fondant than milk chocolate, but the window between perfectly molten and overbaked is much smaller. One extra minute in the oven and the center sets completely.",
			relatedComponentIds: ["chocolate", "baking", "dish-fondant"],
		},

		// Decisions
		{
			id: "dn-n5",
			type: "decision" as const,
			title: "Red Wine Braise and Beef Stock",
			body: "Chose a full bottle of red wine as the primary braising liquid instead in addition to beef stock to intensify the flavor. It reduces into a naturally glossy, complex sauce. The alcohol cooks off but the depth of flavor stays.",
			relatedComponentIds: ["aromatics", "braising", "dish-ribs"],
		},
		{
			id: "dn-n6",
			type: "decision" as const,
			title: "Yukon Gold over Russet",
			body: "Yukon Golds produce a creamier, naturally buttery mash. Russets would be fluffier but drier and starchier. For a rich dinner like this, the creamy texture pairs better with the braised ribs and their sauce.",
			relatedComponentIds: ["potatoes", "dish-potatoes"],
		},
		{
			id: "dn-n7",
			type: "decision" as const,
			title: "Individual Ramekins for Fondant",
			body: "Individual portions instead of a shared dessert. Each ramekin is its own self-contained moment with a molten center flows out.",
			relatedComponentIds: ["ramekins", "dish-fondant", "plating"],
		},

		// Lessons
		{
			id: "dn-n8",
			type: "lesson" as const,
			title: "Rest the Ribs in Their Liquid",
			body: "Pulling the ribs out of the braising liquid immediately makes them dry out fast. Letting them rest in the liquid for 15-20 minutes after cooking lets them reabsorb moisture and makes them easier to plate without falling apart.",
			relatedComponentIds: ["dish-ribs", "braising", "dutch-oven"],
		},
		{
			id: "dn-n9",
			type: "lesson" as const,
			title: "Underbake the Fondant",
			body: "The fondant should still jiggle in the center when pulled from the oven. It keeps cooking from residual heat for another minute.",
			relatedComponentIds: ["dish-fondant", "baking", "oven-stove"],
		},
	],
};

export const PROJECTS: Project[] = [
	HOME_SERVER_PROJECT,
	GIRLFRIEND_SITE_PROJECT,
	DINNER_NIGHT_PROJECT,
];
