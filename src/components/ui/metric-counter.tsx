"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface MetricCounterProps {
  label: string;
  value: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  className?: string;
}

export function MetricCounter({
  label,
  value,
  suffix = "",
  prefix = "",
  duration = 2000,
  className,
}: MetricCounterProps) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const steps = 60;
    const stepValue = value / steps;
    const stepDuration = duration / steps;
    let current = 0;

    const interval = setInterval(() => {
      current += stepValue;
      if (current >= value) {
        setCount(value);
        clearInterval(interval);
      } else {
        setCount(Math.floor(current));
      }
    }, stepDuration);

    return () => clearInterval(interval);
  }, [value, duration]);

  return (
    <div className={cn("space-y-2 text-center", className)}>
      <div className="text-display-lg font-bold text-brand-400">
        {prefix}
        {count}
        {suffix}
      </div>
      <p className="text-body-sm text-muted-foreground">{label}</p>
    </div>
  );
}
