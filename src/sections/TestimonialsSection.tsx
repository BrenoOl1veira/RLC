import { Quote } from "lucide-react";

import { MotionReveal } from "@/components/MotionReveal";
import { SectionHeader } from "@/components/SectionHeader";
import { testimonials } from "@/utils/content";

export function TestimonialsSection() {
  return (
    <section className="section-pad bg-white">
      <div className="container">
        <MotionReveal>
          <SectionHeader
            eyebrow="Depoimentos"
            title="Confianca construida em cada etapa."
            description="Relacionamentos de longo prazo nascem quando a execucao acompanha o que foi prometido."
            align="center"
          />
        </MotionReveal>
        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {testimonials.map((testimonial, index) => (
            <MotionReveal key={testimonial.author} delay={index * 0.06}>
              <figure className="h-full rounded-lg border border-neutral-200 bg-neutral-50 p-7">
                <Quote className="h-9 w-9 text-construction-yellow" />
                <blockquote className="mt-5 text-lg font-semibold leading-8 text-construction-black">
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-6 text-sm font-bold text-neutral-600">
                  {testimonial.author}
                  <span className="block font-medium text-neutral-500">{testimonial.company}</span>
                </figcaption>
              </figure>
            </MotionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
