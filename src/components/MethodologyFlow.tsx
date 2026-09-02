'use client'

import React, { useRef, useState, useEffect, useCallback } from 'react'
import {
  MessageSquare,
  Sparkles,
  Cloud,
  CheckCircle2,
  Rocket,
  ArrowDown,
  RotateCcw,
  Check,
  X,
  Server,
  ShieldCheck,
  Search,
} from 'lucide-react'
import ScrollReveal from './ScrollReveal'

export interface MethodologyPhase {
  step: string
  tag: string
  title: string
  desc: string
}

export interface DecisionGateData {
  badge: string
  question: string
  reject_label: string
  reject_action: string
  approve_label: string
  approve_action: string
}

export interface MethodologyFlowProps {
  badge: string
  title: string
  sub?: string
  decisionGate: DecisionGateData
  phases: MethodologyPhase[]
  lang: string
}

interface CardBox {
  left: number
  right: number
  top: number
  bottom: number
  width: number
  height: number
  midX: number
  midY: number
}

export default function MethodologyFlow({
  badge,
  title,
  sub,
  decisionGate,
  phases,
  lang,
}: MethodologyFlowProps) {
  const isEs = lang === 'es'

  // Refs to measure exact card positions
  const containerRef = useRef<HTMLDivElement>(null)
  const card1Ref = useRef<HTMLDivElement>(null)
  const card2Ref = useRef<HTMLDivElement>(null)
  const cardDecisionRef = useRef<HTMLDivElement>(null)
  const card3Ref = useRef<HTMLDivElement>(null)
  const card4Ref = useRef<HTMLDivElement>(null)
  const card5Ref = useRef<HTMLDivElement>(null)

  const [boxes, setBoxes] = useState<{
    c1: CardBox
    c2: CardBox
    cd: CardBox
    c3: CardBox
    c4: CardBox
    c5: CardBox
    containerWidth: number
    containerHeight: number
  } | null>(null)

  // Coordinated entrance state: keeps lines hidden until cards reveal
  const [linesVisible, setLinesVisible] = useState(false)

  const updateMeasurements = useCallback(() => {
    if (!containerRef.current) return
    const cRect = containerRef.current.getBoundingClientRect()

    const measure = (el: HTMLDivElement | null): CardBox | null => {
      if (!el) return null
      const r = el.getBoundingClientRect()
      return {
        left: r.left - cRect.left,
        right: r.right - cRect.left,
        top: r.top - cRect.top,
        bottom: r.bottom - cRect.top,
        width: r.width,
        height: r.height,
        midX: r.left - cRect.left + r.width / 2,
        midY: r.top - cRect.top + r.height / 2,
      }
    }

    const c1 = measure(card1Ref.current)
    const c2 = measure(card2Ref.current)
    const cd = measure(cardDecisionRef.current)
    const c3 = measure(card3Ref.current)
    const c4 = measure(card4Ref.current)
    const c5 = measure(card5Ref.current)

    if (c1 && c2 && cd && c3 && c4 && c5) {
      setBoxes({
        c1,
        c2,
        cd,
        c3,
        c4,
        c5,
        containerWidth: cRect.width,
        containerHeight: cRect.height,
      })
    }
  }, [])

  useEffect(() => {
    updateMeasurements()

    // Re-measure as cards animate in and reach their final position
    const t1 = setTimeout(updateMeasurements, 150)
    const t2 = setTimeout(updateMeasurements, 350)
    const t3 = setTimeout(updateMeasurements, 700)
    const t4 = setTimeout(updateMeasurements, 1000)

    const handleResize = () => updateMeasurements()
    window.addEventListener('resize', handleResize)

    const observer = new ResizeObserver(() => {
      updateMeasurements()
    })

    if (containerRef.current) {
      observer.observe(containerRef.current)
    }

    return () => {
      clearTimeout(t1)
      clearTimeout(t2)
      clearTimeout(t3)
      clearTimeout(t4)
      window.removeEventListener('resize', handleResize)
      observer.disconnect()
    }
  }, [updateMeasurements])

  // Coordinated entrance animation: trigger lines smoothly after cards reveal
  useEffect(() => {
    if (!containerRef.current) return
    let timer: ReturnType<typeof setTimeout>

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Allow cards to start revealing first (~550ms), then illuminate circuit
          timer = setTimeout(() => {
            updateMeasurements()
            setLinesVisible(true)
          }, 550)
        }
      },
      { threshold: 0.1 }
    )

    observer.observe(containerRef.current)
    return () => {
      observer.disconnect()
      clearTimeout(timer)
    }
  }, [updateMeasurements])

  // Geometry calculations
  let loopRight = 0
  let loopLeft = 0
  let loopTop = 0
  let loopMidX = 0
  let loopMidY = 0
  let downMidX = 0
  let downMidY = 0
  const badgeGapX = 42 // gap around 'no' badge
  const badgeGapY = 16 // gap around 'si' badge

  if (boxes) {
    const { c1, cd, c3 } = boxes
    const offset = 32

    loopTop = Math.max(28, cd.top - 50)
    loopRight = cd.right + offset
    loopLeft = c1.left - offset

    loopMidX = (loopLeft + loopRight) / 2
    loopMidY = loopTop
    downMidX = cd.midX
    downMidY = (cd.bottom + c3.top) / 2
  }

  return (
    <section id="methodology" className="py-24 px-4 sm:px-6 bg-[var(--surface-alt)] border-t border-[var(--border)] overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <ScrollReveal>
          <div className="max-w-3xl mb-14 md:mb-16">
            <p className="geo-badge text-xs font-medium tracking-[0.18em] uppercase text-[var(--muted)] mb-3">
              {badge}
            </p>
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-[var(--foreground)] tracking-tight mb-4">
              {title}
            </h2>
            {sub && (
              <p className="text-sm sm:text-base text-[var(--muted)] leading-relaxed">
                {sub}
              </p>
            )}
          </div>
        </ScrollReveal>

        {/* ─── FLOW DIAGRAM CONTAINER ───────────────────── */}
        <div ref={containerRef} className="relative pt-20 md:pt-24 pb-8 px-2 sm:px-6 md:px-10">
          
          {/* ═══ DYNAMIC SVG CIRCUIT OVERLAY (DESKTOP) ═══ */}
          {boxes && (
            <svg 
              aria-hidden="true"
              role="presentation"
              className={`hidden md:block absolute inset-0 w-full h-full pointer-events-none z-20 overflow-visible transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                linesVisible ? 'opacity-100' : 'opacity-0'
              }`}
            >
              {/* ══════════════════════════════════════════════════════════
                  1. STATIC LOOP-BACK "NO" LINE (Continua y con ángulos rectos a 90°)
                  - Segment A: From Decision right -> ángulo 90° up -> ángulo 90° left -> badge 'NO'
                  - Segment B: From badge 'NO' -> ángulo 90° down -> ángulo 90° right into Card 1
              ══════════════════════════════════════════════════════════ */}
              {/* Segment A: Glow + Core Line */}
              <path
                d={`
                  M ${boxes.cd.right} ${boxes.cd.midY}
                  L ${loopRight} ${boxes.cd.midY}
                  L ${loopRight} ${loopTop}
                  L ${loopMidX + badgeGapX} ${loopTop}
                `}
                fill="none"
                stroke="var(--accent-amber)"
                strokeOpacity="0.25"
                strokeWidth="4"
              />
              <path
                d={`
                  M ${boxes.cd.right} ${boxes.cd.midY}
                  L ${loopRight} ${boxes.cd.midY}
                  L ${loopRight} ${loopTop}
                  L ${loopMidX + badgeGapX} ${loopTop}
                `}
                fill="none"
                stroke="var(--accent-amber)"
                strokeWidth="2"
              />

              {/* Segment B: Glow + Core Line */}
              <path
                d={`
                  M ${loopMidX - badgeGapX} ${loopTop}
                  L ${loopLeft} ${loopTop}
                  L ${loopLeft} ${boxes.c1.midY}
                  L ${boxes.c1.left - 8} ${boxes.c1.midY}
                `}
                fill="none"
                stroke="var(--accent-amber)"
                strokeOpacity="0.25"
                strokeWidth="4"
              />
              <path
                d={`
                  M ${loopMidX - badgeGapX} ${loopTop}
                  L ${loopLeft} ${loopTop}
                  L ${loopLeft} ${boxes.c1.midY}
                  L ${boxes.c1.left - 8} ${boxes.c1.midY}
                `}
                fill="none"
                stroke="var(--accent-amber)"
                strokeWidth="2"
              />
              {/* Arrow entering Card 1 on left edge */}
              <polygon
                points={`${boxes.c1.left},${boxes.c1.midY} ${boxes.c1.left - 9},${boxes.c1.midY - 5.5} ${boxes.c1.left - 9},${boxes.c1.midY + 5.5}`}
                fill="var(--accent-amber)"
              />

              {/* ══════════════════════════════════════════════════════════
                  2. LINE 1 -> 2 (Solid, vibrant with right-arrow at Card 2)
              ══════════════════════════════════════════════════════════ */}
              <path
                d={`M ${boxes.c1.right} ${boxes.c1.midY} L ${boxes.c2.left - 8} ${boxes.c2.midY}`}
                fill="none"
                stroke="var(--accent-amber)"
                strokeOpacity="0.25"
                strokeWidth="4"
              />
              <path
                d={`M ${boxes.c1.right} ${boxes.c1.midY} L ${boxes.c2.left - 8} ${boxes.c2.midY}`}
                fill="none"
                stroke="var(--accent-amber)"
                strokeWidth="2"
              />
              <polygon
                points={`${boxes.c2.left},${boxes.c2.midY} ${boxes.c2.left - 9},${boxes.c2.midY - 5.5} ${boxes.c2.left - 9},${boxes.c2.midY + 5.5}`}
                fill="var(--accent-amber)"
              />

              {/* ══════════════════════════════════════════════════════════
                  3. LINE 2 -> Decision (Solid, vibrant with right-arrow at Decision)
              ══════════════════════════════════════════════════════════ */}
              <path
                d={`M ${boxes.c2.right} ${boxes.c2.midY} L ${boxes.cd.left - 8} ${boxes.cd.midY}`}
                fill="none"
                stroke="var(--accent-amber)"
                strokeOpacity="0.25"
                strokeWidth="4"
              />
              <path
                d={`M ${boxes.c2.right} ${boxes.c2.midY} L ${boxes.cd.left - 8} ${boxes.cd.midY}`}
                fill="none"
                stroke="var(--accent-amber)"
                strokeWidth="2"
              />
              <polygon
                points={`${boxes.cd.left},${boxes.cd.midY} ${boxes.cd.left - 9},${boxes.cd.midY - 5.5} ${boxes.cd.left - 9},${boxes.cd.midY + 5.5}`}
                fill="var(--accent-amber)"
              />

              {/* ══════════════════════════════════════════════════════════
                  4. LINE Decision -> 3 ("SI" Downward: clear of badge + down-arrow at Card 3)
              ══════════════════════════════════════════════════════════ */}
              {/* Segment top: from Decision bottom to top of 'SI' badge */}
              <path
                d={`M ${downMidX} ${boxes.cd.bottom} L ${downMidX} ${downMidY - badgeGapY}`}
                fill="none"
                stroke="var(--accent-amber)"
                strokeOpacity="0.25"
                strokeWidth="4"
              />
              <path
                d={`M ${downMidX} ${boxes.cd.bottom} L ${downMidX} ${downMidY - badgeGapY}`}
                fill="none"
                stroke="var(--accent-amber)"
                strokeWidth="2"
              />

              {/* Segment bottom: from bottom of 'SI' badge to top of Card 3 */}
              <path
                d={`M ${downMidX} ${downMidY + badgeGapY} L ${downMidX} ${boxes.c3.top - 8}`}
                fill="none"
                stroke="var(--accent-amber)"
                strokeOpacity="0.25"
                strokeWidth="4"
              />
              <path
                d={`M ${downMidX} ${downMidY + badgeGapY} L ${downMidX} ${boxes.c3.top - 8}`}
                fill="none"
                stroke="var(--accent-amber)"
                strokeWidth="2"
              />
              {/* Arrow entering Card 3 on top edge */}
              <polygon
                points={`${downMidX},${boxes.c3.top} ${downMidX - 5.5},${boxes.c3.top - 9} ${downMidX + 5.5},${boxes.c3.top - 9}`}
                fill="var(--accent-amber)"
              />

              {/* ══════════════════════════════════════════════════════════
                  5. LINE 3 -> 4 (Solid, vibrant with left-arrow at Card 4)
              ══════════════════════════════════════════════════════════ */}
              <path
                d={`M ${boxes.c3.left} ${boxes.c3.midY} L ${boxes.c4.right + 8} ${boxes.c4.midY}`}
                fill="none"
                stroke="var(--accent-amber)"
                strokeOpacity="0.25"
                strokeWidth="4"
              />
              <path
                d={`M ${boxes.c3.left} ${boxes.c3.midY} L ${boxes.c4.right + 8} ${boxes.c4.midY}`}
                fill="none"
                stroke="var(--accent-amber)"
                strokeWidth="2"
              />
              <polygon
                points={`${boxes.c4.right},${boxes.c4.midY} ${boxes.c4.right + 9},${boxes.c4.midY - 5.5} ${boxes.c4.right + 9},${boxes.c4.midY + 5.5}`}
                fill="var(--accent-amber)"
              />

              {/* ══════════════════════════════════════════════════════════
                  6. LINE 4 -> 5 (Solid, vibrant with left-arrow at Card 5)
              ══════════════════════════════════════════════════════════ */}
              <path
                d={`M ${boxes.c4.left} ${boxes.c4.midY} L ${boxes.c5.right + 8} ${boxes.c5.midY}`}
                fill="none"
                stroke="var(--accent-amber)"
                strokeOpacity="0.25"
                strokeWidth="4"
              />
              <path
                d={`M ${boxes.c4.left} ${boxes.c4.midY} L ${boxes.c5.right + 8} ${boxes.c5.midY}`}
                fill="none"
                stroke="var(--accent-amber)"
                strokeWidth="2"
              />
              <polygon
                points={`${boxes.c5.right},${boxes.c5.midY} ${boxes.c5.right + 9},${boxes.c5.midY - 5.5} ${boxes.c5.right + 9},${boxes.c5.midY + 5.5}`}
                fill="var(--accent-amber)"
              />
            </svg>
          )}

          {/* ═══ FLOATING PILLS: "NO" and "SI" (DESKTOP) ═══ */}
          {boxes && (
            <div className="hidden md:block pointer-events-none z-30" aria-hidden="true">
              {/* "NO" pill centered in the gap on top loop segment */}
              <div 
                className={`absolute -translate-x-1/2 -translate-y-1/2 bg-[var(--surface-raised)] px-4 py-1 border-2 border-[var(--accent-amber)] rounded-full text-xs font-mono font-bold uppercase tracking-wider text-[var(--accent-amber)] shadow-[0_4px_16px_rgba(0,0,0,0.35)] flex items-center gap-1.5 pointer-events-auto transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                  linesVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
                }`}
                style={{ left: `${loopMidX}px`, top: `${loopMidY}px` }}
              >
                <RotateCcw className="w-3.5 h-3.5 text-[var(--accent-amber)]" />
                <span>{isEs ? 'no' : 'no'}</span>
              </div>

              {/* "SI" pill centered in the gap on downward segment */}
              <div 
                className={`absolute -translate-x-1/2 -translate-y-1/2 bg-[var(--surface-raised)] px-4 py-1 border-2 border-[var(--accent-amber)] rounded-full text-xs font-mono font-bold uppercase tracking-wider text-[var(--accent-amber)] shadow-[0_4px_16px_rgba(0,0,0,0.35)] flex items-center gap-1.5 pointer-events-auto transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                  linesVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
                }`}
                style={{ left: `${downMidX}px`, top: `${downMidY}px` }}
              >
                <Check className="w-3.5 h-3.5 text-[var(--accent-amber)]" />
                <span>{isEs ? 'si' : 'yes'}</span>
              </div>
            </div>
          )}

          {/* ═══ ROW 1: 1 -> 2 -> APROBADO ═══ */}
          <div className="relative grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 items-stretch mb-8 md:mb-16">
            
            {/* CARD 01: Descubrimiento & Alcance */}
            {phases[0] && (
              <div ref={card1Ref} className="relative flex flex-col h-full">
                <ScrollReveal delay={50}>
                  <div className="bracket-corners card-lift p-6 sm:p-7 rounded-xs border border-[var(--border)] bg-[var(--surface)] h-full min-h-[350px] flex flex-col justify-between group">
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <span className="font-mono text-2xl font-bold text-[var(--muted)] group-hover:text-[var(--accent-amber)] transition-colors">
                          {phases[0].step}
                        </span>
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 text-[10px] font-mono uppercase tracking-[0.14em] rounded-xs border border-[var(--border-strong)] bg-[var(--surface-raised)] text-[var(--accent-amber)]">
                          <MessageSquare className="w-3 h-3" />
                          {phases[0].tag}
                        </span>
                      </div>
                      <h3 className="text-lg sm:text-xl font-bold text-[var(--foreground)] mb-3">
                        {phases[0].title}
                      </h3>
                      <p className="text-xs sm:text-sm text-[var(--muted)] leading-relaxed">
                        {phases[0].desc}
                      </p>
                    </div>

                    <div className="pt-5 mt-4 border-t border-[var(--border)] flex items-center justify-between text-xs font-mono text-[var(--muted)]">
                      <span className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-[var(--accent-amber)] animate-pulse" />
                        <span>{isEs ? 'Fase Inicial' : 'Initial Phase'}</span>
                      </span>
                      <span className="text-[10px] text-[var(--accent-amber)] uppercase tracking-wider font-semibold">
                        01
                      </span>
                    </div>
                  </div>
                </ScrollReveal>

                {/* Mobile Down Connector */}
                <div className="md:hidden flex flex-col items-center gap-1 py-3 text-[var(--accent-amber)] opacity-70" aria-hidden="true">
                  <div className="w-[1.5px] h-3 bg-[var(--accent-amber)]" />
                  <ArrowDown className="w-4 h-4" />
                </div>
              </div>
            )}

            {/* CARD 02: Creación & Entrega de MVP */}
            {phases[1] && (
              <div ref={card2Ref} className="relative flex flex-col h-full">
                <ScrollReveal delay={100}>
                  <div className="bracket-corners card-lift p-6 sm:p-7 rounded-xs border border-[var(--border)] bg-[var(--surface)] h-full min-h-[350px] flex flex-col justify-between group">
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <span className="font-mono text-2xl font-bold text-[var(--muted)] group-hover:text-[var(--accent-amber)] transition-colors">
                          {phases[1].step}
                        </span>
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 text-[10px] font-mono uppercase tracking-[0.14em] rounded-xs border border-[var(--border-strong)] bg-[var(--surface-raised)] text-[var(--accent-amber)]">
                          <Sparkles className="w-3 h-3" />
                          {phases[1].tag}
                        </span>
                      </div>
                      <h3 className="text-lg sm:text-xl font-bold text-[var(--foreground)] mb-3">
                        {phases[1].title}
                      </h3>
                      <p className="text-xs sm:text-sm text-[var(--muted)] leading-relaxed">
                        {phases[1].desc}
                      </p>
                    </div>

                    <div className="pt-5 mt-4 border-t border-[var(--border)] flex items-center justify-between text-xs font-mono text-[var(--muted)]">
                      <span className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-[var(--accent-amber)]" />
                        <span>{isEs ? 'Prototipo Funcional' : 'Functional Build'}</span>
                      </span>
                      <span className="text-[10px] text-[var(--accent-amber)] uppercase tracking-wider font-semibold">
                        02
                      </span>
                    </div>
                  </div>
                </ScrollReveal>

                {/* Mobile Down Connector */}
                <div className="md:hidden flex flex-col items-center gap-1 py-3 text-[var(--accent-amber)] opacity-70" aria-hidden="true">
                  <div className="w-[1.5px] h-3 bg-[var(--accent-amber)]" />
                  <ArrowDown className="w-4 h-4" />
                </div>
              </div>
            )}

            {/* CARD: APROBADO (Decision Node) */}
            <div ref={cardDecisionRef} className="relative flex flex-col h-full">
              <ScrollReveal delay={150}>
                <div className="bracket-corners card-lift p-6 sm:p-7 rounded-xs border-2 border-[var(--accent-amber)] bg-[var(--surface)] h-full min-h-[350px] flex flex-col justify-between group shadow-[0_4px_24px_rgba(0,0,0,0.2)]">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 text-[10px] font-mono uppercase tracking-[0.14em] rounded-xs bg-[var(--accent-amber-subtle)] text-[var(--accent-amber)] font-bold">
                        {decisionGate.badge}
                      </span>
                      <RotateCcw className="w-4 h-4 text-[var(--accent-amber)]" />
                    </div>

                    <h3 className="text-lg sm:text-xl font-bold text-[var(--foreground)] mb-3">
                      {decisionGate.question}
                    </h3>

                    {/* Compact Decision Branches */}
                    <div className="space-y-2 my-2">
                      <div className="p-2.5 rounded-xs border border-red-500/30 bg-red-500/5 flex items-center gap-2">
                        <X className="w-3.5 h-3.5 text-red-400 shrink-0" />
                        <span className="text-xs font-mono text-red-400 font-medium">
                          {isEs ? 'No ➔ Bucle a Fase 01' : 'No ➔ Loop to Phase 01'}
                        </span>
                      </div>
                      <div className="p-2.5 rounded-xs border border-emerald-500/30 bg-emerald-500/5 flex items-center gap-2">
                        <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                        <span className="text-xs font-mono text-emerald-400 font-medium">
                          {isEs ? 'Sí ➔ Avanza a Fase 03' : 'Yes ➔ Advance to Phase 03'}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 mt-2 border-t border-[var(--border)] flex items-center justify-between text-xs font-mono text-[var(--muted)]">
                    <span className="flex items-center gap-1.5 text-emerald-400 font-semibold text-[11px]">
                      <Check className="w-3.5 h-3.5" />
                      <span>{isEs ? 'aprobado' : 'approved'}</span>
                    </span>
                    <span className="text-[10px] text-[var(--accent-amber)] uppercase tracking-wider font-semibold">
                      DECISIÓN
                    </span>
                  </div>
                </div>
              </ScrollReveal>

              {/* Mobile Down Connector to 3 */}
              <div className="md:hidden flex justify-center py-2 text-[var(--accent-amber)]" aria-hidden="true">
                <div className="flex items-center gap-2 px-3.5 py-1 rounded-full border border-[var(--accent-amber)] bg-[var(--surface-raised)] text-xs font-mono text-[var(--accent-amber)] shadow-xs">
                  <span>{isEs ? 'si ➔ Fase 03' : 'yes ➔ Phase 03'}</span>
                  <ArrowDown className="w-3.5 h-3.5" />
                </div>
              </div>
            </div>
          </div>

          {/* ═══ ROW 2: 5 <--- 4 <--- 3 (Right-to-Left!) ═══ */}
          <div className="relative grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 items-stretch">
            
            {/* CARD 05: Entrega & SEO (Col 1 on Desktop, underneath 01) */}
            {phases[4] && (
              <div ref={card5Ref} className="relative flex flex-col h-full md:order-1 order-3">
                <ScrollReveal delay={250}>
                  <div className="bracket-corners card-lift p-6 sm:p-7 rounded-xs border-2 border-[var(--accent-amber)] bg-[var(--surface)] h-full min-h-[350px] flex flex-col justify-between group shadow-[0_4px_24px_rgba(0,0,0,0.2)]">
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <span className="font-mono text-2xl font-bold text-[var(--accent-amber)]">
                          {phases[4].step}
                        </span>
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 text-[10px] font-mono uppercase tracking-[0.14em] rounded-xs bg-[var(--accent-amber)] text-black font-semibold">
                          <Rocket className="w-3 h-3" />
                          {phases[4].tag}
                        </span>
                      </div>
                      <h3 className="text-lg sm:text-xl font-bold text-[var(--foreground)] mb-3">
                        {phases[4].title}
                      </h3>
                      <p className="text-xs sm:text-sm text-[var(--muted)] leading-relaxed">
                        {phases[4].desc}
                      </p>
                    </div>

                    <div className="pt-5 mt-4 border-t border-[var(--border)] flex items-center justify-between text-xs font-mono text-[var(--foreground)] font-semibold">
                      <span className="flex items-center gap-1.5 text-[var(--accent-amber)]">
                        <Search className="w-3.5 h-3.5" />
                        <span>{isEs ? 'SEO & Go-Live' : 'SEO & Go-Live'}</span>
                      </span>
                      <span className="text-[10px] text-emerald-400 uppercase tracking-wider font-semibold flex items-center gap-1">
                        <Check className="w-3.5 h-3.5" />
                        {isEs ? 'Entrega Final' : 'Final Step'}
                      </span>
                    </div>
                  </div>
                </ScrollReveal>
              </div>
            )}

            {/* CARD 04: Pruebas en Servidores Reales (Col 2 on Desktop, underneath 02) */}
            {phases[3] && (
              <div ref={card4Ref} className="relative flex flex-col h-full md:order-2 order-2">
                <ScrollReveal delay={200}>
                  <div className="bracket-corners card-lift p-6 sm:p-7 rounded-xs border border-[var(--border)] bg-[var(--surface)] h-full min-h-[350px] flex flex-col justify-between group">
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <span className="font-mono text-2xl font-bold text-[var(--muted)] group-hover:text-[var(--accent-amber)] transition-colors">
                          {phases[3].step}
                        </span>
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 text-[10px] font-mono uppercase tracking-[0.14em] rounded-xs border border-[var(--border-strong)] bg-[var(--surface-raised)] text-[var(--accent-amber)]">
                          <ShieldCheck className="w-3 h-3" />
                          {phases[3].tag}
                        </span>
                      </div>
                      <h3 className="text-lg sm:text-xl font-bold text-[var(--foreground)] mb-3">
                        {phases[3].title}
                      </h3>
                      <p className="text-xs sm:text-sm text-[var(--muted)] leading-relaxed">
                        {phases[3].desc}
                      </p>
                    </div>

                    <div className="pt-5 mt-4 border-t border-[var(--border)] flex items-center justify-between text-xs font-mono text-[var(--muted)]">
                      <span className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                        <span>{isEs ? 'Staging Idéntico' : 'Staging Server'}</span>
                      </span>
                      <span className="text-[10px] text-[var(--accent-amber)] uppercase tracking-wider font-semibold">
                        04
                      </span>
                    </div>
                  </div>
                </ScrollReveal>

                {/* Mobile Down Connector */}
                <div className="md:hidden flex flex-col items-center gap-1 py-3 text-[var(--accent-amber)] opacity-70" aria-hidden="true">
                  <div className="w-[1.5px] h-3 bg-[var(--accent-amber)]" />
                  <ArrowDown className="w-4 h-4" />
                </div>
              </div>
            )}

            {/* CARD 03: Despliegue Cloud (Col 3 on Desktop, underneath Aprobado) */}
            {phases[2] && (
              <div ref={card3Ref} className="relative flex flex-col h-full md:order-3 order-1">
                <ScrollReveal delay={150}>
                  <div className="bracket-corners card-lift p-6 sm:p-7 rounded-xs border border-[var(--border)] bg-[var(--surface)] h-full min-h-[350px] flex flex-col justify-between group">
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <span className="font-mono text-2xl font-bold text-[var(--muted)] group-hover:text-[var(--accent-amber)] transition-colors">
                          {phases[2].step}
                        </span>
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 text-[10px] font-mono uppercase tracking-[0.14em] rounded-xs border border-[var(--border-strong)] bg-[var(--surface-raised)] text-[var(--accent-amber)]">
                          <Cloud className="w-3 h-3" />
                          {phases[2].tag}
                        </span>
                      </div>
                      <h3 className="text-lg sm:text-xl font-bold text-[var(--foreground)] mb-3">
                        {phases[2].title}
                      </h3>
                      <p className="text-xs sm:text-sm text-[var(--muted)] leading-relaxed">
                        {phases[2].desc}
                      </p>
                    </div>

                    <div className="pt-5 mt-4 border-t border-[var(--border)] flex items-center justify-between text-xs font-mono text-[var(--muted)]">
                      <span className="flex items-center gap-2">
                        <Server className="w-3.5 h-3.5 text-[var(--accent-amber)]" />
                        <span>Docker & Cloudflare</span>
                      </span>
                      <span className="text-[10px] text-[var(--accent-amber)] uppercase tracking-wider font-semibold">
                        03
                      </span>
                    </div>
                  </div>
                </ScrollReveal>

                {/* Mobile Down Connector */}
                <div className="md:hidden flex flex-col items-center gap-1 py-3 text-[var(--accent-amber)] opacity-70" aria-hidden="true">
                  <div className="w-[1.5px] h-3 bg-[var(--accent-amber)]" />
                  <ArrowDown className="w-4 h-4" />
                </div>
              </div>
            )}
          </div>

        </div>
      </div>
    </section>
  )
}
