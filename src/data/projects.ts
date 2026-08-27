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
    title: 'Fatima Resendiz',
    category: 'client',
    categoryLabel: { es: 'Plataforma & CRM', en: 'Platform & CRM' },
    tagline: {
      es: 'Plataforma completa de fotografía: CRM de clientes, galerías privadas Pic-Time y marketing automatizado.',
      en: 'Complete photography platform: Client CRM, private Pic-Time galleries, and marketing automation.',
    },
    description: {
      es: 'Sistema integral desarrollado a medida para una fotógrafa profesional. Incluye web pública bilingüe de alta velocidad en Next.js, portal privado para clientes con autenticación JWT y acceso a galerías Pic-Time, un CRM administrativo con pipeline de prospectos y automatización de correos con Brevo.',
      en: 'Comprehensive custom system for a professional photographer. Features a high-speed bilingual Next.js website, JWT-authenticated private client portal with Pic-Time gallery delivery, admin lead CRM pipeline, and Brevo email marketing automation.',
    },
    highlights: {
      es: [
        'Web pública bilingüe (Next.js 15 + Tailwind CSS)',
        'Portal de clientes con rotación de tokens y Pic-Time API',
        'Pipeline de cotizaciones y leads en tiempo real',
        'Automatización de correos transaccionales con Brevo',
      ],
      en: [
        'Bilingual public web platform (Next.js 15 + Tailwind CSS)',
        'Client portal with token rotation & Pic-Time integration',
        'Real-time lead & booking pipeline management',
        'Transactional email automation via Brevo',
      ],
    },
    technologies: ['Next.js', 'FastAPI', 'MongoDB', 'Python', 'Docker', 'Brevo', 'Cloudflare Turnstile'],
    year: '2026',
    role: { es: 'Arquitectura & Desarrollo Full Stack', en: 'Architecture & Full Stack Dev' },
    featured: true,
    liveUrl: 'https://fatimaresendiz.com',
    mockupType: 'browser',
  },
  {
    id: 'ayetasks',
    slug: 'ayetasks',
    title: 'AyeTasks',
    category: 'product',
    categoryLabel: { es: 'App Nativa iOS & Backend', en: 'Native iOS & Backend' },
    tagline: {
      es: 'Jerarquía infinita de tareas (hasta 25 niveles) con agendamiento polimórfico y arquitectura Swift + FastAPI.',
      en: 'Infinite-depth task hierarchy (up to 25 levels) with polymorphic scheduling and Swift + FastAPI architecture.',
    },
    description: {
      es: 'Sistema de productividad fundado en el principio de que "todo es una tarea". La aplicación iOS nativa se conecta a un backend asíncrono en FastAPI + MongoDB capaz de resolver árboles de 25 niveles con rendimiento O(n). Incluye fechas polimórficas (exactas, periodos ISO 8601 y recurrentes), etiquetado por color hexadecimal y promoción de hijos al eliminar.',
      en: 'Productivity ecosystem built on the premise that "everything is a task". Native iOS app connects to an async FastAPI + MongoDB backend resolving 25-level trees in O(n) time. Features polymorphic due-dates, hex-tagging, JWT security, and tree-preserving node promotions on deletion.',
    },
    highlights: {
      es: [
        'App nativa Swift (SwiftUI + MVVM) y Neo-Brutalist Cyber Theme',
        'Árboles de tareas hasta 25 niveles de profundidad',
        'Agendamiento polimórfico (exacto, scoped ISO 8601, recurrente)',
        'Backend FastAPI + Beanie ODM con Docker Compose',
      ],
      en: [
        'Native Swift app (SwiftUI + MVVM) with Neo-Brutalist Cyber Theme',
        'Infinite task trees up to 25 nested levels deep',
        'Polymorphic scheduling (exact, scoped ISO 8601, recurring)',
        'FastAPI + Beanie ODM backend with Docker Compose',
      ],
    },
    technologies: ['Swift', 'SwiftUI', 'Python', 'FastAPI', 'MongoDB', 'Docker'],
    year: '2026',
    role: { es: 'Diseño & Desarrollo de Producto', en: 'Product Design & Engineering' },
    featured: true,
    githubUrl: 'https://github.com/alberto24dev/AyeTasks',
    mockupType: 'mobile',
  },
  {
    id: 'aye-video-downloader',
    slug: 'aye-video-downloader',
    title: 'Aye Video Downloader',
    category: 'product',
    categoryLabel: { es: 'App Nativa macOS & Cloud Engine', en: 'Native macOS & Cloud Engine' },
    tagline: {
      es: 'Extracción y transcodificación multimedia de alto rendimiento con procesamiento dual local y en la nube.',
      en: 'High-throughput media extraction and transcoding with dual on-device and cloud processing pipelines.',
    },
    description: {
      es: 'Aplicación nativa para macOS (SwiftUI) y cliente web que permite descargar y transcodificar video/audio en calidades de hasta 4K. Integra un motor de procesamiento dual: ejecución local eficiente o pipeline asíncrono en la nube con backend en Python/FastAPI, colas de descarga paralelas y transcodificación con FFmpeg.',
      en: 'Native macOS (SwiftUI) and web application for high-throughput video and audio stream extraction up to 4K. Features a dual-processing engine: lightweight on-device execution or an asynchronous cloud worker pipeline powered by Python/FastAPI, parallel download queues, and FFmpeg transcoding.',
    },
    highlights: {
      es: [
        'Modo dual de procesamiento: Motor local en macOS o Cloud Worker',
        'Extracción en múltiples calidades (4K, 1080p, audio MP3 320kbps)',
        'Backend asíncrono con FastAPI, yt-dlp y transcodificación FFmpeg',
        'Cliente nativo SwiftUI con telemetría de tasa de transferencia en vivo',
      ],
      en: [
        'Dual processing architecture: On-device macOS engine or Cloud Worker',
        'Multi-quality extraction (4K, 1080p, high-fidelity 320kbps MP3)',
        'Asynchronous backend powered by FastAPI, yt-dlp, and FFmpeg',
        'Native SwiftUI client with real-time transfer telemetry',
      ],
    },
    technologies: ['Swift', 'SwiftUI', 'macOS', 'Python', 'FastAPI', 'FFmpeg', 'yt-dlp', 'Docker'],
    year: '2026',
    role: { es: 'Arquitectura & Desarrollo de Producto', en: 'Product Architecture & Engineering' },
    featured: true,
    githubUrl: 'https://github.com/alberto24dev/AyeVideoDownloader',
    mockupType: 'terminal',
  },
  {
    id: 'ayerecipes',
    slug: 'ayerecipes',
    title: 'AyeRecipes',
    category: 'product',
    categoryLabel: { es: 'App Nativa iOS & Cloud S3', en: 'Native iOS & Cloud S3' },
    tagline: {
      es: 'Gestor de recetas con captura por cámara, URLs prefirmadas en AWS S3 y caché de imágenes en 2 niveles.',
      en: 'Recipe manager with camera capture, AWS S3 presigned uploads, and two-tier image caching.',
    },
    description: {
      es: 'App nativa en SwiftUI con integración profunda de cámara, compresión JPEG en cliente y respuesta háptica CoreHaptics. El backend FastAPI expone URLs prefirmadas en AWS S3 para subida directa cliente-nube, con caché en memoria y disco en el cliente iOS.',
      en: 'Native SwiftUI app featuring camera capture, client-side JPEG compression, and CoreHaptics feedback. FastAPI backend serves presigned AWS S3 URLs for direct uploads, coupled with a two-tier iOS memory/disk caching engine.',
    },
    highlights: {
      es: [
        'Subida directa a AWS S3 mediante URLs prefirmadas seguras',
        'Caché de imágenes en dos niveles (NSCache memoria + disco)',
        'Integración de cámara con compresión optimizada',
      ],
      en: [
        'Direct AWS S3 uploads via secure presigned URLs',
        'Two-tier caching engine (NSCache memory + disk)',
        'Camera capture with on-device compression',
      ],
    },
    technologies: ['Swift', 'SwiftUI', 'Python', 'FastAPI', 'MongoDB', 'AWS S3', 'Docker'],
    year: '2026',
    role: { es: 'Desarrollador Solo', en: 'Solo Developer' },
    featured: true,
    githubUrl: 'https://github.com/alberto24dev/AyeRecipes',
    mockupType: 'mobile',
  },
  {
    id: 'ayegirlfriend',
    slug: 'ayegirlfriend',
    title: 'AyeGirlfriend',
    category: 'product',
    categoryLabel: { es: 'App Nativa iOS & Microservicio', en: 'Native iOS & Microservice' },
    tagline: {
      es: 'Gestor de atención y seguimiento de momentos significativos con backend asíncrono en FastAPI y Motor.',
      en: 'Relationship care management app with async Python FastAPI and non-blocking MongoDB Atlas backend.',
    },
    description: {
      es: 'Aplicación nativa para iOS diseñada para registrar ideas, planear acciones y organizar momentos importantes. Backend asíncrono construido con FastAPI y Motor (MongoDB Atlas) con suite de pruebas automatizadas en pytest.',
      en: 'Native iOS application designed to organize thoughtful ideas, plan partner activities, and log relationship milestones. Async FastAPI backend connected to MongoDB Atlas via Motor with automated pytest test suites.',
    },
    highlights: {
      es: [
        'Arquitectura async-first con FastAPI y MongoDB Motor',
        'Suite de pruebas automatizadas con pytest y mongomock',
        'Interfaz moderna SwiftUI con foco en usabilidad',
      ],
      en: [
        'Async-first architecture with FastAPI and MongoDB Motor',
        'Automated test suite with pytest and mongomock',
        'Modern SwiftUI interface designed for frictionless usage',
      ],
    },
    technologies: ['Swift', 'SwiftUI', 'Python', 'FastAPI', 'MongoDB', 'pytest'],
    year: '2026',
    role: { es: 'Desarrollador Solo', en: 'Solo Developer' },
    mockupType: 'mobile',
  },
  {
    id: 'blindy',
    slug: 'blindy',
    title: 'Blindy',
    category: 'client',
    categoryLabel: { es: 'App Híbrida Empresarial', en: 'Enterprise Hybrid App' },
    tagline: {
      es: 'App móvil empresarial con login biométrico, pasarela Stripe, notificaciones push y mapas en vivo.',
      en: 'Enterprise mobile app with biometric login, Stripe payments, live push notifications, and maps.',
    },
    description: {
      es: 'Aplicación móvil empresarial multiplataforma (iOS y Android) para servicios profesionales. Integra biometría (Face ID / Huella), procesamiento de pagos con Stripe, tracking por Google Maps y sincronización en tiempo real vía SignalR con backend .NET.',
      en: 'Enterprise cross-platform mobile application (iOS & Android) for professional field services. Integrates biometrics (Face ID/Fingerprint), Stripe checkout, Google Maps tracking, and real-time updates via SignalR with a .NET Web API backend.',
    },
    highlights: {
      es: [
        'Autenticación biométrica nativa (Face ID / Huella dactilar)',
        'Pagos seguros integrados con Stripe Checkout',
        'Actualizaciones en vivo con SignalR y Firebase Push Notifications',
      ],
      en: [
        'Native biometric authentication (Face ID / Fingerprint)',
        'Secure in-app payments with Stripe Checkout',
        'Live updates with SignalR & Firebase Push Notifications',
      ],
    },
    technologies: ['Ionic', 'Angular', 'Capacitor', 'C#', '.NET Web API', 'SQL Server', 'Stripe', 'SignalR'],
    year: '2025',
    role: { es: 'Desarrollador Móvil', en: 'Mobile App Developer' },
    mockupType: 'mobile',
  },
]
