"use client";

import { useState, useCallback } from "react";
import dynamic from "next/dynamic";
import PinPopup from "../resume/PinPopup";
import ExperienceTimeline from "../resume/ExperienceTimeline";
import { MAP_LOCATIONS } from "@/data/resume";

const WorldMap = dynamic(() => import("../resume/WorldMap"), { ssr: false });

export default function ResumeSection() {
	const [activeLocationId, setActiveLocationId] = useState<string | null>(
		null,
	);
	const [activeEntryId, setActiveEntryId] = useState<string | null>(null);

	const activeLocation = activeLocationId
		? (MAP_LOCATIONS.find((loc) => loc.id === activeLocationId) ?? null)
		: null;

	const handlePinClick = useCallback((locationId: string) => {
		setActiveLocationId((prev) =>
			prev === locationId ? null : locationId,
		);
		setActiveEntryId(null);
	}, []);

	const handleTimelineEntryClick = useCallback(
		(locationId: string, entryId: string) => {
			setActiveLocationId(locationId);
			setActiveEntryId((prev) => (prev === entryId ? null : entryId));
		},
		[],
	);

	const handlePopupClose = useCallback(() => {
		setActiveLocationId(null);
		setActiveEntryId(null);
	}, []);

	return (
		<section
			className="relative w-full min-h-screen py-16 px-4 md:px-8"
			id="resume"
		>
			<h2 className="bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-2xl md:text-4xl lg:text-7xl font-sans py-2 md:py-10 relative z-20 font-bold tracking-tight">
				My Journey
			</h2>

			<div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-6">
				<div className="relative flex-1 min-w-0">
					<WorldMap
						activeLocationId={activeLocationId}
						onPinClick={handlePinClick}
					/>
					<PinPopup
						location={activeLocation}
						activeEntryId={activeEntryId}
						onClose={handlePopupClose}
					/>
				</div>

				<div className="md:w-[280px] flex-shrink-0">
					<ExperienceTimeline
						activeLocationId={activeLocationId}
						activeEntryId={activeEntryId}
						onEntryClick={handleTimelineEntryClick}
					/>
				</div>
			</div>
		</section>
	);
}
