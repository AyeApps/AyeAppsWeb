export interface CaseStudyModule {
  index: string
  title: { es: string; en: string }
  descBusiness: { es: string; en: string }
  descTech: { es: string; en: string }
  businessBenefit: { es: string; en: string }
  specs: string[]
}

export interface CaseStudyMetric {
  value: string
  labelBusiness: { es: string; en: string }
  labelTech: { es: string; en: string }
  detailBusiness: { es: string; en: string }
  detailTech: { es: string; en: string }
}

export interface CaseStudyData {
  slug: string
  title: string
  clientName: string
  projectTypeBusiness: { es: string; en: string }
  projectTypeTech: { es: string; en: string }
  year: string
  timeline: { es: string; en: string }
  roleBusiness: { es: string; en: string }
  roleTech: { es: string; en: string }
  liveUrl?: string
  githubUrl?: string
  heroTaglineBusiness: { es: string; en: string }
  heroTaglineTech: { es: string; en: string }
  techBadge?: { es: string; en: string }
  overviewBusiness: { es: string; en: string }
  overviewTech: { es: string; en: string }
  challengeBusiness: { es: string; en: string }
  challengeTech: { es: string; en: string }
  solutionBusiness: { es: string; en: string }
  solutionTech: { es: string; en: string }
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
    title: 'Fatima Resendiz Web',
    clientName: 'Fátima Reséndiz',
    projectTypeBusiness: {
      es: 'Plataforma Web de Prestigio, Gestión de Clientes & App Móvil',
      en: 'Bespoke Brand Platform, Client Management & Mobile Experience'
    },
    projectTypeTech: {
      es: 'Monorepo Next.js 15, FastAPI Async, Beanie ODM & Cloudflare Edge',
      en: 'Next.js 15 Monorepo, Async FastAPI, Beanie ODM & Cloudflare Edge'
    },
    year: '2026',
    timeline: {
      es: '6 meses (Conceptualización, MVP, Aprobación, Search Indexing & Capacitación)',
      en: '6 months (Discovery, MVP, Approval, Search Indexing & Handover)'
    },
    roleBusiness: {
      es: 'Dirección de Proyecto, Diseño UI/UX y Desarrollo Integral',
      en: 'Project Direction, UI/UX Design & Full-Scale Engineering'
    },
    roleTech: {
      es: 'Arquitectura de Software, API Gateway & Full Stack Engineering',
      en: 'Software Architecture, API Gateway & Full Stack Engineering'
    },
    liveUrl: 'https://fatimaresendiz.com',
    heroTaglineBusiness: {
      es: 'Un sistema digital completo que agilizó su operación y optimizó sus tiempos de gestión, permitiendo a Fátima destinar más tiempo a lo que realmente importa: su fotografía y la atención a sus clientes.',
      en: 'A complete digital platform that streamlined operations and optimized management time, allowing Fátima to dedicate more time to what truly matters: her photography and client experience.'
    },
    heroTaglineTech: {
      es: 'Monorepo en la nube con Next.js 15 (ISR / Server Components) y FastAPI asíncrono para gestión de contenidos sin código y reserva en tiempo real.',
      en: 'Cloud monorepo powered by Next.js 15 (ISR / Server Components) and async FastAPI for zero-code CMS and real-time slot scheduling.'
    },
    techBadge: {
      es: 'CLOUD DISTRIBUTED ARCHITECTURE',
      en: 'CLOUD DISTRIBUTED ARCHITECTURE'
    },
    overviewBusiness: {
      es: 'Fatima Resendiz Web fue creada para transformar una operación que antes dependía de mensajes dispersos en una experiencia fluida y de alto nivel. Ahora, sus clientes exploran su portafolio, comprueban fechas disponibles al instante y disfrutan de una experiencia premium desde cualquier dispositivo.',
      en: 'Fatima Resendiz Web was built to elevate what used to be a fragmented messaging workflow into a seamless, high-end brand experience. Prospective clients can effortlessly explore her portfolio, check date availability in real time, and enjoy a luxury client experience on any device.'
    },
    overviewTech: {
      es: 'Plataforma distribuida en la nube con frontend estático en Next.js 15 desplegado en Cloudflare Edge CDN y backend asíncrono en Python 3.12 / FastAPI con persistencia en MongoDB Atlas. Integra un motor de canvas dinámico con ratios de aspecto fluidos y autenticación segura para el panel administrativo.',
      en: 'Distributed cloud architecture featuring a static Next.js 15 frontend deployed on Cloudflare Edge CDN and an asynchronous Python 3.12 / FastAPI backend with MongoDB Atlas persistence. Implements a dynamic zero-code canvas rendering engine with fluid aspect ratios and JWT session security.'
    },
    challengeBusiness: {
      es: 'Fátima gestionaba todo su negocio de forma manual: recibía mensajes en Instagram, los pasaba a su WhatsApp personal y anotaba las fechas una por una en calendarios. Además de tomar fotos y editarlas (lo que realmente genera valor y hace felices a sus clientes), perdía horas todos los días atendiendo cotizaciones, revisando disponibilidad y enviando información repetitiva.',
      en: 'Fátima managed her entire business by hand: answering inquiries on Instagram DMs, transferring conversations to personal WhatsApp, and manually jotting down bookings on calendars. Beyond shooting and editing sessions (her true core craft), she was losing critical hours every day manually drafting quotes, confirming schedules, and sending repetitive emails.'
    },
    challengeTech: {
      es: 'La arquitectura previa carecía de unificación de datos. No existía una fuente única de verdad para el pipeline de prospectos, las fechas se registraban sin validación de concurrencia y la carga de imágenes en alta resolución provocaba retrasos significativos en conexiones móviles debido a la ausencia de compresión en el borde.',
      en: 'The previous setup lacked data centralisation. There was no single source of truth for the inquiry pipeline, bookings lacked concurrent slot locking, and high-resolution wedding photography caused severe bandwidth degradation on mobile viewports due to lack of edge compression pipelines.'
    },
    solutionBusiness: {
      es: 'Construimos una plataforma web propia y un panel de administración privado donde Fátima tiene el control total sin depender de programadores. Puede cambiar fotos y videos del Home arrastrando elementos, publicar promociones de temporada, revisar prospectos y comprobar disponibilidad en tiempo real, brindando a sus clientes una experiencia impecable.',
      en: 'We built a bespoke web platform paired with a private, intuitive admin dashboard where Fátima holds complete control without needing a developer. She can update homepage photos and videos effortlessly, launch seasonal sessions, track inquiries, and offer instant availability checks to couples.'
    },
    solutionTech: {
      es: 'Desarrollamos una solución de monorepo con Server Components (RSC) y Static Site Generation para tiempos de carga inferiores a 1.1s. Implementamos un backend en FastAPI con Beanie ODM sobre MongoDB Atlas, endpoints de disponibilidad con índices O(1), analítica integrada con Google Search Console y protección en el borde con Cloudflare Turnstile.',
      en: 'We engineered a monorepo solution utilizing React Server Components (RSC) and Static Site Generation for sub-1.1s global load times. Backed by a FastAPI async engine with Beanie ODM on MongoDB Atlas, O(1) indexed availability checks, Google Search Console structured metadata, and Cloudflare Turnstile protection.'
    },
    metrics: [
      {
        value: '< 1.1s',
        labelBusiness: { es: 'Carga Ultrarrápida', en: 'Ultra-Fast Load' },
        labelTech: { es: 'Edge LCP Benchmark', en: 'Edge LCP Benchmark' },
        detailBusiness: { es: 'Navegación instantánea en cualquier smartphone o red móvil.', en: 'Instant browsing speed on any mobile device.' },
        detailTech: { es: 'Renderizado SSG + Cloudflare Edge Caching global.', en: 'SSG pre-rendering + Cloudflare Edge caching.' }
      },
      {
        value: '100%',
        labelBusiness: { es: 'Gestión Autónoma', en: 'Zero-Code Freedom' },
        labelTech: { es: 'Headless Canvas CMS', en: 'Headless Canvas CMS' },
        detailBusiness: { es: 'Fátima actualiza fotos, videos y bodas sin programar.', en: 'Update photos, videos & stories with zero code.' },
        detailTech: { es: 'Esquemas Pydantic v2 con validación estricta.', en: 'Pydantic v2 schemas + strict API validation.' }
      },
      {
        value: '24/7',
        labelBusiness: { es: 'Reserva Inmediata', en: 'Instant Date Checker' },
        labelTech: { es: 'Slot Concurrency Engine', en: 'Slot Concurrency Engine' },
        detailBusiness: { es: 'Las parejas comprueban fechas disponibles al instante.', en: 'Couples instantly check open calendar dates.' },
        detailTech: { es: 'Consultas O(1) indexadas sobre MongoDB Atlas.', en: 'MongoDB Atlas indexed slot queries.' }
      },
      {
        value: 'Top 1',
        labelBusiness: { es: 'Alcance en Google', en: 'Google Search Authority' },
        labelTech: { es: 'SEO Técnico & GA4', en: 'Technical SEO & GA4' },
        detailBusiness: { es: 'Lista para atraer bodas destino en México y el mundo.', en: 'Ranked to capture destination wedding couples.' },
        detailTech: { es: 'Indexación Search Console + JSON-LD Schema Graphs.', en: 'Search Console JSON-LD + GA4 Event Stream.' }
      }
    ],
    modules: [
      {
        index: '01',
        title: {
          es: 'Home con Canvas Totalmente Editable Sin Código',
          en: 'Zero-Code Interactive Editorial Canvas'
        },
        descBusiness: {
          es: 'Galería de portada dinámica donde Fátima puede cambiar fotos, videos, tamaños y posiciones a su gusto en segundos, manteniendo la web siempre fresca y actualizada.',
          en: 'A dynamic homepage gallery where Fátima can freely swap photos, videos, dimensions, and visual arrangements in seconds, keeping her brand fresh without technical assistance.'
        },
        descTech: {
          es: 'Motor de layout reactivo basado en CSS Grid y Server Components que procesa metadatos de medios dinámicos (aspect ratios, miniaturas optimizadas) guardados en base de datos.',
          en: 'Reactive layout engine built with CSS Grid and Server Components that resolves media metadata (aspect ratios, optimized previews) stored in MongoDB.'
        },
        businessBenefit: {
          es: 'Libertad absoluta para actualizar su portafolio sin pagar a terceros.',
          en: 'Total freedom to refresh her visual brand without ongoing developer costs.'
        },
        specs: ['Next.js 15 RSC', 'Tailwind CSS v4', 'Geist UI', 'Dynamic Aspect Ratios']
      },
      {
        index: '02',
        title: {
          es: 'Panel de Administración Privado (La Magia del Sistema)',
          en: 'Private Autonomous Admin Dashboard'
        },
        descBusiness: {
          es: 'Un centro de control privado y fácil de usar desde el celular o laptop. Permite a Fátima publicar sesiones de temporada, agregar nuevas bodas y consultar todos los mensajes recibidos.',
          en: 'An intuitive, mobile-friendly command center. Enables Fátima to launch seasonal campaigns, showcase new wedding stories, and review client inquiries on the go.'
        },
        descTech: {
          es: 'Dashboard administrativo protegido mediante tokens JWT con rotación segura, conectado a endpoints asíncronos en FastAPI con ODM Beanie para persistencia estructurada.',
          en: 'Administrative dashboard authenticated via rotating JWT sessions, communicating with async FastAPI endpoints and Beanie ODM for structured persistence.'
        },
        businessBenefit: {
          es: 'Control total de su negocio desde cualquier lugar.',
          en: 'Complete business management from smartphone or laptop.'
        },
        specs: ['FastAPI Async', 'MongoDB Atlas', 'JWT Auth Rotation', 'Mobile Admin UI']
      },
      {
        index: '03',
        title: {
          es: 'Módulo de Contacto & Disponibilidad al Instante',
          en: 'Real-Time Availability & Instant Inquiry Engine'
        },
        descBusiness: {
          es: 'Permite a los prospectos consultar si su fecha está disponible antes de enviar su solicitud. Reduce preguntas repetitivas y filtra automáticamente las consultas.',
          en: 'Allows couples to verify if their wedding date is open before submitting their inquiry. Eliminates back-and-forth messaging and pre-qualifies incoming leads.'
        },
        descTech: {
          es: 'Motor de validación de fechas en tiempo real con reglas de bloqueo estacional, sanitización estricta de entradas y disparadores de notificación instantánea.',
          en: 'Real-time date validation engine with seasonal rules, strict payload sanitization, and automated notification triggers.'
        },
        businessBenefit: {
          es: 'Ahorro de horas semanales en responder mensajes de disponibilidad.',
          en: 'Saves hours weekly by automating date inquiry checks.'
        },
        specs: ['Real-Time Slot Engine', 'Seasonal Calendar Rules', 'Sanitized Lead Payloads']
      },
      {
        index: '04',
        title: {
          es: 'Sección About & Portafolio de Bodas',
          en: 'Artist Storytelling & Wedding Showcase'
        },
        descBusiness: {
          es: 'Diseño editorial de alta costura que transmite la visión artística de Fátima, generando confianza inmediata en parejas que buscan fotografía de alta gama.',
          en: 'Couture editorial layout communicating Fátima’s artistic vision, building immediate authority and trust with couples looking for luxury photography.'
        },
        descTech: {
          es: 'Composición visual con tipografía Geist y espaciado arquitectónico, optimizada con carga perezosa de imágenes de alta fidelidad y atributos accesibles ARIA.',
          en: 'Architectural layout powered by Geist typography, high-density responsive image sets, and full semantic WCAG AAA markup.'
        },
        businessBenefit: {
          es: 'Proyecta una imagen de prestigio que justifica tarifas premium.',
          en: 'Projects high-prestige authority that commands premium rates.'
        },
        specs: ['Geist Sans / Mono', 'High-Res Responsive srcset', 'WCAG AAA Semantics']
      },
      {
        index: '05',
        title: {
          es: 'Indexación en Google Search & Analítica',
          en: 'Google Search Indexing & Telemetry'
        },
        descBusiness: {
          es: 'La página está optimizada para que parejas buscando fotografía de bodas en Querétaro y destinos turísticos encuentren a Fátima fácilmente en los primeros resultados de Google.',
          en: 'The website is technically indexed so couples searching for destination wedding photography in Mexico find Fátima naturally on Google.'
        },
        descTech: {
          es: 'Estructuración Schema.org JSON-LD (LocalBusiness, Photographer), mapas de sitio XML automatizados, metaetiquetas OpenGraph y telemetría de eventos con Google Analytics 4.',
          en: 'Schema.org JSON-LD structured data (LocalBusiness, Photographer), automated XML sitemaps, OpenGraph metadata, and GA4 event tracking.'
        },
        businessBenefit: {
          es: 'Atracción continua de prospectos orgánicos sin pagar publicidad.',
          en: 'Continuous stream of organic inquiries without ongoing ad spend.'
        },
        specs: ['Google Search Console', 'Google Analytics 4', 'Schema.org JSON-LD', 'Automated Sitemaps']
      }
    ],
    architectureLayers: [
      {
        layer: 'Frontend & UI Layer',
        title: {
          es: 'Next.js 15 + Tailwind CSS + Geist Typography',
          en: 'Next.js 15 + Tailwind CSS + Geist Typography'
        },
        techs: ['Next.js 15', 'React 19', 'TypeScript', 'Tailwind CSS', 'Turbopack'],
        description: {
          es: 'Arquitectura de Server Components y Static Site Generation para máxima velocidad y navegación fluida sin recargas.',
          en: 'React Server Components and Static Site Generation architecture ensuring lightning-fast load times.'
        }
      },
      {
        layer: 'API & Microservice Gateway',
        title: {
          es: 'FastAPI (Python) + MongoDB Atlas (Beanie ODM)',
          en: 'FastAPI (Python) + MongoDB Atlas (Beanie ODM)'
        },
        techs: ['Python 3.12', 'FastAPI', 'Pydantic v2', 'Beanie ODM', 'Docker'],
        description: {
          es: 'Backend asíncrono que alimenta el panel de administración, gestiona el estado de prospectos y valida las reglas de disponibilidad.',
          en: 'Asynchronous backend powering the admin CMS, managing lead lifecycles, and validating calendar slot constraints.'
        }
      },
      {
        layer: 'Cloud Edge & Observability',
        title: {
          es: 'Cloudflare Edge CDN + Google Analytics 4',
          en: 'Cloudflare Edge CDN + Google Analytics 4'
        },
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
      role: {
        es: 'Fotógrafa Profesional de Bodas · Querétaro, México',
        en: 'Professional Wedding Photographer · Querétaro, Mexico'
      }
    }
  },

  'aye-video-downloader': {
    slug: 'aye-video-downloader',
    title: 'Aye Video Downloader',
    clientName: 'AyeApps Proprietary Product',
    projectTypeBusiness: {
      es: 'Herramienta de Extracción Multimedia en Alta Resolución',
      en: 'High-Fidelity Media Extraction & Processing Utility'
    },
    projectTypeTech: {
      es: 'Aplicación Nativa macOS (SwiftUI), Transcodificador FFmpeg & Cloud Worker',
      en: 'Native macOS Application (SwiftUI), FFmpeg Transcoder & Cloud Worker'
    },
    year: '2026',
    timeline: {
      es: 'Desarrollo Activo v2.0',
      en: 'Active Engineering v2.0'
    },
    roleBusiness: {
      es: 'Diseño de Producto, Interfaz Nativa & Experiencia de Usuario',
      en: 'Product Design, Native Interface & User Experience'
    },
    roleTech: {
      es: 'Arquitectura de Sistemas, Audio/Video DSP & Desarrollo Nativo Swift',
      en: 'Systems Architecture, Audio/Video DSP & Native Swift Dev'
    },
    githubUrl: 'https://github.com/alberto24dev/AyeVideoDownloader',
    heroTaglineBusiness: {
      es: 'Una aplicación limpia, rápida y sin anuncios para descargar videos en 4K y música en máxima calidad con 1 solo clic.',
      en: 'A clean, blazingly fast, ad-free application to download 4K videos and crystal-clear audio with a single click.'
    },
    heroTaglineTech: {
      es: 'Motor de extracción y transcodificación multimedia con arquitectura dual de procesamiento local y workers en la nube.',
      en: 'High-throughput media extraction and transcoding engine featuring dual on-device and asynchronous cloud worker architecture.'
    },
    overviewBusiness: {
      es: 'Aye Video Downloader nace para solucionar la molesta experiencia de las páginas web llenas de publicidad y virus. Es una herramienta nativa para Mac que permite guardar videos de YouTube, Instagram y otras plataformas en calidad 4K UHD o extraer canciones en MP3 con máxima fidelidad.',
      en: 'Aye Video Downloader was created to eliminate the frustration of ad-infested, malware-ridden converter websites. It is a sleek native Mac app allowing users to save YouTube, Instagram, and web videos in pristine 4K UHD or extract 320 kbps MP3 audio instantly.'
    },
    overviewTech: {
      es: 'Herramienta de ingeniería construida en Swift 6 y SwiftUI para macOS que orquesta procesos de bajo nivel con yt-dlp y FFmpeg. Soporta ejecución local directa o delegación asíncrona a un cluster de workers en FastAPI.',
      en: 'Engineered utility built with Swift 6 and SwiftUI for macOS orchestrating low-level yt-dlp and FFmpeg subprocesses. Supports direct on-device execution or asynchronous dispatch to a FastAPI worker cluster.'
    },
    challengeBusiness: {
      es: 'Bajar un video o audio de internet hoy en día suele implicar navegar páginas llenas de anuncios sospechosos, botones engañosos de descarga y programas lentos que sobrecalientan la computadora.',
      en: 'Downloading a video or audio file from the web often forces users into dangerous websites with deceptive ads, fake download buttons, and bloated apps that overheat the computer.'
    },
    challengeTech: {
      es: 'La mayoría de herramientas web son wrappers de Electron pesados que saturan la memoria RAM o no multiplexan adecuadamente flujos de audio y video separados en resoluciones 4K.',
      en: 'Most downloadable utilities are bloated Electron wrappers that consume gigabytes of RAM and fail to properly multiplex high-bitrate separated audio/video streams in 4K resolutions.'
    },
    solutionBusiness: {
      es: 'Diseñamos una aplicación minimalista y ligera para Mac con estética de Atelier. Solo pegas el enlace, seleccionas la calidad (4K, 1080p o Audio MP3) y obtienes tu archivo limpio en segundos, sin anuncios y con total privacidad.',
      en: 'We designed a minimalist, lightweight native Mac application. Just paste the link, choose your desired quality (4K, 1080p, or MP3 Audio), and get your clean file in seconds—ad-free and completely private.'
    },
    solutionTech: {
      es: 'Creamos un cliente nativo en SwiftUI con Swift Concurrency y arquitectura dual: motor local con tuberías de procesos FFmpeg, o dispatch asíncrono a Cloud Workers en FastAPI para no consumir CPU local.',
      en: 'We built a native SwiftUI client utilizing Swift Concurrency and dual-mode execution: an on-device engine with direct FFmpeg subprocess pipes, or asynchronous cloud dispatch via FastAPI workers.'
    },
    metrics: [
      {
        value: '4K UHD',
        labelBusiness: { es: 'Calidad Máxima', en: 'Pristine Quality' },
        labelTech: { es: 'Muxing de Streams', en: 'FFmpeg Muxing' },
        detailBusiness: { es: 'Videos nítidos sin pérdida de resolución', en: 'Crisp video files with zero compression loss' },
        detailTech: { es: 'Multiplexación AV1 / VP9 + Opus/AAC', en: 'Lossless AV1 / VP9 + Opus/AAC assembly' }
      },
      {
        value: '320 kbps',
        labelBusiness: { es: 'Audio de Alta Fidelidad', en: 'Crystal-Clear Audio' },
        labelTech: { es: 'Extracción de Bitrate', en: 'Bitrate Extraction' },
        detailBusiness: { es: 'Música limpia lista para escuchar', en: 'Pristine audio files ready for playback' },
        detailTech: { es: 'Conversión directa MP3/AAC 320k', en: 'Direct 320k MP3/AAC transcode' }
      },
      {
        value: '0 Anuncios',
        labelBusiness: { es: '100% Privado y Seguro', en: '100% Private & Ad-Free' },
        labelTech: { es: 'Ejecución Aislada', en: 'Isolated Sandboxing' },
        detailBusiness: { es: 'Sin publicidad engañosa ni software basura', en: 'Zero bloatware, popups, or tracking' },
        detailTech: { es: 'Procesos locales seguros y directos', en: 'Secure subprocess pipe isolation' }
      },
      {
        value: '< 50ms',
        labelBusiness: { es: 'Respuesta Instantánea', en: 'Instant Response' },
        labelTech: { es: 'Latencia UI SwiftUI', en: 'SwiftUI Frame Budget' },
        detailBusiness: { es: 'App ultra ligera construida para Mac', en: 'Ultra-lightweight native Mac software' },
        detailTech: { es: 'Swift 6 Async/Await a 60fps constantes', en: 'Swift 6 Async/Await at 60fps' }
      }
    ],
    modules: [
      {
        index: '01',
        title: {
          es: 'Cliente Nativo macOS (SwiftUI & AppKit)',
          en: 'Native macOS Client (SwiftUI & AppKit)'
        },
        descBusiness: {
          es: 'Una aplicación elegante que se integra perfectamente con macOS. Permite pegar enlaces con 1 clic, elegir calidad y ver el progreso en tiempo real.',
          en: 'An elegant application tailored for macOS. Lets you paste links with one click, select output quality, and monitor download progress in real time.'
        },
        descTech: {
          es: 'Interfaz declarativa en SwiftUI 6 con patrones MVVM, suscripciones Combine para telemetría de tasa de transferencia y manejo nativo de ventanas AppKit.',
          en: 'Declarative SwiftUI 6 interface following strict MVVM patterns, Combine publishers for throughput telemetry, and AppKit window management.'
        },
        businessBenefit: {
          es: 'Experiencia rápida y natural sin consumir recursos innecesarios.',
          en: 'Lightning-fast native experience with minimal system footprint.'
        },
        specs: ['Swift 6', 'SwiftUI', 'AppKit Integration', 'Swift Concurrency']
      },
      {
        index: '02',
        title: {
          es: 'Motor de Extracción y Conversión Directa',
          en: 'Direct Media Extraction & Transcoding Engine'
        },
        descBusiness: {
          es: 'Ensambla de forma automática la mejor pista de video y la mejor pista de audio para entregarte un archivo perfecto y compatible con cualquier reproductor.',
          en: 'Automatically captures and merges the highest-quality video and audio streams into a universal file compatible with any player.'
        },
        descTech: {
          es: 'Pipeline de multiplexación que descarga flujos de video y audio separados para ensamblar archivos MP4 y WebM sin pérdida de calidad.',
          en: 'Muxing pipeline capturing separated high-bitrate video and audio streams, assembling lossless MP4 and WebM containers.'
        },
        businessBenefit: {
          es: 'Archivos listos para reproducir o editar sin conversiones extra.',
          en: 'Ready-to-play files without needing extra conversion tools.'
        },
        specs: ['yt-dlp Core', 'FFmpeg Transcoding', 'Subprocess Pipe Streaming']
      },
      {
        index: '03',
        title: {
          es: 'Modo Dual: Procesamiento en Mac o en la Nube',
          en: 'Dual Architecture: Local Engine or Cloud Worker'
        },
        descBusiness: {
          es: 'Puedes procesar descargas directamente en tu computadora o enviarlas a un servidor en la nube para no gastar el internet ni la batería de tu Mac.',
          en: 'You can process downloads directly on your Mac or delegate heavy extraction jobs to a remote cloud worker to save local bandwidth and battery.'
        },
        descTech: {
          es: 'Backend en Python con FastAPI y colas asíncronas para delegar descargas pesadas a servidores remotos con almacenamiento temporal.',
          en: 'Python FastAPI backend with async task queues for offloading large batch downloads to remote cloud servers.'
        },
        businessBenefit: {
          es: 'Flexibilidad para procesar archivos gigantes sin ralentizar la Mac.',
          en: 'Flexibility to process huge files without slowing down your Mac.'
        },
        specs: ['Python 3.12', 'FastAPI', 'AsyncIO Task Queue', 'Docker Container']
      },
      {
        index: '04',
        title: {
          es: 'Telemetría de Velocidad en Tiempo Real',
          en: 'Live Transfer Speed & Progress Telemetry'
        },
        descBusiness: {
          es: 'Muestra con exactitud a qué velocidad se está descargando el archivo (MB/s) y cuánto tiempo falta para que termine.',
          en: 'Accurately displays real-time download throughput (MB/s) and estimated time remaining (ETA).'
        },
        descTech: {
          es: 'Cálculo de velocidad de descarga (MB/s), tiempo estimado de finalización (ETA) y porcentaje de transcodificación con barras animadas.',
          en: 'Live transfer speed calculation (MB/s), estimated completion time (ETA), and transcoding progress bars.'
        },
        businessBenefit: {
          es: 'Visibilidad total del estado de tus archivos en todo momento.',
          en: 'Complete transparency into the exact status of your downloads.'
        },
        specs: ['Regex stdout parser', 'Published Combine stream', 'Live HUD metrics']
      }
    ],
    architectureLayers: [
      {
        layer: 'Native Desktop Layer',
        title: {
          es: 'SwiftUI Client + AppKit Native Windowing',
          en: 'SwiftUI Client + AppKit Native Windowing'
        },
        techs: ['Swift 6', 'SwiftUI', 'macOS AppKit', 'Combine'],
        description: {
          es: 'Cliente ligero con consumo mínimo de memoria RAM y rendimiento garantizado a 60fps.',
          en: 'Lightweight desktop client with minimal RAM footprint and guaranteed 60fps rendering.'
        }
      },
      {
        layer: 'Media Processing Core',
        title: {
          es: 'yt-dlp Engine + FFmpeg Video/Audio Pipeline',
          en: 'yt-dlp Engine + FFmpeg Video/Audio Pipeline'
        },
        techs: ['FFmpeg 7.0', 'yt-dlp', 'Subprocess Pipes', 'Process Isolation'],
        description: {
          es: 'Ensamblado de streams 4K (video codec AV1 / VP9 + audio Opus/AAC) en contenedor MP4 final.',
          en: '4K stream assembly (AV1 / VP9 video codecs + Opus/AAC audio) into final container.'
        }
      },
      {
        layer: 'Cloud Worker & API Gateway',
        title: {
          es: 'Python FastAPI Async Microservice',
          en: 'Python FastAPI Async Microservice'
        },
        techs: ['Python 3.12', 'FastAPI', 'Docker', 'Asyncio Worker Queue'],
        description: {
          es: 'Servicio contenerizado que procesa descargas en servidores remotos para usuarios que prefieren no consumir ancho de banda local.',
          en: 'Containerized service processing remote downloads for users offloading local bandwidth.'
        }
      }
    ]
  }
}
