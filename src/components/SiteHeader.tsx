import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Logo } from "./Logo";
import { Button } from "@/components/ui/button";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/gallery", label: "Gallery" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
  { to: "/dashboard", label: "Dashboard" },
] as const;

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/85 backdrop-blur-xl border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 md:px-8">
        <Logo />
        <nav className="hidden md:flex items-center gap-9">
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="text-[0.78rem] uppercase tracking-[0.2em] text-muted-foreground hover:text-gold transition-colors"
              activeProps={{ className: "text-gold" }}
              activeOptions={{ exact: item.to === "/" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <Button asChild variant="gold" size="sm" className="hidden sm:inline-flex">
            <Link to="/booking">Book Session</Link>
          </Button>
          <button
            className="md:hidden text-foreground p-2"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>
      {open && (
        <div className="md:hidden border-t border-border bg-background/95 backdrop-blur-xl animate-fade-in">
          <div className="flex flex-col px-6 py-5 gap-4">
            {NAV.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="text-sm uppercase tracking-[0.2em] text-muted-foreground"
                activeProps={{ className: "text-gold" }}
              >
                {item.label}
              </Link>
            ))}
            <Button asChild variant="gold" className="mt-2">
              <Link to="/booking" onClick={() => setOpen(false)}>
                Book Session
              </Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
