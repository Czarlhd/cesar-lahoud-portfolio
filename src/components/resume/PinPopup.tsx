"use client";

import { useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapLocation } from "@/data/resume";
import { cn } from "@/lib/utils";

interface PinPopupProps {
	location: MapLocation | null;
	activeEntryId: string | null;
	onClose: () => void;
}

export default function PinPopup({
	location,
	activeEntryId,
	onClose,
}: PinPopupProps) {
	const popupRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (!location) return;
		function handleClick(e: MouseEvent) {
			if (
				popupRef.current &&
				!popupRef.current.contains(e.target as Node)
			) {
				onClose();
			}
		}
		document.addEventListener("mousedown", handleClick);
		return () => document.removeEventListener("mousedown", handleClick);
	}, [location, onClose]);

	return (
		<AnimatePresence mode="wait">
			{location && (
				<motion.div
					ref={popupRef}
					key={location.id}
					initial={{ opacity: 0, y: 10, scale: 0.95 }}
					animate={{ opacity: 1, y: 0, scale: 1 }}
					exit={{ opacity: 0, y: 10, scale: 0.95 }}
					transition={{ duration: 0.2 }}
					className="absolute top-4 right-4 z-50 w-[380px] max-h-[400px] overflow-y-auto
								bg-neutral-900/95 backdrop-blur-md border border-neutral-700
								rounded-xl p-5 shadow-2xl"
				>
					<h3 className="text-neutral-400 text-sm font-medium mb-4">
						{location.name}
					</h3>

					{location.entries.map((entry, entryIdx) => (
						<div
							key={entry.name}
							className={cn(
								"mb-4 last:mb-0",
								entryIdx > 0 &&
									"border-t border-neutral-700 pt-4",
							)}
						>
							<div className="flex items-center gap-3 mb-2">
								{entry.logo}
								<div>
									<h4 className="text-white font-semibold text-base">
										{entry.name}
									</h4>
									<span className="text-xs text-neutral-500 uppercase tracking-wide">
										{entry.type === "job"
											? "Experience"
											: "Education"}
									</span>
								</div>
							</div>

							{entry.positions.map((pos) => (
								<div
									key={pos.id}
									className={cn(
										"ml-2 pl-3 border-l-2 py-2",
										activeEntryId === pos.id
											? "border-blue-500"
											: "border-neutral-700",
									)}
								>
									<p className="text-blue-400 text-sm font-medium">
										{pos.title}
									</p>
									<p className="text-neutral-500 text-xs mb-1">
										{pos.timeline}
									</p>
									{pos.points && pos.points.length > 0 && (
										<ul className="text-neutral-300 text-xs space-y-1 list-disc list-inside">
											{pos.points.map((point, i) => (
												<li key={i}>{point}</li>
											))}
										</ul>
									)}
								</div>
							))}
						</div>
					))}
				</motion.div>
			)}
		</AnimatePresence>
	);
}
