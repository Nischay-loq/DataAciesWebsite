export const ROUTES = {
  home: "/",
  services: "/services",
  solutions: "/solutions",
  caseStudies: "/case-studies",
  about: "/about",
  contact: "/contact",
  blog: "/blog",
  docs: "/docs",
} as const;

export type RouteKey = keyof typeof ROUTES;
