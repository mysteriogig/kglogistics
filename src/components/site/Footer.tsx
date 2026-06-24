import { Link } from "@tanstack/react-router";
import { Phone, Mail, MapPin, Facebook, Linkedin, Twitter, Instagram } from "lucide-react";
import logoAsset from "@/assets/kg-logo-new.png.asset.json";

export function Footer() {
  return (
    <footer className="relative glass-dark text-white/85 border-t border-white/10">
      <div className="mx-auto max-w-7xl px-4 py-14 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <Link to="/">
            <img src={logoAsset.url} alt="KG Logistics" className="h-12 w-auto" />
          </Link>
          <p className="mt-4 text-sm leading-relaxed">
          One of the most trusted logistics partners in India, delivering end-to-end domestic forwarding, customs, and supply chain solutions worldwide.
          </p>
          <div className="mt-5 flex items-center gap-3">
            {[Facebook, Linkedin, Twitter, Instagram].map((Icon, i) => (
              <a key={i} href="#" className="grid h-9 w-9 place-items-center rounded-full bg-white/10 hover:bg-[var(--primary)] transition">
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-semibold text-white mb-4">Quick Links</h4>
          <ul className="space-y-2.5 text-sm">
            {[["Home","/"],["About Us","/about"],["Services","/services"],["Gallery","/gallery"],["Blogs","/blogs"],["Contact","/contact"]].map(([l,h]) => (
              <li key={l}><Link to={h} className="hover:text-[var(--primary-glow)] transition">{l}</Link></li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-white mb-4">Our Services</h4>
          <ul className="space-y-2.5 text-sm">
            {["Sea Domestic","Road Domestic","Rail Domestic","Customs Brokerage","Warehouse & Distribution","Project Cargo"].map((s) => (
              <li key={s}><Link to="/services" className="hover:text-[var(--primary-glow)] transition">{s}</Link></li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-white mb-4">Get In Touch</h4>
          <ul className="space-y-3 text-sm">
            <li className="flex gap-3"><MapPin className="h-5 w-5 shrink-0 text-[var(--primary-glow)]" />Door No.28-29, 2nd Floor, 100 feet road, DR Rajendra Prasad Road, Near Muthumariyamman Temple, Gandhipuram, Coimbatore - 641 012</li>
            <li className="flex gap-3"><Phone className="h-5 w-5 shrink-0 text-[var(--primary-glow)]" /><a href="tel:+916381380457">+91 6381380457</a></li>
            <li className="flex gap-3"><Phone className="h-5 w-5 shrink-0 text-[var(--primary-glow)]" /><a href="tel:+918778500577">+91 8778500577</a></li>
            <li className="flex gap-3"><Mail className="h-5 w-5 shrink-0 text-[var(--primary-glow)]" /><a href="mailto:kglogistics.cbe@gmail.com" className="break-all">kglogistics.cbe@gmail.com</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 py-5 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-white/60">
          <p>© {new Date().getFullYear()} KG Logistics All rights reserved.</p>
          <p>Designed with care for global trade.</p>
        </div>
      </div>
    </footer>
  );
}