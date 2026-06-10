import { Link } from "@tanstack/react-router";
import { ChevronRight } from "lucide-react";
import trackingHero from "@/assets/tracking-hero.jpg";

export function PageHero({ title, crumbs, image = trackingHero }: { title: string; crumbs: { label: string; to?: string }[]; image?: string }) {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <img src={image} alt="" className="h-full w-full object-cover" width={1920} height={500} />
        <div className="absolute inset-0 bg-[image:var(--gradient-hero)]" />
      </div>
      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:py-24 lg:py-28 text-white">
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight">{title}</h1>
        <nav className="mt-4 flex flex-wrap items-center gap-1 text-sm text-white/85">
          {crumbs.map((c, i) => (
            <span key={i} className="flex items-center gap-1">
              {c.to ? <Link to={c.to} className="hover:text-[var(--primary-glow)]">{c.label}</Link> : <span>{c.label}</span>}
              {i < crumbs.length - 1 && <ChevronRight className="h-3.5 w-3.5" />}
            </span>
          ))}
        </nav>
      </div>
    </section>
  );
}