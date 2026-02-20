"use client";

import { useState, useMemo } from "react";
import { SkillTree, SkillBranch, SkillLeaf } from "@/data/resume";

const SVG_WIDTH = 1000;
const SVG_HEIGHT = 480;
const H_PADDING = 50;
const ROOT_Y = 40;
const LEVEL_HEIGHT = 95;
const GAP_SLOTS = 1.5;

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
	color: string;
	proficiency?: string;
	yearsOfExperience?: number;
	depth: number;
}

function buildLayout(
	trees: SkillTree[],
	treeColors: Record<string, string>,
): LayoutNode[] {
	const nodes: LayoutNode[] = [];
	const treeLeafIds: string[][] = [];

	// Central root at the top
	nodes.push({
		id: "root",
		label: "",
		x: 0,
		y: ROOT_Y,
		parentId: null,
		isLeaf: false,
		color: "#ffffff",
		depth: 0,
	});

	// Build each skill tree as a branch off the root
	trees.forEach((tree, tIdx) => {
		const treeId = `t${tIdx}`;
		const color = treeColors[tree.name] || "#ffffff";
		const leafIds: string[] = [];

		nodes.push({
			id: treeId,
			label: tree.name,
			x: 0,
			y: ROOT_Y + LEVEL_HEIGHT,
			parentId: "root",
			isLeaf: false,
			color,
			depth: 1,
		});

		function addChildren(
			children: (SkillBranch | SkillLeaf)[],
			parentId: string,
			depth: number,
		) {
			children.forEach((child, idx) => {
				const nodeId = `${parentId}_${idx}`;
				const leaf = isLeaf(child);

				if (leaf) leafIds.push(nodeId);

				nodes.push({
					id: nodeId,
					label: child.name,
					x: 0,
					y: ROOT_Y + depth * LEVEL_HEIGHT,
					parentId,
					isLeaf: leaf,
					color,
					proficiency: leaf ? child.proficiency : undefined,
					yearsOfExperience: leaf ? child.yearsOfExperience : undefined,
					depth,
				});

				if (!leaf) {
					addChildren(
						(child as SkillBranch).children,
						nodeId,
						depth + 1,
					);
				}
			});
		}

		addChildren(tree.branches, treeId, 2);
		treeLeafIds.push(leafIds);
	});

	// Assign leaf x positions with gaps between tree groups
	const leafPositions: Record<string, number> = {};
	let pos = 0;

	treeLeafIds.forEach((leafIds, treeIdx) => {
		if (treeIdx > 0) pos += GAP_SLOTS;
		leafIds.forEach((leafId) => {
			leafPositions[leafId] = pos;
			pos += 1;
		});
	});

	const totalSlots = Math.max(pos, 1);
	const usableWidth = SVG_WIDTH - H_PADDING * 2;
	const slotWidth = usableWidth / totalSlots;

	for (const [nodeId, position] of Object.entries(leafPositions)) {
		const node = nodes.find((n) => n.id === nodeId);
		if (node) node.x = H_PADDING + (position + 0.5) * slotWidth;
	}

	// Center internal nodes over children — deepest first
	const internals = nodes
		.filter((n) => !n.isLeaf && n.id !== "root")
		.sort((a, b) => b.depth - a.depth);

	for (const node of internals) {
		const children = nodes.filter((n) => n.parentId === node.id);
		if (children.length > 0) {
			node.x =
				children.reduce((sum, c) => sum + c.x, 0) / children.length;
		}
	}

	// Center root in the middle of the SVG
	const rootNode = nodes.find((n) => n.id === "root")!;
	rootNode.x = SVG_WIDTH / 2;

	return nodes;
}

interface Props {
	trees: SkillTree[];
	colors: Record<string, string>;
}

export default function SkillTreeViz({ trees, colors }: Props) {
	const [hoveredId, setHoveredId] = useState<string | null>(null);
	const nodes = useMemo(() => buildLayout(trees, colors), [trees, colors]);

	const connections = useMemo(() => {
		return nodes
			.filter((n) => n.parentId !== null)
			.map((n) => ({
				from: nodes.find((p) => p.id === n.parentId)!,
				to: n,
			}));
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
					<filter
						id="glow"
						x="-60%"
						y="-60%"
						width="220%"
						height="220%"
					>
						<feGaussianBlur
							stdDeviation="5"
							result="coloredBlur"
						/>
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
							stroke={to.color}
							strokeWidth="1.5"
							opacity="0.4"
						/>
					);
				})}

				{/* Nodes */}
				{nodes.map((node) => {
					const isHovered = hoveredId === node.id;
					const isRoot = node.depth === 0;
					const isTreeNode = node.depth === 1;
					const r = isRoot
						? 14
						: isTreeNode
							? 11
							: node.isLeaf
								? 7
								: 9;

					return (
						<g
							key={node.id}
							onMouseEnter={() =>
								node.isLeaf && setHoveredId(node.id)
							}
							onMouseLeave={() => setHoveredId(null)}
							style={{
								cursor: node.isLeaf ? "pointer" : "default",
							}}
						>
							{/* Pulse ring on hover */}
							{isHovered && (
								<circle
									cx={node.x}
									cy={node.y}
									r={r + 8}
									fill="none"
									stroke={node.color}
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
									isRoot
										? "#ffffff"
										: isTreeNode
											? node.color
											: isHovered
												? `${node.color}60`
												: `${node.color}25`
								}
								stroke={
									isRoot || isTreeNode ? "none" : node.color
								}
								strokeWidth={isHovered ? 2 : 1.5}
								filter={
									isHovered ? "url(#glow)" : undefined
								}
								style={{ transition: "all 0.15s ease" }}
							/>

							{/* Tree-level labels (below node) */}
							{isTreeNode && (
								<text
									x={node.x}
									y={node.y + r + 16}
									textAnchor="middle"
									fontSize="12"
									fill={node.color}
									fontWeight="700"
									style={{
										fontFamily: "inherit",
										userSelect: "none",
									}}
								>
									{node.label}
								</text>
							)}

							{/* Branch-level labels (above node) */}
							{node.depth === 2 && !node.isLeaf && (
								<text
									x={node.x}
									y={node.y - r - 8}
									textAnchor="middle"
									fontSize="10"
									fill={node.color}
									fontWeight="600"
									style={{
										fontFamily: "inherit",
										userSelect: "none",
									}}
								>
									{node.label}
								</text>
							)}

							{/* Leaf labels (below node, rotated) */}
							{node.isLeaf && (
								<text
									x={node.x}
									y={node.y + r + 10}
									textAnchor="start"
									fontSize="9"
									fill={
										isHovered ? node.color : `${node.color}99`
									}
									fontWeight={isHovered ? "600" : "400"}
									transform={`rotate(40, ${node.x}, ${node.y + r + 10})`}
									style={{
										fontFamily: "inherit",
										userSelect: "none",
										transition: "fill 0.15s ease",
									}}
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
					<p className="text-white font-semibold mb-0.5">
						{hoveredNode.label}
					</p>
					{hoveredNode.proficiency && (
						<p
							className="capitalize font-medium"
							style={{
								color:
									PROFICIENCY_COLORS[
										hoveredNode.proficiency
									] ?? "#9ca3af",
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
