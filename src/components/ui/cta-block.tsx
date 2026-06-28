import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import React from "react";
import { Button } from "./button";
import Link from "next/link";

const ctaBlockVariants = cva("rounded-lg border transition-all duration-300", {
  variants: {
    variant: {
      default: "bg-card/50 border-border/60",
      gradient:
        "bg-gradient-to-r from-brand-surface to-brand-surface/50 border-brand-500/30",
      elevated:
        "bg-brand-surface border-brand-500/40 shadow-lg hover:shadow-glow-lg",
    },
    size: {
      sm: "p-6",
      md: "p-8",
      lg: "p-12",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "md",
  },
});

interface CTABlockProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof ctaBlockVariants> {
  title: string;
  description?: string;
  primaryButton?: {
    label: string;
    href: string;
  };
  secondaryButton?: {
    label: string;
    href: string;
  };
  icon?: React.ReactNode;
}

export function CTABlock({
  className,
  variant,
  size,
  title,
  description,
  primaryButton,
  secondaryButton,
  icon,
  ...props
}: CTABlockProps) {
  return (
    <div
      className={cn(ctaBlockVariants({ variant, size }), className)}
      {...props}
    >
      <div className="flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
        <div>
          {icon && <div className="mb-4 inline-block text-primary">{icon}</div>}
          <h3 className="text-heading-lg">{title}</h3>
          {description && (
            <p className="mt-2 text-body-md text-muted-foreground">
              {description}
            </p>
          )}
        </div>
        <div className="flex gap-3">
          {primaryButton && (
            <Link href={primaryButton.href}>
              <Button>{primaryButton.label}</Button>
            </Link>
          )}
          {secondaryButton && (
            <Link href={secondaryButton.href}>
              <Button variant="outline">{secondaryButton.label}</Button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
