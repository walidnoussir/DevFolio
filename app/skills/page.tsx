import SkillsHero from "@/components/skills/SkillsHero";
import SkillsCategories from "@/components/skills/SkillsCategories";
import TechStack from "@/components/skills/TechStack";
import ProfessionalStrengths from "@/components/skills/ProfessionalStrengths";

export default function SkillsPage() {
  return (
    <main className="pt-28">
      <SkillsHero />
      <SkillsCategories />
      <TechStack />
      <ProfessionalStrengths />
    </main>
  );
}
