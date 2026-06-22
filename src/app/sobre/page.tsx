import type { Metadata } from "next";

import { AboutSection } from "@/sections/AboutSection";
import { CtaSection } from "@/sections/CtaSection";
import { DifferentialsSection } from "@/sections/DifferentialsSection";

export const metadata: Metadata = {
  title: "Sobre Nos",
  description: "Conheca a historia, missao, visao e valores da RLC Obras e Locacoes."
};

export default function SobrePage() {
  return (
    <main className="pt-20">
      <AboutSection />
      <DifferentialsSection />
      <CtaSection />
    </main>
  );
}
