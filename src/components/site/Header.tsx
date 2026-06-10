import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, ChevronDown, Facebook, Linkedin, Twitter, Instagram, Phone, Mail, Ship, Plane, Truck, Train } from "lucide-react";
import { cn } from "@/lib/utils";

const freightServices = [
  { name: "Sea Freight Services", to: "/services/sea-freight", icon: Ship },
  { name: "Air Freight Services", to: "/services/air-freight", icon: Plane },
  { name: "Road Freight Services", to: "/services/road-freight", icon: Truck },
  { name: "Rail Freight Services", to: "/services/rail-freight", icon: Train },
];

const otherServices = [
  "Customs Brokerage",
  "Warehouse & Distribution",
  "Transportation",
  "Value Added Services",
  "Export & Import Documentation",
  "Portable Container Decors",
  "Project Cargo",
  "Marine Insurance",
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [mobileFreight, setMobileFreight] = useState(false);
  const [mobileOther, setMobileOther] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={cn("sticky top-0 z-50 w-full transition-all", scrolled ? "bg-background/95 backdrop-blur shadow-sm" : "bg-background")}>
      {/* Top bar */}
      <div className="hidden md:block border-b border-border bg-[var(--dark)] text-white text-xs">
        <div className="mx-auto max-w-7xl px-4 py-2 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <a href="tel:+919566565005" className="flex items-center gap-1.5 hover:text-[var(--primary-glow)]"><Phone className="h-3 w-3" />+91 95665 65005</a>
            <a href="mailto:info@universefreightlogistics.com" className="flex items-center gap-1.5 hover:text-[var(--primary-glow)]"><Mail className="h-3 w-3" />info@universefreightlogistics.com</a>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-white/70">Follow us:</span>
            <a href="#" aria-label="Facebook" className="hover:text-[var(--primary-glow)]"><Facebook className="h-3.5 w-3.5" /></a>
            <a href="#" aria-label="LinkedIn" className="hover:text-[var(--primary-glow)]"><Linkedin className="h-3.5 w-3.5" /></a>
            <a href="#" aria-label="Twitter" className="hover:text-[var(--primary-glow)]"><Twitter className="h-3.5 w-3.5" /></a>
            <a href="#" aria-label="Instagram" className="hover:text-[var(--primary-glow)]"><Instagram className="h-3.5 w-3.5" /></a>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex h-16 lg:h-20 items-center justify-between gap-4">
          <Link to="/" className="flex items-center gap-2.5 min-w-0">
            <div className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-[image:var(--gradient-primary)] text-white shadow-md">
              <Ship className="h-5 w-5" />
            </div>
            <div className="min-w-0">
              <div className="font-bold text-sm sm:text-base leading-tight text-[var(--dark)] truncate">Universe Freight</div>
              <div className="text-[10px] sm:text-xs text-muted-foreground leading-tight">Logistics Pvt. Ltd.</div>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <Dropdown label="Freight Services">
              {freightServices.map((s) => (
                <Link key={s.to} to={s.to} className="flex items-center gap-2 px-4 py-2.5 text-sm hover:bg-accent hover:text-[var(--primary-dark)]">
                  <s.icon className="h-4 w-4 text-[var(--primary)]" />{s.name}
                </Link>
              ))}
            </Dropdown>
            <Dropdown label="Other Services">
              {otherServices.map((s) => (
                <Link key={s} to="/services" className="block px-4 py-2.5 text-sm hover:bg-accent hover:text-[var(--primary-dark)]">{s}</Link>
              ))}
            </Dropdown>
            <NavLink to="/tracking">Documents</NavLink>
            <NavLink to="/gallery">Gallery</NavLink>
            <NavLink to="/blogs">Blogs</NavLink>
            <NavLink to="/contact">Contact</NavLink>
          </nav>

          <div className="flex items-center gap-2">
            <Link to="/tracking" className="hidden md:inline-flex items-center rounded-md bg-[image:var(--gradient-primary)] px-4 py-2 text-sm font-semibold text-white shadow-md hover:opacity-95 transition">
              Track Shipment
            </Link>
            <button onClick={() => setOpen(!open)} className="lg:hidden grid h-10 w-10 place-items-center rounded-md border border-border" aria-label="Menu">
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden border-t border-border bg-background">
          <nav className="mx-auto max-w-7xl px-4 py-3 flex flex-col">
            <MobileLink to="/" onClick={() => setOpen(false)}>Home</MobileLink>
            <MobileLink to="/about" onClick={() => setOpen(false)}>About</MobileLink>
            <button onClick={() => setMobileFreight(!mobileFreight)} className="flex items-center justify-between py-3 text-sm font-medium border-b border-border">
              Freight Services <ChevronDown className={cn("h-4 w-4 transition", mobileFreight && "rotate-180")} />
            </button>
            {mobileFreight && (
              <div className="pl-4 py-2 border-b border-border">
                {freightServices.map((s) => (
                  <Link key={s.to} to={s.to} onClick={() => setOpen(false)} className="block py-2 text-sm text-muted-foreground hover:text-[var(--primary)]">{s.name}</Link>
                ))}
              </div>
            )}
            <button onClick={() => setMobileOther(!mobileOther)} className="flex items-center justify-between py-3 text-sm font-medium border-b border-border">
              Other Services <ChevronDown className={cn("h-4 w-4 transition", mobileOther && "rotate-180")} />
            </button>
            {mobileOther && (
              <div className="pl-4 py-2 border-b border-border">
                {otherServices.map((s) => (
                  <Link key={s} to="/services" onClick={() => setOpen(false)} className="block py-2 text-sm text-muted-foreground hover:text-[var(--primary)]">{s}</Link>
                ))}
              </div>
            )}
            <MobileLink to="/tracking" onClick={() => setOpen(false)}>Documents</MobileLink>
            <MobileLink to="/gallery" onClick={() => setOpen(false)}>Gallery</MobileLink>
            <MobileLink to="/blogs" onClick={() => setOpen(false)}>Blogs</MobileLink>
            <MobileLink to="/contact" onClick={() => setOpen(false)}>Contact</MobileLink>
            <Link to="/tracking" onClick={() => setOpen(false)} className="mt-3 inline-flex items-center justify-center rounded-md bg-[image:var(--gradient-primary)] px-4 py-3 text-sm font-semibold text-white shadow-md">
              Track Shipment
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}

function NavLink({ to, children }: { to: string; children: React.ReactNode }) {
  return (
    <Link
      to={to}
      className="px-3 py-2 text-sm font-medium text-[var(--dark)] hover:text-[var(--primary)] transition"
      activeProps={{ className: "px-3 py-2 text-sm font-semibold text-[var(--primary)]" }}
      activeOptions={{ exact: to === "/" }}
    >
      {children}
    </Link>
  );
}

function MobileLink({ to, onClick, children }: { to: string; onClick: () => void; children: React.ReactNode }) {
  return (
    <Link to={to} onClick={onClick} className="py-3 text-sm font-medium border-b border-border text-[var(--dark)]">{children}</Link>
  );
}

function Dropdown({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="relative group">
      <button className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-[var(--dark)] hover:text-[var(--primary)]">
        {label} <ChevronDown className="h-3.5 w-3.5" />
      </button>
      <div className="invisible opacity-0 group-hover:visible group-hover:opacity-100 transition absolute left-0 top-full pt-2 w-64 z-50">
        <div className="bg-popover border border-border rounded-md shadow-[var(--shadow-elegant)] py-2">{children}</div>
      </div>
    </div>
  );
}