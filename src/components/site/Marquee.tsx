import { cn } from "@/lib/utils";

/** Infinite ticker. Duplicates children once so the -50% keyframe loops seamlessly. */
export function Marquee({
  items,
  className,
  itemClassName,
  separator,
  speed = 32,
}: {
  items: string[];
  className?: string;
  itemClassName?: string;
  separator?: string;
  speed?: number;
}) {
  const doubled = [...items, ...items];
  return (
    <div className={cn("group relative overflow-hidden", className)} aria-hidden="true">
      <div
        className="marquee-track items-center group-hover:[animation-play-state:paused]"
        style={{ animationDuration: `${speed}s` }}
      >
        {doubled.map((item, i) => (
          <span key={`${item}-${i}`} className={cn("flex shrink-0 items-center", itemClassName)}>
            {item}
            {separator ? <span className="mx-6 text-orange">{separator}</span> : null}
          </span>
        ))}
      </div>
    </div>
  );
}
