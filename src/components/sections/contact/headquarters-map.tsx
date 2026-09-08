import { Clock, ExternalLink, MapPin, MessageSquare, Navigation, ShieldCheck } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/motion/reveal";
import { siteConfig } from "@/config/site";

export function HeadquartersMap() {
  return (
    <section className="relative overflow-hidden border-t border-slate-200 bg-white py-16 sm:py-24" id="headquarters-location">
      {/* Background blueprint and ambient lights */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-28 top-1/4 size-96 rounded-full bg-cobalt/5 blur-3xl"
      />

      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <p className="eyebrow mb-3 sm:mb-4 justify-center text-cobalt">Dhaka Headquarters</p>
            <h2 className="display-type text-3xl font-extrabold tracking-tight text-ink sm:text-5xl">
              Prime Gulshan Location
            </h2>
            <p className="mt-4 text-sm sm:text-base leading-relaxed text-ink/65">
              Conveniently situated in the commercial heart of Dhaka. Visitors are welcome for scheduled boardroom consultations, tender reviews, and executive meetings.
            </p>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-12 lg:items-stretch">
          {/* Map Frame (7 cols) */}
          <Reveal className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 shadow-[0_18px_48px_rgba(15,23,42,0.08)] lg:col-span-7 flex flex-col min-h-[380px] lg:min-h-[460px]">
            <div className="flex items-center justify-between border-b border-slate-200 bg-white px-5 py-3.5">
              <div className="flex items-center gap-2.5">
                <span className="size-2.5 rounded-full bg-emerald-500 animate-ping" />
                <span className="font-mono text-xs font-bold uppercase tracking-wider text-ink/75">
                  Silver Tower • Gulshan-1, Dhaka
                </span>
              </div>
              <a
                className="inline-flex items-center gap-1.5 text-xs font-bold text-cobalt transition-colors hover:text-blue-700"
                href={siteConfig.address.mapUrl}
                rel="noreferrer"
                target="_blank"
              >
                <span>Full Map</span>
                <ExternalLink aria-hidden="true" className="size-3.5" />
              </a>
            </div>

            <div className="relative flex-1 w-full min-h-[320px]">
              <iframe
                allowFullScreen
                className="absolute inset-0 size-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.848882898967!2d90.41437197593258!3d23.777712388001693!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c77764d84347%3A0xbd7d3bca782f9d51!2sSilver%20Tower%2C%2052%20Gulshan%20Ave%2C%20Dhaka%201212!5e0!3m2!1sen!2sbd!4v1700000000000!5m2!1sen!2sbd"
                title="S.N Group Headquarters Map Location"
              />
            </div>
          </Reveal>

          {/* Details & Visiting Info (5 cols) */}
          <Reveal className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-linear-to-br from-white via-white to-blue-50/40 p-6 sm:p-8 shadow-[0_18px_48px_rgba(15,23,42,0.06)] lg:col-span-5" delay={0.1}>
            <div>
              <div className="flex items-center gap-3">
                <span className="grid size-11 place-items-center rounded-xl border border-cobalt/20 bg-blue-50 text-cobalt shadow-sm">
                  <MapPin aria-hidden="true" className="size-5" />
                </span>
                <div>
                  <h3 className="display-type text-xl font-bold text-ink">Silver Tower (Lift 4)</h3>
                  <p className="text-xs font-semibold text-cobalt">52 Gulshan Avenue, Gulshan-1, Dhaka</p>
                </div>
              </div>

              {/* Landmark & Logistics */}
              <div className="mt-6 space-y-4">
                <div className="rounded-xl border border-slate-100 bg-white p-4 shadow-xs">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-ink/70">
                    <Navigation aria-hidden="true" className="size-4 text-cobalt" />
                    <span>Access & Landmarks</span>
                  </div>
                  <p className="mt-2 text-xs leading-relaxed text-ink/65">
                    Positioned adjacent to Gulshan-1 Circle, directly accessible via Bir Uttam Mir Shawkat Sarak and Gulshan Avenue.
                  </p>
                </div>

                <div className="rounded-xl border border-slate-100 bg-white p-4 shadow-xs">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-ink/70">
                    <Clock aria-hidden="true" className="size-4 text-cobalt" />
                    <span>Office Operating Hours</span>
                  </div>
                  <div className="mt-2.5 space-y-1.5 text-xs text-ink/70">
                    <div className="flex justify-between font-medium">
                      <span>Sunday – Thursday</span>
                      <span className="font-semibold text-ink">9:00 AM – 6:00 PM</span>
                    </div>
                    <div className="flex justify-between text-ink/50">
                      <span>Friday</span>
                      <span className="font-medium text-amber-700">Closed (Site Desks Active)</span>
                    </div>
                    <div className="flex justify-between font-medium">
                      <span>Saturday</span>
                      <span className="font-semibold text-ink">By Prior Appointment</span>
                    </div>
                  </div>
                </div>

                <div className="rounded-xl border border-slate-100 bg-white p-4 shadow-xs">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-ink/70">
                    <ShieldCheck aria-hidden="true" className="size-4 text-emerald-600" />
                    <span>Visitor Protocols</span>
                  </div>
                  <p className="mt-2 text-xs leading-relaxed text-ink/65">
                    Basement parking is provided for registered visitors. Please check in with building security concierge on the ground floor.
                  </p>
                </div>
              </div>
            </div>

            {/* Action buttons */}
            <div className="mt-6 flex flex-col gap-2.5 sm:flex-row border-t border-slate-100 pt-5">
              <a
                className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl border border-cobalt bg-cobalt px-4 py-3 text-xs font-bold text-white shadow-[0_8px_20px_rgba(21,94,239,0.22)] transition-[background-color,border-color,transform] duration-300 hover:bg-blue-700 hover:shadow-lg active:scale-98"
                href={siteConfig.address.mapUrl}
                rel="noreferrer"
                target="_blank"
              >
                <Navigation aria-hidden="true" className="size-4" />
                <span>Get Driving Directions</span>
              </a>
              <a
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-emerald-500/30 bg-emerald-50 px-4 py-3 text-xs font-bold text-emerald-700 transition-colors duration-300 hover:border-emerald-600 hover:bg-emerald-600 hover:text-white active:scale-98"
                href={siteConfig.whatsapp}
                rel="noreferrer"
                target="_blank"
              >
                <MessageSquare aria-hidden="true" className="size-4" />
                <span>WhatsApp Advisory</span>
              </a>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
