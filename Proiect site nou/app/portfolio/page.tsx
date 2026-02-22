import type { Metadata } from 'next';
import { PageShell } from '@/components/layout/page-shell';
import { FadeIn } from '@/components/ui/fade-in';
import { SectionHeading } from '@/components/ui/section-heading';
import { PortfolioGrid } from '@/components/portfolio/portfolio-grid';
import { buildPageMetadata } from '@/lib/seo';

export const metadata: Metadata = buildPageMetadata({
  title: 'Portofoliu foto nunți, botezuri și evenimente',
  description:
    'Portofoliu foto cu nunți, botezuri și alte evenimente fotografiate în Cugir, Alba Iulia, Sebeș, Sibiu, Cluj-Napoca și Deva. Filtrare rapidă și galerie lightbox.',
  path: '/portfolio',
  keywords: [
    'portofoliu fotograf nuntă Cugir',
    'fotograf botez Alba Iulia portofoliu',
    'fotograf eveniment Sibiu galerie foto',
    'fotograf nuntă Alba portofoliu'
  ]
});

export default function PortfolioPage() {
  return (
    <PageShell>
      <FadeIn>
        <SectionHeading
          as="h1"
          eyebrow="Portofoliu"
          title="Nunți, botezuri și momente care rămân"
          description={
            <p>
              Explorează galeria și filtrează rapid categoriile de interes: nuntă, botez sau alte evenimente.
            </p>
          }
        />
      </FadeIn>

      <div className="mt-10">
        <PortfolioGrid />
      </div>
    </PageShell>
  );
}
