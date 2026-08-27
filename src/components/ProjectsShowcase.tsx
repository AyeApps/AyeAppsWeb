'use client'

import { useState } from 'react'
import { PROJECTS, Project } from '@/data/projects'
import ScrollReveal from './ScrollReveal'
import { ExternalLink, Layers, Smartphone, Monitor, Cpu, Activity, Camera, CheckSquare, Sparkles } from 'lucide-react'
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

  const p = dict.portfolio

  const filteredProjects = PROJECTS.filter((item) => {
    if (filter === 'all') return true
    if (filter === 'client') return item.category === 'client'
    if (filter === 'product') return item.category === 'product'
    if (filter === 'mobile') return item.category === 'mobile' || item.technologies.some(t => ['Swift', 'SwiftUI', 'iOS', 'React Native', 'Ionic'].includes(t))
    if (filter === 'macos') return item.category === 'macos' || item.category === 'ai'
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
                  <h3 className="text-xl sm:text-2xl font-bold text-[var(--foreground)] mb-2 group-hover:text-[var(--accent-amber)] transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[var(--muted)] mb-5 leading-relaxed">
                    {project.tagline[lang]}
                  </p>

                  {/* Interactive Visual Representation Mockup */}
                  <div className="mb-6 p-4 rounded-xs border border-[var(--border)] bg-[var(--surface-raised)] overflow-hidden">
                    {project.id === 'fatima-resendiz' ? (
                      /* Flagship Client Platform Mockup */
                      <div className="space-y-3">
                        <div className="flex items-center justify-between pb-2 border-b border-[var(--border)] text-[10px] font-mono text-[var(--muted)]">
                          <div className="flex items-center gap-1.5">
                            <span className="w-2 h-2 rounded-full bg-emerald-500/80" />
                            <span className="text-[var(--foreground)] font-semibold">fatimaresendiz.com</span>
                          </div>
                          <span className="text-[var(--accent-amber)] uppercase font-bold tracking-wider">BILINGUAL PLATFORM</span>
                        </div>
                        <div className="grid grid-cols-3 gap-2 pt-1 text-center font-mono text-[9px]">
                          <div className="p-2 rounded-xs border border-[var(--border)] bg-[var(--surface-alt)]">
                            <span className="text-[var(--foreground)] block font-bold">Pic-Time API</span>
                            <span className="text-[var(--muted)]">Client Galleries</span>
                          </div>
                          <div className="p-2 rounded-xs border border-[var(--border)] bg-[var(--surface-alt)]">
                            <span className="text-[var(--foreground)] block font-bold">FastAPI</span>
                            <span className="text-[var(--muted)]">Lead Pipeline</span>
                          </div>
                          <div className="p-2 rounded-xs border border-[var(--border)] bg-[var(--surface-alt)]">
                            <span className="text-[var(--foreground)] block font-bold">Brevo</span>
                            <span className="text-[var(--muted)]">Automations</span>
                          </div>
                        </div>
                      </div>
                    ) : project.id === 'ayetasks' ? (
                      /* AyeTasks Infinite Tree Mockup */
                      <div className="space-y-2 font-mono text-[10px]">
                        <div className="flex items-center justify-between pb-1.5 border-b border-[var(--border)]">
                          <span className="text-[var(--foreground)] font-bold flex items-center gap-1.5">
                            <CheckSquare className="w-3 h-3 text-[var(--accent-amber)]" />
                            AyeTasks Neo-Tree
                          </span>
                          <span className="text-[var(--accent-amber)]">25 Levels · O(n)</span>
                        </div>
                        <div className="space-y-1.5 pl-1">
                          <div className="flex items-center justify-between py-1 px-2 rounded-xs bg-[var(--surface-alt)] border border-[var(--border)]">
                            <span>01 / Product Launch Architecture</span>
                            <span className="text-[var(--accent-amber)] text-[9px]">Polymorphic</span>
                          </div>
                          <div className="flex items-center justify-between py-1 px-2 rounded-xs bg-[var(--surface)] border border-[var(--accent-amber-border)] ml-3">
                            <span className="text-[var(--foreground)] font-semibold">↳ Swift Native Engine</span>
                            <span className="text-emerald-500 text-[9px]">Active</span>
                          </div>
                        </div>
                      </div>
                    ) : project.id === 'ayemusicvisualizer' ? (
                      /* macOS Audio DSP Visualizer Mockup */
                      <div className="space-y-2.5">
                        <div className="flex items-center justify-between pb-1.5 border-b border-[var(--border)] text-[10px] font-mono">
                          <span className="text-[var(--foreground)] font-bold flex items-center gap-1.5">
                            <Activity className="w-3 h-3 text-[var(--accent-amber)]" />
                            Accelerate vDSP FFT
                          </span>
                          <span className="text-[var(--accent-amber)]">60+ FPS Real-Time</span>
                        </div>
                        {/* Audio Waveform Equalizer simulation */}
                        <div className="flex items-end justify-between h-8 gap-1 pt-1 px-2">
                          {[35, 65, 90, 45, 80, 100, 70, 40, 85, 55, 95, 30].map((height, i) => (
                            <div
                              key={i}
                              style={{ height: `${height}%` }}
                              className={`w-full rounded-xs transition-all ${
                                i % 2 === 0
                                  ? 'bg-[var(--accent-amber)] opacity-90'
                                  : 'bg-[var(--foreground)] opacity-70'
                              }`}
                            />
                          ))}
                        </div>
                      </div>
                    ) : (
                      /* Standard Clean Browser / App Architecture View */
                      <div className="space-y-2">
                        <div className="flex items-center justify-between pb-2 border-b border-[var(--border)]">
                          <div className="flex items-center gap-1.5">
                            <span className="w-2 h-2 rounded-full bg-[var(--border-strong)]" />
                            <span className="w-2 h-2 rounded-full bg-[var(--border-strong)]" />
                            <span className="w-2 h-2 rounded-full bg-[var(--border-strong)]" />
                            <span className="ml-2 text-[10px] font-mono text-[var(--muted)]">
                              {project.liveUrl ? project.liveUrl.replace('https://', '') : `${project.slug}.ayeapps.com`}
                            </span>
                          </div>
                          <span className="text-[10px] font-mono text-[var(--accent-amber)] font-bold">
                            PRODUCTION READY
                          </span>
                        </div>
                        <div className="py-1 px-1 text-[11px] font-mono text-[var(--foreground)] opacity-90 flex items-center justify-between">
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
                  <div className="flex items-center gap-4 pt-4 border-t border-[var(--border)]">
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
