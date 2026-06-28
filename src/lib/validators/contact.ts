import { z } from "zod";

export const areasOfInterest = [
  "Data Engineering",
  "Data Platforms",
  "Generative AI",
  "Agentic AI",
  "Intelligent Automation",
  "AI-Powered ITSM Platform",
  "Test Data Generation Platform",
  "Cloud & DevOps",
  "Managed Services",
  "Digital Transformation",
] as const;

export const projectScales = [
  "Startup",
  "Small Team",
  "Department Level",
  "Enterprise Scale",
  "Not Sure Yet",
] as const;

export const consultationMethods = [
  "Video Call",
  "Phone Call",
  "Email Discussion",
  "On-Site Meeting",
] as const;

export const projectTimelines = [
  "Immediate",
  "Within 1 Month",
  "Within 3 Months",
  "Within 6 Months",
  "Exploring Options",
] as const;

const requiredSelection = (label: string) =>
  z.string().min(1, `Please select ${label.toLowerCase()}`);

export const contactFormSchema = z.object({
  fullName: z
    .string()
    .trim()
    .min(2, "Please enter your full name")
    .max(100, "Name must be under 100 characters"),
  companyName: z
    .string()
    .trim()
    .min(2, "Please enter your company name")
    .max(120, "Company name must be under 120 characters"),
  businessEmail: z
    .string()
    .trim()
    .email("Please enter a valid business email address")
    .max(160, "Email must be under 160 characters"),
  phoneNumber: z
    .string()
    .trim()
    .min(7, "Please enter a valid phone number")
    .max(30, "Phone number must be under 30 characters")
    .regex(/^[+\d][\d\s().-]+$/, "Please enter a valid phone number"),
  country: z
    .string()
    .trim()
    .min(2, "Please enter your country")
    .max(80, "Country must be under 80 characters"),
  areaOfInterest: requiredSelection("an area of interest"),
  projectScale: requiredSelection("a project scale"),
  consultationMethod: requiredSelection("a consultation method"),
  expectedTimeline: requiredSelection("an expected timeline"),
  projectDescription: z
    .string()
    .trim()
    .min(30, "Please provide at least 30 characters about your project")
    .max(1000, "Project description must be 1000 characters or fewer"),
});

export type ContactFormSchema = z.infer<typeof contactFormSchema>;
