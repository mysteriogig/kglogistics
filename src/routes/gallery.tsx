import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import galleryHero from "@/assets/gallery-hero.png";
import serviceSea from "@/assets/service-sea.png";
import serviceRoad from "@/assets/service-road.png";
import serviceRail from "@/assets/service-rail.png";
import serviceAir from "@/assets/service-air.png";
import aboutHero from "@/assets/about-hero.png";
import servicesHero from "@/assets/services-hero.png";
import contactHero from "@/assets/contact-hero.png";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — KG Logistics" },
      { name: "description", content: "A glimpse of our operations — shipments, warehousing, and projects we've handled." },
    ],
  }),
  component: Gallery,
});

const images: { src: string; p: string }[] = [
  { src: serviceSea, p: "Container ship at sea" },
  { src: galleryHero, p: "Modern logistics warehouse" },
  { src: serviceAir, p: "Cargo aircraft being loaded" },
  { src: serviceRoad, p: "Truck fleet on highway" },
  { src: servicesHero, p: "Port cranes at dusk" },
  { src: serviceRail, p: "Freight train with containers" },
  { src: contactHero, p: "Corporate operations office" },
  { src: aboutHero, p: "Our operations team" },
];

function Gallery() {
  return (
    <>
      <PageHero title="Gallery" crumbs={[{ label: "Home", to: "/" }, { label: "Gallery" }]} image={galleryHero} />
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--primary)]">Our Work</span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-[var(--dark)]">Moments from our operations</h2>
          </div>
          <div className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            {images.map((img, i) => (
              <div key={i} className="group aspect-square overflow-hidden rounded-xl bg-muted relative">
                <img src={img.src} alt={img.p} className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-500" loading="lazy" />
                <div className="absolute inset-0 bg-[image:var(--gradient-hero)] opacity-0 group-hover:opacity-90 transition flex items-end p-4">
                  <span className="text-white text-sm font-semibold">{img.p}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}