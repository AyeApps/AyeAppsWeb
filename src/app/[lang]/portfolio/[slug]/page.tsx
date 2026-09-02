import { notFound } from 'next/navigation'
import { getDictionary, hasLocale } from '../../dictionaries'
import { CASE_STUDIES } from '@/data/caseStudies'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import CaseStudyViewer from '@/components/CaseStudyViewer'

import JsonLd from '@/components/JsonLd'

interface PageProps {
  params: Promise<{ lang: string; slug: string }>
}

export function generateStaticParams() {
  const slugs = Object.keys(CASE_STUDIES)
  const params: { lang: string; slug: string }[] = []

  for (const lang of ['es', 'en']) {
    for (const slug of slugs) {
      params.push({ lang, slug })
    }
  }

  return params
}

export async function generateMetadata({ params }: PageProps) {
  const { lang, slug } = await params
  const isEs = lang === 'es'
  const study = CASE_STUDIES[slug]

  if (!study) {
    return {
      title: 'Caso de Estudio — AyeApps',
    }
  }

  const title = isEs
    ? `${study.title} — Caso de Estudio · AyeApps`
    : `${study.title} — Case Study · AyeApps`
  const description = isEs
    ? study.heroTaglineBusiness.es
    : study.heroTaglineBusiness.en

  return {
    title,
    description,
    alternates: {
      canonical: `https://ayeapps.com/${lang}/portfolio/${slug}`,
      languages: {
        es: `https://ayeapps.com/es/portfolio/${slug}`,
        en: `https://ayeapps.com/en/portfolio/${slug}`,
      },
    },
    openGraph: {
      title,
      description,
      url: `https://ayeapps.com/${lang}/portfolio/${slug}`,
      siteName: 'AyeApps',
      locale: isEs ? 'es_MX' : 'en_US',
      type: 'article',
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

export default async function CaseStudyPage({ params }: PageProps) {
  const { lang, slug } = await params
  if (!hasLocale(lang)) notFound()

  const study = CASE_STUDIES[slug]
  if (!study) notFound()

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
        name: lang === 'es' ? 'Portafolio' : 'Portfolio',
        item: `https://ayeapps.com/${lang}/portfolio`,
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: study.title,
        item: `https://ayeapps.com/${lang}/portfolio/${slug}`,
      },
    ],
  }

  const appSchema = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: study.title,
    description: lang === 'es' ? study.heroTaglineBusiness.es : study.heroTaglineBusiness.en,
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web, iOS, Cloud',
    author: {
      '@id': 'https://ayeapps.com/#organization',
    },
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
  }

  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={appSchema} />
      <Navbar dict={dict} lang={lang} />
      <main id="main">
        <CaseStudyViewer study={study} lang={lang as 'es' | 'en'} />
      </main>
      <Footer dict={dict} lang={lang} />
    </>
  )
}
