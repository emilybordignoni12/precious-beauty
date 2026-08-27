import type { NextConfig } from 'next'

const rawBasePath = process.env.NEXT_PUBLIC_BASE_PATH ?? ''
const basePath = rawBasePath ? `/${rawBasePath.replace(/^\/+|\/+$/g, '')}` : ''

const nextConfig: NextConfig = {
  output: 'export',
  basePath,
  assetPrefix: basePath || undefined,
  trailingSlash: true,
  images: { unoptimized: true },
}

export default nextConfig
