import type { Metadata } from "next";
import { ProductsSection } from "@/components/features/products/products-section";
import { WhatWeSolveSection } from "@/components/features/solve/WhatWeSolveSection";

export const metadata: Metadata = {
  title: "Solutions",
  description:
    "Explore Data Acies enterprise-grade AI platforms for service management, test data generation, and intelligent operations.",
};

export default function SolutionsPage() {
  return (
    <>
      <ProductsSection />
      <WhatWeSolveSection />
    </>
  );
}
