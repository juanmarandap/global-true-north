import type { TargetAndTransition, Variants } from "framer-motion";

export function makeFadeUp(duration = 0.6, baseDelay = 0, step = 0.12): Variants {
  return {
    hidden: { opacity: 0, y: 40 },
    visible: (i: number): TargetAndTransition => ({
      opacity: 1,
      y: 0,
      transition: {
        duration,
        delay: baseDelay + i * step,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    }),
  };
}

export const fadeUp = makeFadeUp();
