import { hasLocale } from './dictionaries'
import { notFound } from 'next/navigation'
import HtmlLang from '@/components/HtmlLang'
import JsonLd from '@/components/JsonLd'

export function generateStaticParams() {
  return [{ lang: 'es' }, { lang: 'en' }]
}

export default async function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ lang: string }>
}) {
  const { lang } = await params
  if (!hasLocale(lang)) notFound()

  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': 'https://ayeapps.com/#organization',
    name: 'AyeApps',
    alternateName: 'AyeApps Software Engineering',
    url: 'https://ayeapps.com',
    logo: 'https://ayeapps.com/logo.svg',
    description:
      lang === 'es'
        ? 'Ingeniería de software a medida, desarrollo de plataformas web con Next.js, aplicaciones nativas iOS y arquitecturas cloud con FastAPI en Querétaro, México.'
        : 'Custom software engineering, high-performance web platforms with Next.js, native iOS apps, and cloud architectures with FastAPI in Querétaro, Mexico.',
    founder: {
      '@type': 'Person',
      name: 'Alberto Montero',
      jobTitle: 'Lead Software Architect',
      url: 'https://linkedin.com/in/alberto24dev',
    },
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Querétaro',
      addressRegion: 'QRO',
      addressCountry: 'MX',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      email: 'alberto@contact.ayeapps.com',
      telephone: '+52-442-352-2387',
      contactType: 'customer support',
      availableLanguage: ['Spanish', 'English'],
    },
    sameAs: [
      'https://github.com/ayeapps',
      'https://linkedin.com/in/alberto24dev',
      'https://www.instagram.com/aye_apps_dev/',
    ],
  }

  return (
    <div className="relative min-h-screen">
      <JsonLd data={organizationSchema} />
      <HtmlLang lang={lang} />

      {/* Global Animated Dot Matrix Background across ALL screens */}
      <div
        aria-hidden="true"
        className="fixed inset-0 pointer-events-none z-0 dot-pattern-animated"
      />

      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100]
          focus:bg-black focus:text-white focus:px-4 focus:py-2
          focus:text-xs focus:font-mono focus:border focus:border-[var(--accent-amber)]"
      >
        {lang === 'es' ? 'Saltar al contenido principal' : 'Skip to main content'}
      </a>

      <div className="relative z-10 flex flex-col min-h-screen">
        {children}
      </div>
    </div>
  )
}
