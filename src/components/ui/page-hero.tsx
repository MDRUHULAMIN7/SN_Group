import Image from "next/image";
import { Container } from "@/components/ui/container";

interface PageHeroProps {
  eyebrow: string;
  title: string;
  description: string;
  image?: string;
  imageAlt?: string;
}

export function PageHero({ eyebrow, title, description, image, imageAlt = "" }: PageHeroProps) {
  return (
    <section className="blueprint-grid relative flex min-h-[68svh] items-end overflow-hidden border-b border-slate-200 bg-white pb-16 pt-40 text-ink sm:pb-20">
      {image ? (
        <>
          <Image alt={imageAlt} className="object-cover opacity-55 saturate-[0.88]" fill preload sizes="100vw" src={image} />
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/92 to-white/28" />
          <div className="absolute inset-0 bg-gradient-to-t from-white/85 via-transparent to-white/55" />
        </>
      ) : null}
      <Container className="relative z-10">
        <p className="eyebrow mb-7 text-cobalt">{eyebrow}</p>
        <h1 className="display-type max-w-[13ch] text-[clamp(4rem,9vw,9rem)] leading-[0.86]">{title}</h1>
        <p className="mt-8 max-w-2xl text-base leading-8 text-ink/65 sm:text-lg">{description}</p>
      </Container>
    </section>
  );
}
