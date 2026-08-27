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
  Sliders,
  Calendar,
  Code2
} from 'lucide-react'
import { GithubIcon } from './Icons'

interface CaseStudyViewerProps {
  study: CaseStudyData
  lang: 'es' | 'en'
}

export default function CaseStudyViewer({ study, lang }: CaseStudyViewerProps) {
  const [techMode, setTechMode] = useState<boolean>(false)
  const isEs = lang === 'es'
  const isFatima = study.slug === 'fatima-resendiz'
  const isGoldAccented = isFatima && !techMode

  // Dynamic classes for luxury brand harmony
  const bracketClass = isGoldAccented ? 'bracket-corners bracket-gold' : 'bracket-corners'
  const geoBadgeClass = isGoldAccented ? 'geo-badge geo-badge-gold' : 'geo-badge'

  const getContainerFontClass = () => {
    if (techMode) return 'font-tech'
    if (isFatima) return 'font-montserrat'
    return 'font-business'
  }

  const getHeadingFontClass = () => {
    if (techMode) return 'font-tech'
    if (isFatima) return 'font-cormorant italic font-normal'
    return 'font-business font-extrabold'
  }

  return (
    <div className={`relative transition-all duration-300 ${getContainerFontClass()}`}>
      {/* ─── Hero Section ───────────────────────────── */}
      <section className="pt-36 pb-20 px-4 sm:px-6 bg-[var(--surface)] dot-pattern border-b border-[var(--border)] relative overflow-hidden">
        {/* Subtle Ambient Radial (Warm Champagne Gold for Fatima in Executive mode, Cyber-Amber otherwise) */}
        <div
          aria-hidden="true"
          className={`absolute top-1/4 right-[-10%] w-[500px] h-[500px] rounded-full blur-3xl pointer-events-none opacity-50 ${
            isGoldAccented ? 'bg-[#c9a96e]/15' : 'bg-[var(--accent-amber-subtle)]'
          }`}
        />

        <div className="max-w-5xl mx-auto relative z-10">
          <ScrollReveal>
            {/* Top Bar: Back navigation & Tech Switcher */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 mb-10">
              <Link
                href={`/${lang}/portfolio`}
                className="inline-flex items-center gap-2 text-xs font-mono text-[var(--muted)] hover:text-[#c9a96e] transition-colors group w-fit"
              >
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                <span>{isEs ? 'Volver al Ecosistema' : 'Back to Ecosystem'}</span>
              </Link>

              {/* ─── Interactive Tech Switch / Modo Técnico ─── */}
              <div className="flex items-center gap-2 bg-[var(--surface-raised)] border border-[var(--border-strong)] p-1 rounded-xs shadow-xs">
                <button
                  onClick={() => setTechMode(false)}
                  className={`btn-press flex items-center gap-1.5 px-3.5 py-1.5 text-xs rounded-xs transition-all cursor-pointer ${
                    !techMode
                      ? (isGoldAccented ? 'bg-[#c9a96e] text-black font-bold shadow-xs' : 'bg-[var(--foreground)] text-[var(--foreground-inv)] font-bold shadow-xs')
                      : 'text-[var(--muted)] hover:text-[var(--foreground)]'
                  }`}
                >
                  <Sparkles className={`w-3.5 h-3.5 ${isGoldAccented ? 'text-black' : 'text-[var(--accent-amber)]'}`} />
                  <span>{isEs ? 'Vista Ejecutiva' : 'Executive View'}</span>
                </button>

                <button
                  onClick={() => setTechMode(true)}
                  className={`btn-press flex items-center gap-1.5 px-3.5 py-1.5 text-xs rounded-xs transition-all cursor-pointer font-tech ${
                    techMode
                      ? 'bg-[var(--accent-amber)] text-black font-bold shadow-xs'
                      : 'text-[var(--muted)] hover:text-[var(--foreground)]'
                  }`}
                >
                  <Terminal className="w-3.5 h-3.5" />
                  <span>{isEs ? 'Vista Técnica' : 'Technical View'}</span>
                </button>
              </div>
            </div>

            {/* Geo-Badge & Category */}
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span className={`${geoBadgeClass} text-xs font-medium tracking-[0.18em] uppercase ${
                isGoldAccented ? 'text-[#c9a96e]' : 'text-[var(--muted)]'
              } ${techMode ? 'font-mono' : ''}`}>
                {techMode ? 'CLOUD ARCHITECTURE SPEC' : (isEs ? 'Caso de Estudio' : 'Case Study')}
              </span>
              <span className={`text-xs px-2.5 py-0.5 rounded-xs border bg-[var(--surface-raised)] text-[var(--foreground)] ${
                isGoldAccented ? 'border-[#c9a96e]/40' : 'border-[var(--border-strong)]'
              } ${techMode ? 'font-mono' : 'font-medium'}`}>
                {techMode ? study.projectTypeTech[lang] : study.projectTypeBusiness[lang]}
              </span>
            </div>

            {/* Title & Tagline with Authentic Brand Homage */}
            {techMode ? (
              <div className="space-y-3 mb-8">
                <div className="inline-flex items-center gap-2 font-mono text-xs text-[var(--accent-amber)] bg-[var(--accent-amber-subtle)] px-2.5 py-1 rounded-xs border border-[var(--accent-amber-border)] w-fit">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="tracking-wide">
                    {isEs
                      ? 'CLOUD-NATIVE DISTRIBUTED ARCHITECTURE // 100% EN LA NUBE'
                      : 'CLOUD-NATIVE DISTRIBUTED ARCHITECTURE // 100% CLOUD-HOSTED'}
                  </span>
                </div>
                <h1
                  className="text-3xl sm:text-5xl md:text-6xl font-bold font-tech text-[var(--foreground)] tracking-tight"
                  style={{ textWrap: 'balance' } as React.CSSProperties}
                >
                  {study.title}
                </h1>
              </div>
            ) : isFatima ? (
              <div className="mb-8">
                <h1
                  className="text-5xl sm:text-7xl md:text-8xl font-normal font-cormorant italic text-[var(--foreground)] tracking-normal leading-[1.05]"
                  style={{ textWrap: 'balance' } as React.CSSProperties}
                >
                  Fátima Reséndiz
                </h1>
                <span className="block font-montserrat font-medium text-xs sm:text-sm tracking-[0.25em] text-[#c9a96e] uppercase mt-3">
                  Wedding Photography Platform & Operating System
                </span>
              </div>
            ) : (
              <h1
                className="text-4xl sm:text-5xl md:text-6xl font-extrabold font-business text-[var(--foreground)] tracking-tight mb-8"
                style={{ textWrap: 'balance' } as React.CSSProperties}
              >
                {study.title}
              </h1>
            )}

            <p className={`text-base sm:text-xl text-[var(--muted)] max-w-3xl leading-relaxed mb-12 ${
              techMode ? 'font-mono text-sm sm:text-base' : (isFatima ? 'font-montserrat' : 'font-business')
            }`}>
              {techMode ? study.heroTaglineTech[lang] : study.heroTaglineBusiness[lang]}
            </p>

            {/* Meta Grid & Action Link */}
            <div className={`grid grid-cols-2 sm:grid-cols-4 gap-4 p-5 sm:p-6 rounded-xs border bg-[var(--surface-raised)] mb-10 shadow-2xs ${
              isGoldAccented ? 'border-[#c9a96e]/30' : 'border-[var(--border-strong)]'
            }`}>
              <div className="text-center sm:text-left">
                <span className="text-[10px] uppercase tracking-wider text-[var(--muted)] block mb-1 font-mono">
                  {isEs ? 'Cliente / Origen' : 'Client / Origin'}
                </span>
                <span className={`text-sm font-semibold text-[var(--foreground)] ${isGoldAccented ? 'font-montserrat' : ''}`}>
                  {study.clientName}
                </span>
              </div>

              <div className="text-center sm:text-left">
                <span className="text-[10px] uppercase tracking-wider text-[var(--muted)] block mb-1 font-mono">
                  {isEs ? 'Línea de Tiempo' : 'Timeline'}
                </span>
                <span className="text-xs sm:text-sm font-semibold text-[var(--foreground)]">
                  {study.timeline[lang]}
                </span>
              </div>

              <div className="text-center sm:text-left">
                <span className="text-[10px] uppercase tracking-wider text-[var(--muted)] block mb-1 font-mono">
                  {isEs ? 'Año de Lanzamiento' : 'Release Year'}
                </span>
                <span className="text-sm font-semibold text-[var(--foreground)]">
                  {study.year}
                </span>
              </div>

              <div className="text-center sm:text-left">
                <span className="text-[10px] uppercase tracking-wider text-[var(--muted)] block mb-1 font-mono">
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
                  className={`btn-press inline-flex items-center gap-2 px-6 py-3.5 rounded-xs font-semibold text-xs uppercase tracking-[0.14em] ${
                    isGoldAccented
                      ? 'bg-[#c9a96e] hover:bg-[#a8844a] text-black shadow-sm'
                      : 'bg-[var(--foreground)] hover:bg-[var(--accent-amber)] text-[var(--foreground-inv)] hover:text-black'
                  } ${techMode ? 'font-mono' : ''}`}
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
                  className={`btn-press inline-flex items-center gap-2 px-6 py-3.5 rounded-xs border border-[var(--border-strong)] bg-[var(--surface-raised)] hover:bg-[var(--surface-alt)] text-[var(--foreground)] font-semibold text-xs uppercase tracking-[0.14em] ${techMode ? 'font-mono' : ''}`}
                >
                  <GithubIcon className="w-4 h-4 text-[#c9a96e]" />
                  <span>{isEs ? 'Ver Repositorio en GitHub' : 'View GitHub Repository'}</span>
                </a>
              )}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ─── Key Metrics Grid (Adaptive to Mode & Brand Colors) ─── */}
      <section className="py-20 px-4 sm:px-6 bg-[var(--surface-raised)] border-b border-[var(--border)]">
        <div className="max-w-5xl mx-auto">
          <ScrollReveal>
            <div className="text-center max-w-xl mx-auto mb-12">
              <p className={`${geoBadgeClass} text-xs font-medium tracking-[0.18em] uppercase justify-center mb-3 ${
                isGoldAccented ? 'text-[#c9a96e]' : 'text-[var(--muted)]'
              }`}>
                {techMode ? 'CLOUD PERFORMANCE METRICS' : (isEs ? 'Resultados Clave' : 'Key Metrics')}
              </p>
              <h2 className={`text-2xl sm:text-4xl text-[var(--foreground)] ${getHeadingFontClass()}`}>
                {techMode
                  ? (isEs ? 'Telemetría de Rendimiento' : 'Performance Telemetry')
                  : (isEs ? 'Impacto Real en la Operación' : 'Tangible Operational Impact')}
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {study.metrics.map((m, idx) => {
                const icons = [Zap, Sliders, Calendar, Globe]
                const IconComponent = icons[idx % icons.length]

                return (
                  <div
                    key={idx}
                    className={`${bracketClass} card-lift p-6 sm:p-7 rounded-xs border bg-[var(--surface)] flex flex-col items-center justify-between text-center space-y-4 h-full shadow-2xs group ${
                      isGoldAccented ? 'border-[var(--border)] hover:border-[#c9a96e]/70' : 'border-[var(--border)]'
                    }`}
                  >
                    <div className="flex flex-col items-center space-y-3">
                      {/* Metric Icon */}
                      <div className={`w-9 h-9 rounded-xs flex items-center justify-center border transition-colors ${
                        isGoldAccented
                          ? 'bg-[#c9a96e]/10 border-[#c9a96e]/30 text-[#c9a96e]'
                          : 'bg-[var(--accent-amber-subtle)] border-[var(--accent-amber-border)] text-[var(--accent-amber)]'
                      }`}>
                        <IconComponent className="w-4 h-4" />
                      </div>

                      {/* Stat Value */}
                      <span className={`text-3xl sm:text-4xl font-bold font-mono text-[var(--foreground)] tracking-tight transition-colors ${
                        isGoldAccented ? 'group-hover:text-[#c9a96e]' : 'group-hover:text-[var(--accent-amber)]'
                      }`}>
                        {m.value}
                      </span>

                      {/* Title Header */}
                      <h3 className={`text-sm sm:text-base font-bold text-[var(--foreground)] ${
                        techMode
                          ? 'font-mono'
                          : (isFatima ? 'font-montserrat' : 'font-business')
                      }`}>
                        {techMode ? m.labelTech[lang] : m.labelBusiness[lang]}
                      </h3>
                    </div>

                    {/* Subtitle Detail */}
                    <p className={`text-xs text-[var(--muted)] leading-relaxed ${techMode ? 'font-mono text-[11px]' : ''}`}>
                      {techMode ? m.detailTech[lang] : m.detailBusiness[lang]}
                    </p>
                  </div>
                )
              })}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ─── Challenge & Solution (Adaptive to Brand Typography & Colors) ──── */}
      <section className="py-24 px-4 sm:px-6 bg-[var(--surface)]">
        <div className="max-w-5xl mx-auto">
          <ScrollReveal>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 mb-24">
              {/* Challenge Card */}
              <div className={`${bracketClass} p-8 sm:p-10 rounded-xs border border-[var(--border)] bg-[var(--surface-raised)] flex flex-col justify-between`}>
                <div>
                  <span className={`text-[11px] font-mono uppercase tracking-[0.18em] block mb-3 ${
                    isGoldAccented ? 'text-[#c9a96e]' : 'text-[var(--accent-amber)]'
                  }`}>
                    01 / {isEs ? 'El Desafío' : 'The Challenge'}
                  </span>
                  <h2 className={`text-2xl sm:text-3xl font-bold text-[var(--foreground)] mb-4 ${getHeadingFontClass()}`}>
                    {isEs ? 'El Reto Inicial' : 'The Initial Problem'}
                  </h2>
                  <p className={`text-sm sm:text-base text-[var(--muted)] leading-relaxed ${techMode ? 'font-mono text-xs sm:text-sm' : ''}`}>
                    {techMode ? study.challengeTech[lang] : study.challengeBusiness[lang]}
                  </p>
                </div>
              </div>

              {/* Solution Card */}
              <div className={`${bracketClass} p-8 sm:p-10 rounded-xs border bg-[var(--surface-raised)] flex flex-col justify-between ${
                isGoldAccented ? 'border-[#c9a96e]/50 shadow-[0_0_20px_rgba(201,169,110,0.08)]' : 'border-[var(--accent-amber-border)]'
              }`}>
                <div>
                  <span className={`text-[11px] font-mono uppercase tracking-[0.18em] block mb-3 ${
                    isGoldAccented ? 'text-[#c9a96e]' : 'text-emerald-500'
                  }`}>
                    02 / {isEs ? 'La Solución' : 'The Solution'}
                  </span>
                  <h2 className={`text-2xl sm:text-3xl font-bold text-[var(--foreground)] mb-4 ${getHeadingFontClass()}`}>
                    {isEs ? 'La Transformación' : 'The Engineered Outcome'}
                  </h2>
                  <p className={`text-sm sm:text-base text-[var(--foreground)] leading-relaxed opacity-90 ${techMode ? 'font-mono text-xs sm:text-sm' : ''}`}>
                    {techMode ? study.solutionTech[lang] : study.solutionBusiness[lang]}
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* ─── Modules Grid (Adaptive to Mode & Fonts) ───────── */}
          <div className="mb-24">
            <ScrollReveal>
              <div className="mb-12 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
                <div>
                  <p className={`${geoBadgeClass} text-xs font-medium tracking-[0.18em] uppercase mb-3 ${
                    isGoldAccented ? 'text-[#c9a96e]' : 'text-[var(--muted)]'
                  }`}>
                    {isEs ? 'Módulos del Sistema' : 'System Modules'}
                  </p>
                  <h2 className={`text-3xl sm:text-4xl text-[var(--foreground)] ${getHeadingFontClass()}`}>
                    {isEs ? 'Lo Que Hace Posible la Plataforma' : 'Core Platform Capabilities'}
                  </h2>
                </div>

                <span className="text-xs font-mono text-[var(--muted)]">
                  {techMode ? (isEs ? '⚡️ Vista técnica activa' : '⚡️ Technical view active') : (isEs ? '🌟 Vista ejecutiva activa' : '🌟 Executive view active')}
                </span>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {study.modules.map((mod, i) => (
                <ScrollReveal key={mod.index} delay={i * 50}>
                  <div className={`${bracketClass} card-lift p-6 sm:p-8 rounded-xs border border-[var(--border)] bg-[var(--surface-raised)] h-full flex flex-col justify-between group ${
                    isGoldAccented ? 'hover:border-[#c9a96e]/60' : ''
                  }`}>
                    <div>
                      <span className={`font-mono text-2xl font-bold text-[var(--muted)] transition-colors block mb-4 ${
                        isGoldAccented ? 'group-hover:text-[#c9a96e]' : 'group-hover:text-[var(--accent-amber)]'
                      }`}>
                        {mod.index}
                      </span>
                      <h3 className={`text-lg font-bold text-[var(--foreground)] mb-3 transition-colors ${
                        isGoldAccented ? 'group-hover:text-[#c9a96e] font-montserrat' : 'group-hover:text-[var(--accent-amber)]'
                      } ${techMode ? 'font-mono text-base' : ''}`}>
                        {mod.title[lang]}
                      </h3>
                      <p className={`text-xs sm:text-sm text-[var(--muted)] leading-relaxed mb-6 ${techMode ? 'font-mono text-xs' : ''}`}>
                        {techMode ? mod.descTech[lang] : mod.descBusiness[lang]}
                      </p>
                    </div>

                    <div>
                      {/* Benefit chip in Business mode vs Tech specs in Tech mode */}
                      {!techMode ? (
                        <div className="pt-4 border-t border-[var(--border)]">
                          <span className={`text-[12px] font-semibold flex items-center gap-1.5 ${
                            isGoldAccented ? 'text-[#c9a96e] font-montserrat' : 'text-emerald-500 font-business'
                          }`}>
                            <CheckCircle2 className={`w-4 h-4 shrink-0 ${isGoldAccented ? 'text-[#c9a96e]' : 'text-emerald-500'}`} />
                            {mod.businessBenefit[lang]}
                          </span>
                        </div>
                      ) : (
                        <div className="flex flex-wrap gap-1.5 pt-4 border-t border-[var(--border)] font-mono">
                          {mod.specs.map((spec) => (
                            <span
                              key={spec}
                              className="px-2 py-0.5 text-[10px] rounded-xs border border-[var(--border)] bg-[var(--surface-alt)] text-[var(--muted)]"
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

          {/* ─── Architectural Layer Breakdown (Shown in Tech Mode) ─── */}
          {techMode && (
            <div className="mb-24">
              <ScrollReveal>
                <div className="mb-12">
                  <p className="geo-badge text-xs font-medium tracking-[0.18em] uppercase text-[var(--muted)] mb-3">
                    CLOUD INFRASTRUCTURE BLUEPRINT
                  </p>
                  <h2 className="text-2xl sm:text-3xl font-bold font-mono text-[var(--foreground)]">
                    {isEs ? 'Capas de la Infraestructura' : 'Infrastructure Blueprint'}
                  </h2>
                </div>
              </ScrollReveal>

              <div className="space-y-4 font-mono">
                {study.architectureLayers.map((layer, idx) => (
                  <ScrollReveal key={layer.layer} delay={idx * 60}>
                    <div className="p-6 sm:p-8 rounded-xs border border-[var(--border)] bg-[var(--surface-alt)] hover:border-[var(--accent-amber-border)] transition-colors">
                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                        <div>
                          <span className="text-[10px] uppercase tracking-wider text-[var(--accent-amber)] font-bold block mb-1">
                            {layer.layer}
                          </span>
                          <h3 className="text-base sm:text-lg font-bold text-[var(--foreground)]">
                            {layer.title[lang]}
                          </h3>
                        </div>

                        <div className="flex flex-wrap gap-2">
                          {layer.techs.map((tech) => (
                            <span
                              key={tech}
                              className="px-2.5 py-1 text-xs rounded-xs border border-[var(--border-strong)] bg-[var(--surface)] text-[var(--foreground)] font-semibold"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      <p className="text-xs text-[var(--muted)] leading-relaxed">
                        {layer.description[lang]}
                      </p>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          )}

          {/* ─── Testimonial Section with Warm Luxury Editorial Styling ─── */}
          {study.testimonial && (
            <ScrollReveal>
              <div className={`mb-24 p-8 sm:p-14 rounded-xs border relative overflow-hidden ${
                isGoldAccented
                  ? 'border-[#c9a96e]/40 bg-[#2a2a2a] text-[#faf8f5]'
                  : 'border-[var(--border-strong)] bg-[var(--surface-inv)] text-[var(--foreground-inv)]'
              }`}>
                <div className="max-w-3xl">
                  <span className={`inline-flex items-center gap-2 px-3 py-1 text-[10px] uppercase tracking-wider rounded-xs mb-8 ${
                    isGoldAccented
                      ? 'bg-[#c9a96e]/20 text-[#c9a96e] font-montserrat'
                      : 'bg-[var(--surface)] text-[var(--foreground)] font-mono'
                  }`}>
                    <span className={`w-1.5 h-1.5 rounded-full ${isGoldAccented ? 'bg-[#c9a96e]' : 'bg-emerald-500'}`} />
                    {isEs ? 'Cliente Verificado en Producción' : 'Verified Client Production'}
                  </span>
                  <blockquote className={`text-2xl sm:text-3xl md:text-4xl leading-snug mb-8 ${
                    isGoldAccented ? 'font-cormorant italic font-normal text-[#faf8f5]' : (techMode ? 'font-mono text-lg sm:text-xl' : 'font-business')
                  }`}>
                    "{study.testimonial.quote[lang]}"
                  </blockquote>
                  <div className={isGoldAccented ? 'font-montserrat' : ''}>
                    <p className="font-bold text-base">{study.testimonial.author}</p>
                    <p className={`text-xs ${isGoldAccented ? 'text-[#c9a96e]' : 'opacity-75'}`}>{study.testimonial.role[lang]}</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          )}

          {/* ─── Bottom CTA Banner ──────────────────────── */}
          <ScrollReveal>
            <div className={`p-8 sm:p-14 rounded-xs border bg-[var(--surface-raised)] text-center ${
              isGoldAccented ? 'border-[#c9a96e]/40' : 'border-[var(--accent-amber-border)]'
            }`}>
              <h2 className={`text-2xl sm:text-3xl md:text-4xl font-bold text-[var(--foreground)] mb-4 ${getHeadingFontClass()}`}>
                {isEs
                  ? '¿Tienes un proyecto con necesidades similares?'
                  : 'Have a project with similar requirements?'}
              </h2>
              <p className={`text-sm sm:text-base text-[var(--muted)] max-w-xl mx-auto mb-8 ${techMode ? 'font-mono text-xs sm:text-sm' : ''}`}>
                {isEs
                  ? 'Diseñamos y construimos plataformas personalizadas sin plantillas prefabricadas, con atención directa y código de primer nivel.'
                  : 'We architect and build tailored platforms with direct partner engineering and zero bloated templates.'}
              </p>
              <Link
                href={`/${lang}/contact`}
                className={`btn-press inline-flex items-center gap-2 px-8 py-4 rounded-xs font-bold text-xs uppercase tracking-[0.14em] ${
                  isGoldAccented
                    ? 'bg-[#c9a96e] hover:bg-[#a8844a] text-black shadow-sm'
                    : 'bg-[var(--foreground)] hover:bg-[var(--accent-amber)] text-[var(--foreground-inv)] hover:text-black'
                }`}
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
