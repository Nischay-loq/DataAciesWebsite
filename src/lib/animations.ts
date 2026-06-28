import type { Variants } from "motion/react";

/**
 * PHASE 2: Enterprise-Grade Animation Variants
 * Designed for premium AI consulting websites with performant, non-excessive animations
 */

/* ── Entrance & Reveal Animations ── */

export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

export const scrollReveal: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
  },
};

export const slideInLeft: Variants = {
  hidden: { opacity: 0, x: -32 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

export const slideInRight: Variants = {
  hidden: { opacity: 0, x: 32 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

/* ── Stagger Animations ── */

export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
};

export const staggerContainerSlower: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
  },
};

/* ── Floating & Levitation ── */

export const floating: Variants = {
  animate: {
    y: [0, -10, 0],
    transition: {
      duration: 3,
      ease: "easeInOut",
      repeat: Infinity,
    },
  },
};

export const floatingDelay: Variants = {
  animate: {
    y: [0, -12, 0],
    transition: {
      duration: 4,
      ease: "easeInOut",
      repeat: Infinity,
      delay: 0.2,
    },
  },
};

/* ── Glow & Pulse Effects ── */

export const glowPulse = {
  animate: {
    boxShadow: [
      "0 0 24px oklch(0.62 0.19 250 / 0.18)",
      "0 0 40px oklch(0.62 0.19 250 / 0.32)",
      "0 0 24px oklch(0.62 0.19 250 / 0.18)",
    ],
    transition: { duration: 3, repeat: Infinity, ease: "easeInOut" },
  },
};

export const opacityPulse: Variants = {
  animate: {
    opacity: [0.6, 1, 0.6],
    transition: {
      duration: 2.5,
      ease: "easeInOut",
      repeat: Infinity,
    },
  },
};

/* ── Hover Interactions ── */

export const hoverGlow: Variants = {
  rest: { scale: 1, opacity: 0.9 },
  hover: {
    scale: 1.05,
    opacity: 1,
    transition: { duration: 0.3, ease: "easeOut" },
  },
};

export const hoverLift: Variants = {
  rest: { y: 0 },
  hover: {
    y: -4,
    transition: { duration: 0.2, ease: "easeOut" },
  },
};

export const hoverRotate: Variants = {
  rest: { rotate: 0 },
  hover: {
    rotate: 2,
    transition: { duration: 0.2, ease: "easeOut" },
  },
};

/* ── Page Transitions ── */

export const pageEnter: Variants = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.3, ease: "easeIn" },
  },
};

/* ── Counter Animations ── */

export const counterVariant: Variants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

/* ── Loading & Transitions ── */

export const loadingSpinner: Variants = {
  animate: {
    rotate: 360,
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "linear",
    },
  },
};

export const loadingDots: Variants = {
  animate: {
    y: [0, -10, 0],
    transition: {
      duration: 1.4,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

/* ── List Animations ── */

export const listContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

export const listItem: Variants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.4,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};
