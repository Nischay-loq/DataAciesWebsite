import type { Metadata } from "next";
import { AboutPage } from "@/components/features/about/AboutPage";

export const metadata: Metadata = {
  title: "About",
  description:
    "Discover the Data Acies journey, mission, vision, values, global presence, and AI-first enterprise transformation mindset.",
};

export default function Page() {
  return <AboutPage />;
}
