"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "@/hooks/use-animations";

interface AnimatedCounterProps {
  from?: number;
  to: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
  className?: string;
  variant?: "default" | "large" | "small";
}

/**
 * AnimatedCounter smoothly animates a number from start to end
 * Triggers animation when element enters viewport
 * Perfect for metrics, stats, testimonials, etc.
 *
 * @example
 * <AnimatedCounter to={1000} suffix="+" />
 */
export function AnimatedCounter({
  from = 0,
  to,
  duration = 2,
  suffix = "",
  prefix = "",
  className,
  variant = "default",
}: AnimatedCounterProps) {
  const { ref, isVisible } = useInView();
  const [count, setCount] = useState(from);

  useEffect(() => {
    if (!isVisible) return;

    const steps = 60;
    const stepValue = (to - from) / steps;
    const stepDuration = (duration * 1000) / steps;
    let current = from;

    const interval = setInterval(() => {
      current += stepValue;
      if (current >= to) {
        setCount(to);
        clearInterval(interval);
      } else {
        setCount(Math.floor(current));
      }
    }, stepDuration);

    return () => clearInterval(interval);
  }, [isVisible, from, to, duration]);

  const sizeClasses = {
    small: "text-body-lg",
    default: "text-display-md",
    large: "text-display-xl",
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
      className={className}
    >
      <div className={`font-bold text-brand-400 ${sizeClasses[variant]}`}>
        {prefix}
        {count}
        {suffix}
      </div>
    </motion.div>
  );
}
