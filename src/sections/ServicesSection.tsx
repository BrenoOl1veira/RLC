import { MotionReveal } from "@/components/MotionReveal";
import { SectionHeader } from "@/components/SectionHeader";
import { services } from "@/utils/content";

export function ServicesSection() {
  return (
    <section id="servicos" className="section-pad bg-neutral-50">
      <div className="container">
        <MotionReveal>
          <SectionHeader
            eyebrow="Servicos"
            title="Solucoes completas para obras, infraestrutura e operacao."
            description="Atuamos de forma integrada para reduzir atrito operacional, organizar o canteiro e acelerar a tomada de decisao do cliente."
            align="center"
          />
        </MotionReveal>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <MotionReveal key={service.title} delay={index * 0.03}>
              <article className="group h-full rounded-lg border border-neutral-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-construction-yellow hover:shadow-lift">
                <div className="grid h-12 w-12 place-items-center rounded-md bg-construction-yellow text-construction-black transition group-hover:bg-construction-black group-hover:text-construction-yellow">
                  <service.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 font-display text-xl font-black">{service.title}</h3>
                <p className="mt-3 text-sm leading-7 text-neutral-600">{service.description}</p>
              </article>
            </MotionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
