import type { Metadata } from 'next';
import Image from 'next/image';
import { PageShell } from '@/components/layout/page-shell';
import { CtaButton } from '@/components/ui/cta-button';
import { FadeIn } from '@/components/ui/fade-in';
import { SectionHeading } from '@/components/ui/section-heading';
import { aboutContent } from '@/data/site';
import { buildPageMetadata } from '@/lib/seo';

export const metadata: Metadata = buildPageMetadata({
  title: 'Despre Daniel Lăpăduș',
  description:
    'Povestea fotografului Daniel Lăpăduș: abordare naturală, stil luminos și experiență în nunți, botezuri și evenimente în Cugir și Alba.',
  path: '/about',
  keywords: ['despre fotograf nuntă Cugir', 'fotograf botez Alba poveste', 'Daniel Lăpăduș fotograf']
});

export default function AboutPage() {
  return (
    <PageShell className="space-y-14">
      <FadeIn>
        <SectionHeading
          as="h1"
          eyebrow="Despre mine"
          title="Salut, eu sunt Daniel"
          description={
            <p>
              Fiecare eveniment are energia lui. Rolul meu este să o păstrez în imagini curate, care să vă readucă exact
              emoția zilei.
            </p>
          }
        />
      </FadeIn>

      <section className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <FadeIn>
          <div className="overflow-hidden rounded-3xl border border-black/5 bg-white">
            <Image
              src={aboutContent.portrait.src}
              alt={aboutContent.portrait.alt}
              width={aboutContent.portrait.width}
              height={aboutContent.portrait.height}
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="h-auto w-full"
              priority
            />
          </div>
        </FadeIn>

        <div className="space-y-8">
          <FadeIn delay={0.05}>
            <article>
              <h2 className="font-serif text-3xl text-ink">Poveste</h2>
              <div className="mt-4 space-y-4 text-sm leading-relaxed text-ink/85 sm:text-base">
                {aboutContent.story.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </article>
          </FadeIn>

          <FadeIn delay={0.1}>
            <article>
              <h2 className="font-serif text-3xl text-ink">Filosofie</h2>
              <p className="mt-4 text-sm leading-relaxed text-ink/85 sm:text-base">{aboutContent.philosophy}</p>
            </article>
          </FadeIn>

          <FadeIn delay={0.16}>
            <article>
              <h2 className="font-serif text-3xl text-ink">De ce să mă alegi</h2>
              <ul className="mt-4 space-y-3 text-sm leading-relaxed text-ink/85 sm:text-base">
                {aboutContent.whyChooseMe.map((reason) => (
                  <li key={reason} className="flex items-start gap-3">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-gold" aria-hidden="true" />
                    <span>{reason}</span>
                  </li>
                ))}
              </ul>
            </article>
          </FadeIn>

          <FadeIn delay={0.22}>
            <div className="flex flex-wrap gap-3">
              <CtaButton href="/contact">Hai să discutăm evenimentul tău</CtaButton>
              <CtaButton href="/portfolio" variant="secondary">
                Vezi portofoliul complet
              </CtaButton>
            </div>
          </FadeIn>
        </div>
      </section>
    </PageShell>
  );
}
