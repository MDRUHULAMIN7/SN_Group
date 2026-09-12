import type { Metadata } from "next";
import { CheckCircle2, Clock, Mail, MapPin, MessageSquare, Phone, ShieldCheck, Sparkles, Zap } from "lucide-react";
import { PageHero } from "@/components/ui/page-hero";
import { Container } from "@/components/ui/container";
import { ContactForm } from "@/components/sections/contact/contact-form";
import { HeadquartersMap } from "@/components/sections/contact/headquarters-map";
import { ContactFaq } from "@/components/sections/contact/contact-faq";
import { Reveal } from "@/components/motion/reveal";
import { createMetadata } from "@/lib/seo";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = createMetadata({
  title: "Contact",
  description:
    "Contact S.N Group in Gulshan, Dhaka or send a structured request for a construction, engineering, procurement or property development quotation.",
  path: "/contact",
  image: "/images/hero-engineers-team.webp",
});

const proposalGuarantees = [
  {
    icon: ShieldCheck,
    title: "Director-Level Review",
    desc: "Every project brief is audited directly by senior engineering & procurement directors.",
  },
  {
    icon: Zap,
    title: "24–48h Turnaround",
    desc: "Receive prompt technical feasibility review and preliminary project scheduling.",
  },
  {
    icon: CheckCircle2,
    title: "Strict Confidentiality",
    desc: "Full NDA-level protection for engineering drawings, site data, and budgets.",
  },
];

export default function ContactPage() {
  return (
    <>
      {/* 1. Page Hero */}
      <PageHero
        breadcrumbs={[{ label: "Contact Us" }]}
        image="/images/hero-engineers-team.webp"
        imageAlt="S.N Group engineers and headquarters"
        title="Contact S.N Group"
      />

      {/* 2. Request a Quotation & Direct Contact Channels */}
      <section className="blueprint-grid relative overflow-hidden border-t border-slate-200 bg-white text-ink section-space">
        {/* Decorative ambient lighting */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-32 top-1/4 size-96 rounded-full bg-cobalt/5 blur-3xl"
        />

        <Container className="grid gap-12 lg:grid-cols-12 relative z-10">
          {/* Left Column: Direct Communication & Proposal Protocol */}
          <Reveal className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <p className="eyebrow mb-4 sm:mb-6 text-cobalt">Request a Quotation</p>
              <h2 className="display-type text-4xl leading-[0.94] sm:text-6xl lg:text-7xl font-extrabold tracking-tight">
                Give us the useful detail.
              </h2>
              <p className="mt-6 text-sm sm:text-base leading-relaxed text-ink/65">
                A specific brief helps us route your enquiry to the right technical directors and prepare a tailored feasibility, BOQ analysis, and quotation.
              </p>

              {/* Direct channels quick card */}
              <div className="mt-8 rounded-2xl border border-slate-200 bg-linear-to-br from-white via-white to-blue-50/40 p-5 sm:p-6 shadow-xs">
                <p className="text-[0.68rem] font-bold uppercase tracking-widest text-cobalt">
                  Direct Inquiries & Headquarters
                </p>

                <div className="mt-4 space-y-3 text-xs font-semibold text-ink/80">
                  <div className="flex items-center gap-3">
                    <span className="grid size-8 shrink-0 place-items-center rounded-lg bg-blue-50 text-cobalt border border-cobalt/15">
                      <Phone aria-hidden="true" className="size-4" />
                    </span>
                    <div className="flex flex-wrap items-center gap-x-2">
                      <a className="font-mono transition-colors hover:text-cobalt" href={siteConfig.phones[0].href}>
                        {siteConfig.phones[0].label}
                      </a>
                      <span className="text-ink/30">•</span>
                      <a className="font-mono transition-colors hover:text-cobalt" href={siteConfig.mobiles[0].href}>
                        {siteConfig.mobiles[0].label}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <span className="grid size-8 shrink-0 place-items-center rounded-lg bg-blue-50 text-cobalt border border-cobalt/15">
                      <Mail aria-hidden="true" className="size-4" />
                    </span>
                    <div className="flex flex-wrap items-center gap-x-2">
                      {siteConfig.emails.map((email, idx) => (
                        <span className="inline-flex items-center gap-x-2" key={email.href}>
                          {idx > 0 && <span className="text-ink/30">•</span>}
                          <a className="transition-colors hover:text-cobalt" href={email.href}>
                            {email.label}
                          </a>
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="grid size-8 shrink-0 place-items-center rounded-lg bg-blue-50 text-cobalt border border-cobalt/15 mt-0.5">
                      <MapPin aria-hidden="true" className="size-4" />
                    </span>
                    <a
                      className="leading-snug transition-colors hover:text-cobalt"
                      href={siteConfig.address.mapUrl}
                      rel="noreferrer"
                      target="_blank"
                    >
                      {siteConfig.address.lines.join(", ")}
                    </a>
                  </div>
                </div>

                {/* WhatsApp button */}
                <div className="mt-4 border-t border-slate-100 pt-3 flex items-center justify-between">
                  <span className="flex items-center gap-2 text-[0.72rem] font-bold text-emerald-700">
                    <span className="size-2 rounded-full bg-emerald-500 animate-pulse" />
                    Available on WhatsApp
                  </span>
                  <a
                    className="inline-flex items-center gap-1.5 rounded-lg border border-emerald-500/30 bg-emerald-50 px-3 py-1 text-xs font-bold text-emerald-700 transition-colors hover:bg-emerald-600 hover:text-white"
                    href={siteConfig.whatsapp}
                    rel="noreferrer"
                    target="_blank"
                  >
                    <MessageSquare aria-hidden="true" className="size-3.5" />
                    <span>Chat Now</span>
                  </a>
                </div>
              </div>

              {/* Proposal Protocol Guarantees */}
              <div className="mt-8 space-y-3.5">
                <p className="text-xs font-bold uppercase tracking-widest text-ink/45">Our Response Protocol:</p>
                {proposalGuarantees.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div className="flex items-start gap-3.5" key={item.title}>
                      <span className="grid size-8 shrink-0 place-items-center rounded-lg bg-blue-50 text-cobalt border border-cobalt/15 mt-0.5">
                        <Icon aria-hidden="true" className="size-4" />
                      </span>
                      <div>
                        <h4 className="text-xs font-bold uppercase tracking-wider text-ink">{item.title}</h4>
                        <p className="mt-0.5 text-xs leading-5 text-ink/65">{item.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Urgent tender notice */}
            <div className="mt-8 rounded-2xl border border-slate-200 bg-white/80 p-4 sm:p-5 shadow-xs">
              <div className="flex items-center gap-2 text-xs font-bold text-ink">
                <Sparkles aria-hidden="true" className="size-4 text-cobalt" />
                <span>Urgent Tender or RFP Submission?</span>
              </div>
              <p className="mt-1.5 text-xs text-ink/65">
                For time-sensitive commercial bids, call our priority operations desk directly at{" "}
                <a className="font-semibold text-cobalt underline hover:text-blue-700" href={siteConfig.mobiles[0].href}>
                  {siteConfig.mobiles[0].label}
                </a>
                .
              </p>
            </div>
          </Reveal>

          {/* Right Column: Interactive Quotation Form */}
          <Reveal
            className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_22px_60px_rgba(15,23,42,0.08)] sm:p-10 lg:col-span-7 transition-all duration-500 hover:border-cobalt/40 hover:shadow-[0_26px_68px_rgba(21,94,239,0.12)]"
            delay={0.1}
          >
            {/* Top decorative gradient border */}
            <span
              aria-hidden="true"
              className="absolute inset-x-0 top-0 h-1.5 bg-linear-to-r from-cobalt via-blue-500 to-indigo-600"
            />
            <ContactForm />
          </Reveal>
        </Container>
      </section>

      {/* 3. Headquarters Location & Interactive Google Map */}
      <HeadquartersMap />

      {/* 4. Commercial & Project Inquiries FAQ Accordion */}
      <ContactFaq />
    </>
  );
}
