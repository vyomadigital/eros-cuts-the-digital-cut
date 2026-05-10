import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell, SectionHeader } from "@/components/PageShell";
import { stylists, stats } from "@/lib/mockData";
import { Button } from "@/components/ui/button";
import interior from "@/assets/interior.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "Our Story — EROS CUTS" },
      { name: "description", content: "Founded in 2017, EROS CUTS blends heritage barber craft with modern luxury. Meet the team behind Kathmandu's premier grooming studio." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <PageShell>
      <section className="px-6 md:px-8 pt-16 pb-20">
        <div className="mx-auto max-w-5xl text-center">
          <div className="text-[0.7rem] tracking-[0.4em] uppercase text-gold mb-6">Our Story</div>
          <h1 className="font-display text-5xl md:text-7xl text-cream leading-[1.02]">
            Built for the men who notice the details.
          </h1>
          <p className="mt-7 text-muted-foreground text-lg leading-relaxed max-w-2xl mx-auto">
            EROS CUTS opened on a quiet corner of Durbar Marg in 2017 with a simple thesis:
            Kathmandu deserves a grooming experience that doesn't ask you to compromise.
            Eight years later, we're still doing one thing — cutting hair like it matters.
          </p>
        </div>
      </section>

      <section className="px-6 md:px-8 pb-24">
        <div className="mx-auto max-w-7xl relative">
          <img src={interior} alt="EROS CUTS interior" loading="lazy" className="w-full h-[60vh] object-cover rounded-2xl shadow-luxury" />
          <div className="absolute inset-0 bg-gradient-to-t from-onyx via-transparent rounded-2xl" />
        </div>
      </section>

      <section className="px-6 md:px-8 pb-24">
        <div className="mx-auto max-w-6xl grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((s) => (
            <div key={s.label} className="luxury-card rounded-xl p-6 text-center">
              <div className="font-condensed text-5xl text-gradient-gold">{s.value}{s.suffix ?? ""}</div>
              <div className="mt-2 text-[0.65rem] uppercase tracking-[0.25em] text-muted-foreground">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="px-6 md:px-8 pb-32">
        <div className="mx-auto max-w-7xl">
          <SectionHeader eyebrow="The Team" title="Master barbers. Real obsession." />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {stylists.map((p) => (
              <div key={p.name} className="luxury-card rounded-xl p-7 text-center">
                <div className="mx-auto h-20 w-20 grid place-items-center rounded-full bg-gradient-gold text-gold-foreground font-display text-3xl">
                  {p.name[0]}
                </div>
                <div className="mt-5 font-display text-xl text-cream">{p.name}</div>
                <div className="text-xs text-gold/80 tracking-[0.2em] uppercase mt-1">{p.role}</div>
                <div className="mt-4 text-sm text-muted-foreground">{p.years} years in the chair</div>
              </div>
            ))}
          </div>
          <div className="mt-14 text-center">
            <Button asChild variant="gold" size="xl">
              <Link to="/booking">Book With The Team</Link>
            </Button>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
