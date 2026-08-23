import Image from "next/image";
import { Check, Mail, Phone } from "lucide-react";
import type { SisterConcern } from "@/types/content";
import { Container } from "@/components/ui/container";
import { ButtonLink } from "@/components/ui/button";
import { Reveal } from "@/components/motion/reveal";

export function ConcernDetail({ concern }: { concern: SisterConcern }) {
  return (
    <>
      <section className="blueprint-grid-dark relative flex min-h-[82svh] items-end overflow-hidden bg-navy pb-16 pt-40 text-white sm:pb-20">
        <Image alt={concern.imageAlt} className="object-cover opacity-55" fill preload sizes="100vw" src={concern.image} />
        <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/72 to-navy/20" />
        <Container className="relative z-10">
          <p className="eyebrow mb-7 text-blue-300">{concern.discipline}</p>
          <h1 className="display-type max-w-[12ch] text-[clamp(4.5rem,10vw,10rem)] leading-[0.84]">{concern.name}</h1>
          <p className="mt-8 max-w-2xl text-lg leading-8 text-white/68">{concern.headline}</p>
        </Container>
      </section>
      <section className="border-t border-white/10 bg-black text-white section-space">
        <Container className="grid gap-14 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <p className="eyebrow mb-6 text-cobalt">The discipline</p>
            <h2 className="display-type text-5xl leading-[0.94] sm:text-7xl">Technical focus. Group-level accountability.</h2>
          </Reveal>
          <Reveal className="lg:col-span-6 lg:col-start-7" delay={0.1}>
            <p className="text-lg leading-9 text-white/68">{concern.description}</p>
            <p className="mt-7 text-base leading-8 text-white/56">Our teams work inside a common project-control framework, keeping information, decisions and quality expectations visible across disciplines from early planning through handover.</p>
          </Reveal>
        </Container>
      </section>
      <section className="blueprint-grid-dark border-t border-white/10 bg-black text-white section-space">
        <Container className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr]">
          <Reveal>
            <p className="eyebrow mb-6 text-cobalt">Capabilities</p>
            <h2 className="display-type text-5xl leading-none sm:text-6xl">What we bring to the table.</h2>
          </Reveal>
          <div className="border-t border-white/14">
            {concern.services.map((service, index) => (
              <Reveal className="flex min-h-20 items-center gap-5 border-b border-white/14" delay={index * 0.05} key={service}>
                <span className="grid size-8 place-items-center rounded-full bg-cobalt text-white"><Check aria-hidden="true" className="size-4" /></span>
                <span className="display-type text-2xl sm:text-3xl">{service}</span>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>
      <section className="border-t border-white/10 bg-black py-18 text-white sm:py-24">
        <Container className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <p className="eyebrow mb-5 text-cobalt">Talk to the team</p>
            <h2 className="display-type text-5xl leading-none sm:text-6xl">Discuss a {concern.discipline.toLowerCase()} brief.</h2>
            <div className="mt-7 flex flex-wrap gap-x-7 gap-y-3 text-sm text-white/60">
              <a className="inline-flex min-h-11 items-center gap-2 hover:text-cobalt" href={`mailto:${concern.contact.email}`}><Mail aria-hidden="true" className="size-4 text-cobalt" />{concern.contact.email}</a>
              <a className="inline-flex min-h-11 items-center gap-2 hover:text-cobalt" href={`tel:${concern.contact.phone.replace(/\D/g, "")}`}><Phone aria-hidden="true" className="size-4 text-cobalt" />{concern.contact.phone}</a>
            </div>
          </div>
          <ButtonLink href="/contact#quotation-form" size="lg" variant="light">Request a quotation</ButtonLink>
        </Container>
      </section>
    </>
  );
}
