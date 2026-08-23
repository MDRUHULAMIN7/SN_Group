import Link from "next/link";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";
import { ArrowUpRight } from "lucide-react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

export const buttonVariants = cva(
  "group inline-flex min-h-11 items-center justify-center gap-2 rounded-xl border px-5 py-3 text-sm font-bold transition-[background-color,color,border-color,transform] duration-300 ease-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 disabled:pointer-events-none disabled:opacity-50 active:scale-[0.98]",
  {
    variants: {
      variant: {
        primary: "border-cobalt bg-cobalt text-white hover:border-blue-500 hover:bg-blue-500",
        dark: "border-navy bg-navy text-white hover:border-cobalt hover:bg-cobalt",
        light: "border-white bg-white text-navy hover:border-sky hover:bg-sky",
        outline: "border-current bg-transparent hover:bg-current/10",
        ghost: "border-transparent bg-transparent hover:bg-white/10",
      },
      size: {
        sm: "min-h-10 px-4 py-2 text-xs",
        md: "min-h-11 px-5 py-3",
        lg: "min-h-13 px-6 py-3.5 text-base",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  },
);

interface ButtonLinkProps
  extends AnchorHTMLAttributes<HTMLAnchorElement>,
    VariantProps<typeof buttonVariants> {
  href: string;
  showArrow?: boolean;
}

export function ButtonLink({
  className,
  variant,
  size,
  href,
  showArrow = false,
  children,
  ...props
}: ButtonLinkProps) {
  return (
    <Link className={cn(buttonVariants({ variant, size }), className)} href={href} {...props}>
      {children}
      {showArrow ? (
        <ArrowUpRight
          aria-hidden="true"
          className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
        />
      ) : null}
    </Link>
  );
}

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

export function Button({ className, variant, size, type = "button", ...props }: ButtonProps) {
  return <button className={cn(buttonVariants({ variant, size }), className)} type={type} {...props} />;
}
