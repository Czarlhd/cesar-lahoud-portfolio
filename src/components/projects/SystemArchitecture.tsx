"use client";

import { useState, useMemo } from "react";
import {
	SystemComponent,
	SystemConnection,
	ArchitectureLayer,
} from "@/data/resume";
import { ICON_MAP } from "./SystemPanel";

// ========================
// Icon mapping
// ========================

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function getIcon(iconId: string): React.ComponentType<any> {
	return ICON_MAP[iconId] || ICON_MAP["server"];
}

// ========================
// Layout constants
// ========================

const SVG_WIDTH = 1000;
const SVG_HEIGHT = 600;
const LAYER_PADDING_X = 140;
const LAYER_PADDING_Y = 30;
const LAYER_GAP = 8;
const NODE_RADIUS = 22;

// ========================
// Layout types
// ========================

interface LayoutNode {
	id: string;
	x: number;
	y: number;
	component: SystemComponent;
}

interface LayoutLayer {
	id: string;
	name: string;
	y: number;
	height: number;
	color: string;
	depth: number;
}

function buildLayout(
	components: SystemComponent[],
	layers: ArchitectureLayer[],
): { nodes: LayoutNode[]; layoutLayers: LayoutLayer[] } {
	const sortedLayers = [...layers].sort((a, b) => a.depth - b.depth);
	const totalLayers = sortedLayers.length;
	const usableHeight = SVG_HEIGHT - LAYER_PADDING_Y * 2;
	const layerHeight =
		(usableHeight - LAYER_GAP * (totalLayers - 1)) / totalLayers;

	const layoutLayers: LayoutLayer[] = [];
	const nodes: LayoutNode[] = [];

	sortedLayers.forEach((layer, idx) => {
		// Bottom layer (hardware) at bottom, top layer (networking) at top
		const reversedIdx = totalLayers - 1 - idx;
		const y = LAYER_PADDING_Y + reversedIdx * (layerHeight + LAYER_GAP);

		layoutLayers.push({
			id: layer.id,
			name: layer.name,
			y,
			height: layerHeight,
			color: layer.color,
			depth: layer.depth,
		});

		// Place components within this layer
		const layerComponents = layer.componentIds
			.map((cid) => components.find((c) => c.id === cid))
			.filter(Boolean) as SystemComponent[];

		const usableWidth = SVG_WIDTH - LAYER_PADDING_X * 2;
		const count = layerComponents.length;

		layerComponents.forEach((comp, cIdx) => {
			const x =
				count === 1
					? SVG_WIDTH / 2
					: LAYER_PADDING_X + (cIdx + 0.5) * (usableWidth / count);
			const cy = y + layerHeight / 2;

			nodes.push({ id: comp.id, x, y: cy, component: comp });
		});
	});

	return { nodes, layoutLayers };
}

// ========================
// Component
// ========================

interface Props {
	components: SystemComponent[];
	connections: SystemConnection[];
	layers: ArchitectureLayer[];
	highlightedIds: string[];
}

export default function SystemArchitecture({
	components,
	connections,
	layers,
	highlightedIds,
}: Props) {
	const [hoveredId, setHoveredId] = useState<string | null>(null);

	const { nodes, layoutLayers } = useMemo(
		() => buildLayout(components, layers),
		[components, layers],
	);

	const nodeMap = useMemo(() => {
		const map: Record<string, LayoutNode> = {};
		for (const n of nodes) map[n.id] = n;
		return map;
	}, [nodes]);

	const hoveredNode = hoveredId ? (nodeMap[hoveredId] ?? null) : null;

	return (
		<div className="relative w-full">
			<svg
				viewBox={`0 0 ${SVG_WIDTH} ${SVG_HEIGHT}`}
				className="w-full"
				style={{ overflow: "visible" }}
			>
				<defs>
					<filter
						id="arch-glow"
						x="-60%"
						y="-60%"
						width="220%"
						height="220%"
					>
						<feGaussianBlur stdDeviation="6" result="coloredBlur" />
						<feMerge>
							<feMergeNode in="coloredBlur" />
							<feMergeNode in="SourceGraphic" />
						</feMerge>
					</filter>
				</defs>

				{/* Layer bands */}
				{layoutLayers.map((layer) => (
					<g key={layer.id}>
						<rect
							x={LAYER_PADDING_X - 60}
							y={layer.y}
							width={SVG_WIDTH - (LAYER_PADDING_X - 60) * 2}
							height={layer.height}
							rx={8}
							fill={layer.color}
							opacity={0.05}
						/>
						<text
							x={LAYER_PADDING_X - 70}
							y={layer.y + layer.height / 2}
							textAnchor="end"
							dominantBaseline="middle"
							fontSize="11"
							fill={layer.color}
							fontWeight="600"
							opacity={0.6}
							style={{
								fontFamily: "inherit",
								userSelect: "none",
							}}
						>
							{layer.name}
						</text>
					</g>
				))}

				{/* Connections */}
				{connections.map((conn, idx) => {
					const from = nodeMap[conn.from];
					const to = nodeMap[conn.to];
					if (!from || !to) return null;

					const midY = (from.y + to.y) / 2;
					const isHighlighted =
						highlightedIds.includes(conn.from) ||
						highlightedIds.includes(conn.to);
					const isHoverRelated =
						hoveredId === conn.from || hoveredId === conn.to;

					return (
						<path
							key={`${conn.from}-${conn.to}-${idx}`}
							d={`M ${from.x} ${from.y} C ${from.x} ${midY} ${to.x} ${midY} ${to.x} ${to.y}`}
							fill="none"
							stroke={to.component.color}
							strokeWidth={
								isHighlighted || isHoverRelated ? 2 : 1.2
							}
							opacity={
								isHighlighted || isHoverRelated ? 0.7 : 0.15
							}
							strokeDasharray={conn.animated ? "6 4" : undefined}
							style={{
								transition:
									"opacity 0.2s ease, stroke-width 0.2s ease",
								animation: conn.animated
									? "dashFlow 1s linear infinite"
									: undefined,
							}}
						/>
					);
				})}

				{/* Nodes */}
				{nodes.map((node) => {
					const isHovered = hoveredId === node.id;
					const isHighlighted = highlightedIds.includes(node.id);
					const Icon = getIcon(node.component.icon);
					const r = NODE_RADIUS;

					return (
						<g
							key={node.id}
							onMouseEnter={() => setHoveredId(node.id)}
							onMouseLeave={() => setHoveredId(null)}
							style={{ cursor: "pointer" }}
						>
							{/* Highlight ring */}
							{(isHighlighted || isHovered) && (
								<circle
									cx={node.x}
									cy={node.y}
									r={r + 6}
									fill="none"
									stroke={node.component.color}
									strokeWidth="1.5"
									opacity={0.4}
								/>
							)}

							{/* Node circle */}
							<circle
								cx={node.x}
								cy={node.y}
								r={r}
								fill={
									isHovered || isHighlighted
										? `${node.component.color}30`
										: `${node.component.color}15`
								}
								stroke={node.component.color}
								strokeWidth={isHovered || isHighlighted ? 2 : 1}
								filter={
									isHighlighted
										? "url(#arch-glow)"
										: undefined
								}
								style={{
									transition: "all 0.2s ease",
								}}
							/>

							{/* Icon inside node */}
							<foreignObject
								x={node.x - 10}
								y={node.y - 10}
								width={20}
								height={20}
							>
								<div className="flex items-center justify-center w-full h-full">
									<Icon
										size={14}
										className="opacity-80"
										style={{
											color: node.component.color,
										}}
									/>
								</div>
							</foreignObject>

							{/* Label below node */}
							<text
								x={node.x}
								y={node.y + r + 14}
								textAnchor="middle"
								fontSize="9"
								fill={
									isHovered || isHighlighted
										? node.component.color
										: `${node.component.color}99`
								}
								fontWeight={
									isHovered || isHighlighted ? "600" : "400"
								}
								style={{
									fontFamily: "inherit",
									userSelect: "none",
									transition: "fill 0.2s ease",
								}}
							>
								{node.component.name}
							</text>
						</g>
					);
				})}
			</svg>

			{/* Tooltip */}
			{hoveredNode && (
				<div
					className="absolute z-10 pointer-events-none px-3 py-2 rounded-lg border border-neutral-700 bg-neutral-900/95 backdrop-blur-md text-xs whitespace-nowrap shadow-xl"
					style={{
						left: `${(hoveredNode.x / SVG_WIDTH) * 100}%`,
						top: `${(hoveredNode.y / SVG_HEIGHT) * 100}%`,
						transform: "translate(-50%, calc(-100% - 24px))",
					}}
				>
					<p className="text-white font-semibold mb-0.5">
						{hoveredNode.component.name}
					</p>
					<p className="text-neutral-400 max-w-[240px] whitespace-normal">
						{hoveredNode.component.description}
					</p>
					{hoveredNode.component.metadata && (
						<div className="mt-1 flex flex-wrap gap-x-3 gap-y-0.5">
							{Object.entries(hoveredNode.component.metadata).map(
								([key, val]) => (
									<span
										key={key}
										className="text-neutral-500"
									>
										<span className="text-neutral-600">
											{key}:
										</span>{" "}
										<span
											style={{
												color: hoveredNode.component
													.color,
											}}
										>
											{val}
										</span>
									</span>
								),
							)}
						</div>
					)}
				</div>
			)}

			{/* CSS animation for dashed connection flow */}
			<style jsx>{`
				@keyframes dashFlow {
					to {
						stroke-dashoffset: -20;
					}
				}
			`}</style>
		</div>
	);
}
