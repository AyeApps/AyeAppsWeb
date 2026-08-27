export interface CaseStudyModule {
  index: string
  title: { es: string; en: string }
  desc: { es: string; en: string }
  specs: string[]
}

export interface CaseStudyMetric {
  value: string
  label: { es: string; en: string }
  detail: { es: string; en: string }
}

export interface CaseStudyData {
  slug: string
  title: string
  clientName: string
  projectType: { es: string; en: string }
  year: string
  timeline: { es: string; en: string }
  role: { es: string; en: string }
  liveUrl?: string
  githubUrl?: string
  heroTagline: { es: string; en: string }
  overview: { es: string; en: string }
  challenge: { es: string; en: string }
  solution: { es: string; en: string }
  metrics: CaseStudyMetric[]
  modules: CaseStudyModule[]
  architectureLayers: {
    layer: string
    title: { es: string; en: string }
    techs: string[]
    description: { es: string; en: string }
  }[]
  testimonial?: {
    quote: { es: string; en: string }
    author: string
    role: { es: string; en: string }
    avatar?: string
  }
}

export const CASE_STUDIES: Record<string, CaseStudyData> = {
  'fatima-resendiz': {
    slug: 'fatima-resendiz',
    title: 'Fatima Resendiz Platform',
    clientName: 'Fátima Reséndiz',
    projectType: { es: 'Plataforma Web Bilingüe, CRM & Portal de Clientes', en: 'Bilingual Web Platform, CRM & Client Portal' },
    year: '2026',
    timeline: { es: '6 semanas de ingeniería', en: '6 weeks engineering' },
    role: { es: 'Arquitectura de Software, UI/UX & Desarrollo Full Stack', en: 'Software Architecture, UI/UX & Full Stack Dev' },
    liveUrl: 'https://fatimaresendiz.com',
    heroTagline: {
      es: 'Un sistema operativo digital completo para una fotógrafa de bodas: captación internacional, entrega de galerías y automatización de clientes.',
      en: 'A complete digital operating system for a wedding photographer: international acquisition, gallery delivery, and client automation.',
    },
    overview: {
      es: 'fatimaresendiz.com no es solo una página web estética; es una plataforma comercial y operativa integral diseñada para operar con latencia mínima, captar clientes bilingües en México y el extranjero, y automatizar el ciclo de vida completo de cada sesión fotográfica.',
      en: 'fatimaresendiz.com is not merely an aesthetic portfolio; it is a full-scale commercial and operational platform designed for ultra-low latency, international bilingual client acquisition, and automated end-to-end booking workflows.',
    },
    challenge: {
      es: 'Fátima operaba con múltiples herramientas desconectadas: formularios genéricos con pérdida de prospectos, entregas manuales de galerías que saturaban su tiempo, y una web monolítica sin optimización móvil ni SEO en inglés para el mercado de bodas destino.',
      en: 'Fátima managed her business across fragmented tools: generic inquiry forms with high lead drop-off, manual gallery deliveries eating into creative time, and a monolithic site lacking mobile speed or English SEO for the destination wedding market.',
    },
    solution: {
      es: 'Diseñamos y construimos un monorepo a medida con Next.js 15 App Router en el frontend para renderizado estático e híbrido (ISR), respaldado por un backend asíncrono en Python/FastAPI con MongoDB Atlas. Integramos Cloudflare Edge para CDN global, Brevo para marketing transaccional y la API de Pic-Time para acceso privado de galerías con rotación de tokens JWT.',
      en: 'We architected and built a custom monorepo using Next.js 15 App Router on the frontend for hybrid static/incremental generation (ISR), backed by an asynchronous Python/FastAPI backend with MongoDB Atlas. We integrated Cloudflare Edge for global CDN, Brevo for transactional email automation, and Pic-Time API for token-authenticated private gallery portals.',
    },
    metrics: [
      {
        value: '< 1.1s',
        label: { es: 'Tiempo de Carga Global', en: 'Global Load Time' },
        detail: { es: 'LCP optimizado en Cloudflare Edge CDN', en: 'LCP optimized on Cloudflare Edge CDN' }
      },
      {
        value: '99/100',
        label: { es: 'Rendimiento Lighthouse', en: 'Lighthouse Score' },
        detail: { es: '100% SEO técnico y accesibilidad AAA', en: '100% technical SEO and AAA accessibility' }
      },
      {
        value: '2 Idiomas',
        label: { es: 'Soporte Bilingüe Nativo', en: 'Native Bilingual i18n' },
        detail: { es: 'Rutas sincronizadas ES/EN sin recarga', en: 'Synchronized ES/EN routes with zero flash' }
      },
      {
        value: '100%',
        label: { es: 'Automatización de Leads', en: 'Lead Automation' },
        detail: { es: 'Notificación instantánea + email a prospecto', en: 'Instant notification + client confirmation' }
      }
    ],
    modules: [
      {
        index: '01',
        title: { es: 'Web Pública Bilingüe & Canvas UI', en: 'Bilingual Public Web & Canvas UI' },
        desc: {
          es: 'Sitio editorial de alta fidelidad con tipografía de precisión, galerías adaptables a pantalla completa y selector instantáneo de idioma ES/EN.',
          en: 'High-fidelity editorial site with precision typography, full-screen adaptive galleries, and zero-latency ES/EN language switching.'
        },
        specs: ['Next.js 15 App Router', 'Tailwind CSS', 'Geist UI', 'Framer Motion Physics']
      },
      {
        index: '02',
        title: { es: 'Portal Privado de Clientes & Pic-Time', en: 'Private Client Portal & Pic-Time' },
        desc: {
          es: 'Acceso seguro con token JWT para parejas y familias, con descarga directa de fotos en alta resolución y sincronización con Pic-Time.',
          en: 'Secure JWT token access for couples and families, offering high-res direct downloads and cloud gallery sync via Pic-Time.'
        },
        specs: ['JWT Authentication', 'Pic-Time API Integration', 'Token Rotation', 'Client Dashboard']
      },
      {
        index: '03',
        title: { es: 'Pipeline CRM de Cotizaciones & Leads', en: 'Inquiry & Lead CRM Pipeline' },
        desc: {
          es: 'Panel administrativo para clasificar prospectos (Nuevo → Contactado → Apartado → Entregado), calcular cotizaciones y consultar analíticas.',
          en: 'Admin panel to track lead stages (New → Contacted → Booked → Delivered), generate custom quotes, and review conversion metrics.'
        },
        specs: ['FastAPI Backend', 'MongoDB Beanie ODM', 'Stage Pipeline Kanban', 'Exportable Analytics']
      },
      {
        index: '04',
        title: { es: 'Automatizaciones de Email con Brevo', en: 'Email Automation with Brevo' },
        desc: {
          es: 'Plantillas transaccionales personalizadas que envían confirmación al cliente y alertan al equipo con métricas del evento en tiempo real.',
          en: 'Custom transactional email templates triggering client confirmations and instant photographer alerts with event specs.'
        },
        specs: ['Brevo REST API', 'Dynamic Webhooks', 'Event Payload Serialization']
      },
      {
        index: '05',
        title: { es: 'Seguridad & Protección en el Borde', en: 'Edge Security & Bot Shield' },
        desc: {
          es: 'Protección contra spam y ataques de fuerza bruta mediante Cloudflare Turnstile invisible y rate-limiting en el gateway de FastAPI.',
          en: 'Zero-friction bot prevention via invisible Cloudflare Turnstile and strict IP rate limiting on the FastAPI gateway.'
        },
        specs: ['Cloudflare Turnstile', 'Rate Limiting O(1)', 'HTTPS Strict Headers']
      }
    ],
    architectureLayers: [
      {
        layer: 'Frontend & UI Layer',
        title: { es: 'Next.js 15 + Tailwind CSS + Geist Typography', en: 'Next.js 15 + Tailwind CSS + Geist Typography' },
        techs: ['Next.js 15', 'React 19', 'TypeScript', 'Tailwind CSS', 'Turbopack'],
        description: {
          es: 'Arquitectura de componentes de servidor (RSC) para compilación estática instantánea y transiciones fluidas sin parpadeos.',
          en: 'React Server Components architecture for instant static rendering and zero-layout-shift client transitions.'
        }
      },
      {
        layer: 'API & Microservice Gateway',
        title: { es: 'FastAPI (Python) + Pydantic v2 Async API', en: 'FastAPI (Python) + Pydantic v2 Async API' },
        techs: ['Python 3.12', 'FastAPI', 'Pydantic v2', 'Beanie ODM', 'Docker Compose'],
        description: {
          es: 'Endpoints asíncronos con validación de esquemas estricta, enrutamiento tipado y manejo de webhooks.',
          en: 'Asynchronous endpoints with strict schema contracts, typed routing, and transactional webhook handling.'
        }
      },
      {
        layer: 'Data & Cloud Storage',
        title: { es: 'MongoDB Atlas + Cloudinary CDN + Pic-Time', en: 'MongoDB Atlas + Cloudinary CDN + Pic-Time' },
        techs: ['MongoDB Atlas', 'Cloudinary Asset CDN', 'Pic-Time API', 'AWS S3'],
        description: {
          es: 'Estructura de datos NoSQL con índices O(1) para consultas ultrarrápidas y almacenamiento de fotos de alta fidelidad.',
          en: 'NoSQL data structures indexed for O(1) query lookups and high-fidelity cloud photography assets.'
        }
      }
    ],
    testimonial: {
      quote: {
        es: 'AyeApps transformó por completo la presencia digital de mi negocio. El sistema que desarrollaron no solo es visualmente impresionante, sino que automatizó todo el flujo de clientes y entregas de galerías sin fallas.',
        en: 'AyeApps completely elevated the digital experience of my business. The custom platform they engineered is not only visually stunning, but seamlessly automated my entire client pipeline and gallery delivery without friction.'
      },
      author: 'Fátima Reséndiz',
      role: { es: 'Fotógrafa Profesional de Bodas · Querétaro, México', en: 'Professional Wedding Photographer · Querétaro, Mexico' }
    }
  },

  'aye-video-downloader': {
    slug: 'aye-video-downloader',
    title: 'Aye Video Downloader',
    clientName: 'AyeApps Proprietary Product',
    projectType: { es: 'Aplicación Nativa macOS, Transcodificador & Cloud Worker', en: 'Native macOS Application, Transcoder & Cloud Worker' },
    year: '2026',
    timeline: { es: 'Desarrollo Activo v2.0', en: 'Active Development v2.0' },
    role: { es: 'Arquitectura de Sistemas, Audio/Video DSP & Desarrollo Nativo Swift', en: 'Systems Architecture, Audio/Video DSP & Native Swift Dev' },
    githubUrl: 'https://github.com/alberto24dev/AyeVideoDownloader',
    heroTagline: {
      es: 'Motor de extracción y transcodificación multimedia con arquitectura dual de procesamiento local y workers en la nube.',
      en: 'High-throughput media extraction and transcoding engine featuring dual on-device and asynchronous cloud worker architecture.',
    },
    overview: {
      es: 'Aye Video Downloader es una herramienta de ingeniería pensada para creadores de contenido, archivistas y profesionales de audio/video. Permite extraer, transcodificar y guardar contenido en 4K UHD, 1080p60 y audio MP3 a 320 kbps con telemetría en tiempo real.',
      en: 'Aye Video Downloader is an engineered utility built for creators, archivists, and AV professionals. It enables high-throughput stream extraction, transcoding, and preservation in 4K UHD, 1080p60, and 320 kbps MP3 audio with live telemetry.',
    },
    challenge: {
      es: 'La mayoría de los descargadores existentes son aplicaciones web plagadas de publicidad invasiva o ejecutables pesados con interfaces torpes que saturan la CPU de macOS o no permiten procesar descargas en servidores remotos.',
      en: 'Most video downloading tools are ad-bloated web converters or clunky Electron wrappers that choke macOS CPU threads and lack headless remote server dispatch capabilities.',
    },
    solution: {
      es: 'Creamos un cliente nativo en Swift/SwiftUI para macOS que integra directamente el motor yt-dlp y FFmpeg con ejecución multiproceso. El usuario puede alternar con 1 clic entre procesamiento local en su Mac o delegar la tarea a un Cloud Worker en FastAPI que procesa y comprime en la nube.',
      en: 'We built a native Swift/SwiftUI client for macOS with direct yt-dlp and FFmpeg sub-process orchestration. Users can toggle between local on-device execution or dispatch heavy extraction jobs to an asynchronous FastAPI cloud worker cluster.',
    },
    metrics: [
      {
        value: '4K UHD',
        label: { es: 'Resolución Máxima', en: 'Max Resolution' },
        detail: { es: 'Multiplexación FFmpeg de streams AV independientes', en: 'FFmpeg stream muxing for separate audio/video' }
      },
      {
        value: '320 kbps',
        label: { es: 'Calidad de Audio', en: 'Audio Extraction' },
        detail: { es: 'Conversión directa a MP3/AAC de alta fidelidad', en: 'Direct high-fidelity MP3/AAC conversion' }
      },
      {
        value: 'Modo Dual',
        label: { es: 'Procesamiento Híbrido', en: 'Dual Architecture' },
        detail: { es: 'Ejecución Local en Mac o Cloud Worker en FastAPI', en: 'On-device macOS engine or remote FastAPI worker' }
      },
      {
        value: '< 50ms',
        label: { es: 'Respuesta UI Nativa', en: 'Native UI Response' },
        detail: { es: 'SwiftUI optimizado con Swift Concurrency async/await', en: 'SwiftUI optimized with async/await concurrency' }
      }
    ],
    modules: [
      {
        index: '01',
        title: { es: 'Cliente Nativo macOS (SwiftUI & AppKit)', en: 'Native macOS Client (SwiftUI & AppKit)' },
        desc: {
          es: 'Interfaz minimalista con estética Atelier y Cyber-Amber, selector de calidad de 1 toque, monitor de descargas y panel de configuración.',
          en: 'Minimalist Atelier and Cyber-Amber UI, single-tap quality picker, live download monitor, and native preferences pane.'
        },
        specs: ['Swift 6', 'SwiftUI', 'AppKit Integration', 'Swift Concurrency']
      },
      {
        index: '02',
        title: { es: 'Motor de Extracción yt-dlp & FFmpeg Muxing', en: 'yt-dlp Engine & FFmpeg Muxing' },
        desc: {
          es: 'Pipeline de multiplexación que descarga flujos de video y audio separados para ensamblar archivos MP4 y WebM sin pérdida de calidad.',
          en: 'Muxing pipeline capturing separated high-bitrate video and audio streams, assembling lossless MP4 and WebM containers.'
        },
        specs: ['yt-dlp Core', 'FFmpeg Transcoding', 'Subprocess Pipe Streaming']
      },
      {
        index: '03',
        title: { es: 'Cloud Worker API Asíncrono (FastAPI)', en: 'Async Cloud Worker API (FastAPI)' },
        desc: {
          es: 'Backend en Python con FastAPI y colas asíncronas para delegar descargas pesadas a servidores remotos con almacenamiento temporal.',
          en: 'Python FastAPI backend with async task queues for offloading large batch downloads to remote cloud servers.'
        },
        specs: ['Python 3.12', 'FastAPI', 'AsyncIO Task Queue', 'Docker Container']
      },
      {
        index: '04',
        title: { es: 'Telemetría & Progreso en Tiempo Real', en: 'Real-Time Throughput Telemetry' },
        desc: {
          es: 'Cálculo de velocidad de descarga (MB/s), tiempo estimado de finalización (ETA) y porcentaje de transcodificación con barras animadas.',
          en: 'Live transfer speed calculation (MB/s), estimated completion time (ETA), and transcoding progress bars.'
        },
        specs: ['Regex stdout parser', 'Published Combine stream', 'Live HUD metrics']
      }
    ],
    architectureLayers: [
      {
        layer: 'Native Desktop Layer',
        title: { es: 'SwiftUI Client + AppKit Native Windowing', en: 'SwiftUI Client + AppKit Native Windowing' },
        techs: ['Swift 6', 'SwiftUI', 'macOS AppKit', 'Combine'],
        description: {
          es: 'Cliente ligero con consumo mínimo de memoria RAM y rendimiento garantizado a 60fps.',
          en: 'Lightweight desktop client with minimal RAM footprint and guaranteed 60fps rendering.'
        }
      },
      {
        layer: 'Media Processing Core',
        title: { es: 'yt-dlp Engine + FFmpeg Video/Audio Pipeline', en: 'yt-dlp Engine + FFmpeg Video/Audio Pipeline' },
        techs: ['FFmpeg 7.0', 'yt-dlp', 'Subprocess Pipes', 'Process Isolation'],
        description: {
          es: 'Ensamblado de streams 4K (video codec AV1 / VP9 + audio Opus/AAC) en contenedor MP4 final.',
          en: '4K stream assembly (AV1 / VP9 video codecs + Opus/AAC audio) into final container.'
        }
      },
      {
        layer: 'Cloud Worker & API Gateway',
        title: { es: 'Python FastAPI Async Microservice', en: 'Python FastAPI Async Microservice' },
        techs: ['Python 3.12', 'FastAPI', 'Docker', 'Asyncio Worker Queue'],
        description: {
          es: 'Servicio contenerizado que procesa descargas en servidores remotos para usuarios que prefieren no consumir ancho de banda local.',
          en: 'Containerized service processing remote downloads for users offloading local bandwidth.'
        }
      }
    ]
  }
}
