import React from "react";
import { Timeline } from "@/components/ui/timeline";

export default function ResumeSection() {
	const data = [
		{
			title: "Experience",
			content: (
				<div className="flex flex-col gap-[30px]">
					<div>
						<h4 className="text-[#f4f4f4] text-[1.8rem] font-[600]">
							Citi Bank - Equities
						</h4>
						<span className="text-blue-400 my-[10px]">
							2024 - Present
						</span>
						<p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
							Full Stack Developer
						</p>
					</div>
					<div>
						<h4 className="text-[#f4f4f4] text-[1.8rem] font-[600]">
							Citi Bank - Rates
						</h4>
						<span className="text-blue-400 my-[10px]">
							2023 - 2024
						</span>
						<p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
							UI Developer
						</p>
					</div>
				</div>
			),
		},
		{
			title: "Education",
			content: (
				<div className="flex flex-col gap-[30px]">
					<div>
						<h4 className="text-[#f4f4f4] text-[1.8rem] font-[600]">
							McGill University
						</h4>
						<span className="text-blue-400 my-[10px]">
							2024 - Present
						</span>
						<p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
							Full Stack Developer
						</p>
					</div>
				</div>
			),
		},
		{
			title: "Certificates",
			content: (
				<div className="flex flex-col gap-[30px]">
					<div>
						<h4 className="text-[#f4f4f4] text-[1.8rem] font-[600]">
							PostgreSQL
						</h4>
						<span className="text-blue-400 my-[10px]">
							2024 - Present
						</span>
						<p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
							Full Stack Developer
						</p>
					</div>
				</div>
			),
		},
	];
	return (
		<div className="w-full" id="resume">
			<Timeline data={data} />
		</div>
	);
}
