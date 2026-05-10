import { useEffect, useState } from "react";
import { useRouterState } from "@tanstack/react-router";

/**
 * Thin top-of-page progress indicator that responds to router transitions.
 * Smoothly grows while loading, snaps to 100% then fades out on completion.
 */
export function RouteProgress() {
  const isLoading = useRouterState({
    select: (s) => s.isLoading || s.isTransitioning,
  });
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let raf: number | undefined;
    let timeout: ReturnType<typeof setTimeout> | undefined;

    if (isLoading) {
      setVisible(true);
      setProgress(8);
      const tick = () => {
        setProgress((p) => {
          if (p >= 90) return p;
          // ease towards 90
          const inc = (90 - p) * 0.06 + 0.4;
          return Math.min(90, p + inc);
        });
        raf = window.requestAnimationFrame(tick);
      };
      raf = window.requestAnimationFrame(tick);
    } else if (visible) {
      setProgress(100);
      timeout = setTimeout(() => {
        setVisible(false);
        setProgress(0);
      }, 280);
    }

    return () => {
      if (raf) cancelAnimationFrame(raf);
      if (timeout) clearTimeout(timeout);
    };
  }, [isLoading]);

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-x-0 top-0 z-[60] h-[2px]"
      style={{ opacity: visible ? 1 : 0, transition: "opacity 220ms ease" }}
    >
      <div
        className="h-full bg-gradient-to-r from-gold/60 via-gold to-gold/60 shadow-[0_0_12px_rgba(212,175,90,0.55)]"
        style={{
          width: `${progress}%`,
          transition: "width 180ms cubic-bezier(0.4, 0, 0.2, 1)",
        }}
      />
    </div>
  );
}
