import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageShell, SectionHeader } from "@/components/PageShell";
import { gallery } from "@/lib/mockData";
import { X } from "lucide-react";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — EROS CUTS" },
      { name: "description", content: "A look inside EROS CUTS — recent cuts, beard work, and the studio atmosphere." },
    ],
  }),
  component: GalleryPage,
});

const CATEGORIES = ["All", "Fades", "Beard", "Signature", "Royal", "Studio"] as const;

function GalleryPage() {
  const [active, setActive] = useState<(typeof CATEGORIES)[number]>("All");
  const [lightbox, setLightbox] = useState<number | null>(null);

  const items = gallery.filter((g) => active === "All" || g.category === active);

  return (
    <PageShell>
      <section className="px-6 md:px-8 pt-16 pb-24">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Portfolio"
            title="The work, in detail."
            subtitle="Filter by service, click any image for a closer look."
          />
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {CATEGORIES.map((c) => (
              <button
                key={c}
                onClick={() => setActive(c)}
                className={`px-4 py-2 rounded-full text-xs uppercase tracking-[0.25em] border transition-all ${
                  active === c
                    ? "bg-gold text-gold-foreground border-gold"
                    : "border-border text-muted-foreground hover:border-gold hover:text-gold"
                }`}
              >
                {c}
              </button>
            ))}
          </div>

          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 [column-fill:_balance]">
            {items.map((g, i) => (
              <button
                key={i}
                onClick={() => setLightbox(i)}
                className="group relative mb-4 block w-full overflow-hidden rounded-xl"
              >
                <img
                  src={g.src}
                  alt={g.alt}
                  loading="lazy"
                  className="w-full h-auto transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-onyx/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="text-[0.6rem] uppercase tracking-[0.3em] text-gold">{g.category}</div>
                    <div className="text-sm text-cream mt-1">{g.alt}</div>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {lightbox !== null && (
        <div
          className="fixed inset-0 z-[60] bg-onyx/95 backdrop-blur-sm grid place-items-center p-4 animate-fade-in"
          onClick={() => setLightbox(null)}
        >
          <button className="absolute top-6 right-6 text-cream" aria-label="Close">
            <X size={28} />
          </button>
          <img
            src={items[lightbox].src}
            alt={items[lightbox].alt}
            className="max-h-[88vh] max-w-[92vw] rounded-xl shadow-luxury object-contain"
          />
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-center">
            <div className="text-[0.65rem] uppercase tracking-[0.3em] text-gold">{items[lightbox].category}</div>
            <div className="text-sm text-cream mt-1">{items[lightbox].alt}</div>
          </div>
        </div>
      )}
    </PageShell>
  );
}
