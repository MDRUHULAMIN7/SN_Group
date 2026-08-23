import Image from "next/image";
import type { Project } from "@/types/content";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/motion/reveal";

export function ProjectGallery({ project }: { project: Project }) {
  return (
    <section className="border-t border-white/10 bg-black text-white section-space">
      <Container>
        <div className="grid gap-6 lg:grid-cols-12">
          {project.gallery.map((image, index) => (
            <Reveal className={index === 0 ? "lg:col-span-8" : "lg:col-span-4"} delay={index * 0.06} key={`${image.src}-${index}`}>
              <div className={index === 0 ? "relative aspect-[16/10] overflow-hidden" : "relative aspect-[4/5] overflow-hidden"}>
                <Image alt={image.alt} className="object-cover" fill sizes={index === 0 ? "(min-width: 1024px) 66vw, 100vw" : "(min-width: 1024px) 33vw, 100vw"} src={image.src} />
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
