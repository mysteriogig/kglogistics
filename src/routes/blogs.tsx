import { createFileRoute, Link } from "@tanstack/react-router";
import { Calendar, ArrowRight, User } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";

export const Route = createFileRoute("/blogs")({
  head: () => ({
    meta: [
      { title: "Blogs — Universe Freight Logistics" },
      { name: "description", content: "Insights on freight forwarding, customs, and global trade from Universe Freight Logistics." },
    ],
  }),
  component: Blogs,
});

const posts = [
  { title: "Understanding INCOTERMS 2020: A Practical Guide", date: "Nov 28, 2026", author: "Universe Team", excerpt: "A clear breakdown of the eleven INCOTERMS and how to choose the right one for your shipment." },
  { title: "Sea Freight vs Air Freight: Which Is Right For You?", date: "Nov 15, 2026", author: "Universe Team", excerpt: "Cost, transit time, reliability — here's how to make the right choice for your cargo." },
  { title: "How to Reduce Customs Delays at Indian Ports", date: "Oct 30, 2026", author: "Universe Team", excerpt: "Documentation tips and process improvements that can save you days at customs." },
  { title: "Project Cargo: 5 Things to Plan in Advance", date: "Oct 12, 2026", author: "Universe Team", excerpt: "Moving oversized cargo? Here are the five things every shipper should plan well in advance." },
  { title: "Warehouse Best Practices for E-Commerce", date: "Sep 24, 2026", author: "Universe Team", excerpt: "How modern warehouse design helps online sellers ship faster and reduce errors." },
  { title: "Global Trade Outlook 2027", date: "Sep 04, 2026", author: "Universe Team", excerpt: "Our take on what's coming for exporters and importers in the year ahead." },
];

function Blogs() {
  return (
    <>
      <PageHero title="Blogs & Insights" crumbs={[{ label: "Home", to: "/" }, { label: "Blogs" }]} />
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((p, i) => (
            <article key={i} className="group rounded-xl bg-card border border-border shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-elegant)] hover:-translate-y-1 transition-all overflow-hidden">
              <div className="aspect-[16/10] bg-[image:var(--gradient-primary)] relative overflow-hidden">
                <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_30%_30%,white,transparent_60%)]" />
                <div className="absolute bottom-3 left-3 right-3 text-white text-xs font-semibold flex items-center gap-3 opacity-90">
                  <span className="flex items-center gap-1"><Calendar className="h-3 w-3" />{p.date}</span>
                  <span className="flex items-center gap-1"><User className="h-3 w-3" />{p.author}</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-bold text-[var(--dark)] group-hover:text-[var(--primary)] transition leading-snug">{p.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{p.excerpt}</p>
                <Link to="/blogs" className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-[var(--primary)] group-hover:gap-2 transition-all">Read more <ArrowRight className="h-3.5 w-3.5" /></Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}