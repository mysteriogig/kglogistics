import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Search, MapPin, Calendar, Package, CheckCircle2, Truck, Ship, Shield, Award, HeartHandshake, Clock, Phone, Mail } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";

export const Route = createFileRoute("/tracking")({
  head: () => ({
    meta: [
      { title: "Track Shipment & Documents — KG Logistics" },
      { name: "description", content: "Track your AWB or Bill of Lading in real time. Find required export and import documentation." },
      { property: "og:title", content: "Track Shipment — KG Logistics" },
      { property: "og:description", content: "Real-time tracking and complete documentation guide for exporters and importers." },
    ],
  }),
  component: TrackingPage,
});

const exportDocs = [
  "KYC Documents",
  "Importer Exporter Code (IEC)",
  "Authorized Dealer (AD) Code",
  "Commercial Invoice & Packing List",
  "Airway Bill / Bill of Lading",
  "Chemical Composition / Test Report",
  "SDF Declaration",
  "Export Promotion Council (RCMC / IC)",
  "Letter of Credit (if applicable)",
  "Certificate of Origin",
];

const importDocs = [
  "KYC Documents",
  "Importer Exporter Code (IEC)",
  "GATT / DGFT Declarations",
  "Commercial Invoice & Packing List",
  "Bill of Lading / Airway Bill",
  "Certificate of Origin",
  "Insurance Certificate",
  "Purchase Order / Sale Contract",
  "Bill of Entry",
  "Technical Write-up (if required)",
];

const advantages = [
  { icon: Shield, title: "We Are Trusted", desc: "Growing every day with our valued clientele." },
  { icon: Award, title: "The Best Service", desc: "Reasonable price, proactive handling to avoid losses." },
  { icon: HeartHandshake, title: "100% Guarantee", desc: "We think ahead so your cargo always moves." },
  { icon: Clock, title: "Prompt Delivery", desc: "Easy and stress-free shipping, every time." },
];

function TrackingPage() {
  const [tracking, setTracking] = useState("");
  const [service, setService] = useState("sea");
  const [showResult, setShowResult] = useState(false);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (tracking.trim()) setShowResult(true);
  };

  return (
    <>
      <PageHero title="Documents & Tracking" crumbs={[{ label: "Home", to: "/" }, { label: "Documents" }, { label: "Tracking" }]} />

      {/* TRACKING SECTION */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-5xl px-4">
          <div className="text-center">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--primary)]">Real-Time Visibility</span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-[var(--dark)]">TRACKING</h2>
            <div className="mt-4 mx-auto h-1 w-16 bg-[image:var(--gradient-primary)] rounded-full" />
            <p className="mt-5 max-w-2xl mx-auto text-muted-foreground leading-relaxed">
              Track your shipment in real time using your Airway Bill (AWB) or Bill of Lading (BL) number. Get instant status updates, current location, and estimated delivery information across all our freight services.
            </p>
          </div>

          {/* TRACKING FORM */}
          <form onSubmit={onSubmit} className="mt-10 p-6 sm:p-8 rounded-2xl bg-card border border-border shadow-[var(--shadow-elegant)]">
            <div className="grid sm:grid-cols-[1fr_auto_auto] gap-3">
              <div className="relative">
                <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <input
                  value={tracking}
                  onChange={(e) => setTracking(e.target.value)}
                  placeholder="Enter Tracking / AWB / BL Number"
                  className="w-full h-12 pl-10 pr-4 rounded-md border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
                />
              </div>
              <select
                value={service}
                onChange={(e) => setService(e.target.value)}
                className="h-12 px-4 rounded-md border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
              >
                <option value="sea">Sea Freight</option>
                <option value="air">Air Freight</option>
                <option value="road">Road Freight</option>
                <option value="rail">Rail Freight</option>
              </select>
              <button type="submit" className="h-12 px-7 rounded-md bg-[image:var(--gradient-primary)] text-white font-semibold text-sm shadow-md hover:opacity-95 transition">
                Track Now
              </button>
            </div>
            <p className="mt-3 text-xs text-muted-foreground">Try any number to see a sample tracking result.</p>
          </form>

          {/* RESULT */}
          {showResult && (
            <div className="mt-8 rounded-2xl bg-card border border-border shadow-[var(--shadow-card)] overflow-hidden">
              <div className="p-6 sm:p-8 bg-[var(--dark)] text-white">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div>
                    <div className="text-xs text-white/60 uppercase tracking-wide">Tracking Number</div>
                    <div className="mt-1 text-xl font-bold">{tracking.toUpperCase()}</div>
                  </div>
                  <span className="inline-flex items-center gap-2 rounded-full bg-[var(--primary)]/20 border border-[var(--primary-glow)]/40 px-3 py-1.5 text-xs font-semibold text-[var(--primary-glow)]">
                    <span className="h-2 w-2 rounded-full bg-[var(--primary-glow)] animate-pulse" /> In Transit
                  </span>
                </div>
              </div>
              <div className="grid sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-border">
                <InfoCell icon={Package} label="Status" value="In Transit" />
                <InfoCell icon={MapPin} label="Current Location" value="Mumbai Port, India" />
                <InfoCell icon={Calendar} label="Estimated Delivery" value="Dec 18, 2026" />
              </div>
              <div className="p-6 sm:p-8 border-t border-border">
                <h4 className="font-bold text-[var(--dark)]">Shipment Timeline</h4>
                <div className="mt-5 space-y-5">
                  {[
                    { ok: true, t: "Order Confirmed", d: "Dec 10, 2026 · 09:24 AM", l: "Coimbatore, IN", icon: CheckCircle2 },
                    { ok: true, t: "Picked Up", d: "Dec 11, 2026 · 02:10 PM", l: "Coimbatore Warehouse", icon: Truck },
                    { ok: true, t: "Departed Origin", d: "Dec 13, 2026 · 11:45 AM", l: "Mumbai Port, IN", icon: Ship },
                    { ok: false, t: "Arrived at Destination", d: "Pending", l: "Hamburg Port, DE", icon: MapPin },
                    { ok: false, t: "Out for Delivery", d: "Pending", l: "—", icon: Truck },
                  ].map((s, i) => (
                    <div key={i} className="flex gap-4">
                      <div className={`grid h-10 w-10 shrink-0 place-items-center rounded-full ${s.ok ? "bg-[image:var(--gradient-primary)] text-white" : "bg-muted text-muted-foreground"}`}>
                        <s.icon className="h-4 w-4" />
                      </div>
                      <div className="flex-1 min-w-0 pb-1">
                        <div className="flex flex-wrap items-center justify-between gap-2">
                          <div className={`font-semibold text-sm ${s.ok ? "text-[var(--dark)]" : "text-muted-foreground"}`}>{s.t}</div>
                          <div className="text-xs text-muted-foreground">{s.d}</div>
                        </div>
                        <div className="text-xs text-muted-foreground mt-0.5">{s.l}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* DOCUMENTS */}
      <section className="py-16 sm:py-20 bg-[var(--surface)]">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--primary)]">Documentation</span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-[var(--dark)]">Required Documents</h2>
            <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">A clear checklist of the basic paperwork needed for export and import shipments.</p>
          </div>
          <div className="mt-12 grid md:grid-cols-2 gap-6">
            <DocCard title="Documents Required for Export" items={exportDocs} />
            <DocCard title="Documents Required for Import" items={importDocs} />
          </div>
        </div>
      </section>

      {/* ADVANTAGES */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--primary)]">Our Advantages</span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-[var(--dark)]">Excellence in Logistics & Freight</h2>
            <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">Why thousands of exporters and importers trust us with their cargo every single day.</p>
          </div>
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {advantages.map((a) => (
              <div key={a.title} className="text-center p-7 rounded-xl bg-card border border-border shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-elegant)] hover:-translate-y-1 transition-all">
                <div className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-[image:var(--gradient-primary)] text-white">
                  <a.icon className="h-6 w-6" />
                </div>
                <h4 className="mt-4 font-bold text-[var(--dark)]">{a.title}</h4>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[var(--dark)] text-white">
        <div className="mx-auto max-w-5xl px-4 grid md:grid-cols-[1fr_auto] items-center gap-6">
          <div>
            <h3 className="text-2xl sm:text-3xl font-bold">Have a question about your shipment?</h3>
            <p className="mt-2 text-white/75">Talk to our team — we're here to help 24/7.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a href="tel:+916381380457" className="inline-flex items-center gap-2 rounded-md bg-[image:var(--gradient-primary)] px-6 py-3 text-sm font-semibold shadow-md"><Phone className="h-4 w-4" />+91 6381380457</a>
            <a href="mailto:kglogisticscargo@gmail.com" className="inline-flex items-center gap-2 rounded-md border border-white/30 px-6 py-3 text-sm font-semibold"><Mail className="h-4 w-4" />Email Us</a>
          </div>
        </div>
      </section>
    </>
  );
}

function InfoCell({ icon: Icon, label, value }: { icon: typeof Package; label: string; value: string }) {
  return (
    <div className="p-5 sm:p-6 flex items-center gap-4">
      <div className="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-accent text-[var(--primary-dark)]"><Icon className="h-5 w-5" /></div>
      <div className="min-w-0">
        <div className="text-xs text-muted-foreground uppercase tracking-wide">{label}</div>
        <div className="font-semibold text-sm text-[var(--dark)] truncate">{value}</div>
      </div>
    </div>
  );
}

function DocCard({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="p-7 rounded-2xl bg-card border border-border shadow-[var(--shadow-card)]">
      <h3 className="text-lg font-bold text-[var(--dark)] pb-4 border-b border-border">{title}</h3>
      <ul className="mt-5 space-y-3">
        {items.map((it) => (
          <li key={it} className="flex items-start gap-3 text-sm">
            <CheckCircle2 className="h-5 w-5 shrink-0 text-[var(--primary)] mt-0.5" />
            <span className="text-[var(--dark)]/85">{it}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}