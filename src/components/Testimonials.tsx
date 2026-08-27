import ScrollReveal from './ScrollReveal'
import { Quote } from 'lucide-react'

type Dict = {
  testimonials: {
    badge: string
    quote: string
    author: string
    role: string
    company: string
  }
}

export default function Testimonials({ dict }: { dict: Dict }) {
  const t = dict.testimonials

  return (
    <section
      aria-labelledby="testimonials-heading"
      className="py-28 px-4 sm:px-6 bg-[var(--surface-inv)] text-[var(--foreground-inv)] relative overflow-hidden"
    >
      {/* Subtle Dot Pattern */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none opacity-10"
        style={{
          backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.4) 1px, transparent 1px)`,
          backgroundSize: '24px 24px',
        }}
      />

      <div className="max-w-4xl mx-auto relative z-10">
        <ScrollReveal>
          <div className="flex items-center gap-3 mb-10">
            <span className="w-6 h-[1.5px] bg-[var(--accent-amber)]" />
            <p className="text-xs font-mono uppercase tracking-[0.2em] text-[var(--accent-amber)]">
              {t.badge}
            </p>
          </div>

          <div className="bracket-corners border border-white/15 p-8 sm:p-12 bg-black/40 backdrop-blur-xs">
            <Quote className="w-10 h-10 text-[var(--accent-amber)] mb-6 opacity-90" />
            
            <blockquote className="text-xl sm:text-2xl md:text-3xl font-medium leading-relaxed mb-8 tracking-tight text-white">
              "{t.quote}"
            </blockquote>

            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-6 border-t border-white/10">
              <div>
                <p className="text-base font-bold text-white tracking-wide">
                  {t.author}
                </p>
                <p className="text-xs font-mono text-white/70">
                  {t.role} · <span className="text-[var(--accent-amber)]">{t.company}</span>
                </p>
              </div>

              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-xs border border-white/20 bg-white/5 text-[11px] font-mono text-white/80">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                Verified Client Production
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
