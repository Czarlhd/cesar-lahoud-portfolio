"use client";

import { useState, useMemo } from "react";
import { SkillTree, SkillBranch, SkillLeaf } from "@/data/resume";

const SVG_WIDTH = 500;
const SVG_HEIGHT = 320;
const H_PADDING = 40;
const ROOT_Y = 280;
const LEVEL_HEIGHT = 100;

const PROFICIENCY_COLORS: Record<string, string> = {
	beginner: "#9ca3af",
	intermediate: "#fbbf24",
	advanced: "#f97316",
	expert: "#ef4444",
	fluent: "#60a5fa",
};

function isLeaf(node: SkillBranch | SkillLeaf): node is SkillLeaf {
	return !("children" in node);
}

interface LayoutNode {
	id: string;
	label: string;
	x: number;
	y: number;
	parentId: string | null;
	isLeaf: boolean;
	proficiency?: string;
	yearsOfExperience?: number;
	depth: number;
}

function buildLayout(tree: SkillTree): LayoutNode[] {
	const nodes: LayoutNode[] = [];
	const leafIndices: Record<string, number> = {};
	let leafCounter = 0;

	nodes.push({
		id: "root",
		label: tree.name,
		x: SVG_WIDTH / 2,
		y: ROOT_Y,
		parentId: null,
		isLeaf: false,
		depth: 0,
	});

	function traverse(
		children: (SkillBranch | SkillLeaf)[],
		parentId: string,
		depth: number,
	) {
		children.forEach((child, idx) => {
			const nodeId = `${parentId}_${idx}`;
			const leaf = isLeaf(child);

			if (leaf) {
				leafIndices[nodeId] = leafCounter++;
			}

			nodes.push({
				id: nodeId,
				label: child.name,
				x: 0,
				y: ROOT_Y - depth * LEVEL_HEIGHT,
				parentId,
				isLeaf: leaf,
				proficiency: leaf ? child.proficiency : undefined,
				yearsOfExperience: leaf ? child.yearsOfExperience : undefined,
				depth,
			});

			if (!leaf) {
				traverse((child as SkillBranch).children, nodeId, depth + 1);
			}
		});
	}

	traverse(tree.branches, "root", 1);

	const totalLeaves = Math.max(leafCounter, 1);
	const usableWidth = SVG_WIDTH - H_PADDING * 2;
	const slotWidth = usableWidth / totalLeaves;

	for (const [nodeId, leafIdx] of Object.entries(leafIndices)) {
		const node = nodes.find((n) => n.id === nodeId);
		if (node) node.x = H_PADDING + (leafIdx + 0.5) * slotWidth;
	}

	// Center internal (non-root, non-leaf) nodes over their children — deepest first
	const internalNodes = nodes
		.filter((n) => !n.isLeaf && n.id !== "root")
		.sort((a, b) => b.depth - a.depth);

	for (const node of internalNodes) {
		const children = nodes.filter((n) => n.parentId === node.id);
		if (children.length > 0) {
			node.x = children.reduce((sum, c) => sum + c.x, 0) / children.length;
		}
	}

	return nodes;
}

interface Props {
	tree: SkillTree;
	color: string;
}

export default function SkillTreeViz({ tree, color }: Props) {
	const [hoveredId, setHoveredId] = useState<string | null>(null);
	const nodes = useMemo(() => buildLayout(tree), [tree]);
	const filterId = `glow_${tree.name.replace(/\s+/g, "_")}`;

	const connections = useMemo(() => {
		return nodes
			.filter((n) => n.parentId !== null)
			.map((n) => {
				const parent = nodes.find((p) => p.id === n.parentId)!;
				return { from: parent, to: n };
			});
	}, [nodes]);

	const hoveredNode = hoveredId
		? (nodes.find((n) => n.id === hoveredId) ?? null)
		: null;

	return (
		<div className="relative w-full">
			<svg
				viewBox={`0 0 ${SVG_WIDTH} ${SVG_HEIGHT}`}
				className="w-full"
				style={{ overflow: "visible" }}
			>
				<defs>
					<filter id={filterId} x="-60%" y="-60%" width="220%" height="220%">
						<feGaussianBlur stdDeviation="5" result="coloredBlur" />
						<feMerge>
							<feMergeNode in="coloredBlur" />
							<feMergeNode in="SourceGraphic" />
						</feMerge>
					</filter>
				</defs>

				{/* Connections */}
				{connections.map(({ from, to }) => {
					const midY = (from.y + to.y) / 2;
					return (
						<path
							key={`${from.id}-${to.id}`}
							d={`M ${from.x} ${from.y} C ${from.x} ${midY} ${to.x} ${midY} ${to.x} ${to.y}`}
							fill="none"
							stroke={color}
							strokeWidth="1.5"
							opacity="0.45"
						/>
					);
				})}

				{/* Nodes */}
				{nodes.map((node) => {
					const isHovered = hoveredId === node.id;
					const r = node.depth === 0 ? 12 : node.isLeaf ? 7 : 9;

					return (
						<g
							key={node.id}
							onMouseEnter={() => node.isLeaf && setHoveredId(node.id)}
							onMouseLeave={() => setHoveredId(null)}
							style={{ cursor: node.isLeaf ? "pointer" : "default" }}
						>
							{/* Pulse ring on hover */}
							{isHovered && (
								<circle
									cx={node.x}
									cy={node.y}
									r={r + 8}
									fill="none"
									stroke={color}
									strokeWidth="1"
									opacity="0.35"
								/>
							)}

							{/* Node circle */}
							<circle
								cx={node.x}
								cy={node.y}
								r={r}
								fill={
									node.depth === 0
										? color
										: isHovered
											? `${color}60`
											: `${color}25`
								}
								stroke={color}
								strokeWidth={node.depth === 0 ? 0 : isHovered ? 2 : 1.5}
								filter={isHovered ? `url(#${filterId})` : undefined}
								style={{ transition: "all 0.15s ease" }}
							/>

							{/* Labels — branches shown above node, root shown below */}
							{!node.isLeaf && (
								<text
									x={node.x}
									y={node.y}
									textAnchor="middle"
									fontSize={node.depth === 0 ? 12 : 10}
									fill={node.depth === 0 ? "#000000" : color}
									dy={node.depth === 0 ? r + 16 : -(r + 8)}
									fontWeight="600"
									style={{ fontFamily: "inherit", userSelect: "none" }}
								>
									{node.label}
								</text>
							)}
						</g>
					);
				})}
			</svg>

			{/* Tooltip for leaf nodes */}
			{hoveredNode && (
				<div
					className="absolute z-10 pointer-events-none px-3 py-2 rounded-lg border border-neutral-700 bg-neutral-900/95 backdrop-blur-md text-xs whitespace-nowrap shadow-xl"
					style={{
						left: `${(hoveredNode.x / SVG_WIDTH) * 100}%`,
						top: `${(hoveredNode.y / SVG_HEIGHT) * 100}%`,
						transform: "translate(-50%, calc(-100% - 14px))",
					}}
				>
					<p className="text-white font-semibold mb-0.5">{hoveredNode.label}</p>
					{hoveredNode.proficiency && (
						<p
							className="capitalize font-medium"
							style={{
								color:
									PROFICIENCY_COLORS[hoveredNode.proficiency] ?? "#9ca3af",
							}}
						>
							{hoveredNode.proficiency}
						</p>
					)}
					{hoveredNode.yearsOfExperience && (
						<p className="text-neutral-400">
							{hoveredNode.yearsOfExperience} yr
							{hoveredNode.yearsOfExperience > 1 ? "s" : ""}
						</p>
					)}
				</div>
			)}
		</div>
	);
}
