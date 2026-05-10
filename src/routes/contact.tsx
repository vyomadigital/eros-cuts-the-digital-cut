import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageShell, SectionHeader } from "@/components/PageShell";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { toast } from "sonner";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact & Visit — EROS CUTS" },
      { name: "description", content: "Visit EROS CUTS at Durbar Marg, Kathmandu. Call, message, or send us a note." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent — we'll respond within 2 hours.");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <PageShell>
      <section className="px-6 md:px-8 pt-16 pb-24">
        <div className="mx-auto max-w-7xl">
          <SectionHeader eyebrow="Visit Us" title="Find the chair." subtitle="On Durbar Marg, two minutes from the palace gate." />

          <div className="grid lg:grid-cols-5 gap-8">
            <div className="lg:col-span-2 space-y-5">
              {[
                { Icon: MapPin, title: "Studio", text: "Durbar Marg, Kathmandu 44600" },
                { Icon: Phone, title: "Reservations", text: "+977 9800 000 000" },
                { Icon: Mail, title: "Email", text: "hello@eroscuts.np" },
                { Icon: Clock, title: "Hours", text: "Mon–Sun · 09:00 — 21:00" },
              ].map(({ Icon, title, text }) => (
                <div key={title} className="luxury-card rounded-xl p-5 flex gap-4 items-center">
                  <span className="grid place-items-center h-11 w-11 rounded-full bg-gold/10 border border-gold/30 text-gold">
                    <Icon size={18} />
                  </span>
                  <div>
                    <div className="text-[0.65rem] uppercase tracking-[0.25em] text-muted-foreground">{title}</div>
                    <div className="text-cream mt-0.5">{text}</div>
                  </div>
                </div>
              ))}
            </div>

            <form onSubmit={submit} className="lg:col-span-3 luxury-card rounded-2xl p-8 space-y-5">
              <div>
                <label className="text-xs uppercase tracking-[0.25em] text-muted-foreground">Name</label>
                <input
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full mt-2 bg-transparent border-b border-border focus:border-gold py-3 outline-none text-cream transition-colors"
                />
              </div>
              <div>
                <label className="text-xs uppercase tracking-[0.25em] text-muted-foreground">Email</label>
                <input
                  required
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full mt-2 bg-transparent border-b border-border focus:border-gold py-3 outline-none text-cream transition-colors"
                />
              </div>
              <div>
                <label className="text-xs uppercase tracking-[0.25em] text-muted-foreground">Message</label>
                <textarea
                  required
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full mt-2 bg-transparent border-b border-border focus:border-gold py-3 outline-none text-cream transition-colors resize-none"
                />
              </div>
              <Button type="submit" variant="gold" size="lg" className="w-full">
                Send Message <Send size={14} />
              </Button>
            </form>
          </div>

          <div className="mt-12 rounded-2xl overflow-hidden border border-border h-[420px]">
            <iframe
              title="EROS CUTS location"
              src="https://www.openstreetmap.org/export/embed.html?bbox=85.317%2C27.711%2C85.323%2C27.715&layer=mapnik"
              className="w-full h-full grayscale-[60%] contrast-110"
            />
          </div>
        </div>
      </section>
    </PageShell>
  );
}
