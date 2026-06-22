import { MotionReveal } from "@/components/MotionReveal";
import { SectionHeader } from "@/components/SectionHeader";
import { differentiators } from "@/utils/content";

export function DifferentialsSection() {
  return (
    <section className="section-pad bg-construction-black text-white industrial-texture">
      <div className="container">
        <MotionReveal>
          <SectionHeader
            eyebrow="Diferenciais"
            title="Robustez de campo com gestao profissional."
            description="A RLC combina tecnica, frota, atendimento e disciplina operacional para apoiar decisoes melhores antes, durante e depois da obra."
            inverse
          />
        </MotionReveal>
        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {differentiators.map((item, index) => (
            <MotionReveal key={item.title} delay={index * 0.04}>
              <article className="h-full rounded-lg border border-white/10 bg-white/10 p-6 backdrop-blur transition hover:-translate-y-1 hover:bg-white/15">
                <item.icon className="h-8 w-8 text-construction-yellow" />
                <h3 className="mt-5 font-display text-xl font-black">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-white/70">{item.description}</p>
              </article>
            </MotionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
