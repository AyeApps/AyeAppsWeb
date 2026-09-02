import ScrollReveal from './ScrollReveal'
import { Smartphone, Layout, Server, ShieldCheck } from 'lucide-react'

type Dict = {
  stack: {
    badge: string
    title: string
    sub: string
  }
}

const STACK_CATEGORIES = [
  {
    icon: Smartphone,
    title: 'Mobile & Apple Ecosystem',
    description: {
      es: 'Aplicaciones nativas e híbridas de alto rendimiento con fluidez a 60/120 fps y aprovechamiento integral del hardware móvil.',
      en: 'High-performance native and cross-platform mobile apps engineered for fluid 60/120 fps interactions and direct hardware utilization.',
    },
    techs: ['Swift', 'SwiftUI', 'MVVM', 'AVFoundation', 'Accelerate vDSP', 'React Native / Expo'],
  },
  {
    icon: Layout,
    title: 'Frontend & Web Platforms',
    description: {
      es: 'Plataformas web de alta velocidad con React Server Components (RSC), arquitectura modular y tipado estricto de punta a punta.',
      en: 'Blazingly fast web platforms powered by React Server Components (RSC), modular architecture, and end-to-end strict type safety.',
    },
    techs: ['Next.js', 'React 19', 'TypeScript', 'Tailwind CSS v4', 'Geist UI'],
  },
  {
    icon: Server,
    title: 'Backend & Cloud Infrastructure',
    description: {
      es: 'Microservicios asíncronos de baja latencia, bases de datos optimizadas para alta concurrencia y contenedores Docker predecibles.',
      en: 'Low-latency asynchronous microservices, high-concurrency optimized databases, and deterministic Docker container environments.',
    },
    techs: ['Python', 'FastAPI', 'MongoDB Atlas', 'PostgreSQL', 'Docker Compose', 'AWS S3'],
  },
  {
    icon: ShieldCheck,
    title: 'Security, Payments & Edge',
    description: {
      es: 'Distribución global con protección perimetral, pasarelas de pago seguras y flujos de eventos automatizados con APIs y webhooks.',
      en: 'Global Edge routing with perimeter security, authenticated payment gateways, and automated webhook event pipelines.',
    },
    techs: ['Cloudflare Pages / Workers', 'Cloudflare Turnstile', 'Stripe', 'Brevo API', 'JWT Security'],
  },
]

export default function TechStack({ dict, lang = 'es' }: { dict: Dict; lang?: string }) {
  const st = dict.stack

  return (
    <section
      id="stack"
      aria-labelledby="stack-heading"
      className="py-28 px-4 sm:px-6 bg-[var(--surface-alt)] border-t border-[var(--border)]"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <ScrollReveal>
          <div className="mb-16">
            <p className="geo-badge text-xs font-medium tracking-[0.18em] uppercase text-[var(--muted)] mb-4">
              {st.badge}
            </p>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
              <h2
                id="stack-heading"
                className="text-3xl sm:text-4xl md:text-5xl font-bold text-[var(--foreground)] tracking-tight"
                style={{ textWrap: 'balance' } as React.CSSProperties}
              >
                {st.title}
              </h2>
              <p className="text-sm sm:text-base text-[var(--muted)] max-w-[420px]">
                {st.sub}
              </p>
            </div>
          </div>
        </ScrollReveal>

        {/* Stack Categories Grid with Purposeful Motion */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {STACK_CATEGORIES.map((cat, idx) => {
            const Icon = cat.icon
            return (
              <ScrollReveal key={cat.title} delay={idx * 60}>
                <div className="bracket-corners card-lift p-6 sm:p-8 rounded-xs border border-[var(--border)] bg-[var(--surface)] h-full flex flex-col justify-between group transition-all duration-300">
                  <div>
                    <div className="w-10 h-10 rounded-xs bg-[var(--accent-amber-subtle)] border border-[var(--accent-amber-border)] flex items-center justify-center mb-5 group-hover:scale-110 group-hover:rotate-2 group-hover:shadow-[0_0_12px_var(--accent-amber-subtle)] transition-all duration-200">
                      <Icon className="w-5 h-5 text-[var(--accent-amber)]" />
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-[var(--foreground)] mb-2 group-hover:text-[var(--accent-amber)] transition-colors">
                      {cat.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[var(--muted)] mb-6 leading-relaxed">
                      {typeof cat.description === 'string'
                        ? cat.description
                        : cat.description[lang as 'es' | 'en'] || cat.description.es}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2 pt-4 border-t border-[var(--border)]">
                    {cat.techs.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 text-xs font-mono rounded-xs border border-[var(--border)] bg-[var(--surface-alt)] text-[var(--foreground)] group-hover:border-[var(--accent-amber-border)] group-hover:-translate-y-0.5 transition-all duration-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
