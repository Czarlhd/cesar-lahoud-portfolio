"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Project } from "@/data/resume";
import {
	IconServer,
	IconCpu,
	IconDeviceDesktop,
	IconBrain,
	IconDeviceSdCard,
	IconBox,
	IconContainer,
	IconBrandDocker,
	IconPlayerPlay,
	IconPhoto,
	IconLayoutDashboard,
	IconNetwork,
	IconHeart,
	IconChefHat,
	IconMeat,
	IconCloud,
	IconGlobe,
	IconCode,
	IconPalette,
	IconHome,
	IconCalendar,
	IconMail,
	IconList,
	IconDatabase,
	IconLeaf,
	IconCandy,
	IconDroplet,
	IconGlassFull,
	IconCooker,
	IconFlame,
	IconCup,
	IconClock,
	IconTool,
	IconStar,
	IconBowl,
	IconCake,
	IconUsers,
} from "@tabler/icons-react";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const ICON_MAP: Record<string, React.ComponentType<any>> = {
	server: IconServer,
	cpu: IconCpu,
	memory: IconDeviceDesktop,
	gpu: IconBrain,
	"hard-drive": IconDeviceSdCard,
	box: IconBox,
	container: IconContainer,
	docker: IconBrandDocker,
	play: IconPlayerPlay,
	image: IconPhoto,
	"layout-dashboard": IconLayoutDashboard,
	network: IconNetwork,
	heart: IconHeart,
	"chef-hat": IconChefHat,
	meat: IconMeat,
	cloud: IconCloud,
	globe: IconGlobe,
	code: IconCode,
	palette: IconPalette,
	home: IconHome,
	calendar: IconCalendar,
	mail: IconMail,
	list: IconList,
	database: IconDatabase,
	leaf: IconLeaf,
	candy: IconCandy,
	droplet: IconDroplet,
	wine: IconGlassFull,
	pot: IconCooker,
	flame: IconFlame,
	cup: IconCup,
	clock: IconClock,
	tool: IconTool,
	star: IconStar,
	bowl: IconBowl,
	cake: IconCake,
	users: IconUsers,
};

interface SystemPanelProps {
	project: Project;
	onClick: () => void;
}

export default function SystemPanel({ project, onClick }: SystemPanelProps) {
	const Icon = ICON_MAP[project.icon] || IconServer;
	const sortedLayers = [...project.layers].sort((a, b) => b.depth - a.depth);

	return (
		<motion.div
			onClick={onClick}
			whileHover={{ scale: 1.02, y: -4 }}
			className={cn(
				"cursor-pointer rounded-xl border p-6",
				"bg-neutral-900/80 backdrop-blur-sm",
				"border-neutral-800 hover:border-neutral-600",
				"transition-colors duration-200 group",
			)}
		>
			{/* Header */}
			<div className="flex items-center justify-between mb-4">
				<div className="flex items-center gap-3">
					<div
						className="w-10 h-10 rounded-lg flex items-center justify-center"
						style={{
							backgroundColor: `${project.accentColor}15`,
						}}
					>
						<Icon
							size={20}
							style={{ color: project.accentColor }}
						/>
					</div>
					<div>
						<h3 className="text-white font-semibold text-base">
							{project.name}
						</h3>
						{project.startDate && (
							<p className="text-neutral-500 text-xs">
								{project.startDate}
							</p>
						)}
					</div>
				</div>
			</div>

			{/* Tagline */}
			<p className="text-neutral-400 text-sm mb-4">{project.tagline}</p>

			{/* Mini architecture preview */}
			<div className="h-24 w-full rounded-lg bg-neutral-950/50 border border-neutral-800/50 mb-4 overflow-hidden p-3 flex flex-col justify-center gap-1">
				{sortedLayers.map((layer) => (
					<div key={layer.id} className="flex items-center gap-2">
						<div
							className="h-2 rounded-full"
							style={{
								backgroundColor: `${layer.color}40`,
								width: `${Math.max(20, layer.componentIds.length * 25)}%`,
							}}
						/>
						<span
							className="text-[8px] uppercase tracking-wider whitespace-nowrap"
							style={{ color: `${layer.color}80` }}
						>
							{layer.name}
						</span>
					</div>
				))}
			</div>

			{/* Tech stack */}
			{project.techStack && (
				<div className="flex flex-wrap gap-1.5">
					{project.techStack.map((tech) => (
						<span
							key={tech}
							className="text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-full bg-neutral-800 text-neutral-400"
						>
							{tech}
						</span>
					))}
				</div>
			)}
		</motion.div>
	);
}
