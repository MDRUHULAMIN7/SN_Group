import type { Metadata } from "next";
import { PageHero } from "@/components/ui/page-hero";
import { Container } from "@/components/ui/container";
import { ContactDetails } from "@/components/sections/contact/contact-details";
import { ContactForm } from "@/components/sections/contact/contact-form";
import { Reveal } from "@/components/motion/reveal";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Contact",
  description: "Contact S.N Group in Gulshan, Dhaka or send a structured request for a construction, engineering or development quotation.",
  path: "/contact",
  image: "/images/team.webp",
});

export default function ContactPage() {
  return (
    <>
      <PageHero description="Share the scope, location and constraints. Our team will connect your brief with the right discipline." eyebrow="Contact S.N Group" image="/images/team.webp" imageAlt="S.N Group engineers discussing project drawings" title="Let’s define the next move." />
      <section className="border-t border-slate-200 bg-white text-ink section-space">
        <Container className="grid gap-14 lg:grid-cols-12">
          <Reveal className="lg:col-span-4">
            <p className="eyebrow mb-6 text-cobalt">Find us</p>
            <h2 className="display-type text-5xl leading-[0.94] sm:text-7xl">Direct lines. Clear answers.</h2>
            <p className="mt-7 text-sm leading-7 text-ink/60">For urgent site or operational matters, call the relevant project contact. For new enquiries, use the group details below.</p>
          </Reveal>
          <Reveal className="lg:col-span-7 lg:col-start-6" delay={0.1}><ContactDetails /></Reveal>
        </Container>
      </section>
      <section className="blueprint-grid border-t border-slate-200 bg-white text-ink section-space">
        <Container className="grid gap-14 lg:grid-cols-12">
          <Reveal className="lg:col-span-4">
            <p className="eyebrow mb-6 text-cobalt">Request a quotation</p>
            <h2 className="display-type text-5xl leading-[0.94] sm:text-7xl">Give us the useful detail.</h2>
            <p className="mt-7 text-sm leading-7 text-ink/60">A short but specific brief helps us route your request and prepare for a productive first conversation.</p>
          </Reveal>
          <Reveal className="rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_22px_60px_rgba(15,23,42,0.09)] sm:p-10 lg:col-span-7 lg:col-start-6" delay={0.1}><ContactForm /></Reveal>
        </Container>
      </section>
    </>
  );
}
