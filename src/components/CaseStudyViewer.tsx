'use client'

import { useState } from 'react'
import Link from 'next/link'
import { CaseStudyData } from '@/data/caseStudies'
import ScrollReveal from './ScrollReveal'
import {
  ArrowLeft,
  ExternalLink,
  Sparkles,
  Terminal,
  Cpu,
  Layers,
  ShieldCheck,
  CheckCircle2,
  Zap,
  Globe,
  Sliders
} from 'lucide-react'
import { GithubIcon } from './Icons'

interface CaseStudyViewerProps {
  study: CaseStudyData
  lang: 'es' | 'en'
}

export default function CaseStudyViewer({ study, lang }: CaseStudyViewerProps) {
  const [techMode, setTechMode] = useState<boolean>(false)
  const isEs = lang === 'es'

  return (
    <div className="relative">
      {/* ─── Hero Section ───────────────────────────── */}
      <section className="pt-36 pb-20 px-4 sm:px-6 bg-[var(--surface)] dot-pattern border-b border-[var(--border)] relative overflow-hidden">
        {/* Subtle Ambient Radial */}
        <div
          aria-hidden="true"
          className="absolute top-1/4 right-[-10%] w-[500px] h-[500px] rounded-full bg-[var(--accent-amber-subtle)] blur-3xl pointer-events-none opacity-50"
        />

        <div className="max-w-5xl mx-auto relative z-10">
          <ScrollReveal>
            {/* Top Bar: Back navigation & Tech Switcher */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 mb-10">
              <Link
                href={`/${lang}/portfolio`}
                className="inline-flex items-center gap-2 text-xs font-mono text-[var(--muted)] hover:text-[var(--accent-amber)] transition-colors group w-fit"
              >
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                <span>{isEs ? 'Volver al Ecosistema' : 'Back to Ecosystem'}</span>
              </Link>

              {/* ─── Interactive Tech Switch / Modo Técnico ─── */}
              <div className="flex items-center gap-2 bg-[var(--surface-raised)] border border-[var(--border-strong)] p-1 rounded-xs shadow-xs">
                <button
                  onClick={() => setTechMode(false)}
                  className={`btn-press flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono rounded-xs transition-all cursor-pointer ${
                    !techMode
                      ? 'bg-[var(--foreground)] text-[var(--foreground-inv)] font-bold shadow-xs'
                      : 'text-[var(--muted)] hover:text-[var(--foreground)]'
                  }`}
                >
                  <Sparkles className="w-3.5 h-3.5 text-[var(--accent-amber)]" />
                  <span>{isEs ? 'Modo Negocio' : 'Business View'}</span>
                </button>

                <button
                  onClick={() => setTechMode(true)}
                  className={`btn-press flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono rounded-xs transition-all cursor-pointer ${
                    techMode
                      ? 'bg-[var(--accent-amber)] text-black font-bold shadow-xs'
                      : 'text-[var(--muted)] hover:text-[var(--foreground)]'
                  }`}
                >
                  <Terminal className="w-3.5 h-3.5" />
                  <span>{isEs ? 'Modo Técnico' : 'Tech View'}</span>
                </button>
              </div>
            </div>

            {/* Geo-Badge & Category */}
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span className="geo-badge text-xs font-medium tracking-[0.18em] uppercase text-[var(--muted)]">
                {isEs ? 'Caso de Estudio' : 'Case Study'}
              </span>
              <span className="text-xs font-mono px-2.5 py-0.5 rounded-xs border border-[var(--border-strong)] bg-[var(--surface-raised)] text-[var(--foreground)]">
                {techMode ? study.projectTypeTech[lang] : study.projectTypeBusiness[lang]}
              </span>
            </div>

            {/* Title & Tagline */}
            <h1
              className="text-4xl sm:text-5xl md:text-6xl font-bold text-[var(--foreground)] tracking-tight mb-8"
              style={{ textWrap: 'balance' } as React.CSSProperties}
            >
              {study.title}
            </h1>

            <p className="text-base sm:text-xl text-[var(--muted)] max-w-3xl leading-relaxed mb-12">
              {techMode ? study.heroTaglineTech[lang] : study.heroTaglineBusiness[lang]}
            </p>

            {/* Meta Grid & Action Link */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 py-6 border-y border-[var(--border)] mb-8">
              <div>
                <span className="text-[10px] uppercase font-mono tracking-wider text-[var(--muted)] block mb-1">
                  {isEs ? 'Cliente / Origen' : 'Client / Origin'}
                </span>
                <span className="text-sm font-semibold text-[var(--foreground)] font-mono">
                  {study.clientName}
                </span>
              </div>

              <div>
                <span className="text-[10px] uppercase font-mono tracking-wider text-[var(--muted)] block mb-1">
                  {isEs ? 'Línea de Tiempo' : 'Timeline'}
                </span>
                <span className="text-xs sm:text-sm font-semibold text-[var(--foreground)] font-mono">
                  {study.timeline[lang]}
                </span>
              </div>

              <div>
                <span className="text-[10px] uppercase font-mono tracking-wider text-[var(--muted)] block mb-1">
                  {isEs ? 'Año de Lanzamiento' : 'Release Year'}
                </span>
                <span className="text-sm font-semibold text-[var(--foreground)] font-mono">
                  {study.year}
                </span>
              </div>

              <div>
                <span className="text-[10px] uppercase font-mono tracking-wider text-[var(--muted)] block mb-1">
                  {isEs ? 'Rol AyeApps' : 'AyeApps Role'}
                </span>
                <span className="text-xs font-semibold text-[var(--foreground)]">
                  {techMode ? study.roleTech[lang] : study.roleBusiness[lang]}
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
                  <span>{isEs ? 'Visitar Plataforma en Vivo' : 'Visit Live Platform'}</span>
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
                  <span>{isEs ? 'Ver Repositorio en GitHub' : 'View GitHub Repository'}</span>
                </a>
              )}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ─── Key Metrics Grid (Adaptive to Mode) ───────── */}
      <section className="py-16 px-4 sm:px-6 bg-[var(--surface-raised)] border-b border-[var(--border)]">
        <div className="max-w-5xl mx-auto">
          <ScrollReveal>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {study.metrics.map((m, idx) => (
                <div key={idx} className="space-y-1">
                  <span className="text-3xl sm:text-4xl font-bold font-mono text-[var(--foreground)] tracking-tight">
                    {m.value}
                  </span>
                  <span className="text-xs uppercase tracking-wider font-semibold text-[var(--accent-amber)] block">
                    {techMode ? m.labelTech[lang] : m.labelBusiness[lang]}
                  </span>
                  <span className="text-xs text-[var(--muted)] block">
                    {techMode ? m.detailTech[lang] : m.detailBusiness[lang]}
                  </span>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ─── Challenge & Solution (Adaptive to Mode) ──── */}
      <section className="py-24 px-4 sm:px-6 bg-[var(--surface)]">
        <div className="max-w-5xl mx-auto">
          <ScrollReveal>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 mb-24">
              {/* Challenge Card */}
              <div className="bracket-corners p-8 sm:p-10 rounded-xs border border-[var(--border)] bg-[var(--surface-raised)] flex flex-col justify-between">
                <div>
                  <span className="text-[11px] font-mono uppercase tracking-[0.18em] text-[var(--accent-amber)] block mb-3">
                    01 / {isEs ? 'El Desafío' : 'The Challenge'}
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-bold text-[var(--foreground)] mb-4">
                    {isEs ? 'El Reto Inicial' : 'The Initial Problem'}
                  </h2>
                  <p className="text-sm sm:text-base text-[var(--muted)] leading-relaxed">
                    {techMode ? study.challengeTech[lang] : study.challengeBusiness[lang]}
                  </p>
                </div>
              </div>

              {/* Solution Card */}
              <div className="bracket-corners p-8 sm:p-10 rounded-xs border border-[var(--accent-amber-border)] bg-[var(--surface-raised)] flex flex-col justify-between">
                <div>
                  <span className="text-[11px] font-mono uppercase tracking-[0.18em] text-emerald-500 block mb-3">
                    02 / {isEs ? 'La Solución' : 'The Solution'}
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-bold text-[var(--foreground)] mb-4">
                    {isEs ? 'La Transformación' : 'The Engineered Outcome'}
                  </h2>
                  <p className="text-sm sm:text-base text-[var(--foreground)] leading-relaxed opacity-90">
                    {techMode ? study.solutionTech[lang] : study.solutionBusiness[lang]}
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* ─── Modules Grid (Adaptive to Mode) ───────── */}
          <div className="mb-24">
            <ScrollReveal>
              <div className="mb-12 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
                <div>
                  <p className="geo-badge text-xs font-medium tracking-[0.18em] uppercase text-[var(--muted)] mb-3">
                    {isEs ? 'Módulos del Sistema' : 'System Modules'}
                  </p>
                  <h2 className="text-3xl sm:text-4xl font-bold text-[var(--foreground)]">
                    {isEs ? 'Lo Que Hace Posible la Plataforma' : 'Core Platform Capabilities'}
                  </h2>
                </div>

                <span className="text-xs font-mono text-[var(--muted)]">
                  {techMode ? (isEs ? 'Vista técnica activa' : 'Tech view active') : (isEs ? 'Vista de negocio activa' : 'Business view active')}
                </span>
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
                        {mod.title[lang]}
                      </h3>
                      <p className="text-xs sm:text-sm text-[var(--muted)] leading-relaxed mb-6">
                        {techMode ? mod.descTech[lang] : mod.descBusiness[lang]}
                      </p>
                    </div>

                    <div>
                      {/* Benefit chip in Business mode vs Tech specs in Tech mode */}
                      {!techMode ? (
                        <div className="pt-4 border-t border-[var(--border)]">
                          <span className="text-[11px] font-mono text-emerald-500 font-semibold flex items-center gap-1.5">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                            {mod.businessBenefit[lang]}
                          </span>
                        </div>
                      ) : (
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
                      )}
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>

          {/* ─── Architectural Layer Breakdown (Shown in Tech Mode or Collapsed in Business Mode) ─── */}
          {techMode && (
            <div className="mb-24">
              <ScrollReveal>
                <div className="mb-12">
                  <p className="geo-badge text-xs font-medium tracking-[0.18em] uppercase text-[var(--muted)] mb-3">
                    {isEs ? 'Stack & Fundamentos' : 'Stack & Blueprint'}
                  </p>
                  <h2 className="text-3xl sm:text-4xl font-bold text-[var(--foreground)]">
                    {isEs ? 'Capas de la Infraestructura' : 'Infrastructure Blueprint'}
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
                            {layer.title[lang]}
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
                        {layer.description[lang]}
                      </p>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          )}

          {/* ─── Testimonial Section ────────────────────── */}
          {study.testimonial && (
            <ScrollReveal>
              <div className="mb-24 p-8 sm:p-14 rounded-xs border border-[var(--border-strong)] bg-[var(--surface-inv)] text-[var(--foreground-inv)] relative overflow-hidden">
                <div className="max-w-3xl">
                  <span className="inline-flex items-center gap-2 px-3 py-1 text-[10px] font-mono uppercase tracking-wider rounded-xs bg-[var(--surface)] text-[var(--foreground)] mb-8">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    {isEs ? 'Cliente Verificado en Producción' : 'Verified Client Production'}
                  </span>
                  <blockquote className="text-xl sm:text-2xl md:text-3xl font-medium tracking-tight leading-snug mb-8">
                    "{study.testimonial.quote[lang]}"
                  </blockquote>
                  <div>
                    <p className="font-bold text-base">{study.testimonial.author}</p>
                    <p className="text-xs opacity-75">{study.testimonial.role[lang]}</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          )}

          {/* ─── Bottom CTA Banner ──────────────────────── */}
          <ScrollReveal>
            <div className="p-8 sm:p-14 rounded-xs border border-[var(--accent-amber-border)] bg-[var(--surface-raised)] text-center">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[var(--foreground)] mb-4">
                {isEs
                  ? '¿Tienes un proyecto con necesidades similares?'
                  : 'Have a project with similar requirements?'}
              </h2>
              <p className="text-sm sm:text-base text-[var(--muted)] max-w-xl mx-auto mb-8">
                {isEs
                  ? 'Diseñamos y construimos plataformas personalizadas sin plantillas prefabricadas, con atención directa y código de primer nivel.'
                  : 'We architect and build tailored platforms with direct partner engineering and zero bloated templates.'}
              </p>
              <Link
                href={`/${lang}/contact`}
                className="btn-press inline-flex items-center gap-2 px-8 py-4 rounded-xs bg-[var(--foreground)] hover:bg-[var(--accent-amber)] text-[var(--foreground-inv)] hover:text-black font-bold text-xs uppercase tracking-[0.14em]"
              >
                <span>{isEs ? 'Iniciar Consulta de Proyecto' : 'Start Project Scoping'}</span>
                <Sparkles className="w-4 h-4" />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  )
}
