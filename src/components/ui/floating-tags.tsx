"use client";

import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

interface FloatingTagsProps {
  tags: string[];
  className?: string;
}

export function FloatingTags({ tags, className }: FloatingTagsProps) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <div className={cn("flex flex-wrap gap-3", className)}>
      {tags.map((tag, i) => (
        <div
          key={i}
          className="inline-flex items-center rounded-full bg-brand-500/10 px-3 py-1 text-body-sm text-brand-300 border border-brand-500/20 hover:border-brand-400 transition-all duration-200 animate-float"
          style={{
            animationDuration: `${3 + i * 0.5}s`,
            animationDelay: `${i * 0.1}s`,
          }}
        >
          {tag}
        </div>
      ))}
    </div>
  );
}
