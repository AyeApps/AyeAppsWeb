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
    projectType: { es: 'Plataforma Web Bilingüe, CMS Canvas & App Móvil', en: 'Bilingual Web Platform, Canvas CMS & Mobile App' },
    year: '2026',
    timeline: { es: '6 meses (Conceptualización, MVP, Search Indexing & Lanzamiento)', en: '6 months (Discovery, MVP, Search Indexing & Launch)' },
    role: { es: 'Arquitectura de Software, UI/UX & Desarrollo Full Stack', en: 'Software Architecture, UI/UX & Full Stack Dev' },
    liveUrl: 'https://fatimaresendiz.com',
    heroTagline: {
      es: 'Un sistema operativo integral en la nube que automatizó la captación, reservas y entrega de galerías, permitiendo a Fátima enfocarse en su arte fotográfico.',
      en: 'A complete cloud operating system automating client intake, real-time booking, and gallery delivery—freeing Fátima to focus on her photographic craft.',
    },
    overview: {
      es: 'Fatima Resendiz Web es una plataforma integral construida totalmente en la nube con tecnologías de punta y velocidad casi instantánea. Transforma una operación que antes se llevaba de forma manual a través de mensajes de Instagram y WhatsApp en una experiencia de marca de alto prestigio con panel de administración autónomo.',
      en: 'Fatima Resendiz Web is an end-to-end cloud platform engineered with bleeding-edge technologies and near-instant load speeds. It transitions what was previously a manual Instagram/WhatsApp messaging workflow into a high-prestige brand experience powered by an autonomous admin control panel.',
    },
    challenge: {
      es: 'Fátima llevaba todo su negocio de forma manual: recibía prospectos por Instagram, los pasaba a su WhatsApp personal y registraba las fechas una por una en Google Calendar. Además de fotografiar y editar sesiones (lo cual debía ser su principal enfoque y pasión), tenía que negociar, dar seguimiento a prospectos y gestionar entregas manualmente.',
      en: 'Fátima ran her entire client pipeline by hand: fielding inquiries on Instagram, redirecting them to personal WhatsApp, and manually entering dates into Google Calendar. On top of shooting and editing sessions (which should be her primary creative focus), she was burdened with manual scheduling, quoting, and client tracking.',
    },
    solution: {
      es: 'Diseñamos y construimos una plataforma completa en la nube con Next.js 15 y FastAPI. El sistema cuenta con un Canvas editorial interactivo editable sin tocar código, verificación instantánea de disponibilidad para bodas y sesiones de temporada, y un panel de administración privado desde el cual Fátima gestiona imágenes, videos, prospectos y contenidos desde su smartphone o laptop.',
      en: 'We architected and built a custom cloud ecosystem using Next.js 15 and FastAPI. The system features a zero-code interactive Canvas editor, real-time date availability checks for weddings and seasonal mini-sessions, and an autonomous private admin panel enabling Fátima to manage assets, leads, and seasonal campaigns directly from her smartphone or laptop.',
    },
    metrics: [
      {
        value: '< 1.1s',
        label: { es: 'Velocidad de Carga', en: 'Edge Load Speed' },
        detail: { es: 'Rendimiento casi instantáneo en Cloudflare CDN', en: 'Near-instant response on Cloudflare CDN' }
      },
      {
        value: '100% Sin Código',
        label: { es: 'Autonomía de Contenido', en: 'Zero-Code CMS' },
        detail: { es: 'Canvas, bodas y temporadas editables en vivo', en: 'Live editable Canvas, weddings & seasons' }
      },
      {
        value: 'Disponibilidad Real',
        label: { es: 'Verificación Instantánea', en: 'Instant Booking' },
        detail: { es: 'Comprobación de fechas sin fricción manual', en: 'Automated calendar slots validation' }
      },
      {
        value: 'Google Indexed',
        label: { es: 'Indexación & Analítica', en: 'Search & Analytics' },
        detail: { es: 'Optimización SEO y Google Analytics integrado', en: 'Technical SEO and Google Analytics suite' }
      }
    ],
    modules: [
      {
        index: '01',
        title: { es: 'Home con Canvas Totalmente Editable Sin Código', en: 'Zero-Code Interactive Canvas Home' },
        desc: {
          es: 'Galería editorial interactiva donde Fátima puede cambiar fotos, videos, dimensiones y orientación a su gusto sin requerir intervención técnica.',
          en: 'Interactive editorial gallery canvas where Fátima can freely swap photos, videos, aspect ratios, and layouts without touching code.'
        },
        specs: ['Next.js 15 App Router', 'Tailwind CSS', 'Geist UI', 'Dynamic Aspect Ratio Engine']
      },
      {
        index: '02',
        title: { es: 'Panel de Administración Privado (La Magia del Sistema)', en: 'Private Admin Control Center' },
        desc: {
          es: 'Panel seguro y responsivo desde el cual Fátima controla cualquier aspecto de su web: publicar sesiones de temporada, añadir nuevas bodas y gestionar todos sus prospectos.',
          en: 'Secure, mobile-ready admin dashboard allowing Fátima to configure every web element: seasonal sessions, new wedding stories, and lead pipeline tracking.'
        },
        specs: ['FastAPI Backend', 'MongoDB Beanie ODM', 'JWT Session Management', 'Mobile-Friendly Admin UI']
      },
      {
        index: '03',
        title: { es: 'Módulo de Contacto & Disponibilidad al Instante', en: 'Real-Time Availability & Booking Module' },
        desc: {
          es: 'Permite a los clientes consultar fechas disponibles al instante tanto para coberturas de bodas como para sesiones especiales de temporada.',
          en: 'Enables prospective couples and families to check real-time date availability for wedding coverage and seasonal mini-sessions.'
        },
        specs: ['Real-Time Slot Engine', 'Seasonal Calendar Rules', 'Lead Data Sanitization']
      },
      {
        index: '04',
        title: { es: 'Sección About & Portafolio de Bodas', en: 'About Storytelling & Wedding Portfolio' },
        desc: {
          es: 'Espacio editorial diseñado para transmitir la visión artística y filosofía de Fátima, con portafolio estructurado y categorizado.',
          en: 'Editorial showcase communicating Fátima’s artistic vision, coupled with structured, high-resolution wedding galleries.'
        },
        specs: ['Editorial Typography', 'Responsive High-Res Grid', 'Storytelling Hierarchy']
      },
      {
        index: '05',
        title: { es: 'Indexación en Google Search & Analítica', en: 'Google Search Indexing & Analytics' },
        desc: {
          es: 'Configuración técnica profunda en Google Search Console y Google Analytics para posicionamiento orgánico en el mercado de bodas destino.',
          en: 'Comprehensive Google Search Console indexing and Google Analytics integration for organic capture in destination wedding searches.'
        },
        specs: ['Google Search Console', 'Google Analytics 4', 'Schema.org Metadata', 'Sitemap XML Automation']
      }
    ],
    architectureLayers: [
      {
        layer: 'Frontend & UI Layer',
        title: { es: 'Next.js 15 + Tailwind CSS + Geist Typography', en: 'Next.js 15 + Tailwind CSS + Geist Typography' },
        techs: ['Next.js 15', 'React 19', 'TypeScript', 'Tailwind CSS', 'Turbopack'],
        description: {
          es: 'Arquitectura de Server Components y Static Site Generation para máxima velocidad y navegación fluida sin recargas.',
          en: 'React Server Components and Static Site Generation architecture ensuring lightning-fast load times.'
        }
      },
      {
        layer: 'API & Microservice Gateway',
        title: { es: 'FastAPI (Python) + MongoDB Atlas (Beanie ODM)', en: 'FastAPI (Python) + MongoDB Atlas (Beanie ODM)' },
        techs: ['Python 3.12', 'FastAPI', 'Pydantic v2', 'Beanie ODM', 'Docker'],
        description: {
          es: 'Backend asíncrono que alimenta el panel de administración, gestiona el estado de prospectos y valida las reglas de disponibilidad.',
          en: 'Asynchronous backend powering the admin CMS, managing lead lifecycles, and validating calendar slot constraints.'
        }
      },
      {
        layer: 'Cloud Edge & Observability',
        title: { es: 'Cloudflare Edge CDN + Google Analytics 4', en: 'Cloudflare Edge CDN + Google Analytics 4' },
        techs: ['Cloudflare Edge', 'Google Analytics 4', 'Google Search Console', 'Cloudflare Turnstile'],
        description: {
          es: 'Distribución global con protección contra spam y telemetría de tráfico en tiempo real.',
          en: 'Global edge distribution paired with bot protection and real-time visitor telemetry.'
        }
      }
    ],
    testimonial: {
      quote: {
        es: 'El sistema transformó mi día a día por completo. Ahora no tengo que preocuparme por registrar manualmente cada mensaje de WhatsApp o Instagram; mis clientes comprueban disponibilidad de inmediato y yo puedo dedicarme a lo que realmente amo: mis fotos.',
        en: 'The system completely transformed my day-to-day operations. I no longer have to manually track every Instagram DM or WhatsApp message; my clients check availability instantly and I can focus on what I love most: my photography.'
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
