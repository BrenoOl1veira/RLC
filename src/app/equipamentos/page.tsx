import type { Metadata } from "next";

import { CtaSection } from "@/sections/CtaSection";
import { EquipmentSection } from "@/sections/EquipmentSection";

export const metadata: Metadata = {
  title: "Equipamentos",
  description: "Catalogo de maquinas e equipamentos para locacao em obras e terraplenagem."
};

export default function EquipamentosPage() {
  return (
    <main className="pt-20">
      <EquipmentSection />
      <CtaSection />
    </main>
  );
}
