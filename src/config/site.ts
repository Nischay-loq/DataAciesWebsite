export const siteConfig = {
  name: "Data Acies",
  tagline: "Intelligent AI & Data Consulting",
  description:
    "Enterprise-grade AI strategy, data engineering, and machine learning solutions for forward-thinking organizations.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://dataacies.com",
  ogImage: "/og-image.png",
  footerTagline: "Engineering Intelligent Business Solutions.",
  links: {
    linkedin: "https://linkedin.com/company/data-acies",
    github: "https://github.com/data-acies",
    twitter: "https://twitter.com/dataacies",
    youtube: "https://youtube.com/@dataacies",
  },
  contact: {
    email: "support@dataacies.com",
    phone: process.env.NEXT_PUBLIC_BUSINESS_PHONE ?? "Available on request",
    address:
      process.env.NEXT_PUBLIC_OFFICE_ADDRESS ??
      "India - Serving enterprise clients globally",
    location: "India · Global delivery",
    officeHours: "09:00 AM – 06:00 PM IST",
    timeZone: "Asia/Kolkata",
  },
} as const;

export type SiteConfig = typeof siteConfig;
