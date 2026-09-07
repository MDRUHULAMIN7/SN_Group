import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { sisterConcerns } from "@/data/sister-concerns";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/motion/reveal";

export function SisterConcernShowcase() {
  return (
    <section
      aria-label="Our Group Companies"
      className="blueprint-grid border-t border-slate-200 bg-white py-20 text-ink sm:py-24"
      id="group-companies"
    >
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.7fr_1fr] lg:items-end">
          <Reveal>
            <p className="eyebrow mb-3 text-blue-400">Our Group Companies</p>
            <h2 className="display-type text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
              Three Disciplines. One Shared Standard.
            </h2>
          </Reveal>
          <Reveal className="lg:justify-self-end" delay={0.1}>
            <p className="max-w-xl text-base leading-8 text-ink/62">
              Each company brings specialized capability, industry leadership, and experienced execution. Together they provide comprehensive synergy across construction, international trade, and property development.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-slate-200 bg-slate-200 shadow-[0_22px_65px_rgba(15,23,42,0.09)] lg:grid-cols-3">
          {sisterConcerns.map((concern, index) => (
            <Reveal
              className="h-full"
              delay={index * 0.08}
              key={concern.slug}
            >
              <div className="group relative h-full min-h-136 overflow-hidden bg-white">
                <Image
                  alt={concern.imageAlt}
                  className="transform-gpu object-cover opacity-85 transition-transform duration-500 ease-out will-change-transform backface-hidden group-hover:scale-105"
                  fill
                  sizes="(min-width: 1024px) 33vw, 100vw"
                  src={concern.image}
                />
                <div className="absolute inset-0 bg-linear-to-t from-white/92 via-white/48 to-transparent transition-opacity duration-500 ease-out group-hover:opacity-75" />
                <div className="absolute inset-0 flex flex-col justify-between p-7 text-ink sm:p-9">
                  <div className="flex items-start justify-between">
                    <span className="text-xs font-bold tabular-nums text-cobalt">
                      0{index + 1}
                    </span>
                    <a
                      aria-label={`Inquire about ${concern.name}`}
                      className="grid size-11 place-items-center rounded-full border border-cobalt/25 bg-white/92 shadow-sm backdrop-blur-sm transition-[background-color,color,border-color,box-shadow] duration-300 hover:border-cobalt hover:bg-cobalt hover:text-white hover:shadow-[0_10px_24px_rgba(21,94,239,0.24)]"
                      href="/contact#quotation-form"
                    >
                      <ArrowUpRight aria-hidden="true" className="size-5 transition-transform duration-300 group-hover:rotate-45" />
                    </a>
                  </div>
                  <div>
                    <p className="mb-3 text-xs font-bold uppercase tracking-[0.16em] text-cobalt">
                      {concern.discipline}
                    </p>
                    <h3 className="display-type text-3xl font-bold leading-tight sm:text-4xl">
                      {concern.name}
                    </h3>
                    <p className="mt-2 text-xs font-semibold text-cobalt/80">
                      {concern.headline}
                    </p>
                    <p className="mt-4 line-clamp-3 text-sm leading-6 text-ink/68">
                      {concern.description}
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
