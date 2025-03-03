"use client";
import { animate, motion } from "framer-motion";
import React, { useEffect } from "react";
import { cn } from "@/lib/utils";
import { IconBrandReact } from "@tabler/icons-react";
import { BiLogoPostgresql } from "react-icons/bi";
import { FcLinux } from "react-icons/fc";

export function Skills() {
	return (
		<div className="flex flex-col mt-[100px] justify-start items-center">
			<h3 className="text-xl mb-[-50px] md:mb-[-100px] font-bold text-neutral-200">
				Key Skills
			</h3>
			<CardSkeletonContainer>
				<Skeleton />
			</CardSkeletonContainer>
		</div>
	);
}

const Skeleton = () => {
	const scale = [1, 1.1, 1];
	const transform = [
		"translateY(0px)",
		"translateY(-4px)",
		"translateY(0px)",
	];
	const sequence = [
		[
			".circle-1",
			{
				scale,
				transform,
			},
			{ duration: 0.8 },
		],
		[
			".circle-2",
			{
				scale,
				transform,
			},
			{ duration: 0.8 },
		],
		[
			".circle-3",
			{
				scale,
				transform,
			},
			{ duration: 0.8 },
		],
		[
			".circle-4",
			{
				scale,
				transform,
			},
			{ duration: 0.8 },
		],
		[
			".circle-5",
			{
				scale,
				transform,
			},
			{ duration: 0.8 },
		],
	];

	useEffect(() => {
		animate(sequence, {
			// @ts-expect-error because
			repeat: Infinity,
			repeatDelay: 1,
		});
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
	return (
		<div className="p-8 overflow-hidden h-full relative flex items-center justify-center">
			<div className="flex flex-row flex-shrink-0 justify-center items-center gap-2">
				<Container className="h-8 w-8 circle-1">
					<BiLogoPostgresql className="h-4 w-4 dark:text-[#0277BD]" />
				</Container>
				<Container className="h-12 w-12 circle-2">
					<JavaLogo className="h-6 w-6 dark:text-white" />
				</Container>
				<Container className="circle-3">
					<IconBrandReact className="h-8 w-8 dark:text-[#61dbfb]" />
				</Container>
				<Container className="h-12 w-12 circle-4">
					<PythonLogo className="h-6 w-6" />
				</Container>
				<Container className="h-8 w-8 circle-5">
					<FcLinux className="h-4 w-4" />
				</Container>
			</div>

			<div className="h-40 w-px absolute top-20 m-auto z-40 bg-gradient-to-b from-transparent via-cyan-500 to-transparent animate-move">
				<div className="w-10 h-32 top-1/2 -translate-y-1/2 absolute -left-10">
					<Sparkles />
				</div>
			</div>
		</div>
	);
};
const Sparkles = () => {
	const randomMove = () => Math.random() * 2 - 1;
	const randomOpacity = () => Math.random();
	const random = () => Math.random();
	return (
		<div className="absolute inset-0">
			{[...Array(12)].map((_, i) => (
				<motion.span
					key={`star-${i}`}
					animate={{
						top: `calc(${random() * 100}% + ${randomMove()}px)`,
						left: `calc(${random() * 100}% + ${randomMove()}px)`,
						opacity: randomOpacity(),
						scale: [1, 1.2, 0],
					}}
					transition={{
						duration: random() * 2 + 4,
						repeat: Infinity,
						ease: "linear",
					}}
					style={{
						position: "absolute",
						top: `${random() * 100}%`,
						left: `${random() * 100}%`,
						width: `2px`,
						height: `2px`,
						borderRadius: "50%",
						zIndex: 1,
					}}
					className="inline-block bg-black dark:bg-white"
				></motion.span>
			))}
		</div>
	);
};

export const Card = ({
	className,
	children,
}: {
	className?: string;
	children: React.ReactNode;
}) => {
	return (
		<div
			className={cn(
				"max-w-sm w-full mx-auto p-8 rounded-xl border border-[rgba(255,255,255,0.10)] dark:bg-[rgba(40,40,40,0.70)] bg-gray-100 shadow-[2px_4px_16px_0px_rgba(248,248,248,0.06)_inset] group",
				className
			)}
		>
			{children}
		</div>
	);
};

export const CardTitle = ({
	children,
	className,
}: {
	children: React.ReactNode;
	className?: string;
}) => {
	return (
		<h3
			className={cn(
				"text-lg font-semibold text-gray-800 dark:text-white py-2",
				className
			)}
		>
			{children}
		</h3>
	);
};

export const CardDescription = ({
	children,
	className,
}: {
	children: React.ReactNode;
	className?: string;
}) => {
	return (
		<p
			className={cn(
				"text-sm font-normal text-neutral-600 dark:text-neutral-400 max-w-sm",
				className
			)}
		>
			{children}
		</p>
	);
};

export const CardSkeletonContainer = ({
	className,
	children,
	showGradient = true,
}: {
	className?: string;
	children: React.ReactNode;
	showGradient?: boolean;
}) => {
	return (
		<div
			className={cn(
				"h-[15rem] md:h-[20rem] rounded-xl z-40",
				className,
				showGradient &&
					"bg-neutral-300 dark:bg-[rgba(40,40,40,0.70)] [mask-image:radial-gradient(50%_50%_at_50%_50%,white_0%,transparent_100%)]"
			)}
		>
			{children}
		</div>
	);
};

const Container = ({
	className,
	children,
}: {
	className?: string;
	children: React.ReactNode;
}) => {
	return (
		<div
			className={cn(
				`h-16 w-16 rounded-full flex items-center justify-center bg-[rgba(248,248,248,0.01)]
    shadow-[0px_0px_8px_0px_rgba(248,248,248,0.25)_inset,0px_32px_24px_-16px_rgba(0,0,0,0.40)]
    `,
				className
			)}
		>
			{children}
		</div>
	);
};

export const PythonLogo = ({ className }: { className?: string }) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			x="0px"
			y="0px"
			width="48"
			height="48"
			viewBox="0 0 48 48"
			className={className}
		>
			<path
				fill="#0277BD"
				d="M24.047,5c-1.555,0.005-2.633,0.142-3.936,0.367c-3.848,0.67-4.549,2.077-4.549,4.67V14h9v2H15.22h-4.35c-2.636,0-4.943,1.242-5.674,4.219c-0.826,3.417-0.863,5.557,0,9.125C5.851,32.005,7.294,34,9.931,34h3.632v-5.104c0-2.966,2.686-5.896,5.764-5.896h7.236c2.523,0,5-1.862,5-4.377v-8.586c0-2.439-1.759-4.263-4.218-4.672C27.406,5.359,25.589,4.994,24.047,5z M19.063,9c0.821,0,1.5,0.677,1.5,1.502c0,0.833-0.679,1.498-1.5,1.498c-0.837,0-1.5-0.664-1.5-1.498C17.563,9.68,18.226,9,19.063,9z"
			></path>
			<path
				fill="#FFC107"
				d="M23.078,43c1.555-0.005,2.633-0.142,3.936-0.367c3.848-0.67,4.549-2.077,4.549-4.67V34h-9v-2h9.343h4.35c2.636,0,4.943-1.242,5.674-4.219c0.826-3.417,0.863-5.557,0-9.125C41.274,15.995,39.831,14,37.194,14h-3.632v5.104c0,2.966-2.686,5.896-5.764,5.896h-7.236c-2.523,0-5,1.862-5,4.377v8.586c0,2.439,1.759,4.263,4.218,4.672C19.719,42.641,21.536,43.006,23.078,43z M28.063,39c-0.821,0-1.5-0.677-1.5-1.502c0-0.833,0.679-1.498,1.5-1.498c0.837,0,1.5,0.664,1.5,1.498C29.563,38.32,28.899,39,28.063,39z"
			></path>
		</svg>
	);
};
export const JavaLogo = ({ className }: { className?: string }) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			x="0px"
			y="0px"
			width="48"
			height="48"
			viewBox="0 0 48 48"
			className={className}
		>
			<path
				fill="#F44336"
				d="M23.65,24.898c-0.998-1.609-1.722-2.943-2.725-5.455C19.229,15.2,31.24,11.366,26.37,3.999c2.111,5.089-7.577,8.235-8.477,12.473C17.07,20.37,23.645,24.898,23.65,24.898z"
			></path>
			<path
				fill="#F44336"
				d="M23.878,17.27c-0.192,2.516,2.229,3.857,2.299,5.695c0.056,1.496-1.447,2.743-1.447,2.743s2.728-0.536,3.579-2.818c0.945-2.534-1.834-4.269-1.548-6.298c0.267-1.938,6.031-5.543,6.031-5.543S24.311,11.611,23.878,17.27z"
			></path>
			<g>
				<path
					fill="#1565C0"
					d="M32.084 25.055c1.754-.394 3.233.723 3.233 2.01 0 2.901-4.021 5.643-4.021 5.643s6.225-.742 6.225-5.505C37.521 24.053 34.464 23.266 32.084 25.055zM29.129 27.395c0 0 1.941-1.383 2.458-1.902-4.763 1.011-15.638 1.147-15.638.269 0-.809 3.507-1.638 3.507-1.638s-7.773-.112-7.773 2.181C11.683 28.695 21.858 28.866 29.129 27.395z"
				></path>
				<path
					fill="#1565C0"
					d="M27.935,29.571c-4.509,1.499-12.814,1.02-10.354-0.993c-1.198,0-2.974,0.963-2.974,1.889c0,1.857,8.982,3.291,15.63,0.572L27.935,29.571z"
				></path>
				<path
					fill="#1565C0"
					d="M18.686,32.739c-1.636,0-2.695,1.054-2.695,1.822c0,2.391,9.76,2.632,13.627,0.205l-2.458-1.632C24.271,34.404,17.014,34.579,18.686,32.739z"
				></path>
				<path
					fill="#1565C0"
					d="M36.281,36.632c0-0.936-1.055-1.377-1.433-1.588c2.228,5.373-22.317,4.956-22.317,1.784c0-0.721,1.807-1.427,3.477-1.093l-1.42-0.839C11.26,34.374,9,35.837,9,37.017C9,42.52,36.281,42.255,36.281,36.632z"
				></path>
				<path
					fill="#1565C0"
					d="M39,38.604c-4.146,4.095-14.659,5.587-25.231,3.057C24.341,46.164,38.95,43.628,39,38.604z"
				></path>
			</g>
		</svg>
	);
};
