import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getDictionary, hasLocale } from '../dictionaries'
import Navbar from '@/components/Navbar'
import TechStack from '@/components/TechStack'
import Footer from '@/components/Footer'
import ScrollReveal from '@/components/ScrollReveal'
import InteractiveDots from '@/components/InteractiveDots'
import { ArrowLeft, ShieldCheck, Zap, Code2, ArrowRight, Layers } from 'lucide-react'

import JsonLd from '@/components/JsonLd'

interface PageProps {
  params: Promise<{ lang: string }>
}

export async function generateMetadata({ params }: PageProps) {
  const { lang } = await params
  const isEs = lang === 'es'

  const title = isEs
    ? 'Tech Stack & Arquitectura Cloud — AyeApps'
    : 'Tech Stack & Cloud Architecture — AyeApps'
  const description = isEs
    ? 'Herramientas, frameworks y doctrinas de desarrollo que utilizamos: Swift, Next.js, FastAPI, Docker, MongoDB y Cloudflare.'
    : 'Tools, frameworks and engineering doctrines we use: Swift, Next.js, FastAPI, Docker, MongoDB, and Cloudflare.'

  return {
    title,
    description,
    alternates: {
      canonical: `https://ayeapps.com/${lang}/stack`,
      languages: {
        es: 'https://ayeapps.com/es/stack',
        en: 'https://ayeapps.com/en/stack',
      },
    },
    openGraph: {
      title,
      description,
      url: `https://ayeapps.com/${lang}/stack`,
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

export default async function StackPage({ params }: PageProps) {
  const { lang } = await params
  if (!hasLocale(lang)) notFound()

  const dict = await getDictionary(lang)
  const stp = dict.stack_page

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
        name: lang === 'es' ? 'Stack & Arquitectura' : 'Tech Stack',
        item: `https://ayeapps.com/${lang}/stack`,
      },
    ],
  }

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'TechArticle',
    headline: stp.title,
    description: stp.sub,
    author: {
      '@id': 'https://ayeapps.com/#organization',
    },
    publisher: {
      '@id': 'https://ayeapps.com/#organization',
    },
    url: `https://ayeapps.com/${lang}/stack`,
  }

  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={articleSchema} />
      <Navbar dict={dict} lang={lang} />
      <main id="main">
        {/* ─── Page Hero Header (Full-Screen + Interactive Canvas) ─── */}
        <section
          aria-labelledby="stack-hero-heading"
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
                    {stp.badge}
                  </span>
                </div>

                {/* Main Display Headline */}
                <h1
                  id="stack-hero-heading"
                  className="text-[clamp(2.5rem,6.5vw,5.5rem)] font-bold tracking-[-0.03em] leading-[1.04] text-[var(--foreground)] mb-6"
                  style={{ textWrap: 'balance' } as React.CSSProperties}
                >
                  {stp.title}
                </h1>

                {/* Subtitle */}
                <p className="text-base sm:text-lg md:text-xl text-[var(--muted)] leading-relaxed max-w-3xl mb-8 sm:mb-10">
                  {stp.sub}
                </p>

                {/* Action Navigation Buttons */}
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-10 sm:mb-12">
                  <a
                    href="#stack"
                    className="btn-press inline-flex items-center justify-center gap-3
                      bg-[var(--foreground)] hover:bg-[var(--accent-amber)]
                      text-[var(--foreground-inv)] hover:text-black font-semibold
                      px-8 py-4 text-xs uppercase tracking-[0.14em] shadow-sm rounded-xs transition-colors"
                  >
                    <span>{lang === 'es' ? 'Explorar Stack de Tecnología' : 'Explore Tech Stack'}</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>

                  <a
                    href="#principios"
                    className="btn-press inline-flex items-center justify-center gap-2
                      border border-[var(--border-strong)] hover:border-[var(--accent-amber-border)]
                      bg-[var(--surface-raised)] hover:bg-[var(--surface-alt)]
                      text-[var(--foreground)] font-medium
                      px-7 py-4 text-xs uppercase tracking-[0.14em] rounded-xs transition-colors"
                  >
                    <Layers className="w-4 h-4 text-[var(--accent-amber)]" />
                    <span>{lang === 'es' ? 'Doctrina de Ingeniería' : 'Engineering Doctrine'}</span>
                  </a>
                </div>

                {/* Proof Points Grid Bar */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 pt-6 sm:pt-8 border-t border-[var(--border)]">
                  <div className="flex flex-col space-y-1">
                    <span className="text-2xl sm:text-3xl font-bold font-mono text-[var(--foreground)] tracking-tight">
                      TypeScript
                    </span>
                    <span className="text-[11px] uppercase tracking-[0.14em] font-medium text-[var(--muted)]">
                      {lang === 'es' ? 'Tipado Estricto E2E' : 'Strict Type Safety'}
                    </span>
                  </div>

                  <div className="flex flex-col space-y-1">
                    <span className="text-2xl sm:text-3xl font-bold font-mono text-[var(--foreground)] tracking-tight">
                      Swift + FastAPI
                    </span>
                    <span className="text-[11px] uppercase tracking-[0.14em] font-medium text-[var(--muted)]">
                      {lang === 'es' ? 'Rendimiento Nativo' : 'Native Performance'}
                    </span>
                  </div>

                  <div className="flex flex-col space-y-1">
                    <span className="text-2xl sm:text-3xl font-bold font-mono text-[var(--foreground)] tracking-tight">
                      Docker Cloud
                    </span>
                    <span className="text-[11px] uppercase tracking-[0.14em] font-medium text-[var(--muted)]">
                      {lang === 'es' ? 'Aislamiento de Carga' : 'Isolated Containers'}
                    </span>
                  </div>

                  <div className="flex flex-col space-y-1">
                    <span className="text-2xl sm:text-3xl font-bold font-mono text-[var(--foreground)] tracking-tight">
                      &lt; 1.2s
                    </span>
                    <span className="text-[11px] uppercase tracking-[0.14em] font-medium text-[var(--muted)]">
                      {lang === 'es' ? 'Carga Global en Edge' : 'Global Edge Latency'}
                    </span>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* ─── Full Stack Matrix ──────────────────────── */}
        <TechStack dict={dict} lang={lang} />

        {/* ─── Engineering Principles ─────────────────── */}
        <section id="principios" className="py-24 px-4 sm:px-6 bg-[var(--surface)] border-t border-[var(--border)]">
          <div className="max-w-6xl mx-auto">
            <ScrollReveal>
              <div className="mb-16">
                <p className="geo-badge text-xs font-medium tracking-[0.18em] uppercase text-[var(--muted)] mb-3">
                  {stp.principles_badge}
                </p>
                <h2 className="text-2xl sm:text-4xl font-bold text-[var(--foreground)] tracking-tight mb-4">
                  {stp.principles_title}
                </h2>
                {stp.principles_sub && (
                  <p className="text-sm sm:text-base text-[var(--muted)] max-w-2xl leading-relaxed">
                    {stp.principles_sub}
                  </p>
                )}
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {stp.principles.map((pr, idx) => (
                <ScrollReveal key={pr.title} delay={idx * 80}>
                  <div className="bracket-corners card-lift p-6 sm:p-8 rounded-xs border border-[var(--border)] bg-[var(--surface-alt)] h-full flex flex-col justify-between group">
                    <div>
                      <div className="w-8 h-8 rounded-xs bg-[var(--accent-amber-subtle)] border border-[var(--accent-amber-border)] flex items-center justify-center mb-4">
                        {idx === 0 ? <Code2 className="w-4 h-4 text-[var(--accent-amber)]" /> : idx === 1 ? <Zap className="w-4 h-4 text-[var(--accent-amber)]" /> : <ShieldCheck className="w-4 h-4 text-[var(--accent-amber)]" />}
                      </div>
                      <h3 className="text-base sm:text-lg font-bold text-[var(--foreground)] mb-3 group-hover:text-[var(--accent-amber)] transition-colors">
                        {pr.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-[var(--muted)] leading-relaxed">
                        {pr.desc}
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>

            {/* Bottom Consultation Banner */}
            <div className="mt-20 p-8 sm:p-12 bracket-corners border border-[var(--border)] bg-[var(--surface-raised)] flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div className="space-y-2 max-w-xl">
                <p className="geo-badge text-xs font-mono uppercase tracking-[0.16em] text-[var(--muted)]">
                  {lang === 'es' ? 'Arquitectura a Medida' : 'Bespoke Architecture'}
                </p>
                <h3 className="text-xl sm:text-2xl font-bold text-[var(--foreground)] tracking-tight">
                  {lang === 'es'
                    ? '¿Tienes requerimientos técnicos o de infraestructura específicos?'
                    : 'Have specific technical or infrastructure requirements?'}
                </h3>
                <p className="text-xs sm:text-sm text-[var(--muted)] leading-relaxed">
                  {lang === 'es'
                    ? 'Platiquemos directamente sobre la arquitectura, escalabilidad y stack óptimo para tu proyecto.'
                    : 'Connect directly with our engineering team to evaluate architecture, scalability, and stack selection.'}
                </p>
              </div>

              <Link
                href={`/${lang}/contact`}
                className="btn-press inline-flex items-center gap-2 px-8 py-4 text-xs uppercase tracking-[0.14em] font-bold bg-[var(--foreground)] text-[var(--foreground-inv)] hover:bg-[var(--accent-amber)] hover:text-black transition-colors rounded-xs shadow-sm shrink-0"
              >
                <span>{lang === 'es' ? 'Iniciar Evaluación Técnica' : 'Start Technical Assessment'}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer dict={dict} lang={lang} />
    </>
  )
}
