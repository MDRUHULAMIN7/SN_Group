"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { primaryNavigation } from "@/config/navigation";
import { cn } from "@/lib/utils";
import { SisterConcernMenu } from "./sister-concern-menu";

export function DesktopNavigation() {
  const pathname = usePathname();
  const leading = primaryNavigation.slice(0, 2);
  const trailing = primaryNavigation.slice(2);

  const link = (item: (typeof primaryNavigation)[number]) => {
    const isHome = item.href === "/";
    const active = isHome ? pathname === "/" : false;

    return (
      <Link
        aria-current={active ? "page" : undefined}
        className={cn(
          "group relative flex min-h-10 items-center px-3 text-sm font-semibold transition-colors xl:px-3.5",
          "text-ink hover:text-cobalt",
          active && "text-cobalt font-bold",
          !isHome && "cursor-default",
        )}
        href={isHome ? "/" : "#"}
        key={item.label}
        onClick={(e) => {
          if (!isHome) {
            e.preventDefault();
          }
        }}
      >
        {item.label}
        <span
          className={cn(
            "absolute inset-x-4 bottom-1 h-0.5 origin-left scale-x-0 bg-cobalt transition-transform duration-300 group-hover:scale-x-100",
            active && "scale-x-100",
          )}
        />
      </Link>
    );
  };

  return (
    <nav aria-label="Primary navigation" className="hidden items-center lg:flex">
      {leading.map(link)}
      <SisterConcernMenu active={false} />
      {trailing.map(link)}
    </nav>
  );
}
