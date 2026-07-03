export const ROUTES = {
  home: "/",
  services: "/services",
  solutions: "/solutions",
  products: "/solutions#products-section",
  industries: "/solutions#industries",
  caseStudies: "/case-studies",
  about: "/about",
  contact: "/contact",
  blog: "/blog",
  docs: "/docs",
  privacy: "/privacy",
  terms: "/terms",
} as const;

export type RouteKey = keyof typeof ROUTES;
