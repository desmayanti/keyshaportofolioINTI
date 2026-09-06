import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import BentoHeroCard from "@/components/BentoHeroCard";
import AboutSection from "@/components/AboutSection";
import ScoutingSection from "@/components/ScoutingSection";
import SkillsSection from "@/components/SkillsSection";
import CertificatesSection from "@/components/CertificatesSection";
import PortfolioSection from "@/components/PortfolioSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="w-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#F37100] via-[#D92200] to-[#5A0006] overflow-x-hidden min-h-screen">
      <Navbar />
      
      {/* 1. Bento Hero Card (Cover) */}
      <BentoHeroCard />
      
      {/* 2. About Me (Curtain Pull) */}
      <AboutSection />
      
      {/* 2.5. Scouting Story */}
      <ScoutingSection />
      
      {/* 3. Skills (Floating Cluster) */}
      <SkillsSection />
      
      {/* 3.5. Certificates */}
      <CertificatesSection />

      {/* 4. Portfolio */}
      <PortfolioSection />
      
      {/* 5. Contact & Footer */}
      <ContactSection />
    </div>
  );
};

export default Index;
