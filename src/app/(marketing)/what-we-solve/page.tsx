import type { Metadata } from "next";
import { WhatWeSolveSection } from "@/components/features/solve/WhatWeSolveSection";

export const metadata: Metadata = {
  title: "What We Solve",
  description:
    "See the operational challenges, business bottlenecks, and transformation opportunities Data Acies focuses on.",
};

export default function WhatWeSolvePage() {
  return <WhatWeSolveSection />;
}
