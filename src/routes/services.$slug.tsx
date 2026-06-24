import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Ship, Truck, Train, CheckCircle2, ArrowRight } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";

const data: Record<string, { name: string; icon: any; intro: string; features: string[] }> = {
  "sea-freight": {
    name: "Sea Domestic Services",
    icon: Ship,
    intro: "Our ocean freight network connects you to every major port in the world. Whether you ship full containers (FCL), share space (LCL) or move break-bulk cargo, our experienced team ensures predictable transit times, competitive rates and clear communication at every step.",
    features: ["FCL & LCL shipments", "Break-bulk & RoRo cargo", "Worldwide port coverage", "Dedicated sailing schedules", "Cargo insurance options", "Real-time container tracking"],
  },
  "road-freight": {
    name: "Road Domestic Services",
    icon: Truck,
    intro: "Our pan-India trucking network provides reliable Full Truck Load (FTL) and Less than Truck Load (LTL) services with door-to-door delivery, GPS tracking and dedicated customer support.",
    features: ["FTL & LTL services", "Pan-India coverage", "GPS-tracked fleet", "Temperature controlled options", "Last-mile delivery", "Cross-border trucking"],
  },
  "rail-freight": {
    name: "Rail Domestic Services",
    icon: Train,
    intro: "A cost-effective and environmentally friendly option for bulk and long-haul cargo. We coordinate intermodal rail solutions integrated with our road and ocean networks.",
    features: ["Bulk & intermodal cargo", "Container rail movement", "Inland container depot access", "End-to-end coordination", "Competitive pricing", "Reduced carbon footprint"],
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
      <PageHero title={s.name} crumbs={[{ label: "Home", to: "/" }, { label: "Services", to: "/services" }, { label: s.name }]} />
      <section className="py-20">
        <div className="mx-auto max-w-5xl px-4">
          <div className="grid h-16 w-16 place-items-center rounded-xl bg-[image:var(--gradient-primary)] text-white shadow-[var(--shadow-elegant)]">
            <Icon className="h-8 w-8" />
          </div>
          <h2 className="mt-6 text-3xl sm:text-4xl font-bold text-[var(--dark)]">{s.name}</h2>
          <p className="mt-4 text-muted-foreground leading-relaxed text-lg">{s.intro}</p>
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