"use client";

import { useState } from "react";
import { Mail } from "lucide-react";

interface NewsletterCTAProps {
  variant?: "section" | "compact" | "inline";
}

export default function NewsletterCTA({ variant = "section" }: NewsletterCTAProps) {
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");
  const [email, setEmail] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;
    setStatus("submitting");
    try {
      await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
    } catch {
      // Non-blocking: this is a placeholder endpoint. Replace with a real
      // email service (Mailchimp, ConvertKit, Klaviyo, etc.) integration.
    }
    setStatus("success");
    setEmail("");
  }

  if (variant === "inline") {
    return (
      <form onSubmit={handleSubmit} className="flex w-full max-w-md flex-col gap-3 sm:flex-row">
        <label htmlFor="newsletter-inline" className="sr-only">
          Email address
        </label>
        <input
          id="newsletter-inline"
          type="email"
          required
          placeholder="Your email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full flex-1 rounded-full border border-charcoal/15 bg-white px-5 py-3 font-sans text-sm text-charcoal placeholder:text-charcoal-soft/70 focus:border-gold focus:outline-none"
        />
        <button
          type="submit"
          disabled={status === "submitting"}
          className="rounded-full bg-plum px-6 py-3 font-sans text-xs font-semibold uppercase tracking-[0.1em] text-white transition-colors hover:bg-burgundy disabled:opacity-60"
        >
          {status === "success" ? "You're In! ✓" : "Join Flourish"}
        </button>
      </form>
    );
  }

  if (variant === "compact") {
    return (
      <div className="rounded-2xl bg-cream p-6">
        <p className="font-serif text-lg text-plum">Don&apos;t Just Read. Flourish With Us.</p>
        <p className="mt-2 font-sans text-sm text-charcoal-soft">
          Inspiring stories and Flourish updates, straight to your inbox.
        </p>
        <form onSubmit={handleSubmit} className="mt-4 flex flex-col gap-2">
          <label htmlFor="newsletter-compact" className="sr-only">
            Email address
          </label>
          <input
            id="newsletter-compact"
            type="email"
            required
            placeholder="Your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full rounded-full border border-charcoal/15 bg-white px-4 py-2.5 font-sans text-sm text-charcoal placeholder:text-charcoal-soft/70 focus:border-gold focus:outline-none"
          />
          <button
            type="submit"
            disabled={status === "submitting"}
            className="w-full rounded-full bg-plum px-4 py-2.5 font-sans text-xs font-semibold uppercase tracking-[0.1em] text-white transition-colors hover:bg-burgundy disabled:opacity-60"
          >
            {status === "success" ? "You're In! ✓" : "Join the Flourish Community"}
          </button>
        </form>
      </div>
    );
  }

  return (
    <section className="relative overflow-hidden bg-plum py-20 sm:py-24">
      <div
        className="pointer-events-none absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "radial-gradient(circle at 15% 30%, var(--color-gold) 0, transparent 40%), radial-gradient(circle at 85% 70%, var(--color-rose) 0, transparent 40%)",
        }}
      />
      <div className="relative mx-auto flex max-w-2xl flex-col items-center px-6 text-center">
        <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10">
          <Mail className="h-5 w-5 text-gold-light" aria-hidden="true" />
        </span>
        <h2 className="mt-6 font-serif text-3xl leading-tight text-white sm:text-4xl">
          Never Miss an Issue
        </h2>
        <p className="mt-4 font-sans text-base leading-relaxed text-white/75">
          Join thousands of women receiving faith, encouragement, and community — straight to their
          inbox.
        </p>
        <form onSubmit={handleSubmit} className="mt-8 flex w-full max-w-md flex-col gap-3 sm:flex-row">
          <label htmlFor="newsletter-section" className="sr-only">
            Email address
          </label>
          <input
            id="newsletter-section"
            type="email"
            required
            placeholder="Your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full flex-1 rounded-full border border-white/25 bg-white/10 px-5 py-3 font-sans text-sm text-white placeholder:text-white/50 focus:border-gold focus:outline-none"
          />
          <button
            type="submit"
            disabled={status === "submitting"}
            className="rounded-full bg-gold-light px-7 py-3 font-sans text-xs font-semibold uppercase tracking-[0.1em] text-plum transition-colors hover:bg-gold-light/85 disabled:opacity-60"
          >
            {status === "success" ? "You're In! ✓" : "Subscribe Now"}
          </button>
        </form>
        <p className="mt-4 font-sans text-sm italic text-white/60">
          &ldquo;Rooted in Christ. Growing together. Flourishing in purpose.&rdquo;
        </p>
        <p className="mt-2 font-sans text-xs text-white/50">No spam. Unsubscribe anytime.</p>
      </div>
    </section>
  );
}
