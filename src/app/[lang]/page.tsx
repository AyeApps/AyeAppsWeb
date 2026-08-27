import { notFound } from 'next/navigation'
import { getDictionary, hasLocale } from './dictionaries'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import ProjectsShowcase from '@/components/ProjectsShowcase'
import Services from '@/components/Services'
import TechStack from '@/components/TechStack'
import Testimonials from '@/components/Testimonials'
import ContactSection from '@/components/ContactSection'
import Footer from '@/components/Footer'

interface PageProps {
  params: Promise<{ lang: string }>
}

export async function generateMetadata({ params }: PageProps) {
  const { lang } = await params
  const isEs = lang === 'es'

  return {
    title: isEs
      ? 'AyeApps — Atelier de Software & Apps a Medida en Querétaro'
      : 'AyeApps — Software Engineering Atelier & Custom Apps',
    description: isEs
      ? 'Desarrollo de software boutique en Querétaro, México. Plataformas web de alta velocidad, apps nativas iOS y arquitecturas cloud con Next.js, Swift y FastAPI.'
      : 'Boutique software engineering in Querétaro, Mexico. High-speed web platforms, native iOS apps, and cloud backend architectures built with Next.js, Swift and FastAPI.',
    alternates: {
      canonical: `https://home.ayeapps.com/${lang}`,
      languages: {
        'es': 'https://home.ayeapps.com/es',
        'en': 'https://home.ayeapps.com/en',
      },
    },
  }
}

export function generateStaticParams() {
  return [{ lang: 'es' }, { lang: 'en' }]
}

export default async function LandingPage({ params }: PageProps) {
  const { lang } = await params
  if (!hasLocale(lang)) notFound()

  const dict = await getDictionary(lang)

  return (
    <>
      <Navbar dict={dict} lang={lang} />
      <main id="main">
        <Hero dict={dict} />
        <ProjectsShowcase dict={dict} lang={lang} />
        <Services dict={dict} />
        <TechStack dict={dict} />
        <Testimonials dict={dict} />
        <ContactSection dict={dict} />
      </main>
      <Footer dict={dict} lang={lang} />
    </>
  )
}
