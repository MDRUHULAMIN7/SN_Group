"use client";

import { useCallback, useEffect, useRef, useState, type TransitionEvent } from "react";
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
  const [isInView, setIsInView] = useState(true);
  const [transitionEnabled, setTransitionEnabled] = useState(true);
  const sectionRef = useRef<HTMLElement>(null);
  const viewportRef = useRef<HTMLDivElement>(null);
  const slideRefs = useRef<Array<HTMLElement | null>>([]);
  const reduceMotion = useReducedMotion();
  const activeIndex = position % testimonials.length;

  const measure = useCallback(() => {
    const firstSlide = slideRefs.current[0];
    const secondSlide = slideRefs.current[1];
    if (firstSlide && secondSlide) {
      const diff = secondSlide.offsetLeft - firstSlide.offsetLeft;
      if (diff > 0) {
        setStep(diff);
        return;
      }
    }
    if (viewportRef.current) {
      const width = viewportRef.current.clientWidth;
      if (width >= 1024) {
        setStep((width + 24) / 3);
      } else if (width >= 640) {
        setStep((width + 24) / 2);
      } else {
        setStep(width + 24);
      }
    }
  }, []);

  useEffect(() => {
    measure();
    window.addEventListener("resize", measure);

    const observer = typeof ResizeObserver === "undefined" ? null : new ResizeObserver(measure);
    if (viewportRef.current) observer?.observe(viewportRef.current);

    return () => {
      window.removeEventListener("resize", measure);
      observer?.disconnect();
    };
  }, [measure]);

  // Track if section is in viewport so autoplay pauses when offscreen
  // This prevents the carousel from getting out of sync while the user is elsewhere on the page
  useEffect(() => {
    const section = sectionRef.current;
    if (!section || typeof IntersectionObserver === "undefined") return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { rootMargin: "120px 0px" }
    );
    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  // Autoplay with fail-safe loop recovery
  useEffect(() => {
    if (paused || reduceMotion || !isInView) return;

    const timer = window.setInterval(() => {
      setPosition((current) => {
        if (current >= testimonials.length) {
          // Wrap instantly to start and step to 1
          setTransitionEnabled(false);
          window.requestAnimationFrame(() => {
            window.requestAnimationFrame(() => {
              setTransitionEnabled(true);
              setPosition(1);
            });
          });
          return 0;
        }
        setTransitionEnabled(true);
        return current + 1;
      });
    }, 3600);

    return () => window.clearInterval(timer);
  }, [paused, reduceMotion, isInView]);

  const handleTransitionEnd = (event: TransitionEvent<HTMLDivElement>) => {
    if (event.target !== event.currentTarget) return;

    if (position >= testimonials.length) {
      setTransitionEnabled(false);
      setPosition(0);
      window.requestAnimationFrame(() => {
        window.requestAnimationFrame(() => setTransitionEnabled(true));
      });
    }
  };

  const selectSlide = (index: number) => {
    setTransitionEnabled(true);
    setPosition(index);
  };

  // Safe position prevents sliding into blank space beyond clones
  const safePosition = Math.min(position, testimonials.length);

  return (
    <section
      aria-label="Partner Testimonials"
      aria-roledescription="carousel"
      className="relative overflow-hidden border-t border-slate-200 bg-white py-14 sm:py-20 lg:py-24 text-ink"
      id="testimonials"
      ref={sectionRef}
    >
      <div aria-hidden="true" className="pointer-events-none absolute -left-40 top-1/3 size-96 rounded-full bg-cobalt/5 blur-[130px]" />

      <Container className="relative z-10">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <p className="eyebrow mb-3 sm:mb-4 justify-center text-blue-400">Testimonials</p>
            <h2 className="display-type text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight">
              What Our Partners Say
            </h2>
            <p className="mt-2.5 sm:mt-3 text-base sm:text-lg text-ink/75">
              Reflections of trust, execution excellence, and enduring relationships built over two decades.
            </p>
          </Reveal>
        </div>

        <div className="relative mt-10 sm:mt-14 overflow-hidden pb-2" ref={viewportRef}>
          <div
            className="flex gap-6 transition-transform ease-[cubic-bezier(0.22,1,0.36,1)] will-change-transform"
            onTransitionEnd={handleTransitionEnd}
            style={{
              transform: `translate3d(-${safePosition * step}px, 0, 0)`,
              transitionDuration: reduceMotion || !transitionEnabled ? "0ms" : "550ms",
            }}
          >
            {carouselItems.map((item, itemIndex) => {
              const testimonialIndex = itemIndex % testimonials.length;
              const isClone = itemIndex >= testimonials.length;

              return (
                <article
                  aria-hidden={isClone || undefined}
                  aria-label={isClone ? undefined : `Testimonial ${testimonialIndex + 1} of ${testimonials.length}`}
                  className="group relative flex min-h-80 w-full shrink-0 flex-col justify-between overflow-hidden rounded-2xl border border-slate-200 bg-linear-to-br from-white via-white to-blue-50/50 p-7 shadow-[0_12px_36px_rgba(15,23,42,0.07)] transition-[border-color,box-shadow,background-color,transform] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1 hover:border-cobalt/40 hover:shadow-[0_24px_56px_rgba(21,94,239,0.15)] sm:w-[calc(50%-0.75rem)] sm:p-8 lg:w-[calc(33.333333%-1rem)]"
                  key={`${item.author}-${itemIndex}`}
                  onMouseEnter={() => setPaused(true)}
                  onMouseLeave={() => setPaused(false)}
                  ref={(element) => {
                    slideRefs.current[itemIndex] = element;
                  }}
                >
                  <Quote aria-hidden="true" className="absolute -right-3 -top-4 size-28 text-cobalt/5.5 transition-[transform,color] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-rotate-6 group-hover:scale-110 group-hover:text-cobalt/9" strokeWidth={1.2} />

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

        {/* Carousel Dot Indicators */}
        <div aria-label="Choose testimonial" className="mt-8 flex items-center justify-center gap-2" role="group">
          {testimonials.map((item, index) => (
            <button
              aria-label={`Show testimonial ${index + 1}`}
              aria-pressed={activeIndex === index}
              className={`h-2 sm:h-2.5 rounded-full transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-cobalt ${
                activeIndex === index
                  ? "w-8 sm:w-10 bg-cobalt shadow-xs"
                  : "w-2.5 bg-slate-300 hover:bg-slate-400"
              }`}
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
