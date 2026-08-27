export interface Project {
  id: string
  slug: string
  title: string
  category: 'client' | 'product' | 'mobile' | 'macos' | 'ai'
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
    id: 'ayestock',
    slug: 'ayestock',
    title: 'AyeStock',
    category: 'product',
    categoryLabel: { es: 'Dashboard Web & Inventario', en: 'Web Dashboard & Inventory' },
    tagline: {
      es: 'Dashboard bilingüe de control de inventario con modo oscuro, búsqueda regex asíncrona y REST API.',
      en: 'Bilingual inventory management dashboard with dark mode, async regex search, and REST API.',
    },
    description: {
      es: 'Plataforma web ágil para control de stock, precios de compra/venta y alertas de existencias. Frontend responsivo en Next.js con modo oscuro y backend asíncrono en FastAPI + Motor con búsquedas indexadas en MongoDB.',
      en: 'Agile inventory control platform tracking stock, buy/sell margins, and inventory status. Responsive Next.js interface with dark mode and async Python FastAPI backend backed by MongoDB indexing.',
    },
    highlights: {
      es: [
        'Dashboard bilingüe (ES/EN) con filtrado y búsqueda instantánea',
        'API RESTful asíncrona con validaciones Pydantic',
        'Badges dinámicos de estado de stock y márgenes',
      ],
      en: [
        'Bilingual dashboard (ES/EN) with instant search and filters',
        'Async RESTful API with strict Pydantic validation',
        'Dynamic stock status badges and profit margins',
      ],
    },
    technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'FastAPI', 'MongoDB'],
    year: '2026',
    role: { es: 'Desarrollador Full Stack', en: 'Full Stack Developer' },
    mockupType: 'browser',
  },
  {
    id: 'ayemusicvisualizer',
    slug: 'ayemusicvisualizer',
    title: 'AyeMusicVisualizer',
    category: 'macos',
    categoryLabel: { es: 'App Nativa macOS & Audio DSP', en: 'Native macOS & Audio DSP' },
    tagline: {
      es: 'Visualizador de audio en tiempo real para macOS con barras de frecuencia arrastrables y FFT vDSP.',
      en: 'Real-time macOS audio visualizer with draggable frequency bars and Accelerate vDSP FFT.',
    },
    description: {
      es: 'Aplicación nativa de macOS construida en SwiftUI y AVAudioEngine. Procesa audio en vivo mediante transformada de Fourier rápida (FFT de 2048 muestras con ventana Hann y Accelerate framework) para animar barras de frecuencia interactivas con suavizado exponencial y renderizado a 60+ FPS.',
      en: 'Native macOS app built with SwiftUI and AVAudioEngine. Analyzes live audio using 2048-sample FFT via Apple Accelerate vDSP and Hann windowing to drive draggable frequency bars with exponential smoothing at 60+ FPS.',
    },
    highlights: {
      es: [
        'Procesamiento DSP en tiempo real con Apple Accelerate vDSP',
        'Barras interactivas arrastrables con interpolación de color',
        '9 presets de frecuencias y control inmersivo en pantalla completa',
      ],
      en: [
        'Real-time DSP processing with Apple Accelerate vDSP',
        'Interactive draggable bars with smooth color interpolation',
        '9 musical frequency presets & immersive full-screen mode',
      ],
    },
    technologies: ['Swift', 'SwiftUI', 'AVFoundation', 'Accelerate vDSP', 'macOS AppKit'],
    year: '2025',
    role: { es: 'Ingeniería de Software & DSP', en: 'Software & DSP Engineer' },
    mockupType: 'terminal',
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
  {
    id: 'mediscann',
    slug: 'mediscann',
    title: 'MediScann',
    category: 'ai',
    categoryLabel: { es: 'IA & Visión Computacional', en: 'AI & Computer Vision' },
    tagline: {
      es: 'Clasificador dermatológico en tiempo real mediante red neuronal MobileNetV2 y cliente móvil.',
      en: 'Real-time dermatological condition classifier powered by a custom MobileNetV2 neural network.',
    },
    description: {
      es: 'Sistema de salud digital con app móvil en React Native (Expo) y backend de inferencia en Python/TensorFlow. Utiliza una red neuronal convolucional MobileNetV2 optimizada para clasificar afecciones dérmicas a partir de imágenes capturadas por el usuario.',
      en: 'Digital health solution featuring a React Native (Expo) mobile app and Python/TensorFlow inference backend. Powered by a fine-tuned MobileNetV2 convolutional neural network classifying skin conditions from camera captures.',
    },
    highlights: {
      es: [
        'Modelo MobileNetV2 customizado para inferencia rápida en backend',
        'App móvil en React Native / Expo con interfaz intuitiva',
        'Infraestructura contenerizada con Docker Compose',
      ],
      en: [
        'Custom MobileNetV2 CNN tuned for low-latency backend inference',
        'Intuitive React Native / Expo mobile interface',
        'Containerized architecture orchestrated with Docker Compose',
      ],
    },
    technologies: ['React Native', 'Expo', 'Python', 'TensorFlow', 'Flask', 'Docker'],
    year: '2025',
    role: { es: 'Desarrollo de IA & Móvil', en: 'AI & Mobile Developer' },
    githubUrl: 'https://github.com/Sadiec7/MediScann',
    mockupType: 'mobile',
  },
]
