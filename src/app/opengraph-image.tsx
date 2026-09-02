import { ImageResponse } from 'next/og'

export const dynamic = 'force-static'
export const alt = 'AyeApps — Sistemas de Software Completos & Plataformas Cloud'
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#050505',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'space-between',
          padding: '70px 80px',
          fontFamily: 'sans-serif',
          border: '3px solid rgba(254, 157, 1, 0.5)',
        }}
      >
        {/* Brand header */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
          <div
            style={{
              width: '56px',
              height: '56px',
              borderRadius: '6px',
              border: '2px solid rgba(254, 157, 1, 0.8)',
              background: 'rgba(254, 157, 1, 0.12)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#FE9D01',
              fontSize: '28px',
              fontWeight: 'bold',
            }}
          >
            A
          </div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span style={{ fontSize: '30px', fontWeight: 'bold', color: '#ffffff', letterSpacing: '-0.02em' }}>
              Aye<span style={{ color: '#888888', fontWeight: 'normal' }}>Apps</span>
            </span>
            <span style={{ fontSize: '13px', color: '#FE9D01', fontFamily: 'monospace', textTransform: 'uppercase', letterSpacing: '0.16em' }}>
              Software Systems & Cloud Architecture · Querétaro
            </span>
          </div>
        </div>

        {/* Main headline */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', maxWidth: '980px' }}>
          <div
            style={{
              fontSize: '54px',
              fontWeight: 800,
              color: '#f5f5f5',
              lineHeight: 1.1,
              letterSpacing: '-0.03em',
            }}
          >
            Sistemas de Software Completos. Escalables y en la Nube.
          </div>
          <div style={{ fontSize: '21px', color: '#8a8a8a', lineHeight: 1.4 }}>
            Ingeniería de software a medida: plataformas web en Next.js, aplicaciones nativas iOS y microservicios asíncronos en FastAPI.
          </div>
        </div>

        {/* Tech tags */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          {['Next.js 16', 'React 19', 'Swift & iOS', 'FastAPI Python', 'Docker', 'Cloudflare Edge'].map(
            (tag) => (
              <div
                key={tag}
                style={{
                  padding: '7px 14px',
                  borderRadius: '4px',
                  border: '1px solid rgba(255, 255, 255, 0.15)',
                  background: '#0d0d0d',
                  color: '#e0e0e0',
                  fontSize: '13px',
                  fontFamily: 'monospace',
                }}
              >
                {tag}
              </div>
            )
          )}
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}
