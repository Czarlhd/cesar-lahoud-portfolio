"use client";

import { useRef, useEffect, useMemo, useState, useCallback } from "react";
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
	const scrollRef = useRef<HTMLDivElement>(null);
	const [scrollProgress, setScrollProgress] = useState(0);
	const entries = useMemo(() => buildTimelineEntries(), []);

	const handleScroll = useCallback(() => {
		const el = scrollRef.current;
		if (!el) return;
		const { scrollTop, scrollHeight, clientHeight } = el;
		const maxScroll = scrollHeight - clientHeight;
		setScrollProgress(maxScroll > 0 ? scrollTop / maxScroll : 0);
	}, []);

	useEffect(() => {
		if (activeEntryId && cardRefs.current.has(activeEntryId)) {
			const card = cardRefs.current.get(activeEntryId);
			card?.scrollIntoView({
				behavior: "smooth",
				block: "nearest",
			});
		}
	}, [activeEntryId]);

	return (
		<div className="relative h-full">
			{/* Background track */}
			<div className="absolute top-0 bottom-0 left-3 w-[2px] bg-neutral-800" />
			{/* Progress fill */}
			<div
				className="absolute top-0 left-3 w-[2px] bg-blue-500 transition-all duration-150"
				style={{ height: `${scrollProgress * 100}%` }}
			/>

			<div
				ref={scrollRef}
				onScroll={handleScroll}
				className="relative flex flex-col gap-3 overflow-y-auto max-h-[70vh] py-2 pl-8 pr-2 scrollbar-hide"
			>
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
