"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";
import { ArrowUpRight, X } from "lucide-react";
import { AnimatePresence, m } from "motion/react";
import { primaryNavigation } from "@/config/navigation";
import { sisterConcerns } from "@/data/sister-concerns";
import { cn } from "@/lib/utils";
import { BrandLockup } from "./brand-lockup";
import { SocialLinks } from "../footer/social-links";

interface MobileNavigationDrawerProps {
  open: boolean;
  onClose: () => void;
  triggerRef: React.RefObject<HTMLButtonElement | null>;
}

const focusableSelector = 'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])';

export function MobileNavigationDrawer({ open, onClose, triggerRef }: MobileNavigationDrawerProps) {
  const pathname = usePathname();
  const drawerRef = useRef<HTMLDivElement>(null);
  const previousPath = useRef(pathname);

  useEffect(() => {
    if (previousPath.current !== pathname) {
      previousPath.current = pathname;
      onClose();
    }
  }, [onClose, pathname]);

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const firstFocusable = drawerRef.current?.querySelector<HTMLElement>(focusableSelector);
    window.requestAnimationFrame(() => firstFocusable?.focus());

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        onClose();
        triggerRef.current?.focus();
        return;
      }

      if (event.key !== "Tab" || !drawerRef.current) return;
      const elements = Array.from(drawerRef.current.querySelectorAll<HTMLElement>(focusableSelector));
      const first = elements[0];
      const last = elements.at(-1);
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last?.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first?.focus();
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose, open, triggerRef]);

  const closeAndRestore = () => {
    onClose();
    triggerRef.current?.focus();
  };

  return (
    <AnimatePresence>
      {open ? (
        <div className="fixed inset-0 z-[70] lg:hidden">
          <m.button
            animate={{ opacity: 1 }}
            aria-label="Close navigation menu"
            className="absolute inset-0 bg-white/64 backdrop-blur-[2px]"
            exit={{ opacity: 0 }}
            initial={{ opacity: 0 }}
            onClick={closeAndRestore}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            type="button"
          />
          <m.div
            ref={drawerRef}
            animate={{ x: 0 }}
            aria-label="Mobile navigation"
            aria-modal="true"
            className="blueprint-grid fixed inset-y-0 right-0 flex h-dvh w-[min(92vw,28rem)] flex-col overflow-y-auto border-l border-slate-200 bg-white/96 px-6 pb-8 pt-5 text-ink shadow-[-20px_0_60px_rgba(15,23,42,0.14)] backdrop-blur-2xl"
            exit={{ x: "100%", transition: { duration: 0.36, ease: [0.32, 0, 0.67, 0] } }}
            id="mobile-navigation"
            initial={{ x: "100%" }}
            role="dialog"
            transition={{ duration: 0.48, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex items-center justify-between gap-4 border-b border-slate-200 pb-5">
              <BrandLockup size="sm" />
              <button aria-label="Close navigation menu" className="grid size-11 shrink-0 place-items-center rounded-full border border-slate-200 bg-white text-ink transition-[background-color,border-color] duration-300 hover:border-slate-400 hover:bg-slate-50 active:scale-95" onClick={closeAndRestore} type="button">
                <X aria-hidden="true" className="size-6" />
              </button>
            </div>
            <nav aria-label="Mobile primary navigation" className="mt-8">
              <ul className="space-y-1">
                {primaryNavigation.map((item, index) => {
                  const isHome = item.href === "/";
                  const active = isHome
                    ? pathname === "/"
                    : pathname === item.href || pathname?.startsWith(`${item.href}/`);

                  return (
                    <m.li
                      animate={{ opacity: 1, x: 0 }}
                      initial={{ opacity: 0, x: 20 }}
                      key={item.href}
                      transition={{ delay: 0.06 + index * 0.04, duration: 0.38, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <Link
                        className={cn(
                          "group flex min-h-14 items-center justify-between border-b border-slate-200 text-xl font-semibold transition-colors hover:text-cobalt",
                          active ? "text-cobalt font-bold" : "text-ink",
                        )}
                        href={item.href}
                        onClick={closeAndRestore}
                      >
                        {item.label}
                        <ArrowUpRight
                          aria-hidden="true"
                          className={cn(
                            "size-5 text-cobalt transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5",
                            active && "opacity-100",
                          )}
                        />
                      </Link>
                    </m.li>
                  );
                })}
              </ul>
              <div className="mt-9">
                <p className="mb-4 text-[0.65rem] font-bold uppercase tracking-[0.18em] text-cobalt">Sister concerns</p>
                <ul className="space-y-1">
                  {sisterConcerns.map((concern, index) => {
                    const active = pathname === `/sister-concerns/${concern.slug}`;
                    return (
                      <m.li animate={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: 20 }} key={concern.slug} transition={{ delay: 0.22 + index * 0.04, duration: 0.38, ease: [0.16, 1, 0.3, 1] }}>
                        <Link
                          className={cn(
                            "flex min-h-12 items-center gap-4 rounded-xl px-2 transition-colors hover:bg-blue-50 hover:text-cobalt",
                            active ? "bg-blue-50 text-cobalt font-bold" : "text-ink",
                          )}
                          href={`/sister-concerns/${concern.slug}`}
                          onClick={closeAndRestore}
                        >
                          <span className="text-xs tabular-nums text-ink/40">0{index + 1}</span>
                          <span className="font-semibold">{concern.name}</span>
                        </Link>
                      </m.li>
                    );
                  })}
                </ul>
              </div>
            </nav>
            <div className="mt-auto pt-10 text-sm leading-6 text-ink/55">
              <div className="mb-4">
                <p className="mb-2 text-[0.65rem] font-bold uppercase tracking-[0.18em] text-cobalt">Connect with us</p>
                <SocialLinks />
              </div>
              Silver Tower, 52 Gulshan Avenue<br />Dhaka-1212, Bangladesh
            </div>
          </m.div>
        </div>
      ) : null}
    </AnimatePresence>
  );
}
