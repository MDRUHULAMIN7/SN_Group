import type { Project } from "@/types/content";
import { Container } from "@/components/ui/container";

export function ProjectFacts({ project }: { project: Project }) {
  const facts = [
    ["Location", project.location],
    ["Year", project.year],
    ["Status", project.status],
    ["Client", project.client],
  ] as const;
  return (
    <section className="border-b border-white/10 bg-black text-white">
      <Container className="grid sm:grid-cols-2 lg:grid-cols-4">
        {facts.map(([label, value]) => (
          <div className="border-b border-white/10 py-7 sm:border-r sm:px-7 lg:border-b-0 first:pl-0 last:border-r-0" key={label}>
            <p className="text-[0.65rem] font-bold uppercase tracking-[0.16em] text-cobalt">{label}</p>
            <p className="mt-2 font-semibold">{value}</p>
          </div>
        ))}
      </Container>
    </section>
  );
}
