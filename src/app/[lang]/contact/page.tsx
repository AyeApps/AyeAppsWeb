import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getDictionary, hasLocale } from '../dictionaries'
import Navbar from '@/components/Navbar'
import ContactSection from '@/components/ContactSection'
import Footer from '@/components/Footer'
import ScrollReveal from '@/components/ScrollReveal'
import { ArrowLeft } from 'lucide-react'

import JsonLd from '@/components/JsonLd'

interface PageProps {
  params: Promise<{ lang: string }>
}

export async function generateMetadata({ params }: PageProps) {
  const { lang } = await params
  const isEs = lang === 'es'

  const title = isEs
    ? 'Contacto & Canales Directos — AyeApps'
    : 'Contact & Direct Channels — AyeApps'
  const description = isEs
    ? 'Ponte en contacto directo con el equipo de ingeniería de software de AyeApps por WhatsApp, Email o Redes Sociales.'
    : 'Direct contact with the AyeApps software engineering team via WhatsApp, Email, or Social Networks.'

  return {
    title,
    description,
    alternates: {
      canonical: `https://ayeapps.com/${lang}/contact`,
      languages: {
        es: 'https://ayeapps.com/es/contact',
        en: 'https://ayeapps.com/en/contact',
      },
    },
    openGraph: {
      title,
      description,
      url: `https://ayeapps.com/${lang}/contact`,
      siteName: 'AyeApps',
      locale: isEs ? 'es_MX' : 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      creator: '@alberto24dev',
      site: '@ayeapps',
    },
  }
}

export function generateStaticParams() {
  return [{ lang: 'es' }, { lang: 'en' }]
}

export default async function ContactPage({ params }: PageProps) {
  const { lang } = await params
  if (!hasLocale(lang)) notFound()

  const dict = await getDictionary(lang)

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: lang === 'es' ? 'Inicio' : 'Home',
        item: `https://ayeapps.com/${lang}`,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: lang === 'es' ? 'Contacto' : 'Contact',
        item: `https://ayeapps.com/${lang}/contact`,
      },
    ],
  }

  const contactSchema = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    name: lang === 'es' ? 'Contacto con Ingeniería AyeApps' : 'AyeApps Engineering Contact',
    description: dict.contact.sub,
    url: `https://ayeapps.com/${lang}/contact`,
    mainEntity: {
      '@id': 'https://ayeapps.com/#organization',
    },
  }

  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={contactSchema} />
      <Navbar dict={dict} lang={lang} />
      <main id="main">
        {/* ─── Page Hero Header ───────────────────────── */}
        <section className="pt-32 pb-10 px-4 sm:px-6 bg-[var(--surface)] dot-pattern border-b border-[var(--border)]">
          <div className="max-w-6xl mx-auto">
            <ScrollReveal>
              <Link
                href={`/${lang}`}
                className="inline-flex items-center gap-1.5 text-xs font-mono text-[var(--muted)] hover:text-[var(--accent-amber)] transition-colors mb-6 group"
              >
                <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
                <span>{lang === 'es' ? 'Volver al Inicio' : 'Back to Home'}</span>
              </Link>
            </ScrollReveal>
          </div>
        </section>

        {/* ─── Contact Interactive Card Section ──────── */}
        <ContactSection dict={dict} lang={lang} />
      </main>
      <Footer dict={dict} lang={lang} />
    </>
  )
}
