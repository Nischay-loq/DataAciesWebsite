import { cn } from "@/lib/utils";

type GlowBorderProps = React.ComponentProps<"div"> & {
  glow?: "sm" | "md" | "lg";
};

const glowClasses = {
  sm: "shadow-glow-sm",
  md: "shadow-glow-md",
  lg: "shadow-glow-lg",
} as const;

export function GlowBorder({
  className,
  glow = "sm",
  children,
  ...props
}: GlowBorderProps) {
  return (
    <div
      className={cn(
        "rounded-xl border border-primary/20 bg-card/60 backdrop-blur-sm",
        glowClasses[glow],
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}
