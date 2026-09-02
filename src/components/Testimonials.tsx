'use client'

import React, { useState, useEffect, useCallback, useRef } from 'react'
import ScrollReveal from './ScrollReveal'
import { Quote, ChevronLeft, ChevronRight, Sparkles } from 'lucide-react'

export interface TestimonialItem {
  quote: string
  author: string
  role: string
  company: string
  highlight?: string
  verified?: string
}

type Dict = {
  testimonials: {
    badge: string
    quote?: string
    author?: string
    role?: string
    company?: string
    items?: TestimonialItem[]
  }
}

export default function Testimonials({ dict }: { dict: Dict }) {
  const t = dict.testimonials

  // Fallback if items array is not provided
  const items: TestimonialItem[] = t.items && t.items.length > 0 
    ? t.items 
    : [
        {
          quote: t.quote || '',
          author: t.author || '',
          role: t.role || '',
          company: t.company || '',
          highlight: 'Plataforma Web, App iOS & CRM',
          verified: 'Producción en Vivo',
        },
      ]

  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const touchStartX = useRef<number | null>(null)

  const goToSlide = useCallback((index: number) => {
    if (isTransitioning) return
    setIsTransitioning(true)
    setCurrentIndex(index)
    setTimeout(() => setIsTransitioning(false), 350)
  }, [isTransitioning])

  const nextSlide = useCallback(() => {
    goToSlide((currentIndex + 1) % items.length)
  }, [currentIndex, goToSlide, items.length])

  const prevSlide = useCallback(() => {
    goToSlide((currentIndex - 1 + items.length) % items.length)
  }, [currentIndex, goToSlide, items.length])

  // Auto-play interval
  useEffect(() => {
    if (isPaused || items.length <= 1) return
    const timer = setInterval(() => {
      nextSlide()
    }, 7500)
    return () => clearInterval(timer)
  }, [isPaused, items.length, nextSlide])

  // Touch Swipe Handlers for mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX
  }

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return
    const touchEndX = e.changedTouches[0].clientX
    const diff = touchStartX.current - touchEndX

    if (Math.abs(diff) > 40) {
      if (diff > 0) {
        nextSlide()
      } else {
        prevSlide()
      }
    }
    touchStartX.current = null
  }

  // Keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowLeft') {
      prevSlide()
    } else if (e.key === 'ArrowRight') {
      nextSlide()
    }
  }

  const activeTestimonial = items[currentIndex]

  return (
    <section
      aria-roledescription="carousel"
      aria-label={t.badge}
      className="py-28 px-4 sm:px-6 bg-[var(--surface-inv)] text-[var(--foreground-inv)] relative overflow-hidden focus:outline-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      onKeyDown={handleKeyDown}
      tabIndex={0}
    >
      {/* Subtle Dot Matrix Pattern */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none opacity-10"
        style={{
          backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.4) 1px, transparent 1px)`,
          backgroundSize: '24px 24px',
        }}
      />

      {/* Cyber Ambient Radial Glow */}
      <div 
        aria-hidden="true"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[350px] bg-[var(--accent-amber)] opacity-[0.04] blur-3xl pointer-events-none rounded-full"
      />

      <div className="max-w-4xl mx-auto relative z-10">
        <ScrollReveal>
          {/* Header Bar with Slide Counter and Controls */}
          <div className="flex items-center justify-between gap-4 mb-10">
            <div className="flex items-center gap-3">
              <span className="w-6 h-[1.5px] bg-[var(--accent-amber)]" />
              <p className="text-xs font-mono uppercase tracking-[0.2em] text-[var(--accent-amber)] font-semibold">
                {t.badge}
              </p>
            </div>

            {/* Carousel Navigation & Counter */}
            {items.length > 1 && (
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs text-white/50 tracking-wider">
                  0{currentIndex + 1} / 0{items.length}
                </span>

                <div className="flex items-center gap-1.5">
                  <button
                    onClick={prevSlide}
                    aria-label="Testimonio anterior"
                    className="p-2 rounded-xs border border-white/20 bg-white/5 hover:border-[var(--accent-amber)] hover:text-[var(--accent-amber)] hover:bg-white/10 text-white transition-all cursor-pointer"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    onClick={nextSlide}
                    aria-label="Siguiente testimonio"
                    className="p-2 rounded-xs border border-white/20 bg-white/5 hover:border-[var(--accent-amber)] hover:text-[var(--accent-amber)] hover:bg-white/10 text-white transition-all cursor-pointer"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Carousel Slide Card with Smooth Fade */}
          <div className="bracket-corners border border-white/15 p-8 sm:p-12 bg-black/50 backdrop-blur-xs relative group min-h-[360px] flex flex-col justify-between transition-all duration-300">
            <div>
              <div className="flex items-center justify-between gap-4 mb-6">
                <Quote className="w-10 h-10 text-[var(--accent-amber)] opacity-90" />
                
                {activeTestimonial.highlight && (
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xs border border-[var(--accent-amber-border)] bg-[var(--accent-amber-subtle)] text-[11px] font-mono text-[var(--accent-amber)] font-medium">
                    <Sparkles className="w-3 h-3" />
                    {activeTestimonial.highlight}
                  </span>
                )}
              </div>

              {/* Animated Quote Text */}
              <blockquote className={`text-xl sm:text-2xl md:text-3xl font-medium leading-relaxed mb-8 tracking-tight text-white transition-all duration-300 ${
                isTransitioning ? 'opacity-0 translate-y-2' : 'opacity-100 translate-y-0'
              }`}>
                &ldquo;{activeTestimonial.quote}&rdquo;
              </blockquote>
            </div>

            {/* Bottom Row: Author + Verification Badge */}
            <div className={`flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-6 border-t border-white/10 transition-all duration-300 ${
              isTransitioning ? 'opacity-0' : 'opacity-100'
            }`}>
              <div>
                <p className="text-base font-bold text-white tracking-wide">
                  {activeTestimonial.author}
                </p>
                <p className="text-xs font-mono text-white/70">
                  {activeTestimonial.role} · <span className="text-[var(--accent-amber)]">{activeTestimonial.company}</span>
                </p>
              </div>

              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-xs border border-white/20 bg-white/5 text-[11px] font-mono text-white/80 w-fit">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>{activeTestimonial.verified || 'Cliente Verificado'}</span>
              </div>
            </div>
          </div>

          {/* Interactive Pagination Indicators */}
          <div className="flex items-center justify-center gap-2 mt-8">
            {items.map((_, i) => (
              <button
                key={i}
                onClick={() => goToSlide(i)}
                aria-label={`Ir al testimonio ${i + 1}`}
                className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                  i === currentIndex 
                    ? 'w-8 bg-[var(--accent-amber)]' 
                    : 'w-2 bg-white/35 hover:bg-white/65 dark:bg-black/40 dark:hover:bg-black/70'
                }`}
              />
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
