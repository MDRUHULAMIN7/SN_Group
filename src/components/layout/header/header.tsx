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
          "fixed inset-x-0 top-0 z-50 p-0 text-white transition-[padding] duration-800 ease-[cubic-bezier(0.16,1,0.3,1)]",
          compact && "px-2 pt-2 sm:px-6 sm:pt-3",
        )}
      >
        <div
          data-navbar-state={compact ? "compact" : "full"}
          className={cn(
            "relative isolate mx-auto flex h-[4.25rem] w-full max-w-[100vw] items-center justify-between rounded-none border border-transparent bg-transparent px-3 shadow-none transition-[height,max-width,border-radius,border-color,box-shadow,background-color,backdrop-filter] duration-800 ease-[cubic-bezier(0.16,1,0.3,1)] sm:px-5 lg:px-6",
            compact && "h-17 max-w-[86rem] rounded-full border-white/15 bg-black/25 backdrop-blur-2xl shadow-[0_16px_45px_rgba(0,0,0,0.38)]",
          )}
        >
          <span aria-hidden="true" className={cn("absolute inset-0 -z-10 rounded-[inherit] bg-[linear-gradient(105deg,rgba(22,30,46,0.48)_0%,rgba(12,20,34,0.52)_52%,rgba(5,14,30,0.58)_100%)] backdrop-blur-2xl opacity-0 transition-opacity duration-800", compact && "opacity-100")} />
          <Link aria-label="S.N Group home" className={cn("relative z-10 rounded-full px-1.5 py-1 transition-transform duration-800 ease-[cubic-bezier(0.16,1,0.3,1)]", compact && "scale-[0.9]")} href="/">
            <BrandLockup inverse markPlate size="sm" />
          </Link>
          <div className="relative z-10"><DesktopNavigation /></div>
          <div className="relative z-10 flex items-center gap-2">
            <ButtonLink className="hidden rounded-full lg:inline-flex" href="/contact#quotation-form" size="sm" variant="light">
              Request a quotation
            </ButtonLink>
            <AnimatedMenuButton
              buttonRef={menuButtonRef}
              className="border-white/15 bg-white/5 text-white"
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
