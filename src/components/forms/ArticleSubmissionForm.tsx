"use client";

import { useState } from "react";
import { categories } from "@/lib/data/categories";

const inputClasses =
  "w-full rounded-xl border border-charcoal/15 bg-white px-4 py-3 font-sans text-sm text-charcoal placeholder:text-charcoal-soft/60 focus:border-gold focus:outline-none";
const labelClasses = "block font-sans text-xs font-semibold uppercase tracking-[0.08em] text-charcoal";

export default function ArticleSubmissionForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState<string>("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus("submitting");
    setErrorMessage("");
    const formData = new FormData(form);
    try {
      const res = await fetch("/api/submit-article", { method: "POST", body: formData });
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
          : "Something went wrong submitting your story. Please try again, or email us directly."
      );
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-2xl bg-cream p-10 text-center">
        <h3 className="font-serif text-2xl text-plum">Thank You for Sharing Your Story</h3>
        <p className="mt-3 font-sans text-sm leading-relaxed text-charcoal-soft">
          Your submission has been received. The Flourish editorial team reviews every submission
          and will be in touch by email.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="fullName" className={labelClasses}>
            Full Name *
          </label>
          <input id="fullName" name="fullName" type="text" required className={`mt-2 ${inputClasses}`} />
        </div>
        <div>
          <label htmlFor="email" className={labelClasses}>
            Email *
          </label>
          <input id="email" name="email" type="email" required className={`mt-2 ${inputClasses}`} />
        </div>
      </div>

      <div>
        <label htmlFor="articleTitle" className={labelClasses}>
          Article Title *
        </label>
        <input id="articleTitle" name="articleTitle" type="text" required className={`mt-2 ${inputClasses}`} />
      </div>

      <div>
        <label htmlFor="category" className={labelClasses}>
          Category *
        </label>
        <select id="category" name="category" required className={`mt-2 ${inputClasses}`}>
          <option value="">Select a category</option>
          {categories.map((c) => (
            <option key={c.slug} value={c.name}>
              {c.name}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="articleContent" className={labelClasses}>
          Article Content *
        </label>
        <textarea
          id="articleContent"
          name="articleContent"
          required
          rows={10}
          placeholder="Share your story, reflection, or teaching…"
          className={`mt-2 ${inputClasses}`}
        />
      </div>

      <div>
        <label htmlFor="authorBio" className={labelClasses}>
          Author Biography *
        </label>
        <textarea
          id="authorBio"
          name="authorBio"
          required
          rows={4}
          placeholder="A short biography for your contributor profile…"
          className={`mt-2 ${inputClasses}`}
        />
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="profilePhoto" className={labelClasses}>
            Profile Photo
          </label>
          <input
            id="profilePhoto"
            name="profilePhoto"
            type="file"
            accept="image/*"
            className="mt-2 w-full font-sans text-sm text-charcoal-soft file:mr-4 file:rounded-full file:border-0 file:bg-plum file:px-4 file:py-2 file:font-sans file:text-xs file:font-semibold file:uppercase file:tracking-[0.08em] file:text-white"
          />
        </div>
        <div>
          <label htmlFor="supportingImage" className={labelClasses}>
            Supporting Image
          </label>
          <input
            id="supportingImage"
            name="supportingImage"
            type="file"
            accept="image/*"
            className="mt-2 w-full font-sans text-sm text-charcoal-soft file:mr-4 file:rounded-full file:border-0 file:bg-plum file:px-4 file:py-2 file:font-sans file:text-xs file:font-semibold file:uppercase file:tracking-[0.08em] file:text-white"
          />
        </div>
      </div>

      <label className="flex items-start gap-3 font-sans text-sm text-charcoal-soft">
        <input
          type="checkbox"
          name="consent"
          required
          className="mt-1 h-4 w-4 rounded border-charcoal/30 text-plum focus:ring-gold"
        />
        <span>
          I confirm this submission is my own original work and I give Flourish Christian Magazine
          permission to edit and publish it, in print or digital form, with attribution. *
        </span>
      </label>

      {status === "error" && (
        <p className="font-sans text-sm text-burgundy">{errorMessage}</p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full rounded-full bg-plum px-8 py-4 font-sans text-sm font-semibold uppercase tracking-[0.08em] text-white transition-colors hover:bg-burgundy disabled:opacity-60 sm:w-auto"
      >
        {status === "submitting" ? "Submitting…" : "Submit Your Story"}
      </button>
    </form>
  );
}
