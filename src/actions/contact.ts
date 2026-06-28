"use server";

import { contactFormSchema } from "@/lib/validators/contact";
import type { ContactFormSchema } from "@/lib/validators/contact";

type ActionResult = {
  success: boolean;
  message: string;
};

export async function submitContactForm(
  data: ContactFormSchema,
): Promise<ActionResult> {
  const parsed = contactFormSchema.safeParse(data);

  if (!parsed.success) {
    return {
      success: false,
      message: "Invalid form data. Please check your inputs.",
    };
  }

  // Future: integrate with CRM, email service, or database
  console.info("Server action: contact form received", parsed.data);

  return {
    success: true,
    message: "Thank you! We'll be in touch within 24 hours.",
  };
}
