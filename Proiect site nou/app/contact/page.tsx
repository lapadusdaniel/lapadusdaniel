import type { Metadata } from 'next';
import Link from 'next/link';
import { ContactForm } from '@/components/contact/contact-form';
import { PageShell } from '@/components/layout/page-shell';
import { CtaButton } from '@/components/ui/cta-button';
import { FadeIn } from '@/components/ui/fade-in';
import { SectionHeading } from '@/components/ui/section-heading';
import { buildPageMetadata } from '@/lib/seo';
import { siteConfig } from '@/data/site';

export const metadata: Metadata = buildPageMetadata({
  title: 'Contact fotograf nuntă, botez și eveniment',
  description:
    'Contactează-l pe Daniel Lăpăduș pentru nuntă, botez sau evenimente în Cugir, Alba Iulia, Sebeș, Sibiu, Cluj-Napoca și Deva. Formular rapid, email, telefon și WhatsApp.',
  path: '/contact',
  keywords: [
    'contact fotograf nuntă Cugir',
    'fotograf botez Alba Iulia contact',
    'fotograf eveniment Sibiu contact'
  ]
});

export default function ContactPage() {
  return (
    <PageShell>
      <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="space-y-8">
          <FadeIn>
            <SectionHeading
              as="h1"
              eyebrow="Contact"
              title="Spune-mi despre evenimentul tău"
              description={
                <p>
                  Dacă ai stabilit deja data sau doar vrei să verifici disponibilitatea, trimite-mi câteva detalii și revin
                  rapid cu o ofertă clară.
                </p>
              }
            />
          </FadeIn>

          <FadeIn delay={0.06}>
            <div className="rounded-3xl border border-black/10 bg-white p-6 sm:p-8">
              <h2 className="font-serif text-2xl text-ink">Date de contact</h2>
              <ul className="mt-4 space-y-3 text-sm text-ink sm:text-base">
                <li>
                  Telefon:{' '}
                  <a className="underline decoration-gold/60 hover:text-gold" href={`tel:${siteConfig.phoneRaw}`}>
                    {siteConfig.phoneDisplay}
                  </a>
                </li>
                <li>
                  Email:{' '}
                  <a className="underline decoration-gold/60 hover:text-gold" href={`mailto:${siteConfig.email}`}>
                    {siteConfig.email}
                  </a>
                </li>
                <li>
                  Instagram:{' '}
                  <a className="underline decoration-gold/60 hover:text-gold" href={siteConfig.instagram} target="_blank" rel="noreferrer">
                    @lapadusdaniel.photo
                  </a>
                </li>
              </ul>

              <p className="mt-6 text-sm leading-relaxed text-muted">
                Disponibil pentru Cugir, Alba Iulia, Sebeș, Sibiu, Cluj, Deva și împrejurimi.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <CtaButton href={siteConfig.whatsapp} target="_blank" rel="noreferrer">
                  Scrie pe WhatsApp
                </CtaButton>
                <CtaButton href={`mailto:${siteConfig.email}`} variant="secondary">
                  Trimite email
                </CtaButton>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <p className="text-xs text-muted">
              Prin trimiterea formularului ești de acord să folosești datele tale strict pentru răspunsul la solicitare.
            </p>
            <p className="mt-2 text-xs text-muted">
              Preferi un mesaj rapid? Folosește direct{' '}
              <Link href={siteConfig.whatsapp} target="_blank" rel="noreferrer" className="underline decoration-gold/60 hover:text-gold">
                WhatsApp
              </Link>
              .
            </p>
          </FadeIn>
        </div>

        <FadeIn>
          <ContactForm />
        </FadeIn>
      </div>
    </PageShell>
  );
}
