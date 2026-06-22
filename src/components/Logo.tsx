import Link from "next/link";

export function Logo() {
  return (
    <Link href="/" className="group inline-flex items-center gap-3" aria-label="RLC Obras e Locacoes - Inicio">
      <span className="grid h-11 w-11 place-items-center rounded-md bg-construction-yellow font-display text-lg font-black text-construction-black shadow-lift transition-transform group-hover:-translate-y-0.5">
        R
      </span>
      <span className="leading-none">
        <span className="block font-display text-lg font-black text-white">RLC</span>
        <span className="block text-[0.68rem] font-bold uppercase tracking-[0.18em] text-white/70">
          Obras e Locacoes
        </span>
      </span>
    </Link>
  );
}
