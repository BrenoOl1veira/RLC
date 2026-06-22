import { MessageCircle } from "lucide-react";

import { Button } from "@/components/ui/button";
import { buildWhatsAppUrl } from "@/services/contact";

export function StickyCta() {
  return (
    <div className="sticky top-20 z-40 hidden border-b border-neutral-200 bg-white/90 py-3 backdrop-blur lg:block">
      <div className="container flex items-center justify-between gap-4">
        <p className="text-sm font-bold text-neutral-700">
          RLC Obras e Locacoes: obras, terraplenagem, infraestrutura e equipamentos.
        </p>
        <div className="flex gap-3">
          <Button asChild size="sm" variant="ghost">
            <a href="/contato">Solicitar orcamento</a>
          </Button>
          <Button asChild size="sm" variant="dark">
            <a href={buildWhatsAppUrl()} target="_blank" rel="noreferrer">
              <MessageCircle className="h-4 w-4" />
              WhatsApp
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
}
