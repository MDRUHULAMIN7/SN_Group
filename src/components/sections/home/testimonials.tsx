"use client";

import { useEffect, useRef, useState, type TransitionEvent } from "react";
import { Quote, Star } from "lucide-react";
import { useReducedMotion } from "motion/react";
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
  {
    quote:
      "Their disciplined coordination and attention to detail helped keep a complex delivery aligned from planning through completion.",
    author: "Government Project Consultant",
    role: "Engineering Coordination",
  },
  {
    quote:
      "Communication remained clear across sourcing, documentation, and delivery—an important strength in international trade.",
    author: "Regional Supply Partner",
    role: "Procurement & Logistics",
  },
  {
    quote:
      "The team combines commercial understanding with a practical commitment to quality and dependable follow-through.",
    author: "Property Investment Associate",
    role: "Real Estate Collaboration",
  },
] as const;

const carouselItems = [...testimonials, ...testimonials.slice(0, 3)];

export function TestimonialsSection() {
  const [position, setPosition] = useState(0);
  const [step, setStep] = useState(0);
  const [paused, setPaused] = useState(false);
  const [transitionEnabled, setTransitionEnabled] = useState(true);
  const viewportRef = useRef<HTMLDivElement>(null);
  const slideRefs = useRef<Array<HTMLElement | null>>([]);
  const reduceMotion = useReducedMotion();
  const activeIndex = position % testimonials.length;

  useEffect(() => {
    const measure = () => {
      const firstSlide = slideRefs.current[0];
      const secondSlide = slideRefs.current[1];
      if (firstSlide && secondSlide) {
        setStep(secondSlide.offsetLeft - firstSlide.offsetLeft);
      }
    };

    measure();
    window.addEventListener("resize", measure);

    const observer = typeof ResizeObserver === "undefined" ? null : new ResizeObserver(measure);
    if (viewportRef.current) observer?.observe(viewportRef.current);

    return () => {
      window.removeEventListener("resize", measure);
      observer?.disconnect();
    };
  }, []);

  useEffect(() => {
    if (paused || reduceMotion) return;

    const timer = window.setInterval(() => {
      setTransitionEnabled(true);
      setPosition((current) => current + 1);
    }, 5000);

    return () => window.clearInterval(timer);
  }, [paused, reduceMotion]);

  const handleTransitionEnd = (event: TransitionEvent<HTMLDivElement>) => {
    if (event.target !== event.currentTarget || position !== testimonials.length) return;

    setTransitionEnabled(false);
    setPosition(0);
    window.requestAnimationFrame(() => {
      window.requestAnimationFrame(() => setTransitionEnabled(true));
    });
  };

  const selectSlide = (index: number) => {
    setTransitionEnabled(true);
    setPosition(index);
  };

  return (
    <section
      aria-label="Partner Testimonials"
      aria-roledescription="carousel"
      className="relative overflow-hidden border-t border-slate-200 bg-white py-20 text-ink sm:py-24"
      id="testimonials"
    >
      <div aria-hidden="true" className="pointer-events-none absolute -left-40 top-1/3 size-96 rounded-full bg-cobalt/5 blur-[130px]" />

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

        <div className="relative mt-14 overflow-hidden pb-2" ref={viewportRef}>
          <div
            className="flex gap-6 transition-transform ease-[cubic-bezier(0.22,1,0.36,1)] will-change-transform"
            onTransitionEnd={handleTransitionEnd}
            style={{
              transform: `translate3d(-${position * step}px, 0, 0)`,
              transitionDuration: reduceMotion || !transitionEnabled ? "0ms" : "1100ms",
            }}
          >
            {carouselItems.map((item, itemIndex) => {
              const testimonialIndex = itemIndex % testimonials.length;
              const isClone = itemIndex >= testimonials.length;

              return (
                <article
                  aria-hidden={isClone || undefined}
                  aria-label={isClone ? undefined : `Testimonial ${testimonialIndex + 1} of ${testimonials.length}`}
                  className="group relative flex min-h-80 w-full shrink-0 flex-col justify-between overflow-hidden rounded-2xl border border-slate-200 bg-linear-to-br from-white via-white to-blue-50/50 p-7 shadow-[0_14px_42px_rgba(15,23,42,0.06)] transition-[border-color,box-shadow,background-color] duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] hover:border-cobalt/40 hover:shadow-[0_24px_56px_rgba(21,94,239,0.13)] sm:w-[calc(50%-0.75rem)] sm:p-8 lg:w-[calc(33.333333%-1rem)]"
                  key={`${item.author}-${itemIndex}`}
                  onMouseEnter={() => setPaused(true)}
                  onMouseLeave={() => setPaused(false)}
                  ref={(element) => {
                    slideRefs.current[itemIndex] = element;
                  }}
                >
                  <Quote aria-hidden="true" className="absolute -right-3 -top-4 size-28 text-cobalt/5.5 transition-[transform,color] duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-rotate-6 group-hover:scale-110 group-hover:text-cobalt/9" strokeWidth={1.2} />

                  <div className="relative z-10">
                    <div className="flex items-center justify-between gap-4">
                      <div aria-label="5 out of 5 stars" className="flex items-center gap-1 text-cobalt">
                        {[...Array(5)].map((_, starIndex) => (
                          <Star aria-hidden="true" className="size-4 fill-current" key={starIndex} />
                        ))}
                      </div>
                      <span className="text-xs font-extrabold tracking-[0.16em] text-cobalt/35">
                        0{testimonialIndex + 1}
                      </span>
                    </div>
                    <p className="mt-7 text-base font-medium leading-8 text-ink/78">
                      &ldquo;{item.quote}&rdquo;
                    </p>
                  </div>

                  <div className="relative z-10 mt-8 flex items-center gap-3 border-t border-slate-200 pt-5">
                    <span aria-hidden="true" className="grid size-10 shrink-0 place-items-center rounded-full bg-cobalt text-sm font-extrabold text-white shadow-[0_8px_20px_rgba(21,94,239,0.22)]">
                      {item.author.charAt(0)}
                    </span>
                    <div>
                      <p className="text-sm font-bold text-ink">{item.author}</p>
                      <p className="mt-0.5 text-xs font-medium text-ink/55">{item.role}</p>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>

        <div aria-label="Choose testimonial" className="mt-7 flex items-center justify-center gap-2" role="group">
          {testimonials.map((item, index) => (
            <button
              aria-label={`Show testimonial ${index + 1}`}
              aria-pressed={activeIndex === index}
              className={`h-2.5 rounded-full transition-[width,background-color] duration-500 ${activeIndex === index ? "w-8 bg-cobalt" : "w-2.5 bg-slate-300 hover:bg-slate-400"}`}
              key={item.author}
              onClick={() => selectSlide(index)}
              type="button"
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
