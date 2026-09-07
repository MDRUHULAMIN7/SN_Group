import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { galleryItems } from "@/data/gallery";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/motion/reveal";

export function GalleryPreview() {
  const [first, second, third] = galleryItems.slice(0, 3);
  return (
    <section className="overflow-hidden border-t border-slate-200 bg-white text-ink section-space">
      <Container>
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <Reveal className="lg:col-span-4 lg:pb-10">
            <p className="eyebrow mb-6 text-cobalt">Field notes</p>
            <h2 className="display-type text-5xl leading-[0.94] sm:text-6xl">Progress has a texture.</h2>
            <p className="mt-6 max-w-sm text-sm leading-7 text-ink/60">Concrete, steel, drawings, hands and the quiet precision between them—moments from the work.</p>
            <Link className="group mt-8 inline-flex items-center gap-2 text-sm font-bold text-cobalt" href="/gallery">Open the gallery <ArrowUpRight aria-hidden="true" className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" /></Link>
          </Reveal>
          <Reveal className="lg:col-span-5" delay={0.08}>
            <div className="relative aspect-[4/5] overflow-hidden"><Image alt={second.alt} className="object-cover" fill sizes="(min-width: 1024px) 42vw, 100vw" src={second.src} /></div>
          </Reveal>
          <div className="grid gap-8 lg:col-span-3">
            {[first, third].map((item, index) => (
              <Reveal delay={0.14 + index * 0.06} key={item.id}>
                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-slate-200 shadow-lg"><Image alt={item.alt} className="object-cover transition-transform duration-700 hover:scale-105" fill sizes="(min-width: 1024px) 25vw, 100vw" src={item.src} /></div>
                <p className="mt-3 text-xs font-bold uppercase tracking-[0.12em] text-ink/45">{item.caption}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
