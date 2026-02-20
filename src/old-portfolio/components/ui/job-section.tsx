import React from "react";
interface positionDetails {
	id: string;
	title: string;
	points: string[];
	timeline: string;
}

export interface jobDetails {
	name: string;
	logo: JSX.Element;
	positions: positionDetails[];
}

export default function JobSection({ jobDetails }: { jobDetails: jobDetails }) {
	const Logo = jobDetails.logo;

	return (
		<div>
			<div className="flex flex-row gap-2 items-center">
				{Logo}
				<h4 className="text-[#f4f4f4] text-[1.8rem] font-[600]">
					{jobDetails.name}
				</h4>
			</div>
			{jobDetails.positions.map((pos: positionDetails) => (
				<div key={pos.id}>
					<ul className="backdrop-blur-sm bg-black rounded-lg ">
						<p className="text-blue-400 mt-[10px] text-lg">
							{pos.title}
						</p>
						<p className="text-blue-400 mb-[10px] text-sm">
							{pos.timeline}
						</p>
					</ul>

					<ul className="text-neutral-800 dark:text-neutral-200 text-xs md:text-base font-normal mb-8 list-disc list-inside">
						{pos.points.map((point: string, idx: number) => (
							<li key={idx}>{point}</li>
						))}
					</ul>
				</div>
			))}
		</div>
	);
}
