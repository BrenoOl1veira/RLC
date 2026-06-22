import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";

import { Logo } from "@/components/Logo";
import { buildMailToUrl, buildWhatsAppUrl, companyContacts } from "@/services/contact";
import { navItems } from "@/utils/content";

export function Footer() {
  return (
    <footer className="bg-construction-black text-white">
      <div className="container grid gap-10 py-14 md:grid-cols-[1.2fr_.8fr_.8fr]">
        <div>
          <Logo />
          <p className="mt-5 max-w-md text-sm leading-7 text-white/60">
            Obras, infraestrutura, terraplenagem e locacao de equipamentos com padrao profissional, gestao tecnica e foco em resultado.
          </p>
        </div>
        <div>
          <h2 className="font-display text-lg font-black">Navegacao</h2>
          <ul className="mt-5 space-y-3 text-sm text-white/70">
            {navItems.map((item) => (
              <li key={item.href}>
                <a className="transition hover:text-construction-yellow" href={item.href}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="font-display text-lg font-black">Contato</h2>
          <ul className="mt-5 space-y-4 text-sm text-white/70">
            <li className="flex gap-3">
              <Phone className="h-5 w-5 text-construction-yellow" />
              {companyContacts.phone}
            </li>
            <li className="flex gap-3">
              <Mail className="h-5 w-5 text-construction-yellow" />
              <a href={buildMailToUrl()}>{companyContacts.email}</a>
            </li>
            <li className="flex gap-3">
              <MessageCircle className="h-5 w-5 text-construction-yellow" />
              <a href={buildWhatsAppUrl()} target="_blank" rel="noreferrer">
                {companyContacts.whatsappLabel}
              </a>
            </li>
            <li className="flex gap-3">
              <MapPin className="h-5 w-5 text-construction-yellow" />
              {companyContacts.address}
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 py-5">
        <div className="container flex flex-col gap-3 text-xs text-white/50 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} RLC Obras e Locacoes. Todos os direitos reservados.</p>
          <p>SEO tecnico, performance, acessibilidade e conversao.</p>
        </div>
      </div>
    </footer>
  );
}
