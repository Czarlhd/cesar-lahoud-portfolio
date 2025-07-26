import React from "react";
export interface certificateDetails {
	name: string;
	logo: JSX.Element;
	provider: string;
	timeline: string;
}

export default function CertificateSection({
	certificateDetails,
}: {
	certificateDetails: certificateDetails;
}) {
	const Logo = certificateDetails.logo;

	return (
		<div>
			<div className="flex flex-row gap-2 items-center">
				{Logo}
				<h4 className="text-[#f4f4f4] text-[1.8rem] font-[600]">
					{certificateDetails.name}{" "}
				</h4>
			</div>

			<ul>
				<p className="text-blue-400 mt-[10px] text-lg">
					{certificateDetails.provider}
				</p>
				<p className="text-blue-400 mb-[10px] text-sm">
					{certificateDetails.timeline}
				</p>
			</ul>
		</div>
	);
}
