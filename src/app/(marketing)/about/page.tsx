import type { Metadata } from "next";
import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import { PageHero } from "@/components/ui/page-hero";
import { Container } from "@/components/ui/container";
import { ContactCta } from "@/components/sections/home/contact-cta";
import { Reveal } from "@/components/motion/reveal";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "About",
  description: "Learn how S.N Group aligns construction, procurement and holdings teams around safe, precise and accountable project delivery.",
  path: "/about",
  image: "/images/team.webp",
});

const principles = [
  ["Own the outcome", "Responsibility continues beyond an individual package or drawing."],
  ["Make risk visible", "Open information and early technical challenge protect delivery."],
  ["Build for use", "Decisions are tested against operation, maintenance and everyday value."],
] as const;

export default function AboutPage() {
  return (
    <>
      <PageHero description="A connected group of builders, procurement specialists and asset teams working from one standard of accountability." eyebrow="About S.N Group" image="/images/team.webp" imageAlt="S.N Group project team reviewing technical plans" title="The best project decisions connect the whole picture." />
      <section className="border-t border-white/10 bg-black text-white section-space">
        <Container className="grid gap-14 lg:grid-cols-12 lg:items-center">
          <Reveal className="lg:col-span-5">
            <p className="eyebrow mb-6 text-cobalt">Our perspective</p>
            <h2 className="display-type text-5xl leading-[0.94] sm:text-7xl">Practical expertise, shared early.</h2>
            <p className="mt-8 text-base leading-8 text-white/62">S.N Group was shaped around a simple observation: projects perform better when commercial, technical and site knowledge meet before decisions become expensive to change.</p>
          </Reveal>
          <Reveal className="relative lg:col-span-6 lg:col-start-7" delay={0.1}>
            <div className="relative aspect-[5/4] overflow-hidden"><Image alt="Construction professionals coordinating a live building project" className="object-cover" fill sizes="(min-width: 1024px) 50vw, 100vw" src="/images/team.webp" /></div>
            <span className="absolute -bottom-5 -left-5 hidden border border-cobalt/35 bg-black p-6 text-xs font-bold uppercase tracking-[0.13em] text-blue-300 sm:block">Dhaka · Bangladesh</span>
          </Reveal>
        </Container>
      </section>
      <section className="blueprint-grid-dark border-t border-white/10 bg-black text-white section-space">
        <Container>
          <Reveal><p className="eyebrow mb-6 text-cobalt">How we work</p><h2 className="display-type max-w-3xl text-5xl leading-[0.94] sm:text-7xl">Standards that travel from boardroom to site.</h2></Reveal>
          <div className="mt-14 grid gap-px overflow-hidden border border-white/12 bg-white/12 lg:grid-cols-3">
            {principles.map(([title, description], index) => (
              <Reveal className="bg-[#090b10] p-8 sm:p-10" delay={index * 0.07} key={title}>
                <CheckCircle2 aria-hidden="true" className="size-7 text-cobalt" />
                <p className="mt-14 text-xs font-bold tabular-nums text-white/35">0{index + 1}</p>
                <h3 className="display-type mt-4 text-4xl">{title}</h3>
                <p className="mt-5 text-sm leading-7 text-white/56">{description}</p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>
      <ContactCta />
    </>
  );
}
