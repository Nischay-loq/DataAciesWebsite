import { cn } from "@/lib/utils";

type GradientTextProps = React.ComponentProps<"span">;

export function GradientText({ className, children, ...props }: GradientTextProps) {
  return (
    <span className={cn("text-gradient-brand", className)} {...props}>
      {children}
    </span>
  );
}
