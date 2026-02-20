import { NavBar } from "@/components/NavBar";
import ContactSection from "@/components/section/ContactSection";
import FooterSection from "@/components/section/FooterSection";
import HeroSection from "@/components/section/HeroSection";
import ResumeSection from "@/components/section/ResumeSection";
import SkillsSection from "@/components/skills/SkillsSection";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";

export default function Home() {
	return (
		<main>
			<NavBar />
			<HeroSection />
			<ResumeSection />
			<SkillsSection />
			<ContactSection />
			<FooterSection />
			<ShootingStars className="fixed z-[-1]" />
			<StarsBackground className="fixed z-[-1]" />
		</main>
	);
}
