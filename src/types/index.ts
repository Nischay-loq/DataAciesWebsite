export type { SiteConfig } from "@/config/site";
export type { NavItem } from "@/config/navigation";

export type Service = {
  id: string;
  title: string;
  description: string;
  icon: string;
  href?: string;
};

export type CaseStudy = {
  id: string;
  slug: string;
  title: string;
  client: string;
  industry: string;
  summary: string;
  results: string[];
  featured?: boolean;
};

export type ContactFormData = {
  name: string;
  email: string;
  company?: string;
  message: string;
};
