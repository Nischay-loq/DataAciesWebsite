"use client";

import { useState } from "react";
import Link from "next/link";
import { useForm, useWatch } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { AnimatePresence, motion } from "motion/react";
import {
  ArrowLeft,
  Building2,
  Check,
  CheckCircle2,
  ChevronDown,
  Clock3,
  Globe,
  LoaderCircle,
  Lock,
  MapPin,
  Send,
  ShieldCheck,
} from "lucide-react";
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
import { siteConfig } from "@/config/site";

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
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const form = useForm<ContactFormSchema>({
    resolver: zodResolver(contactFormSchema),
    defaultValues,
    mode: "onBlur",
  });

  const formValues = useWatch({ control: form.control });
  const description = formValues.projectDescription || "";
  const { errors, isSubmitting, touchedFields } = form.formState;

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

  // Standard Form Input Component with Top Label (No Overlapping Text)
  const renderFormInput = (
    id: keyof ContactFormSchema,
    label: string,
    type: string = "text",
    autoComplete?: string,
    placeholder?: string
  ) => {
    const value = formValues[id] || "";
    const isFocused = focusedField === id;
    const hasValue = Boolean(value && value.length > 0);
    const isTouched = Boolean(touchedFields[id]);
    const error = errors[id]?.message;
    const isValid = isTouched && hasValue && !error;

    const { onBlur: formOnBlur, ...registerProps } = form.register(id);

    return (
      <div className="space-y-1.5">
        <label
          htmlFor={id}
          className="block text-sm sm:text-base font-semibold text-slate-800"
        >
          {label}
        </label>
        <div className="relative">
          <input
            id={id}
            type={type}
            placeholder={placeholder ?? `Enter ${label.toLowerCase()}...`}
            autoComplete={autoComplete}
            aria-invalid={Boolean(error)}
            aria-describedby={error ? `${id}-error` : undefined}
            onFocus={() => setFocusedField(id)}
            onBlur={(e) => {
              setFocusedField(null);
              formOnBlur(e);
            }}
            className={cn(
              "w-full rounded-xl border bg-white px-4 py-3 text-base text-slate-900 placeholder:text-slate-400 outline-none transition-all duration-200",
              error
                ? "border-rose-400 bg-rose-50/20 focus:border-rose-500 focus:ring-2 focus:ring-rose-500/20"
                : isFocused
                ? "border-blue-600 ring-2 ring-blue-500/20 shadow-[0_0_14px_rgba(37,99,235,0.14)]"
                : hasValue
                ? "border-slate-300 bg-slate-50/30"
                : "border-slate-200 hover:border-slate-300"
            )}
            {...registerProps}
          />

          {/* Validation Checkmark */}
          {isValid && (
            <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-emerald-500">
              <CheckCircle2 className="size-5" />
            </span>
          )}
        </div>
        {error && (
          <p id={`${id}-error`} className="text-sm font-semibold text-rose-500 px-1" role="alert">
            {error}
          </p>
        )}
      </div>
    );
  };

  // Standard Form Select Component with Top Label (No Overlapping Text)
  const renderFormSelect = (
    id: keyof ContactFormSchema,
    label: string,
    options: readonly string[]
  ) => {
    const value = formValues[id] || "";
    const isFocused = focusedField === id;
    const hasValue = Boolean(value && value.length > 0);
    const isTouched = Boolean(touchedFields[id]);
    const error = errors[id]?.message;
    const isValid = isTouched && hasValue && !error;

    const { onBlur: formOnBlur, ...registerProps } = form.register(id);

    return (
      <div className="space-y-1.5">
        <label
          htmlFor={id}
          className="block text-sm sm:text-base font-semibold text-slate-800"
        >
          {label}
        </label>
        <div className="relative">
          <select
            id={id}
            aria-invalid={Boolean(error)}
            aria-describedby={error ? `${id}-error` : undefined}
            onFocus={() => setFocusedField(id)}
            onBlur={(e) => {
              setFocusedField(null);
              formOnBlur(e);
            }}
            className={cn(
              "w-full appearance-none rounded-xl border bg-white px-4 py-3 pr-10 text-base text-slate-900 outline-none transition-all duration-200 cursor-pointer",
              !hasValue && "text-slate-400",
              error
                ? "border-rose-400 bg-rose-50/20 focus:border-rose-500 focus:ring-2 focus:ring-rose-500/20"
                : isFocused
                ? "border-blue-600 ring-2 ring-blue-500/20 shadow-[0_0_14px_rgba(37,99,235,0.14)]"
                : hasValue
                ? "border-slate-300 bg-slate-50/30"
                : "border-slate-200 hover:border-slate-300"
            )}
            {...registerProps}
          >
            <option value="" disabled className="text-slate-400">
              Select option...
            </option>
            {options.map((opt) => (
              <option key={opt} value={opt} className="text-slate-900">
                {opt}
              </option>
            ))}
          </select>

          {/* Custom Chevron Icon */}
          <span
            className={cn(
              "pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 transition-transform duration-300",
              isFocused && "rotate-180 text-blue-600"
            )}
          >
            <ChevronDown className="size-5" />
          </span>

          {/* Valid Checkmark */}
          {isValid && (
            <span className="pointer-events-none absolute right-11 top-1/2 -translate-y-1/2 text-emerald-500">
              <CheckCircle2 className="size-5" />
            </span>
          )}
        </div>
        {error && (
          <p id={`${id}-error`} className="text-sm font-semibold text-rose-500 px-1" role="alert">
            {error}
          </p>
        )}
      </div>
    );
  };

  // Success State Render
  if (status === "success") {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="flex min-h-[560px] flex-col items-center justify-center p-8 text-center"
        role="status"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.1 }}
          className="flex size-20 items-center justify-center rounded-full border-2 border-emerald-400 bg-emerald-50 text-emerald-600 shadow-[0_0_40px_rgba(16,185,129,0.25)]"
        >
          <Check className="size-10 stroke-[3]" aria-hidden />
        </motion.div>

        <h3 className="mt-7 font-heading text-3xl font-bold text-slate-950">
          Consultation Requested!
        </h3>
        <p className="mt-3 max-w-md text-lg leading-relaxed text-slate-600">
          Thank you for reaching out. Our enterprise consultation team will review your
          requirements and get back to you within 24 hours.
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Button
            type="button"
            size="lg"
            className="h-12 rounded-full bg-blue-600 px-6 text-base font-semibold text-white hover:bg-blue-700 shadow-md"
            onClick={() => setStatus("idle")}
          >
            Submit Another Request
          </Button>
          <Link
            href="/"
            className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-slate-300 bg-white px-6 text-base font-semibold text-slate-700 transition-colors hover:bg-slate-50"
          >
            <ArrowLeft className="size-4" aria-hidden />
            Return to Homepage
          </Link>
        </div>
      </motion.div>
    );
  }

  const { onBlur: descOnBlur, ...descRegisterProps } = form.register("projectDescription");

  // Main Form Render
  return (
    <div className="overflow-hidden">
      {/* ── Top Header (Clean layout without progress/counter metrics) ─────── */}
      <div className="border-b border-slate-200 bg-gradient-to-r from-blue-50/60 via-white to-sky-50/40 p-6 sm:p-8">
        <div>
          <h2 className="font-heading text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl">
            Book a Consultation
          </h2>
          <p className="mt-2 text-base text-slate-600 leading-relaxed">
            Tell us about your goals and challenges. We&apos;ll reach out with tailored guidance.
          </p>
        </div>
      </div>

      {/* ── Form Fields ───────────────────────────────── */}
      <form
        id="consultation-form"
        onSubmit={form.handleSubmit(onSubmit)}
        className="p-6 sm:p-8 space-y-6"
        noValidate
      >
        <div className="grid gap-6 sm:grid-cols-2">
          {renderFormInput("fullName", "Full Name", "text", "name", "e.g. John Doe")}
          {renderFormInput("companyName", "Company Name", "text", "organization", "e.g. Acme Corp")}
          {renderFormInput("businessEmail", "Business Email", "email", "email", "name@company.com")}
          {renderFormInput("phoneNumber", "Phone Number", "tel", "tel", "+1 (555) 000-0000")}
          {renderFormInput("country", "Country", "text", "country-name", "e.g. United States")}
          {renderFormSelect("areaOfInterest", "Area of Interest", areasOfInterest)}
          {renderFormSelect("projectScale", "Project Scale", projectScales)}
          {renderFormSelect(
            "consultationMethod",
            "Preferred Consultation Method",
            consultationMethods
          )}
          {renderFormSelect("expectedTimeline", "Expected Timeline", projectTimelines)}

          {/* Textarea with Explicit Top Label & Character Counter */}
          <div className="sm:col-span-2 space-y-1.5">
            <label
              htmlFor="projectDescription"
              className="block text-sm sm:text-base font-semibold text-slate-800"
            >
              Project Description
            </label>
            <div className="relative">
              <textarea
                id="projectDescription"
                maxLength={1000}
                rows={5}
                placeholder="Describe your project goals, technical requirements, or key business challenges..."
                onFocus={() => setFocusedField("projectDescription")}
                onBlur={(e) => {
                  setFocusedField(null);
                  descOnBlur(e);
                }}
                className={cn(
                  "w-full resize-none rounded-xl border bg-white px-4 py-3 text-base text-slate-900 placeholder:text-slate-400 outline-none transition-all duration-200",
                  errors.projectDescription
                    ? "border-rose-400 bg-rose-50/20 focus:border-rose-500 focus:ring-2 focus:ring-rose-500/20"
                    : focusedField === "projectDescription"
                    ? "border-blue-600 ring-2 ring-blue-500/20 shadow-[0_0_14px_rgba(37,99,235,0.14)]"
                    : description.length > 0
                    ? "border-slate-300 bg-slate-50/30"
                    : "border-slate-200 hover:border-slate-300"
                )}
                {...descRegisterProps}
              />

              {/* Character Counter */}
              <div className="absolute bottom-3 right-4 flex items-center gap-2">
                <svg className="size-4 -rotate-90 transform" viewBox="0 0 36 36">
                  <path
                    className="text-slate-200"
                    strokeWidth="4"
                    stroke="currentColor"
                    fill="none"
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  />
                  <path
                    className={cn(
                      "transition-colors duration-300",
                      description.length > 950
                        ? "text-rose-500"
                        : description.length > 800
                        ? "text-amber-500"
                        : "text-blue-600"
                    )}
                    strokeDasharray={`${(description.length / 1000) * 100}, 100`}
                    strokeWidth="4"
                    strokeLinecap="round"
                    stroke="currentColor"
                    fill="none"
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  />
                </svg>
                <span
                  className={cn(
                    "text-xs font-semibold tabular-nums transition-colors duration-300",
                    description.length > 950
                      ? "text-rose-600 font-bold"
                      : description.length > 800
                      ? "text-amber-600"
                      : "text-slate-500"
                  )}
                >
                  {description.length}/1000
                </span>
              </div>
            </div>
            {errors.projectDescription && (
              <p
                id="projectDescription-error"
                className="text-sm font-semibold text-rose-500 px-1"
                role="alert"
              >
                {errors.projectDescription.message}
              </p>
            )}
          </div>
        </div>

        {/* Error Alert */}
        <AnimatePresence>
          {status === "error" && (
            <motion.p
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="mt-4 rounded-xl border border-rose-200 bg-rose-50 px-4 py-3 text-base font-semibold text-rose-700"
              role="alert"
            >
              {errorMessage}
            </motion.p>
          )}
        </AnimatePresence>

        {/* Submit Button */}
        <Button
          type="submit"
          size="lg"
          disabled={isSubmitting}
          className="mt-8 h-13 w-full rounded-full bg-blue-600 text-base font-semibold text-white shadow-md shadow-blue-600/20 transition-all hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-600/30"
        >
          {isSubmitting ? (
            <>
              <LoaderCircle className="size-5 animate-spin" aria-hidden />
              Submitting Request…
            </>
          ) : (
            <>
              Request Consultation
              <Send className="size-5" aria-hidden />
            </>
          )}
        </Button>

        <p className="mt-4 text-center text-sm font-medium text-slate-600 flex items-center justify-center gap-2">
          <Lock className="size-4 text-slate-400" />
          Your information is reviewed confidentially by our enterprise team.
        </p>

        {/* ── Below Submit Button: Original Interactive Google Map Card & Trust Strip ─ */}
        <div className="mt-10 pt-8 border-t border-slate-200 space-y-6">
          {/* Header for Map */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
            <div>
              <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-blue-600">
                <Globe className="size-3.5" />
                Global Enterprise Presence
              </span>
              <h4 className="font-heading text-lg font-bold text-slate-950">
                Data Acies Global Delivery HQ
              </h4>
            </div>
            <a
              href="https://maps.google.com/maps?q=India"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-600 hover:text-blue-700 hover:underline"
            >
              <MapPin className="size-4" />
              Open in Google Maps
            </a>
          </div>

          {/* Original Interactive Google Maps Iframe */}
          <div className="relative h-72 sm:h-80 w-full overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 shadow-md">
            <iframe
              title="Data Acies Office Location Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.562017387332!2d77.2090212!3d28.6139391!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0x37205b715389640!2sDelhi!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              className="h-full w-full border-0"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          {/* Trust Strip */}
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            {[
              { icon: Clock3, title: "24hr Response", subtitle: "Guaranteed SLA" },
              { icon: Building2, title: "Global Delivery", subtitle: "US & India Teams" },
              { icon: ShieldCheck, title: "Enterprise-Ready", subtitle: "SOC2 & ISO Ready" },
              { icon: Lock, title: "100% Confidential", subtitle: "NDA Protected" },
            ].map((badge) => {
              const BadgeIcon = badge.icon;
              return (
                <div
                  key={badge.title}
                  className="flex flex-col items-center justify-center rounded-xl border border-slate-200 bg-slate-50/80 p-3 text-center transition-all hover:border-blue-200 hover:bg-blue-50/50"
                >
                  <BadgeIcon className="size-5 text-blue-600 mb-1" />
                  <span className="text-sm font-bold text-slate-900 leading-tight">
                    {badge.title}
                  </span>
                  <span className="text-xs font-medium text-slate-500">
                    {badge.subtitle}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </form>
    </div>
  );
}
