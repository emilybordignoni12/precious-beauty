export function withBasePath(path: string): string {
  const basePath = (process.env.NEXT_PUBLIC_BASE_PATH ?? '').replace(/^\/+|\/+$/g, '')
  const normalizedPath = path.startsWith('/') ? path : `/${path}`
  return basePath ? `/${basePath}${normalizedPath}` : normalizedPath
}
