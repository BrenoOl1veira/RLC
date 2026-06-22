import { StickyCta } from "@/components/StickyCta";
import { AboutSection } from "@/sections/AboutSection";
import { ContactSection } from "@/sections/ContactSection";
import { CtaSection } from "@/sections/CtaSection";
import { DifferentialsSection } from "@/sections/DifferentialsSection";
import { EquipmentSection } from "@/sections/EquipmentSection";
import { FaqSection } from "@/sections/FaqSection";
import { HeroSection } from "@/sections/HeroSection";
import { ProjectsSection } from "@/sections/ProjectsSection";
import { ServicesSection } from "@/sections/ServicesSection";
import { TestimonialsSection } from "@/sections/TestimonialsSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <StickyCta />
      <AboutSection />
      <ServicesSection />
      <DifferentialsSection />
      <EquipmentSection />
      <ProjectsSection />
      <TestimonialsSection />
      <FaqSection />
      <CtaSection />
      <ContactSection />
    </main>
  );
}
