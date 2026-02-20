"use client";

import { SKILLS } from "@/data/resume";
import SkillTreeViz from "./SkillTreeViz";

const TREE_COLORS: Record<string, string> = {
	Software: "#60a5fa",
	"Soft Skills": "#4ade80",
	Languages: "#fbbf24",
	Hobbies: "#f97316",
};

export default function SkillsSection() {
	return (
		<section
			className="relative w-full min-h-screen py-16 px-4 md:px-8"
			id="skills"
		>
			<h2 className="bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-2xl md:text-4xl lg:text-7xl font-sans py-2 md:py-10 relative z-20 font-bold tracking-tight">
				My Skills
			</h2>

			<div className="max-w-7xl mx-auto">
				<SkillTreeViz trees={SKILLS} colors={TREE_COLORS} />
			</div>
		</section>
	);
}
