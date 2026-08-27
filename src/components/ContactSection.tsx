'use client'

import { useState } from 'react'
import ScrollReveal from './ScrollReveal'
import { Mail, MessageSquare, MapPin, Construction, ArrowUpRight, Copy, Check } from 'lucide-react'
import { GithubIcon, LinkedinIcon, InstagramIcon } from './Icons'

type Dict = {
  contact: {
    badge: string
    title: string
    sub: string
    under_construction_title: string
    under_construction_badge: string
    under_construction_text: string
    channels: {
      email_label: string
      email_val: string
      whatsapp_label: string
      whatsapp_val: string
      whatsapp_btn: string
      location_label: string
      location_val: string
    }
  }
}

export default function ContactSection({ dict, lang = 'es' }: { dict: Dict; lang?: string }) {
  const [copied, setCopied] = useState(false)
  const c = dict.contact

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    navigator.clipboard.writeText(c.channels.email_val)
    setCopied(true)
    setTimeout(() => setCopied(false), 2200)
  }

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="py-28 px-4 sm:px-6 bg-[var(--surface)] dot-pattern"
    >
      <div className="max-w-4xl mx-auto">
        <ScrollReveal>
          {/* Header */}
          <div className="text-center mb-16">
            <p className="geo-badge text-xs font-medium tracking-[0.18em] uppercase text-[var(--muted)] mb-4 justify-center">
              {c.badge}
            </p>
            <h2
              id="contact-heading"
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-[var(--foreground)] tracking-tight mb-4"
              style={{ textWrap: 'balance' } as React.CSSProperties}
            >
              {c.title}
            </h2>
            <p className="text-sm sm:text-base text-[var(--muted)] max-w-[540px] mx-auto leading-relaxed">
              {c.sub}
            </p>
          </div>

          {/* Under Construction Interactive Panel */}
          <div className="bracket-corners border border-[var(--border-strong)] bg-[var(--surface-raised)] p-8 sm:p-12 shadow-sm relative overflow-hidden">
            {/* Status Bar */}
            <div className="flex flex-wrap items-center justify-between gap-3 pb-6 mb-8 border-b border-[var(--border)]">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-xs bg-[var(--accent-amber-subtle)] border border-[var(--accent-amber-border)] flex items-center justify-center">
                  <Construction className="w-4 h-4 text-[var(--accent-amber)] animate-pulse" />
                </div>
                <div>
                  <h3 className="text-sm sm:text-base font-bold text-[var(--foreground)]">
                    {c.under_construction_title}
                  </h3>
                  <span className="text-[11px] font-mono text-[var(--accent-amber)]">
                    {c.under_construction_badge}
                  </span>
                </div>
              </div>

              <span className="px-2.5 py-1 text-[10px] font-mono uppercase tracking-wider rounded-xs border border-[var(--border)] bg-[var(--surface-alt)] text-[var(--muted)]">
                {lang === 'en' ? 'Architecture v2.0' : 'Arquitectura v2.0'}
              </span>
            </div>

            <p className="text-xs sm:text-sm text-[var(--muted)] mb-8 leading-relaxed">
              {c.under_construction_text}
            </p>

            {/* Direct Channels Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {/* WhatsApp Direct */}
              <a
                href="https://wa.me/524423522387"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-press p-5 rounded-xs border border-[var(--border)] bg-[var(--surface)] hover:border-[var(--accent-amber-border)] flex items-center justify-between group min-h-[72px]"
              >
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-xs bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center shrink-0">
                    <MessageSquare className="w-4 h-4 text-emerald-500" />
                  </div>
                  <div>
                    <span className="text-[11px] uppercase tracking-wider font-mono text-[var(--muted)] block">
                      {c.channels.whatsapp_label}
                    </span>
                    <span className="text-sm font-semibold text-[var(--foreground)] group-hover:text-[var(--accent-amber)] transition-colors">
                      {c.channels.whatsapp_val}
                    </span>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-[var(--muted)] group-hover:text-[var(--accent-amber)] transition-colors" />
              </a>

              {/* Email Direct with Quick Copy Button */}
              <div className="p-5 rounded-xs border border-[var(--border)] bg-[var(--surface)] hover:border-[var(--accent-amber-border)] flex items-center justify-between group min-h-[72px] transition-colors">
                <a
                  href={`mailto:${c.channels.email_val}?subject=Consulta%20de%20Proyecto%20-%20AyeApps`}
                  className="flex items-center gap-3.5 flex-1 min-w-0"
                >
                  <div className="w-10 h-10 rounded-xs bg-[var(--accent-amber-subtle)] border border-[var(--accent-amber-border)] flex items-center justify-center shrink-0">
                    <Mail className="w-4 h-4 text-[var(--accent-amber)]" />
                  </div>
                  <div className="truncate">
                    <span className="text-[11px] uppercase tracking-wider font-mono text-[var(--muted)] block">
                      {c.channels.email_label}
                    </span>
                    <span className="text-sm font-semibold text-[var(--foreground)] group-hover:text-[var(--accent-amber)] transition-colors truncate block">
                      {c.channels.email_val}
                    </span>
                  </div>
                </a>

                {/* 1-Click Copy Delight Interaction */}
                <button
                  onClick={handleCopyEmail}
                  title="Copiar email"
                  aria-label="Copiar correo electrónico al portapapeles"
                  className="btn-press ml-2 p-2 rounded-xs border border-[var(--border)] bg-[var(--surface-alt)] hover:border-[var(--accent-amber)] text-[var(--muted)] hover:text-[var(--foreground)] transition-colors shrink-0"
                >
                  {copied ? (
                    <Check className="w-4 h-4 text-emerald-500" />
                  ) : (
                    <Copy className="w-4 h-4 text-[var(--accent-amber)]" />
                  )}
                </button>
              </div>
            </div>

            {/* Location & Social Icons */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-6 border-t border-[var(--border)]">
              <div className="flex items-center gap-2 text-xs font-mono text-[var(--muted)]">
                <MapPin className="w-3.5 h-3.5 text-[var(--accent-amber)]" />
                <span>{c.channels.location_val}</span>
              </div>

              <div className="flex items-center gap-2">
                <a
                  href="https://github.com/alberto24dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="btn-press min-w-[40px] min-h-[40px] flex items-center justify-center rounded-xs text-[var(--muted)] hover:text-[var(--accent-amber)] transition-colors p-2"
                >
                  <GithubIcon className="w-4 h-4" />
                </a>
                <a
                  href="https://linkedin.com/in/alberto24dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="btn-press min-w-[40px] min-h-[40px] flex items-center justify-center rounded-xs text-[var(--muted)] hover:text-[var(--accent-amber)] transition-colors p-2"
                >
                  <LinkedinIcon className="w-4 h-4" />
                </a>
                <a
                  href="https://www.instagram.com/aye_apps_dev/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="btn-press min-w-[40px] min-h-[40px] flex items-center justify-center rounded-xs text-[var(--muted)] hover:text-[var(--accent-amber)] transition-colors p-2"
                >
                  <InstagramIcon className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
