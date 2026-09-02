export interface Project {
  id: string
  slug: string
  title: string
  category: 'client' | 'product' | 'mobile' | 'macos'
  categoryLabel: { es: string; en: string }
  tagline: { es: string; en: string }
  description: { es: string; en: string }
  highlights: { es: string[]; en: string[] }
  technologies: string[]
  year: string
  role: { es: string; en: string }
  featured?: boolean
  liveUrl?: string
  githubUrl?: string
  mockupType?: 'browser' | 'mobile' | 'terminal'
}

export const PROJECTS: Project[] = [
  {
    id: 'fatima-resendiz',
    slug: 'fatima-resendiz',
    title: 'Fatima Resendiz Web',
    category: 'client',
    categoryLabel: { es: 'Web Pública, App iOS & Panel de Admin', en: 'Public Web, iOS App & Full Admin Panel' },
    tagline: {
      es: 'Ecosistema de fotografía con panel de control total: Modifica paquetes, precios, galerías Pic-Time, fechas y clientes en tiempo real sin tocar código.',
      en: 'Photography ecosystem with full admin control: Manage packages, pricing, Pic-Time galleries, dates, and clients in real time without writing code.',
    },
    description: {
      es: 'Sistema integral desarrollado a medida para una fotógrafa profesional. Cuenta con un potente panel de administración privado donde Fátima tiene el control total para editar precios, crear nuevos paquetes, gestionar fechas de sesiones, administrar prospectos y vincular galerías Pic-Time. Todo complementado con una web pública bilingüe ultra rápida en Next.js, app nativa de iOS y correos automatizados con Brevo.',
      en: 'Complete custom ecosystem engineered for a professional photographer. Features a powerful private admin control dashboard granting 100% operational autonomy: updating packages and pricing, scheduling dates, managing client inquiries, and linking Pic-Time galleries without writing code. Complemented by a blazingly fast bilingual Next.js web platform, native iOS app, and automated Brevo email flows.',
    },
    highlights: {
      es: [
        'Panel de administración integral: control total de paquetes, precios, contenido y prospectos',
        'Web pública bilingüe y portal de clientes (Next.js 15 + Tailwind CSS)',
        'App de iOS en producción sincronizada en tiempo real con el backend cloud',
        'Portal privado con autenticación JWT y vinculación directa a galerías Pic-Time',
      ],
      en: [
        'Comprehensive admin control panel: full autonomy over packages, pricing, content & leads',
        'High-speed bilingual public web and client portal (Next.js 15 + Tailwind CSS)',
        'Production iOS app synchronized in real time with the cloud backend',
        'Private client portal with JWT security and direct Pic-Time gallery delivery',
      ],
    },
    technologies: ['Next.js', 'Panel de Admin', 'Swift', 'iOS', 'FastAPI', 'MongoDB', 'Python', 'Docker', 'Brevo'],
    year: '2026',
    role: { es: 'Arquitectura, Panel de Control & Full Stack', en: 'Architecture, Admin Panel & Full Stack' },
    featured: true,
    liveUrl: 'https://fatimaresendiz.com',
    mockupType: 'browser',
  },
  {
    id: 'ayetasks',
    slug: 'ayetasks',
    title: 'AyeTasks',
    category: 'product',
    categoryLabel: { es: 'App Multiplataforma & Cloud Sync', en: 'Cross-Platform App & Cloud Sync' },
    tagline: {
      es: 'Jerarquía infinita de tareas (hasta 25 niveles) con agendamiento polimórfico y arquitectura Expo + FastAPI.',
      en: 'Infinite-depth task hierarchy (up to 25 levels) with polymorphic scheduling and Expo + FastAPI architecture.',
    },
    description: {
      es: 'Sistema de productividad fundado en el principio de que "todo es una tarea". La aplicación multiplataforma (iOS, Android y Web) se conecta a un backend asíncrono en FastAPI + MongoDB capaz de resolver árboles de 25 niveles con rendimiento O(n). Incluye fechas polimórficas (exactas, periodos ISO 8601 y recurrentes), etiquetado por color hexadecimal y sincronización en la nube.',
      en: 'Productivity ecosystem built on the premise that "everything is a task". The cross-platform app (iOS, Android & Web) connects to an async FastAPI + MongoDB backend resolving 25-level trees in O(n) time. Features polymorphic due-dates, hex-tagging, JWT security, and real-time cloud sync.',
    },
    highlights: {
      es: [
        'App multiplataforma (React Native + Expo) para iOS, Android y Web',
        'Árboles de tareas hasta 25 niveles de profundidad',
        'Agendamiento polimórfico (exacto, scoped ISO 8601, recurrente)',
        'Backend asíncrono en FastAPI + Beanie ODM con Docker',
      ],
      en: [
        'Cross-platform app (React Native + Expo) for iOS, Android & Web',
        'Infinite task trees up to 25 nested levels deep',
        'Polymorphic scheduling (exact, scoped ISO 8601, recurring)',
        'Async FastAPI + Beanie ODM backend with Docker',
      ],
    },
    technologies: ['React Native', 'Expo', 'TypeScript', 'Python', 'FastAPI', 'MongoDB', 'Docker'],
    year: '2026',
    role: { es: 'Diseño & Desarrollo de Producto', en: 'Product Design & Engineering' },
    featured: true,
    githubUrl: 'https://github.com/ayeapps/AyeTasks',
    mockupType: 'mobile',
  },
  {
    id: 'aye-video-downloader',
    slug: 'aye-video-downloader',
    title: 'Aye Video Downloader',
    category: 'product',
    categoryLabel: { es: 'Plataforma Web (Apps Nativas Coming Soon)', en: 'Web Platform (Native Apps Coming Soon)' },
    tagline: {
      es: 'Plataforma web de extracción y transcodificación multimedia sin anuncios. Descargas en 4K y MP3. Apps nativas Mac y móviles en camino (Coming Soon).',
      en: 'Ad-free web platform for media extraction and transcoding. 4K & MP3 downloads. Native Mac & mobile apps in development (Coming Soon).',
    },
    description: {
      es: 'Plataforma web rápida y limpia para descargar y convertir video y audio de internet en resoluciones de hasta 4K UHD o extraer MP3 a 320 kbps sin publicidad invasiva. Respaldada por un motor cloud en FastAPI con colas asíncronas de procesamiento y transcodificación FFmpeg. Las aplicaciones nativas para macOS y dispositivos móviles se encuentran actualmente en reingeniería (Coming Soon).',
      en: 'Fast, clean web platform engineered to download and convert online video and audio up to 4K UHD or extract pristine 320 kbps MP3 without intrusive advertising. Backed by a FastAPI cloud engine with asynchronous processing queues and FFmpeg transcoding. Dedicated native apps for macOS and mobile devices are under active re-engineering (Coming Soon).',
    },
    highlights: {
      es: [
        'Plataforma web 100% libre de publicidad con descargas múltiples en cola',
        'Extracción en múltiples calidades (4K HDR, 1080p, audio MP3 320 kbps)',
        'Backend asíncrono en la nube con FastAPI, yt-dlp y transcodificación FFmpeg',
        'Aplicaciones nativas para macOS y dispositivos móviles en camino (Coming Soon)',
      ],
      en: [
        '100% ad-free web platform with multi-link queued downloads',
        'Multi-quality extraction (4K HDR, 1080p, 320 kbps MP3 audio)',
        'Asynchronous cloud backend powered by FastAPI, yt-dlp, and FFmpeg',
        'Native apps for macOS and mobile platforms in development (Coming Soon)',
      ],
    },
    technologies: ['Plataforma Web', 'FastAPI', 'Python', 'FFmpeg', 'yt-dlp', 'Docker', 'macOS & Móvil (Coming Soon)'],
    year: '2026',
    role: { es: 'Arquitectura & Desarrollo de Producto', en: 'Product Architecture & Engineering' },
    featured: true,
    githubUrl: 'https://github.com/ayeapps/AyeVideoDownloader',
    mockupType: 'terminal',
  },
  {
    id: 'ayefinance',
    slug: 'ayefinance',
    title: 'AyeFinance',
    category: 'product',
    categoryLabel: { es: 'App Multiplataforma & Motor Financiero', en: 'Cross-Platform App & Financial Engine' },
    tagline: {
      es: 'Control de flujo de caja, balances multicuentas en tiempo real y proyecciones automatizadas de liquidez a 30 días.',
      en: 'Cash flow control, real-time multi-account balance tracking, and automated 30-day liquidity projections.',
    },
    description: {
      es: 'Aplicación integral de gestión y proyección de finanzas personales del ecosistema AyeApps (iOS, Android y Web). Permite controlar múltiples cuentas bancarias (corrientes, ahorros, inversiones), registrar transferencias, ingresos y gastos en tiempo real, y automatizar proyecciones de flujo de efectivo a 30 días basadas en gastos fijos y suscripciones recurrentes, respaldada por un backend asíncrono en FastAPI + Beanie ODM.',
      en: 'Comprehensive personal finance management and projection app part of the AyeApps ecosystem (iOS, Android & Web). Tracks multi-account balances (checking, savings, investments), logs real-time transfers, and forecasts 30-day liquidity based on recurring schedules, powered by an async FastAPI + Beanie ODM cloud backend.',
    },
    highlights: {
      es: [
        'Gestión multicuentas (corrientes, ahorros e inversiones) en tiempo real',
        'Proyección automatizada de flujo de efectivo a 30 días con calendario de gastos fijos',
        'Backend asíncrono con FastAPI, Beanie ODM y persistencia distribuida en MongoDB',
        'Cliente multiplataforma Expo/React Native con diseño Neo-Brutalist Cyber de alta densidad',
      ],
      en: [
        'Real-time multi-account ledgering (checking, savings, investments)',
        'Automated 30-day cash flow projection engine with recurring expense schedules',
        'Asynchronous backend with FastAPI, Beanie ODM, and distributed MongoDB persistence',
        'High-density Neo-Brutalist Cyber interface built with React Native and Expo',
      ],
    },
    technologies: ['React Native', 'Expo', 'TypeScript', 'Python', 'FastAPI', 'MongoDB', 'Docker'],
    year: '2026',
    role: { es: 'Diseño & Desarrollo de Producto', en: 'Product Design & Engineering' },
    featured: true,
    githubUrl: 'https://github.com/ayeapps/AyeFinance',
    mockupType: 'mobile',
  },
]
