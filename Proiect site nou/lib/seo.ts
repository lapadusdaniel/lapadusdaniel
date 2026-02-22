import type { Metadata } from 'next';
import { siteConfig } from '@/data/site';

const defaultOgImage = '/_images/214d8a294e546703b25feac911d2f58bb44c4fa0.jpg';

export function absoluteUrl(path = ''): string {
  if (!path) {
    return siteConfig.baseUrl;
  }

  const normalized = path.startsWith('/') ? path : `/${path}`;
  return `${siteConfig.baseUrl}${normalized}`;
}

type PageSeoInput = {
  title: string;
  description: string;
  path: string;
  keywords: string[];
  ogImage?: string;
};

export function buildPageMetadata({
  title,
  description,
  path,
  keywords,
  ogImage = defaultOgImage
}: PageSeoInput): Metadata {
  const url = absoluteUrl(path);
  const imageUrl = absoluteUrl(ogImage);

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: url
    },
    openGraph: {
      type: 'website',
      locale: 'ro_RO',
      url,
      title,
      description,
      siteName: siteConfig.photographerName,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: title
        }
      ]
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [imageUrl]
    }
  };
}
