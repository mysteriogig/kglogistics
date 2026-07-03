import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { Lock, Shield, LogIn } from "lucide-react";

export const Route = createFileRoute("/careers/login")({
  head: () => ({
    meta: [
      { title: "Careers Admin — KG Logistics" },
      { name: "robots", content: "noindex, nofollow" },
    ],
  }),
  component: CareersLogin,
});

function CareersLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    // Demo credentials — replace with real auth when backend is wired up.
    if (email === "admin@kglogistics.in" && password === "kg-admin-2026") {
      try { localStorage.setItem("kg_careers_admin", "1"); } catch {}
      navigate({ to: "/careers" });
    } else {
      setError("Invalid credentials. Please try again.");
    }
  };

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center py-20 px-4">
      <div className="absolute inset-0 bg-gradient-to-br from-[#001a35]/95 via-[#003a73]/90 to-[#004990]/85 -z-10" />
      <div className="w-full max-w-md rounded-2xl glass border border-white/40 p-8 shadow-[var(--shadow-elegant)]">
        <div className="flex items-center gap-3">
          <div className="grid h-12 w-12 place-items-center rounded-xl bg-[image:var(--gradient-primary)] text-white">
            <Shield className="h-6 w-6" />
          </div>
          <div>
            <h1 className="text-xl font-bold text-[var(--dark)]">Careers Admin</h1>
            <p className="text-xs text-muted-foreground">Restricted — authorized personnel only</p>
          </div>
        </div>

        <form onSubmit={submit} className="mt-8 space-y-4">
          <div>
            <label className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Email</label>
            <input required type="email" value={email} onChange={(e) => setEmail(e.target.value)}
              className="mt-1.5 w-full px-4 py-3 rounded-md border border-border bg-white/70 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
              placeholder="admin@kglogistics.in" />
          </div>
          <div>
            <label className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Password</label>
            <div className="relative mt-1.5">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <input required type="password" value={password} onChange={(e) => setPassword(e.target.value)}
                className="w-full pl-10 pr-4 py-3 rounded-md border border-border bg-white/70 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
                placeholder="••••••••" />
            </div>
          </div>
          {error && <p className="text-sm text-destructive font-semibold">{error}</p>}
          <button type="submit" className="w-full inline-flex items-center justify-center gap-2 rounded-md bg-[image:var(--gradient-primary)] px-6 py-3 text-sm font-bold text-white shadow-md hover:opacity-95">
            <LogIn className="h-4 w-4" /> Sign In
          </button>
        </form>

        <p className="mt-6 text-[11px] text-muted-foreground text-center">
          Secret entry: click <span className="font-semibold text-[var(--primary)]">Careers</span> 5 times in the menu.
        </p>
      </div>
    </section>
  );
}