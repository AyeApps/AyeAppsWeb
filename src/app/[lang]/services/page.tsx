import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getDictionary, hasLocale } from '../dictionaries'
import Navbar from '@/components/Navbar'
import Services from '@/components/Services'
import Footer from '@/components/Footer'
import ScrollReveal from '@/components/ScrollReveal'
import { ArrowLeft, ArrowRight, CheckCircle2 } from 'lucide-react'

interface PageProps {
  params: Promise<{ lang: string }>
}

export async function generateMetadata({ params }: PageProps) {
  const { lang } = await params
  const isEs = lang === 'es'

  return {
    title: isEs
      ? 'Servicios de Ingeniería & Atelier — AyeApps'
      : 'Engineering Services & Atelier — AyeApps',
    description: isEs
      ? 'Desarrollo web a medida con Next.js, apps nativas iOS con Swift, arquitectura backend con FastAPI y automatización de procesos para negocios.'
      : 'Custom web development with Next.js, native iOS apps with Swift, backend architecture with FastAPI, and workflow automation.',
  }
}

export function generateStaticParams() {
  return [{ lang: 'es' }, { lang: 'en' }]
}

export default async function ServicesPage({ params }: PageProps) {
  const { lang } = await params
  if (!hasLocale(lang)) notFound()

  const dict = await getDictionary(lang)
  const sp = dict.services_page

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
                  {sp.badge}
                </p>
                <h1
                  className="text-3xl sm:text-5xl md:text-6xl font-bold text-[var(--foreground)] tracking-tight mb-6"
                  style={{ textWrap: 'balance' } as React.CSSProperties}
                >
                  {sp.title}
                </h1>
                <p className="text-sm sm:text-base text-[var(--muted)] leading-relaxed max-w-2xl">
                  {sp.sub}
                </p>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* ─── Services List ──────────────────────────── */}
        <Services dict={dict} />

        {/* ─── Process & Methodology ──────────────────── */}
        <section className="py-24 px-4 sm:px-6 bg-[var(--surface-alt)] border-t border-[var(--border)]">
          <div className="max-w-6xl mx-auto">
            <ScrollReveal>
              <div className="mb-16">
                <p className="geo-badge text-xs font-medium tracking-[0.18em] uppercase text-[var(--muted)] mb-3">
                  {sp.process_badge}
                </p>
                <h2 className="text-2xl sm:text-4xl font-bold text-[var(--foreground)] tracking-tight">
                  {sp.process_title}
                </h2>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {sp.process_steps.map((p, idx) => (
                <ScrollReveal key={p.step} delay={idx * 70}>
                  <div className="bracket-corners card-lift p-6 sm:p-8 rounded-xs border border-[var(--border)] bg-[var(--surface)] h-full flex flex-col justify-between group">
                    <div>
                      <span className="text-2xl font-bold font-mono text-[var(--muted)] group-hover:text-[var(--accent-amber)] transition-colors block mb-4">
                        {p.step}
                      </span>
                      <h3 className="text-base sm:text-lg font-bold text-[var(--foreground)] mb-2">
                        {p.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-[var(--muted)] leading-relaxed">
                        {p.desc}
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>

            {/* CTA bottom banner */}
            <div className="mt-16 text-center">
              <Link
                href={`/${lang}/contact`}
                className="btn-press inline-flex items-center gap-2 px-8 py-4 text-xs uppercase tracking-[0.14em] font-semibold bg-[var(--foreground)] text-[var(--foreground-inv)] hover:bg-[var(--accent-amber)] hover:text-black transition-colors rounded-xs shadow-sm"
              >
                {lang === 'es' ? 'Cotizar o Iniciar Proyecto' : 'Scope or Start a Project'}
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer dict={dict} lang={lang} />
    </>
  )
}
