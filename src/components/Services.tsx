import ScrollReveal from './ScrollReveal'
import { ArrowUpRight } from 'lucide-react'

type ServiceItem = {
  index: string
  title: string
  description: string
  tags: string[]
}

type Dict = {
  services: {
    badge: string
    title: string
    sub: string
    items: ServiceItem[]
  }
}

export default function Services({ dict }: { dict: Dict }) {
  const s = dict.services

  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="py-28 px-4 sm:px-6 bg-[var(--surface)]"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <ScrollReveal>
          <div className="mb-20">
            <p className="geo-badge text-xs font-medium tracking-[0.18em] uppercase text-[var(--muted)] mb-4">
              {s.badge}
            </p>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
              <h2
                id="services-heading"
                className="text-3xl sm:text-4xl md:text-5xl font-bold text-[var(--foreground)] tracking-tight"
                style={{ textWrap: 'balance' } as React.CSSProperties}
              >
                {s.title}
              </h2>
              <p className="text-sm sm:text-base text-[var(--muted)] max-w-[420px]">
                {s.sub}
              </p>
            </div>
          </div>
        </ScrollReveal>

        {/* Services Editorial Rows with Purposeful Motion */}
        <div className="divide-y divide-[var(--border)] border-y border-[var(--border)]">
          {s.items.map((item, idx) => (
            <ScrollReveal key={item.index} delay={idx * 70}>
              <div className="bracket-corners py-10 sm:py-12 group transition-all duration-300 hover:bg-[var(--surface-alt)] px-4 sm:px-6 rounded-xs cursor-default">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
                  {/* Number Index with Kinetic Slide */}
                  <div className="md:col-span-2 flex items-center justify-between md:block">
                    <span className="font-mono text-2xl sm:text-3xl font-bold text-[var(--muted)] group-hover:text-[var(--accent-amber)] transition-colors inline-block group-hover:translate-x-1 duration-200">
                      {item.index}
                    </span>
                    <ArrowUpRight className="w-5 h-5 text-[var(--muted)] opacity-0 group-hover:opacity-100 group-hover:text-[var(--accent-amber)] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-200 md:hidden" />
                  </div>

                  {/* Title & Description */}
                  <div className="md:col-span-6 space-y-3">
                    <div className="flex items-center gap-2">
                      <h3 className="text-xl sm:text-2xl font-bold text-[var(--foreground)] group-hover:text-[var(--accent-amber)] transition-colors">
                        {item.title}
                      </h3>
                      <ArrowUpRight className="hidden md:inline-block w-4 h-4 text-[var(--muted)] opacity-0 group-hover:opacity-100 group-hover:text-[var(--accent-amber)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200 shrink-0" />
                    </div>
                    <p className="text-sm sm:text-base text-[var(--muted)] leading-relaxed max-w-[500px]">
                      {item.description}
                    </p>
                  </div>

                  {/* Tags with Micro-Elevations */}
                  <div className="md:col-span-4 flex flex-wrap gap-2 md:justify-end">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 text-xs font-mono rounded-xs border border-[var(--border)] bg-[var(--surface)] group-hover:border-[var(--accent-amber-border)] text-[var(--muted)] group-hover:text-[var(--foreground)] transition-all duration-200 group-hover:shadow-2xs"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
