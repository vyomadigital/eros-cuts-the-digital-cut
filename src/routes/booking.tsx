import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { PageShell } from "@/components/PageShell";
import { Button } from "@/components/ui/button";
import { services, todaysSlots } from "@/lib/mockData";
import { Check, ChevronLeft, ChevronRight, Calendar, Clock, User, CreditCard, Loader2, ShieldCheck, Copy, Sparkles } from "lucide-react";
import { toast } from "sonner";

export const Route = createFileRoute("/booking")({
  head: () => ({
    meta: [
      { title: "Book Your Session — EROS CUTS" },
      { name: "description", content: "Reserve your chair at EROS CUTS in under 30 seconds. Choose your service, time, and payment method." },
    ],
  }),
  component: BookingPage,
});

const STEPS = ["Service", "Date & Time", "Details", "Payment", "Confirmed"] as const;

const dateOptions = Array.from({ length: 7 }, (_, i) => {
  const d = new Date();
  d.setDate(d.getDate() + i);
  return d;
});

const PAY_METHODS = [
  { id: "esewa", name: "eSewa", desc: "Pay via eSewa wallet", color: "#60bb47" },
  { id: "khalti", name: "Khalti", desc: "Khalti digital wallet", color: "#5C2D91" },
  { id: "card", name: "Card", desc: "Visa, Mastercard, Amex", color: "var(--gold)" },
  { id: "cash", name: "Pay at shop", desc: "Cash or card on arrival", color: "var(--gold)" },
] as const;

function BookingPage() {
  const [step, setStep] = useState(0);
  const [serviceId, setServiceId] = useState(services[0].id);
  const [date, setDate] = useState(dateOptions[0]);
  const [time, setTime] = useState(todaysSlots[3]);
  const [details, setDetails] = useState({ name: "", phone: "", email: "", notes: "" });
  const [pay, setPay] = useState<typeof PAY_METHODS[number]["id"]>("esewa");
  const [processing, setProcessing] = useState(false);
  const [txnId] = useState(() => "EC" + Date.now().toString().slice(-8));

  const service = services.find((s) => s.id === serviceId)!;

  const next = () => setStep((s) => Math.min(s + 1, STEPS.length - 1));
  const back = () => setStep((s) => Math.max(s - 1, 0));

  const confirmPayment = () => {
    setProcessing(true);
    setTimeout(() => {
      setProcessing(false);
      next();
    }, 1800);
  };

  return (
    <PageShell>
      <section className="px-4 sm:px-6 md:px-8 pt-12 pb-24">
        <div className="mx-auto max-w-4xl">
          <div className="text-center mb-10">
            <div className="text-[0.7rem] tracking-[0.4em] uppercase text-gold mb-3">Reserve a Chair</div>
            <h1 className="font-display text-4xl md:text-5xl text-cream">Let's craft your session.</h1>
          </div>

          <Stepper step={step} />

          <div className="mt-10 luxury-card rounded-2xl p-6 sm:p-10 min-h-[460px] relative overflow-hidden">
            {step === 0 && (
              <Step title="Choose your service" subtitle="Tap the service you'd like.">
                <div className="grid sm:grid-cols-2 gap-3 mt-2">
                  {services.map((s) => (
                    <button
                      key={s.id}
                      onClick={() => setServiceId(s.id)}
                      className={`text-left rounded-xl p-5 border transition-all ${
                        serviceId === s.id
                          ? "border-gold bg-gold/10 shadow-gold"
                          : "border-border hover:border-gold/40"
                      }`}
                    >
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <div className="font-display text-lg text-cream">{s.name}</div>
                          <div className="text-xs text-gold/80 mt-0.5">{s.tagline}</div>
                        </div>
                        <div className="text-right shrink-0">
                          <div className="font-condensed text-xl text-cream">
                            {s.price === 0 ? "Free" : `Rs ${s.price}`}
                          </div>
                          <div className="text-xs text-muted-foreground">{s.duration} min</div>
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </Step>
            )}

            {step === 1 && (
              <Step title="Pick date & time" subtitle="All slots are protected — no double-booking.">
                <div className="mt-4">
                  <div className="text-xs uppercase tracking-[0.25em] text-muted-foreground mb-3 flex items-center gap-2">
                    <Calendar size={14} className="text-gold" /> Date
                  </div>
                  <div className="flex gap-2 overflow-x-auto pb-2">
                    {dateOptions.map((d) => {
                      const active = d.toDateString() === date.toDateString();
                      return (
                        <button
                          key={d.toISOString()}
                          onClick={() => setDate(d)}
                          className={`shrink-0 w-20 py-3 rounded-xl border text-center transition-all ${
                            active ? "border-gold bg-gold/10" : "border-border hover:border-gold/40"
                          }`}
                        >
                          <div className="text-[0.65rem] uppercase tracking-[0.2em] text-muted-foreground">
                            {d.toLocaleDateString("en", { weekday: "short" })}
                          </div>
                          <div className="font-condensed text-2xl text-cream mt-1">{d.getDate()}</div>
                          <div className="text-[0.6rem] text-muted-foreground">
                            {d.toLocaleDateString("en", { month: "short" })}
                          </div>
                        </button>
                      );
                    })}
                  </div>

                  <div className="text-xs uppercase tracking-[0.25em] text-muted-foreground mb-3 mt-7 flex items-center gap-2">
                    <Clock size={14} className="text-gold" /> Time
                  </div>
                  <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
                    {todaysSlots.map((t, i) => {
                      const taken = i < 3;
                      const active = time === t;
                      return (
                        <button
                          key={t}
                          disabled={taken}
                          onClick={() => setTime(t)}
                          className={`py-3 rounded-lg border text-sm transition-all ${
                            taken
                              ? "border-border/50 text-muted-foreground/50 line-through cursor-not-allowed"
                              : active
                              ? "border-gold bg-gold text-gold-foreground"
                              : "border-border hover:border-gold/50"
                          }`}
                        >
                          {t}
                        </button>
                      );
                    })}
                  </div>
                </div>
              </Step>
            )}

            {step === 2 && (
              <Step title="Your details" subtitle="So we can keep your chair reserved.">
                <div className="grid sm:grid-cols-2 gap-5 mt-4">
                  <Input label="Full name" value={details.name} onChange={(v) => setDetails({ ...details, name: v })} icon={<User size={14} />} />
                  <Input label="Phone" value={details.phone} onChange={(v) => setDetails({ ...details, phone: v })} placeholder="+977…" />
                  <div className="sm:col-span-2">
                    <Input label="Email (optional)" value={details.email} onChange={(v) => setDetails({ ...details, email: v })} type="email" />
                  </div>
                  <div className="sm:col-span-2">
                    <label className="text-xs uppercase tracking-[0.25em] text-muted-foreground">Anything we should know?</label>
                    <textarea
                      rows={3}
                      value={details.notes}
                      onChange={(e) => setDetails({ ...details, notes: e.target.value })}
                      placeholder="e.g. preferred barber, allergies, length preference"
                      className="w-full mt-2 bg-transparent border border-border rounded-lg p-3 outline-none focus:border-gold text-cream resize-none"
                    />
                  </div>
                </div>
              </Step>
            )}

            {step === 3 && (
              <Step title="Payment" subtitle="Secure your slot. Refundable up to 6 hours before.">
                <Summary service={service} date={date} time={time} />
                <div className="mt-6 grid sm:grid-cols-2 gap-3">
                  {PAY_METHODS.map((m) => (
                    <button
                      key={m.id}
                      onClick={() => setPay(m.id)}
                      className={`text-left rounded-xl p-4 border transition-all flex items-center gap-3 ${
                        pay === m.id ? "border-gold bg-gold/10" : "border-border hover:border-gold/40"
                      }`}
                    >
                      <span
                        className="h-10 w-10 rounded-lg grid place-items-center font-display text-sm shrink-0"
                        style={{ background: m.color, color: "var(--onyx)" }}
                      >
                        {m.name[0]}
                      </span>
                      <div>
                        <div className="text-cream text-sm font-medium">{m.name}</div>
                        <div className="text-xs text-muted-foreground">{m.desc}</div>
                      </div>
                      {pay === m.id && <Check size={16} className="ml-auto text-gold" />}
                    </button>
                  ))}
                </div>
                <div className="mt-5 flex items-center gap-2 text-xs text-muted-foreground">
                  <ShieldCheck size={14} className="text-gold" />
                  256-bit SSL · No card data stored on our servers
                </div>
              </Step>
            )}

            {step === 4 && (
              <Confirmation service={service} date={date} time={time} pay={pay} txnId={txnId} details={details} />
            )}

            {processing && (
              <div className="absolute inset-0 bg-background/95 backdrop-blur-sm grid place-items-center animate-fade-in">
                <div className="text-center">
                  <Loader2 className="mx-auto text-gold animate-spin" size={36} />
                  <div className="mt-5 font-display text-xl text-cream">Processing payment…</div>
                  <div className="mt-2 text-xs text-muted-foreground tracking-[0.2em] uppercase">
                    Connecting to {PAY_METHODS.find((m) => m.id === pay)?.name}
                  </div>
                </div>
              </div>
            )}
          </div>

          {step < 4 && (
            <div className="mt-8 flex justify-between gap-3">
              <Button variant="outlineGold" onClick={back} disabled={step === 0}>
                <ChevronLeft size={14} /> Back
              </Button>
              {step < 3 ? (
                <Button
                  variant="gold"
                  onClick={() => {
                    if (step === 2 && (!details.name || !details.phone)) {
                      toast.error("Name and phone are required");
                      return;
                    }
                    next();
                  }}
                >
                  Continue <ChevronRight size={14} />
                </Button>
              ) : (
                <Button variant="gold" onClick={confirmPayment}>
                  <CreditCard size={14} /> Pay Rs {service.price.toLocaleString()}
                </Button>
              )}
            </div>
          )}
        </div>
      </section>
    </PageShell>
  );
}

function Stepper({ step }: { step: number }) {
  return (
    <div className="flex items-center justify-center gap-2 sm:gap-4">
      {STEPS.map((label, i) => {
        const active = i === step;
        const done = i < step;
        return (
          <div key={label} className="flex items-center gap-2 sm:gap-3">
            <div
              className={`h-8 w-8 grid place-items-center rounded-full border text-xs font-medium transition-all ${
                done ? "bg-gold text-gold-foreground border-gold" : active ? "border-gold text-gold" : "border-border text-muted-foreground"
              }`}
            >
              {done ? <Check size={14} /> : i + 1}
            </div>
            <span className={`hidden sm:inline text-[0.7rem] uppercase tracking-[0.2em] ${active ? "text-gold" : "text-muted-foreground"}`}>
              {label}
            </span>
            {i < STEPS.length - 1 && <span className="h-px w-6 sm:w-10 bg-border" />}
          </div>
        );
      })}
    </div>
  );
}

function Step({ title, subtitle, children }: { title: string; subtitle?: string; children: React.ReactNode }) {
  return (
    <div className="animate-fade-up">
      <h2 className="font-display text-2xl md:text-3xl text-cream">{title}</h2>
      {subtitle && <p className="mt-1 text-sm text-muted-foreground">{subtitle}</p>}
      {children}
    </div>
  );
}

function Input({
  label, value, onChange, type = "text", placeholder, icon,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  placeholder?: string;
  icon?: React.ReactNode;
}) {
  return (
    <div>
      <label className="text-xs uppercase tracking-[0.25em] text-muted-foreground flex items-center gap-2">
        {icon} {label}
      </label>
      <input
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        className="w-full mt-2 bg-transparent border-b border-border focus:border-gold py-3 outline-none text-cream transition-colors"
      />
    </div>
  );
}

function Summary({ service, date, time }: any) {
  return (
    <div className="rounded-xl border border-border bg-onyx/60 p-5">
      <div className="text-[0.65rem] uppercase tracking-[0.25em] text-gold mb-3">Order Summary</div>
      <div className="flex justify-between text-sm py-1.5">
        <span className="text-muted-foreground">{service.name}</span>
        <span className="text-cream">Rs {service.price.toLocaleString()}</span>
      </div>
      <div className="flex justify-between text-sm py-1.5">
        <span className="text-muted-foreground">When</span>
        <span className="text-cream">{date.toLocaleDateString("en", { weekday: "short", month: "short", day: "numeric" })} · {time}</span>
      </div>
      <div className="border-t border-border mt-3 pt-3 flex justify-between">
        <span className="text-cream font-medium">Total</span>
        <span className="font-condensed text-2xl text-gradient-gold">Rs {service.price.toLocaleString()}</span>
      </div>
    </div>
  );
}

function Confirmation({ service, date, time, pay, txnId, details }: any) {
  const copy = () => {
    navigator.clipboard.writeText(txnId);
    toast.success("Transaction ID copied");
  };
  return (
    <div className="text-center animate-fade-up">
      <div className="mx-auto h-16 w-16 grid place-items-center rounded-full bg-gradient-gold text-gold-foreground animate-pulse-gold">
        <Check size={28} />
      </div>
      <h2 className="mt-6 font-display text-3xl md:text-4xl text-cream">You're booked, {details.name?.split(" ")[0] || "friend"}.</h2>
      <p className="mt-3 text-muted-foreground max-w-md mx-auto">
        We've sent a confirmation to your phone. Your barber will see you at the time below.
      </p>

      <div className="mt-8 max-w-md mx-auto rounded-2xl border border-gold/30 bg-onyx/70 p-6 text-left space-y-3">
        <Row label="Service" value={service.name} />
        <Row label="When" value={`${date.toLocaleDateString("en", { weekday: "long", month: "short", day: "numeric" })} at ${time}`} />
        <Row label="Where" value="Durbar Marg, Kathmandu" />
        <Row label="Paid via" value={PAY_METHODS.find((m) => m.id === pay)?.name || pay} />
        <Row label="Total" value={`Rs ${service.price.toLocaleString()}`} highlight />
        <div className="border-t border-border pt-3 flex justify-between items-center">
          <span className="text-xs text-muted-foreground">TXN ID</span>
          <button onClick={copy} className="flex items-center gap-2 text-xs text-gold hover:underline">
            {txnId} <Copy size={12} />
          </button>
        </div>
      </div>

      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Button asChild variant="gold">
          <Link to="/">Back to Home</Link>
        </Button>
        <Button asChild variant="outlineGold">
          <Link to="/dashboard"><Sparkles size={14} /> See it in our dashboard</Link>
        </Button>
      </div>
    </div>
  );
}

function Row({ label, value, highlight }: { label: string; value: string; highlight?: boolean }) {
  return (
    <div className="flex justify-between text-sm">
      <span className="text-muted-foreground">{label}</span>
      <span className={highlight ? "font-condensed text-xl text-gradient-gold" : "text-cream"}>{value}</span>
    </div>
  );
}
