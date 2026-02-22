"use client";

import { motion } from "framer-motion";
import { NarrativeEntry } from "@/data/resume";

interface NarrativeSectionProps {
	entries: NarrativeEntry[];
	onEntryHover: (componentIds: string[]) => void;
}

export default function NarrativeSection({
	entries,
	onEntryHover,
}: NarrativeSectionProps) {
	if (entries.length === 0) {
		return (
			<p className="text-neutral-500 text-sm">
				No entries in this category.
			</p>
		);
	}

	return (
		<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
			{entries.map((entry) => (
				<motion.div
					key={entry.id}
					onMouseEnter={() =>
						onEntryHover(entry.relatedComponentIds ?? [])
					}
					onMouseLeave={() => onEntryHover([])}
					className="p-4 rounded-lg border border-neutral-800 bg-neutral-900/50 hover:border-neutral-600 transition-colors cursor-default"
				>
					<h4 className="text-white font-semibold text-sm mb-2">
						{entry.title}
					</h4>
					<p className="text-neutral-400 text-xs leading-relaxed">
						{entry.body}
					</p>
				</motion.div>
			))}
		</div>
	);
}
