"use client";

import {
	ComposableMap,
	Geographies,
	Geography,
} from "react-simple-maps";
import MapPin from "./MapPin";
import { MAP_LOCATIONS } from "@/data/resume";

const GEO_URL = "https://cdn.jsdelivr.net/npm/world-atlas@2/land-110m.json";

interface WorldMapProps {
	activeLocationId: string | null;
	onPinClick: (locationId: string) => void;
}

export default function WorldMap({
	activeLocationId,
	onPinClick,
}: WorldMapProps) {
	return (
		<ComposableMap
			projection="geoMercator"
			projectionConfig={{
				center: [-20, 40],
				scale: 200,
			}}
			width={800}
			height={450}
			className="w-full h-auto"
		>
			<Geographies geography={GEO_URL}>
				{({ geographies }) =>
					geographies.map((geo) => (
						<Geography
							key={geo.rsmKey}
							geography={geo}
							fill="#1a1a2e"
							stroke="#2a2a4a"
							strokeWidth={0.5}
							style={{
								default: { outline: "none" },
								hover: { outline: "none" },
								pressed: { outline: "none" },
							}}
						/>
					))
				}
			</Geographies>
			{MAP_LOCATIONS.map((location) => (
				<MapPin
					key={location.id}
					location={location}
					isActive={activeLocationId === location.id}
					onClick={() => onPinClick(location.id)}
				/>
			))}
		</ComposableMap>
	);
}
