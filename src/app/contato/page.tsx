import type { Metadata } from "next";

import { ContactSection } from "@/sections/ContactSection";

export const metadata: Metadata = {
  title: "Contato",
  description: "Solicite orcamento para obras, infraestrutura, terraplenagem e locacao de equipamentos."
};

export default function ContatoPage() {
  return (
    <main className="pt-20">
      <ContactSection />
    </main>
  );
}
