import { siteConfig } from "@/config/site";
import { Container } from "@/components/ui/container";
import { BrandLockup } from "@/components/layout/header/brand-lockup";
import { ContactInformation } from "./contact-information";
import { FooterNavigation } from "./footer-navigation";
import { SocialLinks } from "./social-links";

export function Footer() {
  return (
    <footer className="blueprint-grid-dark bg-black text-white">
      <Container className="pb-8 pt-16 sm:pt-20">
        <div className="grid gap-14 border-b border-white/10 pb-14 lg:grid-cols-[0.8fr_1fr_1.3fr]">
          <div>
            <BrandLockup inverse size="lg" />
            <p className="mt-4 max-w-xs text-sm leading-7 text-white/55">Connected construction, procurement and asset stewardship for a stronger built Bangladesh.</p>
            <div className="mt-6">
              <p className="mb-2 text-[0.65rem] font-bold uppercase tracking-[0.16em] text-white/40">Connect with us</p>
              <SocialLinks />
            </div>
          </div>
          <FooterNavigation />
          <ContactInformation />
        </div>
        <div className="flex flex-col gap-3 pt-7 text-xs text-white/35 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</p>
          <p>Developed By <a className="font-semibold text-white/65 transition-colors hover:text-blue-300" href="https://codeclubitsolutions.com/" rel="noreferrer" target="_blank">CodeClub IT Solutions</a></p>
        </div>
      </Container>
    </footer>
  );
}
