import type { MetadataRoute } from 'next';
import { siteConfig } from '@/data/site';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return [
    {
      url: `${siteConfig.baseUrl}/`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 1
    },
    {
      url: `${siteConfig.baseUrl}/portfolio`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.9
    },
    {
      url: `${siteConfig.baseUrl}/services`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.85
    },
    {
      url: `${siteConfig.baseUrl}/about`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.7
    },
    {
      url: `${siteConfig.baseUrl}/contact`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.8
    }
  ];
}
