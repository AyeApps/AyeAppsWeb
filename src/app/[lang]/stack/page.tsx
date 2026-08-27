import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getDictionary, hasLocale } from '../dictionaries'
import Navbar from '@/components/Navbar'
import TechStack from '@/components/TechStack'
import Footer from '@/components/Footer'
import ScrollReveal from '@/components/ScrollReveal'
import { ArrowLeft, ShieldCheck, Zap, Code2, ArrowRight } from 'lucide-react'

interface PageProps {
  params: Promise<{ lang: string }>
}

export async function generateMetadata({ params }: PageProps) {
  const { lang } = await params
  const isEs = lang === 'es'

  return {
    title: isEs
      ? 'Tech Stack & Arquitectura — AyeApps'
      : 'Tech Stack & Architecture — AyeApps',
    description: isEs
      ? 'Herramientas, frameworks y doctrinas de desarrollo que utilizamos: Swift, Next.js, FastAPI, Docker, MongoDB y Cloudflare.'
      : 'Tools, frameworks and engineering doctrines we use: Swift, Next.js, FastAPI, Docker, MongoDB, and Cloudflare.',
  }
}

export function generateStaticParams() {
  return [{ lang: 'es' }, { lang: 'en' }]
}

export default async function StackPage({ params }: PageProps) {
  const { lang } = await params
  if (!hasLocale(lang)) notFound()

  const dict = await getDictionary(lang)
  const stp = dict.stack_page

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
                  {stp.badge}
                </p>
                <h1
                  className="text-3xl sm:text-5xl md:text-6xl font-bold text-[var(--foreground)] tracking-tight mb-6"
                  style={{ textWrap: 'balance' } as React.CSSProperties}
                >
                  {stp.title}
                </h1>
                <p className="text-sm sm:text-base text-[var(--muted)] leading-relaxed max-w-2xl">
                  {stp.sub}
                </p>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* ─── Full Stack Matrix ──────────────────────── */}
        <TechStack dict={dict} />

        {/* ─── Engineering Principles ─────────────────── */}
        <section className="py-24 px-4 sm:px-6 bg-[var(--surface)] border-t border-[var(--border)]">
          <div className="max-w-6xl mx-auto">
            <ScrollReveal>
              <div className="mb-16">
                <p className="geo-badge text-xs font-medium tracking-[0.18em] uppercase text-[var(--muted)] mb-3">
                  {stp.principles_badge}
                </p>
                <h2 className="text-2xl sm:text-4xl font-bold text-[var(--foreground)] tracking-tight">
                  {stp.principles_title}
                </h2>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {stp.principles.map((pr, idx) => (
                <ScrollReveal key={pr.title} delay={idx * 80}>
                  <div className="bracket-corners card-lift p-6 sm:p-8 rounded-xs border border-[var(--border)] bg-[var(--surface-alt)] h-full flex flex-col justify-between group">
                    <div>
                      <div className="w-8 h-8 rounded-xs bg-[var(--accent-amber-subtle)] border border-[var(--accent-amber-border)] flex items-center justify-center mb-4">
                        {idx === 0 ? <Code2 className="w-4 h-4 text-[var(--accent-amber)]" /> : idx === 1 ? <Zap className="w-4 h-4 text-[var(--accent-amber)]" /> : <ShieldCheck className="w-4 h-4 text-[var(--accent-amber)]" />}
                      </div>
                      <h3 className="text-base sm:text-lg font-bold text-[var(--foreground)] mb-2 group-hover:text-[var(--accent-amber)] transition-colors">
                        {pr.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-[var(--muted)] leading-relaxed">
                        {pr.desc}
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>

            {/* CTA bottom */}
            <div className="mt-16 text-center">
              <Link
                href={`/${lang}/contact`}
                className="btn-press inline-flex items-center gap-2 px-8 py-4 text-xs uppercase tracking-[0.14em] font-semibold bg-[var(--foreground)] text-[var(--foreground-inv)] hover:bg-[var(--accent-amber)] hover:text-black transition-colors rounded-xs shadow-sm"
              >
                {lang === 'es' ? 'Construyamos tu Plataforma' : 'Build Your Platform'}
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
