'use client'

import Link from 'next/link'
import { useState } from 'react'
import { PROJECTS } from '@/data/projects'
import ScrollReveal from './ScrollReveal'
import {
  ExternalLink,
  Layers,
  Smartphone,
  Monitor,
  Cpu,
  CheckSquare,
  ChevronRight,
  ChevronDown,
  Camera,
  Download,
  Server,
  Laptop,
  Sparkles
} from 'lucide-react'
import { GithubIcon } from './Icons'

type Dict = {
  portfolio: {
    badge: string
    title: string
    sub: string
    filter_all: string
    filter_client: string
    filter_product: string
    filter_mobile: string
    filter_macos: string
    view_case: string
    view_github: string
    view_live: string
  }
}

export default function ProjectsShowcase({ dict, lang }: { dict: Dict; lang: 'es' | 'en' }) {
  const [filter, setFilter] = useState<'all' | 'client' | 'product' | 'mobile' | 'macos'>('all')

  // Interactive state for AyeTasks demo
  const [ayeTasksExpanded, setAyeTasksExpanded] = useState<Record<string, boolean>>({
    'node-1': true,
    'node-2': true,
  })

  // Interactive state for Fatima Resendiz CRM demo
  const [crmStep, setCrmStep] = useState<number>(2) // 0: Lead, 1: Contacted, 2: Booked, 3: Delivered

  // Interactive state for AyeVideoDownloader demo
  const [downloaderMode, setDownloaderMode] = useState<'local' | 'cloud'>('local')
  const [downloaderQuality, setDownloaderQuality] = useState<'4K' | '1080p' | 'MP3'>('4K')

  const p = dict.portfolio

  const filteredProjects = PROJECTS.filter((item) => {
    if (filter === 'all') return true
    if (filter === 'client') return item.category === 'client'
    if (filter === 'product') return item.category === 'product'
    if (filter === 'mobile') return item.category === 'mobile' || item.technologies.some(t => ['Swift', 'SwiftUI', 'iOS', 'React Native', 'Ionic'].includes(t))
    if (filter === 'macos') return item.category === 'macos' || item.technologies.includes('macOS')
    return true
  })

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'client': return <Monitor className="w-3.5 h-3.5" />
      case 'product': return <Layers className="w-3.5 h-3.5" />
      case 'mobile': return <Smartphone className="w-3.5 h-3.5" />
      default: return <Cpu className="w-3.5 h-3.5" />
    }
  }

  const toggleTaskNode = (id: string) => {
    setAyeTasksExpanded((prev) => ({ ...prev, [id]: !prev[id] }))
  }

  const CRM_STAGES = [
    { name: lang === 'es' ? 'Prospecto' : 'Lead', color: 'text-[var(--muted)]' },
    { name: lang === 'es' ? 'Contactado' : 'Contacted', color: 'text-amber-500' },
    { name: lang === 'es' ? 'Apartado' : 'Booked', color: 'text-emerald-500' },
    { name: lang === 'es' ? 'Entregado (Pic-Time)' : 'Delivered (Pic-Time)', color: 'text-[var(--accent-amber)]' },
  ]

  return (
    <section
      id="portfolio"
      aria-labelledby="portfolio-heading"
      className="py-24 px-4 sm:px-6 bg-[var(--surface-raised)] border-y border-[var(--border)]"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <ScrollReveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <p className="geo-badge text-xs font-medium tracking-[0.18em] uppercase text-[var(--muted)] mb-4">
                {p.badge}
              </p>
              <h2
                id="portfolio-heading"
                className="text-3xl sm:text-4xl md:text-5xl font-bold text-[var(--foreground)] tracking-tight"
                style={{ textWrap: 'balance' } as React.CSSProperties}
              >
                {p.title}
              </h2>
            </div>
            <p className="text-sm sm:text-base text-[var(--muted)] max-w-[420px]">
              {p.sub}
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 mb-12 border-b border-[var(--border)] pb-4">
            {[
              { id: 'all', label: p.filter_all },
              { id: 'client', label: p.filter_client },
              { id: 'product', label: p.filter_product },
              { id: 'mobile', label: p.filter_mobile },
              { id: 'macos', label: p.filter_macos },
            ].map((tab) => {
              const active = filter === tab.id
              return (
                <button
                  key={tab.id}
                  onClick={() => setFilter(tab.id as any)}
                  className={`btn-press px-4 py-2 text-xs font-mono tracking-wide rounded-xs border transition-all ${
                    active
                      ? 'border-[var(--accent-amber)] bg-[var(--accent-amber-subtle)] text-[var(--foreground)] font-bold shadow-xs'
                      : 'border-[var(--border)] bg-[var(--surface)] text-[var(--muted)] hover:text-[var(--foreground)] hover:border-[var(--border-strong)]'
                  }`}
                >
                  {tab.label}
                </button>
              )
            })}
          </div>
        </ScrollReveal>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project, idx) => (
            <ScrollReveal key={project.id} delay={idx * 60}>
              <div className="bracket-corners card-lift flex flex-col justify-between h-full p-6 sm:p-8 rounded-xs border border-[var(--border)] bg-[var(--surface)] relative group">
                <div>
                  {/* Top Bar: Category & Year */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 text-[10px] font-mono uppercase tracking-[0.14em] rounded-xs border border-[var(--border-strong)] bg-[var(--surface-alt)] text-[var(--muted)] group-hover:text-[var(--accent-amber)] transition-colors">
                      {getCategoryIcon(project.category)}
                      {project.categoryLabel[lang]}
                    </span>
                    <span className="text-xs font-mono text-[var(--muted)]">
                      {project.year}
                    </span>
                  </div>

                  {/* Title & Tagline */}
                  {['fatima-resendiz', 'aye-video-downloader'].includes(project.slug) ? (
                    <Link
                      href={`/${lang}/portfolio/${project.slug}`}
                      className="inline-block group/title mb-2"
                    >
                      <h3 className="text-xl sm:text-2xl font-bold text-[var(--foreground)] group-hover/title:text-[var(--accent-amber)] transition-colors flex items-center gap-2">
                        <span>{project.title}</span>
                        <Sparkles className="w-4 h-4 text-[var(--accent-amber)] opacity-70" />
                      </h3>
                    </Link>
                  ) : (
                    <h3 className="text-xl sm:text-2xl font-bold text-[var(--foreground)] mb-2 group-hover:text-[var(--accent-amber)] transition-colors">
                      {project.title}
                    </h3>
                  )}

                  <p className="text-xs sm:text-sm text-[var(--muted)] mb-5 leading-relaxed">
                    {project.tagline[lang]}
                  </p>

                  {/* Interactive Visual Representation Mockups */}
                  <div className="mb-6 p-4 rounded-xs border border-[var(--border)] bg-[var(--surface-raised)] overflow-hidden shadow-xs">
                    {project.id === 'fatima-resendiz' ? (
                      /* Interactive Fatima Resendiz CRM Platform Mockup */
                      <div className="space-y-3">
                        <div className="flex items-center justify-between pb-2 border-b border-[var(--border)] text-[10px] font-mono">
                          <div className="flex items-center gap-1.5">
                            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                            <span className="text-[var(--foreground)] font-semibold">fatimaresendiz.com</span>
                          </div>
                          <span className="text-[var(--accent-amber)] uppercase font-bold tracking-wider text-[9px]">
                            {lang === 'es' ? 'CRM INTERACTIVO' : 'LIVE CRM PIPELINE'}
                          </span>
                        </div>

                        {/* Interactive Pipeline Stage Stepper */}
                        <div className="space-y-1">
                          <div className="flex items-center justify-between text-[9px] font-mono text-[var(--muted)] pb-1">
                            <span>{lang === 'es' ? 'Flujo de Lead:' : 'Lead Lifecycle:'}</span>
                            <span className="text-[var(--accent-amber)] font-bold">{CRM_STAGES[crmStep].name}</span>
                          </div>
                          <div className="grid grid-cols-4 gap-1">
                            {CRM_STAGES.map((stg, sIdx) => (
                              <button
                                key={stg.name}
                                onClick={() => setCrmStep(sIdx)}
                                className={`py-1 text-[8.5px] font-mono rounded-xs border transition-all text-center ${
                                  sIdx === crmStep
                                    ? 'bg-[var(--accent-amber)] text-black font-bold border-[var(--accent-amber)]'
                                    : sIdx < crmStep
                                    ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-500'
                                    : 'bg-[var(--surface-alt)] border-[var(--border)] text-[var(--muted)]'
                                }`}
                              >
                                {sIdx + 1}. {stg.name.split(' ')[0]}
                              </button>
                            ))}
                          </div>
                        </div>

                        {/* Connected services chips */}
                        <div className="grid grid-cols-3 gap-1.5 pt-1 text-center font-mono text-[8.5px]">
                          <div className="p-1.5 rounded-xs border border-[var(--border)] bg-[var(--surface-alt)]">
                            <span className="text-[var(--foreground)] block font-semibold">Pic-Time</span>
                            <span className="text-[var(--muted)] text-[8px]">{lang === 'es' ? 'Galerías Privadas' : 'Private Galleries'}</span>
                          </div>
                          <div className="p-1.5 rounded-xs border border-[var(--border)] bg-[var(--surface-alt)]">
                            <span className="text-[var(--foreground)] block font-semibold">FastAPI</span>
                            <span className="text-[var(--muted)] text-[8px]">{lang === 'es' ? 'Motor Asíncrono' : 'Async Engine'}</span>
                          </div>
                          <div className="p-1.5 rounded-xs border border-[var(--border)] bg-[var(--surface-alt)]">
                            <span className="text-[var(--foreground)] block font-semibold">Brevo</span>
                            <span className="text-[var(--muted)] text-[8px]">{lang === 'es' ? 'Emails Automáticos' : 'Auto Email'}</span>
                          </div>
                        </div>
                      </div>
                    ) : project.id === 'ayetasks' ? (
                      /* Interactive AyeTasks Recursive Tree Mockup */
                      <div className="space-y-2 font-mono text-[10px]">
                        <div className="flex items-center justify-between pb-1.5 border-b border-[var(--border)]">
                          <span className="text-[var(--foreground)] font-bold flex items-center gap-1.5">
                            <CheckSquare className="w-3 h-3 text-[var(--accent-amber)]" />
                            AyeTasks Tree Engine
                          </span>
                          <span className="text-[var(--accent-amber)] text-[9px]">{lang === 'es' ? '25 Niveles · O(n)' : '25 Levels · O(n)'}</span>
                        </div>

                        {/* Node Level 01 */}
                        <div className="space-y-1.5">
                          <button
                            onClick={() => toggleTaskNode('node-1')}
                            className="w-full flex items-center justify-between py-1 px-2 rounded-xs bg-[var(--surface-alt)] hover:bg-[var(--surface)] border border-[var(--border)] text-left transition-colors cursor-pointer"
                          >
                            <div className="flex items-center gap-1.5 text-[9.5px]">
                              {ayeTasksExpanded['node-1'] ? <ChevronDown className="w-3 h-3 text-[var(--accent-amber)]" /> : <ChevronRight className="w-3 h-3" />}
                              <span className="font-semibold text-[var(--foreground)]">{lang === 'es' ? '01 / Plan Maestro de Lanzamiento' : '01 / Master Launch Plan'}</span>
                            </div>
                            <span className="text-[var(--accent-amber)] text-[8.5px] bg-[var(--accent-amber-subtle)] px-1.5 py-0.5 rounded-xs">
                              {lang === 'es' ? 'Exacto 09:00' : 'Exact 09:00'}
                            </span>
                          </button>

                          {/* Node Level 02 (Nested) */}
                          {ayeTasksExpanded['node-1'] && (
                            <div className="pl-4 space-y-1 border-l-2 border-[var(--accent-amber-border)] ml-2">
                              <button
                                onClick={() => toggleTaskNode('node-2')}
                                className="w-full flex items-center justify-between py-1 px-2 rounded-xs bg-[var(--surface)] border border-[var(--border)] text-left text-[9px] transition-colors cursor-pointer"
                              >
                                <div className="flex items-center gap-1">
                                  {ayeTasksExpanded['node-2'] ? <ChevronDown className="w-2.5 h-2.5 text-[var(--accent-amber)]" /> : <ChevronRight className="w-2.5 h-2.5" />}
                                  <span>↳ {lang === 'es' ? 'Arquitectura Swift MVVM' : 'Swift MVVM Architecture'}</span>
                                </div>
                                <span className="text-emerald-500 text-[8px]">{lang === 'es' ? 'Rango ISO' : 'Scoped ISO'}</span>
                              </button>

                              {/* Node Level 03 (Nested Deep) */}
                              {ayeTasksExpanded['node-2'] && (
                                <div className="pl-3 py-1 text-[8.5px] text-[var(--muted)] flex items-center justify-between bg-[var(--surface-alt)]/60 px-2 rounded-xs">
                                  <span>↳ {lang === 'es' ? 'Promoción Recursiva de Hijos' : 'Recursive Children Promotion'}</span>
                                  <span className="text-[var(--accent-amber)] text-[8px]">{lang === 'es' ? 'Nivel 03/25' : 'Level 03/25'}</span>
                                </div>
                              )}
                            </div>
                          )}
                        </div>
                      </div>
                    ) : project.id === 'aye-video-downloader' ? (
                      /* Interactive AyeVideoDownloader Dual Engine Mockup */
                      <div className="space-y-2.5 font-mono text-[10px]">
                        <div className="flex items-center justify-between pb-1.5 border-b border-[var(--border)]">
                          <span className="text-[var(--foreground)] font-bold flex items-center gap-1.5">
                            <Download className="w-3.5 h-3.5 text-[var(--accent-amber)] animate-bounce" />
                            AyeVideoDownloader Engine
                          </span>
                          <span className="text-[var(--accent-amber)] text-[9px]">yt-dlp + FFmpeg</span>
                        </div>

                        {/* Dual Mode Switcher */}
                        <div className="grid grid-cols-2 gap-1.5 p-1 rounded-xs bg-[var(--surface-alt)] border border-[var(--border)]">
                          <button
                            onClick={() => setDownloaderMode('local')}
                            className={`flex items-center justify-center gap-1.5 py-1 text-[9px] rounded-xs transition-all cursor-pointer ${
                              downloaderMode === 'local'
                                ? 'bg-[var(--surface)] text-[var(--foreground)] font-bold border border-[var(--accent-amber-border)] shadow-xs'
                                : 'text-[var(--muted)] hover:text-[var(--foreground)]'
                            }`}
                          >
                            <Laptop className="w-3 h-3 text-emerald-500" />
                            {lang === 'es' ? 'Modo Local (macOS)' : 'Local Engine (macOS)'}
                          </button>
                          <button
                            onClick={() => setDownloaderMode('cloud')}
                            className={`flex items-center justify-center gap-1.5 py-1 text-[9px] rounded-xs transition-all cursor-pointer ${
                              downloaderMode === 'cloud'
                                ? 'bg-[var(--surface)] text-[var(--foreground)] font-bold border border-[var(--accent-amber-border)] shadow-xs'
                                : 'text-[var(--muted)] hover:text-[var(--foreground)]'
                            }`}
                          >
                            <Server className="w-3 h-3 text-[var(--accent-amber)]" />
                            {lang === 'es' ? 'Cloud Worker (FastAPI)' : 'Cloud Worker (FastAPI)'}
                          </button>
                        </div>

                        {/* Quality Selector & Telemetry */}
                        <div className="flex items-center justify-between pt-1">
                          <div className="flex items-center gap-1">
                            {(['4K', '1080p', 'MP3'] as const).map((q) => (
                              <button
                                key={q}
                                onClick={() => setDownloaderQuality(q)}
                                className={`px-2 py-0.5 text-[8.5px] rounded-xs border transition-all cursor-pointer ${
                                  downloaderQuality === q
                                    ? 'border-[var(--accent-amber)] bg-[var(--accent-amber-subtle)] text-[var(--foreground)] font-bold'
                                    : 'border-[var(--border)] bg-[var(--surface)] text-[var(--muted)]'
                                }`}
                              >
                                {q}
                              </button>
                            ))}
                          </div>
                          <div className="text-[8.5px] text-emerald-500 font-semibold flex items-center gap-1">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
                            {downloaderMode === 'local'
                              ? (lang === 'es' ? '28.4 MB/s · FFmpeg Local' : '28.4 MB/s · FFmpeg Direct')
                              : (lang === 'es' ? 'Cola Asíncrona · 100% Nube' : 'Async Queue · 100% Cloud')}
                          </div>
                        </div>
                      </div>
                    ) : project.id === 'ayerecipes' ? (
                      /* AyeRecipes S3 Direct Upload Mockup */
                      <div className="space-y-2 font-mono text-[10px]">
                        <div className="flex items-center justify-between pb-1.5 border-b border-[var(--border)]">
                          <span className="text-[var(--foreground)] font-bold flex items-center gap-1.5">
                            <Camera className="w-3 h-3 text-[var(--accent-amber)]" />
                            {lang === 'es' ? 'Pipeline Prefirmado S3' : 'Presigned S3 Pipeline'}
                          </span>
                          <span className="text-emerald-500 text-[9px]">{lang === 'es' ? 'PUT Seguro (10 min)' : '10-min Secure PUT'}</span>
                        </div>
                        <div className="grid grid-cols-2 gap-1.5 text-[8.5px]">
                          <div className="p-2 rounded-xs border border-[var(--border)] bg-[var(--surface-alt)]">
                            <span className="text-[var(--foreground)] block font-semibold">Tier-1 NSCache</span>
                            <span className="text-[var(--muted)]">{lang === 'es' ? 'Sin Fugas de Memoria' : 'Zero RAM Leak'}</span>
                          </div>
                          <div className="p-2 rounded-xs border border-[var(--border)] bg-[var(--surface-alt)]">
                            <span className="text-[var(--foreground)] block font-semibold">FastAPI Async</span>
                            <span className="text-[var(--muted)]">{lang === 'es' ? '4 Concurrencias Máx' : '4 Max Concurrent'}</span>
                          </div>
                        </div>
                      </div>
                    ) : (
                      /* Standard Clean Browser / App Architecture View */
                      <div className="space-y-2 font-mono">
                        <div className="flex items-center justify-between pb-2 border-b border-[var(--border)]">
                          <div className="flex items-center gap-1.5">
                            <span className="w-2 h-2 rounded-full bg-[var(--border-strong)]" />
                            <span className="w-2 h-2 rounded-full bg-[var(--border-strong)]" />
                            <span className="w-2 h-2 rounded-full bg-[var(--border-strong)]" />
                            <span className="ml-2 text-[10px] text-[var(--muted)]">
                              {project.liveUrl ? project.liveUrl.replace('https://', '') : `${project.slug}.ayeapps.com`}
                            </span>
                          </div>
                          <span className="text-[9px] text-[var(--accent-amber)] font-bold">
                            {lang === 'es' ? 'LISTO EN PRODUCCIÓN' : 'PRODUCTION READY'}
                          </span>
                        </div>
                        <div className="py-1 px-1 text-[11px] text-[var(--foreground)] opacity-90 flex items-center justify-between">
                          <span>{project.role[lang]}</span>
                          <span className="text-[var(--muted)] text-[10px]">{project.year}</span>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Highlights List */}
                  <ul className="space-y-1.5 mb-6 text-xs text-[var(--muted)]">
                    {project.highlights[lang].slice(0, 3).map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-[var(--accent-amber)] font-mono font-bold">·</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  {/* Tech Badges */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 text-[10px] font-mono rounded-xs border border-[var(--border)] bg-[var(--surface-alt)] text-[var(--muted)]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Actions Links */}
                  <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-[var(--border)]">
                    {['fatima-resendiz', 'aye-video-downloader'].includes(project.slug) && (
                      <Link
                        href={`/${lang}/portfolio/${project.slug}`}
                        className="btn-press inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-xs bg-[var(--surface-raised)] border border-[var(--accent-amber-border)] text-[var(--foreground)] hover:bg-[var(--accent-amber)] hover:text-black transition-colors"
                      >
                        <Sparkles className="w-3.5 h-3.5 text-[var(--accent-amber)]" />
                        <span>{p.view_case}</span>
                      </Link>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-press inline-flex items-center gap-1.5 text-xs font-medium text-[var(--foreground)] hover:text-[var(--accent-amber)] transition-colors"
                      >
                        <ExternalLink className="w-3.5 h-3.5 text-[var(--accent-amber)]" />
                        {p.view_live}
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-press inline-flex items-center gap-1.5 text-xs font-medium text-[var(--foreground)] hover:text-[var(--accent-amber)] transition-colors"
                      >
                        <GithubIcon className="w-3.5 h-3.5 text-[var(--accent-amber)]" />
                        {p.view_github}
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
