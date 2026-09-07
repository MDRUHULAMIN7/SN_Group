import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { PageHero } from "@/components/ui/page-hero";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/motion/reveal";
import { sisterConcerns } from "@/data/sister-concerns";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Sister Concerns",
  description: "Meet S.N Group’s specialist construction, import-export and holdings concerns and explore their connected capabilities.",
  path: "/sister-concerns",
});

export default function SisterConcernsPage() {
  return (
    <>
      <PageHero breadcrumbs={[{ label: "Sister Concerns" }]} image="/images/hero-construction.webp" imageAlt="High-rise construction and operations across Bangladesh" title="Our Group Companies" />
      <section className="border-t border-slate-200 bg-white text-ink section-space">
        <Container className="space-y-8">
          {sisterConcerns.map((concern, index) => (
            <Reveal key={concern.slug}>
              <Link className="group grid overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_18px_55px_rgba(15,23,42,0.07)] lg:grid-cols-2" href={`/sister-concerns/${concern.slug}`}>
                <div className={`relative min-h-80 ${index % 2 === 1 ? "lg:order-2" : ""}`}>
                  <Image alt={concern.imageAlt} className="object-cover transition duration-700 group-hover:scale-105" fill sizes="(min-width: 1024px) 50vw, 100vw" src={concern.image} />
                </div>
                <div className="flex min-h-80 flex-col justify-between p-7 sm:p-10 lg:p-14">
                  <div className="flex items-start justify-between"><span className="text-xs font-bold tabular-nums text-cobalt">0{index + 1}</span><span className="grid size-11 place-items-center rounded-full border border-cobalt/25 transition-colors group-hover:bg-cobalt group-hover:text-white"><ArrowUpRight aria-hidden="true" className="size-5" /></span></div>
                  <div><p className="mb-3 text-xs font-bold uppercase tracking-[0.15em] text-cobalt">{concern.discipline}</p><h2 className="display-type text-5xl sm:text-6xl">{concern.name}</h2><p className="mt-5 max-w-lg text-sm leading-7 text-ink/60">{concern.description}</p></div>
                </div>
              </Link>
            </Reveal>
          ))}
        </Container>
      </section>
    </>
  );
}
