---
target: src/app/[lang]/page.tsx
total_score: 30
max_score: 36
na_heuristics: 10
p0_count: 0
p1_count: 2
timestamp: 2026-08-27T17-21-56Z
slug: src-app-lang-page-tsx
---
# Design Critique: AyeApps Web (`src/app/[lang]/page.tsx`)

Method: dual-agent (A: 60819a48-92b5-41e3-96b5-4b71471edfac · B: 0947d3ee-a2cc-4a24-95ea-0783b3a9f2c9)

## Design Health Score

| # | Heuristic | Score | Key Issue |
|---|---|---|---|
| 1 | Visibility of System Status | 3.5 | Active page indicator in navbar is crisp; subpages lack multi-level breadcrumbs. |
| 2 | Match System / Real World | 2.5 | Heavy jargon ("O(n)", "vDSP FFT", "Polymorphic scheduling") for non-technical SME clients. |
| 3 | User Control and Freedom | 3.5 | Language switcher preserves sub-paths seamlessly; Hero CTAs on Home jump to anchor IDs. |
| 4 | Consistency and Standards | 3.8 | Exemplary token usage across light/dark modes, unified button press and card lift dynamics. |
| 5 | Error Prevention | 3.5 | Strict locale matching with notFound(); email mailto links lack pre-filled subject/body. |
| 6 | Recognition Rather Than Recall | 3.2 | Category icons and tech tags aid scanning; text-only project mockups lack visual preview. |
| 7 | Flexibility and Efficiency | 3.2 | Fast category filter pills; one-tap direct WhatsApp button for instant intake. |
| 8 | Aesthetic and Minimalist Design | 3.8 | High signal-to-noise ratio, generous whitespace, strict 2-color accent discipline. |
| 9 | Error Recovery | 3.0 | Next.js fallback works; lacks a custom branded 404 page with direct Atelier recovery actions. |
| 10 | Help and Documentation | n/a | Not applicable in Persuade & Experience mode. |
| **Total** | | **30.0 / 36.0** | **Good (83.3%)** |

## Design Specificity Verdict

- **LLM Assessment:** The visual world of AyeApps Web is authentically grounded in *"The Precision Atelier"*, combining architectural sobriety (Paper White / Deep Obsidian) with high-energy Cyber-Amber (`#FE9D01` / `#E68A00`) and custom bracket-corners. It successfully avoids generic SaaS gradient and template traps.
- **Deterministic Scan:** 0 rule violations across 16 files. Clean passes on slop rules (`side-tab`, `gradient-text`, `ai-color-palette`, `bounce-easing`, `codex-grid-background`).
- **Contrast & Ergonomics:** WCAG AAA on all primary copy (18:1+) and dark-mode amber accents (9.75:1).

## Overall Impression
AyeApps Web presents an authoritative, sophisticated engineering identity. The single largest conversion opportunity is transforming the "Under Construction" contact placeholder into an active, exclusive Atelier intake flow and enhancing the project mockups with richer visual previews.

## What's Working
1. **Atelier Visual Identity:** Bracket-corners, Bauhaus logo, and Cyber-Amber accents establish an unmistakable brand signature.
2. **True Multi-Page Architecture:** Instant SSG edge routing in Cloudflare with state-preserving language switching (`/es/portfolio` ↔ `/en/portfolio`).
3. **Engineering Depth:** Real production case study (Fatima Resendiz) alongside native Swift and DSP audio projects.

## Priority Issues
- **[P1] Contact Section "Under Construction" Framing:** Makes the boutique appear unready for business. Reframe into an active "Direct Atelier Scoping" intake card.
- **[P1] Home Hero CTA Route Consistency:** Update Hero CTA buttons to route directly to `/${lang}/portfolio` and `/${lang}/services` rather than anchor IDs.
- **[P2] Jargon Density in Hero Stats:** Balance computer science metrics ("O(n)") with business outcomes ("< 1.2s Carga", "0 Plantillas").
- **[P2] Project Mockups Visual Polish:** Elevate CSS text-only mockup headers into richer interactive visual previews.

## Persona Red Flags
- **Jordan (Non-Technical Business Owner):** Overwhelmed by low-level specs without business ROI explanations; hesitant about the "Under Construction" message.
- **Riley (Technical Founder):** Wants deeper architectural pipeline diagrams for the Fatima Resendiz CRM and verified Core Web Vitals benchmarks.
- **Casey (Mobile User):** Touch targets on secondary toggles (ThemeToggle, Social icons) slightly below 44px recommended tap footprint.
