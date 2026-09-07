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
    contactPoint: [
      {
        '@type': 'ContactPoint',
        email: 'alberto@contact.ayeapps.com',
        telephone: '+52-442-352-2387',
        contactType: 'customer support',
        areaServed: ['MX', 'US', 'ES', 'Global'],
        availableLanguage: ['Spanish', 'English'],
      },
      {
        '@type': 'ContactPoint',
        email: 'alberto@contact.ayeapps.com',
        telephone: '+52-442-352-2387',
        contactType: 'technical support',
        areaServed: ['MX', 'US', 'ES', 'Global'],
        availableLanguage: ['Spanish', 'English'],
      },
    ],
    sameAs: [
      'https://github.com/ayeapps',
      'https://linkedin.com/in/alberto24dev',
      'https://www.instagram.com/aye_apps_dev/',
      'https://x.com/ayeapps',
    ],
    hasPart: [
      {
        '@type': 'WebApplication',
        '@id': 'https://video.ayeapps.com/#app',
        name: 'AyeVideoDownloader',
        url: 'https://video.ayeapps.com',
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'All',
        description:
          lang === 'es'
            ? 'Descargador Multimedia 4K UHD y conversor de audio MP3 de alta fidelidad sin pérdida.'
            : 'Lossless 4K UHD multimedia downloader and high-fidelity MP3 conversion engine.',
      },
      {
        '@type': 'WebApplication',
        '@id': 'https://tasks.ayeapps.com/#app',
        name: 'AyeTasks',
        url: 'https://tasks.ayeapps.com',
        applicationCategory: 'ProductivityApplication',
        operatingSystem: 'All',
        description:
          lang === 'es'
            ? 'Gestor jerárquico de proyectos y tareas con agendamiento polimórfico y sincronización cloud en tiempo real.'
            : 'Hierarchical project and task manager with polymorphic scheduling and real-time cloud sync.',
      },
      {
        '@type': 'WebApplication',
        '@id': 'https://finance.ayeapps.com/#app',
        name: 'AyeFinance',
        url: 'https://finance.ayeapps.com',
        applicationCategory: 'FinanceApplication',
        operatingSystem: 'All',
        description:
          lang === 'es'
            ? 'Plataforma de inteligencia financiera, control de flujo de caja y balances multicuentas en tiempo real.'
            : 'Financial intelligence platform, real-time cash flow control, and multi-account balance management.',
      },
      {
        '@type': 'WebApplication',
        '@id': 'https://accounts.ayeapps.com/#app',
        name: 'AyeAuth',
        url: 'https://accounts.ayeapps.com',
        applicationCategory: 'SecurityApplication',
        operatingSystem: 'All',
        description:
          lang === 'es'
            ? 'Servicio centralizado de identidad, autenticación unificada SSO y gestión de accesos para la suite AyeApps.'
            : 'Centralized identity provider, unified SSO, and permission management for the AyeApps suite.',
      },
    ],
    owns: [
      {
        '@type': 'OwnershipInfo',
        typeOfGood: {
          '@type': 'WebApplication',
          name: 'AyeVideoDownloader',
          url: 'https://video.ayeapps.com',
        },
      },
      {
        '@type': 'OwnershipInfo',
        typeOfGood: {
          '@type': 'WebApplication',
          name: 'AyeTasks',
          url: 'https://tasks.ayeapps.com',
        },
      },
      {
        '@type': 'OwnershipInfo',
        typeOfGood: {
          '@type': 'WebApplication',
          name: 'AyeFinance',
          url: 'https://finance.ayeapps.com',
        },
      },
      {
        '@type': 'OwnershipInfo',
        typeOfGood: {
          '@type': 'WebApplication',
          name: 'AyeAuth',
          url: 'https://accounts.ayeapps.com',
        },
      },
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
