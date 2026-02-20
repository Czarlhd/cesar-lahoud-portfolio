"use client";

import { Marker } from "react-simple-maps";
import { motion } from "framer-motion";
import { MapLocation } from "@/data/resume";

interface MapPinProps {
	location: MapLocation;
	isActive: boolean;
	onClick: () => void;
}

export default function MapPin({ location, isActive, onClick }: MapPinProps) {
	return (
		<Marker coordinates={location.coordinates}>
			<motion.g
				onClick={onClick}
				className="cursor-pointer"
				whileHover={{ scale: 1.3 }}
				animate={{ scale: isActive ? 1.4 : 1 }}
				transition={{ type: "spring", stiffness: 300, damping: 20 }}
			>
				{isActive && (
					<motion.circle
						r={12}
						fill="none"
						stroke="#3b82f6"
						strokeWidth={1.5}
						initial={{ r: 6, opacity: 1 }}
						animate={{ r: 16, opacity: 0 }}
						transition={{ duration: 1.5, repeat: Infinity }}
					/>
				)}
				<circle
					r={6}
					fill={isActive ? "#3b82f6" : "#60a5fa"}
					stroke="#ffffff"
					strokeWidth={1.5}
				/>
				<text
					textAnchor="middle"
					y={-12}
					className="fill-white text-[10px] font-medium pointer-events-none select-none"
				>
					{location.name.split(",")[0]}
				</text>
			</motion.g>
		</Marker>
	);
}
