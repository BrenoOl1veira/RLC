import { cn } from "@/utils/cn";

type SectionHeaderProps = {
  eyebrow: string;
  title: string;
  description: string;
  align?: "left" | "center";
  inverse?: boolean;
};

export function SectionHeader({ eyebrow, title, description, align = "left", inverse }: SectionHeaderProps) {
  return (
    <div className={cn("max-w-3xl", align === "center" && "mx-auto text-center")}>
      <p className="mb-3 text-xs font-black uppercase tracking-[0.26em] text-construction-amber">
        {eyebrow}
      </p>
      <h2
        className={cn(
          "font-display text-3xl font-black leading-tight md:text-5xl",
          inverse ? "text-white" : "text-construction-black"
        )}
      >
        {title}
      </h2>
      <p className={cn("mt-5 text-base leading-8 md:text-lg", inverse ? "text-white/70" : "text-neutral-600")}>
        {description}
      </p>
    </div>
  );
}
