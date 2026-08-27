import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  // Configured for optimal edge performance & Cloudflare Pages deployment
  images: {
    unoptimized: true,
  },
}

export default nextConfig
