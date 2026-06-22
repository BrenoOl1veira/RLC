"use client";

import { MessageCircle } from "lucide-react";

import { buildWhatsAppUrl } from "@/services/contact";

export function FloatingWhatsApp() {
  return (
    <a
      href={buildWhatsAppUrl()}
      target="_blank"
      rel="noreferrer"
      aria-label="Falar com a RLC no WhatsApp"
      className="fixed bottom-5 right-5 z-50 grid h-14 w-14 place-items-center rounded-full bg-construction-yellow text-construction-black shadow-industrial transition hover:-translate-y-1 hover:bg-construction-amber focus-visible:outline focus-visible:outline-2 focus-visible:outline-construction-yellow md:h-16 md:w-16"
    >
      <span className="absolute inset-0 rounded-full animate-pulse-ring" aria-hidden="true" />
      <MessageCircle className="relative h-7 w-7" />
    </a>
  );
}
