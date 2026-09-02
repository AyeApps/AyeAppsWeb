export interface CaseStudyModule {
  index: string
  title: { es: string; en: string }
  descBusiness: { es: string; en: string }
  descTech: { es: string; en: string }
  businessBenefit: { es: string; en: string }
  specs: string[]
}

export interface CaseStudyMetric {
  value: string | { es: string; en: string }
  labelBusiness: { es: string; en: string }
  labelTech: { es: string; en: string }
  detailBusiness: { es: string; en: string }
  detailTech: { es: string; en: string }
}

export interface CaseStudyData {
  slug: string
  title: string
  clientName: string | { es: string; en: string }
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
  metricsHeadingBusiness?: { badge: { es: string; en: string }; title: { es: string; en: string } }
  metricsHeadingTech?: { badge: { es: string; en: string }; title: { es: string; en: string } }
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
    clientName: {
      es: 'Producto Propietario · AyeApps',
      en: 'In-House Product · AyeApps'
    },
    projectTypeBusiness: {
      es: 'Plataforma Web de Extracción Multimedia',
      en: 'Web Media Extraction Platform'
    },
    projectTypeTech: {
      es: 'Plataforma Web, Cloud Worker en FastAPI & FFmpeg',
      en: 'Web Platform, FastAPI Cloud Worker & FFmpeg'
    },
    year: '2026',
    timeline: {
      es: 'Plataforma Web Activa · Apps de Escritorio y Android en Camino',
      en: 'Production Web Live · Desktop & Android Apps in Progress'
    },
    roleBusiness: {
      es: 'Arquitectura de Software, Desarrollo Full Stack & UX',
      en: 'Software Architecture, Full-Stack Engineering & UX'
    },
    roleTech: {
      es: 'Arquitectura Cloud, Pipelines FFmpeg & Desarrollo Web',
      en: 'Cloud Architecture, FFmpeg Pipelines & Web Engineering'
    },
    githubUrl: 'https://github.com/ayeapps/AyeVideoDownloader',
    heroTaglineBusiness: {
      es: 'Una plataforma web limpia, rápida y sin anuncios para descargar videos en 4K HDR, música en alta fidelidad y descargas múltiples en cola.',
      en: 'A clean, blazingly fast, ad-free web platform for 4K HDR video downloads, high-fidelity audio extraction, and queued batch processing.'
    },
    heroTaglineTech: {
      es: 'Arquitectura web moderna con transcodificación en la nube mediante Cloud Workers en FastAPI y FFmpeg. Clientes nativos en reingeniería.',
      en: 'Modern web architecture featuring cloud transcoding via FastAPI and FFmpeg workers. Native client apps under active redesign.'
    },
    overviewBusiness: {
      es: 'Aye Video Downloader nace para solucionar la molesta experiencia de las páginas web llenas de publicidad y virus. Actualmente opera principalmente como una plataforma web rápida y accesible desde cualquier navegador, permitiendo guardar videos de YouTube, Instagram y otras fuentes en calidad 4K UHD o extraer canciones en MP3 con máxima fidelidad, mientras las aplicaciones nativas para macOS y dispositivos móviles se encuentran en proceso de reingeniería (Coming Soon).',
      en: 'Aye Video Downloader was created to eliminate the frustration of ad-infested, malware-ridden converter websites. Currently operating primarily as a fast, browser-accessible web platform, it allows users to download videos in 4K UHD or extract 320 kbps MP3 audio with total privacy, while native apps for macOS and mobile platforms are undergoing active re-engineering (Coming Soon).',
    },
    overviewTech: {
      es: 'Arquitectura web respaldada por un cluster de workers en la nube con Python y FastAPI, integrando yt-dlp y FFmpeg para transcodificación y multiplexación asíncrona de alto rendimiento. Los clientes nativos en Swift/SwiftUI para Mac y React Native para móvil están siendo rediseñados.',
      en: 'Web architecture backed by a Python/FastAPI cloud worker cluster, orchestrating yt-dlp and FFmpeg for high-throughput asynchronous transcoding. Native clients in Swift/SwiftUI for Mac and React Native for mobile are currently being rebuilt.',
    },
    challengeBusiness: {
      es: 'Un día tuve la necesidad de descargar un video de una plataforma en línea, lo que me llevó a ingresar a una página web que encontré en internet. Ahí empezó la travesía: después de esquivar anuncios por doquier, logré pegar el enlace en la caja de texto y presionar el botón de descarga, el cual de inmediato me mostró una cantidad que debería ser ilegal de anuncios y redirecciones. En ese momento pensé: si existen tantas plataformas que hacen lo mismo y de forma tan molesta, no debería ser tan difícil crear la mía propia. Así me puse manos a la obra.',
      en: 'One day, I needed to download a video from an online platform, which led me to a website I found through a search engine. That was the beginning of an ordeal: after dodging intrusive pop-ups and deceptive buttons at every turn, I finally pasted the link and clicked download—only to be hit with what felt like an illegal flood of ads. At that moment, I thought: if there are so many platforms doing this so poorly, it shouldn’t be that complicated to build my own. So I got to work.',
    },
    challengeTech: {
      es: 'La gran mayoría de descargadores web dependen de monetización invasiva con scripts de rastreo y redirecciones forzadas, mientras que las herramientas de escritorio convencionales son empaquetados pesados de Electron que consumen gigabytes de RAM y no multiplexan adecuadamente flujos separados de audio y video en resoluciones 4K.',
      en: 'Most web downloaders rely on aggressive tracking scripts and forced redirects, while conventional desktop tools are bloated Electron wrappers that consume excessive RAM and fail to properly multiplex high-bitrate separated 4K audio and video streams.',
    },
    solutionBusiness: {
      es: 'El resultado fue Aye Video Downloader: concebida como una plataforma web rápida, limpia y 100% libre de anuncios, accesible de inmediato desde cualquier navegador. Solo pegas el enlace y el sistema procesa el contenido en la nube, permitiéndote descargar videos en resoluciones nítidas hasta 4K UHD o extraer audio en MP3 a máxima fidelidad (320 kbps) en segundos, con total respeto por la privacidad. Asimismo, las aplicaciones nativas dedicadas para macOS y dispositivos móviles se encuentran actualmente en reingeniería y estarán disponibles próximamente (Coming Soon).',
      en: 'The result was Aye Video Downloader: engineered primarily as a fast, clean, and 100% ad-free web platform accessible instantly from any browser. Simply paste the link, and the cloud engine processes the media—allowing you to download crisp video up to 4K UHD or extract pristine 320 kbps MP3 audio in seconds, with complete user privacy. Dedicated native apps for macOS and mobile devices are currently being re-engineered and will launch soon (Coming Soon).',
    },
    solutionTech: {
      es: 'Implementamos una plataforma web optimizada respaldada por un motor de Cloud Workers asíncronos en FastAPI y Docker con pipelines de yt-dlp y FFmpeg para procesar y ensamblar streams de alta resolución en la nube sin recargar el dispositivo del usuario. Las versiones nativas de escritorio (macOS SwiftUI) y móvil están siendo rediseñadas para una integración profunda con el sistema operativo (Coming Soon).',
      en: 'We engineered an optimized web platform backed by asynchronous FastAPI and Docker cloud workers orchestrating yt-dlp and FFmpeg pipelines for high-resolution cloud transcoding without draining device resources. Native desktop (macOS SwiftUI) and mobile editions are being redesigned for deep OS-level integration (Coming Soon).',
    },
    metricsHeadingBusiness: {
      badge: { es: 'Capacidades del Sistema', en: 'Core Capabilities' },
      title: { es: 'Máxima Calidad Audiovisual en Cada Descarga', en: 'Maximum Audiovisual Fidelity on Every Download' }
    },
    metricsHeadingTech: {
      badge: { es: 'Telemetría del Motor Cloud', en: 'Cloud Engine Telemetry' },
      title: { es: 'Métricas de Procesamiento y Streaming', en: 'Processing & Streaming Telemetry' }
    },
    metrics: [
      {
        value: '4K HDR',
        labelBusiness: { es: 'Resolución Ultra HD & HDR', en: 'Ultra HD & HDR Resolution' },
        labelTech: { es: 'Multiplexación AV1 / VP9 HDR', en: 'AV1 / VP9 HDR Muxing' },
        detailBusiness: {
          es: 'Descarga videos en 4K, 1080p y alto rango dinámico (HDR) conservando la gama cromática y tasa de bits original.',
          en: 'Downloads 4K, 1080p, and High Dynamic Range (HDR) videos preserving original color gamut and bitrate.'
        },
        detailTech: { es: 'Ensamblado sin pérdida de streams con perfiles de color HDR10', en: 'Lossless separated stream assembly with HDR10 color profiles' }
      },
      {
        value: '320 kbps',
        labelBusiness: { es: 'Audio de Alta Fidelidad', en: 'High-Fidelity Audio' },
        labelTech: { es: 'Bitrate de Audio', en: 'Audio Bitrate' },
        detailBusiness: {
          es: 'Conversión de música y podcasts en MP3 con el mayor bitrate disponible.',
          en: 'Extracts music and podcasts to MP3 at the highest available bitrate.'
        },
        detailTech: { es: 'Conversión directa a 320 kbps con FFmpeg', en: 'Direct 320 kbps transcode via FFmpeg' }
      },
      {
        value: { es: 'Sin Anuncios', en: 'No Ads' },
        labelBusiness: { es: 'Privacidad y Cero Publicidad', en: 'Privacy & Zero Ads' },
        labelTech: { es: 'Sin Dependencias AdTech', en: 'Zero AdTech Bloat' },
        detailBusiness: {
          es: 'Sin ventanas emergentes, botones falsos de descarga ni rastreadores invasivos.',
          en: 'No pop-up windows, fake download buttons, or invasive trackers.'
        },
        detailTech: { es: 'Cero scripts de terceros ni telemetría invasiva', en: 'Zero third-party trackers or telemetry' }
      },
      {
        value: { es: 'Descarga Múltiple', en: 'Batch Download' },
        labelBusiness: { es: 'Gestión de Enlaces en Cola', en: 'Queued Batch Processing' },
        labelTech: { es: 'Cola de Tareas Asíncrona', en: 'Async Task Queue' },
        detailBusiness: {
          es: 'Agrega varios videos o canciones a la vez y procésalos de forma organizada sin saturar tu red.',
          en: 'Queue multiple videos or tracks at once and process them systematically without network congestion.'
        },
        detailTech: { es: 'Orquestación de background workers y gestión de concurrencia', en: 'Background worker orchestration and concurrency management' }
      }
    ],
    modules: [
      {
        index: '01',
        title: {
          es: 'Plataforma Web Universal',
          en: 'Universal Web Platform'
        },
        descBusiness: {
          es: 'Una interfaz web limpia, directa y accesible al instante desde cualquier navegador moderno sin necesidad de instalar programas. Solo pegas el enlace, seleccionas la calidad deseada y tu archivo se procesa de inmediato.',
          en: 'A clean, streamlined web interface accessible instantly from any modern browser with zero installation required. Simply paste the link, choose your preferred quality, and your file is processed immediately.'
        },
        descTech: {
          es: 'Arquitectura web optimizada con React Server Components, validación de enlaces en el borde y consumo de APIs asíncronas para una experiencia rápida y sin fricción.',
          en: 'Optimized web architecture featuring React Server Components, Edge URL validation, and asynchronous APIs for a friction-free, low-latency user journey.'
        },
        businessBenefit: {
          es: 'Acceso universal inmediato desde cualquier dispositivo sin descargas previas.',
          en: 'Instant universal access across any device directly from the web browser.'
        },
        specs: ['Plataforma Web', 'Next.js App Router', 'Cloudflare Edge', 'Zero Install']
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
        specs: ['yt-dlp Core', 'FFmpeg Transcoding', 'Lossless Muxing']
      },
      {
        index: '03',
        title: {
          es: 'Procesamiento Asíncrono en la Nube',
          en: 'Asynchronous Cloud Worker Processing'
        },
        descBusiness: {
          es: 'Todo el trabajo pesado de descarga, compresión y ensamblado de streams se procesa en servidores cloud dedicados, evitando el consumo de batería y datos en tu equipo.',
          en: 'All heavy lifting—video stream extraction, audio multiplexing, and transcoding—runs on dedicated cloud workers, preserving your device battery and bandwidth.'
        },
        descTech: {
          es: 'Backend asíncrono en Python con FastAPI y colas de tareas en contenedores Docker para transcodificar streams concurrentes a alta velocidad.',
          en: 'Asynchronous Python backend with FastAPI and Docker task workers to transcode concurrent media streams at scale.'
        },
        businessBenefit: {
          es: 'Descargas ultrarrápidas sin sobrecalentar ni ralentizar tu equipo.',
          en: 'Ultra-fast downloads without draining or heating up your device.'
        },
        specs: ['Python 3.12', 'FastAPI Workers', 'Docker Compose', 'AsyncIO Task Queue']
      },
      {
        index: '04',
        title: {
          es: 'Telemetría y Estado en Tiempo Real',
          en: 'Live Progress & Status Telemetry'
        },
        descBusiness: {
          es: 'Muestra con exactitud el progreso de extracción, la tasa de transferencia en megabytes por segundo (MB/s) y la finalización del archivo en tiempo real.',
          en: 'Accurately displays real-time extraction progress, transfer throughput in megabytes per second (MB/s), and instant file readiness.'
        },
        descTech: {
          es: 'Cálculo de velocidad de procesamiento, porcentaje de multiplexación y streaming de eventos asíncronos para telemetría continua de la descarga.',
          en: 'Real-time transcoding progress calculation, throughput streaming, and async event dispatch for end-to-end download telemetry.'
        },
        businessBenefit: {
          es: 'Visibilidad total del estado de tus archivos en todo momento.',
          en: 'Complete transparency into the exact status of your downloads.'
        },
        specs: ['Real-Time Progress', 'Async Event Stream', 'Live Status Feedback']
      },
      {
        index: '05',
        title: {
          es: 'Ecosistema Móvil: Android (Próximamente)',
          en: 'Mobile Ecosystem: Android (Coming Soon)'
        },
        descBusiness: {
          es: 'Debido a las estrictas políticas y restricciones de la App Store de Apple para herramientas de descarga de medios en iOS, una futura versión móvil se contempla exclusivamente para el ecosistema Android, donde es viable operar con libertad y sin bloqueos de plataforma. Se encuentra en evaluación técnica para su próximo lanzamiento.',
          en: 'Due to strict Apple App Store policy restrictions against media downloading utilities on iOS, an upcoming mobile edition is planned exclusively for the Android ecosystem, where open architecture permits seamless operation. Currently under technical feasibility and roadmap planning.'
        },
        descTech: {
          es: 'Evaluación de cliente ligero para Android con servicios de descarga en segundo plano, soporte para Scoped Storage nativo y activación directa desde el menú Compartir del sistema operativo.',
          en: 'Technical evaluation of an Android client with background download services, native Scoped Storage APIs, and direct Share Sheet integration from mobile browsers.'
        },
        businessBenefit: {
          es: 'Claridad y viabilidad técnica en móviles sin restricciones de tienda en iOS.',
          en: 'Engineering clarity and realistic mobile viability without iOS store roadblocks.'
        },
        specs: ['Android Focused', 'Restricciones iOS / Apple', 'Background Service', 'Próximamente']
      }
    ],
    architectureLayers: [
      {
        layer: 'Web Frontend Layer',
        title: {
          es: 'Next.js App Router & Edge Runtime',
          en: 'Next.js App Router & Edge Runtime'
        },
        techs: ['Next.js 16', 'React Server Components', 'TypeScript', 'Tailwind CSS'],
        description: {
          es: 'Plataforma web reactiva y ligera optimizada para cargas inmediatas, validación de enlaces en el borde y consumo de APIs de streaming.',
          en: 'Reactive, ultra-lightweight web platform optimized for instant loads, Edge URL validation, and streaming API consumption.'
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
