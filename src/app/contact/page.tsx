import type { Metadata } from "next";
import { Mail, MapPin } from "lucide-react";
import ContactForm from "@/components/forms/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Flourish Christian Magazine — general inquiries, contributor questions, and event inquiries.",
};

export default function ContactPage() {
  return (
    <div>
      <section className="bg-plum py-20 sm:py-24">
        <div className="mx-auto max-w-3xl px-6 text-center lg:px-10">
          <p className="font-sans text-xs font-semibold uppercase tracking-[0.24em] text-gold-light">
            Get in Touch
          </p>
          <h1 className="mt-4 font-serif text-4xl leading-tight text-white sm:text-5xl">Contact Us</h1>
          <p className="mx-auto mt-5 max-w-xl font-sans text-base leading-relaxed text-white/75">
            Questions, contributor inquiries, event details, or feedback — we&apos;d love to hear
            from you.
          </p>
        </div>
      </section>

      <section className="bg-ivory py-20 sm:py-24">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-14 px-6 lg:grid-cols-5 lg:px-10">
          <aside className="space-y-8 lg:col-span-2">
            <div>
              <h2 className="font-serif text-2xl text-plum">Reach Us Directly</h2>
              <div className="mt-5 space-y-4 font-sans text-sm text-charcoal-soft">
                <p className="flex items-start gap-3">
                  <Mail className="mt-0.5 h-4 w-4 flex-shrink-0 text-gold" aria-hidden="true" />
                  <span>
                    hello@flourishchristianmagazine.com
                    <br />
                    <span className="text-xs">[Placeholder — confirm official contact email.]</span>
                  </span>
                </p>
                <p className="flex items-start gap-3">
                  <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-gold" aria-hidden="true" />
                  <span>
                    Mountain of Fire and Miracles Ministries — Tampa, Florida
                    <br />
                    <span className="text-xs">[Placeholder — confirm official mailing address.]</span>
                  </span>
                </p>
              </div>
            </div>
            <div className="rounded-2xl bg-cream p-6">
              <h3 className="font-serif text-lg text-plum">Response Time</h3>
              <p className="mt-2 font-sans text-sm leading-relaxed text-charcoal-soft">
                We aim to respond to all inquiries within a few business days. [Placeholder — confirm
                actual response time commitment.]
              </p>
            </div>
          </aside>

          <div className="lg:col-span-3">
            <div className="rounded-2xl bg-white p-6 shadow-[0_1px_2px_rgba(36,31,33,0.06)] sm:p-10">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
