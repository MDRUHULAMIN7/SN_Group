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
          size === "sm" && "size-11",
          size === "md" && "size-12",
          size === "lg" && "size-14",
          markPlate && "rounded-full p-1",
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
      <span
        className={cn(
          "display-type block font-extrabold leading-none tracking-[0.03em] select-none",
          size === "sm" && "text-[1.85rem] sm:text-[2.1rem]",
          size === "md" && "text-[2rem] sm:text-[2.25rem]",
          size === "lg" && "text-[2.6rem] sm:text-[3rem]",
        )}
      >
        S.N GROUP
      </span>
    </span>
  );
}
