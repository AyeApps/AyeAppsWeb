import { hasLocale } from './dictionaries'
import { notFound } from 'next/navigation'
import HtmlLang from '@/components/HtmlLang'

export function generateStaticParams() {
  return [{ lang: 'es' }, { lang: 'en' }]
}

export default async function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ lang: string }>
}) {
  const { lang } = await params
  if (!hasLocale(lang)) notFound()

  return (
    <div className="relative min-h-screen">
      <HtmlLang lang={lang} />

      {/* Global Animated Dot Matrix Background across ALL screens */}
      <div
        aria-hidden="true"
        className="fixed inset-0 pointer-events-none z-0 dot-pattern-animated"
      />

      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100]
          focus:bg-black focus:text-white focus:px-4 focus:py-2
          focus:text-xs focus:font-mono focus:border focus:border-[var(--accent-amber)]"
      >
        {lang === 'es' ? 'Saltar al contenido principal' : 'Skip to main content'}
      </a>

      <div className="relative z-10 flex flex-col min-h-screen">
        {children}
      </div>
    </div>
  )
}
