import type { MetadataRoute } from 'next'
import { CASE_STUDIES } from '@/data/caseStudies'

export const dynamic = 'force-static'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://ayeapps.com'
  const currentDate = new Date()

  const staticPages = ['', '/services', '/portfolio', '/stack', '/contact']
  const languages = ['es', 'en']

  const routes: MetadataRoute.Sitemap = []

  // Root entry
  routes.push({
    url: baseUrl,
    lastModified: currentDate,
    changeFrequency: 'daily',
    priority: 1.0,
    alternates: {
      languages: {
        es: `${baseUrl}/es`,
        en: `${baseUrl}/en`,
      },
    },
  })

  // Localized static routes
  for (const page of staticPages) {
    for (const lang of languages) {
      routes.push({
        url: `${baseUrl}/${lang}${page}`,
        lastModified: currentDate,
        changeFrequency: page === '' ? 'daily' : 'weekly',
        priority: page === '' ? 1.0 : page === '/portfolio' || page === '/services' ? 0.9 : 0.8,
        alternates: {
          languages: {
            es: `${baseUrl}/es${page}`,
            en: `${baseUrl}/en${page}`,
          },
        },
      })
    }
  }

  // Dynamic Case Studies
  const slugs = Object.keys(CASE_STUDIES)
  for (const slug of slugs) {
    for (const lang of languages) {
      routes.push({
        url: `${baseUrl}/${lang}/portfolio/${slug}`,
        lastModified: currentDate,
        changeFrequency: 'monthly',
        priority: 0.85,
        alternates: {
          languages: {
            es: `${baseUrl}/es/portfolio/${slug}`,
            en: `${baseUrl}/en/portfolio/${slug}`,
          },
        },
      })
    }
  }

  return routes
}
