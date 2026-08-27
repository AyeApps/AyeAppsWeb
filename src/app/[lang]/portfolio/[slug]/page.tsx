import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getDictionary, hasLocale } from '../../dictionaries'
import { CASE_STUDIES } from '@/data/caseStudies'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ScrollReveal from '@/components/ScrollReveal'
import {
  ArrowLeft,
  ExternalLink,
  Layers,
  Cpu,
  ShieldCheck,
  Zap,
  CheckCircle2,
  Calendar,
  User,
  Clock,
  Download,
  Laptop,
  Server,
  Sparkles
} from 'lucide-react'
import { GithubIcon } from '@/components/Icons'

interface PageProps {
  params: Promise<{ lang: string; slug: string }>
}

export function generateStaticParams() {
  const slugs = Object.keys(CASE_STUDIES)
  const params: { lang: string; slug: string }[] = []

  for (const lang of ['es', 'en']) {
    for (const slug of slugs) {
      params.push({ lang, slug })
    }
  }

  return params
}

export async function generateMetadata({ params }: PageProps) {
  const { lang, slug } = await params
  const isEs = lang === 'es'
  const study = CASE_STUDIES[slug]

  if (!study) {
    return {
      title: 'Caso de Estudio — AyeApps',
    }
  }

  return {
    title: `${study.title} — Caso de Estudio · AyeApps`,
    description: study.heroTagline[isEs ? 'es' : 'en'],
  }
}

export default async function CaseStudyPage({ params }: PageProps) {
  const { lang, slug } = await params
  if (!hasLocale(lang)) notFound()

  const study = CASE_STUDIES[slug]
  if (!study) notFound()

  const dict = await getDictionary(lang)
  const l = lang as 'es' | 'en'

  return (
    <>
      <Navbar dict={dict} lang={lang} />
      <main id="main">
        {/* ─── Hero Section ───────────────────────────── */}
        <section className="pt-36 pb-20 px-4 sm:px-6 bg-[var(--surface)] dot-pattern border-b border-[var(--border)] relative overflow-hidden">
          {/* Subtle Ambient Radial */}
          <div
            aria-hidden="true"
            className="absolute top-1/4 right-[-10%] w-[500px] h-[500px] rounded-full bg-[var(--accent-amber-subtle)] blur-3xl pointer-events-none opacity-50"
          />

          <div className="max-w-6xl mx-auto relative z-10">
            <ScrollReveal>
              {/* Back navigation */}
              <Link
                href={`/${lang}/portfolio`}
                className="inline-flex items-center gap-2 text-xs font-mono text-[var(--muted)] hover:text-[var(--accent-amber)] transition-colors mb-10 group"
              >
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                <span>{l === 'es' ? 'Volver al Ecosistema' : 'Back to Ecosystem'}</span>
              </Link>

              {/* Geo-Badge & Category */}
              <div className="flex flex-wrap items-center gap-3 mb-6">
                <span className="geo-badge text-xs font-medium tracking-[0.18em] uppercase text-[var(--muted)]">
                  {l === 'es' ? 'Caso de Estudio · Ingeniería' : 'Case Study · Engineering'}
                </span>
                <span className="text-xs font-mono px-2.5 py-0.5 rounded-xs border border-[var(--border-strong)] bg-[var(--surface-raised)] text-[var(--foreground)]">
                  {study.projectType[l]}
                </span>
              </div>

              {/* Title & Tagline */}
              <h1
                className="text-4xl sm:text-6xl md:text-7xl font-bold text-[var(--foreground)] tracking-tight mb-8"
                style={{ textWrap: 'balance' } as React.CSSProperties}
              >
                {study.title}
              </h1>

              <p className="text-lg sm:text-xl text-[var(--muted)] max-w-3xl leading-relaxed mb-12">
                {study.heroTagline[l]}
              </p>

              {/* Meta Grid & Action Link */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 py-6 border-y border-[var(--border)] mb-8">
                <div>
                  <span className="text-[10px] uppercase font-mono tracking-wider text-[var(--muted)] block mb-1">
                    {l === 'es' ? 'Cliente / Origen' : 'Client / Origin'}
                  </span>
                  <span className="text-sm font-semibold text-[var(--foreground)] font-mono">
                    {study.clientName}
                  </span>
                </div>

                <div>
                  <span className="text-[10px] uppercase font-mono tracking-wider text-[var(--muted)] block mb-1">
                    {l === 'es' ? 'Línea de Tiempo' : 'Timeline'}
                  </span>
                  <span className="text-sm font-semibold text-[var(--foreground)] font-mono">
                    {study.timeline[l]}
                  </span>
                </div>

                <div>
                  <span className="text-[10px] uppercase font-mono tracking-wider text-[var(--muted)] block mb-1">
                    {l === 'es' ? 'Año de Lanzamiento' : 'Release Year'}
                  </span>
                  <span className="text-sm font-semibold text-[var(--foreground)] font-mono">
                    {study.year}
                  </span>
                </div>

                <div>
                  <span className="text-[10px] uppercase font-mono tracking-wider text-[var(--muted)] block mb-1">
                    {l === 'es' ? 'Rol AyeApps' : 'AyeApps Role'}
                  </span>
                  <span className="text-xs font-semibold text-[var(--foreground)]">
                    {study.role[l]}
                  </span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4">
                {study.liveUrl && (
                  <a
                    href={study.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-press inline-flex items-center gap-2 px-6 py-3.5 rounded-xs bg-[var(--foreground)] hover:bg-[var(--accent-amber)] text-[var(--foreground-inv)] hover:text-black font-semibold text-xs uppercase tracking-[0.14em]"
                  >
                    <span>{l === 'es' ? 'Visitar Plataforma en Vivo' : 'Visit Live Platform'}</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}
                {study.githubUrl && (
                  <a
                    href={study.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-press inline-flex items-center gap-2 px-6 py-3.5 rounded-xs border border-[var(--border-strong)] bg-[var(--surface-raised)] hover:bg-[var(--surface-alt)] text-[var(--foreground)] font-semibold text-xs uppercase tracking-[0.14em]"
                  >
                    <GithubIcon className="w-4 h-4 text-[var(--accent-amber)]" />
                    <span>{l === 'es' ? 'Ver Repositorio en GitHub' : 'View GitHub Repository'}</span>
                  </a>
                )}
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* ─── Key Metrics Grid ───────────────────────── */}
        <section className="py-16 px-4 sm:px-6 bg-[var(--surface-raised)] border-b border-[var(--border)]">
          <div className="max-w-6xl mx-auto">
            <ScrollReveal>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {study.metrics.map((m, idx) => (
                  <div key={idx} className="space-y-1">
                    <span className="text-3xl sm:text-4xl font-bold font-mono text-[var(--foreground)] tracking-tight">
                      {m.value}
                    </span>
                    <span className="text-xs uppercase tracking-wider font-semibold text-[var(--accent-amber)] block">
                      {m.label[l]}
                    </span>
                    <span className="text-xs text-[var(--muted)] block">
                      {m.detail[l]}
                    </span>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* ─── The Challenge & Solution ────────────────── */}
        <section className="py-24 px-4 sm:px-6 bg-[var(--surface)]">
          <div className="max-w-6xl mx-auto">
            <ScrollReveal>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
                {/* Challenge */}
                <div className="bracket-corners p-8 sm:p-10 rounded-xs border border-[var(--border)] bg-[var(--surface-raised)]">
                  <span className="text-[11px] font-mono uppercase tracking-[0.18em] text-[var(--accent-amber)] block mb-3">
                    01 / {l === 'es' ? 'El Desafío Técnico' : 'The Technical Challenge'}
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-bold text-[var(--foreground)] mb-4">
                    {l === 'es' ? 'El Problema Operativo' : 'The Operational Problem'}
                  </h2>
                  <p className="text-sm sm:text-base text-[var(--muted)] leading-relaxed">
                    {study.challenge[l]}
                  </p>
                </div>

                {/* Solution */}
                <div className="bracket-corners p-8 sm:p-10 rounded-xs border border-[var(--accent-amber-border)] bg-[var(--surface-raised)]">
                  <span className="text-[11px] font-mono uppercase tracking-[0.18em] text-emerald-500 block mb-3">
                    02 / {l === 'es' ? 'La Arquitectura Diseñada' : 'The Engineered Solution'}
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-bold text-[var(--foreground)] mb-4">
                    {l === 'es' ? 'Nuestra Solución a Medida' : 'Our Bespoke Solution'}
                  </h2>
                  <p className="text-sm sm:text-base text-[var(--foreground)] leading-relaxed opacity-90">
                    {study.solution[l]}
                  </p>
                </div>
              </div>
            </ScrollReveal>

            {/* ─── In-Depth System Modules Grid ───────────── */}
            <div className="mb-24">
              <ScrollReveal>
                <div className="mb-12">
                  <p className="geo-badge text-xs font-medium tracking-[0.18em] uppercase text-[var(--muted)] mb-3">
                    {l === 'es' ? 'Ingeniería Modular' : 'Modular Architecture'}
                  </p>
                  <h2 className="text-3xl sm:text-4xl font-bold text-[var(--foreground)]">
                    {l === 'es' ? 'Módulos y Capacidades del Sistema' : 'System Modules & Core Capabilities'}
                  </h2>
                </div>
              </ScrollReveal>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {study.modules.map((mod, i) => (
                  <ScrollReveal key={mod.index} delay={i * 50}>
                    <div className="bracket-corners card-lift p-6 sm:p-8 rounded-xs border border-[var(--border)] bg-[var(--surface-raised)] h-full flex flex-col justify-between group">
                      <div>
                        <span className="font-mono text-2xl font-bold text-[var(--muted)] group-hover:text-[var(--accent-amber)] transition-colors block mb-4">
                          {mod.index}
                        </span>
                        <h3 className="text-lg font-bold text-[var(--foreground)] mb-3 group-hover:text-[var(--accent-amber)] transition-colors">
                          {mod.title[l]}
                        </h3>
                        <p className="text-xs sm:text-sm text-[var(--muted)] leading-relaxed mb-6">
                          {mod.desc[l]}
                        </p>
                      </div>

                      <div className="flex flex-wrap gap-1.5 pt-4 border-t border-[var(--border)]">
                        {mod.specs.map((spec) => (
                          <span
                            key={spec}
                            className="px-2 py-0.5 text-[10px] font-mono rounded-xs border border-[var(--border)] bg-[var(--surface-alt)] text-[var(--muted)]"
                          >
                            {spec}
                          </span>
                        ))}
                      </div>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>

            {/* ─── Architectural Layer Breakdown ──────────── */}
            <div className="mb-24">
              <ScrollReveal>
                <div className="mb-12">
                  <p className="geo-badge text-xs font-medium tracking-[0.18em] uppercase text-[var(--muted)] mb-3">
                    {l === 'es' ? 'Stack & Fundamentos' : 'Stack & Blueprint'}
                  </p>
                  <h2 className="text-3xl sm:text-4xl font-bold text-[var(--foreground)]">
                    {l === 'es' ? 'Capas de la Infraestructura' : 'Infrastructure Blueprint'}
                  </h2>
                </div>
              </ScrollReveal>

              <div className="space-y-4">
                {study.architectureLayers.map((layer, idx) => (
                  <ScrollReveal key={layer.layer} delay={idx * 60}>
                    <div className="p-6 sm:p-8 rounded-xs border border-[var(--border)] bg-[var(--surface-alt)] hover:border-[var(--accent-amber-border)] transition-colors">
                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                        <div>
                          <span className="text-[10px] font-mono uppercase tracking-wider text-[var(--accent-amber)] font-bold block mb-1">
                            {layer.layer}
                          </span>
                          <h3 className="text-lg sm:text-xl font-bold text-[var(--foreground)]">
                            {layer.title[l]}
                          </h3>
                        </div>

                        <div className="flex flex-wrap gap-2">
                          {layer.techs.map((tech) => (
                            <span
                              key={tech}
                              className="px-2.5 py-1 text-xs font-mono rounded-xs border border-[var(--border-strong)] bg-[var(--surface)] text-[var(--foreground)] font-semibold"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      <p className="text-xs sm:text-sm text-[var(--muted)] leading-relaxed">
                        {layer.description[l]}
                      </p>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>

            {/* ─── Testimonial Section (if present) ────────── */}
            {study.testimonial && (
              <ScrollReveal>
                <div className="mb-24 p-8 sm:p-14 rounded-xs border border-[var(--border-strong)] bg-[var(--surface-inv)] text-[var(--foreground-inv)] relative overflow-hidden">
                  <div className="max-w-3xl">
                    <span className="inline-flex items-center gap-2 px-3 py-1 text-[10px] font-mono uppercase tracking-wider rounded-xs bg-[var(--surface)] text-[var(--foreground)] mb-8">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                      {l === 'es' ? 'Cliente Verificado en Producción' : 'Verified Client Production'}
                    </span>
                    <blockquote className="text-xl sm:text-2xl md:text-3xl font-medium tracking-tight leading-snug mb-8">
                      "{study.testimonial.quote[l]}"
                    </blockquote>
                    <div>
                      <p className="font-bold text-base">{study.testimonial.author}</p>
                      <p className="text-xs opacity-75">{study.testimonial.role[l]}</p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            )}

            {/* ─── Bottom CTA Banner ──────────────────────── */}
            <ScrollReveal>
              <div className="p-8 sm:p-12 rounded-xs border border-[var(--accent-amber-border)] bg-[var(--surface-raised)] text-center">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[var(--foreground)] mb-4">
                  {l === 'es'
                    ? '¿Buscas una solución con este nivel de ingeniería?'
                    : 'Looking for software engineered to this standard?'}
                </h2>
                <p className="text-sm sm:text-base text-[var(--muted)] max-w-xl mx-auto mb-8">
                  {l === 'es'
                    ? 'Estructuramos y construimos plataformas robustas, sin intermediarios ni plantillas prefabricadas.'
                    : 'We architect and build tailored software platforms with direct partner engineering and zero bloated templates.'}
                </p>
                <Link
                  href={`/${lang}/contact`}
                  className="btn-press inline-flex items-center gap-2 px-8 py-4 rounded-xs bg-[var(--foreground)] hover:bg-[var(--accent-amber)] text-[var(--foreground-inv)] hover:text-black font-bold text-xs uppercase tracking-[0.14em]"
                >
                  <span>{l === 'es' ? 'Iniciar Consulta de Proyecto' : 'Start Project Scoping'}</span>
                  <Sparkles className="w-4 h-4" />
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </section>
      </main>
      <Footer dict={dict} lang={lang} />
    </>
  )
}
