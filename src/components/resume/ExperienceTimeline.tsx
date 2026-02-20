"use client";

import { useRef, useEffect, useMemo } from "react";
import TimelineCard, { TimelineEntry } from "./TimelineCard";
import { MAP_LOCATIONS } from "@/data/resume";

interface ExperienceTimelineProps {
	activeLocationId: string | null;
	activeEntryId: string | null;
	onEntryClick: (locationId: string, entryId: string) => void;
}

function buildTimelineEntries(): TimelineEntry[] {
	const entries: TimelineEntry[] = [];
	for (const loc of MAP_LOCATIONS) {
		for (const entry of loc.entries) {
			for (const pos of entry.positions) {
				entries.push({
					id: pos.id,
					locationId: loc.id,
					companyName: entry.name,
					logo: entry.logo,
					title: pos.title,
					timeline: pos.timeline,
					type: entry.type,
				});
			}
		}
	}
	return entries;
}

export default function ExperienceTimeline({
	activeLocationId,
	activeEntryId,
	onEntryClick,
}: ExperienceTimelineProps) {
	const cardRefs = useRef<Map<string, HTMLDivElement>>(new Map());
	const entries = useMemo(() => buildTimelineEntries(), []);

	useEffect(() => {
		if (activeEntryId && cardRefs.current.has(activeEntryId)) {
			const card = cardRefs.current.get(activeEntryId);
			card?.scrollIntoView({
				behavior: "smooth",
				block: "nearest",
				inline: "center",
			});
		}
	}, [activeEntryId]);

	return (
		<div className="relative mt-8">
			<div className="absolute top-1/2 left-0 right-0 h-[2px] bg-neutral-800 -translate-y-1/2" />

			<div className="relative flex gap-4 overflow-x-auto pb-4 px-4">
				{entries.map((entry) => (
					<TimelineCard
						key={entry.id}
						ref={(el) => {
							if (el) cardRefs.current.set(entry.id, el);
						}}
						entry={entry}
						isLocationActive={activeLocationId === entry.locationId}
						isEntryActive={activeEntryId === entry.id}
						onClick={() => onEntryClick(entry.locationId, entry.id)}
					/>
				))}
			</div>
		</div>
	);
}
