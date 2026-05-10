import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Scissors, Calendar, Sparkles, MapPin, ArrowRight, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const KEY = "eros_onboarded_v1";

const STEPS = [
  {
    icon: Scissors,
    eyebrow: "Welcome to EROS CUTS",
    title: "Kathmandu's premier grooming studio.",
    body: "Master barbers. Cinematic interiors. A service ritual built around your time in the chair.",
  },
  {
    icon: Sparkles,
    eyebrow: "Step 01 — Choose",
    title: "Pick the cut, beard or full ritual.",
    body: "Browse our signature services — every appointment includes consultation, hot towel and a finishing ritual.",
  },
  {
    icon: Calendar,
    eyebrow: "Step 02 — Reserve",
    title: "Book your chair in under 30 seconds.",
    body: "Select a date, time and barber. Pay via eSewa, Khalti, card or settle at the shop.",
  },
  {
    icon: MapPin,
    eyebrow: "Step 03 — Arrive",
    title: "Durbar Marg, Kathmandu.",
    body: "We'll have espresso ready. Show up five minutes early — the rest is on us.",
  },
];

export function Onboarding() {
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState(0);

  useEffect(() => {
    if (typeof window === "undefined") return;
    try {
      if (!localStorage.getItem(KEY)) {
        const t = setTimeout(() => setOpen(true), 600);
        return () => clearTimeout(t);
      }
    } catch {
      // ignore storage errors
    }
  }, []);

  const finish = () => {
    try {
      localStorage.setItem(KEY, "1");
    } catch {
      // ignore
    }
    setOpen(false);
  };

  if (!open) return null;
  const s = STEPS[step];
  const Icon = s.icon;
  const last = step === STEPS.length - 1;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Welcome to EROS CUTS"
      className="fixed inset-0 z-[70] flex items-end sm:items-center justify-center px-4 py-6 sm:p-6 animate-fade-in"
    >
      <div
        className="absolute inset-0 bg-onyx/80 backdrop-blur-md"
        onClick={finish}
      />
      <div className="relative w-full max-w-md rounded-2xl border border-border bg-card shadow-luxury overflow-hidden animate-fade-up">
        <button
          onClick={finish}
          aria-label="Skip intro"
          className="absolute top-4 right-4 z-10 text-muted-foreground hover:text-cream transition-colors p-1.5 rounded-md"
        >
          <X size={16} />
        </button>

        <div className="p-7 sm:p-9">
          <div className="grid place-items-center h-12 w-12 rounded-full bg-gold/10 border border-gold/30 text-gold mb-6">
            <Icon size={20} />
          </div>
          <div className="text-[0.65rem] tracking-[0.35em] uppercase text-gold mb-3">
            {s.eyebrow}
          </div>
          <h2 className="font-display text-2xl sm:text-3xl text-cream leading-tight">
            {s.title}
          </h2>
          <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
            {s.body}
          </p>

          {/* progress dots */}
          <div className="mt-7 flex items-center gap-1.5">
            {STEPS.map((_, i) => (
              <span
                key={i}
                className={`h-[3px] rounded-full transition-all duration-300 ${
                  i === step
                    ? "w-8 bg-gold"
                    : i < step
                      ? "w-4 bg-gold/50"
                      : "w-4 bg-border"
                }`}
              />
            ))}
          </div>

          <div className="mt-7 flex items-center justify-between gap-3">
            <button
              onClick={finish}
              className="text-xs uppercase tracking-[0.25em] text-muted-foreground hover:text-cream transition-colors"
            >
              Skip
            </button>
            {last ? (
              <Button asChild variant="gold" size="sm" onClick={finish}>
                <Link to="/booking">
                  Book a session <ArrowRight size={14} />
                </Link>
              </Button>
            ) : (
              <Button
                variant="gold"
                size="sm"
                onClick={() => setStep((s) => s + 1)}
              >
                Continue <ArrowRight size={14} />
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
