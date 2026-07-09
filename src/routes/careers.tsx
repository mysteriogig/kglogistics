import { createFileRoute, Link } from "@tanstack/react-router";
import { Briefcase, MapPin, Clock, ArrowRight, Sparkles, Plus, Pencil, Trash2, X, Save, Shield } from "lucide-react";
import { useEffect, useRef, useState } from "react";
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

type Opening = { title: string; type: string; location: string; desc: string };

const defaultOpenings: Opening[] = [
  { title: "Operations Executive", type: "Full-time", location: "Coimbatore", desc: "Coordinate day-to-day sea, road and air shipments with our carrier and customer network." },
  { title: "Customs Documentation Officer", type: "Full-time", location: "Coimbatore", desc: "Prepare and file import/export documents, coordinate with CHA and monitor clearance progress." },
  { title: "Sales & Business Development Manager", type: "Full-time", location: "Chennai / Coimbatore", desc: "Grow our client base across South India, own key accounts, and hit revenue targets." },
  { title: "Warehouse Supervisor", type: "Full-time", location: "Coimbatore", desc: "Oversee inbound, outbound and inventory accuracy at our distribution warehouse." },
];

const STORAGE_KEY = "kg_careers_openings";

function Careers() {
  const [openings, setOpenings] = useState<Opening[]>(defaultOpenings);
  const [admin, setAdmin] = useState(false);
  const [editing, setEditing] = useState<{ index: number | null; data: Opening } | null>(null);
  const clicks = useRef<number[]>([]);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) setOpenings(JSON.parse(raw));
    } catch {}
  }, []);

  const persist = (next: Opening[]) => {
    setOpenings(next);
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(next)); } catch {}
  };

  const onHeadingClick = () => {
    const now = Date.now();
    clicks.current = clicks.current.filter((t) => now - t < 4000);
    clicks.current.push(now);
    if (clicks.current.length >= 5) {
      clicks.current = [];
      setAdmin(true);
    }
  };

  const startAdd = () => setEditing({ index: null, data: { title: "", type: "Full-time", location: "", desc: "" } });
  const startEdit = (i: number) => setEditing({ index: i, data: { ...openings[i] } });
  const remove = (i: number) => {
    if (!confirm("Delete this role?")) return;
    persist(openings.filter((_, idx) => idx !== i));
  };
  const save = () => {
    if (!editing) return;
    const { index, data } = editing;
    if (!data.title.trim()) return;
    const next = index === null ? [...openings, data] : openings.map((o, i) => (i === index ? data : o));
    persist(next);
    setEditing(null);
  };

  return (
    <>
      <PageHero title="Careers" crumbs={[{ label: "Home", to: "/" }, { label: "Careers" }]} image={careersHero} />
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center max-w-2xl mx-auto">
            <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-[var(--primary)]">
              <Sparkles className="h-3.5 w-3.5 text-[var(--accent-yellow)]" /> Join The Team
            </span>
            <h2
              onClick={onHeadingClick}
              className="mt-3 text-3xl sm:text-4xl font-bold text-[var(--dark)] cursor-pointer select-none"
            >
              Build your career at KG Logistics
            </h2>
            <p className="mt-3 text-muted-foreground">We're a growing, people-first logistics company. If you love solving problems and moving the world, we'd love to hear from you.</p>
            {admin && (
              <div className="mt-5 inline-flex items-center gap-3 rounded-full glass border border-[var(--primary)]/30 px-4 py-2 text-xs font-semibold text-[var(--primary-dark)]">
                <Shield className="h-3.5 w-3.5 text-[var(--primary)]" /> Admin mode unlocked
                <button onClick={startAdd} className="inline-flex items-center gap-1 rounded-full bg-[image:var(--gradient-primary)] text-white px-3 py-1.5 hover:opacity-95">
                  <Plus className="h-3.5 w-3.5" /> Add role
                </button>
                <button onClick={() => setAdmin(false)} className="text-muted-foreground hover:text-[var(--primary)]">Exit</button>
              </div>
            )}
          </div>

          <div className="mt-12 grid sm:grid-cols-2 gap-6">
            {openings.map((o, i) => (
              <div key={i} className="p-7 rounded-2xl glass border border-border shadow-[var(--shadow-card)] hover:-translate-y-1 transition relative">
                {admin && (
                  <div className="absolute top-3 right-3 flex gap-1.5">
                    <button onClick={() => startEdit(i)} aria-label="Edit" className="grid h-8 w-8 place-items-center rounded-full bg-white/80 border border-border text-[var(--primary)] hover:bg-[var(--primary)] hover:text-white">
                      <Pencil className="h-3.5 w-3.5" />
                    </button>
                    <button onClick={() => remove(i)} aria-label="Delete" className="grid h-8 w-8 place-items-center rounded-full bg-white/80 border border-border text-destructive hover:bg-destructive hover:text-white">
                      <Trash2 className="h-3.5 w-3.5" />
                    </button>
                  </div>
                )}
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

      {editing && (
        <div className="fixed inset-0 z-50 grid place-items-center bg-black/50 backdrop-blur-sm p-4" onClick={() => setEditing(null)}>
          <div onClick={(e) => e.stopPropagation()} className="w-full max-w-lg rounded-2xl bg-white border border-border shadow-[var(--shadow-elegant)] p-6">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-bold text-[var(--dark)]">{editing.index === null ? "Add role" : "Edit role"}</h3>
              <button onClick={() => setEditing(null)} aria-label="Close" className="text-muted-foreground hover:text-[var(--dark)]"><X className="h-5 w-5" /></button>
            </div>
            <div className="mt-5 space-y-4">
              <Field label="Title">
                <input value={editing.data.title} onChange={(e) => setEditing({ ...editing, data: { ...editing.data, title: e.target.value } })} className="input" placeholder="Operations Executive" />
              </Field>
              <div className="grid grid-cols-2 gap-3">
                <Field label="Type">
                  <input value={editing.data.type} onChange={(e) => setEditing({ ...editing, data: { ...editing.data, type: e.target.value } })} className="input" placeholder="Full-time" />
                </Field>
                <Field label="Location">
                  <input value={editing.data.location} onChange={(e) => setEditing({ ...editing, data: { ...editing.data, location: e.target.value } })} className="input" placeholder="Coimbatore" />
                </Field>
              </div>
              <Field label="Description">
                <textarea rows={4} value={editing.data.desc} onChange={(e) => setEditing({ ...editing, data: { ...editing.data, desc: e.target.value } })} className="input resize-none" placeholder="Short summary of the role" />
              </Field>
            </div>
            <div className="mt-6 flex justify-end gap-2">
              <button onClick={() => setEditing(null)} className="px-4 py-2 rounded-md border border-border text-sm font-semibold hover:bg-accent">Cancel</button>
              <button onClick={save} className="inline-flex items-center gap-1.5 rounded-md bg-[image:var(--gradient-primary)] text-white px-4 py-2 text-sm font-bold hover:opacity-95">
                <Save className="h-4 w-4" /> Save
              </button>
            </div>
          </div>
          <style>{`.input{width:100%;padding:0.6rem 0.85rem;border:1px solid hsl(var(--border));border-radius:0.5rem;background:white;font-size:0.875rem;outline:none}.input:focus{box-shadow:0 0 0 2px var(--primary)}`}</style>
        </div>
      )}
    </>
  );
}