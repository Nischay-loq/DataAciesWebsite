import { cn } from "@/lib/utils";

export function AICore() {
  return (
    <div className="relative mx-auto mb-12 mt-[-4rem] flex h-64 w-full max-w-md items-center justify-center">
      <div
        className={cn(
          "absolute inset-0 z-0 rounded-full bg-brand-500/20 blur-3xl",
          "animate-pulse",
        )}
        style={{ animationDuration: "4s" }}
      />
      <div className="relative z-10 flex h-32 w-32 items-center justify-center rounded-full bg-brand-surface shadow-lg">
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-brand-400/50 to-brand-600/50 opacity-70" />
        <div className="relative h-16 w-16 rounded-full bg-brand-500 shadow-glow-md" />
      </div>
    </div>
  );
}
