import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Package, Puzzle } from "lucide-react";
import { Container } from "@/components/layout/container";
import { buttonVariants } from "@/components/ui/button";
import { ROUTES } from "@/constants/routes";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Solutions",
  description:
    "Explore Data Acies products and the business problems they solve through separate, dedicated pages.",
};

export default function SolutionsPage() {
  return (
    <section className="bg-white py-20 sm:py-24 lg:py-28">
      <Container size="wide">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-primary">Solutions</p>
          <h1 className="mt-4 font-heading text-4xl font-semibold tracking-[-0.035em] text-slate-950 sm:text-5xl">
            Explore the products and problems separately
          </h1>
          <p className="mt-5 text-lg leading-8 text-slate-600">
            The product portfolio and the problem-framing page now live on their own routes so each story stays focused.
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          <InfoCard
            icon={Package}
            title="Products"
            text="Browse the enterprise platforms Data Acies builds for service operations and test data generation."
            href={ROUTES.products}
            cta="Open Products"
          />
          <InfoCard
            icon={Puzzle}
            title="What We Solve"
            text="See the operational challenges, business bottlenecks, and transformation opportunities we focus on."
            href={ROUTES.whatWeSolve}
            cta="Open What We Solve"
          />
        </div>

        <div className="mt-14 rounded-[2rem] bg-slate-950 p-8 text-white lg:p-10">
          <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <h2 className="font-heading text-3xl font-semibold">Need help choosing where to start?</h2>
              <p className="mt-3 max-w-2xl text-slate-300">
                If you want to discuss a specific use case, reach out and we can point you to the right page or the right team.
              </p>
            </div>
            <Link href={`${ROUTES.contact}#contact-section`} className={cn(buttonVariants(), "rounded-full bg-white px-6 text-slate-950 hover:bg-slate-100")}> 
              Book a Consultation
              <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}

function InfoCard({
  icon: Icon,
  title,
  text,
  href,
  cta,
}: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  text: string;
  href: string;
  cta: string;
}) {
  return (
    <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-7 shadow-sm">
      <div className="flex size-12 items-center justify-center rounded-2xl bg-blue-50 text-primary">
        <Icon className="size-6" />
      </div>
      <h2 className="mt-6 font-heading text-3xl font-semibold tracking-[-0.025em] text-slate-950">{title}</h2>
      <p className="mt-3 text-base leading-7 text-slate-600">{text}</p>
      <Link href={href} className={cn(buttonVariants({ variant: "outline" }), "mt-6 rounded-full border-slate-300 bg-white px-5 text-slate-800")}> 
        {cta}
      </Link>
    </div>
  );
}
