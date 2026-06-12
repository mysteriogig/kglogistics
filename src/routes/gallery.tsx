import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — KG Logistics" },
      { name: "description", content: "A glimpse of our operations — shipments, warehousing, and projects we've handled." },
    ],
  }),
  component: Gallery,
});

const images = [
  { q: "container+ship", p: "Container ship at sea, cinematic" },
  { q: "warehouse", p: "Modern logistics warehouse with workers" },
  { q: "cargo+plane", p: "Cargo plane being loaded at airport" },
  { q: "truck+highway", p: "Freight truck on highway at dusk" },
  { q: "port+crane", p: "Port crane lifting container" },
  { q: "freight+train", p: "Freight train with containers" },
  { q: "customs", p: "Customs clearance documentation" },
  { q: "project+cargo", p: "Heavy project cargo being loaded" },
];

function Gallery() {
  return (
    <>
      <PageHero title="Gallery" crumbs={[{ label: "Home", to: "/" }, { label: "Gallery" }]} />
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--primary)]">Our Work</span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-[var(--dark)]">Moments from our operations</h2>
          </div>
          <div className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            {images.map((img, i) => (
              <div key={i} className="group aspect-square overflow-hidden rounded-xl bg-muted relative">
                <img src={`https://source.unsplash.com/featured/600x600/?${img.q},logistics`} alt={img.p} className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-500" loading="lazy" />
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