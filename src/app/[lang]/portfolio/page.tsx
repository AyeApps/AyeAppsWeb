import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getDictionary, hasLocale } from '../dictionaries'
import Navbar from '@/components/Navbar'
import ProjectsShowcase from '@/components/ProjectsShowcase'
import Footer from '@/components/Footer'
import ScrollReveal from '@/components/ScrollReveal'
import { ArrowLeft } from 'lucide-react'

interface PageProps {
  params: Promise<{ lang: string }>
}

export async function generateMetadata({ params }: PageProps) {
  const { lang } = await params
  const isEs = lang === 'es'

  return {
    title: isEs
      ? 'Ecosistema & Proyectos — AyeApps'
      : 'Ecosystem & Projects — AyeApps',
    description: isEs
      ? 'Catálogo completo de plataformas y productos de software construidos por AyeApps: Fatima Resendiz, AyeTasks, AyeRecipes, AyeStock, AyeMusicVisualizer y más.'
      : 'Complete catalog of production platforms and engineered software by AyeApps: Fatima Resendiz, AyeTasks, AyeRecipes, AyeStock, AyeMusicVisualizer and more.',
  }
}

export function generateStaticParams() {
  return [{ lang: 'es' }, { lang: 'en' }]
}

export default async function PortfolioPage({ params }: PageProps) {
  const { lang } = await params
  if (!hasLocale(lang)) notFound()

  const dict = await getDictionary(lang)
  const pp = dict.portfolio_page

  return (
    <>
      <Navbar dict={dict} lang={lang} />
      <main id="main">
        {/* ─── Page Hero Header ───────────────────────── */}
        <section className="pt-32 pb-16 px-4 sm:px-6 bg-[var(--surface)] dot-pattern border-b border-[var(--border)]">
          <div className="max-w-6xl mx-auto">
            <ScrollReveal>
              <Link
                href={`/${lang}`}
                className="inline-flex items-center gap-1.5 text-xs font-mono text-[var(--muted)] hover:text-[var(--accent-amber)] transition-colors mb-8 group"
              >
                <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
                <span>{lang === 'es' ? 'Volver al Inicio' : 'Back to Home'}</span>
              </Link>

              <div className="max-w-3xl">
                <p className="geo-badge text-xs font-medium tracking-[0.18em] uppercase text-[var(--muted)] mb-4">
                  {pp.badge}
                </p>
                <h1
                  className="text-3xl sm:text-5xl md:text-6xl font-bold text-[var(--foreground)] tracking-tight mb-6"
                  style={{ textWrap: 'balance' } as React.CSSProperties}
                >
                  {pp.title}
                </h1>
                <p className="text-sm sm:text-base text-[var(--muted)] leading-relaxed max-w-2xl">
                  {pp.sub}
                </p>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* ─── Filterable Showcase Catalog ───────────── */}
        <ProjectsShowcase dict={dict} lang={lang} />
      </main>
      <Footer dict={dict} lang={lang} />
    </>
  )
}
