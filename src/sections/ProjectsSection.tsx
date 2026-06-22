"use client";

import Image from "next/image";
import { useMemo, useState } from "react";

import { MotionReveal } from "@/components/MotionReveal";
import { SectionHeader } from "@/components/SectionHeader";
import { Button } from "@/components/ui/button";
import { projectCategories, projects } from "@/utils/content";
import { cn } from "@/utils/cn";

export function ProjectsSection() {
  const [active, setActive] = useState("Todos");
  const filteredProjects = useMemo(
    () => (active === "Todos" ? projects : projects.filter((project) => project.category === active)),
    [active]
  );

  return (
    <section id="projetos" className="section-pad bg-neutral-50">
      <div className="container">
        <MotionReveal>
          <SectionHeader
            eyebrow="Projetos"
            title="Galeria de obras realizadas e frentes de atuacao."
            description="Uma leitura visual das entregas que a RLC estrutura para empresas: infraestrutura, areas comerciais, plantas industriais e terraplenagem."
            align="center"
          />
        </MotionReveal>
        <div className="mt-9 flex flex-wrap justify-center gap-2" role="tablist" aria-label="Filtrar projetos">
          {projectCategories.map((category) => (
            <button
              key={category}
              type="button"
              role="tab"
              aria-selected={active === category}
              onClick={() => setActive(category)}
              className={cn(
                "rounded-md border px-4 py-2 text-sm font-bold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-construction-yellow",
                active === category
                  ? "border-construction-black bg-construction-black text-white"
                  : "border-neutral-200 bg-white text-neutral-700 hover:border-construction-yellow"
              )}
            >
              {category}
            </button>
          ))}
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {filteredProjects.map((project, index) => (
            <MotionReveal key={project.title} delay={index * 0.04}>
              <article className="group overflow-hidden rounded-lg bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lift">
                <div className="relative aspect-[16/10]">
                  <Image src={project.image} alt={project.title} fill className="object-cover transition group-hover:scale-105" loading="lazy" />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-construction-black/90 to-transparent p-5 text-white">
                    <span className="rounded-md bg-construction-yellow px-3 py-1 text-xs font-black uppercase tracking-[0.18em] text-construction-black">
                      {project.category}
                    </span>
                    <h3 className="mt-3 font-display text-2xl font-black">{project.title}</h3>
                  </div>
                </div>
              </article>
            </MotionReveal>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Button asChild size="lg">
            <a href="/contato">Solicitar projeto semelhante</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
