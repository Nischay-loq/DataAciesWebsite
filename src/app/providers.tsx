"use client";

import React, { useEffect, useState } from "react";
import { MotionConfig } from "motion/react";

type Props = { children: React.ReactNode };

export default function Providers({ children }: Props) {
  const [theme, setTheme] = useState<"dark" | "light">(() => {
    try {
      const stored = typeof window !== "undefined" && localStorage.getItem("theme");
      if (stored === "light" || stored === "dark") return stored;
      return window.matchMedia && window.matchMedia("(prefers-color-scheme: light)").matches
        ? "light"
        : "dark";
    } catch {
      return "dark";
    }
  });

  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle("dark", theme === "dark");
    try {
      localStorage.setItem("theme", theme);
    } catch {}
  }, [theme]);

  useEffect(() => {
    const mq = window.matchMedia?.("(prefers-color-scheme: dark)");
    function onChange(e: MediaQueryListEvent) {
      setTheme(e.matches ? "dark" : "light");
    }
    try {
      mq?.addEventListener?.("change", onChange);
      return () => mq?.removeEventListener?.("change", onChange);
    } catch {
      // fallback for older browsers
      mq?.addListener?.(onChange as any);
      return () => mq?.removeListener?.(onChange as any);
    }
  }, []);

  return (
    <MotionConfig reducedMotion="user">
      {children}
      <div style={{ display: "none" }} aria-hidden>
        {/* Accessibility helper: ensure focus styles are available when JS runs */}
      </div>
    </MotionConfig>
  );
}
