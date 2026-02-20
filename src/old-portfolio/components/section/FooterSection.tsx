import React from "react";
import Image from "next/image";

export default function FooterSection() {
	return (
		<div className="max-w-[1200px] w-[90%] mx-auto py-[20px] flex flex-wrap gap-[10px] justify-between items-center border-t border-[#1d1d1d]">
			<a href="/">
				<Image
					src="/images/logo.png"
					width={120}
					height={80}
					className="max-h-[80px] h-full w-auto object-contain object-center"
					alt="logo"
					priority
				/>
			</a>
			<span className="text-[0.9rem] font-[500] text-[#9e9e9e]">
				Cesar Lahoud
			</span>
		</div>
	);
}
