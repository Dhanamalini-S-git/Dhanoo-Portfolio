import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import EducationSection from "@/components/EducationSection";
import InternshipsSection from "@/components/InternshipsSection";
import CertificatesSection from "@/components/CertificatesSection";
import BadgesSection from "@/components/BadgesSection"; // already imported
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <EducationSection />
      <InternshipsSection />
      <CertificatesSection />

      {/* ✅ BADGES SECTION ADDED HERE */}
      //<BadgesSection />

      <ProjectsSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
