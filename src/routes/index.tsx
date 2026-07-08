import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  Ship, Truck, Train, Warehouse, FileCheck, Package, Shield, Clock, Award,
  HeartHandshake, ArrowRight, CheckCircle2, Globe2, Plane, ChevronDown,
} from "lucide-react";
import { useState } from "react";
import { KGHero } from "@/components/site/KGHero";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "KG Logistics — Best Logistic Company in India" },
      { name: "description", content: "Domestic forwarding, customs, warehousing & supply chain solutions across sea, road and rail." },
      { property: "og:title", content: "KG Logistics" },
      { property: "og:description", content: "Trusted domestic forwarding and logistics partner from India." },
    ],
  }),
  component: Index,
});

const services = [
  { icon: Ship, name: "Sea Domestic", desc: "FCL, LCL and break-bulk shipping with worldwide port coverage." },
  { icon: Truck, name: "Road Domestic", desc: "Pan-India trucking and last-mile delivery network." },
  { icon: Train, name: "Rail Domestic", desc: "Cost-effective rail solutions for bulk consignments." },
  { icon: Plane, name: "Air Domestic", desc: "Fast, secure air cargo for time-critical shipments." },
  { icon: FileCheck, name: "Customs Brokerage", desc: "Hassle-free customs clearance for imports & exports." },
  { icon: Warehouse, name: "Warehouse & Distribution", desc: "Strategically located warehouses with full visibility." },
  { icon: Package, name: "Project Cargo", desc: "Oversized & heavy lift cargo handled end-to-end." },
  { icon: Globe2, name: "Export Documentation", desc: "Complete paperwork, compliance and advisory." },
];

const advantages = [
  { icon: Shield, title: "We Are Trusted", desc: "Growing every day with our valued clientele across the globe." },
  { icon: Award, title: "The Best Service", desc: "Reasonable pricing and proactive handling to avoid losses." },
  { icon: HeartHandshake, title: "100% Guarantee", desc: "We think ahead so your cargo always moves on time." },
  { icon: Clock, title: "Prompt Delivery", desc: "Easy, stress-free shipping with real-time tracking." },
];

const process = [
  { n: "01", t: "Request a Quote", d: "Share your shipment details and receive a tailored quote." },
  { n: "02", t: "Booking & Pickup", d: "We book carriers and arrange door pickup from your facility." },
  { n: "03", t: "Customs & Transit", d: "Our team handles documentation and clears customs at both ends." },
  { n: "04", t: "Delivered Safely", d: "On-time delivery with real-time tracking from origin to destination." },
];

const faqs = [
  { q: "What domestic services do you provide?", a: "We offer sea, road and rail domestic services along with customs brokerage, warehousing, project cargo and full export-import documentation." },
  { q: "Do you handle international shipments?", a: "Yes. We serve 120+ countries through our trusted global network of carriers, agents and customs partners." },
  { q: "How do I request a shipment?", a: "Reach out via our Contact page or call us directly — our team will get back to you with a tailored quote within 24 hours." },
  { q: "Do you offer customs clearance?", a: "Absolutely. Our licensed customs brokers handle the entire clearance process for imports and exports." },
];

// Shared reveal animation — mirrors the hero's easing so motion feels continuous, not bolted on.
const reveal = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.25, 0.4, 0.25, 1] } },
};

// One glass surface used everywhere — matches the hero card exactly so the whole page reads as one material.
const GLASS = "rounded-2xl border border-white/[0.12] bg-white/[0.055] backdrop-blur-2xl shadow-[0_8px_30px_-12px_rgba(0,8,20,0.5)]";

function Index() {
  return (
    <>
      <KGHero />

      {/* No opaque panel here — the animated hero stays visible for the full scroll.
          Sections carry no background of their own; only cards do. */}
      <div className="relative">
        {/* SERVICES */}
        <Section>
          <SectionHead
            eyebrow="What We Do"
            title="Comprehensive Logistics Services"
            desc="From port to doorstep — a single partner for every leg of your supply chain."
          />
          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {services.map((s, i) => (
              <motion.div
                key={s.name}
                variants={reveal}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
                transition={{ delay: (i % 4) * 0.06 }}
                className={`group p-6 ${GLASS} hover:bg-white/[0.09] hover:-translate-y-1 transition-all duration-300`}
              >
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-[image:var(--gradient-primary)] text-white shadow-sm">
                  <s.icon className="h-5.5 w-5.5" />
                </div>
                <h3 className="mt-5 font-semibold text-white tracking-tight">{s.name}</h3>
                <p className="mt-2 text-sm text-white/55 leading-relaxed">{s.desc}</p>
                <Link
                  to="/services"
                  className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-[var(--accent-yellow)] group-hover:gap-2 transition-all"
                >
                  Learn more <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </motion.div>
            ))}
          </div>
        </Section>

        <Divider />

        {/* WHY CHOOSE US */}
        <Section>
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <motion.div variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }}>
              <SectionHead eyebrow="Why Choose Us" title="Excellence in Every Shipment" align="left" />
              <p className="mt-5 text-white/60 leading-relaxed max-w-lg">
                For over a decade KG Logistics has been moving cargo with care, precision and
                uncompromising professionalism. Our people, processes and global network are
                built around one promise — your shipment, delivered.
              </p>
              <ul className="mt-7 space-y-3.5">
                {[
                  "Dedicated account managers for every client",
                  "Real-time shipment visibility 24/7",
                  "Licensed customs brokers in-house",
                  "Global agent network in 120+ countries",
                ].map((f) => (
                  <li key={f} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-[var(--accent-yellow)] mt-0.5" />
                    <span className="text-sm text-white/75">{f}</span>
                  </li>
                ))}
              </ul>
              <Link
                to="/about"
                className="mt-9 inline-flex items-center gap-2 rounded-full glass-btn-primary px-6 py-3 text-sm font-semibold hover:-translate-y-0.5 transition-transform"
              >
                About Us <ArrowRight className="h-4 w-4" />
              </Link>
            </motion.div>

            <div className="grid grid-cols-2 gap-4">
              {advantages.map((a, i) => (
                <motion.div
                  key={a.title}
                  variants={reveal}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ delay: i * 0.08 }}
                  className={`p-6 ${GLASS} hover:bg-white/[0.09] hover:-translate-y-1 transition-all duration-300`}
                >
                  <div className="grid h-11 w-11 place-items-center rounded-lg bg-[var(--accent-yellow)]/15 border border-[var(--accent-yellow)]/25 text-[var(--accent-yellow)]">
                    <a.icon className="h-5 w-5" />
                  </div>
                  <h4 className="mt-4 font-semibold text-sm text-white">{a.title}</h4>
                  <p className="mt-1.5 text-xs text-white/55 leading-relaxed">{a.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </Section>

        <Divider />

        {/* HOW WE DO */}
        <Section>
          <SectionHead
            eyebrow="Our Process"
            title="How We Do It"
            desc="A simple, transparent workflow that gets your cargo moving — fast."
          />
          <div className="mt-14 grid md:grid-cols-4 gap-6">
            {process.map((s, i) => (
              <motion.div
                key={s.n}
                variants={reveal}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
                transition={{ delay: i * 0.1 }}
                className={`relative p-6 ${GLASS} hover:bg-white/[0.09] transition-all duration-300`}
              >
                <div className="text-5xl font-bold text-white/10 tabular-nums">{s.n}</div>
                <h4 className="mt-2 font-semibold text-white">{s.t}</h4>
                <p className="mt-2 text-sm text-white/55 leading-relaxed">{s.d}</p>
              </motion.div>
            ))}
          </div>
        </Section>

        <Divider />

        {/* FAQ */}
        <Section className="max-w-3xl">
          <SectionHead eyebrow="FAQ" title="Frequently Asked Questions" />
          <div className="mt-10 space-y-3">
            {faqs.map((f, i) => (
              <FaqItem key={i} {...f} delay={i * 0.06} />
            ))}
          </div>
        </Section>

        {/* CTA — a second glass "moment" that closes the page the way the hero opened it */}
        <section className="py-24 sm:py-28">
          <motion.div
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className={`relative mx-auto max-w-4xl px-4`}
          >
            <div className={`${GLASS} px-8 py-16 sm:px-16 sm:py-20 text-center`}>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
                Ready to ship with confidence?
              </h2>
              <p className="mt-4 text-white/60 max-w-xl mx-auto leading-relaxed">
                Let our team build a logistics solution tailored to your business.
                Talk to an expert today.
              </p>
              <div className="mt-9 flex flex-wrap justify-center gap-3">
                <Link
                  to="/contact"
                  className="rounded-full glass-btn-primary px-8 py-3.5 text-sm font-bold hover:-translate-y-0.5 transition-transform"
                >
                  Get a Free Quote
                </Link>
              </div>
            </div>
          </motion.div>
        </section>
      </div>
    </>
  );
}

/** Consistent section padding + max-width wrapper — keeps rhythm uniform without per-section guesswork. */
function Section({ children, className = "" }) {
  return (
    <section className="py-20 sm:py-24">
      <div className={`mx-auto max-w-7xl px-4 ${className}`}>{children}</div>
    </section>
  );
}

/** Hairline divider instead of a background-color change — keeps sections distinct
    while staying fully transparent over the animated hero. */
function Divider() {
  return (
    <div className="mx-auto max-w-7xl px-4">
      <div className="h-px w-full bg-gradient-to-r from-transparent via-white/12 to-transparent" />
    </div>
  );
}

function SectionHead({ eyebrow, title, desc, align = "center" }) {
  return (
    <div className={align === "center" ? "text-center max-w-2xl mx-auto" : "max-w-2xl"}>
      <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--accent-yellow)]">
        {eyebrow}
      </span>
      <h2 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight text-white">{title}</h2>
      {desc && <p className="mt-3 text-white/55 leading-relaxed">{desc}</p>}
    </div>
  );
}

function FaqItem({ q, a, delay = 0 }) {
  const [open, setOpen] = useState(false);
  return (
    <motion.div
      variants={reveal}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      transition={{ delay }}
      className={`overflow-hidden ${GLASS}`}
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full px-5 py-4 flex items-center justify-between text-left"
      >
        <span className="font-medium text-sm text-white">{q}</span>
        <ChevronDown
          className={`h-4 w-4 text-[var(--accent-yellow)] transition-transform duration-300 ${open ? "rotate-180" : ""}`}
        />
      </button>
      <div
        className={`grid transition-all duration-300 ease-out ${open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
      >
        <div className="overflow-hidden">
          <p className="px-5 pb-4 text-sm text-white/55 leading-relaxed">{a}</p>
        </div>
      </div>
    </motion.div>
  );
}