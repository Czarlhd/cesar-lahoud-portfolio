import React from "react";
export default function HeroSection() {
	return (
		<div
			id="home"
			className="w-full overflow-x-hidden min-h-screen grid lg:grid-cols-[0.6fr_0.4fr] gap-[20px]"
		>
			<div className="max-w-[600px] w-[90%] mx-auto py-[30px]">
				<div className="flex flex-col justify-center h-[80%]">
					<h2 className="bg-clip-text text-transparent text-start bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-2xl md:text-4xl lg:text-7xl font-sans py-2 md:py-10 relative z-20 font-bold tracking-tight">
						Cesar Lahoud <br /> Software Developer
					</h2>
					<a
						href="#contact"
						className="text-white border-b border-1 border-[#525252] hover:p-[10px] hover:bg-[#5070ff2f] transition-all ease-in-out mr-auto py-[10px] font-[600]"
					>
						Contact me &rarr;
					</a>
				</div>
			</div>
			<div className="w-[90%] mx-auto py-[30px] flex flex-col justify-center items-center z-2">
				<h2 className="bg-clip-text text-transparent text-start mr-auto bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-2xl md:text-2xl lg:text-3xl font-sans  relative z-20 font-bold tracking-tight">
					About Me
				</h2>
				<p className="max-w-xl mr-auto text-sm md:text-lg text-neutral-700 dark:text-neutral-400 text-start mt-[20px]">
					Hi, I&apos;m Cesar, a passionate software engineer with
					experience in full-stack development, UI design, and
					real-time data systems. I currently work at Citi, where I
					build high-performance applications that traders rely on
					daily.
				</p>
				<p className="max-w-xl mr-auto text-sm md:text-lg text-neutral-700 dark:text-neutral-400 text-start mt-[20px]">
					I&apos;m always picking up new hobbies and finding ways to
					tinker and learn. Whether it&apos;s 3D printing, cooking new
					recipes or crafting cocktails. I think the best way to learn
					a new skill is to dive in and start experimenting.
				</p>
				<p className="max-w-xl mr-auto text-sm md:text-lg text-neutral-700 dark:text-neutral-400 text-start mt-[20px]">
					I&apos;m always looking for the next opportunity to push
					boundaries and build something great.
				</p>
			</div>
		</div>
	);
}
