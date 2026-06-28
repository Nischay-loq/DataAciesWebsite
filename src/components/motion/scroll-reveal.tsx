"use client";

import React from "react";
import { motion } from "framer-motion";
import { useInView } from "@/hooks/use-animations";
import { scrollReveal } from "@/lib/animations";

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

/**
 * ScrollReveal component wraps content to animate when it enters viewport
 * Great for hero sections, feature cards, testimonials, etc.
 *
 * @example
 * <ScrollReveal>
 *   <h2>This will fade in and slide up</h2>
 * </ScrollReveal>
 */
export function ScrollReveal({
  children,
  className,
  delay = 0,
}: ScrollRevealProps) {
  const { ref, isVisible } = useInView();

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
      variants={scrollReveal}
      transition={{ delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
