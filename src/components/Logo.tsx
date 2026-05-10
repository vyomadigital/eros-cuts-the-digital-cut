import { Link } from "@tanstack/react-router";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <Link to="/" className={`flex items-center gap-2 group ${className}`}>
      <span className="relative inline-flex h-9 w-9 items-center justify-center rounded-full border border-gold/40 bg-onyx transition-all group-hover:border-gold">
        <span className="font-display text-gold text-lg leading-none">E</span>
        <span className="absolute -inset-px rounded-full bg-radial-gold opacity-60" />
      </span>
      <span className="flex flex-col leading-none">
        <span className="font-condensed text-[1.15rem] tracking-[0.25em] text-cream">
          EROS
        </span>
        <span className="font-condensed text-[0.7rem] tracking-[0.45em] text-gold/80">
          CUTS
        </span>
      </span>
    </Link>
  );
}
