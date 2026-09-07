import type { Metadata } from "next";
import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import { PageHero } from "@/components/ui/page-hero";
import { Container } from "@/components/ui/container";
import { ContactCta } from "@/components/sections/home/contact-cta";
import { MissionValues } from "@/components/sections/home/mission-values";
import { LeadershipMessages } from "@/components/sections/home/leadership-messages";
import { WhyChooseUs } from "@/components/sections/home/why-choose-us";
import { Reveal } from "@/components/motion/reveal";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "About S.N Group",
  description:
    "A diversified Bangladeshi business group with more than 20 years of experience in construction, international trade, and real estate development.",
  path: "/about",
  image: "/images/team.webp",
});

const corePillars = [
  ["Integrity & Responsibility", "Built on a foundation of honesty, transparency, accountability, and mutual respect across every operation."],
  ["Quality & Reliability", "Over 20 years of delivering projects that meet approved technical specifications, timelines, and safety standards."],
  ["Sustainable Value", "Creating long-term economic and social value for customers, partners, investors, and communities."],
] as const;

export default function AboutPage() {
  return (
    <>
      <PageHero
        description="A diversified Bangladeshi business group with more than 20 years of experience across construction, international trade, and real estate development."
        eyebrow="About S.N Group"
        image="/images/team.webp"
        imageAlt="S.N Group project team reviewing technical plans"
        title="Experience That Builds Trust."
      />

      <section className="border-t border-slate-200 bg-white text-ink section-space">
        <Container className="grid gap-14 lg:grid-cols-12 lg:items-center">
          <Reveal className="lg:col-span-6">
            <p className="eyebrow mb-6 text-cobalt">Company Introduction</p>
            <h2 className="display-type text-4xl leading-[0.94] sm:text-6xl">
              20+ Years of Dedication &amp; Excellence
            </h2>
            <div className="mt-6 space-y-4 text-base leading-8 text-ink/70">
              <p>
                S.N Group is a diversified Bangladeshi business group with more than 20 years of experience in construction and business operations, built on a foundation of integrity, quality, reliability, and long-term relationships.
              </p>
              <p>
                Over the years, the Group has developed a diversified portfolio through three core businesses: <strong className="text-ink">S.N Engineering &amp; Construction</strong>, <strong className="text-ink">S.N Import &amp; Export</strong>, and <strong className="text-ink">Mehrish Holdings</strong>.
              </p>
              <p>
                Our businesses operate across government and institutional construction, infrastructure development, international import and export, agricultural and food commodities, industrial chemicals and equipment, and premium real estate development.
              </p>
            </div>
          </Reveal>
          <Reveal className="relative lg:col-span-6" delay={0.1}>
            <div className="relative aspect-[5/4] overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_24px_70px_rgba(15,23,42,0.14)]">
              <Image
                alt="S.N Group project and engineering team"
                className="object-cover"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                src="/images/team.webp"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-white/82 via-transparent to-transparent" />
            </div>
            <span className="absolute -bottom-5 -left-5 hidden border border-cobalt/25 bg-white p-6 text-xs font-bold uppercase tracking-[0.13em] text-cobalt shadow-lg sm:block">
              Dhaka · Bangladesh
            </span>
          </Reveal>
        </Container>
      </section>

      <section className="blueprint-grid border-t border-slate-200 bg-white text-ink section-space">
        <Container>
          <Reveal>
            <p className="eyebrow mb-6 text-cobalt">How We Work</p>
            <h2 className="display-type max-w-3xl text-4xl leading-[0.94] sm:text-6xl">
              Standards that travel from boardroom to site.
            </h2>
          </Reveal>
          <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-slate-200 bg-slate-200 shadow-[0_18px_55px_rgba(15,23,42,0.07)] lg:grid-cols-3">
            {corePillars.map(([title, description], index) => (
              <Reveal className="bg-white p-8 sm:p-10" delay={index * 0.07} key={title}>
                <CheckCircle2 aria-hidden="true" className="size-7 text-cobalt" />
                <p className="mt-14 text-xs font-bold tabular-nums text-ink/35">0{index + 1}</p>
                <h3 className="display-type mt-4 text-3xl font-bold">{title}</h3>
                <p className="mt-5 text-sm leading-7 text-ink/60">{description}</p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <WhyChooseUs />
      <LeadershipMessages />
      <MissionValues />
      <ContactCta />
    </>
  );
}
