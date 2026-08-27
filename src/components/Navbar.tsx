'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'
import ThemeToggle from './ThemeToggle'
import AyeLogo from './AyeLogo'
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
  
  // Replace current language prefix cleanly with otherLang
  const otherPath = pathname.startsWith(`/${lang}`)
    ? pathname.replace(`/${lang}`, `/${otherLang}`)
    : `/${otherLang}`

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = [
    { href: `/${lang}`, label: dict.nav.home, exact: true },
    { href: `/${lang}/portfolio`, label: dict.nav.portfolio, exact: false },
    { href: `/${lang}/services`, label: dict.nav.services, exact: false },
    { href: `/${lang}/stack`, label: dict.nav.stack, exact: false },
    { href: `/${lang}/contact`, label: dict.nav.contact, exact: false },
  ]

  const isLinkActive = (href: string, exact: boolean) => {
    if (exact) return pathname === href
    return pathname.startsWith(href)
  }

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
          <div className="w-8 h-8 rounded-xs border border-[var(--border-strong)] p-1 bg-[var(--surface-raised)] group-hover:border-[var(--accent-amber)] transition-colors flex items-center justify-center">
            <AyeLogo className="w-full h-full text-[var(--foreground)]" />
          </div>
          <span className="font-bold tracking-tight">
            Aye<span className="font-light text-[var(--muted)] group-hover:text-[var(--accent-amber)] transition-colors">Apps</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-7">
          {links.map((l) => {
            const active = isLinkActive(l.href, l.exact)
            return (
              <Link
                key={l.href}
                href={l.href}
                className={`nav-link text-xs uppercase tracking-[0.14em] font-medium transition-colors pb-0.5 ${
                  active
                    ? 'text-[var(--accent-amber)] font-bold'
                    : 'text-[var(--muted)] hover:text-[var(--foreground)]'
                }`}
              >
                {l.label}
              </Link>
            )
          })}
        </div>

        {/* Action Controls */}
        <div className="hidden md:flex items-center gap-3">
          {/* Language Switcher */}
          <Link
            href={otherPath}
            className="flex items-center gap-1.5 px-2.5 py-1 text-xs font-mono rounded-xs border border-[var(--border)] bg-[var(--surface-alt)] hover:border-[var(--accent-amber-border)] text-[var(--muted)] hover:text-[var(--foreground)] transition-colors"
            aria-label="Cambiar idioma"
          >
            <Globe className="w-3 h-3 text-[var(--accent-amber)]" />
            <span className="uppercase font-semibold">{otherLang}</span>
          </Link>

          {/* Theme Toggle */}
          <ThemeToggle />

          {/* Direct CTA */}
          <Link
            href={`/${lang}/contact`}
            className="btn-press inline-flex items-center gap-1.5 px-4 py-2 text-xs uppercase tracking-[0.12em] font-semibold bg-[var(--foreground)] hover:bg-[var(--accent-amber)] text-[var(--foreground-inv)] hover:text-black transition-colors rounded-xs"
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
            className="p-2 text-[var(--foreground)] border border-[var(--border)] rounded-xs bg-[var(--surface-alt)]"
          >
            {menuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="md:hidden border-b border-[var(--border)] bg-[var(--surface)] px-5 py-6 space-y-4">
          <div className="flex flex-col space-y-3">
            {links.map((l) => {
              const active = isLinkActive(l.href, l.exact)
              return (
                <Link
                  key={l.href}
                  href={l.href}
                  onClick={() => setMenuOpen(false)}
                  className={`text-sm font-medium tracking-wide py-1.5 border-b border-[var(--border)]/40 flex items-center justify-between ${
                    active ? 'text-[var(--accent-amber)] font-bold' : 'text-[var(--foreground)]'
                  }`}
                >
                  <span>{l.label}</span>
                  {active && <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-amber)]" />}
                </Link>
              )
            })}
          </div>

          <div className="flex items-center justify-between pt-4 border-t border-[var(--border)]">
            <Link
              href={otherPath}
              onClick={() => setMenuOpen(false)}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono rounded-xs border border-[var(--border)] bg-[var(--surface-alt)]"
            >
              <Globe className="w-3.5 h-3.5 text-[var(--accent-amber)]" />
              <span>{lang === 'es' ? 'English (EN)' : 'Español (ES)'}</span>
            </Link>

            <Link
              href={`/${lang}/contact`}
              onClick={() => setMenuOpen(false)}
              className="px-4 py-2 text-xs uppercase font-semibold bg-[var(--foreground)] text-[var(--foreground-inv)] rounded-xs"
            >
              {dict.nav.cta}
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}
