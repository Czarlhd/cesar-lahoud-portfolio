import React from "react";
import { FloatingDock } from "@/components/ui/floating-dock";
import { IconHome, IconMail } from "@tabler/icons-react";
import { GoProjectRoadmap } from "react-icons/go";

export function NavBar() {
	const links = [
		{
			title: "Home",
			icon: (
				<IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
			),
			href: "#home",
		},

		{
			title: "Resume",
			icon: (
				<GoProjectRoadmap className="h-full w-full text-neutral-500 dark:text-neutral-300" />
			),
			href: "#resume",
		},
		{
			title: "Contact",
			icon: (
				<IconMail className="h-full w-full text-neutral-500 dark:text-neutral-300" />
			),
			href: "#contact",
		},
	];
	return (
		<div>
			<div className="fixed left-[90%] translate-x-[-90%] md:left-[50%] md:translate-x-[-50%] bottom-[50px] z-[101]">
				<FloatingDock items={links} />
			</div>
		</div>
	);
}
