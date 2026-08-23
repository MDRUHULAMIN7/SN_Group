import Image from "next/image";
import { ArrowDownRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/motion/reveal";
import { BlueprintParallax } from "@/components/motion/blueprint-parallax";

const facts = [
  { value: "03", label: "Coordinated disciplines" },
  { value: "01", label: "Accountable group standard" },
  { value: "360°", label: "Project perspective" },
] as const;

export function GroupStorySection() {
  return (
    <section className="blueprint-grid-dark relative overflow-hidden border-t border-white/10 bg-black text-white section-space" id="group-story">
      <BlueprintParallax />
      <Container className="relative">
        <div className="grid gap-14 lg:grid-cols-12 lg:items-start">
          <Reveal className="lg:col-span-5 lg:pt-16">
            <SectionHeading eyebrow="One group, shared standards" inverse title="Built around the whole project—not just one package." />
            <p className="mt-8 max-w-xl text-base leading-8 text-white/62">
              S.N Group aligns construction delivery, supply-chain procurement and long-term asset thinking from the first decision. That shared perspective exposes risk earlier, protects buildability and keeps every team focused on the same outcome.
            </p>
          </Reveal>
          <Reveal className="relative lg:col-span-6 lg:col-start-7" delay={0.12}>
            <div className="relative aspect-[4/5] overflow-hidden bg-navy sm:aspect-[5/4] lg:aspect-[4/5]">
              <Image alt="S.N Group engineers coordinating site drawings" className="object-cover" fill sizes="(min-width: 1024px) 47vw, 100vw" src="/images/team.webp" />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/70 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 max-w-xs bg-cobalt p-6 text-white sm:p-8">
                <ArrowDownRight aria-hidden="true" className="mb-8 size-7" />
                <p className="display-type text-3xl leading-none">Decisions travel faster when teams share context.</p>
              </div>
            </div>
            <span aria-hidden="true" className="absolute -right-5 -top-5 -z-10 size-32 border-r border-t border-cobalt/40" />
          </Reveal>
        </div>
        <div className="mt-16 grid border-y border-white/12 sm:grid-cols-3 lg:mt-24">
          {facts.map((fact, index) => (
            <Reveal className="border-b border-white/12 px-0 py-7 last:border-b-0 sm:border-b-0 sm:border-r sm:px-7 sm:last:border-r-0 lg:px-10" delay={index * 0.08} key={fact.label}>
              <p className="display-type text-5xl text-cobalt">{fact.value}</p>
              <p className="mt-2 text-sm font-semibold text-white/52">{fact.label}</p>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
