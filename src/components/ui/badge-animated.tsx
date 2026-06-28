import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import React from "react";

const badgeVariants = cva(
  "inline-flex items-center rounded-full transition-all duration-200",
  {
    variants: {
      variant: {
        default: "bg-primary/10 text-primary hover:bg-primary/20",
        secondary: "bg-secondary/10 text-secondary hover:bg-secondary/20",
        outline: "border border-primary/30 text-primary hover:border-primary/60",
        glow: "bg-brand-500/10 text-brand-300 shadow-glow-sm hover:shadow-glow-md",
      },
      size: {
        sm: "px-2.5 py-1 text-caption",
        md: "px-3 py-1.5 text-body-sm",
        lg: "px-4 py-2 text-body-md",
      },
      animated: {
        true: "animate-pulse",
        false: "",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
      animated: false,
    },
  }
);

interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

export function Badge({
  className,
  variant,
  size,
  animated,
  children,
  ...props
}: BadgeProps) {
  return (
    <div
      className={cn(badgeVariants({ variant, size, animated }), className)}
      {...props}
    >
      {children}
    </div>
  );
}
