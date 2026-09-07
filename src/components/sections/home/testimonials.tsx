import { Quote, Star } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/motion/reveal";

const testimonials = [
  {
    quote:
      "A reliable and professional partner with a strong commitment to quality, responsibility, and long-term cooperation.",
    author: "Defense & Institutional Partner",
    role: "Project Stakeholder",
  },
  {
    quote:
      "S.N Group demonstrates professionalism, responsiveness, and a clear understanding of project and business requirements.",
    author: "Global Supply Partner",
    role: "International Trade Associate",
  },
  {
    quote:
      "We value our relationship with S.N Group and look forward to continuing our cooperation and exploring new opportunities together.",
    author: "Strategic Commercial Associate",
    role: "Development & Sourcing Partner",
  },
];

export function TestimonialsSection() {
  return (
    <section
      aria-label="Partner Testimonials"
      className="relative overflow-hidden border-t border-slate-200 bg-white py-20 text-ink sm:py-28"
      id="testimonials"
    >
      <Container className="relative z-10">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <p className="eyebrow mb-4 justify-center text-blue-400">Testimonials</p>
            <h2 className="display-type text-4xl font-extrabold tracking-tight sm:text-5xl">
              What Our Partners Say
            </h2>
            <p className="mt-3 text-base text-ink/62">
              Reflections of trust, execution excellence, and enduring relationships built over two decades.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {testimonials.map((item, index) => (
            <Reveal
              className="relative flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-8 shadow-[0_14px_42px_rgba(15,23,42,0.06)] transition-all duration-300 hover:-translate-y-1 hover:border-cobalt/40 hover:shadow-[0_20px_48px_rgba(21,94,239,0.1)] sm:p-9"
              delay={index * 0.1}
              key={item.quote}
            >
              <div>
                <div className="flex items-center justify-between text-blue-400">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star aria-hidden="true" className="size-4 fill-current text-blue-400" key={i} />
                    ))}
                  </div>
                  <Quote aria-hidden="true" className="size-6 text-cobalt/50" />
                </div>
                <p className="mt-6 text-base leading-7 text-ink/78">
                  &ldquo;{item.quote}&rdquo;
                </p>
              </div>

              <div className="mt-8 border-t border-slate-200 pt-5">
                <p className="text-sm font-bold text-ink">{item.author}</p>
                <p className="text-xs text-ink/50">{item.role}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
