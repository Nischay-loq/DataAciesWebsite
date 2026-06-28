"use client";

import { useState } from "react";
import Link from "next/link";
import { useForm, useWatch } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { AnimatePresence, motion } from "motion/react";
import { ArrowLeft, Check, LoaderCircle, Send } from "lucide-react";
import {
  areasOfInterest,
  consultationMethods,
  contactFormSchema,
  projectScales,
  projectTimelines,
  type ContactFormSchema,
} from "@/lib/validators/contact";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const inputClass =
  "peer h-12 rounded-xl border-slate-300 bg-white px-4 pt-4 text-sm text-slate-950 placeholder:text-transparent hover:border-slate-400 focus-visible:border-primary focus-visible:ring-primary/15";

type FieldShellProps = {
  id: keyof ContactFormSchema;
  label: string;
  error?: string;
  children: React.ReactNode;
  className?: string;
};

function FieldShell({ id, label, error, children, className }: FieldShellProps) {
  return (
    <div className={cn("space-y-1.5", className)}>
      <div className="relative">
        {children}
        <label
          htmlFor={id}
          className="pointer-events-none absolute left-4 top-2 text-[0.625rem] font-medium uppercase tracking-[0.12em] text-muted-foreground transition-colors peer-focus:text-primary"
        >
          {label}
        </label>
      </div>
      {error && (
        <p id={`${id}-error`} className="text-xs text-destructive" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}

type SelectFieldProps = {
  id: "areaOfInterest" | "projectScale" | "consultationMethod" | "expectedTimeline";
  label: string;
  options: readonly string[];
  error?: string;
  register: ReturnType<typeof useForm<ContactFormSchema>>["register"];
};

function SelectField({ id, label, options, error, register }: SelectFieldProps) {
  return (
    <FieldShell id={id} label={label} error={error}>
      <select
        id={id}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${id}-error` : undefined}
        className={cn(
          inputClass,
          "w-full appearance-none pb-1.5 outline-none focus-visible:ring-3",
          error && "border-destructive/60",
        )}
        defaultValue=""
        {...register(id)}
      >
        <option value="" disabled className="bg-background">
          Select an option
        </option>
        {options.map((option) => (
          <option key={option} value={option} className="bg-background">
            {option}
          </option>
        ))}
      </select>
      <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground">
        ▾
      </span>
    </FieldShell>
  );
}

const defaultValues: ContactFormSchema = {
  fullName: "",
  companyName: "",
  businessEmail: "",
  phoneNumber: "",
  country: "",
  areaOfInterest: "",
  projectScale: "",
  consultationMethod: "",
  expectedTimeline: "",
  projectDescription: "",
};

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const form = useForm<ContactFormSchema>({
    resolver: zodResolver(contactFormSchema),
    defaultValues,
  });
  const description = useWatch({
    control: form.control,
    name: "projectDescription",
  });
  const { errors, isSubmitting } = form.formState;

  async function onSubmit(data: ContactFormSchema) {
    setStatus("idle");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const body = await response.json().catch(() => null);
        throw new Error(body?.message ?? "We could not submit your request.");
      }

      form.reset(defaultValues);
      setStatus("success");
    } catch (error) {
      setErrorMessage(
        error instanceof Error ? error.message : "Please try again in a moment.",
      );
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex min-h-[560px] flex-col items-center justify-center px-6 py-16 text-center"
        role="status"
      >
        <div className="flex size-16 items-center justify-center rounded-full border border-emerald-400/30 bg-emerald-400/10 text-emerald-300 shadow-[0_0_40px_rgba(52,211,153,0.15)]">
          <Check className="size-7" aria-hidden />
        </div>
        <p className="mt-7 font-heading text-2xl font-semibold">
          Thank you for reaching out.
        </p>
        <p className="mt-3 max-w-md font-support leading-relaxed text-muted-foreground">
          Our team will review your requirements and contact you within 24 hours.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Button
            type="button"
            size="lg"
            className="h-11 px-5"
            onClick={() => setStatus("idle")}
          >
            Submit Another Request
          </Button>
          <Link
            href="/"
            className="inline-flex h-11 items-center justify-center gap-2 rounded-lg border border-border bg-background px-5 text-sm font-medium transition-colors hover:bg-muted"
          >
            <ArrowLeft className="size-4" aria-hidden />
            Return to Homepage
          </Link>
        </div>
      </motion.div>
    );
  }

  return (
    <form
      id="consultation-form"
      onSubmit={form.handleSubmit(onSubmit)}
      className="p-5 sm:p-8 lg:p-9"
      noValidate
    >
      <div className="border-b border-slate-200 pb-7">
        <p className="font-heading text-2xl font-semibold tracking-tight sm:text-3xl">
          Book a Consultation
        </p>
        <p className="mt-3 font-support text-sm leading-relaxed text-muted-foreground">
          Tell us about your goals and challenges. Our team will review your
          requirements and reach out with tailored recommendations.
        </p>
      </div>

      <div className="mt-7 grid gap-5 sm:grid-cols-2">
        <FieldShell id="fullName" label="Full Name" error={errors.fullName?.message}>
          <Input
            id="fullName"
            autoComplete="name"
            placeholder="Full Name"
            aria-invalid={Boolean(errors.fullName)}
            aria-describedby={errors.fullName ? "fullName-error" : undefined}
            className={inputClass}
            {...form.register("fullName")}
          />
        </FieldShell>
        <FieldShell
          id="companyName"
          label="Company Name"
          error={errors.companyName?.message}
        >
          <Input
            id="companyName"
            autoComplete="organization"
            placeholder="Company Name"
            aria-invalid={Boolean(errors.companyName)}
            aria-describedby={errors.companyName ? "companyName-error" : undefined}
            className={inputClass}
            {...form.register("companyName")}
          />
        </FieldShell>
        <FieldShell
          id="businessEmail"
          label="Business Email"
          error={errors.businessEmail?.message}
        >
          <Input
            id="businessEmail"
            type="email"
            autoComplete="email"
            placeholder="Business Email"
            aria-invalid={Boolean(errors.businessEmail)}
            aria-describedby={errors.businessEmail ? "businessEmail-error" : undefined}
            className={inputClass}
            {...form.register("businessEmail")}
          />
        </FieldShell>
        <FieldShell
          id="phoneNumber"
          label="Phone Number"
          error={errors.phoneNumber?.message}
        >
          <Input
            id="phoneNumber"
            type="tel"
            autoComplete="tel"
            placeholder="Phone Number"
            aria-invalid={Boolean(errors.phoneNumber)}
            aria-describedby={errors.phoneNumber ? "phoneNumber-error" : undefined}
            className={inputClass}
            {...form.register("phoneNumber")}
          />
        </FieldShell>
        <FieldShell id="country" label="Country" error={errors.country?.message}>
          <Input
            id="country"
            autoComplete="country-name"
            placeholder="Country"
            aria-invalid={Boolean(errors.country)}
            aria-describedby={errors.country ? "country-error" : undefined}
            className={inputClass}
            {...form.register("country")}
          />
        </FieldShell>
        <SelectField
          id="areaOfInterest"
          label="Area of Interest"
          options={areasOfInterest}
          error={errors.areaOfInterest?.message}
          register={form.register}
        />
        <SelectField
          id="projectScale"
          label="Project Scale"
          options={projectScales}
          error={errors.projectScale?.message}
          register={form.register}
        />
        <SelectField
          id="consultationMethod"
          label="Preferred Consultation Method"
          options={consultationMethods}
          error={errors.consultationMethod?.message}
          register={form.register}
        />
        <SelectField
          id="expectedTimeline"
          label="Expected Timeline"
          options={projectTimelines}
          error={errors.expectedTimeline?.message}
          register={form.register}
        />
        <FieldShell
          id="projectDescription"
          label="Project Description"
          error={errors.projectDescription?.message}
          className="sm:col-span-2"
        >
          <Textarea
            id="projectDescription"
            maxLength={1000}
            rows={6}
            placeholder="Describe your business challenge, objectives, existing systems, and expected outcomes."
            aria-invalid={Boolean(errors.projectDescription)}
            aria-describedby={
              errors.projectDescription
                ? "projectDescription-error projectDescription-count"
                : "projectDescription-count"
            }
            className="peer min-h-36 resize-none rounded-xl border-slate-300 bg-white px-4 pb-8 pt-7 text-sm leading-relaxed text-slate-950 placeholder:text-muted-foreground/55 hover:border-slate-400 focus-visible:border-primary focus-visible:ring-primary/15"
            onInput={(event) => {
              event.currentTarget.style.height = "auto";
              event.currentTarget.style.height = `${event.currentTarget.scrollHeight}px`;
            }}
            {...form.register("projectDescription")}
          />
          <span
            id="projectDescription-count"
            className="absolute bottom-3 right-4 text-xs tabular-nums text-muted-foreground"
          >
            {description.length}/1000
          </span>
        </FieldShell>
      </div>

      <AnimatePresence>
        {status === "error" && (
          <motion.p
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="mt-5 rounded-lg border border-destructive/25 bg-destructive/10 px-4 py-3 text-sm text-destructive"
            role="alert"
          >
            {errorMessage}
          </motion.p>
        )}
      </AnimatePresence>

      <Button
        type="submit"
        size="lg"
        disabled={isSubmitting}
        className="mt-7 h-12 w-full rounded-full bg-primary px-6 text-white shadow-sm transition-all hover:-translate-y-0.5 hover:bg-primary/90 hover:shadow-md"
      >
        {isSubmitting ? (
          <>
            <LoaderCircle className="size-4 animate-spin" aria-hidden />
            Submitting Request…
          </>
        ) : (
          <>
            Request Consultation
            <Send className="size-4" aria-hidden />
          </>
        )}
      </Button>
      <p className="mt-3 text-center text-xs leading-relaxed text-muted-foreground">
        Your information is reviewed confidentially by our consultation team.
      </p>
    </form>
  );
}
