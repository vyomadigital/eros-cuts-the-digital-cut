import { ReactNode } from "react";
import { SiteHeader } from "./SiteHeader";
import { SiteFooter } from "./SiteFooter";
import { FloatingWidgets } from "./FloatingWidgets";

export function PageShell({ children, hideFooter }: { children: ReactNode; hideFooter?: boolean }) {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-1 pt-20">{children}</main>
      {!hideFooter && <SiteFooter />}
      <FloatingWidgets />
    </div>
  );
}

export function SectionHeader({
  eyebrow,
  title,
  subtitle,
  align = "center",
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "center" | "left";
}) {
  return (
    <div className={`max-w-2xl ${align === "center" ? "mx-auto text-center" : ""} mb-14`}>
      {eyebrow && (
        <div className={`flex items-center gap-3 mb-4 ${align === "center" ? "justify-center" : ""}`}>
          <span className="h-px w-8 bg-gold/60" />
          <span className="text-[0.7rem] tracking-[0.35em] uppercase text-gold">{eyebrow}</span>
          <span className="h-px w-8 bg-gold/60" />
        </div>
      )}
      <h2 className="font-display text-4xl md:text-5xl text-cream leading-[1.05]">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-muted-foreground text-base md:text-lg leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
