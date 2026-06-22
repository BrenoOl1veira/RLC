import { MotionReveal } from "@/components/MotionReveal";
import { SectionHeader } from "@/components/SectionHeader";
import { faqs } from "@/utils/content";

export function FaqSection() {
  return (
    <section className="section-pad bg-neutral-50">
      <div className="container grid gap-10 lg:grid-cols-[.78fr_1fr]">
        <MotionReveal>
          <SectionHeader
            eyebrow="FAQ"
            title="Perguntas frequentes antes do orcamento."
            description="Informacoes essenciais para acelerar a conversa comercial e direcionar a melhor solucao."
          />
        </MotionReveal>
        <div className="grid gap-4">
          {faqs.map((faq, index) => (
            <MotionReveal key={faq.question} delay={index * 0.04}>
              <details className="group rounded-lg border border-neutral-200 bg-white p-5 shadow-sm">
                <summary className="cursor-pointer list-none font-display text-lg font-black marker:hidden">
                  {faq.question}
                  <span className="float-right text-construction-amber transition group-open:rotate-45">+</span>
                </summary>
                <p className="mt-4 text-sm leading-7 text-neutral-600">{faq.answer}</p>
              </details>
            </MotionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
