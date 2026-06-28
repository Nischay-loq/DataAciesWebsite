"use client";

import React from "react";
import { motion } from "framer-motion";
import { floating, floatingDelay } from "@/lib/animations";

interface FloatingProps {
  children: React.ReactNode;
  className?: string;
  delay?: boolean;
}

/**
 * Floating wrapper adds a subtle levitation animation to any component
 * Great for hero illustrations, cards, or emphasis elements
 *
 * @example
 * <Floating>
 *   <img src="illustration.svg" />
 * </Floating>
 */
export function Floating({ children, className, delay = false }: FloatingProps) {
  const variant = delay ? floatingDelay : floating;

  return (
    <motion.div
      animate="animate"
      variants={variant}
      className={className}
    >
      {children}
    </motion.div>
  );
}
