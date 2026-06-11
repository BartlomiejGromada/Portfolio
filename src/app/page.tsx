import { HeroSection } from "@/components/custom/HeroSection";
import { FeaturesSection } from "@/components/custom/FeaturesSection";
import { FocusSection } from "@/components/custom/FocusSection";
import { SkillsSection } from "@/components/custom/SkillsSection";
import { ExperienceSection } from "@/components/custom/ExperienceSection";
import { EducationSection } from "@/components/custom/EducationSection";
import { ContactSection } from "@/components/custom/ContactSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <FocusSection />
      <SkillsSection />
      <ExperienceSection />
      <EducationSection />
      <ContactSection />
    </>
  );
}
