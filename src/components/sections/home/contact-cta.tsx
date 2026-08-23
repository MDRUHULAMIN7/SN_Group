import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { ButtonLink } from "@/components/ui/button";
import { Reveal } from "@/components/motion/reveal";

export function ContactCta() {
  return (
    <section className="blueprint-grid-dark relative overflow-hidden border-t border-white/10 bg-black py-20 text-white sm:py-28">
      <div aria-hidden="true" className="absolute -right-20 -top-24 size-96 rounded-full border border-cobalt/12" />
      <div aria-hidden="true" className="absolute -right-6 top-8 size-64 rounded-full border border-cobalt/12" />
      <Container className="relative grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
        <Reveal>
          <p className="eyebrow mb-6 text-cobalt">Start with clarity</p>
          <h2 className="display-type max-w-[13ch] text-5xl leading-[0.92] sm:text-7xl lg:text-8xl">Bring us the constraint. We’ll help shape the route forward.</h2>
        </Reveal>
        <Reveal delay={0.1}>
          <ButtonLink className="min-w-52" href="/contact#quotation-form" size="lg" variant="light">Request a quotation <ArrowUpRight aria-hidden="true" className="size-5" /></ButtonLink>
        </Reveal>
      </Container>
    </section>
  );
}
