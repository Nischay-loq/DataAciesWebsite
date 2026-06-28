"use client";

import React from "react";
import { motion } from "framer-motion";
import { useInView } from "@/hooks/use-animations";
import { staggerContainer, staggerContainerSlower } from "@/lib/animations";

interface StaggerContainerProps {
  children: React.ReactNode;
  className?: string;
  slower?: boolean;
  delayChildren?: number;
}

/**
 * StaggerContainer orchestrates staggered animations for child elements
 * Pairs with motion.div children that have animate/hidden states
 *
 * @example
 * <StaggerContainer>
 *   <motion.div variants={staggerItem}>Item 1</motion.div>
 *   <motion.div variants={staggerItem}>Item 2</motion.div>
 *   <motion.div variants={staggerItem}>Item 3</motion.div>
 * </StaggerContainer>
 */
export function StaggerContainer({
  children,
  className,
  slower = false,
  delayChildren,
}: StaggerContainerProps) {
  const { ref, isVisible } = useInView();
  const variants = slower ? staggerContainerSlower : staggerContainer;

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
      variants={{
        ...variants,
        visible: {
          ...variants.visible,
          transition: {
            ...(variants.visible as any).transition,
            delayChildren: delayChildren ?? (variants.visible as any).transition?.delayChildren,
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
