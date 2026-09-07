import type { MetadataRoute } from 'next'

export const dynamic = 'force-static'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/_next/static/media/'],
      },
      {
        userAgent: 'Googlebot',
        allow: '/',
        disallow: ['/_next/static/media/'],
      },
    ],
    sitemap: 'https://ayeapps.com/sitemap.xml',
    host: 'https://ayeapps.com',
  }
}
