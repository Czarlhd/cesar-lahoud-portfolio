"use client";
import { useMotionValue } from "framer-motion";
import React, { useState, useEffect } from "react";
import { useMotionTemplate, motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const EvervaultCard = ({
	className,
	children,
	characters,
}: {
	className?: string;
	children?: any;
	characters: string;
}) => {
	let mouseX = useMotionValue(0);
	let mouseY = useMotionValue(0);

	const [randomString, setRandomString] = useState("");

	useEffect(() => {
		let str = generateRandomString(1500, characters);
		setRandomString(str);
	}, []);

	function onMouseMove({ currentTarget, clientX, clientY }: any) {
		let { left, top } = currentTarget.getBoundingClientRect();
		mouseX.set(clientX - left);
		mouseY.set(clientY - top);

		const str = generateRandomString(1500, characters);
		setRandomString(str);
	}

	return (
		<div
			className={cn(
				"p-0.5  bg-transparent flex items-center justify-center w-full h-full relative",
				className
			)}
		>
			<div
				onMouseMove={onMouseMove}
				className="group/card w-full rounded-2xl relative overflow-hidden bg-transparent flex  h-full"
			>
				<CardPattern
					mouseX={mouseX}
					mouseY={mouseY}
					randomString={randomString}
				/>
				{children}
			</div>
		</div>
	);
};

export function CardPattern({ mouseX, mouseY, randomString }: any) {
	let maskImage = useMotionTemplate`radial-gradient(250px at ${mouseX}px ${mouseY}px, white, transparent)`;
	let style = { maskImage, WebkitMaskImage: maskImage };

	return (
		<div className="pointer-events-none">
			<div className="absolute inset-0 [mask-image:linear-gradient(white,transparent)] group-hover/card:opacity-50"></div>
			<motion.div
				className="absolute inset-0 rounded-2xl bg-gradient-to-r from-green-500 to-blue-700 opacity-0  group-hover/card:opacity-100 backdrop-blur-xl transition duration-500"
				style={style}
			/>
			<motion.div
				className="absolute inset-0 rounded-2xl opacity-0 mix-blend-overlay  group-hover/card:opacity-100"
				style={style}
			>
				<p className="absolute inset-x-0 text-xs rounded-2xl h-full break-words whitespace-pre-wrap text-white font-mono font-bold transition duration-500">
					{randomString}
				</p>
			</motion.div>
		</div>
	);
}

export const generateRandomString = (length: number, characters: string) => {
	let result = "";
	for (let i = 0; i < length; i++) {
		result += characters.charAt(i % characters.length);
	}
	return result;
};
