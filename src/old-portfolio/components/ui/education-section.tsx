import React from "react";

interface positionDetails {
	id: string;
	title: string;
	timeline: string;
}

export interface educationDetails {
	name: string;
	logo: JSX.Element;
	positions: positionDetails[];
}

export default function EducationSection({
	educationDetails,
}: {
	educationDetails: educationDetails;
}) {
	const Logo = educationDetails.logo;

	return (
		<div>
			<div className="flex flex-row gap-2 items-center">
				{Logo}
				<h4 className="text-[#f4f4f4] text-[1.8rem] font-[600]">
					{educationDetails.name}
				</h4>
			</div>
			{educationDetails.positions.map((pos) => (
				<div key={pos.id}>
					<span className="text-blue-400 my-[10px] text-sm">
						{pos.timeline}
					</span>
					<p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-base font-normal mb-8">
						{pos.title}
					</p>
				</div>
			))}
		</div>
	);
}
