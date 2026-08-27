import { Link } from "@tanstack/react-router";
import { cn } from "@/lib/utils";

export function Logo({ className, animate = false }: { className?: string; animate?: boolean }) {
  return (
    <Link
      to="/"
      aria-label="Da Craft Motion — home"
      className={cn("group inline-flex items-baseline gap-1.5", animate && "logo-reveal", className)}
    >
      <span className="script text-3xl leading-none text-orange">da</span>
      <span className="font-display text-base font-bold uppercase leading-none tracking-[0.22em] text-foreground">
        Craft Motion
      </span>
    </Link>
  );
}
