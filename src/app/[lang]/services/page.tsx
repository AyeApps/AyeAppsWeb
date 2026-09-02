import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getDictionary, hasLocale } from '../dictionaries'
import Navbar from '@/components/Navbar'
import Services from '@/components/Services'
import MethodologyFlow from '@/components/MethodologyFlow'
import Footer from '@/components/Footer'
import ScrollReveal from '@/components/ScrollReveal'
import InteractiveDots from '@/components/InteractiveDots'
import { ArrowLeft, ArrowRight, Terminal } from 'lucide-react'

import JsonLd from '@/components/JsonLd'

interface PageProps {
  params: Promise<{ lang: string }>
}

export async function generateMetadata({ params }: PageProps) {
  const { lang } = await params
  const isEs = lang === 'es'

  const title = isEs
    ? 'Servicios de Ingeniería de Software & Cloud — AyeApps'
    : 'Software Engineering & Cloud Services — AyeApps'
  const description = isEs
    ? 'Desarrollo web a medida con Next.js, apps nativas iOS con Swift, arquitectura backend con FastAPI, integraciones con IA y automatización de procesos para negocios.'
    : 'Custom web development with Next.js, native iOS apps with Swift, backend architecture with FastAPI, AI integrations, and workflow automation for businesses.'

  return {
    title,
    description,
    alternates: {
      canonical: `https://ayeapps.com/${lang}/services`,
      languages: {
        es: 'https://ayeapps.com/es/services',
        en: 'https://ayeapps.com/en/services',
      },
    },
    openGraph: {
      title,
      description,
      url: `https://ayeapps.com/${lang}/services`,
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

export default async function ServicesPage({ params }: PageProps) {
  const { lang } = await params
  if (!hasLocale(lang)) notFound()

  const dict = await getDictionary(lang)
  const sp = dict.services_page

  // BreadcrumbList & Services JSON-LD Schemas
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
        name: lang === 'es' ? 'Servicios' : 'Services',
        item: `https://ayeapps.com/${lang}/services`,
      },
    ],
  }

  const servicesSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Software Engineering & Cloud Development',
    provider: {
      '@id': 'https://ayeapps.com/#organization',
    },
    areaServed: {
      '@type': 'Country',
      name: 'Mexico',
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: lang === 'es' ? 'Especialidades de Software AyeApps' : 'AyeApps Software Capabilities',
      itemListElement: dict.services.items.map((item) => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: item.title,
          description: item.description,
        },
      })),
    },
  }

  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={servicesSchema} />
      <Navbar dict={dict} lang={lang} />
      <main id="main">
        {/* ─── Page Hero Header (Full-Screen + Interactive Canvas) ─── */}
        <section
          aria-labelledby="services-hero-heading"
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
                    {sp.badge}
                  </span>
                </div>

                {/* Main Display Headline */}
                <h1
                  id="services-hero-heading"
                  className="text-[clamp(2.5rem,6.5vw,5.5rem)] font-bold tracking-[-0.03em] leading-[1.04] text-[var(--foreground)] mb-6"
                  style={{ textWrap: 'balance' } as React.CSSProperties}
                >
                  {sp.title}
                </h1>

                {/* Subtitle */}
                <p className="text-base sm:text-lg md:text-xl text-[var(--muted)] leading-relaxed max-w-3xl mb-8 sm:mb-10">
                  {sp.sub}
                </p>

                {/* Action Navigation Buttons */}
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-10 sm:mb-12">
                  <a
                    href="#services"
                    className="btn-press inline-flex items-center justify-center gap-3
                      bg-[var(--foreground)] hover:bg-[var(--accent-amber)]
                      text-[var(--foreground-inv)] hover:text-black font-semibold
                      px-8 py-4 text-xs uppercase tracking-[0.14em] shadow-sm rounded-xs transition-colors"
                  >
                    <span>{lang === 'es' ? 'Ver Especialidades' : 'View Specialties'}</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>

                  <a
                    href="#methodology"
                    className="btn-press inline-flex items-center justify-center gap-2
                      border border-[var(--border-strong)] hover:border-[var(--accent-amber-border)]
                      bg-[var(--surface-raised)] hover:bg-[var(--surface-alt)]
                      text-[var(--foreground)] font-medium
                      px-7 py-4 text-xs uppercase tracking-[0.14em] rounded-xs transition-colors"
                  >
                    <Terminal className="w-4 h-4 text-[var(--accent-amber)]" />
                    <span>{lang === 'es' ? 'Metodología de Flujo' : 'Flow Methodology'}</span>
                  </a>
                </div>

                {/* Proof Points Grid Bar */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 pt-6 sm:pt-8 border-t border-[var(--border)]">
                  <div className="flex flex-col space-y-1">
                    <span className="text-2xl sm:text-3xl font-bold font-mono text-[var(--foreground)] tracking-tight">
                      100%
                    </span>
                    <span className="text-[11px] uppercase tracking-[0.14em] font-medium text-[var(--muted)]">
                      {lang === 'es' ? 'Código a Medida' : 'Custom Built'}
                    </span>
                  </div>

                  <div className="flex flex-col space-y-1">
                    <span className="text-2xl sm:text-3xl font-bold font-mono text-[var(--foreground)] tracking-tight">
                      Web + App
                    </span>
                    <span className="text-[11px] uppercase tracking-[0.14em] font-medium text-[var(--muted)]">
                      {lang === 'es' ? 'Ecosistema Unificado' : 'Unified Ecosystem'}
                    </span>
                  </div>

                  <div className="flex flex-col space-y-1">
                    <span className="text-2xl sm:text-3xl font-bold font-mono text-[var(--foreground)] tracking-tight">
                      Real-Time
                    </span>
                    <span className="text-[11px] uppercase tracking-[0.14em] font-medium text-[var(--muted)]">
                      {lang === 'es' ? 'Sincronización Cloud' : 'Cloud Sync'}
                    </span>
                  </div>

                  <div className="flex flex-col space-y-1">
                    <span className="text-2xl sm:text-3xl font-bold font-mono text-[var(--foreground)] tracking-tight">
                      24 / 7
                    </span>
                    <span className="text-[11px] uppercase tracking-[0.14em] font-medium text-[var(--muted)]">
                      {lang === 'es' ? 'Disponibilidad Edge' : 'Edge Availability'}
                    </span>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* ─── Services List ──────────────────────────── */}
        <Services dict={dict} />

        {/* ─── Process & Methodology (Flowchart Pipeline) ─ */}
        <MethodologyFlow
          badge={sp.process_badge}
          title={sp.process_title}
          sub={sp.process_sub}
          decisionGate={sp.decision_gate}
          phases={sp.phases}
          lang={lang}
        />

        {/* ─── Bottom CTA Banner ──────────────────────── */}
        <section className="py-20 px-4 sm:px-6 bg-[var(--surface)] border-t border-[var(--border)] text-center">
          <div className="max-w-4xl mx-auto">
            <ScrollReveal>
              <h3 className="text-2xl sm:text-3xl font-bold text-[var(--foreground)] tracking-tight mb-4">
                {lang === 'es'
                  ? '¿Listo para estructurar tu sistema digital?'
                  : 'Ready to map out your digital system?'}
              </h3>
              <p className="text-xs sm:text-sm text-[var(--muted)] max-w-lg mx-auto mb-8">
                {lang === 'es'
                  ? 'Hablemos directamente sobre tu proyecto, requerimientos de negocio y arquitectura en la nube sin intermediarios.'
                  : 'Connect directly with our engineering team to discuss your project scope and cloud architecture.'}
              </p>
              <Link
                href={`/${lang}/contact`}
                className="btn-press inline-flex items-center gap-2 px-8 py-4 text-xs uppercase tracking-[0.14em] font-semibold bg-[var(--foreground)] text-[var(--foreground-inv)] hover:bg-[var(--accent-amber)] hover:text-black transition-colors rounded-xs shadow-sm"
              >
                {lang === 'es' ? 'Cotizar o Iniciar Proyecto' : 'Scope or Start a Project'}
                <ArrowRight className="w-4 h-4" />
              </Link>
            </ScrollReveal>
          </div>
        </section>
      </main>
      <Footer dict={dict} lang={lang} />
    </>
  )
}
