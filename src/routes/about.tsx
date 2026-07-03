import { createFileRoute, Link } from "@tanstack/react-router";
import { CheckCircle2, Target, Eye, Heart, ArrowRight, User } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import aboutHero from "@/assets/about-hero.png";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — KG Logistics" },
      { name: "description", content: "Learn about KG Logistics — India's trusted domestic forwarding and supply chain partner since 2009." },
      { property: "og:title", content: "About — KG Logistics" },
      { property: "og:description", content: "Our mission, vision and values as India's trusted domestic forwarder." },
    ],
  }),
  component: About,
});

function About() {
  return (
    <>
      <PageHero title="About Us" crumbs={[{ label: "Home", to: "/" }, { label: "About" }]} image={aboutHero} />
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--primary)]">Who We Are</span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-[var(--dark)]">A trusted name in Indian logistics since 2009</h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              KG Logistics is a full-service domestic forwarder headquartered in Coimbatore, India. Over the past 15+ years we have built a reputation for reliability, transparency and deep expertise across sea, road and rail domestic services.
            </p>
            <p className="mt-3 text-muted-foreground leading-relaxed">
              From small parcel exports to oversized project cargo, we treat every shipment with the same level of professional care — backed by a global agent network in 120+ countries.
            </p>
            <ul className="mt-6 space-y-2.5">
              {["End-to-end supply chain solutions","Licensed customs brokers in-house","Dedicated client managers","Real-time tracking and reporting"].map((f) => (
                <li key={f} className="flex items-start gap-3 text-sm"><CheckCircle2 className="h-5 w-5 text-[var(--primary)] shrink-0 mt-0.5" />{f}</li>
              ))}
            </ul>
            <Link to="/contact" className="mt-8 inline-flex items-center gap-2 rounded-md bg-[image:var(--gradient-primary)] px-6 py-3 text-sm font-semibold text-white shadow-md">Contact Us <ArrowRight className="h-4 w-4" /></Link>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-[var(--shadow-elegant)] border border-white/40">
            <img src={aboutHero} alt="KG Logistics team" className="w-full h-full object-cover" loading="lazy" width={1920} height={768} />
          </div>
        </div>
      </section>

      <section className="py-20 ">
        <div className="mx-auto max-w-7xl px-4 grid md:grid-cols-3 gap-6">
          {[
            { icon: Target, title: "Our Mission", desc: "To simplify global trade by providing seamless, reliable and cost-effective domestic forwarding services to businesses of all sizes." },
            { icon: Eye, title: "Our Vision", desc: "To be the most trusted logistics partner in Asia — known for our people, our service, and our unwavering commitment to clients." },
            { icon: Heart, title: "Our Values", desc: "Integrity, accountability, customer-first thinking and a relentless drive to improve — these guide every decision we make." },
          ].map((c) => (
            <div key={c.title} className="p-8 rounded-xl glass border border-border shadow-[var(--shadow-card)]">
              <div className="grid h-12 w-12 place-items-center rounded-lg bg-[image:var(--gradient-primary)] text-white"><c.icon className="h-6 w-6" /></div>
              <h3 className="mt-5 text-xl font-bold text-[var(--dark)]">{c.title}</h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{c.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FOUNDERS */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--primary)]">Leadership</span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-[var(--dark)]">Meet Our Founders</h2>
            <p className="mt-3 text-muted-foreground">The visionaries behind KG Logistics — driving every shipment with care, integrity, and expertise.</p>
          </div>
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: "KG Indireswaran", role: "Founder & Managing Director", bio: "Two decades of experience in international logistics and cross-border trade, shaping KG Logistics' vision from day one." },
              { name: "Sakthi Sundaram V", role: "Co-Founder & Director of Operations", bio: "Leads day-to-day operations, carrier relationships and network expansion across sea, road, rail and air." },
              { name: "Abhishek", role: "Co-Founder & Director of Strategy", bio: "Drives technology, growth strategy and customer experience — ensuring every client receives world-class service." },
            ].map((f) => (
              <div key={f.name} className="p-8 rounded-2xl glass border border-border text-center shadow-[var(--shadow-card)] hover:-translate-y-1 transition">
                <div className="mx-auto grid h-20 w-20 place-items-center rounded-full bg-[image:var(--gradient-primary)] text-white ring-4 ring-[var(--accent-yellow)]/40">
                  <User className="h-9 w-9" />
                </div>
                <h3 className="mt-5 text-lg font-bold text-[var(--dark)]">{f.name}</h3>
                <div className="mt-1 text-xs font-semibold uppercase tracking-wider text-[var(--primary)]">{f.role}</div>
                <p className="mt-4 text-sm text-muted-foreground leading-relaxed">{f.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}