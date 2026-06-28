import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

type ProductFeatureListProps = {
  features: readonly string[];
  columns?: 1 | 2;
  compact?: boolean;
};

export function ProductFeatureList({
  features,
  columns = 2,
  compact = false,
}: ProductFeatureListProps) {
  return (
    <ul
      className={cn(
        "grid gap-x-5 gap-y-3",
        columns === 2 && "sm:grid-cols-2",
      )}
    >
      {features.map((feature) => (
        <li
          key={feature}
          className={cn(
            "flex items-start gap-2.5 text-muted-foreground",
            compact ? "text-xs" : "text-sm",
          )}
        >
          <span className="mt-0.5 flex size-4 shrink-0 items-center justify-center rounded-full bg-primary/12 text-primary">
            <Check className="size-2.5" strokeWidth={2.5} aria-hidden />
          </span>
          <span>{feature}</span>
        </li>
      ))}
    </ul>
  );
}
