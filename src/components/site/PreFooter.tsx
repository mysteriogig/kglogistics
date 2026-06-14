import { Link } from "@tanstack/react-router";

export function PreFooter() {
  return (
    <section className="relative overflow-hidden border-t border-white/10">
      <div className="absolute inset-0 glass-dark" />
      <div className="relative mx-auto max-w-7xl px-4 py-16 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-white">KG Logistics</h2>
        <p className="mt-2 text-lg font-semibold text-[var(--primary-glow)] tracking-wide">Cargo Services</p>
        <p className="mt-4 mx-auto max-w-2xl text-sm sm:text-base text-white/80 leading-relaxed">
          One of the most trusted logistics partners in India, delivering end-to-end freight forwarding, customs, and supply chain solutions worldwide.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link to="/contact" className="rounded-full glass-btn-primary px-7 py-3.5 text-sm font-bold hover:-translate-y-0.5 transition">
            Get a Free Quote
          </Link>
          <Link to="/tracking" className="rounded-full glass-btn px-7 py-3.5 text-sm font-bold text-white hover:-translate-y-0.5 transition">
            Track Shipment
          </Link>
        </div>
      </div>
    </section>
  );
}
