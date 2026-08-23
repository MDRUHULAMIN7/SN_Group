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
    <section className="blueprint-grid-dark relative flex min-h-[68svh] items-end overflow-hidden bg-navy pb-16 pt-40 text-white sm:pb-20">
      {image ? (
        <>
          <Image alt={imageAlt} className="object-cover opacity-38" fill preload sizes="100vw" src={image} />
          <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/75 to-navy/25" />
        </>
      ) : null}
      <Container className="relative z-10">
        <p className="eyebrow mb-7 text-blue-300">{eyebrow}</p>
        <h1 className="display-type max-w-[13ch] text-[clamp(4rem,9vw,9rem)] leading-[0.86]">{title}</h1>
        <p className="mt-8 max-w-2xl text-base leading-8 text-white/65 sm:text-lg">{description}</p>
      </Container>
    </section>
  );
}
