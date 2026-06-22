import { CheckCircle2 } from "lucide-react";

import { MotionReveal } from "@/components/MotionReveal";
import { SectionHeader } from "@/components/SectionHeader";

const pillars = ["Missao: entregar obras e locacoes com seguranca, prazo e qualidade.", "Visao: ser referencia regional em infraestrutura e equipamentos.", "Valores: transparencia, compromisso, eficiencia, cuidado e responsabilidade."];

export function AboutSection() {
  return (
    <section id="sobre" className="section-pad bg-white">
      <div className="container grid gap-12 lg:grid-cols-[.92fr_1fr] lg:items-center">
        <MotionReveal>
          <SectionHeader
            eyebrow="Sobre nos"
            title="Uma operacao preparada para obras que exigem confianca."
            description="A RLC Obras e Locacoes atua com foco em construcao civil, terraplenagem, infraestrutura e suporte de equipamentos para empresas que precisam de execucao organizada, segura e produtiva."
          />
        </MotionReveal>
        <MotionReveal delay={0.1}>
          <div className="rounded-lg bg-construction-black p-6 text-white shadow-industrial md:p-8">
            <p className="text-lg leading-8 text-white/75">
              Nossa historia e construida em campo: planejamento antes da mobilizacao, acompanhamento durante a execucao e compromisso ate a entrega. Cada demanda recebe uma leitura tecnica para definir equipe, maquina, prazo e metodo adequado.
            </p>
            <div className="mt-8 grid gap-4">
              {pillars.map((pillar) => (
                <div key={pillar} className="flex gap-3 rounded-md border border-white/10 bg-white/10 p-4">
                  <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-construction-yellow" />
                  <p className="text-sm font-semibold leading-6 text-white/75">{pillar}</p>
                </div>
              ))}
            </div>
          </div>
        </MotionReveal>
      </div>
    </section>
  );
}
