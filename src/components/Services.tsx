import ScrollReveal from './ScrollReveal'

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

        {/* Services Editorial Rows */}
        <div className="divide-y divide-[var(--border)] border-y border-[var(--border)]">
          {s.items.map((item, idx) => (
            <ScrollReveal key={item.index} delay={idx * 70}>
              <div className="bracket-corners py-10 sm:py-12 group transition-colors hover:bg-[var(--surface-alt)] px-4 sm:px-6">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
                  {/* Number Index */}
                  <div className="md:col-span-2">
                    <span className="font-mono text-2xl sm:text-3xl font-bold text-[var(--muted)] group-hover:text-[var(--accent-amber)] transition-colors">
                      {item.index}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <div className="md:col-span-6 space-y-3">
                    <h3 className="text-xl sm:text-2xl font-bold text-[var(--foreground)] group-hover:text-[var(--accent-amber)] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-sm sm:text-base text-[var(--muted)] leading-relaxed max-w-[500px]">
                      {item.description}
                    </p>
                  </div>

                  {/* Tags */}
                  <div className="md:col-span-4 flex flex-wrap gap-2 md:justify-end">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 text-xs font-mono rounded-xs border border-[var(--border)] bg-[var(--surface)] group-hover:border-[var(--accent-amber-border)] text-[var(--muted)] group-hover:text-[var(--foreground)] transition-colors"
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
