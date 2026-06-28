import type { Metadata } from "next";
import { ContactSection } from "@/components/features/contact/contact-section";

export const metadata: Metadata = {
  title: "Book a Consultation",
  description:
    "Start a focused conversation with Data Acies about AI, data engineering, automation, and enterprise software.",
};

export default function ContactPage() {
  return <ContactSection />;
}
