import type { Metadata } from "next";
import { ServicesSection } from "@/components/sections/services-section";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Discover Data Acies data services, including strategy, cloud transformation, integration, management, analysis, visualization, and security.",
};

export default function ServicesPage() {
  return <ServicesSection />;
}