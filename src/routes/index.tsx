import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { Ship, Plane, Truck, Train, Warehouse, FileCheck, Package, Shield, Clock, Award, HeartHandshake, ArrowRight, CheckCircle2, Globe2, Quote, ChevronDown } from "lucide-react";
import { useState } from "react";
import { KGHero } from "@/components/site/KGHero";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "KG Logistics — Best Logistic Company in India" },
      { name: "description", content: "Global freight forwarding, customs, warehousing & supply chain solutions across sea, air, road and rail." },
      { property: "og:title", content: "KG Logistics" },
      { property: "og:description", content: "Trusted global freight forwarding and logistics partner from India." },
    ],
  }),
  component: Index,
});

const services = [
  { icon: Ship, name: "Sea Freight", desc: "FCL, LCL and break-bulk shipping with worldwide port coverage." },
  { icon: Plane, name: "Air Freight", desc: "Time-critical air cargo via leading global carriers." },
  { icon: Truck, name: "Road Freight", desc: "Pan-India trucking and last-mile delivery network." },
  { icon: Train, name: "Rail Freight", desc: "Cost-effective rail solutions for bulk consignments." },
  { icon: FileCheck, name: "Customs Brokerage", desc: "Hassle-free customs clearance for imports & exports." },
  { icon: Warehouse, name: "Warehouse & Distribution", desc: "Strategically located warehouses with full visibility." },
  { icon: Package, name: "Project Cargo", desc: "Oversized & heavy lift cargo handled end-to-end." },
  { icon: Globe2, name: "Export Documentation", desc: "Complete paperwork, compliance and advisory." },
];

const stats = [
  { value: "15+", label: "Years Experience" },
  { value: "2,500+", label: "Happy Clients" },
  { value: "120+", label: "Countries Served" },
  { value: "50K+", label: "Shipments Delivered" },
];

const advantages = [
  { icon: Shield, title: "We Are Trusted", desc: "Growing every day with our valued clientele across the globe." },
  { icon: Award, title: "The Best Service", desc: "Reasonable pricing and proactive handling to avoid losses." },
  { icon: HeartHandshake, title: "100% Guarantee", desc: "We think ahead so your cargo always moves on time." },
  { icon: Clock, title: "Prompt Delivery", desc: "Easy, stress-free shipping with real-time tracking." },
];

const faqs = [
  { q: "What freight services do you provide?", a: "We offer sea, air, road and rail freight along with customs brokerage, warehousing, project cargo and full export-import documentation." },
  { q: "Do you handle international shipments?", a: "Yes. We serve 120+ countries through our trusted global network of carriers, agents and customs partners." },
  { q: "How can I track my shipment?", a: "Use our online tracking page with your AWB or Bill of Lading number to get real-time status updates." },
  { q: "Do you offer customs clearance?", a: "Absolutely. Our licensed customs brokers handle the entire clearance process for imports and exports." },
];

const testimonials = [
  { name: "Rajesh Kumar", role: "Director, Texmach Exports", text: "KG Logistics has been our logistics backbone for 5 years. Reliable, transparent and always on time." },
  { name: "Priya Menon", role: "Supply Chain Head, Aarvi Ltd", text: "Their customs team is exceptional. They cleared a complex shipment in record time and saved us significant cost." },
  { name: "Mohammed Ali", role: "Owner, Coimbatore Textiles", text: "Friendly team, professional service and competitive pricing. Highly recommended for export shipments." },
];

function Index() {
  return (
    <>
      <KGHero />

      {/* STATS */}
      <section className="glass-dark text-white border-y border-white/10">
        <div className="mx-auto max-w-7xl px-4 py-12 grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--primary-glow)]">{s.value}</div>
              <div className="mt-1 text-xs sm:text-sm text-white/70 uppercase tracking-wide">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4">
          <SectionHead eyebrow="What We Do" title="Comprehensive Logistics Services" desc="From port to doorstep — a single partner for every leg of your global supply chain." />
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {services.map((s) => (
              <div key={s.name} className="group p-6 rounded-2xl glass hover:-translate-y-1 transition-all">
                <div className="grid h-12 w-12 place-items-center rounded-lg bg-[image:var(--gradient-primary)] text-white">
                  <s.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-4 font-bold text-[var(--dark)]">{s.name}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                <Link to="/services" className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-[var(--primary)] group-hover:gap-2 transition-all">
                  Learn more <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <SectionHead eyebrow="Why Choose Us" title="Excellence in Every Shipment" desc="" align="left" />
            <p className="mt-4 text-muted-foreground leading-relaxed">
              For over a decade KG Logistics has been moving cargo with care, precision and uncompromising professionalism. Our people, processes and global network are built around one promise — your shipment, delivered.
            </p>
            <ul className="mt-6 space-y-3">
              {["Dedicated account managers for every client","Real-time shipment visibility 24/7","Licensed customs brokers in-house","Global agent network in 120+ countries"].map((f) => (
                <li key={f} className="flex items-start gap-3"><CheckCircle2 className="h-5 w-5 shrink-0 text-[var(--primary)] mt-0.5" /><span className="text-sm">{f}</span></li>
              ))}
            </ul>
            <Link to="/about" className="mt-8 inline-flex items-center gap-2 rounded-md bg-[image:var(--gradient-primary)] px-6 py-3 text-sm font-semibold text-white shadow-md hover:opacity-95">
              About Us <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {advantages.map((a) => (
              <div key={a.title} className="p-6 rounded-2xl glass hover:-translate-y-1 transition">
                <div className="grid h-11 w-11 place-items-center rounded-lg bg-accent text-[var(--primary-dark)]"><a.icon className="h-5 w-5" /></div>
                <h4 className="mt-4 font-bold text-sm text-[var(--dark)]">{a.title}</h4>
                <p className="mt-1.5 text-xs text-muted-foreground leading-relaxed">{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW WE DO */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4">
          <SectionHead eyebrow="Our Process" title="How We Do It" desc="A simple, transparent workflow that gets your cargo moving — fast." />
          <div className="mt-12 grid md:grid-cols-4 gap-6">
            {[
              { n: "01", t: "Request a Quote", d: "Share your shipment details and receive a tailored quote." },
              { n: "02", t: "Booking & Pickup", d: "We book carriers and arrange door pickup from your facility." },
              { n: "03", t: "Customs & Transit", d: "Our team handles documentation and clears customs at both ends." },
              { n: "04", t: "Delivered Safely", d: "On-time delivery with real-time tracking from origin to destination." },
            ].map((s) => (
              <div key={s.n} className="relative p-6 rounded-2xl glass">
                <div className="text-5xl font-bold text-[var(--primary)]/15">{s.n}</div>
                <h4 className="mt-2 font-bold text-[var(--dark)]">{s.t}</h4>
                <p className="mt-2 text-sm text-muted-foreground">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4">
          <SectionHead eyebrow="Testimonials" title="Trusted By Businesses Worldwide" desc="" />
          <div className="mt-12 grid md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div key={t.name} className="p-7 rounded-2xl glass">
                <Quote className="h-8 w-8 text-[var(--primary)]/30" />
                <p className="mt-4 text-sm leading-relaxed text-[var(--dark)]">"{t.text}"</p>
                <div className="mt-5 pt-5 border-t border-border">
                  <div className="font-bold text-sm">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20">
        <div className="mx-auto max-w-3xl px-4">
          <SectionHead eyebrow="FAQ" title="Frequently Asked Questions" desc="" />
          <div className="mt-10 space-y-3">
            {faqs.map((f, i) => <FaqItem key={i} {...f} />)}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 glass-dark" />
        <div className="relative mx-auto max-w-5xl px-4 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">Ready to ship with confidence?</h2>
          <p className="mt-4 text-white/85 max-w-2xl mx-auto">Let our team build a logistics solution tailored to your business. Talk to an expert today.</p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link to="/contact" className="rounded-full glass-btn-primary px-7 py-3.5 text-sm font-bold hover:-translate-y-0.5">Get a Free Quote</Link>
            <Link to="/tracking" className="rounded-full glass-btn px-7 py-3.5 text-sm font-bold text-white hover:-translate-y-0.5">Track Shipment</Link>
          </div>
        </div>
      </section>
    </>
  );
}

function SectionHead({ eyebrow, title, desc, align = "center" }: { eyebrow: string; title: string; desc?: string; align?: "center" | "left" }) {
  return (
    <div className={align === "center" ? "text-center max-w-2xl mx-auto" : "max-w-2xl"}>
      <span className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--primary)]">{eyebrow}</span>
      <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-[var(--dark)]">{title}</h2>
      {desc && <p className="mt-3 text-muted-foreground">{desc}</p>}
    </div>
  );
}

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="rounded-lg bg-card border border-border overflow-hidden">
      <button onClick={() => setOpen(!open)} className="w-full px-5 py-4 flex items-center justify-between text-left">
        <span className="font-semibold text-sm text-[var(--dark)]">{q}</span>
        <ChevronDown className={`h-4 w-4 text-[var(--primary)] transition ${open ? "rotate-180" : ""}`} />
      </button>
      {open && <div className="px-5 pb-4 text-sm text-muted-foreground">{a}</div>}
    </div>
  );
}
