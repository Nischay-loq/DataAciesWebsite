import type { Metadata } from "next";
import { HeroSection } from "@/components/sections/hero-section";
import { TechnologyAssistanceSection } from "@/components/sections/technology-assistance-section";
import { WhyChooseUsSection } from "@/components/sections/why-choose-us-section";

export const metadata: Metadata = {
  title: "Home",
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TechnologyAssistanceSection />
      <WhyChooseUsSection />
    </>
  );
}
