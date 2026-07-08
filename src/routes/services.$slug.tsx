import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Ship, Truck, Train, Plane, FileCheck, Warehouse, Package, Box, Globe2, Shield, CheckCircle2, ArrowRight } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import serviceSea from "@/assets/service-sea.png";
import serviceRoad from "@/assets/service-road.png";
import serviceRail from "@/assets/service-rail.png";
import serviceAir from "@/assets/service-air.png";
import servicesHero from "@/assets/services-hero.png";
import galleryHero from "@/assets/gallery-hero.png";
import serviceCustoms from "@/assets/service-customs.jpg";
import serviceWarehouse from "@/assets/service-warehouse.jpg";
import serviceTransportation from "@/assets/service-transportation.jpg";
import serviceVas from "@/assets/service-vas.jpg";
import serviceDocs from "@/assets/service-docs.jpg";
import serviceProject from "@/assets/service-project.jpg";
import serviceContainerDecor from "@/assets/service-container-decor.jpg";
import serviceInsurance from "@/assets/service-insurance.jpg";

const data: Record<string, { name: string; icon: any; image: string; intro: string; features: string[] }> = {
  "sea-freight": {
    name: "Sea Domestic Services",
    icon: Ship,
    image: serviceSea,
    intro: "Our ocean freight network connects you to every major port in the world. Whether you ship full containers (FCL), share space (LCL) or move break-bulk cargo, our experienced team ensures predictable transit times, competitive rates and clear communication at every step.",
    features: ["FCL & LCL shipments", "Break-bulk & RoRo cargo", "Worldwide port coverage", "Dedicated sailing schedules", "Cargo insurance options", "Real-time container tracking"],
  },
  "road-freight": {
    name: "Road Domestic Services",
    icon: Truck,
    image: serviceRoad,
    intro: "Our pan-India trucking network provides reliable Full Truck Load (FTL) and Less than Truck Load (LTL) services with door-to-door delivery, GPS tracking and dedicated customer support.",
    features: ["FTL & LTL services", "Pan-India coverage", "GPS-tracked fleet", "Temperature controlled options", "Last-mile delivery", "Cross-border trucking"],
  },
  "rail-freight": {
    name: "Rail Domestic Services",
    icon: Train,
    image: serviceRail,
    intro: "A cost-effective and environmentally friendly option for bulk and long-haul cargo. We coordinate intermodal rail solutions integrated with our road and ocean networks.",
    features: ["Bulk & intermodal cargo", "Container rail movement", "Inland container depot access", "End-to-end coordination", "Competitive pricing", "Reduced carbon footprint"],
  },
  "air-freight": {
    name: "Air Domestic Services",
    icon: Plane,
    image: serviceAir,
    intro: "When speed matters, our air cargo service ensures your shipment reaches its destination in the shortest possible time. We partner with leading airlines to move perishables, high-value goods and urgent consignments across the globe.",
    features: ["Express & consolidated air freight", "Charter and priority services", "Perishable & pharma handling", "Airport-to-airport & door-to-door", "Consolidation at major gateways", "24/7 tracking & updates"],
  },
  "customs-brokerage": {
    name: "Customs Brokerage",
    icon: FileCheck,
    image: serviceCustoms,
    intro: "Our licensed customs brokers manage the full clearance process for imports and exports — from HS-code classification and duty optimization to final release. We stay ahead of every regulatory change so your cargo doesn't sit at the port.",
    features: ["Import & export clearance", "HS-code classification", "Duty & tax optimization", "License and permit management", "Bond and warehousing entries", "Post-clearance advisory"],
  },
  "warehouse-distribution": {
    name: "Warehouse & Distribution",
    icon: Warehouse,
    image: serviceWarehouse,
    intro: "Modern, strategically located warehouses across India ready to receive, store and distribute your inventory. Full WMS visibility, secure facilities and value-added services keep your supply chain moving.",
    features: ["Bonded & open warehousing", "Pick, pack & dispatch", "Inventory management (WMS)", "Cross-docking", "24/7 CCTV & security", "Nationwide distribution"],
  },
  "transportation": {
    name: "Transportation",
    icon: Truck,
    image: serviceTransportation,
    intro: "Reliable multimodal transportation across India and beyond — from container haulage to specialized reefer and flatbed movement. Our vetted network of partners guarantees safety, punctuality and clear communication.",
    features: ["Container haulage & trailer movement", "Reefer & temperature controlled", "Flatbed and low-bed trailers", "First-mile & last-mile delivery", "Real-time GPS tracking", "Dedicated fleet options"],
  },
  "value-added-services": {
    name: "Value Added Services",
    icon: Package,
    image: serviceVas,
    intro: "Beyond moving cargo, we add value at every touch point — from export packing and labeling to kitting, palletization and quality inspection. One partner for all your logistics needs.",
    features: ["Export packing & crating", "Labeling & barcoding", "Kitting & bundling", "Palletization & shrink-wrapping", "Quality inspection", "Reverse logistics"],
  },
  "documentation": {
    name: "Export & Import Documentation",
    icon: Globe2,
    image: serviceDocs,
    intro: "A single documentation error can hold your cargo for days. Our specialists prepare, verify and file every document required for smooth import and export flow — accurate the first time.",
    features: ["Commercial invoice & packing list", "Bill of Lading / AWB", "Certificate of Origin", "IEC and shipping bill", "DGFT compliance", "Letter of Credit management"],
  },
  "project-cargo": {
    name: "Project Cargo",
    icon: Package,
    image: serviceProject,
    intro: "Oversized, heavy-lift and out-of-gauge cargo needs specialized planning. From feasibility studies and route surveys to lifting plans and multi-modal execution — we handle end-to-end project logistics.",
    features: ["Route & feasibility surveys", "Heavy-lift and OOG handling", "Break-bulk & RoRo shipments", "Permit & escort management", "Onsite supervision", "Turnkey project execution"],
  },
  "container-decors": {
    name: "Portable Container Decors",
    icon: Box,
    image: serviceContainerDecor,
    intro: "Custom-built portable container solutions — perfect for on-site offices, retail pop-ups, exhibitions, cafés and event activations. Fully customizable, mobile and durable.",
    features: ["Office & site containers", "Retail & café conversions", "Exhibition & event units", "Custom branding & interiors", "Insulation & HVAC options", "Delivery and setup"],
  },
  "marine-insurance": {
    name: "Marine Insurance",
    icon: Shield,
    image: serviceInsurance,
    intro: "Protect your cargo against loss, damage or delay with tailored marine insurance policies. We help you choose the right coverage — whether single-shipment or annual open-cover.",
    features: ["Institute Cargo Clauses A, B, C", "Single-shipment or open policies", "War & strikes coverage", "Claims handling assistance", "Competitive premiums", "Transparent advisory"],
  },
};

export const Route = createFileRoute("/services/$slug")({
  loader: ({ params }) => {
    const item = data[params.slug];
    if (!item) throw notFound();
    return item;
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: `${loaderData?.name ?? "Service"} — KG Logistics` },
      { name: "description", content: loaderData?.intro?.slice(0, 155) ?? "Logistics service from KG Logistics." },
    ],
  }),
  component: ServiceDetail,
  notFoundComponent: () => (
    <div className="py-32 text-center"><h1 className="text-2xl font-bold">Service not found</h1><Link to="/services" className="mt-4 inline-block text-[var(--primary)]">Back to services</Link></div>
  ),
});

function ServiceDetail() {
  const s = Route.useLoaderData();
  const Icon = s.icon;
  return (
    <>
      <PageHero title={s.name} crumbs={[{ label: "Home", to: "/" }, { label: "Services", to: "/services" }, { label: s.name }]} image={s.image} />
      <section className="py-20">
        <div className="mx-auto max-w-5xl px-4">
          <div className="grid h-16 w-16 place-items-center rounded-xl bg-[image:var(--gradient-primary)] text-white shadow-[var(--shadow-elegant)]">
            <Icon className="h-8 w-8" />
          </div>
          <h2 className="mt-6 text-3xl sm:text-4xl font-bold text-[var(--dark)]">{s.name}</h2>
          <p className="mt-4 text-muted-foreground leading-relaxed text-lg">{s.intro}</p>
          <div className="mt-8 rounded-2xl overflow-hidden shadow-[var(--shadow-elegant)]">
            <img src={s.image} alt={s.name} className="w-full h-auto" loading="lazy" width={1600} height={640} />
          </div>
          <h3 className="mt-12 text-xl font-bold text-[var(--dark)]">Key Features</h3>
          <ul className="mt-5 grid sm:grid-cols-2 gap-3">
            {s.features.map((f: string) => (
              <li key={f} className="flex items-start gap-3 p-4 rounded-lg glass border border-border">
                <CheckCircle2 className="h-5 w-5 shrink-0 text-[var(--primary)] mt-0.5" />
                <span className="text-sm font-medium text-[var(--dark)]">{f}</span>
              </li>
            ))}
          </ul>
          <div className="mt-12 p-8 rounded-2xl bg-[image:var(--gradient-primary)] text-white text-center">
            <h3 className="text-2xl font-bold">Get a Quote for {s.name}</h3>
            <p className="mt-2 text-white/85">Tell us about your shipment — we'll respond within 24 hours.</p>
            <Link to="/contact" className="mt-5 inline-flex items-center gap-2 rounded-md bg-white text-[var(--primary-dark)] px-6 py-3 text-sm font-bold">Contact Us <ArrowRight className="h-4 w-4" /></Link>
          </div>
        </div>
      </section>
    </>
  );
}