import { notFound } from 'next/navigation'
import { getDictionary, hasLocale } from '../../dictionaries'
import { CASE_STUDIES } from '@/data/caseStudies'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import CaseStudyViewer from '@/components/CaseStudyViewer'

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

  return {
    title: isEs
      ? `${study.title} — Caso de Estudio · AyeApps`
      : `${study.title} — Case Study · AyeApps`,
    description: isEs
      ? study.heroTaglineBusiness.es
      : study.heroTaglineBusiness.en,
  }
}

export default async function CaseStudyPage({ params }: PageProps) {
  const { lang, slug } = await params
  if (!hasLocale(lang)) notFound()

  const study = CASE_STUDIES[slug]
  if (!study) notFound()

  const dict = await getDictionary(lang)

  return (
    <>
      <Navbar dict={dict} lang={lang} />
      <main id="main">
        <CaseStudyViewer study={study} lang={lang as 'es' | 'en'} />
      </main>
      <Footer dict={dict} lang={lang} />
    </>
  )
}
