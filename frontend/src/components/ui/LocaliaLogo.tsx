"use client";

import { cn } from "@/lib/utils";

const LOCALIA_GREEN = "#1B4332";
const LOCALIA_GREEN_ON_DARK = "#74c69d";

type LocaliaLogoProps = {
  /** Tamaño del icono (cuadrado) */
  size?: number;
  className?: string;
  /** Solo el símbolo, sin texto */
  iconOnly?: boolean;
  /** En fondos oscuros: usa verde claro para mejor contraste */
  onDark?: boolean;
};

/**
 * Logo Localia: ciclo cerrado, seguridad, IA, datos.
 * Un solo color, simétrico, reconocible.
 * - Anillo: ciclo cerrado / datos que no salen
 * - Nodo central: IA / núcleo de conocimiento
 */
export function LocaliaLogo({ size = 32, className, iconOnly = false, onDark = false }: LocaliaLogoProps) {
  const s = size;
  const stroke = Math.max(1.5, size / 18);
  const viewBox = "0 0 64 64";
  const cx = 32;
  const cy = 32;
  const R = 24;
  const r = 7;
  const color = onDark ? LOCALIA_GREEN_ON_DARK : LOCALIA_GREEN;

  return (
    <span className={cn("inline-flex items-center gap-2", className)}>
      <svg
        width={s}
        height={s}
        viewBox={viewBox}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden
        className="shrink-0"
      >
        <circle cx={cx} cy={cy} r={R} stroke={color} strokeWidth={stroke} fill="none" />
        <circle cx={cx} cy={cy} r={r} fill={color} />
      </svg>
      {!iconOnly && (
        <span
          className="font-semibold uppercase tracking-tight text-[length:var(--logo-text-size,1em)]"
          style={{ color }}
        >
          LOCALIA
        </span>
      )}
    </span>
  );
}
