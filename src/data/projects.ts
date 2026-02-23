import { Project } from "@/data/resume";

export const DINNER_NIGHT_PROJECT: Project = {
	id: "dinner-night",
	name: "Dinner Night",
	tagline:
		"A three-course dinner: braised short ribs, mashed potatoes, and chocolate fondant",
	description:
		"A carefully planned dinner featuring red wine braised short ribs with creamy Yukon Gold mashed potatoes, finished with individual chocolate fondants with molten centers. Every element timed to land on the table together.",
	accentColor: "#dc2626",
	icon: "chef-hat",
	startDate: "2025",
	techStack: ["Braising", "Baking", "Plating"],

	components: [
		// Layer 0: Ingredients
		{
			id: "short-ribs",
			name: "Short Ribs",
			description:
				"Bone-in beef short ribs, the centerpiece protein — seasoned and seared before a long braise",
			layer: "hardware" as const,
			icon: "meat",
			color: "#f97316",
			metadata: { cut: "Bone-in" },
		},
		{
			id: "potatoes",
			name: "Yukon Gold Potatoes",
			description:
				"Naturally buttery potatoes that mash into a rich, creamy texture without needing much added fat",
			layer: "hardware" as const,
			icon: "leaf",
			color: "#f97316",
			metadata: { variety: "Yukon Gold" },
		},
		{
			id: "chocolate",
			name: "Dark Chocolate",
			description:
				"High-quality dark chocolate (70%) for the fondant — rich flavor with the right melting point for a molten center",
			layer: "hardware" as const,
			icon: "candy",
			color: "#f97316",
			metadata: { cacao: "70%" },
		},
		{
			id: "butter-cream",
			name: "Butter & Cream",
			description:
				"Shared base ingredients across all three dishes — butter for searing, cream for potatoes, both in the fondant",
			layer: "hardware" as const,
			icon: "droplet",
			color: "#f97316",
		},
		{
			id: "aromatics",
			name: "Aromatics & Wine",
			description:
				"Onions, garlic, thyme, bay leaves, and a full bottle of red wine for the braising liquid",
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
				"Heavy cast-iron pot for searing the ribs on the stovetop and then transferring to the oven for a low-and-slow braise",
			layer: "os" as const,
			icon: "pot",
			color: "#3b82f6",
			metadata: { material: "Cast Iron" },
		},
		{
			id: "oven-stove",
			name: "Stovetop & Oven",
			description:
				"The stovetop handles searing and boiling, the oven handles braising at 325°F and baking fondants at 425°F",
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
				"Low-and-slow cooking in liquid — sear first for crust, then braise covered for 3 hours until fork-tender",
			layer: "virtualization" as const,
			icon: "clock",
			color: "#8b5cf6",
			metadata: { time: "3 hours" },
		},
		{
			id: "boil-mash",
			name: "Boiling & Mashing",
			description:
				"Boil potatoes until tender, then mash with butter and warm cream for a smooth, lump-free finish",
			layer: "virtualization" as const,
			icon: "tool",
			color: "#8b5cf6",
			metadata: { time: "25 min" },
		},
		{
			id: "baking",
			name: "Baking",
			description:
				"High heat for exactly 12 minutes — the fondant exterior sets while the center stays molten",
			layer: "virtualization" as const,
			icon: "clock",
			color: "#8b5cf6",
			metadata: { time: "12 min", temp: "425°F" },
		},

		// Layer 3: Dishes
		{
			id: "dish-ribs",
			name: "Braised Short Ribs",
			description:
				"Fork-tender short ribs in a reduced red wine sauce — the bone slides out clean when done right",
			layer: "runtime" as const,
			icon: "star",
			color: "#06b6d4",
			metadata: { course: "Main" },
		},
		{
			id: "dish-potatoes",
			name: "Mashed Potatoes",
			description:
				"Creamy Yukon Gold mash with butter and cream — the perfect bed for the short ribs and their sauce",
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
				"Fresh thyme sprigs on the ribs, flaky sea salt on the potatoes, powdered sugar and berries on the fondant",
			layer: "application" as const,
			icon: "leaf",
			color: "#22c55e",
		},

		// Layer 5: Service
		{
			id: "dinner-service",
			name: "Dinner Service",
			description:
				"Everything hits the table at the right temperature — ribs rested, potatoes fresh, fondant straight from the oven",
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
			from: "butter-cream",
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
			from: "butter-cream",
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
				"potatoes",
				"chocolate",
				"butter-cream",
				"aromatics",
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
			body: "The ribs need 3 hours of braising, the potatoes 25 minutes, and the fondant exactly 12 minutes. Everything has to hit the table at the same time and at the right temperature. The ribs go in first, potatoes start when the ribs are resting, and the fondant goes into the oven right as you plate the main course.",
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
			body: "The short ribs braise at 325°F and the fondant bakes at 425°F. Since both need oven time, the ribs have to finish and come out before cranking the heat up for the fondant. There's no overlap — it's sequential, not parallel.",
			relatedComponentIds: ["oven-stove", "dutch-oven", "ramekins"],
		},

		// Tradeoffs
		{
			id: "dn-n3",
			type: "tradeoff" as const,
			title: "Bone-In vs Boneless Short Ribs",
			body: "Bone-in short ribs give better flavor from the marrow and a more impressive presentation, but they take longer to braise and are trickier to plate neatly. The bone should slide out cleanly when done — if it doesn't, they need more time.",
			relatedComponentIds: ["short-ribs", "braising", "dish-ribs"],
		},
		{
			id: "dn-n4",
			type: "tradeoff" as const,
			title: "Dark Chocolate — Rich but Unforgiving",
			body: "70% dark chocolate gives a deeper, more sophisticated fondant than milk chocolate, but the window between perfectly molten and overbaked is much smaller. One extra minute in the oven and the center sets completely.",
			relatedComponentIds: ["chocolate", "baking", "dish-fondant"],
		},

		// Decisions
		{
			id: "dn-n5",
			type: "decision" as const,
			title: "Red Wine Braise over Stock",
			body: "Chose a full bottle of red wine as the primary braising liquid instead of beef stock. It reduces into a naturally glossy, complex sauce that doesn't need thickening. The alcohol cooks off but the depth of flavor stays.",
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
			body: "Individual portions instead of a shared dessert. Each ramekin is its own self-contained moment — you break through the top and the molten center flows out. Portion control is also easier and every serving is consistent.",
			relatedComponentIds: ["ramekins", "dish-fondant", "plating"],
		},

		// Lessons
		{
			id: "dn-n8",
			type: "lesson" as const,
			title: "Rest the Ribs in Their Liquid",
			body: "Pulling the ribs out of the braising liquid immediately makes them dry out fast. Letting them rest in the liquid for 15–20 minutes after cooking lets them reabsorb moisture and makes them easier to plate without falling apart.",
			relatedComponentIds: ["dish-ribs", "braising", "dutch-oven"],
		},
		{
			id: "dn-n9",
			type: "lesson" as const,
			title: "Underbake the Fondant",
			body: "The fondant should still jiggle in the center when pulled from the oven. It keeps cooking from residual heat for another minute. If it looks done in the oven, it's already overbaked. The molten center is the entire point of the dish.",
			relatedComponentIds: ["dish-fondant", "baking", "oven-stove"],
		},
	],
};

export const GIRLFRIEND_SITE_PROJECT: Project = {
	id: "girlfriend-site",
	name: "Gift Website",
	tagline: "A personal website built as a gift for my girlfriend",
	description:
		"A custom-built website using Next.js with React and CSS, deployed on Vercel. Features five unique pages including a photo gallery, relationship timeline, love letters, a shared bucket list, and a home page with animated greetings. All images stored locally in the project.",
	accentColor: "#f472b6",
	icon: "heart",
	startDate: "2025",
	techStack: ["Next.js", "React", "CSS", "Vercel"],

	components: [
		// Layer 0: Hosting
		{
			id: "vercel",
			name: "Vercel",
			description:
				"Hosting platform with automatic deployments from Git and serverless functions",
			layer: "hardware" as const,
			icon: "cloud",
			color: "#f97316",
			metadata: { type: "PaaS" },
		},
		{
			id: "domain",
			name: "Custom Domain",
			description:
				"Custom domain configured through Vercel with automatic SSL",
			layer: "hardware" as const,
			icon: "globe",
			color: "#f97316",
			metadata: { ssl: "Auto" },
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
			description:
				"Landing page with animated greeting, a countdown timer, and a welcome message",
			layer: "runtime" as const,
			icon: "home",
			color: "#06b6d4",
			metadata: { route: "/" },
		},
		{
			id: "page-gallery",
			name: "Gallery",
			description:
				"Photo gallery showcasing memories together with a grid layout and lightbox viewer",
			layer: "runtime" as const,
			icon: "image",
			color: "#06b6d4",
			metadata: { route: "/gallery" },
		},
		{
			id: "page-timeline",
			name: "Timeline",
			description:
				"Interactive relationship timeline with milestones, dates, and photos from key moments",
			layer: "runtime" as const,
			icon: "calendar",
			color: "#06b6d4",
			metadata: { route: "/timeline" },
		},
		{
			id: "page-letters",
			name: "Letters",
			description:
				"A collection of personal letters and notes with reveal animations",
			layer: "runtime" as const,
			icon: "mail",
			color: "#06b6d4",
			metadata: { route: "/letters" },
		},
		{
			id: "page-bucket-list",
			name: "Bucket List",
			description:
				"Shared bucket list with items to do together, checkable entries, and progress tracking",
			layer: "runtime" as const,
			icon: "list",
			color: "#06b6d4",
			metadata: { route: "/bucket-list" },
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
				"Timeline events, letters, and bucket list items stored as typed JSON data files",
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
		{
			from: "domain",
			to: "vercel",
			type: "network" as const,
			label: "DNS resolution",
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
			to: "page-gallery",
			type: "passthrough" as const,
			label: "Components",
		},
		{
			from: "react",
			to: "page-timeline",
			type: "passthrough" as const,
			label: "Components",
		},
		{
			from: "react",
			to: "page-letters",
			type: "passthrough" as const,
			label: "Components",
		},
		{
			from: "react",
			to: "page-bucket-list",
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
			to: "page-gallery",
			type: "passthrough" as const,
			label: "Styles",
		},
		{
			from: "css",
			to: "page-letters",
			type: "passthrough" as const,
			label: "Styles",
		},

		// Pages → Data
		{
			from: "page-gallery",
			to: "images",
			type: "data-flow" as const,
			label: "Photo assets",
			animated: true,
		},
		{
			from: "page-timeline",
			to: "static-data",
			type: "data-flow" as const,
			label: "Event data",
			animated: true,
		},
		{
			from: "page-timeline",
			to: "images",
			type: "data-flow" as const,
			label: "Milestone photos",
		},
		{
			from: "page-letters",
			to: "static-data",
			type: "data-flow" as const,
			label: "Letter content",
			animated: true,
		},
		{
			from: "page-bucket-list",
			to: "static-data",
			type: "data-flow" as const,
			label: "List items",
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
		{
			from: "vercel-edge",
			to: "page-gallery",
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
				"page-gallery",
				"page-timeline",
				"page-letters",
				"page-bucket-list",
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
			body: "The site has no database or API. All content (letters, timeline events, bucket list) is stored as static typed data files bundled at build time. This keeps hosting free on Vercel and removes any maintenance overhead.",
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
		{
			id: "gf-n4",
			type: "tradeoff" as const,
			title: "CSS over a UI Framework",
			body: "Used plain CSS instead of Tailwind or a component library. More verbose but provides full control over the design with no framework overhead or learning curve for custom animations.",
			relatedComponentIds: ["css"],
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
			title: "Five Distinct Pages over Single Page",
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

		// Lessons
		{
			id: "gf-n8",
			type: "lesson" as const,
			title: "Design for the Audience, Not the Developer",
			body: "The first version was too 'developer-looking' with monospace fonts and dark themes. Redesigned with softer colors, rounded elements, and handwriting-style fonts after realizing the audience isn't a developer.",
			relatedComponentIds: ["css", "page-home"],
		},
		{
			id: "gf-n9",
			type: "lesson" as const,
			title: "CSS Animations Can Replace Libraries",
			body: "Custom CSS keyframe animations handled page transitions and reveal effects without needing Framer Motion or GSAP. Keeping the animation layer simple reduced bundle size and complexity.",
			relatedComponentIds: ["css", "page-letters", "page-home"],
		},
	],
};
