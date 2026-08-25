import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { sisterConcerns } from "@/data/sister-concerns";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/motion/reveal";

export function SisterConcernShowcase() {
  return (
    <section
      aria-label="Our Group Companies"
      className="blueprint-grid-dark border-t border-white/10 bg-black text-white section-space"
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
            <p className="max-w-xl text-base leading-8 text-white/60">
              Each company brings specialized capability, industry leadership, and experienced execution. Together they provide comprehensive synergy across construction, international trade, and property development.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 lg:grid-cols-3">
          {sisterConcerns.map((concern, index) => (
            <Reveal
              className="group relative min-h-[34rem] overflow-hidden bg-navy"
              delay={index * 0.08}
              key={concern.slug}
            >
              <Image
                alt={concern.imageAlt}
                className="object-cover opacity-50 transition duration-700 group-hover:scale-105 group-hover:opacity-65"
                fill
                sizes="(min-width: 1024px) 33vw, 100vw"
                src={concern.image}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/40 to-navy/10" />
              <div className="absolute inset-0 flex flex-col justify-between p-7 text-white sm:p-9">
                <div className="flex items-start justify-between">
                  <span className="text-xs font-bold tabular-nums text-blue-300">
                    0{index + 1}
                  </span>
                  <a
                    aria-label={`Inquire about ${concern.name}`}
                    className="grid size-11 place-items-center rounded-full border border-white/25 bg-white/8 transition-colors hover:bg-white hover:text-navy"
                    href="/contact#quotation-form"
                  >
                    <ArrowUpRight aria-hidden="true" className="size-5" />
                  </a>
                </div>
                <div>
                  <p className="mb-3 text-xs font-bold uppercase tracking-[0.16em] text-blue-300">
                    {concern.discipline}
                  </p>
                  <h3 className="display-type text-3xl font-bold leading-tight sm:text-4xl">
                    {concern.name}
                  </h3>
                  <p className="mt-2 text-xs font-semibold text-blue-200">
                    {concern.headline}
                  </p>
                  <p className="mt-4 line-clamp-3 text-sm leading-6 text-white/70">
                    {concern.description}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
