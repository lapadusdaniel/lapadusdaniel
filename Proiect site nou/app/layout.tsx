import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { Cormorant_Garamond, Manrope } from 'next/font/google';
import './globals.css';
import { SiteHeader } from '@/components/layout/site-header';
import { SiteFooter } from '@/components/layout/site-footer';
import { SchemaOrg } from '@/components/seo/schema-org';
import { siteConfig } from '@/data/site';

const serif = Cormorant_Garamond({
  subsets: ['latin', 'latin-ext'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-serif',
  display: 'swap'
});

const sans = Manrope({
  subsets: ['latin', 'latin-ext'],
  variable: '--font-sans',
  display: 'swap'
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.baseUrl),
  title: {
    default: siteConfig.defaultTitle,
    template: siteConfig.titleTemplate
  },
  description: siteConfig.description,
  applicationName: 'Daniel Lăpăduș Photography',
  alternates: {
    canonical: siteConfig.baseUrl
  },
  openGraph: {
    type: 'website',
    locale: siteConfig.locale,
    url: siteConfig.baseUrl,
    siteName: siteConfig.photographerName,
    title: siteConfig.defaultTitle,
    description: siteConfig.description,
    images: [
      {
        url: '/_images/214d8a294e546703b25feac911d2f58bb44c4fa0.jpg',
        width: 1200,
        height: 630,
        alt: 'Fotograf nuntă și botez în Cugir, Alba și împrejurimi'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.defaultTitle,
    description: siteConfig.description,
    images: ['/_images/214d8a294e546703b25feac911d2f58bb44c4fa0.jpg']
  },
  category: 'photography',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1
    }
  }
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ro" className={`${serif.variable} ${sans.variable}`}>
      <body className="font-sans antialiased">
        <SchemaOrg />
        <div className="relative flex min-h-screen flex-col">
          <SiteHeader />
          <div className="flex-1">{children}</div>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
