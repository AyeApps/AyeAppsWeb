import Link from 'next/link'
import { ArrowRight, Terminal } from 'lucide-react'

type StatItem = { value: string; label: string }
type Dict = {
  hero: {
    badge: string
    headline1: string
    headline2: string
    sub: string
    cta_primary: string
    cta_secondary: string
    stats: StatItem[]
  }
}

export default function Hero({ dict, lang = 'es' }: { dict: Dict; lang?: string }) {
  return (
    <section
      aria-labelledby="hero-heading"
      className="relative min-h-[92dvh] flex flex-col justify-center overflow-hidden px-4 sm:px-6 pt-28 pb-16 dot-pattern"
    >
      {/* Concentric Circles & Geometric Bauhaus Motif (Background) */}
      <div aria-hidden="true" className="absolute right-[-10%] top-1/2 -translate-y-1/2 pointer-events-none opacity-40 dark:opacity-30">
        <div className="circles-orbit relative w-[680px] h-[680px]">
          <div className="absolute inset-0 rounded-full border border-[var(--border-strong)]" />
          <div className="absolute inset-16 rounded-full border border-[var(--accent-amber-border)]" />
          <div className="absolute inset-32 rounded-full border border-[var(--border-strong)]" />
          <div className="absolute inset-48 rounded-full border border-dashed border-[var(--border-strong)]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-[var(--accent-amber)] opacity-60 blur-xs" />
        </div>
      </div>

      {/* Cyber-Amber Horizontal Accent Line */}
      <div
        aria-hidden="true"
        className="absolute left-0 top-[38%] w-[20vw] h-[1.5px] pointer-events-none overflow-hidden"
      >
        <div className="hero-line-draw w-full h-full bg-[var(--accent-amber)]" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-6xl mx-auto w-full">
        {/* Geo Badge with Pulse */}
        <div
          className="hero-enter geo-badge mb-8 w-fit"
          style={{ animationDelay: '0ms' }}
        >
          <span className="inline-flex items-center gap-2 px-3 py-1 text-[11px] font-mono uppercase tracking-[0.18em] rounded-xs border border-[var(--border-strong)] bg-[var(--surface-raised)] text-[var(--foreground)]">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-amber)] animate-ping" />
            {dict.hero.badge}
          </span>
        </div>

        {/* Main Display Headline */}
        <h1
          id="hero-heading"
          className="text-[clamp(2.5rem,7.5vw,5.75rem)] font-bold tracking-[-0.03em] leading-[1.03] mb-6"
          style={{ textWrap: 'balance' } as React.CSSProperties}
        >
          <span
            className="hero-enter block text-[var(--foreground)]"
            style={{ animationDelay: '100ms' }}
          >
            {dict.hero.headline1}
          </span>
          <span
            className="hero-enter block text-[var(--muted)]"
            style={{ animationDelay: '220ms' }}
          >
            <span className="text-[var(--accent-amber)] underline decoration-1 underline-offset-8">
              {dict.hero.headline2.split(' ')[0]}
            </span>{' '}
            {dict.hero.headline2.split(' ').slice(1).join(' ')}
          </span>
        </h1>

        {/* Subtitle */}
        <p
          className="hero-enter text-[var(--muted)] text-base sm:text-lg max-w-[580px] mb-10 leading-relaxed"
          style={{ animationDelay: '340ms' }}
        >
          {dict.hero.sub}
        </p>

        {/* Action Buttons with Multi-Page Routing */}
        <div
          className="hero-enter flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-16"
          style={{ animationDelay: '460ms' }}
        >
          <Link
            href={`/${lang}/portfolio`}
            className="btn-press inline-flex items-center justify-center gap-3
              bg-[var(--foreground)] hover:bg-[var(--accent-amber)]
              text-[var(--foreground-inv)] hover:text-black font-semibold
              px-8 py-4 text-xs uppercase tracking-[0.14em] shadow-sm rounded-xs"
          >
            {dict.hero.cta_primary}
            <ArrowRight className="w-4 h-4" />
          </Link>

          <Link
            href={`/${lang}/services`}
            className="btn-press inline-flex items-center justify-center gap-2
              border border-[var(--border-strong)] hover:border-[var(--accent-amber-border)]
              bg-[var(--surface-raised)] hover:bg-[var(--surface-alt)]
              text-[var(--foreground)] font-medium
              px-7 py-4 text-xs uppercase tracking-[0.14em] rounded-xs"
          >
            <Terminal className="w-4 h-4 text-[var(--accent-amber)]" />
            {dict.hero.cta_secondary}
          </Link>
        </div>

        {/* Stats Grid Bar */}
        <div
          className="hero-enter grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 pt-8 border-t border-[var(--border)]"
          style={{ animationDelay: '580ms' }}
        >
          {dict.hero.stats.map((stat, i) => (
            <div key={i} className="flex flex-col space-y-1">
              <span className="text-2xl sm:text-3xl font-bold font-mono text-[var(--foreground)] tracking-tight">
                {stat.value}
              </span>
              <span className="text-[11px] uppercase tracking-[0.14em] font-medium text-[var(--muted)]">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
