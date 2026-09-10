"use client";

import { useState } from "react";

const inputClasses =
  "w-full rounded-xl border border-charcoal/15 bg-white px-4 py-3 font-sans text-sm text-charcoal placeholder:text-charcoal-soft/60 focus:border-gold focus:outline-none";
const labelClasses = "block font-sans text-xs font-semibold uppercase tracking-[0.08em] text-charcoal";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState<string>("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus("submitting");
    setErrorMessage("");
    const formData = new FormData(form);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Object.fromEntries(formData)),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        throw new Error(data.error || "Something went wrong.");
      }
      setStatus("success");
      form.reset();
    } catch (err) {
      setErrorMessage(
        err instanceof Error && err.message
          ? err.message
          : "Something went wrong sending your message. Please try again, or email us directly."
      );
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-2xl bg-cream p-10 text-center">
        <h3 className="font-serif text-2xl text-plum">Message Received</h3>
        <p className="mt-3 font-sans text-sm leading-relaxed text-charcoal-soft">
          Thank you for reaching out. Your message is on its way to the Flourish team, and
          we&apos;ll reply to the email address you gave us as soon as we can.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Honeypot — hidden from people, catches bots. */}
      <div aria-hidden="true" className="hidden">
        <label htmlFor="company">Company</label>
        <input id="company" name="company" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div>
        <label htmlFor="inquiryType" className={labelClasses}>
          Inquiry Type *
        </label>
        <select id="inquiryType" name="inquiryType" required className={`mt-2 ${inputClasses}`}>
          <option value="">Select an option</option>
          <option value="general">General Inquiry</option>
          <option value="contributor">Contributor Inquiry</option>
          <option value="event">Event Inquiry</option>
          <option value="press">Press / Media</option>
          <option value="other">Other</option>
        </select>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className={labelClasses}>
            Full Name *
          </label>
          <input id="name" name="name" type="text" required className={`mt-2 ${inputClasses}`} />
        </div>
        <div>
          <label htmlFor="email" className={labelClasses}>
            Email *
          </label>
          <input id="email" name="email" type="email" required className={`mt-2 ${inputClasses}`} />
        </div>
      </div>

      <div>
        <label htmlFor="subject" className={labelClasses}>
          Subject *
        </label>
        <input id="subject" name="subject" type="text" required className={`mt-2 ${inputClasses}`} />
      </div>

      <div>
        <label htmlFor="message" className={labelClasses}>
          Message *
        </label>
        <textarea id="message" name="message" required rows={6} className={`mt-2 ${inputClasses}`} />
      </div>

      {status === "error" && (
        <p className="font-sans text-sm text-burgundy">{errorMessage}</p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full rounded-full bg-plum px-8 py-4 font-sans text-sm font-semibold uppercase tracking-[0.08em] text-white transition-colors hover:bg-burgundy disabled:opacity-60 sm:w-auto"
      >
        {status === "submitting" ? "Sending…" : "Send Message"}
      </button>
    </form>
  );
}
