import { useEffect, useState } from "react";

/**
 * Desktop-only circular cursor. Expands and shows a label when hovering an
 * element carrying `data-cursor="View | Play | Book"`.
 */
export function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [label, setLabel] = useState<string | null>(null);

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || reduced) return;
    setEnabled(true);

    const onMove = (e: PointerEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      const target = (e.target as HTMLElement | null)?.closest?.("[data-cursor]") as HTMLElement | null;
      setLabel(target?.dataset["cursor"] ?? null);
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => window.removeEventListener("pointermove", onMove);
  }, []);

  if (!enabled) return null;

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed z-[90] hidden select-none items-center justify-center rounded-full border border-orange text-[10px] font-semibold uppercase tracking-[0.14em] text-orange transition-[width,height,background-color,color] duration-300 md:flex"
      style={{
        left: pos.x,
        top: pos.y,
        transform: "translate(-50%, -50%)",
        width: label ? 76 : 14,
        height: label ? 76 : 14,
        backgroundColor: label ? "var(--orange)" : "transparent",
        color: label ? "var(--primary-foreground)" : "transparent",
      }}
    >
      {label}
    </div>
  );
}
