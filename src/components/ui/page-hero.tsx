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
  image = "/images/hero-engineers-team.webp",
  imageAlt = "",
}: PageHeroProps) {
  const trail: BreadcrumbItem[] =
    breadcrumbs ?? (eyebrow ? [{ label: eyebrow }] : [{ label: title }]);

  return (
    <section className="relative flex min-h-[28svh] sm:min-h-[36svh] lg:min-h-[48svh] items-center overflow-hidden border-b border-slate-200 bg-white pt-20 pb-8 sm:pt-24 sm:pb-12 md:pt-32 md:pb-14 lg:pt-36 lg:pb-16 text-ink">
      <div aria-hidden="true" className="absolute inset-0 z-0 overflow-hidden">
        <Image
          alt={imageAlt}
          className="size-full object-cover object-center saturate-[0.88]"
          fill
          priority
          sizes="100vw"
          src={image}
        />
        {/* Exact hero section slider gradient overlays */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-white/96 via-white/82 via-68% to-white/35 sm:from-white/86 sm:via-white/58 sm:via-54% sm:to-white/5 lg:from-white/82 lg:via-white/46 lg:via-48% lg:to-transparent" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white/50 via-transparent to-white/30" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_42%,rgba(21,94,239,0.12),transparent_58%)]" />
      </div>

      <Container className="relative z-10 w-full">
        <nav
          aria-label="Breadcrumb"
          className="mb-3 sm:mb-4 inline-flex flex-wrap items-center gap-2 rounded-full border border-cobalt/20 bg-white/88 px-3.5 py-1.5 text-xs font-semibold text-ink/70 shadow-sm backdrop-blur-md"
        >
          <Link className="transition-colors hover:text-cobalt" href="/">
            Home
          </Link>
          {trail.map((item, idx) => (
            <Fragment key={`${item.label}-${idx}`}>
              <span aria-hidden="true" className="select-none text-ink/35">
                /
              </span>
              {item.href ? (
                <Link className="transition-colors hover:text-cobalt" href={item.href}>
                  {item.label}
                </Link>
              ) : (
                <span className="font-bold text-cobalt">{item.label}</span>
              )}
            </Fragment>
          ))}
        </nav>

        <h1 className="display-type max-w-4xl text-3xl xs:text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-ink leading-[1.12]">
          {title}
        </h1>
      </Container>
    </section>
  );
}
