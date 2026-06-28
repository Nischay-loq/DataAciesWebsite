"use client";

import { useEffect, useRef, useState } from "react";

interface UseInViewOptions {
  threshold?: number | number[];
  margin?: string;
}

/**
 * Hook to detect when an element enters the viewport
 * Useful for triggering animations, lazy loading, etc.
 */
export function useInView(options?: UseInViewOptions) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        // Unobserve after animation triggers to save performance
        observer.unobserve(entry.target);
      }
    }, {
      threshold: options?.threshold ?? 0.1,
      rootMargin: options?.margin ?? "0px",
    });

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [options?.threshold, options?.margin]);

  return { ref, isVisible };
}

/**
 * Hook for scroll-based parallax or fade effects
 */
export function useScrollProgress() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY;
      const totalScroll = documentHeight - windowHeight;
      const progress = totalScroll > 0 ? scrollTop / totalScroll : 0;
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return scrollProgress;
}

/**
 * Hook for animation state management
 */
export function useAnimationState(initialState = false) {
  const [isAnimating, setIsAnimating] = useState(initialState);

  const trigger = () => setIsAnimating(true);
  const reset = () => setIsAnimating(false);
  const toggle = () => setIsAnimating(!isAnimating);

  return {
    isAnimating,
    trigger,
    reset,
    toggle,
  };
}
