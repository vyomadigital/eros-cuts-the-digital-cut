import { Link } from "@tanstack/react-router";
import { Instagram, Facebook, MapPin, Phone, Mail } from "lucide-react";
import { Logo } from "./Logo";

export function SiteFooter() {
  return (
    <footer className="relative mt-32 border-t border-border bg-onyx">
      <div className="absolute inset-x-0 top-0 gold-divider" />
      <div className="mx-auto max-w-7xl px-6 md:px-8 py-16 grid gap-12 md:grid-cols-4">
        <div className="md:col-span-2 space-y-5">
          <Logo />
          <p className="text-sm text-muted-foreground max-w-sm leading-relaxed">
            Kathmandu's premium grooming studio. Cinematic interiors,
            master barbers, and a craft built around your face — not a price list.
          </p>
          <div className="flex gap-3 pt-2">
            <a className="h-9 w-9 grid place-items-center rounded-full border border-border hover:border-gold hover:text-gold transition-colors" href="#" aria-label="Instagram">
              <Instagram size={16} />
            </a>
            <a className="h-9 w-9 grid place-items-center rounded-full border border-border hover:border-gold hover:text-gold transition-colors" href="#" aria-label="Facebook">
              <Facebook size={16} />
            </a>
          </div>
        </div>
        <div>
          <h4 className="text-xs uppercase tracking-[0.25em] text-gold mb-4">Visit</h4>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li className="flex gap-2"><MapPin size={14} className="mt-1 text-gold/70" /> Durbar Marg, Kathmandu 44600</li>
            <li className="flex gap-2"><Phone size={14} className="mt-1 text-gold/70" /> +977 9800 000 000</li>
            <li className="flex gap-2"><Mail size={14} className="mt-1 text-gold/70" /> hello@eroscuts.np</li>
          </ul>
        </div>
        <div>
          <h4 className="text-xs uppercase tracking-[0.25em] text-gold mb-4">Hours</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li className="flex justify-between"><span>Mon — Fri</span><span>10:00 — 20:00</span></li>
            <li className="flex justify-between"><span>Saturday</span><span>09:00 — 21:00</span></li>
            <li className="flex justify-between"><span>Sunday</span><span>11:00 — 19:00</span></li>
          </ul>
          <Link to="/booking" className="mt-5 inline-block text-xs uppercase tracking-[0.25em] text-gold hover:text-gold-soft">
            Reserve a chair →
          </Link>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="mx-auto max-w-7xl px-6 md:px-8 py-5 flex flex-col md:flex-row justify-between items-center gap-2 text-xs text-muted-foreground">
          <span>© {new Date().getFullYear()} EROS CUTS. All rights reserved.</span>
          <span className="tracking-[0.2em] uppercase">Crafted in Kathmandu</span>
        </div>
      </div>
    </footer>
  );
}
