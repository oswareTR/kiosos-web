import type { ReactNode } from "react";

type LegalPageProps = {
  eyebrow?: string;
  title: string;
  updated: string;
  children: ReactNode;
};

export function LegalPage({
  eyebrow = "Yasal",
  title,
  updated,
  children,
}: LegalPageProps) {
  return (
    <article className="section">
      <div className="wrap max-w-3xl">
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="display mt-3 text-3xl sm:text-4xl lg:text-5xl">{title}</h1>
        <p className="mt-3 text-sm text-ink-subtle">Son güncelleme: {updated}</p>
        <div className="mt-10 space-y-8 text-[0.975rem] leading-7 text-ink-muted">
          {children}
        </div>
      </div>
    </article>
  );
}

export function LegalSection({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <section>
      <h2 className="text-lg font-medium text-ink">{title}</h2>
      <div className="mt-3 space-y-3">{children}</div>
    </section>
  );
}
