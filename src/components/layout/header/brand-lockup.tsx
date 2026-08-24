import Image from "next/image";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const lockupVariants = cva("inline-flex items-center", {
  variants: {
    size: {
      sm: "gap-2.5",
      md: "gap-3",
      lg: "gap-4",
    },
  },
  defaultVariants: { size: "md" },
});

interface BrandLockupProps extends VariantProps<typeof lockupVariants> {
  inverse?: boolean;
  markPlate?: boolean;
  className?: string;
  priorityLabel?: string;
}

export function BrandLockup({
  size = "md",
  inverse = false,
  markPlate = false,
  className,
  priorityLabel = "S.N Group home",
}: BrandLockupProps) {
  return (
    <span
      aria-label={priorityLabel}
      className={cn(lockupVariants({ size }), inverse ? "text-white" : "text-ink", className)}
    >
      <span
        className={cn(
          "grid shrink-0 place-items-center",
          size === "sm" && "size-10",
          size === "md" && "size-12",
          size === "lg" && "size-14",
          markPlate && "rounded-full bg-white p-1 shadow-sm",
        )}
      >
        <Image
          alt=""
          aria-hidden="true"
          className="size-full object-contain"
          height={64}
          src="/images/sn-group-mark.webp"
          width={64}
        />
      </span>
      <span className="flex flex-col justify-center select-none">
        <span
          className={cn(
            "display-type block font-bold leading-[0.82] tracking-[0.04em]",
            size === "sm" && "text-[1.55rem]",
            size === "md" && "text-[1.65rem]",
            size === "lg" && "text-[2.2rem]",
          )}
        >
          S.N GROUP
        </span>
        <span
          className={cn(
            "block font-semibold uppercase leading-none opacity-85",
            size === "sm" && "-mt-1 text-[0.6rem] tracking-[0.24em]",
            size === "md" && "-mt-1 text-[0.68rem] tracking-[0.24em]",
            size === "lg" && "-mt-1.5 text-[0.8rem] tracking-[0.25em]",
          )}
        >
          Building trust.
        </span>
      </span>
    </span>
  );
}
