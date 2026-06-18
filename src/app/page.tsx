import { HeroSection } from "@/components/custom/HeroSection";
import { CoreStackSection } from "@/components/custom/CoreStackSection";
import { ServicesSection } from "@/components/custom/ServicesSection";
import { ContactSection } from "@/components/custom/ContactSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <CoreStackSection />
      <ServicesSection />
      <ContactSection />
    </>
  );
}
