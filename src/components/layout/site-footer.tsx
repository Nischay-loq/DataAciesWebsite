import Link from "next/link";
import { siteConfig } from "@/config/site";
import { footerNavigation } from "@/config/navigation";
import { Container } from "@/components/layout/container";
import { Separator } from "@/components/ui/separator";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200 bg-white">
      <Container className="section-padding pb-8 pt-16">
        <div className="grid gap-12 md:grid-cols-4">
          <div>
            <Link
              href="/"
              className="font-heading text-lg font-semibold tracking-tight text-slate-950"
            >
              {siteConfig.name}
            </Link>
            <p className="mt-4 max-w-xs text-body-sm text-slate-600">
              {siteConfig.tagline}
            </p>
          </div>

          {Object.entries(footerNavigation).map(([group, links]) => (
            <div key={group}>
              <h3 className="text-caption uppercase text-slate-500">{group}</h3>
              <ul className="mt-4 space-y-3">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-body-sm text-slate-600 transition-colors hover:text-primary"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <Separator className="my-8 bg-slate-200" />

        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-body-sm text-slate-500">
            © {year} {siteConfig.name}. All rights reserved.
          </p>
          <p className="text-body-sm text-slate-500">{siteConfig.contact.email}</p>
        </div>
      </Container>
    </footer>
  );
}
