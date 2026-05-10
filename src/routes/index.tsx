import { createFileRoute, Link } from "@tanstack/react-router";
import heroImg from "@/assets/hero.jpg";
import interior from "@/assets/interior.jpg";
import tools from "@/assets/tools.jpg";
import { PageShell, SectionHeader } from "@/components/PageShell";
import { Button } from "@/components/ui/button";
import { services, gallery, testimonials, stats, todaysSlots } from "@/lib/mockData";
import { Star, Clock, MapPin, ArrowRight, Scissors, ShieldCheck, Sparkles } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "EROS CUTS — Premium Barbershop in Kathmandu" },
      { name: "description", content: "Cinematic grooming studio in Kathmandu. Master barbers, signature cuts, beard sculpting, and the Royal package. Book your chair today." },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <PageShell>
      <Hero />
      <TrustBar />
      <Services />
      <ExperienceSplit />
      <Gallery />
      <Testimonials />
      <BookingCTA />
    </PageShell>
  );
}

function Hero() {
  return (
    <section className="relative -mt-20 h-[88svh] min-h-[600px] w-full overflow-hidden">
      <img
        src={heroImg}
        alt="Premium barbershop session at EROS CUTS"
        className="absolute inset-0 h-full w-full object-cover"
        width={1920}
        height={1280}
      />
      <div className="absolute inset-0 bg-gradient-hero" />

      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col justify-end px-6 md:px-8 pb-20 md:pb-24">
        <div className="text-[0.7rem] tracking-[0.3em] uppercase text-gold/90 mb-5 animate-fade-up">
          Est. 2017 · Kathmandu
        </div>
        <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.02] text-cream max-w-3xl animate-fade-up delay-100 font-normal">
          Where every cut is crafted,<br className="hidden sm:block" /> never rushed.
        </h1>
        <p className="mt-5 max-w-lg text-base text-cream/70 leading-relaxed animate-fade-up delay-200">
          Kathmandu's premier grooming studio. Master barbers and a service ritual
          designed to make routine feel rare.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-3 animate-fade-up delay-300">
          <Button asChild variant="gold" size="lg">
            <Link to="/booking">
              Book a session <ArrowRight size={16} />
            </Link>
          </Button>
          <Button asChild variant="outlineGold" size="lg">
            <Link to="/services">View services</Link>
          </Button>
        </div>

        <div className="mt-10 flex flex-wrap items-center gap-5 text-sm text-cream/60 animate-fade-up delay-500">
          <div className="flex items-center gap-2">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={12} className="fill-gold text-gold" />
              ))}
            </div>
            <span><span className="text-cream">4.9</span> · 662 reviews</span>
          </div>
          <span className="hidden sm:inline h-3 w-px bg-border" />
          <span className="flex items-center gap-1.5">
            <MapPin size={12} className="text-gold" /> Durbar Marg, Kathmandu
          </span>
        </div>
      </div>
    </section>
  );
}

function TrustBar() {
  return (
    <section className="border-y border-border">
      <div className="mx-auto max-w-7xl px-6 md:px-8 py-12 grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((s) => (
          <div key={s.label}>
            <div className="font-condensed text-3xl md:text-4xl text-cream">
              {s.value}{s.suffix ?? ""}
            </div>
            <div className="mt-1.5 text-[0.7rem] uppercase tracking-[0.22em] text-muted-foreground">
              {s.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Services() {
  return (
    <section className="py-24 md:py-32 px-6 md:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="The Menu"
          title="Services worth the chair time."
          subtitle="Every service includes consultation, hot towel, and a finishing ritual. No hidden costs, no rushed cuts."
        />
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <article
              key={s.id}
              className="luxury-card group relative rounded-xl p-7 flex flex-col animate-fade-up"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              {s.popular && (
                <span className="absolute top-5 right-5 text-[0.6rem] uppercase tracking-[0.25em] text-gold border border-gold/40 px-2 py-1 rounded-full">
                  Most Booked
                </span>
              )}
              <Scissors className="text-gold mb-5" size={22} />
              <h3 className="font-display text-2xl text-cream">{s.name}</h3>
              <p className="mt-1 text-sm text-gold/80">{s.tagline}</p>
              <p className="mt-4 text-sm text-muted-foreground leading-relaxed flex-1">
                {s.description}
              </p>
              <div className="mt-6 flex items-end justify-between border-t border-border pt-5">
                <div>
                  <div className="text-[0.65rem] uppercase tracking-[0.25em] text-muted-foreground">From</div>
                  <div className="font-condensed text-3xl text-cream">
                    {s.price === 0 ? "Free" : `Rs ${s.price.toLocaleString()}`}
                  </div>
                </div>
                <div className="text-right">
                  <div className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Clock size={12} /> {s.duration} min
                  </div>
                  <Link
                    to="/booking"
                    className="mt-2 inline-flex items-center gap-1 text-xs text-gold uppercase tracking-[0.2em] hover:gap-2 transition-all"
                  >
                    Book <ArrowRight size={12} />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ExperienceSplit() {
  return (
    <section className="py-24 md:py-32 px-6 md:px-8 bg-onyx/40">
      <div className="mx-auto max-w-7xl grid gap-12 md:grid-cols-2 items-center">
        <div className="relative">
          <div className="absolute -inset-4 bg-radial-gold opacity-40 blur-2xl" />
          <img
            src={interior}
            alt="EROS CUTS interior"
            loading="lazy"
            width={1600}
            height={1024}
            className="relative rounded-2xl shadow-luxury"
          />
          <img
            src={tools}
            alt="Barber tools"
            loading="lazy"
            width={1280}
            height={1280}
            className="absolute -bottom-10 -right-6 hidden md:block w-44 h-44 object-cover rounded-xl border border-gold/30 shadow-gold"
          />
        </div>
        <div>
          <div className="flex items-center gap-3 mb-4">
            <span className="h-px w-10 bg-gold" />
            <span className="text-[0.7rem] tracking-[0.35em] uppercase text-gold">The Studio</span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl text-cream leading-[1.05]">
            A room designed to slow you down.
          </h2>
          <p className="mt-5 text-muted-foreground text-base md:text-lg leading-relaxed">
            Eight leather chairs, brass mirrors, hand-rolled towels and a curated playlist.
            From the moment you sit down, everything is tuned for one thing — your time
            in the chair.
          </p>
          <ul className="mt-8 space-y-4">
            {[
              { icon: ShieldCheck, t: "Sanitised single-use razors", d: "Sealed in front of you, every time." },
              { icon: Sparkles, t: "Master-stylist matching", d: "We pair you with the barber best for your face shape." },
              { icon: Clock, t: "Never overbooked", d: "We protect your appointment slot. No double-booking." },
            ].map(({ icon: Icon, t, d }) => (
              <li key={t} className="flex gap-4">
                <span className="grid place-items-center h-10 w-10 rounded-full bg-gold/10 border border-gold/30 text-gold shrink-0">
                  <Icon size={16} />
                </span>
                <div>
                  <div className="text-cream font-medium">{t}</div>
                  <div className="text-sm text-muted-foreground">{d}</div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function Gallery() {
  return (
    <section className="py-24 md:py-32 px-6 md:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Portfolio"
          title="The work speaks first."
          subtitle="A glimpse from the chair — recent cuts, beard work, and atmosphere."
        />
        <div className="grid gap-4 md:grid-cols-3 md:grid-rows-2 md:h-[680px]">
          {gallery.slice(0, 5).map((g, i) => (
            <Link
              to="/gallery"
              key={i}
              className={`group relative overflow-hidden rounded-xl ${
                i === 0 ? "md:row-span-2" : ""
              } ${i === 3 ? "md:col-span-2" : ""}`}
            >
              <img
                src={g.src}
                alt={g.alt}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-onyx via-onyx/30 to-transparent opacity-90" />
              <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
                <div>
                  <div className="text-[0.6rem] uppercase tracking-[0.3em] text-gold">{g.category}</div>
                  <div className="text-sm text-cream mt-1 line-clamp-1">{g.alt}</div>
                </div>
                <ArrowRight size={16} className="text-gold opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </Link>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Button asChild variant="outlineGold">
            <Link to="/gallery">View Full Gallery <ArrowRight size={14} /></Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section className="py-24 md:py-32 px-6 md:px-8 bg-onyx/40">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Word On The Street"
          title="662 reviews. 4.9 stars. Zero filler."
          subtitle="Real reviews from real chairs. Sourced from Google."
        />
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.slice(0, 6).map((t, i) => (
            <div key={i} className="luxury-card rounded-xl p-7 animate-fade-up" style={{ animationDelay: `${i * 60}ms` }}>
              <div className="flex gap-0.5 mb-4">
                {[...Array(t.rating)].map((_, k) => (
                  <Star key={k} size={14} className="fill-gold text-gold" />
                ))}
              </div>
              <p className="text-cream/85 text-sm leading-relaxed italic">
                "{t.text}"
              </p>
              <div className="mt-6 flex items-center gap-3 pt-5 border-t border-border">
                <div className="h-10 w-10 grid place-items-center rounded-full bg-gold/10 border border-gold/30 text-gold font-display">
                  {t.name[0]}
                </div>
                <div className="flex-1">
                  <div className="text-sm text-cream">{t.name}</div>
                  <div className="text-[0.7rem] text-muted-foreground">{t.handle} · {t.when}</div>
                </div>
                <span className="text-[0.6rem] uppercase tracking-[0.25em] text-gold/80 border border-gold/30 px-2 py-1 rounded">
                  {t.service}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function BookingCTA() {
  return (
    <section className="py-24 md:py-32 px-6 md:px-8">
      <div className="mx-auto max-w-5xl relative overflow-hidden rounded-2xl border border-gold/30 bg-gradient-to-br from-card to-onyx p-10 md:p-16 text-center grain">
        <div className="absolute inset-0 bg-radial-gold opacity-50 pointer-events-none" />
        <div className="relative">
          <div className="text-[0.7rem] tracking-[0.35em] uppercase text-gold mb-5">
            Today's Availability
          </div>
          <h2 className="font-display text-4xl md:text-5xl text-cream leading-tight">
            Only 8 chairs left for today.
          </h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
            Premium slots fill up by noon. Lock yours in under 30 seconds.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-2">
            {todaysSlots.map((slot, i) => (
              <Link
                to="/booking"
                key={slot}
                className={`px-4 py-2 rounded-full text-sm border transition-all ${
                  i < 3
                    ? "border-border text-muted-foreground line-through"
                    : "border-gold/40 text-cream hover:bg-gold hover:text-gold-foreground"
                }`}
              >
                {slot}
              </Link>
            ))}
          </div>
          <div className="mt-10">
            <Button asChild variant="gold" size="xl">
              <Link to="/booking">
                Reserve Your Chair <ArrowRight size={16} />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
