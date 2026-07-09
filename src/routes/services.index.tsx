import { createFileRoute, Link } from "@tanstack/react-router";
import { Ship, Truck, Train, Warehouse, FileCheck, Package, Globe2, Shield, Box, Plane, ArrowRight } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import servicesHero from "@/assets/services-hero.png";

export const Route = createFileRoute("/services/")({
  head: () => ({
    meta: [
      { title: "Our Services — KG Logistics" },
      { name: "description", content: "Sea, road and rail domestic services, customs brokerage, warehousing, project cargo and more." },
      { property: "og:title", content: "Services — KG Logistics" },
      { property: "og:description", content: "Complete logistics services for exporters and importers." },
    ],
  }),
  component: Services,
});

const services = [
  { icon: Ship, name: "Sea Domestic Services", desc: "FCL, LCL and break-bulk via leading ocean carriers and global port coverage.", slug: "sea-freight" },
  { icon: Truck, name: "Road Domestic Services", desc: "Pan-India trucking, FTL & LTL, and door-to-door delivery.", slug: "road-freight" },
  { icon: Train, name: "Rail Domestic Services", desc: "Cost-effective rail solutions for bulk and intermodal cargo.", slug: "rail-freight" },
  { icon: Plane, name: "Air Domestic Services", desc: "Fast, time-critical air cargo with global airline partners.", slug: "air-freight" },
  { icon: FileCheck, name: "Customs Brokerage", desc: "Licensed brokers handling clearance for imports and exports.", slug: "customs-brokerage" },
  { icon: Warehouse, name: "Warehouse & Distribution", desc: "Strategically located warehouses with end-to-end inventory visibility.", slug: "warehouse-distribution" },
  { icon: Truck, name: "Transportation", desc: "Reliable multimodal transportation across India and beyond.", slug: "transportation" },
  { icon: Package, name: "Value Added Services", desc: "Packing, labeling, kitting and other services to complement your logistics.", slug: "value-added-services" },
  { icon: Globe2, name: "Export & Import Documentation", desc: "Complete paperwork, compliance and regulatory advisory.", slug: "documentation" },
  { icon: Package, name: "Project Cargo", desc: "Specialized handling for oversized, heavy-lift and complex cargo.", slug: "project-cargo" },
  { icon: Box, name: "Portable Container Decors", desc: "Custom-built portable container solutions for trade and events.", slug: "container-decors" },
  { icon: Shield, name: "Marine Insurance", desc: "Cargo insurance options to protect your shipment end-to-end.", slug: "marine-insurance" },
];

function Services() {
  return (
    <>
      <PageHero title="Our Services" crumbs={[{ label: "Home", to: "/" }, { label: "Services" }]} image={servicesHero} />
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--primary)]">What We Do</span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-[var(--dark)]">A single partner for your supply chain</h2>
            <p className="mt-3 text-muted-foreground">From domestic forwarding to last-mile delivery — our integrated services move your cargo with care.</p>
          </div>
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => (
              <Link
                key={s.name}
                to="/services/$slug"
                params={{ slug: s.slug }}
                className="group p-7 rounded-xl glass border border-border shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-elegant)] hover:-translate-y-1 transition-all"
              >
                <div className="grid h-12 w-12 place-items-center rounded-lg bg-[image:var(--gradient-primary)] text-white">
                  <s.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 font-bold text-lg text-[var(--dark)]">{s.name}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-[var(--primary)] group-hover:gap-2 transition-all">Learn more <ArrowRight className="h-3.5 w-3.5" /></span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}