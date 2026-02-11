import { Navbar } from "../components/ui/Navbar";
import { StarBackground } from "@/components/ui/StarBackground";
import { HeroSection } from "../components/ui/HeroSection";
import { AboutSection } from "../components/ui/AboutSection";
import { SkillsSection } from "../components/ui/SkillsSection";
import { ProjectsSection } from "../components/ui/ProjectsSection";
import { ContactSection } from "../components/ui/ContactSection";
import { Footer } from "../components/ui/Footer";

export const Home = () => {
  return (
    <div className="relative min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* 🌌 Background */}
      <StarBackground />

      {/* 🧭 Navbar (owns theme toggle now) */}
      <Navbar />

      {/* 📄 Page Content */}
      <main className="relative z-10">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />
   
    </div>
  );
};
