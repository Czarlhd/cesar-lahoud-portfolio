"use client";

import { forwardRef } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export interface TimelineEntry {
	id: string;
	locationId: string;
	companyName: string;
	logo: React.ReactNode;
	title: string;
	timeline: string;
	type: "job" | "education";
}

interface TimelineCardProps {
	entry: TimelineEntry;
	isLocationActive: boolean;
	isEntryActive: boolean;
	onClick: () => void;
}

const TimelineCard = forwardRef<HTMLDivElement, TimelineCardProps>(
	({ entry, isLocationActive, isEntryActive, onClick }, ref) => {
		return (
			<motion.div
				ref={ref}
				onClick={onClick}
				whileHover={{ scale: 1.03, y: -2 }}
				className={cn(
					"flex-shrink-0 w-[220px] cursor-pointer rounded-lg border p-4",
					"bg-neutral-900/80 backdrop-blur-sm transition-colors duration-200",
					isEntryActive
						? "border-blue-500 shadow-lg shadow-blue-500/20"
						: isLocationActive
							? "border-blue-500/40"
							: "border-neutral-800 hover:border-neutral-600"
				)}
			>
				<div className="flex items-center gap-2 mb-2">
					<div className="flex-shrink-0">{entry.logo}</div>
					<span className="text-white text-sm font-semibold truncate">
						{entry.companyName}
					</span>
				</div>
				<p className="text-neutral-300 text-xs leading-relaxed line-clamp-2">
					{entry.title}
				</p>
				<p className="text-neutral-500 text-xs mt-1">{entry.timeline}</p>
				<span
					className={cn(
						"inline-block mt-2 text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-full",
						entry.type === "job"
							? "bg-blue-500/10 text-blue-400"
							: "bg-emerald-500/10 text-emerald-400"
					)}
				>
					{entry.type === "job" ? "Experience" : "Education"}
				</span>
			</motion.div>
		);
	}
);

TimelineCard.displayName = "TimelineCard";
export default TimelineCard;
