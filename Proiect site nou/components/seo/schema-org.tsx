import { siteConfig, locations } from '@/data/site';

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': ['LocalBusiness', 'Photographer'],
  '@id': `${siteConfig.baseUrl}#business`,
  name: 'Daniel Lăpăduș Photography',
  image: `${siteConfig.baseUrl}/_images/214d8a294e546703b25feac911d2f58bb44c4fa0.jpg`,
  url: siteConfig.baseUrl,
  telephone: siteConfig.phoneRaw,
  email: siteConfig.email,
  priceRange: '$$',
  areaServed: locations,
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'RO',
    addressRegion: 'Alba'
  },
  sameAs: [siteConfig.instagram, siteConfig.facebook],
  description:
    'Fotograf de nuntă, botez și eveniment în Cugir, Alba Iulia, Sebeș, Sibiu, Cluj-Napoca și Deva.'
};

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${siteConfig.baseUrl}#website`,
  name: 'Daniel Lăpăduș Photography',
  url: siteConfig.baseUrl,
  inLanguage: 'ro-RO'
};

export function SchemaOrg() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema)
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteSchema)
        }}
      />
    </>
  );
}
