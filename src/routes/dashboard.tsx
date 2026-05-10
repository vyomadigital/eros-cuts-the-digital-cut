import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";
import { Button } from "@/components/ui/button";
import { dashboardKpis, upcomingBookings, revenueByService, weeklyRevenue, testimonials } from "@/lib/mockData";
import { ArrowUpRight, Calendar, Star, TrendingUp, Users, Bell, Search } from "lucide-react";

export const Route = createFileRoute("/dashboard")({
  head: () => ({
    meta: [
      { title: "Owner Dashboard — EROS CUTS" },
      { name: "description", content: "A live look at the operations dashboard powering EROS CUTS." },
    ],
  }),
  component: Dashboard,
});

function Dashboard() {
  return (
    <PageShell hideFooter>
      <section className="px-4 sm:px-6 md:px-8 pb-16">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-wrap items-center justify-between gap-4 py-8">
            <div>
              <div className="text-[0.7rem] tracking-[0.4em] uppercase text-gold">Demo Mode</div>
              <h1 className="font-display text-3xl md:text-4xl text-cream mt-2">Good evening, Eros.</h1>
              <p className="text-sm text-muted-foreground mt-1">Here's how the chair is performing today.</p>
            </div>
            <div className="flex items-center gap-2">
              <div className="hidden md:flex items-center gap-2 rounded-lg border border-border px-3 py-2 bg-card">
                <Search size={14} className="text-muted-foreground" />
                <input placeholder="Search bookings…" className="bg-transparent text-sm outline-none placeholder:text-muted-foreground" />
              </div>
              <button className="grid h-10 w-10 place-items-center rounded-lg border border-border bg-card relative">
                <Bell size={16} />
                <span className="absolute top-2 right-2 h-2 w-2 rounded-full bg-gold animate-pulse" />
              </button>
              <Button asChild variant="gold" size="sm">
                <Link to="/booking">+ New Booking</Link>
              </Button>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {dashboardKpis.map((k, i) => (
              <div key={k.label} className="luxury-card rounded-xl p-5 animate-fade-up" style={{ animationDelay: `${i * 60}ms` }}>
                <div className="text-[0.65rem] uppercase tracking-[0.25em] text-muted-foreground">{k.label}</div>
                <div className="font-condensed text-3xl text-cream mt-2">{k.value}</div>
                <div className="text-xs text-emerald-400 mt-2 flex items-center gap-1">
                  <ArrowUpRight size={12} /> {k.delta} vs last week
                </div>
              </div>
            ))}
          </div>

          <div className="grid gap-5 lg:grid-cols-3 mt-6">
            <div className="luxury-card rounded-2xl p-6 lg:col-span-2">
              <div className="flex items-center justify-between mb-5">
                <div>
                  <div className="text-[0.65rem] uppercase tracking-[0.25em] text-muted-foreground">Last 7 days</div>
                  <div className="font-display text-xl text-cream mt-1">Revenue trend</div>
                </div>
                <div className="flex items-center gap-1 text-xs text-emerald-400">
                  <TrendingUp size={14} /> +28%
                </div>
              </div>
              <BarChart data={weeklyRevenue} />
            </div>

            <div className="luxury-card rounded-2xl p-6">
              <div className="text-[0.65rem] uppercase tracking-[0.25em] text-muted-foreground">Service mix</div>
              <div className="font-display text-xl text-cream mt-1 mb-5">Revenue by service</div>
              <div className="space-y-4">
                {revenueByService.map((r) => (
                  <div key={r.name}>
                    <div className="flex justify-between text-sm">
                      <span className="text-cream">{r.name}</span>
                      <span className="text-muted-foreground">{r.value}%</span>
                    </div>
                    <div className="mt-2 h-1.5 rounded-full bg-secondary overflow-hidden">
                      <div
                        className="h-full bg-gradient-gold rounded-full transition-all"
                        style={{ width: `${r.value * 2.5}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="grid gap-5 lg:grid-cols-3 mt-6">
            <div className="luxury-card rounded-2xl p-6 lg:col-span-2">
              <div className="flex items-center justify-between mb-5">
                <div>
                  <div className="text-[0.65rem] uppercase tracking-[0.25em] text-muted-foreground">Upcoming</div>
                  <div className="font-display text-xl text-cream mt-1 flex items-center gap-2"><Calendar size={16} className="text-gold" /> Today's bookings</div>
                </div>
                <span className="text-xs text-muted-foreground">{upcomingBookings.length} chairs</span>
              </div>
              <div className="overflow-hidden rounded-lg border border-border">
                <table className="w-full text-sm">
                  <thead className="bg-secondary/40 text-[0.65rem] uppercase tracking-[0.2em] text-muted-foreground">
                    <tr>
                      <th className="text-left px-4 py-3">Time</th>
                      <th className="text-left px-4 py-3">Customer</th>
                      <th className="text-left px-4 py-3 hidden sm:table-cell">Service</th>
                      <th className="text-right px-4 py-3">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {upcomingBookings.map((b) => (
                      <tr key={b.time} className="border-t border-border hover:bg-secondary/30 transition-colors">
                        <td className="px-4 py-3 font-condensed text-base text-cream">{b.time}</td>
                        <td className="px-4 py-3 text-cream">{b.name}</td>
                        <td className="px-4 py-3 text-muted-foreground hidden sm:table-cell">{b.service}</td>
                        <td className="px-4 py-3 text-right">
                          <span className={`text-[0.65rem] uppercase tracking-[0.2em] px-2 py-1 rounded-full border ${
                            b.status === "Confirmed"
                              ? "border-emerald-500/40 text-emerald-400"
                              : "border-amber-500/40 text-amber-400"
                          }`}>
                            {b.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="luxury-card rounded-2xl p-6">
              <div className="text-[0.65rem] uppercase tracking-[0.25em] text-muted-foreground">Live feed</div>
              <div className="font-display text-xl text-cream mt-1 mb-5 flex items-center gap-2">
                <Star size={16} className="text-gold" /> Recent reviews
              </div>
              <div className="space-y-4 max-h-80 overflow-y-auto pr-1">
                {testimonials.slice(0, 4).map((t) => (
                  <div key={t.name} className="border-b border-border pb-3 last:border-0">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-cream">{t.name}</span>
                      <span className="text-xs text-gold flex items-center gap-1"><Star size={11} className="fill-gold" /> {t.rating}.0</span>
                    </div>
                    <p className="text-xs text-muted-foreground mt-1 line-clamp-2 italic">"{t.text}"</p>
                    <div className="text-[0.65rem] text-muted-foreground mt-1.5">{t.when}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-6 luxury-card rounded-2xl p-6 flex flex-col md:flex-row items-center gap-5 justify-between">
            <div className="flex items-center gap-4">
              <span className="grid h-12 w-12 place-items-center rounded-full bg-gold/10 border border-gold/30 text-gold">
                <Users size={20} />
              </span>
              <div>
                <div className="font-display text-lg text-cream">9 new customers this week</div>
                <div className="text-sm text-muted-foreground">5 came from Instagram, 4 from Google.</div>
              </div>
            </div>
            <Button asChild variant="outlineGold"><Link to="/">View public site</Link></Button>
          </div>
        </div>
      </section>
    </PageShell>
  );
}

function BarChart({ data }: { data: { day: string; value: number }[] }) {
  const max = Math.max(...data.map((d) => d.value));
  return (
    <div className="flex items-end justify-between gap-2 h-44">
      {data.map((d, i) => (
        <div key={d.day} className="flex-1 flex flex-col items-center gap-2">
          <div className="relative w-full flex-1 flex items-end">
            <div
              className="w-full rounded-t-md bg-gradient-to-t from-gold/60 to-gold transition-all hover:brightness-125 animate-fade-up"
              style={{ height: `${(d.value / max) * 100}%`, animationDelay: `${i * 70}ms` }}
            />
          </div>
          <div className="text-[0.65rem] uppercase tracking-[0.2em] text-muted-foreground">{d.day}</div>
        </div>
      ))}
    </div>
  );
}
