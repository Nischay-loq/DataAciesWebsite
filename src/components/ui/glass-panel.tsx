import { cn } from "@/lib/utils";
import React from "react";

interface GlassPanelProps extends React.HTMLAttributes<HTMLDivElement> {
  blur?: "sm" | "md" | "lg" | "xl";
  border?: boolean;
  glow?: boolean;
}

export function GlassPanel({
  className,
  blur = "md",
  border = true,
  glow = false,
  children,
  ...props
}: GlassPanelProps) {
  const blurClasses = {
    sm: "backdrop-blur-sm",
    md: "backdrop-blur-md",
    lg: "backdrop-blur-lg",
    xl: "backdrop-blur-xl",
  };

  return (
    <div
      className={cn(
        "rounded-lg bg-white/5 transition-all duration-300",
        blurClasses[blur],
        border && "border border-white/10 hover:border-white/20",
        glow && "shadow-glow-sm hover:shadow-glow-md",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
