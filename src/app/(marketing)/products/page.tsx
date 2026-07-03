import type { Metadata } from "next";
import { ProductsSection } from "@/components/features/products/products-section";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Explore Data Acies enterprise platforms for service operations and test data generation.",
};

export default function ProductsPage() {
  return <ProductsSection />;
}
