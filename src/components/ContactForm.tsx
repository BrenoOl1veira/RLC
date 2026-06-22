"use client";

import { Send } from "lucide-react";
import { FormEvent, useState } from "react";

import { Button } from "@/components/ui/button";
import { buildMailToUrl, buildWhatsAppUrl } from "@/services/contact";

const fields = [
  { name: "nome", label: "Nome", type: "text", autoComplete: "name" },
  { name: "empresa", label: "Empresa", type: "text", autoComplete: "organization" },
  { name: "telefone", label: "Telefone", type: "tel", autoComplete: "tel" },
  { name: "email", label: "Email", type: "email", autoComplete: "email" }
];

export function ContactForm() {
  const [status, setStatus] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const message = [
      "Solicitacao de orcamento - RLC Obras e Locacoes",
      `Nome: ${form.get("nome")}`,
      `Empresa: ${form.get("empresa")}`,
      `Telefone: ${form.get("telefone")}`,
      `Email: ${form.get("email")}`,
      `Mensagem: ${form.get("mensagem")}`
    ].join("\n");

    setStatus("Abrindo WhatsApp com os dados preenchidos.");
    window.open(buildWhatsAppUrl(message), "_blank", "noopener,noreferrer");
  }

  return (
    <form className="rounded-lg bg-white p-5 shadow-industrial md:p-7" onSubmit={handleSubmit}>
      <div className="grid gap-4 sm:grid-cols-2">
        {fields.map((field) => (
          <label key={field.name} className="block">
            <span className="text-sm font-bold text-construction-black">{field.label}</span>
            <input
              className="mt-2 h-12 w-full rounded-md border border-neutral-200 bg-neutral-50 px-4 text-sm transition focus:border-construction-yellow focus:bg-white focus:outline-none focus:ring-4 focus:ring-construction-yellow/20"
              name={field.name}
              type={field.type}
              autoComplete={field.autoComplete}
              required={field.name !== "empresa"}
            />
          </label>
        ))}
      </div>
      <label className="mt-4 block">
        <span className="text-sm font-bold text-construction-black">Mensagem</span>
        <textarea
          className="mt-2 min-h-32 w-full rounded-md border border-neutral-200 bg-neutral-50 px-4 py-3 text-sm transition focus:border-construction-yellow focus:bg-white focus:outline-none focus:ring-4 focus:ring-construction-yellow/20"
          name="mensagem"
          required
        />
      </label>
      <div className="mt-5 flex flex-col gap-3 sm:flex-row">
        <Button className="w-full sm:w-auto" size="lg" type="submit">
          <Send className="h-5 w-5" />
          Enviar pelo WhatsApp
        </Button>
        <Button asChild className="w-full sm:w-auto" size="lg" variant="dark">
          <a href={buildMailToUrl()}>Enviar por Email</a>
        </Button>
      </div>
      <p className="mt-3 min-h-5 text-sm text-neutral-600" aria-live="polite">
        {status}
      </p>
    </form>
  );
}
