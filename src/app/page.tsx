import HeroSection from "@/components/HeroSection";
import ProjectsSection from "@/components/ProjectsSection";
import PublicationsSection from "@/components/PublicationsSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection />
      <ProjectsSection />
      <PublicationsSection />
      <Footer />
    </div>
  );
}
