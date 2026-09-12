"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { ButtonLink } from "@/components/ui/button";
import { BrandLockup } from "./brand-lockup";
import { DesktopNavigation } from "./desktop-navigation";
import { AnimatedMenuButton } from "./animated-menu-button";
import { MobileNavigationDrawer } from "./mobile-navigation-drawer";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const closeMobile = useCallback(() => setMobileOpen(false), []);

  useEffect(() => {
    function handleScroll() {
      setScrolled((current) => current ? window.scrollY > 12 : window.scrollY > 24);
    }
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const compact = scrolled || mobileOpen;

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 p-0 text-ink transition-[padding] duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]",
          compact && "md:px-6 md:pt-3",
        )}
      >
        <div
          data-navbar-state={compact ? "compact" : "full"}
          className={cn(
            "relative isolate mx-auto flex w-full items-center justify-between transition-[height,max-width,border-radius,border-color,box-shadow,background-color,backdrop-filter,padding] duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]",
            compact
              ? "h-19 sm:h-20 md:h-17 lg:h-17 md:max-w-[86rem] md:rounded-full border-b md:border border-slate-200/80 md:border-slate-200/85 bg-white md:shadow-[0_8px_24px_rgba(15,23,42,0.08)] md:backdrop-blur-2xl px-5 sm:px-6 md:px-6"
              : "h-19 sm:h-20 md:h-24 lg:h-26 max-w-[100vw] border-b md:border border-slate-200/80 md:border-transparent bg-white md:bg-white/10 px-5 sm:px-6 lg:px-8 shadow-xs md:shadow-none md:backdrop-blur-sm",
          )}
        >
          <Link
            aria-label="S.N Group home"
            className={cn(
              "relative z-10 flex items-center rounded-full px-1.5 py-1 transition-transform duration-800 ease-[cubic-bezier(0.16,1,0.3,1)]",
              compact && "md:scale-[0.9]",
            )}
            href="/"
          >
            {/* MOBILE LOGO: Official Crest Logo (mark + group name + 3 concerns), does NOT change on scroll */}
            <div className="flex md:hidden items-center select-none py-1.5">
              <div className="flex flex-col items-center justify-center text-center">
                <div className="relative size-8 sm:size-8.5 shrink-0">
                  <Image
                    alt="S.N Group"
                    aria-hidden="true"
                    className="size-full object-contain"
                    height={64}
                    priority
                    src="/images/sn-group-mark.webp"
                    width={64}
                  />
                </div>
                <span className="font-serif font-bold text-[0.76rem] sm:text-[0.82rem] leading-none text-[#002699] mt-1 tracking-tight">
                  S.N Group
                </span>
                <div className="mt-0.5 flex flex-col items-center text-[5.4px] sm:text-[6px] font-bold leading-[1.2] text-[#002699] tracking-[0.02em] uppercase">
                  <span className="whitespace-nowrap">S.N ENG CONSTRUCTION BD LTD.</span>
                  <span className="whitespace-nowrap">S.N IMPORT &amp; EXPORT BD LTD.</span>
                  <span className="whitespace-nowrap">MEHRISH HOLDINGS LTD.</span>
                </div>
              </div>
            </div>

            {/* DESKTOP / LARGE SCREEN LOGO: Dynamic based on scroll */}
            <div className="hidden md:flex items-center relative">
              {/* 1. Official Crest Logo with ENLARGED, Highly Legible Typography (Shown BEFORE scroll starts on large screens) */}
              <div
                className={cn(
                  "flex items-center transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]",
                  scrolled
                    ? "pointer-events-none absolute inset-y-0 left-0 opacity-0 scale-90 -translate-y-1"
                    : "pointer-events-auto relative opacity-100 scale-100 translate-y-0",
                )}
              >
                <div className="flex flex-col items-center justify-center text-center select-none py-1.5">
                  <div className="relative size-9 sm:size-9.5 md:size-10 shrink-0">
                    <Image
                      alt=""
                      aria-hidden="true"
                      className="size-full object-contain"
                      height={64}
                      priority
                      src="/images/sn-group-mark.webp"
                      width={64}
                    />
                  </div>
                  <span className="font-serif font-bold text-[0.84rem] sm:text-[0.88rem] md:text-[0.94rem] leading-none text-[#002699] mt-1 tracking-tight">
                    S.N Group
                  </span>
                  <div className="mt-0.5 flex flex-col items-center text-[6px] sm:text-[6.6px] md:text-[7.2px] font-bold leading-[1.2] text-[#002699] tracking-[0.025em] uppercase">
                    <span className="whitespace-nowrap">S.N ENG CONSTRUCTION BD LTD.</span>
                    <span className="whitespace-nowrap">S.N IMPORT &amp; EXPORT BD LTD.</span>
                    <span className="whitespace-nowrap">MEHRISH HOLDINGS LTD.</span>
                  </div>
                </div>
              </div>

              {/* 2. Previous Horizontal Brand Lockup (Shown WHEN scroll starts on large screens) */}
              <div
                className={cn(
                  "flex items-center transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]",
                  scrolled
                    ? "pointer-events-auto relative opacity-100 scale-100 translate-y-0"
                    : "pointer-events-none absolute inset-y-0 left-0 opacity-0 scale-90 translate-y-1",
                )}
              >
                <BrandLockup size="sm" />
              </div>
            </div>
          </Link>
          <div className="relative z-10">
            <DesktopNavigation />
          </div>
          <div className="relative z-10 flex items-center gap-2">
            <ButtonLink
              className="hidden rounded-full text-sm xl:text-[0.95rem] lg:inline-flex"
              href="/contact#quotation-form"
              size="sm"
              variant="primary"
            >
              Request a quotation
            </ButtonLink>
            <AnimatedMenuButton
              buttonRef={menuButtonRef}
              className={cn(
                "border-slate-300 bg-white text-ink transition-colors duration-300 hover:border-slate-400 hover:bg-slate-50",
                compact && "bg-slate-50",
              )}
              onClick={() => setMobileOpen((value) => !value)}
              open={mobileOpen}
            />
          </div>
        </div>
      </header>
      <MobileNavigationDrawer onClose={closeMobile} open={mobileOpen} triggerRef={menuButtonRef} />
    </>
  );
}
