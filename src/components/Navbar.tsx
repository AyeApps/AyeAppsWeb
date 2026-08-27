'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'
import ThemeToggle from './ThemeToggle'
import { Menu, X, Globe, ArrowUpRight } from 'lucide-react'

type Dict = {
  nav: {
    home: string
    services: string
    portfolio: string
    stack: string
    contact: string
    cta: string
  }
}

export default function Navbar({ dict, lang }: { dict: Dict; lang: string }) {
  const pathname = usePathname()
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  const otherLang = lang === 'es' ? 'en' : 'es'
  const otherPath = pathname.replace(`/${lang}`, `/${otherLang}`)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = [
    { href: `/${lang}#portfolio`, label: dict.nav.portfolio },
    { href: `/${lang}#services`, label: dict.nav.services },
    { href: `/${lang}#stack`, label: dict.nav.stack },
    { href: `/${lang}#contact`, label: dict.nav.contact },
  ]

  return (
    <nav
      className={`nav-enter fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'border-b border-[var(--border)] bg-[var(--surface)]/90 backdrop-blur-md shadow-xs'
          : 'border-b border-transparent bg-[var(--surface)]/60 backdrop-blur-xs'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
        {/* Brand Logo */}
        <Link
          href={`/${lang}`}
          className="flex items-center gap-3 text-base font-bold tracking-tight text-[var(--foreground)] group"
        >
          <div className="w-7 h-7 rounded border border-[var(--border-strong)] p-1 bg-[var(--surface-raised)] group-hover:border-[var(--accent-amber)] transition-colors flex items-center justify-center">
            {/* Embedded Mini Bauhaus Glyphs */}
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

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-7">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="nav-link text-xs uppercase tracking-[0.14em] font-medium text-[var(--muted)] hover:text-[var(--foreground)] transition-colors"
            >
              {l.label}
            </Link>
          ))}
        </div>

        {/* Action Controls */}
        <div className="hidden md:flex items-center gap-3">
          {/* Language Switcher */}
          <Link
            href={otherPath}
            className="flex items-center gap-1.5 px-2.5 py-1 text-xs font-mono rounded border border-[var(--border)] bg-[var(--surface-alt)] hover:border-[var(--accent-amber-border)] text-[var(--muted)] hover:text-[var(--foreground)] transition-colors"
            aria-label="Cambiar idioma"
          >
            <Globe className="w-3 h-3 text-[var(--accent-amber)]" />
            <span className="uppercase font-semibold">{otherLang}</span>
          </Link>

          {/* Theme Toggle */}
          <ThemeToggle />

          {/* Direct CTA */}
          <Link
            href={`/${lang}#contact`}
            className="btn-press inline-flex items-center gap-1.5 px-4 py-2 text-xs uppercase tracking-[0.12em] font-semibold bg-[var(--foreground)] hover:bg-[var(--accent-amber)] text-[var(--foreground-inv)] hover:text-black transition-colors"
          >
            {dict.nav.cta}
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="flex md:hidden items-center gap-2">
          <ThemeToggle />
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Abrir menú"
            className="p-2 text-[var(--foreground)] border border-[var(--border)] rounded bg-[var(--surface-alt)]"
          >
            {menuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="md:hidden border-b border-[var(--border)] bg-[var(--surface)] px-5 py-6 space-y-4">
          <div className="flex flex-col space-y-3">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setMenuOpen(false)}
                className="text-sm font-medium tracking-wide text-[var(--foreground)] hover:text-[var(--accent-amber)] transition-colors py-1 border-b border-[var(--border)]/40"
              >
                {l.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center justify-between pt-4 border-t border-[var(--border)]">
            <Link
              href={otherPath}
              onClick={() => setMenuOpen(false)}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono rounded border border-[var(--border)] bg-[var(--surface-alt)]"
            >
              <Globe className="w-3.5 h-3.5 text-[var(--accent-amber)]" />
              <span>{lang === 'es' ? 'English (EN)' : 'Español (ES)'}</span>
            </Link>

            <Link
              href={`/${lang}#contact`}
              onClick={() => setMenuOpen(false)}
              className="px-4 py-2 text-xs uppercase font-semibold bg-[var(--foreground)] text-[var(--foreground-inv)]"
            >
              {dict.nav.cta}
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}
