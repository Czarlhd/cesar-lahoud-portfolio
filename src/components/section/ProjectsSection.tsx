"use client";

import { useState, useCallback } from "react";
import { PROJECTS } from "@/data/resume";
import SystemPanel from "../projects/SystemPanel";
import SystemDetail from "../projects/SystemDetail";

export default function ProjectsSection() {
	const [activeProjectId, setActiveProjectId] = useState<string | null>(null);

	const activeProject = activeProjectId
		? (PROJECTS.find((p) => p.id === activeProjectId) ?? null)
		: null;

	const handlePanelClick = useCallback((projectId: string) => {
		setActiveProjectId(projectId);
	}, []);

	const handleClose = useCallback(() => {
		setActiveProjectId(null);
	}, []);

	return (
		<section
			className="relative w-full min-h-screen py-16 px-4 md:px-8"
			id="projects"
		>
			<h2 className="bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-2xl md:text-4xl lg:text-7xl font-sans py-2 md:py-10 relative z-20 font-bold tracking-tight">
				Projects
			</h2>

			<div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
				{PROJECTS.map((project) => (
					<SystemPanel
						key={project.id}
						project={project}
						onClick={() => handlePanelClick(project.id)}
					/>
				))}
			</div>

			<SystemDetail project={activeProject} onClose={handleClose} />
		</section>
	);
}
