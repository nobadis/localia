/**
 * Variantes de animación reutilizables (framer-motion).
 * hidden usa opacity: 1 para que el texto sea visible sin JS o antes de la animación.
 */
export const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
} as const;

export const fadeUp = {
  hidden: { opacity: 1, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  },
} as const;

export const scaleIn = {
  hidden: { opacity: 1, scale: 0.97 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
  },
} as const;
