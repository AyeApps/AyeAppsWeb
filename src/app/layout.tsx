import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
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

export const metadata: Metadata = {
  title: 'AyeApps — Atelier de Software & Aplicaciones a Medida',
  description: 'Boutique de ingeniería y desarrollo de software en Querétaro, México. Páginas web, web apps, apps nativas iOS y arquitecturas backend con Next.js, Swift y FastAPI.',
  keywords: ['AyeApps', 'desarrollo web Querétaro', 'apps iOS Swift', 'Next.js', 'FastAPI', 'software a medida', 'ingeniería de software'],
  authors: [{ name: 'Alberto Montero — AyeApps' }],
  icons: {
    icon: '/favicon.svg',
    apple: '/favicon.svg',
  },
  openGraph: {
    type: 'website',
    url: 'https://home.ayeapps.com',
    title: 'AyeApps — Atelier de Software & Aplicaciones a Medida',
    description: 'Ingeniería de software con precisión y carácter. Next.js, Swift, FastAPI & Cloud.',
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
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased selection:bg-[var(--accent-amber)] selection:text-black`}>
        {children}
      </body>
    </html>
  )
}
