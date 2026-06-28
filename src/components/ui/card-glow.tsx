import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import React from "react";

const glowCardVariants = cva(
  "relative overflow-hidden rounded-lg border transition-all duration-300",
  {
    variants: {
      variant: {
        default:
          "bg-card/80 border-border/60 hover:border-primary/40 hover:shadow-glow-sm",
        ghost:
          "bg-transparent border-border/40 hover:border-primary/60 hover:bg-primary/5",
        elevated:
          "bg-brand-surface border-brand-500/30 shadow-lg hover:shadow-glow-md hover:border-brand-400",
        floating:
          "bg-brand-surface/50 border-brand-500/20 shadow-glow-sm hover:shadow-glow-lg backdrop-blur-md",
      },
      size: {
        sm: "p-4",
        md: "p-6",
        lg: "p-8",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
    },
  }
);

interface GlowCardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof glowCardVariants> {}

export function GlowCard({
  className,
  variant,
  size,
  children,
  ...props
}: GlowCardProps) {
  return (
    <div className={cn(glowCardVariants({ variant, size, className }))} {...props}>
      {/* Glow background effect */}
      <div className="absolute -inset-px -z-10 rounded-lg bg-gradient-brand opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-20" />
      {children}
    </div>
  );
}
