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
    <>
      <HtmlLang lang={lang} />
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100]
          focus:bg-black focus:text-white focus:px-4 focus:py-2
          focus:text-xs focus:font-mono focus:border focus:border-[var(--accent-amber)]"
      >
        {lang === 'es' ? 'Saltar al contenido principal' : 'Skip to main content'}
      </a>
      {children}
    </>
  )
}
