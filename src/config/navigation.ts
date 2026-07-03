import { ROUTES } from "@/constants/routes";

export type NavItem = {
  label: string;
  href: string;
  external?: boolean;
};

export const mainNavigation: NavItem[] = [
  { label: "Services", href: ROUTES.services },
  { label: "Products", href: ROUTES.products },
  { label: "What We Solve", href: ROUTES.whatWeSolve },
  { label: "Solutions", href: ROUTES.solutions },
  { label: "Case Studies", href: ROUTES.caseStudies },
  { label: "About", href: ROUTES.about },
  { label: "Contact", href: ROUTES.contact },
];

export const footerNavigation = {
  company: [
    { label: "About", href: ROUTES.about },
    { label: "Case Studies", href: ROUTES.caseStudies },
    { label: "Contact", href: ROUTES.contact },
  ],
  services: [
    { label: "AI Strategy", href: ROUTES.services },
    { label: "Data Engineering", href: ROUTES.products },
    { label: "ML Operations", href: ROUTES.whatWeSolve },
  ],
  resources: [
    { label: "Blog", href: ROUTES.blog },
    { label: "Documentation", href: ROUTES.docs },
  ],
} as const satisfies Record<string, NavItem[]>;
