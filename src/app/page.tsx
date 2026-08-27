'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function RootPage() {
  const router = useRouter()

  useEffect(() => {
    try {
      const savedLang = localStorage.getItem('preferred_lang')
      if (savedLang === 'en' || savedLang === 'es') {
        router.replace(`/${savedLang}`)
        return
      }

      const browserLang = (navigator.language || (navigator as any).userLanguage || 'es').toLowerCase()
      const isSpanish = browserLang.startsWith('es')
      router.replace(isSpanish ? '/es' : '/en')
    } catch {
      router.replace('/es')
    }
  }, [router])

  return (
    <div className="min-h-screen bg-[var(--surface)] flex items-center justify-center">
      <div className="w-5 h-5 border-2 border-[var(--accent-amber)] border-t-transparent rounded-full animate-spin" />
    </div>
  )
}
