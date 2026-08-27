import { Link } from "@tanstack/react-router";
import { cn } from "@/lib/utils";
import logoMark from "@/assets/logo-mark.png.asset.json";

export function Logo({ className, animate = false }: { className?: string; animate?: boolean }) {
  return (
    <Link
      to="/"
      aria-label="Da Craft Motion — home"
      className={cn("group inline-flex items-center gap-2.5", animate && "logo-reveal", className)}
    >
      <img
        src={logoMark.url}
        alt=""
        width={36}
        height={36}
        className="h-8 w-auto object-contain transition-transform duration-500 group-hover:scale-105"
      />
      <span className="font-display text-base font-bold uppercase leading-none tracking-[0.18em] text-foreground">
        Da Craft Motion
      </span>
    </Link>
  );
}
