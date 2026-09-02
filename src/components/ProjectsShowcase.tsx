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
  Sparkles,
  Wallet,
  TrendingUp,
  ArrowRight,
  ArrowUpRight
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
  const [downloaderMode, setDownloaderMode] = useState<'local' | 'cloud'>('cloud')
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
                  className={`btn-press px-4 py-2 text-xs font-mono tracking-wide rounded-xs border transition-all cursor-pointer ${
                    active
                      ? 'border-[var(--accent-amber)] bg-[var(--accent-amber-subtle)] text-[var(--foreground)] font-bold shadow-xs'
                      : 'border-black/15 bg-white text-neutral-700 hover:text-black dark:border-white/15 dark:bg-black dark:text-neutral-300 dark:hover:text-white'
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
                      /* Interactive Fatima Resendiz CRM Platform & Full Admin Panel Mockup */
                      <div className="space-y-3">
                        <div className="flex items-center justify-between pb-2 border-b border-[var(--border)] text-[10px] font-mono">
                          <div className="flex items-center gap-1.5">
                            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                            <span className="text-[var(--foreground)] font-semibold">fatimaresendiz.com</span>
                          </div>
                          <span className="text-[var(--accent-amber)] uppercase font-bold tracking-wider text-[9px] flex items-center gap-1">
                            <Sparkles className="w-2.5 h-2.5" />
                            {lang === 'es' ? 'PANEL DE ADMIN · CONTROL TOTAL' : 'ADMIN PANEL · FULL CONTROL'}
                          </span>
                        </div>

                        {/* Interactive Pipeline Stage Stepper */}
                        <div className="space-y-1">
                          <div className="flex items-center justify-between text-[9px] font-mono text-[var(--muted)] pb-1">
                            <span>{lang === 'es' ? 'Flujo de Lead en CRM:' : 'Lead Lifecycle in CRM:'}</span>
                            <span className="text-[var(--accent-amber)] font-bold">{CRM_STAGES[crmStep].name}</span>
                          </div>
                          <div className="grid grid-cols-4 gap-1">
                            {CRM_STAGES.map((stg, sIdx) => (
                              <button
                                key={stg.name}
                                onClick={() => setCrmStep(sIdx)}
                                className={`py-1 text-[8.5px] font-mono rounded-xs border transition-all text-center cursor-pointer ${
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

                        {/* Connected services & Admin modules */}
                        <div className="grid grid-cols-3 gap-1.5 pt-1 text-center font-mono text-[8.5px]">
                          <div className="p-1.5 rounded-xs border border-[var(--accent-amber-border)] bg-[var(--accent-amber-subtle)]/40">
                            <span className="text-[var(--accent-amber)] block font-bold">Panel de Admin</span>
                            <span className="text-[var(--foreground)] text-[8px] font-medium">{lang === 'es' ? 'Modifica Todo en Vivo' : 'Live Content Control'}</span>
                          </div>
                          <div className="p-1.5 rounded-xs border border-[var(--border)] bg-[var(--surface-alt)]">
                            <span className="text-[var(--foreground)] block font-semibold">Pic-Time</span>
                            <span className="text-[var(--muted)] text-[8px]">{lang === 'es' ? 'Galerías Privadas' : 'Private Galleries'}</span>
                          </div>
                          <div className="p-1.5 rounded-xs border border-[var(--border)] bg-[var(--surface-alt)]">
                            <span className="text-[var(--foreground)] block font-semibold">FastAPI + Brevo</span>
                            <span className="text-[var(--muted)] text-[8px]">{lang === 'es' ? 'CRM & Correos Auto' : 'CRM & Auto Email'}</span>
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
                      /* Interactive AyeVideoDownloader Web Platform Mockup */
                      <div className="space-y-2.5 font-mono text-[10px]">
                        <div className="flex items-center justify-between pb-1.5 border-b border-[var(--border)]">
                          <span className="text-[var(--foreground)] font-bold flex items-center gap-1.5">
                            <Download className="w-3.5 h-3.5 text-[var(--accent-amber)] animate-pulse" />
                            AyeVideoDownloader
                          </span>
                          <span className="text-[var(--accent-amber)] text-[9px]">Web Platform · FastAPI + FFmpeg</span>
                        </div>

                        {/* Mode Switcher: Web Platform vs Native Apps Coming Soon */}
                        <div className="grid grid-cols-2 gap-1.5 p-1 rounded-xs bg-[var(--surface-alt)] border border-[var(--border)]">
                          <button
                            onClick={() => setDownloaderMode('cloud')}
                            className={`flex items-center justify-center gap-1.5 py-1 text-[9px] rounded-xs transition-all cursor-pointer ${
                              downloaderMode === 'cloud'
                                ? 'bg-[var(--surface)] text-[var(--foreground)] font-bold border border-[var(--accent-amber-border)] shadow-xs'
                                : 'text-[var(--muted)] hover:text-[var(--foreground)]'
                            }`}
                          >
                            <Server className="w-3 h-3 text-emerald-500" />
                            {lang === 'es' ? 'Plataforma Web (Activa)' : 'Web Platform (Live)'}
                          </button>
                          <button
                            onClick={() => setDownloaderMode('local')}
                            className={`flex items-center justify-center gap-1.5 py-1 text-[9px] rounded-xs transition-all cursor-pointer ${
                              downloaderMode === 'local'
                                ? 'bg-[var(--surface)] text-[var(--foreground)] font-bold border border-[var(--accent-amber-border)] shadow-xs'
                                : 'text-[var(--muted)] hover:text-[var(--foreground)]'
                            }`}
                          >
                            <Laptop className="w-3 h-3 text-[var(--accent-amber)]" />
                            {lang === 'es' ? 'App Mac & Móvil (Coming Soon)' : 'Mac & Mobile (Coming Soon)'}
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
                          <div className="text-[8.5px] font-semibold flex items-center gap-1">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
                            {downloaderMode === 'cloud' ? (
                              <span className="text-emerald-500">
                                {lang === 'es' ? 'Motor Cloud · 100% Sin Anuncios' : 'Cloud Engine · 100% Ad-Free'}
                              </span>
                            ) : (
                              <span className="text-[var(--accent-amber)]">
                                {lang === 'es' ? 'En Reingeniería · Coming Soon' : 'In Re-engineering · Coming Soon'}
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                    ) : project.id === 'ayefinance' ? (
                      /* AyeFinance Multi-Account Ledger & Cash Flow Mockup */
                      <div className="space-y-2 font-mono text-[10px]">
                        <div className="flex items-center justify-between pb-1.5 border-b border-[var(--border)]">
                          <span className="text-[var(--foreground)] font-bold flex items-center gap-1.5">
                            <Wallet className="w-3.5 h-3.5 text-[var(--accent-amber)]" />
                            AyeFinance Cash Flow
                          </span>
                          <span className="text-emerald-500 text-[9px] flex items-center gap-1">
                            <TrendingUp className="w-2.5 h-2.5" />
                            {lang === 'es' ? 'Proyección 30 Días' : '30-Day Forecast'}
                          </span>
                        </div>
                        <div className="grid grid-cols-2 gap-1.5 text-[8.5px]">
                          <div className="p-2 rounded-xs border border-[var(--border)] bg-[var(--surface-alt)]">
                            <span className="text-[var(--muted)] block text-[8px] uppercase">{lang === 'es' ? 'Nómina · BBVA' : 'Checking · BBVA'}</span>
                            <span className="text-[var(--foreground)] font-bold">$42,850.00 MXN</span>
                          </div>
                          <div className="p-2 rounded-xs border border-[var(--border)] bg-[var(--surface-alt)]">
                            <span className="text-[var(--muted)] block text-[8px] uppercase">{lang === 'es' ? 'Ahorro · Nu (15%)' : 'Savings · Nu (15%)'}</span>
                            <span className="text-[var(--accent-amber)] font-bold">$128,400.00 MXN</span>
                          </div>
                        </div>
                        <div className="flex items-center justify-between pt-1 text-[8px] text-[var(--muted)] border-t border-[var(--border)]/60">
                          <span>{lang === 'es' ? 'FastAPI + Beanie ODM' : 'FastAPI + Beanie ODM'}</span>
                          <span className="text-emerald-500 font-semibold">{lang === 'es' ? 'Flujo Neto: +$34,200' : 'Net Flow: +$34,200'}</span>
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

                  {/* Actions Links with Impeccable Visual Hierarchy */}
                  {(() => {
                    const hasCaseStudy = ['fatima-resendiz', 'aye-video-downloader'].includes(project.slug)
                    const hasRepo = Boolean(project.githubUrl)
                    const hasLive = Boolean(project.liveUrl)

                    if (hasCaseStudy) {
                      return (
                        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 pt-5 border-t border-[var(--border)]">
                          {/* Vibrant Eye-Catching Orange Button */}
                          <Link
                            href={`/${lang}/portfolio/${project.slug}`}
                            className="btn-press inline-flex items-center justify-center gap-2 px-5 py-3 text-xs uppercase tracking-[0.14em] font-bold bg-[var(--accent-amber)] hover:bg-[#ffb020] text-black rounded-xs shadow-xs hover:shadow-sm transition-all flex-1"
                          >
                            <Sparkles className="w-3.5 h-3.5 fill-black/20" />
                            <span>{p.view_case}</span>
                            <ArrowRight className="w-3.5 h-3.5" />
                          </Link>

                          {/* Companion Secondary Button (Repo or Live) */}
                          {hasRepo && (
                            <a
                              href={project.githubUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="btn-press inline-flex items-center justify-center gap-2 px-4 py-3 text-xs font-mono uppercase tracking-[0.12em] font-semibold border border-[var(--border-strong)] hover:border-[var(--foreground)] bg-[var(--surface-alt)] hover:bg-[var(--surface)] text-[var(--foreground)] rounded-xs transition-colors"
                            >
                              <GithubIcon className="w-3.5 h-3.5 text-[var(--muted)]" />
                              <span>{p.view_github}</span>
                            </a>
                          )}

                          {hasLive && (
                            <a
                              href={project.liveUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="btn-press inline-flex items-center justify-center gap-2 px-4 py-3 text-xs font-mono uppercase tracking-[0.12em] font-semibold border border-[var(--border-strong)] hover:border-[var(--foreground)] bg-[var(--surface-alt)] hover:bg-[var(--surface)] text-[var(--foreground)] rounded-xs transition-colors"
                            >
                              <ExternalLink className="w-3.5 h-3.5 text-[var(--accent-amber)]" />
                              <span>{p.view_live}</span>
                            </a>
                          )}
                        </div>
                      )
                    }

                    if (hasRepo) {
                      return (
                        <div className="flex items-center justify-center pt-5 border-t border-[var(--border)]">
                          {/* Centered button with subtle presence */}
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-press inline-flex items-center justify-center gap-2 px-6 py-2.5 text-xs font-mono uppercase tracking-[0.12em] text-[var(--muted)] hover:text-[var(--foreground)] border border-[var(--border)] hover:border-[var(--border-strong)] bg-[var(--surface-alt)] hover:bg-[var(--surface)] rounded-xs transition-all mx-auto group/btn"
                          >
                            <GithubIcon className="w-3.5 h-3.5 text-[var(--muted)] group-hover/btn:text-[var(--accent-amber)] transition-colors" />
                            <span>{p.view_github}</span>
                            <ArrowUpRight className="w-3 h-3 text-[var(--muted)] group-hover/btn:text-[var(--accent-amber)] transition-colors" />
                          </a>
                        </div>
                      )
                    }

                    if (hasLive) {
                      return (
                        <div className="flex items-center justify-center pt-5 border-t border-[var(--border)]">
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-press inline-flex items-center justify-center gap-2 px-6 py-2.5 text-xs font-mono uppercase tracking-[0.12em] text-[var(--muted)] hover:text-[var(--foreground)] border border-[var(--border)] hover:border-[var(--border-strong)] bg-[var(--surface-alt)] hover:bg-[var(--surface)] rounded-xs transition-all mx-auto"
                          >
                            <ExternalLink className="w-3.5 h-3.5 text-[var(--accent-amber)]" />
                            <span>{p.view_live}</span>
                          </a>
                        </div>
                      )
                    }

                    // Proprietary enterprise without public links
                    return (
                      <div className="flex items-center justify-center pt-5 border-t border-[var(--border)]">
                        <span className="inline-flex items-center justify-center gap-2 px-4 py-2 text-[11px] font-mono text-[var(--muted)] border border-[var(--border)]/70 bg-[var(--surface-alt)]/60 rounded-xs mx-auto">
                          <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" />
                          <span>{lang === 'es' ? 'Código Empresarial Privado' : 'Private Enterprise Codebase'}</span>
                        </span>
                      </div>
                    )
                  })()}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
