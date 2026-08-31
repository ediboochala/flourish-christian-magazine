"use client";

import { useState } from "react";

const inputClasses =
  "w-full rounded-xl border border-charcoal/15 bg-white px-4 py-3 font-sans text-sm text-charcoal placeholder:text-charcoal-soft/60 focus:border-gold focus:outline-none";
const labelClasses = "block font-sans text-xs font-semibold uppercase tracking-[0.08em] text-charcoal";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    const formData = new FormData(e.currentTarget);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Object.fromEntries(formData)),
      });
      if (!res.ok) throw new Error("Failed");
      setStatus("success");
      e.currentTarget.reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-2xl bg-cream p-10 text-center">
        <h3 className="font-serif text-2xl text-plum">Message Received</h3>
        <p className="mt-3 font-sans text-sm leading-relaxed text-charcoal-soft">
          Thank you for reaching out. Our team will respond as soon as possible. [Placeholder,
          connect to a real inbox or CRM before launch.]
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
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
        <p className="font-sans text-sm text-burgundy">
          Something went wrong sending your message. Please try again, or email us directly.
        </p>
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
