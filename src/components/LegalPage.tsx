import type { ReactNode } from "react";

type LegalPageProps = {
  eyebrow: string;
  title: string;
  intro?: ReactNode;
  children: ReactNode;
};

export default function LegalPage({ eyebrow, title, intro, children }: LegalPageProps) {
  return (
    <div className="bg-brand-black">
      <header className="border-b border-brand-border pt-32 pb-14 md:pt-40 md:pb-16">
        <div className="mx-auto max-w-4xl px-6">
          <p className="type-label mb-4 text-brand-gold">{eyebrow}</p>
          <h1 className="type-display-l text-brand-white">{title}</h1>
          <p className="mt-5 font-body text-sm text-brand-muted">Last Updated: September 2026</p>
          {intro ? <div className="mt-7 max-w-3xl type-body-l text-brand-muted">{intro}</div> : null}
        </div>
      </header>

      <section className="bg-brand-surface py-16 md:py-20">
        <article className="legal-content mx-auto max-w-4xl px-6 font-body text-base leading-8 text-brand-muted">
          {children}
        </article>
      </section>
    </div>
  );
}
