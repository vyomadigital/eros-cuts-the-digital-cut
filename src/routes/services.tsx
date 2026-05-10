import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell, SectionHeader } from "@/components/PageShell";
import { Button } from "@/components/ui/button";
import { services } from "@/lib/mockData";
import { ArrowRight, Check, Clock } from "lucide-react";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services & Pricing — EROS CUTS" },
      { name: "description", content: "Signature cuts, skin fades, beard sculpting, and the Royal package. Transparent pricing, master barbers, in Kathmandu." },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <PageShell>
      <section className="px-6 md:px-8 pt-16 pb-12">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="The Full Menu"
            title="Crafted services. Honest pricing."
            subtitle="Every service includes consultation, hot towel, and a finishing ritual. Tip is never expected."
          />

          <div className="grid gap-6 lg:grid-cols-2">
            {services.map((s, i) => (
              <article key={s.id} className="luxury-card rounded-2xl p-8 animate-fade-up" style={{ animationDelay: `${i * 70}ms` }}>
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="text-[0.65rem] tracking-[0.3em] uppercase text-gold/80">
                      {s.popular ? "Most Booked" : "Service"}
                    </div>
                    <h3 className="font-display text-3xl text-cream mt-2">{s.name}</h3>
                    <p className="text-sm text-gold/80 mt-1">{s.tagline}</p>
                  </div>
                  <div className="text-right shrink-0">
                    <div className="font-condensed text-4xl text-gradient-gold">
                      {s.price === 0 ? "Free" : `Rs ${s.price.toLocaleString()}`}
                    </div>
                    <div className="flex items-center gap-1 text-xs text-muted-foreground justify-end mt-1">
                      <Clock size={12} /> {s.duration} min
                    </div>
                  </div>
                </div>
                <p className="mt-5 text-muted-foreground leading-relaxed text-sm">{s.description}</p>
                <ul className="mt-6 grid grid-cols-2 gap-2 text-sm">
                  {["Consultation", "Hot towel", "Finishing wax", "Aftercare advice"].map((f) => (
                    <li key={f} className="flex items-center gap-2 text-muted-foreground">
                      <Check size={14} className="text-gold" /> {f}
                    </li>
                  ))}
                </ul>
                <div className="mt-7 flex justify-between items-center pt-5 border-t border-border">
                  <span className="text-xs text-muted-foreground">Includes 5% local tax</span>
                  <Button asChild variant="gold">
                    <Link to="/booking" search={{ service: s.id } as never}>
                      Book this <ArrowRight size={14} />
                    </Link>
                  </Button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}
