import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  inverse?: boolean;
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  inverse = false,
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        inverse ? "text-white" : "text-ink",
        className,
      )}
    >
      <p className={cn("eyebrow mb-3.5", inverse ? "text-blue-300" : "text-cobalt")}>{eyebrow}</p>
      <h2 className="display-type text-5xl leading-[0.94] sm:text-6xl lg:text-7xl">{title}</h2>
      {description ? (
        <p className={cn("mt-4.5 max-w-2xl text-base leading-8 sm:text-lg", inverse ? "text-white/65" : "text-ink/65")}>{description}</p>
      ) : null}
    </div>
  );
}
