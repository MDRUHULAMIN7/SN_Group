import { Fragment } from "react";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/container";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

export interface PageHeroProps {
  title: string;
  breadcrumbs?: BreadcrumbItem[];
  eyebrow?: string;
  description?: string;
  image?: string;
  imageAlt?: string;
}

export function PageHero({
  title,
  breadcrumbs,
  eyebrow,
  image,
  imageAlt = "",
}: PageHeroProps) {
  const trail: BreadcrumbItem[] =
    breadcrumbs ?? (eyebrow ? [{ label: eyebrow }] : [{ label: title }]);

  return (
    <section className="blueprint-grid relative flex min-h-[20svh] sm:min-h-[25svh] items-end overflow-hidden border-b border-slate-200 bg-white pb-7 pt-24 text-ink sm:pb-9 sm:pt-30">
      {image ? (
        <>
          <Image alt={imageAlt} className="object-cover opacity-35 saturate-[0.88]" fill preload sizes="100vw" src={image} />
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/94 to-white/60" />
          <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-white/60" />
        </>
      ) : null}
      <Container className="relative z-10">
        <nav aria-label="Breadcrumb" className="mb-2 sm:mb-3 flex flex-wrap items-center gap-1.5 text-xs font-semibold text-ink/60">
          <Link className="transition-colors hover:text-cobalt" href="/">Home</Link>
          {trail.map((item, idx) => (
            <Fragment key={`${item.label}-${idx}`}>
              <span aria-hidden="true" className="select-none text-ink/35">/</span>
              {item.href ? (
                <Link className="transition-colors hover:text-cobalt" href={item.href}>{item.label}</Link>
              ) : (
                <span className="font-bold text-cobalt">{item.label}</span>
              )}
            </Fragment>
          ))}
        </nav>
        <h1 className="display-type max-w-4xl text-2.5xl xs:text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-ink">
          {title}
        </h1>
      </Container>
    </section>
  );
}
