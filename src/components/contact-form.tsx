"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import {
  INTENTS,
  intentLabels,
  type ContactFormValues,
  type Intent,
} from "@/lib/contact-schema";
import { categories } from "@/lib/categories";

interface FieldErrors {
  [key: string]: string;
}

interface ContactFormProps {
  /** Pre-selected intent from the query string. */
  initialIntent: Intent;
  /** Model code passed from a product page, prefilled and read-only-ish. */
  initialModel?: string;
  initialCategory?: string;
}

const emptyValues: ContactFormValues = {
  name: "",
  company: "",
  email: "",
  country: "",
  phone: "",
  intent: "quote",
  model: "",
  category: "",
  quantity: "",
  message: "",
  website: "",
};

type State = "idle" | "submitting" | "success" | "error";

export function ContactForm({ initialIntent, initialModel, initialCategory }: ContactFormProps) {
  const [values, setValues] = useState<ContactFormValues>({
    ...emptyValues,
    intent: initialIntent,
    model: initialModel ?? "",
    category: initialCategory ?? "",
  });
  const [errors, setErrors] = useState<FieldErrors>({});
  const [state, setState] = useState<State>("idle");
  const [formError, setFormError] = useState("");
  const [reference, setReference] = useState("");
  const mountedAt = useRef<number>(0);
  const errorSummary = useRef<HTMLDivElement>(null);

  useEffect(() => {
    mountedAt.current = Date.now();
  }, []);

  useEffect(() => {
    setValues((prev) => ({ ...prev, intent: initialIntent }));
  }, [initialIntent]);

  function update<K extends keyof ContactFormValues>(key: K, value: ContactFormValues[K]) {
    setValues((prev) => ({ ...prev, [key]: value }));
    setErrors((prev) => {
      if (!prev[key as string]) return prev;
      const next = { ...prev };
      delete next[key as string];
      return next;
    });
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (state === "submitting") return;

    setState("submitting");
    setFormError("");
    setErrors({});

    try {
      const response = await fetch("/api/inquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...values,
          elapsedMs: Date.now() - (mountedAt.current || Date.now()),
        }),
      });

      const payload: unknown = await response.json().catch(() => null);

      if (!response.ok) {
        const data = payload as { error?: string; fieldErrors?: FieldErrors } | null;
        if (data?.fieldErrors) {
          setErrors(data.fieldErrors);
          // Move focus to the summary so a screen reader announces the problem.
          requestAnimationFrame(() => errorSummary.current?.focus());
        }
        setFormError(data?.error ?? "Something went wrong. Please email us directly.");
        setState("error");
        return;
      }

      const data = payload as { reference?: string } | null;
      setReference(data?.reference ?? "");
      setState("success");
    } catch {
      setFormError(
        "We could not reach the server. Check your connection and try again, or email us directly.",
      );
      setState("error");
    }
  }

  if (state === "success") {
    return (
      <div className="rounded-lg border border-ink-200 bg-white p-8 sm:p-10">
        <div className="flex h-11 w-11 items-center justify-center rounded-full bg-brand-50 text-brand-600">
          <svg width="20" height="20" viewBox="0 0 20 20" aria-hidden="true">
            <path
              d="M4 10.5l4 4 8-9"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <h2 className="mt-5 text-2xl font-semibold tracking-tight text-ink-900">
          Enquiry received
        </h2>
        <p className="mt-3 max-w-lg text-[14.5px] leading-relaxed text-ink-600">
          Thank you — your request is with our engineering team. We will reply to{" "}
          <span className="font-medium text-ink-900">{values.email}</span> with a model
          recommendation and a price.
        </p>
        {reference && (
          <p className="mt-5 rounded border border-ink-200 bg-ink-50 px-4 py-3 font-mono text-[12px] text-ink-600">
            Reference: <span className="text-ink-900">{reference.slice(0, 8)}</span>
          </p>
        )}
        <div className="mt-7 flex flex-wrap gap-3">
          <Link
            href="/products"
            className="rounded border border-ink-300 px-5 py-3 text-[14px] font-medium text-ink-800 transition-colors hover:border-ink-400 hover:bg-ink-50"
          >
            Continue browsing
          </Link>
          <button
            type="button"
            onClick={() => {
              setValues({ ...emptyValues, intent: initialIntent });
              setReference("");
              setState("idle");
              mountedAt.current = Date.now();
            }}
            className="rounded px-5 py-3 text-[14px] font-medium text-brand-600 transition-colors hover:text-brand-700"
          >
            Send another enquiry
          </button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="rounded-lg border border-ink-200 bg-white">
      {formError && (
        <div
          ref={errorSummary}
          tabIndex={-1}
          role="alert"
          className="border-b border-signal-400/40 bg-signal-400/10 px-6 py-4 text-[13.5px] leading-relaxed text-ink-900"
        >
          {formError}
        </div>
      )}

      <div className="space-y-5 p-6 sm:p-8">
        {/* Intent */}
        <fieldset>
          <legend className="text-[12.5px] font-medium text-ink-800">
            What do you need?
          </legend>
          <div className="mt-2.5 flex flex-wrap gap-1.5">
            {INTENTS.map((intent) => (
              <label
                key={intent}
                className={
                  values.intent === intent
                    ? "cursor-pointer rounded border border-brand-600 bg-brand-600 px-3 py-1.5 text-[12.5px] font-medium text-white"
                    : "cursor-pointer rounded border border-ink-300 bg-white px-3 py-1.5 text-[12.5px] text-ink-600 transition-colors hover:border-brand-400 hover:text-brand-700"
                }
              >
                <input
                  type="radio"
                  name="intent"
                  value={intent}
                  checked={values.intent === intent}
                  onChange={() => update("intent", intent)}
                  className="sr-only"
                />
                {intentLabels[intent]}
              </label>
            ))}
          </div>
        </fieldset>

        <div className="grid gap-5 sm:grid-cols-2">
          <Field
            label="Name"
            name="name"
            required
            value={values.name}
            error={errors.name}
            autoComplete="name"
            onChange={(v) => update("name", v)}
          />
          <Field
            label="Company"
            name="company"
            required
            value={values.company}
            error={errors.company}
            autoComplete="organization"
            onChange={(v) => update("company", v)}
          />
          <Field
            label="Work email"
            name="email"
            type="email"
            required
            value={values.email}
            error={errors.email}
            autoComplete="email"
            onChange={(v) => update("email", v)}
          />
          <Field
            label="Phone / WhatsApp"
            name="phone"
            type="tel"
            value={values.phone ?? ""}
            error={errors.phone}
            autoComplete="tel"
            onChange={(v) => update("phone", v)}
          />
          <Field
            label="Country"
            name="country"
            value={values.country ?? ""}
            error={errors.country}
            autoComplete="country-name"
            onChange={(v) => update("country", v)}
          />
          <Field
            label="Quantity required"
            name="quantity"
            value={values.quantity ?? ""}
            error={errors.quantity}
            placeholder="e.g. 5 pcs, or 1 sample"
            onChange={(v) => update("quantity", v)}
          />
          <Field
            label="Model reference"
            name="model"
            value={values.model ?? ""}
            error={errors.model}
            placeholder="e.g. HSM10"
            onChange={(v) => update("model", v)}
          />
          <label className="block">
            <span className="text-[12.5px] font-medium text-ink-800">Product family</span>
            <select
              name="category"
              value={values.category ?? ""}
              onChange={(e) => update("category", e.target.value)}
              className="mt-1.5 w-full rounded border border-ink-300 bg-white px-3 py-2.5 text-[13.5px] text-ink-900 focus:border-brand-500 focus:outline-none"
            >
              <option value="">Not sure / other</option>
              {categories.map((c) => (
                <option key={c.slug} value={c.slug}>
                  {c.name}
                </option>
              ))}
            </select>
          </label>
        </div>

        <label className="block">
          <span className="text-[12.5px] font-medium text-ink-800">
            Process conditions or message
            <span className="ml-1 text-signal-500" aria-hidden="true">
              *
            </span>
          </span>
          <textarea
            name="message"
            required
            rows={6}
            value={values.message}
            onChange={(e) => update("message", e.target.value)}
            aria-invalid={Boolean(errors.message)}
            aria-describedby={errors.message ? "message-error" : "message-hint"}
            placeholder="Medium, temperature, pressure, pipe or vessel size, and the signal your control system accepts. A drawing or photo of the existing installation helps."
            className={`mt-1.5 w-full resize-y rounded border px-3 py-2.5 text-[13.5px] leading-relaxed text-ink-900 placeholder:text-ink-400 focus:outline-none ${
              errors.message
                ? "border-red-500 focus:border-red-500"
                : "border-ink-300 focus:border-brand-500"
            }`}
          />
          {errors.message ? (
            <span id="message-error" className="mt-1.5 block text-[12px] text-red-600">
              {errors.message}
            </span>
          ) : (
            <span id="message-hint" className="mt-1.5 block text-[12px] text-ink-500">
              The more of this you can give, the more precise the answer.
            </span>
          )}
        </label>

        {/* Honeypot — visually hidden, never announced */}
        <div aria-hidden="true" className="absolute left-[-9999px] h-0 w-0 overflow-hidden">
          <label>
            Website
            <input
              type="text"
              name="website"
              tabIndex={-1}
              autoComplete="off"
              value={values.website ?? ""}
              onChange={(e) => update("website", e.target.value)}
            />
          </label>
        </div>

        <div className="flex flex-col gap-3 border-t border-ink-100 pt-5 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-sm text-[12px] leading-relaxed text-ink-500">
            We use your details only to answer this enquiry. See the{" "}
            <Link href="/privacy" className="underline underline-offset-2 hover:text-brand-600">
              privacy notice
            </Link>
            .
          </p>
          <button
            type="submit"
            disabled={state === "submitting"}
            className="shrink-0 rounded bg-brand-600 px-6 py-3.5 text-[14.5px] font-medium text-white transition-colors hover:bg-brand-700 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {state === "submitting" ? "Sending…" : "Send enquiry"}
          </button>
        </div>
      </div>
    </form>
  );
}

interface FieldProps {
  label: string;
  name: string;
  value: string;
  onChange: (value: string) => void;
  error?: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
  autoComplete?: string;
}

function Field({
  label,
  name,
  value,
  onChange,
  error,
  type = "text",
  required = false,
  placeholder,
  autoComplete,
}: FieldProps) {
  return (
    <label className="block">
      <span className="text-[12.5px] font-medium text-ink-800">
        {label}
        {required && (
          <span className="ml-1 text-signal-500" aria-hidden="true">
            *
          </span>
        )}
        {required && <span className="sr-only"> (required)</span>}
      </span>
      <input
        type={type}
        name={name}
        value={value}
        required={required}
        placeholder={placeholder}
        autoComplete={autoComplete}
        onChange={(e) => onChange(e.target.value)}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${name}-error` : undefined}
        className={`mt-1.5 w-full rounded border px-3 py-2.5 text-[13.5px] text-ink-900 placeholder:text-ink-400 focus:outline-none ${
          error ? "border-red-500 focus:border-red-500" : "border-ink-300 focus:border-brand-500"
        }`}
      />
      {error && (
        <span id={`${name}-error`} className="mt-1.5 block text-[12px] text-red-600">
          {error}
        </span>
      )}
    </label>
  );
}
