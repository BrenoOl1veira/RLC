import { ArrowRight, MessageCircle } from "lucide-react";

import { Button } from "@/components/ui/button";
import { buildWhatsAppUrl } from "@/services/contact";

export function CtaSection() {
  return (
    <section className="bg-yellow-black py-12 text-construction-black">
      <div className="container flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-xs font-black uppercase tracking-[0.24em]">Orcamento rapido</p>
          <h2 className="mt-2 font-display text-3xl font-black md:text-4xl">
            Precisa iniciar uma obra ou locar equipamento?
          </h2>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row">
          <Button asChild size="lg" variant="dark">
            <a href="/contato">
              Entrar em contato
              <ArrowRight className="h-5 w-5" />
            </a>
          </Button>
          <Button asChild size="lg" variant="outline" className="border-construction-black/30 bg-construction-black/10 text-construction-black hover:bg-construction-black hover:text-white">
            <a href={buildWhatsAppUrl()} target="_blank" rel="noreferrer">
              <MessageCircle className="h-5 w-5" />
              WhatsApp
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
