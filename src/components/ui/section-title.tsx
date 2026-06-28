import { cn } from "@/lib/utils";
import React from "react";

interface SectionTitleProps extends React.HTMLAttributes<HTMLDivElement> {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
}

export function SectionTitle({
  eyebrow,
  title,
  subtitle,
  centered = true,
  className,
  ...props
}: SectionTitleProps) {
  return (
    <div
      className={cn("space-y-4", centered && "text-center", className)}
      {...props}
    >
      {eyebrow && (
        <div className="inline-block rounded-full bg-primary/10 px-3 py-1">
          <span className="text-caption uppercase tracking-wider text-primary">
            {eyebrow}
          </span>
        </div>
      )}
      <h2 className="text-display-md">{title}</h2>
      {subtitle && (
        <p className="text-body-lg text-muted-foreground max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
}
