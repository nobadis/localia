"use client";

import { cn } from "@/lib/utils";

type BrandNameProps = {
  /** "LOCALIA" o "Localia" */
  variant?: "uppercase" | "capitalize";
  /** En fondos oscuros usar onDark para color claro */
  onDark?: boolean;
  className?: string;
};

export function BrandName({ variant = "uppercase", onDark, className }: BrandNameProps) {
  const text = variant === "uppercase" ? "LOCALIA" : "Localia";
  return (
    <span
      className={cn(
        onDark ? "brand-localia-on-dark" : "brand-localia",
        variant === "uppercase" && "uppercase tracking-tight",
        className
      )}
    >
      {text}
    </span>
  );
}
