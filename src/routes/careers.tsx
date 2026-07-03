import { createFileRoute, Link } from "@tanstack/react-router";
import { Briefcase, MapPin, Clock, ArrowRight, Sparkles } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import careersHero from "@/assets/careers-hero.png";

export const Route = createFileRoute("/careers")({
  head: () => ({
    meta: [
      { title: "Careers — KG Logistics" },
      { name: "description", content: "Join the KG Logistics team. Explore open roles across operations, customs, sales and technology." },
    ],
  }),
  component: Careers,
});

const openings = [
  { title: "Operations Executive", type: "Full-time", location: "Coimbatore", desc: "Coordinate day-to-day sea, road and air shipments with our carrier and customer network." },
  { title: "Customs Documentation Officer", type: "Full-time", location: "Coimbatore", desc: "Prepare and file import/export documents, coordinate with CHA and monitor clearance progress." },
  { title: "Sales & Business Development Manager", type: "Full-time", location: "Chennai / Coimbatore", desc: "Grow our client base across South India, own key accounts, and hit revenue targets." },
  { title: "Warehouse Supervisor", type: "Full-time", location: "Coimbatore", desc: "Oversee inbound, outbound and inventory accuracy at our distribution warehouse." },
];

function Careers() {
  return (
    <>
      <PageHero title="Careers" crumbs={[{ label: "Home", to: "/" }, { label: "Careers" }]} image={careersHero} />
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center max-w-2xl mx-auto">
            <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-[var(--primary)]">
              <Sparkles className="h-3.5 w-3.5 text-[var(--accent-yellow)]" /> Join The Team
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-[var(--dark)]">Build your career at KG Logistics</h2>
            <p className="mt-3 text-muted-foreground">We're a growing, people-first logistics company. If you love solving problems and moving the world, we'd love to hear from you.</p>
          </div>

          <div className="mt-12 grid sm:grid-cols-2 gap-6">
            {openings.map((o) => (
              <div key={o.title} className="p-7 rounded-2xl glass border border-border shadow-[var(--shadow-card)] hover:-translate-y-1 transition">
                <div className="flex items-center gap-3">
                  <div className="grid h-11 w-11 place-items-center rounded-lg bg-[image:var(--gradient-primary)] text-white"><Briefcase className="h-5 w-5" /></div>
                  <h3 className="font-bold text-lg text-[var(--dark)]">{o.title}</h3>
                </div>
                <p className="mt-4 text-sm text-muted-foreground leading-relaxed">{o.desc}</p>
                <div className="mt-5 flex flex-wrap gap-2 text-xs">
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-[var(--accent-yellow)]/20 text-[var(--primary-dark)] font-semibold"><Clock className="h-3 w-3" />{o.type}</span>
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-accent text-[var(--primary-dark)] font-semibold"><MapPin className="h-3 w-3" />{o.location}</span>
                </div>
                <Link to="/contact" className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-[var(--primary)] hover:gap-2 transition-all">Apply now <ArrowRight className="h-3.5 w-3.5" /></Link>
              </div>
            ))}
          </div>

          <div className="mt-14 p-8 rounded-2xl bg-[image:var(--gradient-primary)] text-white text-center">
            <h3 className="text-2xl font-bold">Don't see your role?</h3>
            <p className="mt-2 text-white/85 max-w-xl mx-auto">Send us your CV and tell us how you'd like to contribute. We're always keen to meet great people.</p>
            <a href="mailto:kglogisticstn@gmail.com" className="mt-5 inline-flex items-center gap-2 rounded-md bg-[var(--accent-yellow)] text-[var(--primary-dark)] px-6 py-3 text-sm font-bold">Email your CV <ArrowRight className="h-4 w-4" /></a>
          </div>
        </div>
      </section>
    </>
  );
}