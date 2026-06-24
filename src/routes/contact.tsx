import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us — KG Logistics" },
      { name: "description", content: "Get in touch with our team for a domestic shipping quote, inquiry, or partnership." },
      { property: "og:title", content: "Contact — KG Logistics" },
      { property: "og:description", content: "Reach our logistics team in Coimbatore for quotes and support." },
    ],
  }),
  component: Contact,
});

function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <>
      <PageHero title="Contact Us" crumbs={[{ label: "Home", to: "/" }, { label: "Contact" }]} />
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 grid lg:grid-cols-[1fr_1.2fr] gap-10">
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--primary)]">Get In Touch</span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-[var(--dark)]">Let's work together</h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">Have a shipment to move or a question about our services? Our team is ready to help.</p>
            <ul className="mt-8 space-y-5">
              {[
                { icon: MapPin, label: "Office Address", value: "Door No.28-29, 2nd Floor, 100 feet road, DR Rajendra Prasad Road, Near Muthumariyamman Temple, Gandhipuram, Coimbatore - 641 012" },
                { icon: Phone, label: "Phone", value: "+91 6381380457", href: "tel:+916381380457" },
                { icon: Mail, label: "Email", value: "kglogistics.cbe@gmail.com", href: "mailto:kglogistics.cbe@gmail.com" },
                { icon: Clock, label: "Working Hours", value: "Mon - Sat: 9:00 AM - 7:00 PM" },
              ].map((c) => (
                <li key={c.label} className="flex gap-4">
                  <div className="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-[image:var(--gradient-primary)] text-white"><c.icon className="h-5 w-5" /></div>
                  <div className="min-w-0">
                    <div className="text-xs font-bold uppercase tracking-wide text-muted-foreground">{c.label}</div>
                    {c.href ? <a href={c.href} className="font-medium text-[var(--dark)] break-words hover:text-[var(--primary)]">{c.value}</a> : <div className="font-medium text-[var(--dark)]">{c.value}</div>}
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} className="p-7 sm:p-10 rounded-2xl glass border border-border shadow-[var(--shadow-elegant)]">
            <h3 className="text-2xl font-bold text-[var(--dark)]">Send us a message</h3>
            <p className="mt-1 text-sm text-muted-foreground">We'll get back to you within 24 hours.</p>
            <div className="mt-6 grid sm:grid-cols-2 gap-4">
              <Field label="Full Name" name="name" />
              <Field label="Email" name="email" type="email" />
              <Field label="Phone" name="phone" type="tel" />
              <Field label="Subject" name="subject" />
            </div>
            <div className="mt-4">
              <label className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Message</label>
              <textarea required rows={5} className="mt-1.5 w-full px-4 py-3 rounded-md border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-[var(--primary)]" placeholder="Tell us about your shipment or inquiry..." />
            </div>
            <button type="submit" className="mt-6 inline-flex items-center gap-2 rounded-md bg-[image:var(--gradient-primary)] px-7 py-3.5 text-sm font-bold text-white shadow-md hover:opacity-95 transition">
              <Send className="h-4 w-4" /> Send Message
            </button>
            {sent && <p className="mt-4 text-sm text-[var(--primary)] font-semibold">Thanks — we'll be in touch shortly.</p>}
          </form>
        </div>
      </section>
    </>
  );
}

function Field({ label, name, type = "text" }: { label: string; name: string; type?: string }) {
  return (
    <div>
      <label className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">{label}</label>
      <input required name={name} type={type} className="mt-1.5 w-full px-4 py-3 rounded-md border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-[var(--primary)]" />
    </div>
  );
}