import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import React from "react";

const featureCardVariants = cva(
  "group relative rounded-lg border transition-all duration-300",
  {
    variants: {
      variant: {
        default: "bg-card/50 border-border/60 hover:border-primary/40",
        highlighted: "bg-brand-surface/30 border-brand-500/30 hover:border-brand-400",
        minimal: "bg-transparent border-0 hover:bg-primary/5",
      },
      layout: {
        default: "p-6",
        compact: "p-4",
        spacious: "p-8",
      },
    },
    defaultVariants: {
      variant: "default",
      layout: "default",
    },
  }
);

interface FeatureCardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof featureCardVariants> {
  icon?: React.ReactNode;
  title: string;
  description: string;
}

export function FeatureCard({
  className,
  variant,
  layout,
  icon,
  title,
  description,
  ...props
}: FeatureCardProps) {
  return (
    <div className={cn(featureCardVariants({ variant, layout }), className)} {...props}>
      {icon && (
        <div className="mb-4 inline-flex rounded-lg bg-primary/10 p-2 text-primary">
          {icon}
        </div>
      )}
      <h3 className="text-heading-sm font-semibold">{title}</h3>
      <p className="mt-2 text-body-sm text-muted-foreground">{description}</p>
    </div>
  );
}
