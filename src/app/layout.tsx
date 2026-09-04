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
  metadataBase: new URL('https://ayeapps.com'),
  title: {
    default: 'AyeApps — Sistemas de Software Completos & Plataformas Cloud',
    template: '%s — AyeApps',
  },
  description: 'Ingeniería y desarrollo de sistemas de software completos en Querétaro, México. Plataformas web, apps nativas iOS y arquitecturas cloud con Next.js, Swift y FastAPI.',
  keywords: [
    'AyeApps',
    'desarrollo de sistemas Querétaro',
    'software a medida',
    'apps iOS Swift',
    'Next.js 16',
    'FastAPI Python',
    'sistemas cloud',
    'ingeniería de software',
    'CRM a medida',
    'integración con IA',
  ],
  authors: [{ name: 'Alberto Montero — AyeApps', url: 'https://ayeapps.com' }],
  creator: 'Alberto Montero',
  publisher: 'AyeApps',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
    ],
    apple: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
    ],
  },
  manifest: '/manifest.webmanifest',
  openGraph: {
    type: 'website',
    url: 'https://ayeapps.com',
    title: 'AyeApps — Sistemas de Software Completos & Plataformas Cloud',
    description: 'Sistemas de software completos, rápidos y en la nube. Next.js, Swift, FastAPI & Cloud.',
    siteName: 'AyeApps',
    locale: 'es_MX',
    alternateLocale: ['en_US'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AyeApps — Sistemas de Software Completos & Plataformas Cloud',
    description: 'Sistemas de software completos, rápidos y en la nube. Next.js, Swift, FastAPI & Cloud.',
    creator: '@alberto24dev',
    site: '@ayeapps',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
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

        {/* Google Analytics 4 */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-PJVGDYQM61"
          strategy="afterInteractive"
        />
        <Script id="google-analytics-gtag" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-PJVGDYQM61');
          `}
        </Script>
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} ${jakarta.variable} ${cormorant.variable} ${montserrat.variable} antialiased selection:bg-[var(--accent-amber)] selection:text-black`}>
        {children}
      </body>
    </html>
  )
}
