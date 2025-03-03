import { NavBar } from "@/components/NavBar";
import ContactSection from "@/components/section/ContactSection";
import FooterSection from "@/components/section/FooterSection";
import HeroSection from "@/components/section/HeroSection";
import ResumeSection from "@/components/section/ResumeSection";

export default function Home() {
	return (
		<>
			<NavBar />
			<HeroSection />
			<ResumeSection />
			<ContactSection />
			<FooterSection />
		</>
	);
}
