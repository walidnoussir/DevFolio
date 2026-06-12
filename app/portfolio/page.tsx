import PortfolioHero from "@/components/portfolio/PortfolioHero";
import ProjectsGrid from "@/components/portfolio/ProjectsGrid";
import ArchitectureSection from "@/components/portfolio/ArchitectureSection";
import PortfolioCTA from "@/components/portfolio/PortfolioCTA";

export default function PortfolioPage() {
  return (
    <main className="pt-28">
      <PortfolioHero />
      <ProjectsGrid />
      <ArchitectureSection />
      <PortfolioCTA />
    </main>
  );
}
