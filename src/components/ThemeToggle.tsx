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
    return <div className="w-8 h-8" />
  }

  return (
    <button
      onClick={toggle}
      aria-label={isDark ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'}
      className="btn-press flex items-center justify-center w-8 h-8 rounded border border-[var(--border)] bg-[var(--surface-alt)] hover:border-[var(--accent-amber-border)] text-[var(--foreground)] transition-colors"
    >
      {isDark ? (
        <Sun className="w-3.5 h-3.5 text-[var(--accent-amber)]" />
      ) : (
        <Moon className="w-3.5 h-3.5 text-[var(--foreground)]" />
      )}
    </button>
  )
}
