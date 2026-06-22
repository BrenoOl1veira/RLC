import Image from "next/image";
import { ArrowRight, MessageCircle, ShieldCheck } from "lucide-react";

import { Button } from "@/components/ui/button";
import { buildWhatsAppUrl } from "@/services/contact";
import { stats } from "@/utils/content";

export function HeroSection() {
  return (
    <section className="relative isolate min-h-[92vh] overflow-hidden bg-construction-black pt-28 text-white md:pt-32">
      <Image
        src="/assets/hero-construction.svg"
        alt="Obra de infraestrutura com equipamentos pesados da RLC"
        fill
        priority
        className="object-cover opacity-44"
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(26,26,26,.96)_0%,rgba(26,26,26,.74)_48%,rgba(26,26,26,.36)_100%)]" />
      <div className="absolute inset-0 industrial-texture opacity-50" />
      <div className="container relative z-10 grid min-h-[calc(92vh-8rem)] items-center gap-10 py-14 lg:grid-cols-[1.02fr_.78fr]">
        <div className="max-w-4xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-md border border-white/15 bg-white/10 px-4 py-2 text-sm font-bold text-white/90 backdrop-blur">
            <ShieldCheck className="h-4 w-4 text-construction-yellow" />
            Engenharia, obras e locacoes com padrao corporativo
          </div>
          <h1 className="font-display text-4xl font-black leading-[1.03] md:text-6xl lg:text-7xl">
            Construindo o futuro com qualidade, seguranca e eficiencia.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/75 md:text-xl">
            Solucoes completas em obras, infraestrutura e locacao de equipamentos para sua empresa.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg">
              <a href="/contato">
                Solicitar Orcamento
                <ArrowRight className="h-5 w-5" />
              </a>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a href={buildWhatsAppUrl()} target="_blank" rel="noreferrer">
                <MessageCircle className="h-5 w-5" />
                Falar no WhatsApp
              </a>
            </Button>
          </div>
        </div>
        <div className="grid gap-3 rounded-lg border border-white/10 bg-white/10 p-4 backdrop-blur-md md:grid-cols-3 lg:grid-cols-1">
          {stats.map((stat) => (
            <div key={stat.label} className="rounded-md border border-white/10 bg-construction-black/50 p-5">
              <strong className="font-display text-4xl font-black text-construction-yellow">{stat.value}</strong>
              <p className="mt-2 text-sm font-semibold leading-6 text-white/70">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
