'use client'

import { useEffect, useState } from 'react'
import { Sun, Moon } from 'lucide-react'

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const isCurrentlyDark = document.documentElement.classList.contains('dark')
    setIsDark(isCurrentlyDark)
  }, [])

  const toggle = () => {
    document.documentElement.classList.add('theme-switching')
    const nextDark = !isDark
    setIsDark(nextDark)

    if (nextDark) {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }

    setTimeout(() => {
      document.documentElement.classList.remove('theme-switching')
    }, 300)
  }

  if (!mounted) {
    return <div className="w-9 h-9" />
  }

  return (
    <button
      onClick={toggle}
      aria-label={isDark ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'}
      className="btn-press min-w-[40px] min-h-[40px] sm:min-w-[34px] sm:min-h-[34px] flex items-center justify-center rounded-xs border border-[var(--border)] bg-[var(--surface-alt)] hover:border-[var(--accent-amber-border)] text-[var(--foreground)] transition-colors p-2"
    >
      {isDark ? (
        <Sun className="w-4 h-4 text-[var(--accent-amber)]" />
      ) : (
        <Moon className="w-4 h-4 text-[var(--foreground)]" />
      )}
    </button>
  )
}
