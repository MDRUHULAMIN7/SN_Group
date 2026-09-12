import type { Project } from "@/types/content";
import { Container } from "@/components/ui/container";

export function ProjectFacts({ project }: { project: Project }) {
  const facts = [
    ["Location", project.location],
    ["Client", project.client],
    ["Agreement", project.agreementNo],
    ["Contract value", project.contractValue],
    ["Commencement", project.commencement],
    ["Completion", project.completion],
  ].filter((fact): fact is [string, string] => Boolean(fact[1]));
  return (
    <section className="border-b border-slate-200 bg-white text-ink">
      <Container className="grid sm:grid-cols-2 lg:grid-cols-3">
        {facts.map(([label, value]) => (
          <div className="border-b border-slate-200 py-7 sm:border-r sm:px-7 lg:border-b-0 first:pl-0 last:border-r-0" key={label}>
            <p className="text-[0.65rem] font-bold uppercase tracking-[0.16em] text-cobalt">{label}</p>
            <p className="mt-2 font-semibold">{value}</p>
          </div>
        ))}
      </Container>
    </section>
  );
}
