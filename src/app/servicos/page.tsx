import type { Metadata } from "next";

import { ContactSection } from "@/sections/ContactSection";
import { ServicesSection } from "@/sections/ServicesSection";

export const metadata: Metadata = {
  title: "Servicos",
  description: "Servicos de construcao civil, terraplenagem, infraestrutura, pavimentacao e obras corporativas."
};

export default function ServicosPage() {
  return (
    <main className="pt-20">
      <ServicesSection />
      <ContactSection />
    </main>
  );
}
