import type { ReactNode } from "react";

export function PageHero({
  eyebrow,
  title,
  intro,
  children,
}: {
  eyebrow: string;
  title: ReactNode;
  intro?: string;
  children?: ReactNode;
}) {
  return (
    <section className="noise relative overflow-hidden border-b border-border pb-14 pt-32 md:pb-20 md:pt-44">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 left-1/2 size-[38rem] -translate-x-1/2 rounded-full opacity-25 blur-[120px]"
        style={{ background: "radial-gradient(circle, var(--orange), transparent 65%)" }}
      />
      <div className="gutter relative mx-auto max-w-7xl">
        <p className="eyebrow rise">{eyebrow}</p>
        <h1 className="h-display rise mt-5 max-w-4xl" style={{ animationDelay: "80ms" }}>
          {title}
        </h1>
        {intro ? (
          <p className="measure rise mt-6 text-lg text-muted-foreground" style={{ animationDelay: "160ms" }}>
            {intro}
          </p>
        ) : null}
        {children ? <div className="rise mt-8" style={{ animationDelay: "220ms" }}>{children}</div> : null}
      </div>
    </section>
  );
}
