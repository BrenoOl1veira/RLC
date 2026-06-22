"use client";

import { Menu, MessageCircle, X } from "lucide-react";
import { useState } from "react";

import { Logo } from "@/components/Logo";
import { Button } from "@/components/ui/button";
import { buildWhatsAppUrl } from "@/services/contact";
import { navItems } from "@/utils/content";
import { cn } from "@/utils/cn";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-construction-black/90 backdrop-blur-xl">
      <div className="container flex h-20 items-center justify-between">
        <Logo />
        <nav className="hidden items-center gap-7 lg:flex" aria-label="Navegacao principal">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-bold text-white/75 transition hover:text-construction-yellow focus-visible:outline focus-visible:outline-2 focus-visible:outline-construction-yellow"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <div className="hidden items-center gap-3 lg:flex">
          <Button asChild size="sm" variant="outline">
            <a href={buildWhatsAppUrl()} target="_blank" rel="noreferrer" aria-label="Falar com a RLC no WhatsApp">
              <MessageCircle className="h-4 w-4" />
              WhatsApp
            </a>
          </Button>
          <Button asChild size="sm">
            <a href="/contato">Solicitar Orcamento</a>
          </Button>
        </div>
        <button
          className="grid h-11 w-11 place-items-center rounded-md border border-white/15 text-white lg:hidden"
          type="button"
          aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((current) => !current)}
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>
      <div
        className={cn(
          "grid border-t border-white/10 bg-construction-black transition-[grid-template-rows] lg:hidden",
          isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        )}
      >
        <div className="overflow-hidden">
          <nav className="container flex flex-col gap-1 py-4" aria-label="Navegacao mobile">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-md px-3 py-3 font-bold text-white/80 hover:bg-white/10 hover:text-construction-yellow"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <Button asChild className="mt-3">
              <a href="/contato" onClick={() => setIsOpen(false)}>
                Solicitar Orcamento
              </a>
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
}
