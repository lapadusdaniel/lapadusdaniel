import type { Metadata } from 'next';
import Link from 'next/link';
import { PageShell } from '@/components/layout/page-shell';
import { CtaButton } from '@/components/ui/cta-button';
import { FadeIn } from '@/components/ui/fade-in';
import { SectionHeading } from '@/components/ui/section-heading';
import { buildPageMetadata } from '@/lib/seo';
import { localSeoParagraph, serviceSections } from '@/data/site';

export const metadata: Metadata = buildPageMetadata({
  title: 'Servicii și prețuri pentru nuntă, botez și evenimente',
  description:
    'Pachete foto pentru nuntă, botez și alte evenimente în Cugir, Alba Iulia, Sebeș, Sibiu, Cluj-Napoca și Deva. Structuri de preț clare și servicii personalizate.',
  path: '/services',
  keywords: [
    'preț fotograf nuntă Cugir',
    'fotograf botez Alba Iulia preț',
    'ofertă fotograf eveniment Sibiu',
    'servicii fotograf nuntă Alba'
  ]
});

export default function ServicesPage() {
  return (
    <PageShell className="space-y-16">
      <FadeIn>
        <SectionHeading
          as="h1"
          eyebrow="Servicii & prețuri"
          title="Pachete foto construite pentru momente reale"
          description={
            <p>
              Fiecare eveniment are ritmul lui, așa că pachetele sunt clare, dar flexibile. Dacă ai nevoie de o variantă
              personalizată, trimite-mi detaliile evenimentului.
            </p>
          }
        />
      </FadeIn>

      {serviceSections.map((section, sectionIndex) => (
        <FadeIn key={section.id} delay={sectionIndex * 0.06}>
          <section id={section.id} className="rounded-3xl border border-black/5 bg-white p-8 sm:p-10">
            <h2 className="font-serif text-3xl text-ink sm:text-4xl">{section.title}</h2>
            <p className="mt-4 lead-copy">{section.intro}</p>

            <div className="mt-8 grid gap-8 lg:grid-cols-2">
              <div>
                <h3 className="text-xs uppercase tracking-[0.18em] text-muted">Ce este inclus</h3>
                <ul className="mt-4 space-y-3 text-sm leading-relaxed text-ink/85 sm:text-base">
                  {section.includes.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-gold" aria-hidden="true" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-xs uppercase tracking-[0.18em] text-muted">Structură de preț</h3>
                <div className="mt-4 space-y-4">
                  {section.pricing.map((tier) => (
                    <article key={tier.name} className="rounded-2xl border border-black/10 bg-porcelain p-4">
                      <div className="flex items-baseline justify-between gap-4">
                        <h4 className="font-serif text-2xl text-ink">{tier.name}</h4>
                        <p className="text-sm font-medium text-gold">{tier.price}</p>
                      </div>
                      <p className="mt-2 text-sm leading-relaxed text-muted">{tier.details}</p>
                    </article>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <CtaButton href="/contact">Cere ofertă pentru {section.title.toLowerCase()}</CtaButton>
              <CtaButton href="/portfolio" variant="secondary">
                Vezi galerie relevantă
              </CtaButton>
            </div>
          </section>
        </FadeIn>
      ))}

      <FadeIn>
        <section className="rounded-3xl border border-gold/30 bg-parchment/55 p-8 sm:p-10">
          <h2 className="font-serif text-3xl text-ink sm:text-4xl">Optimizare locală</h2>
          <p className="lead-copy mt-4">{localSeoParagraph}</p>
          <p className="mt-4 text-sm text-muted">
            Pentru date disponibile și un calcul clar al costurilor, trimite un mesaj din pagina de{' '}
            <Link href="/contact" className="underline decoration-gold/60 hover:text-gold">
              contact
            </Link>
            .
          </p>
        </section>
      </FadeIn>
    </PageShell>
  );
}
