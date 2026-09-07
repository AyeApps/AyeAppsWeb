import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import AyeLogo from './AyeLogo'

type Dict = {
  nav: {
    home: string
    services: string
    portfolio: string
    stack: string
    contact: string
  }
  footer: {
    tagline: string
    ecosystem_badge?: string
    ecosystem_title?: string
    nav_title?: string
    status_badge?: string
    apps?: {
      video: { name: string; desc: string; tag: string }
      tasks: { name: string; desc: string; tag: string }
      finance: { name: string; desc: string; tag: string }
      auth: { name: string; desc: string; tag: string }
    }
    rights: string
    built_with: string
  }
}

export default function Footer({ dict, lang }: { dict: Dict; lang: string }) {
  const f = dict.footer
  const n = dict.nav

  const ecosystemApps = [
    {
      name: f.apps?.video.name || 'AyeVideoDownloader',
      desc: f.apps?.video.desc || (lang === 'es' ? 'Descargador Multimedia 4K & MP3' : '4K Multimedia & MP3 Downloader'),
      tag: f.apps?.video.tag || '4K · MP3',
      url: 'https://video.ayeapps.com',
    },
    {
      name: f.apps?.tasks.name || 'AyeTasks',
      desc: f.apps?.tasks.desc || (lang === 'es' ? 'Gestor de Proyectos & Tiempo' : 'Project & Time Management'),
      tag: f.apps?.tasks.tag || 'Productividad',
      url: 'https://tasks.ayeapps.com',
    },
    {
      name: f.apps?.finance.name || 'AyeFinance',
      desc: f.apps?.finance.desc || (lang === 'es' ? 'Flujo de Caja & Finanzas' : 'Cash Flow & Financial Intelligence'),
      tag: f.apps?.finance.tag || 'Fintech',
      url: 'https://finance.ayeapps.com',
    },
    {
      name: f.apps?.auth.name || 'AyeAuth',
      desc: f.apps?.auth.desc || (lang === 'es' ? 'Identidad & Seguridad' : 'Unified Identity & Security'),
      tag: f.apps?.auth.tag || 'SSO · JWT',
      url: 'https://accounts.ayeapps.com',
    },
  ]

  return (
    <footer className="border-t border-[var(--border)] bg-[var(--surface-alt)] py-16 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-4 space-y-4">
            <Link
              href={`/${lang}`}
              className="inline-flex items-center gap-3 text-base font-bold tracking-tight text-[var(--foreground)] group"
            >
              <div className="w-8 h-8 rounded-xs border border-[var(--border-strong)] p-1 bg-[var(--surface-raised)] group-hover:border-[var(--accent-amber)] transition-colors flex items-center justify-center">
                <AyeLogo className="w-full h-full text-[var(--foreground)]" />
              </div>
              <span className="font-bold tracking-tight">
                Aye<span className="font-light text-[var(--muted)] group-hover:text-[var(--accent-amber)] transition-colors">Apps</span>
              </span>
            </Link>
            <p className="text-xs text-[var(--muted)] leading-relaxed max-w-[340px]">
              {f.tagline}
            </p>
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-xs border border-[var(--border)] bg-[var(--surface-raised)] text-[10px] font-mono text-[var(--muted)]">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-amber)] animate-pulse" />
              <span>{f.status_badge || (lang === 'es' ? 'PLATAFORMAS EN PRODUCCIÓN' : 'PRODUCTION PLATFORMS')}</span>
            </div>
          </div>

          {/* Ecosistema AyeApps Column (Destacado) */}
          <div className="lg:col-span-5 space-y-3">
            <div className="flex items-center gap-2 mb-2">
              <span className="w-3 h-[1.5px] bg-[var(--accent-amber)]" />
              <h3 className="font-mono text-xs uppercase tracking-[0.16em] text-[var(--foreground)] font-semibold">
                {f.ecosystem_badge || (lang === 'es' ? 'Ecosistema AyeApps' : 'AyeApps Ecosystem')}
              </h3>
              <span className="px-1.5 py-0.5 text-[9px] font-mono uppercase tracking-wider rounded-xs border border-[var(--accent-amber-border)] bg-[var(--accent-amber-subtle)] text-[var(--accent-amber)]">
                Suite
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {ecosystemApps.map((app) => (
                <a
                  key={app.url}
                  href={app.url}
                  target="_blank"
                  rel="noopener"
                  className="group flex flex-col justify-between p-3 rounded-xs border border-[var(--border)] hover:border-[var(--accent-amber-border)] bg-[var(--surface-raised)]/60 hover:bg-[var(--surface-raised)] transition-all duration-200 card-lift"
                >
                  <div className="flex items-center justify-between gap-1 mb-1">
                    <span className="text-xs font-semibold text-[var(--foreground)] group-hover:text-[var(--accent-amber)] transition-colors truncate">
                      {app.name}
                    </span>
                    <div className="flex items-center gap-1 shrink-0">
                      <span className="px-1.5 py-0.2 text-[8.5px] font-mono uppercase tracking-wider rounded-xs border border-[var(--border-strong)] bg-[var(--surface-alt)] text-[var(--muted)] group-hover:border-[var(--accent-amber-border)] group-hover:text-[var(--accent-amber)] transition-colors">
                        {app.tag}
                      </span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-[var(--muted)] group-hover:text-[var(--accent-amber)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                    </div>
                  </div>
                  <p className="text-[10.5px] text-[var(--muted)] line-clamp-1 group-hover:text-[var(--foreground)]/80 transition-colors">
                    {app.desc}
                  </p>
                </a>
              ))}
            </div>
          </div>

          {/* Navegación Corporativa Column */}
          <div className="lg:col-span-3 space-y-3">
            <div className="flex items-center gap-2 mb-2">
              <span className="w-3 h-[1.5px] bg-[var(--border-strong)]" />
              <h3 className="font-mono text-xs uppercase tracking-[0.16em] text-[var(--foreground)] font-semibold">
                {f.nav_title || (lang === 'es' ? 'Navegación' : 'Navigation')}
              </h3>
            </div>

            <nav className="flex flex-col space-y-2.5">
              <Link
                href={`/${lang}`}
                className="text-xs uppercase tracking-[0.14em] font-medium text-[var(--muted)] hover:text-[var(--accent-amber)] transition-colors w-fit group flex items-center gap-1.5"
              >
                <span className="w-1 h-1 rounded-full bg-[var(--border-strong)] group-hover:bg-[var(--accent-amber)] transition-colors" />
                {n.home}
              </Link>
              <Link
                href={`/${lang}/portfolio`}
                className="text-xs uppercase tracking-[0.14em] font-medium text-[var(--muted)] hover:text-[var(--accent-amber)] transition-colors w-fit group flex items-center gap-1.5"
              >
                <span className="w-1 h-1 rounded-full bg-[var(--border-strong)] group-hover:bg-[var(--accent-amber)] transition-colors" />
                {n.portfolio}
              </Link>
              <Link
                href={`/${lang}/services`}
                className="text-xs uppercase tracking-[0.14em] font-medium text-[var(--muted)] hover:text-[var(--accent-amber)] transition-colors w-fit group flex items-center gap-1.5"
              >
                <span className="w-1 h-1 rounded-full bg-[var(--border-strong)] group-hover:bg-[var(--accent-amber)] transition-colors" />
                {n.services}
              </Link>
              <Link
                href={`/${lang}/stack`}
                className="text-xs uppercase tracking-[0.14em] font-medium text-[var(--muted)] hover:text-[var(--accent-amber)] transition-colors w-fit group flex items-center gap-1.5"
              >
                <span className="w-1 h-1 rounded-full bg-[var(--border-strong)] group-hover:bg-[var(--accent-amber)] transition-colors" />
                {n.stack}
              </Link>
              <Link
                href={`/${lang}/contact`}
                className="text-xs uppercase tracking-[0.14em] font-medium text-[var(--muted)] hover:text-[var(--accent-amber)] transition-colors w-fit group flex items-center gap-1.5"
              >
                <span className="w-1 h-1 rounded-full bg-[var(--border-strong)] group-hover:bg-[var(--accent-amber)] transition-colors" />
                {n.contact}
              </Link>
            </nav>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-8 border-t border-[var(--border)] text-xs text-[var(--muted)] font-mono">
          <p>© {new Date().getFullYear()} AyeApps. {f.rights}</p>
          <p>{f.built_with}</p>
        </div>
      </div>
    </footer>
  )
}
