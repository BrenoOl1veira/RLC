import { Mail, MapPin, Phone } from "lucide-react";

import { ContactForm } from "@/components/ContactForm";
import { MotionReveal } from "@/components/MotionReveal";
import { SectionHeader } from "@/components/SectionHeader";
import { companyContacts } from "@/services/contact";

export function ContactSection() {
  return (
    <section id="contato" className="section-pad bg-construction-black text-white industrial-texture">
      <div className="container grid gap-10 lg:grid-cols-[.82fr_1fr] lg:items-start">
        <MotionReveal>
          <SectionHeader
            eyebrow="Contato"
            title="Conte o que sua empresa precisa executar."
            description="Receba uma avaliacao comercial para obra, infraestrutura, terraplenagem ou locacao de equipamentos."
            inverse
          />
          <div className="mt-8 grid gap-4 text-sm text-white/70">
            <p className="flex items-center gap-3">
              <Phone className="h-5 w-5 text-construction-yellow" />
              {companyContacts.phone}
            </p>
            <p className="flex items-center gap-3">
              <Mail className="h-5 w-5 text-construction-yellow" />
              {companyContacts.email}
            </p>
            <p className="flex items-center gap-3">
              <MapPin className="h-5 w-5 text-construction-yellow" />
              {companyContacts.address}
            </p>
          </div>
          <div className="mt-8 overflow-hidden rounded-lg border border-white/10 bg-white/10">
            <iframe
              title="Mapa de atendimento RLC Obras e Locacoes"
              src="https://www.google.com/maps?q=Sao%20Paulo%2C%20Brasil&output=embed"
              className="h-64 w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </MotionReveal>
        <MotionReveal delay={0.1}>
          <ContactForm />
        </MotionReveal>
      </div>
    </section>
  );
}
