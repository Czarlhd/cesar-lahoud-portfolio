import { NavBar } from "@/components/NavBar";
import ContactSection from "@/components/section/ContactSection";
import FooterSection from "@/components/section/FooterSection";
import HeroSection from "@/components/section/HeroSection";
// import ProjectSection from "@/components/section/ProjectSection";
import ResumeSection from "@/components/section/ResumeSection";
// import { SkillsSection } from "@/components/section/SkillsSection";

export default function Home() {
	return (
		<>
			<NavBar />
			<HeroSection />
			<ResumeSection />
			{/* <ProjectSection /> */}
			{/* <SkillsSection /> */}
			<ContactSection />
			<FooterSection />
		</>
	);
}
