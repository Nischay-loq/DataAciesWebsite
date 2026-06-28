import { cn } from "@/lib/utils";

export function AnimatedGrid() {
  return (
    <div
      className={cn(
        "absolute inset-0 -z-10 size-full",
        "bg-[linear-gradient(to_right,theme(colors.border/20%)_1px,transparent_1px),linear-gradient(to_bottom,theme(colors.border/20%)_1px,transparent_1px)]",
        "bg-[size:1.5rem_1.5rem]",
        "[mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]",
      )}
    />
  );
}
