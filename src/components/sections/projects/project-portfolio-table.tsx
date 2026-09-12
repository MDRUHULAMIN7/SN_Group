import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/motion/reveal";
import { projectExperience } from "@/data/project-experience";

const headings = [
  "SL",
  "Project / work description",
  "Client / authority",
  "Project location",
  "Agreement no.",
  "Contract value (BDT)",
  "Commencement",
  "Completion",
] as const;

export function ProjectPortfolioTable() {
  return (
    <section className="blueprint-grid border-t border-slate-200 bg-white py-14 text-ink sm:py-20 lg:py-24">
      <Container>
        <Reveal>
          <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <div>
              <p className="eyebrow mb-3 text-cobalt">Documented Experience</p>
              <h2 className="display-type text-3xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
                Complete Project Portfolio
              </h2>
            </div>
            <p className="max-w-2xl text-sm leading-7 text-ink/65 lg:justify-self-end sm:text-base">
              A verified record of 29 contracts across Bangladesh Army, Bangladesh Navy, and Bangladesh Air Force facilities from 2011 through 2024.
            </p>
          </div>
        </Reveal>

        <Reveal className="mt-10 sm:mt-14" delay={0.08}>
          <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_18px_55px_rgba(15,23,42,0.07)]">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[1180px] border-collapse text-left text-xs">
                <thead className="bg-slate-950 text-white">
                  <tr>
                    {headings.map((heading) => (
                      <th className="px-4 py-4 font-bold uppercase tracking-[0.1em]" key={heading} scope="col">
                        {heading}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {projectExperience.map((project) => (
                    <tr className="border-t border-slate-200 align-top transition-colors hover:bg-blue-50/65" key={project.serial}>
                      <td className="px-4 py-4 font-bold tabular-nums text-cobalt">{project.serial}</td>
                      <td className="max-w-[360px] px-4 py-4 font-semibold leading-5 text-ink">{project.work}</td>
                      <td className="px-4 py-4 leading-5 text-ink/70">{project.client}</td>
                      <td className="px-4 py-4 leading-5 text-ink/70">{project.location}</td>
                      <td className="whitespace-nowrap px-4 py-4 font-mono text-[0.7rem] text-ink/65">{project.agreement}</td>
                      <td className="whitespace-nowrap px-4 py-4 font-semibold tabular-nums text-ink/75">{project.value}</td>
                      <td className="whitespace-nowrap px-4 py-4 tabular-nums text-ink/65">{project.commencement}</td>
                      <td className="whitespace-nowrap px-4 py-4 tabular-nums text-ink/65">{project.completion}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="border-t border-slate-200 bg-slate-50 px-5 py-3 text-xs text-ink/55">
              A dash indicates that no completion date was included in the supplied project record.
            </p>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
