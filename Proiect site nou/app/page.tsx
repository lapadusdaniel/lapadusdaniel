import type { Metadata } from 'next';
import Image from 'next/image';
import { CtaButton } from '@/components/ui/cta-button';
import { FadeIn } from '@/components/ui/fade-in';
import { SectionHeading } from '@/components/ui/section-heading';
import { PageShell } from '@/components/layout/page-shell';
import { buildPageMetadata } from '@/lib/seo';
import {
  featuredBaptisms,
  featuredWeddings,
  localSeoParagraph,
  siteConfig,
  testimonials
} from '@/data/site';

export const metadata: Metadata = buildPageMetadata({
  title: 'Fotograf nuntă & botez în Cugir, Alba și împrejurimi',
  description:
    'Fotograf nuntă și botez în Cugir, Alba Iulia, Sebeș, Sibiu, Cluj-Napoca și Deva. Imagini naturale, luminoase și autentice pentru cele mai importante momente.',
  path: '/',
  keywords: [
    'fotograf nuntă Cugir',
    'fotograf nuntă Alba',
    'fotograf botez Cugir',
    'fotograf botez Alba Iulia',
    'fotograf eveniment Sibiu'
  ]
});

export default function HomePage() {
  return (
    <>
      <section className="mx-auto mt-10 w-full max-w-6xl px-6 sm:px-8">
        <div className="relative overflow-hidden rounded-[2rem] border border-black/5 bg-white shadow-soft">
          <div className="relative h-[68vh] min-h-[480px] w-full">
            <Image
              src="/_images/214d8a294e546703b25feac911d2f58bb44c4fa0.jpg"
              alt="Miri într-o lumină caldă, fotograf nuntă Cugir"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 1200px"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-white/85 via-white/55 to-white/10" />

            <div className="relative z-10 flex h-full max-w-2xl flex-col justify-center gap-6 px-7 py-12 sm:px-12">
              <FadeIn>
                <p className="text-xs uppercase tracking-[0.22em] text-muted">Fotografie de eveniment în județul Alba</p>
              </FadeIn>
              <FadeIn delay={0.08}>
                <h1 className="font-serif text-4xl leading-tight text-ink sm:text-6xl">
                  Fotograf nuntă & botez în Cugir, Alba și împrejurimi
                </h1>
              </FadeIn>
              <FadeIn delay={0.16}>
                <p className="text-sm leading-relaxed text-ink/80 sm:text-lg">
                  Imagini naturale, luminoase și autentice pentru cele mai importante momente din viața ta.
                </p>
              </FadeIn>
              <FadeIn delay={0.22}>
                <div className="flex flex-wrap gap-3">
                  <CtaButton href="/portfolio">Vezi portofoliul</CtaButton>
                  <CtaButton href="/contact" variant="secondary">
                    Cere ofertă
                  </CtaButton>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      <PageShell className="space-y-20">
        <FadeIn>
          <div className="mx-auto max-w-reading text-center">
            <SectionHeading
              align="center"
              eyebrow="Povestea voastră, așa cum este"
              title="Fotografie calmă, elegantă și sinceră"
              description={
                <p>
                  Lucrez discret, cu atenție la lumină și la emoțiile reale dintre oameni. Rezultatul: un set de imagini
                  curate, care păstrează energia zilei fără să o transforme în ceva artificial.
                </p>
              }
            />
          </div>
        </FadeIn>

        <section className="space-y-8" aria-labelledby="featured-weddings">
          <FadeIn>
            <SectionHeading
              eyebrow="Selecție"
              title="Nunți recente"
              description={<p>Cadre din evenimente fotografiate în Cugir, Alba și Sebeș.</p>}
            />
          </FadeIn>

          <div className="grid gap-6 md:grid-cols-3">
            {featuredWeddings.map((item, index) => (
              <FadeIn key={item.title} delay={index * 0.06}>
                <article className="overflow-hidden rounded-3xl border border-black/5 bg-white">
                  <div className="relative aspect-[4/5] overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.alt}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover transition duration-700 hover:scale-[1.04]"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="font-serif text-2xl text-ink">{item.title}</h3>
                    <p className="mt-1 text-sm text-muted">{item.location}</p>
                  </div>
                </article>
              </FadeIn>
            ))}
          </div>
        </section>

        <section className="space-y-8" aria-labelledby="featured-baptisms">
          <FadeIn>
            <SectionHeading
              eyebrow="Selecție"
              title="Botezuri recente"
              description={<p>Imagini calde și naturale din botezuri în Cugir și Alba Iulia.</p>}
            />
          </FadeIn>

          <div className="grid gap-6 md:grid-cols-3">
            {featuredBaptisms.map((item, index) => (
              <FadeIn key={item.title} delay={index * 0.06}>
                <article className="overflow-hidden rounded-3xl border border-black/5 bg-white">
                  <div className="relative aspect-[4/5] overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.alt}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover transition duration-700 hover:scale-[1.04]"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="font-serif text-2xl text-ink">{item.title}</h3>
                    <p className="mt-1 text-sm text-muted">{item.location}</p>
                  </div>
                </article>
              </FadeIn>
            ))}
          </div>
        </section>

        <section className="space-y-8" aria-labelledby="testimonials">
          <FadeIn>
            <SectionHeading
              eyebrow="Recomandări"
              title="Ce spun cuplurile și familiile"
              description={<p>Feedback real după nunți, botezuri și evenimente private.</p>}
            />
          </FadeIn>

          <div className="grid gap-6 md:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <FadeIn key={testimonial.name} delay={index * 0.05}>
                <blockquote className="soft-panel rounded-3xl p-6">
                  <p className="text-sm leading-relaxed text-ink/85">“{testimonial.quote}”</p>
                  <footer className="mt-4 text-xs uppercase tracking-[0.16em] text-muted">{testimonial.name}</footer>
                </blockquote>
              </FadeIn>
            ))}
          </div>
        </section>

        <section className="rounded-3xl border border-gold/25 bg-parchment/55 p-8 sm:p-10" aria-labelledby="locations-seo">
          <FadeIn>
            <h2 id="locations-seo" className="font-serif text-3xl text-ink sm:text-4xl">
              Zone acoperite
            </h2>
            <p className="lead-copy mt-4">{localSeoParagraph}</p>
            <p className="mt-5 text-sm text-muted">
              Pentru disponibilitate și ofertă personalizată, trimite un mesaj pe WhatsApp sau folosește formularul de
              contact.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <CtaButton href={siteConfig.whatsapp} target="_blank" rel="noreferrer">
                Scrie pe WhatsApp
              </CtaButton>
              <CtaButton href="/contact" variant="secondary">
                Mergi la contact
              </CtaButton>
            </div>
          </FadeIn>
        </section>
      </PageShell>
    </>
  );
}
