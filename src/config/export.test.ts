import { describe, expect, it } from 'vitest'
import { readFileSync } from 'node:fs'
import { resolve } from 'node:path'

describe('publicação estática no GitHub Pages', () => {
  it('configura exportação, base path e imagens estáticas', () => {
    const config = readFileSync(resolve('next.config.ts'), 'utf8')
    expect(config).toContain("output: 'export'")
    expect(config).toContain('NEXT_PUBLIC_BASE_PATH')
    expect(config).toContain('unoptimized: true')
  })

  it('inclui workflow oficial de Pages sem credenciais', () => {
    const workflow = readFileSync(resolve('.github/workflows/deploy-pages.yml'), 'utf8')
    expect(workflow).toContain('actions/deploy-pages')
    expect(workflow).toContain('NEXT_PUBLIC_BASE_PATH')
    expect(workflow).toContain('enablement: true')
    expect(workflow).not.toMatch(/token:\s*['"][^$]/)
  })

  it('marca o sitemap como estático para o export do Next.js', () => {
    const sitemap = readFileSync(resolve('src/app/sitemap.ts'), 'utf8')
    expect(sitemap).toContain("export const dynamic = 'force-static'")
  })
})
