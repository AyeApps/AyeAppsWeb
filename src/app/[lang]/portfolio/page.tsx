import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getDictionary, hasLocale } from '../dictionaries'
import Navbar from '@/components/Navbar'
import ProjectsShowcase from '@/components/ProjectsShowcase'
import Footer from '@/components/Footer'
import ScrollReveal from '@/components/ScrollReveal'
import InteractiveDots from '@/components/InteractiveDots'
import { ArrowLeft, ArrowRight, Layers } from 'lucide-react'

import JsonLd from '@/components/JsonLd'
import { PROJECTS } from '@/data/projects'

interface PageProps {
  params: Promise<{ lang: string }>
}

export async function generateMetadata({ params }: PageProps) {
  const { lang } = await params
  const isEs = lang === 'es'

  const title = isEs
    ? 'Ecosistema de Productos & Plataformas — AyeApps'
    : 'Ecosystem of Products & Platforms — AyeApps'
  const description = isEs
    ? 'Catálogo de plataformas y productos de software construidos por AyeApps: Fatima Resendiz, AyeTasks, Aye Video Downloader y AyeFinance.'
    : 'Complete catalog of production platforms and engineered software by AyeApps: Fatima Resendiz, AyeTasks, Aye Video Downloader, and AyeFinance.'

  return {
    title,
    description,
    alternates: {
      canonical: `https://ayeapps.com/${lang}/portfolio`,
      languages: {
        es: 'https://ayeapps.com/es/portfolio',
        en: 'https://ayeapps.com/en/portfolio',
      },
    },
    openGraph: {
      title,
      description,
      url: `https://ayeapps.com/${lang}/portfolio`,
      siteName: 'AyeApps',
      locale: isEs ? 'es_MX' : 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      creator: '@alberto24dev',
      site: '@ayeapps',
    },
  }
}

export function generateStaticParams() {
  return [{ lang: 'es' }, { lang: 'en' }]
}

export default async function PortfolioPage({ params }: PageProps) {
  const { lang } = await params
  if (!hasLocale(lang)) notFound()

  const dict = await getDictionary(lang)
  const pp = dict.portfolio_page
  const isEs = lang === 'es'

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: lang === 'es' ? 'Inicio' : 'Home',
        item: `https://ayeapps.com/${lang}`,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: lang === 'es' ? 'Portafolio' : 'Portfolio',
        item: `https://ayeapps.com/${lang}/portfolio`,
      },
    ],
  }

  const collectionSchema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: isEs ? 'Ecosistema de Productos & Plataformas AyeApps' : 'AyeApps Ecosystem & Product Catalog',
    url: `https://ayeapps.com/${lang}/portfolio`,
    description: pp.sub,
    hasPart: PROJECTS.map((proj) => ({
      '@type': 'SoftwareApplication',
      name: proj.title,
      description: proj.description[lang as 'es' | 'en'],
      applicationCategory: proj.category === 'mobile' ? 'MobileApplication' : 'WebApplication',
      operatingSystem: proj.category === 'mobile' ? 'iOS, Android' : 'Web, Cloud',
      url: ['fatima-resendiz', 'aye-video-downloader'].includes(proj.slug)
        ? `https://ayeapps.com/${lang}/portfolio/${proj.slug}`
        : `https://ayeapps.com/${lang}/portfolio`,
    })),
  }

  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={collectionSchema} />
      <Navbar dict={dict} lang={lang} />
      <main id="main">
        {/* ─── Page Hero Header (Full-Screen + Interactive Canvas) ─── */}
        <section
          aria-labelledby="portfolio-hero-heading"
          className="relative min-h-screen min-h-[100dvh] flex flex-col justify-center overflow-hidden px-4 sm:px-6 pt-24 pb-12 bg-[var(--surface)] border-b border-[var(--border)]"
        >
          {/* Interactive Dot Grid Background with Amber Sweep & Cursor Illumination */}
          <InteractiveDots />

          {/* Cyber-Amber Accent Line */}
          <div
            aria-hidden="true"
            className="absolute left-0 top-[38%] w-[24vw] h-[1.5px] pointer-events-none overflow-hidden"
          >
            <div className="hero-line-draw w-full h-full bg-[var(--accent-amber)]" />
          </div>

          <div className="relative z-10 max-w-6xl mx-auto w-full">
            <ScrollReveal>
              <Link
                href={`/${lang}`}
                className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.14em] text-[var(--muted)] hover:text-[var(--accent-amber)] transition-colors mb-6 group w-fit"
              >
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                <span>{lang === 'es' ? 'Volver al Inicio' : 'Back to Home'}</span>
              </Link>

              <div className="max-w-4xl">
                {/* Geo Badge with Pulse */}
                <div className="geo-badge mb-6 w-fit">
                  <span className="inline-flex items-center gap-2 px-3.5 py-1.5 text-[11px] font-mono uppercase tracking-[0.18em] rounded-xs border border-[var(--border-strong)] bg-[var(--surface-raised)] text-[var(--foreground)]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-amber)] animate-ping" />
                    {pp.badge}
                  </span>
                </div>

                {/* Main Display Headline */}
                <h1
                  id="portfolio-hero-heading"
                  className="text-[clamp(2.5rem,6.5vw,5.5rem)] font-bold tracking-[-0.03em] leading-[1.04] text-[var(--foreground)] mb-6"
                  style={{ textWrap: 'balance' } as React.CSSProperties}
                >
                  {pp.title}
                </h1>

                {/* Subtitle */}
                <p className="text-base sm:text-lg md:text-xl text-[var(--muted)] leading-relaxed max-w-3xl mb-8 sm:mb-10">
                  {pp.sub}
                </p>

                {/* Action Navigation Buttons */}
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-10 sm:mb-12">
                  <a
                    href="#portfolio"
                    className="btn-press inline-flex items-center justify-center gap-3
                      bg-[var(--foreground)] hover:bg-[var(--accent-amber)]
                      text-[var(--foreground-inv)] hover:text-black font-semibold
                      px-8 py-4 text-xs uppercase tracking-[0.14em] shadow-sm rounded-xs transition-colors"
                  >
                    <span>{lang === 'es' ? 'Explorar Sistemas' : 'Explore Systems'}</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>

                  <Link
                    href={`/${lang}/services`}
                    className="btn-press inline-flex items-center justify-center gap-2
                      border border-[var(--border-strong)] hover:border-[var(--accent-amber-border)]
                      bg-[var(--surface-raised)] hover:bg-[var(--surface-alt)]
                      text-[var(--foreground)] font-medium
                      px-7 py-4 text-xs uppercase tracking-[0.14em] rounded-xs transition-colors"
                  >
                    <Layers className="w-4 h-4 text-[var(--accent-amber)]" />
                    <span>{lang === 'es' ? 'Servicios & Metodología' : 'Services & Process'}</span>
                  </Link>
                </div>

                {/* Proof Points Grid Bar */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 pt-6 sm:pt-8 border-t border-[var(--border)]">
                  <div className="flex flex-col space-y-1">
                    <span className="text-2xl sm:text-3xl font-bold font-mono text-[var(--foreground)] tracking-tight">
                      100%
                    </span>
                    <span className="text-[11px] uppercase tracking-[0.14em] font-medium text-[var(--muted)]">
                      {lang === 'es' ? 'Producción Real' : 'Live Production'}
                    </span>
                  </div>

                  <div className="flex flex-col space-y-1">
                    <span className="text-2xl sm:text-3xl font-bold font-mono text-[var(--foreground)] tracking-tight">
                      Web + App
                    </span>
                    <span className="text-[11px] uppercase tracking-[0.14em] font-medium text-[var(--muted)]">
                      {lang === 'es' ? 'Ecosistemas Conectados' : 'Connected Ecosystems'}
                    </span>
                  </div>

                  <div className="flex flex-col space-y-1">
                    <span className="text-2xl sm:text-3xl font-bold font-mono text-[var(--foreground)] tracking-tight">
                      FastAPI + Swift
                    </span>
                    <span className="text-[11px] uppercase tracking-[0.14em] font-medium text-[var(--muted)]">
                      {lang === 'es' ? 'Arquitectura Nativa' : 'Native Architecture'}
                    </span>
                  </div>

                  <div className="flex flex-col space-y-1">
                    <span className="text-2xl sm:text-3xl font-bold font-mono text-[var(--foreground)] tracking-tight">
                      Edge Global
                    </span>
                    <span className="text-[11px] uppercase tracking-[0.14em] font-medium text-[var(--muted)]">
                      {lang === 'es' ? 'Cero Latencia' : 'Zero Latency'}
                    </span>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* ─── Filterable Showcase Catalog ───────────── */}
        <ProjectsShowcase dict={dict} lang={lang} />
      </main>
      <Footer dict={dict} lang={lang} />
    </>
  )
}
