"use client";

import { useRef, useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Project, NarrativeType } from "@/data/resume";
import SystemArchitecture from "./SystemArchitecture";
import NarrativeSection from "./NarrativeSection";
import { IconX } from "@tabler/icons-react";
import { cn } from "@/lib/utils";

interface SystemDetailProps {
	project: Project | null;
	onClose: () => void;
}

const TABS: { id: NarrativeType; label: string }[] = [
	{ id: "decision", label: "Decisions" },
	{ id: "constraint", label: "Constraints" },
	{ id: "tradeoff", label: "Tradeoffs" },
	{ id: "lesson", label: "Lessons" },
];

export default function SystemDetail({ project, onClose }: SystemDetailProps) {
	const contentRef = useRef<HTMLDivElement>(null);
	const [activeTab, setActiveTab] = useState<NarrativeType>("decision");
	const [highlightedComponentIds, setHighlightedComponentIds] = useState<
		string[]
	>([]);

	// Close on click outside content
	const handleBackdropClick = useCallback(
		(e: React.MouseEvent) => {
			if (
				contentRef.current &&
				!contentRef.current.contains(e.target as Node)
			) {
				onClose();
			}
		},
		[onClose],
	);

	// Close on Escape
	useEffect(() => {
		if (!project) return;
		const handleKey = (e: KeyboardEvent) => {
			if (e.key === "Escape") onClose();
		};
		window.addEventListener("keydown", handleKey);
		return () => window.removeEventListener("keydown", handleKey);
	}, [project, onClose]);

	// Reset tab when project changes
	useEffect(() => {
		setActiveTab("decision");
		setHighlightedComponentIds([]);
	}, [project?.id]);

	return (
		<AnimatePresence mode="wait">
			{project && (
				<motion.div
					className="fixed inset-0 z-[102] flex items-center justify-center bg-black/80 backdrop-blur-sm"
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					onClick={handleBackdropClick}
				>
					<motion.div
						ref={contentRef}
						initial={{ opacity: 0, y: 20, scale: 0.95 }}
						animate={{ opacity: 1, y: 0, scale: 1 }}
						exit={{ opacity: 0, y: 20, scale: 0.95 }}
						transition={{ duration: 0.2 }}
						className="relative w-[95vw] max-w-6xl max-h-[90vh] overflow-y-auto bg-neutral-950 border border-neutral-800 rounded-2xl p-6 md:p-8 shadow-2xl scrollbar-hide"
					>
						{/* Close button */}
						<button
							onClick={onClose}
							className="absolute top-4 right-4 p-2 rounded-lg text-neutral-500 hover:text-white hover:bg-neutral-800 transition-colors z-10"
						>
							<IconX size={18} />
						</button>

						{/* Header */}
						<div className="mb-6">
							<h3 className="text-white text-2xl font-bold mb-1">
								{project.name}
							</h3>
							<p className="text-neutral-400 text-sm max-w-3xl">
								{project.description}
							</p>
						</div>

						{/* Architecture Diagram */}
						<div className="rounded-xl border border-neutral-800 bg-neutral-900/30 p-4 mb-8">
							<SystemArchitecture
								components={project.components}
								connections={project.connections}
								layers={project.layers}
								highlightedIds={highlightedComponentIds}
							/>
						</div>

						{/* Narrative Tabs */}
						<div>
							<div className="flex gap-1 border-b border-neutral-800 mb-6">
								{TABS.map((tab) => {
									const count = project.narratives.filter(
										(n) => n.type === tab.id,
									).length;
									if (count === 0) return null;
									return (
										<button
											key={tab.id}
											onClick={() => setActiveTab(tab.id)}
											className={cn(
												"px-4 py-2 text-sm font-medium transition-colors relative",
												activeTab === tab.id
													? "text-white"
													: "text-neutral-500 hover:text-neutral-300",
											)}
										>
											{tab.label}
											<span className="ml-1.5 text-xs text-neutral-600">
												{count}
											</span>
											{activeTab === tab.id && (
												<motion.div
													layoutId="tab-underline"
													className="absolute bottom-0 left-0 right-0 h-[2px]"
													style={{
														backgroundColor:
															project.accentColor,
													}}
												/>
											)}
										</button>
									);
								})}
							</div>

							<NarrativeSection
								entries={project.narratives.filter(
									(n) => n.type === activeTab,
								)}
								onEntryHover={setHighlightedComponentIds}
							/>
						</div>
					</motion.div>
				</motion.div>
			)}
		</AnimatePresence>
	);
}
