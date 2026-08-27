import { useCallback, useRef, useState } from "react";

/** Draggable clip-path before/after comparison. Keyboard accessible via arrow keys. */
export function BeforeAfter({ image, alt }: { image: string; alt: string }) {
  const [pos, setPos] = useState(50);
  const wrapRef = useRef<HTMLDivElement>(null);

  const update = useCallback((clientX: number) => {
    const rect = wrapRef.current?.getBoundingClientRect();
    if (!rect) return;
    setPos(Math.min(100, Math.max(0, ((clientX - rect.left) / rect.width) * 100)));
  }, []);

  return (
    <div
      ref={wrapRef}
      className="relative aspect-video w-full select-none overflow-hidden rounded-md border border-border"
      onPointerDown={(e) => {
        e.currentTarget.setPointerCapture(e.pointerId);
        update(e.clientX);
      }}
      onPointerMove={(e) => {
        if (e.currentTarget.hasPointerCapture(e.pointerId)) update(e.clientX);
      }}
    >
      <img src={image} alt={`${alt} — graded result`} loading="lazy" className="absolute inset-0 size-full object-cover" />
      <img
        src={image}
        alt={`${alt} — original ungraded frame`}
        loading="lazy"
        className="absolute inset-0 size-full object-cover saturate-[0.15] contrast-[0.9] brightness-[0.95]"
        style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
      />
      <div className="absolute inset-y-0 w-px bg-orange" style={{ left: `${pos}%` }} />
      <input
        type="range"
        min={0}
        max={100}
        value={pos}
        aria-label="Compare before and after"
        onChange={(e) => setPos(Number(e.target.value))}
        className="absolute inset-x-0 bottom-3 mx-auto w-[60%] accent-orange"
      />
      <span className="absolute left-3 top-3 rounded-sm bg-charcoal/80 px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-cream">
        Before
      </span>
      <span className="absolute right-3 top-3 rounded-sm bg-orange px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-primary-foreground">
        After
      </span>
    </div>
  );
}
