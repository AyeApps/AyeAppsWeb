import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono, Plus_Jakarta_Sans, Cormorant_Garamond, Montserrat } from 'next/font/google'
import Script from 'next/script'
import './globals.css'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

const jakarta = Plus_Jakarta_Sans({
  variable: '--font-jakarta',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
})

const cormorant = Cormorant_Garamond({
  variable: '--font-cormorant',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
})

const montserrat = Montserrat({
  variable: '--font-montserrat',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
})

export const metadata: Metadata = {
  title: 'AyeApps — Sistemas de Software Completos & Plataformas Cloud',
  description: 'Ingeniería y desarrollo de sistemas de software completos en Querétaro, México. Plataformas web, apps nativas iOS y arquitecturas cloud con Next.js, Swift y FastAPI.',
  keywords: ['AyeApps', 'desarrollo de sistemas Querétaro', 'apps iOS Swift', 'Next.js', 'FastAPI', 'sistemas cloud', 'ingeniería de software'],
  authors: [{ name: 'Alberto Montero — AyeApps' }],
  icons: {
    icon: '/favicon.svg',
    apple: '/favicon.svg',
  },
  openGraph: {
    type: 'website',
    url: 'https://home.ayeapps.com',
    title: 'AyeApps — Sistemas de Software Completos & Plataformas Cloud',
    description: 'Sistemas de software completos, rápidos y en la nube. Next.js, Swift, FastAPI & Cloud.',
    siteName: 'AyeApps',
  },
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#fafafa' },
    { media: '(prefers-color-scheme: dark)', color: '#050505' },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html suppressHydrationWarning data-scroll-behavior="smooth">
      <head>
        <Script
          id="theme-init"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('theme');if(t==='dark'||(t==null&&window.matchMedia('(prefers-color-scheme:dark)').matches)){document.documentElement.classList.add('dark')}else{document.documentElement.classList.remove('dark')}}catch(e){}})()`,
          }}
        />
        <Script
          id="lang-init"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var p=window.location.pathname;if(p==='/'||p===''){var s=localStorage.getItem('preferred_lang');if(s==='en'||s==='es'){window.location.replace('/'+s);return}var l=(navigator.language||navigator.userLanguage||'es').toLowerCase();if(l.startsWith('es')){window.location.replace('/es')}else{window.location.replace('/en')}}}catch(e){}})()`,
          }}
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} ${jakarta.variable} ${cormorant.variable} ${montserrat.variable} antialiased selection:bg-[var(--accent-amber)] selection:text-black`}>
        {children}
      </body>
    </html>
  )
}
