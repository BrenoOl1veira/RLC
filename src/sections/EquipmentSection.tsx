import Image from "next/image";
import { ArrowRight } from "lucide-react";

import { MotionReveal } from "@/components/MotionReveal";
import { SectionHeader } from "@/components/SectionHeader";
import { Button } from "@/components/ui/button";
import { buildWhatsAppUrl } from "@/services/contact";
import { equipments } from "@/utils/content";

export function EquipmentSection() {
  return (
    <section id="equipamentos" className="section-pad bg-white">
      <div className="container">
        <MotionReveal>
          <SectionHeader
            eyebrow="Equipamentos"
            title="Catalogo visual para locacao e apoio em obra."
            description="Equipamentos selecionados para demandas de terraplenagem, transporte, compactacao, infraestrutura e suporte operacional."
            align="center"
          />
        </MotionReveal>
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {equipments.map((equipment, index) => (
            <MotionReveal key={equipment.name} delay={index * 0.04}>
              <article className="group flex h-full flex-col overflow-hidden rounded-lg border border-neutral-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lift">
                <div className="relative aspect-[4/3] bg-neutral-100">
                  <Image src={equipment.image} alt={equipment.name} fill className="object-cover transition group-hover:scale-105" loading="lazy" />
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="font-display text-xl font-black">{equipment.name}</h3>
                  <p className="mt-3 flex-1 text-sm leading-7 text-neutral-600">{equipment.description}</p>
                  <Button asChild className="mt-5 w-full" variant="dark">
                    <a href={buildWhatsAppUrl(`Ola, gostaria de solicitar locacao de ${equipment.name}.`)} target="_blank" rel="noreferrer">
                      Solicitar Locacao
                      <ArrowRight className="h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </article>
            </MotionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
