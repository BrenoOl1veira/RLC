import type { Metadata } from "next";

import { ContactSection } from "@/sections/ContactSection";
import { ProjectsSection } from "@/sections/ProjectsSection";

export const metadata: Metadata = {
  title: "Projetos",
  description: "Galeria de projetos de infraestrutura, obras comerciais, industriais e terraplenagem."
};

export default function ProjetosPage() {
  return (
    <main className="pt-20">
      <ProjectsSection />
      <ContactSection />
    </main>
  );
}
