"use client";

import { useState, useCallback } from "react";
import dynamic from "next/dynamic";
import PinPopup from "./PinPopup";
import ExperienceTimeline from "./ExperienceTimeline";
import { MAP_LOCATIONS } from "@/data/resume";

const WorldMap = dynamic(() => import("./WorldMap"), { ssr: false });

export default function ResumeSection() {
	const [activeLocationId, setActiveLocationId] = useState<string | null>(
		null
	);
	const [activeEntryId, setActiveEntryId] = useState<string | null>(null);

	const activeLocation = activeLocationId
		? MAP_LOCATIONS.find((loc) => loc.id === activeLocationId) ?? null
		: null;

	const handlePinClick = useCallback((locationId: string) => {
		setActiveLocationId((prev) => (prev === locationId ? null : locationId));
		setActiveEntryId(null);
	}, []);

	const handleTimelineEntryClick = useCallback(
		(locationId: string, entryId: string) => {
			setActiveLocationId(locationId);
			setActiveEntryId((prev) => (prev === entryId ? null : entryId));
		},
		[]
	);

	const handlePopupClose = useCallback(() => {
		setActiveLocationId(null);
		setActiveEntryId(null);
	}, []);

	return (
		<section className="relative w-full min-h-screen py-16 px-4 md:px-8">
			<h2 className="text-3xl md:text-5xl font-bold text-white text-center mb-12">
				Experience & Education
			</h2>

			<div className="relative max-w-5xl mx-auto">
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

			<div className="max-w-5xl mx-auto">
				<ExperienceTimeline
					activeLocationId={activeLocationId}
					activeEntryId={activeEntryId}
					onEntryClick={handleTimelineEntryClick}
				/>
			</div>
		</section>
	);
}
