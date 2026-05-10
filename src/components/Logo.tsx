import { Link } from "@tanstack/react-router";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <Link to="/" className={`flex items-center gap-2.5 group ${className}`}>
      <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-border group-hover:border-gold/60 transition-colors">
        <span className="font-display text-gold text-base leading-none">E</span>
      </span>
      <span className="font-condensed text-base tracking-[0.28em] text-cream">
        EROS CUTS
      </span>
    </Link>
  );
}
