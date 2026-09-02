import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getDictionary, hasLocale } from './dictionaries'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Testimonials from '@/components/Testimonials'
import Footer from '@/components/Footer'
import ScrollReveal from '@/components/ScrollReveal'
import InteractiveDots from '@/components/InteractiveDots'
import { ArrowRight, Sparkles, Smartphone, Monitor, ArrowUpRight, Terminal, Layers } from 'lucide-react'
import { PROJECTS } from '@/data/projects'
import { GithubIcon } from '@/components/Icons'

interface PageProps {
  params: Promise<{ lang: string }>
}

export async function generateMetadata({ params }: PageProps) {
  const { lang } = await params
  const isEs = lang === 'es'

  return {
    title: isEs
      ? 'AyeApps — Sistemas de Software Completos & Plataformas Cloud'
      : 'AyeApps — End-to-End Software Systems & Cloud Platforms',
    description: isEs
      ? 'Desarrollo de sistemas de software completos en Querétaro, México. Plataformas web de alta velocidad, apps nativas iOS y arquitecturas cloud con Next.js, Swift y FastAPI.'
      : 'Engineering end-to-end software systems in Querétaro, Mexico. High-speed web platforms, native iOS apps, and cloud backend architectures built with Next.js, Swift, and FastAPI.',
    alternates: {
      canonical: `https://home.ayeapps.com/${lang}`,
      languages: {
        'es': 'https://home.ayeapps.com/es',
        'en': 'https://home.ayeapps.com/en',
      },
    },
  }
}

export function generateStaticParams() {
  return [{ lang: 'es' }, { lang: 'en' }]
}

export default async function HomePage({ params }: PageProps) {
  const { lang } = await params
  if (!hasLocale(lang)) notFound()

  const dict = await getDictionary(lang)
  const isEs = lang === 'es'

  // Featured flagship projects for the home overview
  const featuredProjects = PROJECTS.filter((p) => p.featured).slice(0, 2)

  return (
    <>
      <Navbar dict={dict} lang={lang} />
      <main id="main">
        {/* ─── Hero Section ───────────────────────────── */}
        <Hero dict={dict} lang={lang} />

        {/* ─── Featured Work Preview ──────────────────── */}
        <section className="py-24 px-4 sm:px-6 bg-[var(--surface-raised)] border-y border-[var(--border)]">
          <div className="max-w-6xl mx-auto">
            <ScrollReveal>
              <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
                <div>
                  <p className="geo-badge text-xs font-medium tracking-[0.18em] uppercase text-[var(--muted)] mb-3">
                    01 / Showcase
                  </p>
                  <h2 className="text-3xl sm:text-4xl font-bold text-[var(--foreground)] tracking-tight">
                    {dict.hero.featured_title}
                  </h2>
                </div>
                <Link
                  href={`/${lang}/portfolio`}
                  className="btn-press inline-flex items-center gap-2 text-xs uppercase tracking-[0.14em] font-semibold text-[var(--accent-amber)] hover:text-[var(--foreground)] transition-colors w-fit"
                >
                  {dict.hero.view_all_projects} ({PROJECTS.length})
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {featuredProjects.map((project, idx) => (
                <ScrollReveal key={project.id} delay={idx * 80}>
                  <div className="bracket-corners card-lift flex flex-col justify-between h-full p-6 sm:p-8 rounded-xs border border-[var(--border)] bg-[var(--surface)] relative group">
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-4">
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 text-[10px] font-mono uppercase tracking-[0.14em] rounded-xs border border-[var(--border-strong)] bg-[var(--surface-alt)] text-[var(--muted)]">
                          {project.category === 'client' ? <Monitor className="w-3 h-3 text-[var(--accent-amber)]" /> : <Smartphone className="w-3 h-3 text-[var(--accent-amber)]" />}
                          {project.categoryLabel[lang]}
                        </span>
                        <span className="text-xs font-mono text-[var(--muted)]">{project.year}</span>
                      </div>

                      <h3 className="text-xl sm:text-2xl font-bold text-[var(--foreground)] mb-2 group-hover:text-[var(--accent-amber)] transition-colors">
                        {project.title}
                      </h3>

                      <p className="text-xs sm:text-sm text-[var(--muted)] mb-6 leading-relaxed">
                        {project.tagline[lang]}
                      </p>

                      <div className="flex flex-wrap gap-1.5 mb-6">
                        {project.technologies.slice(0, 4).map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-0.5 text-[10px] font-mono rounded-xs border border-[var(--border)] bg-[var(--surface-alt)] text-[var(--muted)]"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="pt-4 border-t border-[var(--border)] flex items-center justify-between">
                      <span className="text-[11px] font-mono text-[var(--muted)]">{project.role[lang]}</span>
                      <Link
                        href={['fatima-resendiz', 'aye-video-downloader'].includes(project.slug) ? `/${lang}/portfolio/${project.slug}` : `/${lang}/portfolio`}
                        className="inline-flex items-center gap-1 text-xs font-semibold text-[var(--foreground)] hover:text-[var(--accent-amber)] transition-colors"
                      >
                        {['fatima-resendiz', 'aye-video-downloader'].includes(project.slug)
                          ? (isEs ? 'Ver caso de estudio' : 'View case study')
                          : (isEs ? 'Ver ficha técnica' : 'View details')}
                        <ArrowUpRight className="w-3.5 h-3.5 text-[var(--accent-amber)]" />
                      </Link>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* ─── 02 / Especialidades Section ────────────── */}
        <section className="py-24 px-4 sm:px-6 bg-[var(--surface)] border-b border-[var(--border)]">
          <div className="max-w-6xl mx-auto">
            {/* Header */}
            <ScrollReveal>
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
                <div className="max-w-2xl">
                  <p className="geo-badge text-xs font-medium tracking-[0.18em] uppercase text-[var(--muted)] mb-3">
                    02 / Especialidades
                  </p>
                  <h2 className="text-3xl sm:text-4xl font-bold text-[var(--foreground)] tracking-tight mb-3">
                    {dict.services.title}
                  </h2>
                  <p className="text-xs sm:text-sm text-[var(--muted)] leading-relaxed">
                    {dict.services.sub}
                  </p>
                </div>

                <Link
                  href={`/${lang}/services`}
                  className="btn-press inline-flex items-center gap-2 px-6 py-3.5 text-xs uppercase tracking-[0.14em] font-semibold bg-[var(--foreground)] text-[var(--foreground-inv)] hover:bg-[var(--accent-amber)] hover:text-black transition-colors rounded-xs shrink-0 w-fit"
                >
                  {isEs ? 'Explorar Servicios' : 'Explore Services'}
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </ScrollReveal>

            {/* Featured Flagship Specialty: 01 · Ecosistemas Todo-en-Uno */}
            {dict.services.items[0] && (
              <ScrollReveal delay={100}>
                <div className="bracket-corners card-lift p-8 sm:p-10 rounded-xs border-2 border-[var(--accent-amber)] bg-[var(--surface-raised)] relative overflow-hidden group shadow-[0_4px_30px_rgba(0,0,0,0.12)]">
                  {/* Ambient Cyber-Amber Glow */}
                  <div 
                    aria-hidden="true" 
                    className="absolute top-0 right-0 w-80 h-80 bg-[var(--accent-amber-subtle)] rounded-full blur-3xl pointer-events-none -mr-20 -mt-20 opacity-40 group-hover:opacity-60 transition-opacity"
                  />

                  <div className="relative z-10">
                    {/* Top Bar: Index + Category Tag */}
                    <div className="flex items-center justify-between gap-4 mb-6">
                      <div className="flex items-center gap-3">
                        <span className="font-mono text-3xl sm:text-4xl font-bold text-[var(--accent-amber)]">
                          {dict.services.items[0].index}
                        </span>
                        <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-amber)]" />
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 text-[10px] font-mono uppercase tracking-[0.14em] rounded-xs bg-[var(--accent-amber)] text-black font-semibold">
                          <Sparkles className="w-3 h-3" />
                          {isEs ? 'Especialidad Destacada' : 'Flagship Specialty'}
                        </span>
                      </div>

                      <Link
                        href={`/${lang}/services#methodology`}
                        className="hidden sm:inline-flex items-center gap-1.5 text-xs font-mono text-[var(--muted)] hover:text-[var(--accent-amber)] transition-colors group/link"
                      >
                        <span>{isEs ? 'Ver los 5 pasos del proceso' : 'View the 5-step process'}</span>
                        <ArrowUpRight className="w-3.5 h-3.5 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform text-[var(--accent-amber)]" />
                      </Link>
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl sm:text-3xl font-bold text-[var(--foreground)] tracking-tight mb-4 group-hover:text-[var(--accent-amber)] transition-colors">
                      {dict.services.items[0].title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm sm:text-base text-[var(--muted)] leading-relaxed max-w-3xl mb-8">
                      {dict.services.items[0].description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-[var(--border)]">
                      <div className="flex flex-wrap gap-2">
                        {dict.services.items[0].tags.map((tag: string) => (
                          <span
                            key={tag}
                            className="px-3 py-1 text-xs font-mono rounded-xs border border-[var(--border-strong)] bg-[var(--surface)] text-[var(--foreground)] group-hover:border-[var(--accent-amber)] transition-colors"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      <Link
                        href={`/${lang}/services#methodology`}
                        className="inline-flex sm:hidden items-center gap-1.5 text-xs font-mono text-[var(--accent-amber)] font-medium"
                      >
                        <span>{isEs ? 'Ver los 5 pasos del proceso' : 'View the 5-step process'}</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            )}
          </div>
        </section>

        {/* ─── Testimonials ───────────────────────────── */}
        <Testimonials dict={dict} />

        {/* ─── Quick Contact Banner ───────────────────── */}
        <section className="relative overflow-hidden py-24 px-4 sm:px-6 bg-[var(--surface)] border-t border-[var(--border)]">
          <InteractiveDots />
          <div className="relative z-10 max-w-4xl mx-auto text-center">
            <ScrollReveal>
              <p className="geo-badge text-xs font-medium tracking-[0.18em] uppercase text-[var(--muted)] mb-3 justify-center">
                04 / Conexión
              </p>
              <h2 className="text-2xl sm:text-4xl font-bold text-[var(--foreground)] tracking-tight mb-4">
                {isEs ? '¿Listo para elevar tu producto digital?' : 'Ready to elevate your digital platform?'}
              </h2>
              <p className="text-xs sm:text-sm text-[var(--muted)] max-w-md mx-auto mb-8">
                {isEs
                  ? 'Ponte en contacto directo con nosotros para evaluar requerimientos y arquitectura.'
                  : 'Get in direct touch with our engineering team to scope your system architecture.'}
              </p>
              <Link
                href={`/${lang}/contact`}
                className="btn-press inline-flex items-center gap-2 px-8 py-4 text-xs uppercase tracking-[0.14em] font-semibold bg-[var(--foreground)] text-[var(--foreground-inv)] hover:bg-[var(--accent-amber)] hover:text-black transition-colors rounded-xs shadow-sm"
              >
                {dict.nav.cta}
                <ArrowRight className="w-4 h-4" />
              </Link>
            </ScrollReveal>
          </div>
        </section>
      </main>
      <Footer dict={dict} lang={lang} />
    </>
  )
}
