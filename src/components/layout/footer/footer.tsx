import { ArrowUpRight, FileDown } from "lucide-react";
import { siteConfig } from "@/config/site";
import { Container } from "@/components/ui/container";
import { BrandLockup } from "@/components/layout/header/brand-lockup";
import { ContactInformation } from "./contact-information";
import { FooterNavigation } from "./footer-navigation";
import { SocialLinks } from "./social-links";

export function Footer() {
  return (
    <footer className="blueprint-grid border-t border-slate-200 bg-white text-ink">
      <Container className="pb-8 pt-16 sm:pt-20">
        <div className="grid gap-14 border-b border-slate-200 pb-14 lg:grid-cols-[0.8fr_1fr_1.3fr]">
          <div>
            <BrandLockup size="lg" />
            <p className="mt-4 max-w-xs text-sm leading-7 text-ink/78">Connected construction, procurement and asset stewardship for a stronger built Bangladesh.</p>
            <div className="mt-5">
              <a
                className="group inline-flex items-center gap-3 rounded-xl border border-cobalt/25 bg-blue-50/70 px-4 py-2.5 text-xs font-bold text-cobalt shadow-[0_4px_16px_rgba(21,94,239,0.08)] transition-all duration-300 hover:-translate-y-0.5 hover:border-cobalt hover:bg-cobalt hover:text-white hover:shadow-[0_8px_24px_rgba(21,94,239,0.22)]"
                href="https://drive.google.com/file/d/1LPf6z4_mytrZQqKnS3fSlhURC-aDiIjf/view?usp=drive_link"
                rel="noopener noreferrer"
                target="_blank"
              >
                <span className="grid size-7 place-items-center rounded-lg bg-cobalt text-white transition-colors duration-300 group-hover:bg-white group-hover:text-cobalt">
                  <FileDown aria-hidden="true" className="size-3.5" />
                </span>
                <span className="flex flex-col text-left">
                  <span className="text-[0.68rem] font-medium leading-none text-ink/60 group-hover:text-white/80">Corporate Brochure</span>
                  <span className="mt-1 text-xs font-extrabold leading-none tracking-tight">Download Company Profile</span>
                </span>
                <ArrowUpRight aria-hidden="true" className="size-3.5 text-cobalt/70 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white" />
              </a>
            </div>
            <div className="mt-6">
              <p className="mb-2 text-[0.65rem] font-bold uppercase tracking-[0.16em] text-ink/65">Connect with us</p>
              <SocialLinks />
            </div>
          </div>
          <FooterNavigation />
          <ContactInformation />
        </div>
        <div className="flex flex-col gap-3 pt-7 text-xs text-ink/65 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</p>
          <p>Developed By <a className="font-semibold text-ink/90 transition-colors hover:text-cobalt" href="https://codeclubitsolutions.com/" rel="noreferrer" target="_blank">CodeClub IT Solutions</a></p>
        </div>
      </Container>
    </footer>
  );
}
