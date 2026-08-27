import Link from 'next/link'

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
    rights: string
    built_with: string
  }
}

export default function Footer({ dict, lang }: { dict: Dict; lang: string }) {
  const f = dict.footer
  const n = dict.nav

  return (
    <footer className="border-t border-[var(--border)] bg-[var(--surface-alt)] py-16 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 mb-12">
          {/* Brand */}
          <div className="space-y-2">
            <Link
              href={`/${lang}`}
              className="flex items-center gap-3 text-base font-bold tracking-tight text-[var(--foreground)] group"
            >
              <div className="w-7 h-7 rounded border border-[var(--border-strong)] p-1 bg-[var(--surface-raised)] group-hover:border-[var(--accent-amber)] transition-colors flex items-center justify-center">
                <svg viewBox="0 0 1024 1024" className="w-full h-full text-[var(--foreground)]">
                  <path
                    d="M512 100 L900 850 L124 850 Z"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="110"
                  />
                  <circle cx="512" cy="512" r="160" fill="var(--accent-amber)" />
                </svg>
              </div>
              <span className="font-bold tracking-tight">
                Aye<span className="font-light text-[var(--muted)] group-hover:text-[var(--accent-amber)] transition-colors">Apps</span>
              </span>
            </Link>
            <p className="text-xs text-[var(--muted)] max-w-[320px]">
              {f.tagline}
            </p>
          </div>

          {/* Nav links */}
          <div className="flex flex-wrap items-center gap-6">
            <Link
              href={`/${lang}#portfolio`}
              className="text-xs uppercase tracking-[0.14em] font-medium text-[var(--muted)] hover:text-[var(--accent-amber)] transition-colors"
            >
              {n.portfolio}
            </Link>
            <Link
              href={`/${lang}#services`}
              className="text-xs uppercase tracking-[0.14em] font-medium text-[var(--muted)] hover:text-[var(--accent-amber)] transition-colors"
            >
              {n.services}
            </Link>
            <Link
              href={`/${lang}#stack`}
              className="text-xs uppercase tracking-[0.14em] font-medium text-[var(--muted)] hover:text-[var(--accent-amber)] transition-colors"
            >
              {n.stack}
            </Link>
            <Link
              href={`/${lang}#contact`}
              className="text-xs uppercase tracking-[0.14em] font-medium text-[var(--muted)] hover:text-[var(--accent-amber)] transition-colors"
            >
              {n.contact}
            </Link>
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
