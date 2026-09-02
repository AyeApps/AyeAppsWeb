import type { MetadataRoute } from 'next'

export const dynamic = 'force-static'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'AyeApps — Sistemas de Software Completos & Plataformas Cloud',
    short_name: 'AyeApps',
    description: 'Ingeniería y desarrollo de sistemas de software completos en Querétaro, México.',
    start_url: '/',
    display: 'standalone',
    background_color: '#050505',
    theme_color: '#FE9D01',
    icons: [
      {
        src: '/favicon.svg',
        sizes: 'any',
        type: 'image/svg+xml',
      },
      {
        src: '/logo.svg',
        sizes: 'any',
        type: 'image/svg+xml',
      },
    ],
  }
}
