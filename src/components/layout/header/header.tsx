"use client";

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
      setScrolled((current) => current ? window.scrollY > 12 : window.scrollY > 64);
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
          "relative md:fixed inset-x-0 top-0 z-50 p-0 text-ink transition-[padding] duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]",
          compact && "md:px-6 md:pt-3",
        )}
      >
        <div
          data-navbar-state={compact ? "compact" : "full"}
          className={cn(
            "relative isolate mx-auto flex h-16 sm:h-18 md:h-20 w-full max-w-[100vw] items-center justify-between border-b md:border border-slate-200/80 md:border-transparent bg-white md:bg-white/10 px-3.5 sm:px-6 lg:px-8 shadow-xs md:shadow-none md:backdrop-blur-sm transition-[height,max-width,border-radius,border-color,box-shadow,background-color,backdrop-filter] duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]",
            compact && "md:h-17 md:max-w-[86rem] md:rounded-full md:border-slate-200/85 md:bg-white md:shadow-[0_8px_24px_rgba(15,23,42,0.08)] md:backdrop-blur-2xl",
          )}
        >
          <Link
            aria-label="S.N Group home"
            className={cn(
              "relative z-10 rounded-full px-1.5 py-1 transition-transform duration-800 ease-[cubic-bezier(0.16,1,0.3,1)]",
              compact && "scale-[0.9]",
            )}
            href="/"
          >
            <BrandLockup size="sm" />
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
