import { afterEach, describe, expect, it } from 'vitest'
import { withBasePath } from './paths'

describe('withBasePath', () => {
  afterEach(() => delete process.env.NEXT_PUBLIC_BASE_PATH)

  it('mantém caminho absoluto quando o site está na raiz', () => {
    expect(withBasePath('/images/emily/retrato.jpg')).toBe('/images/emily/retrato.jpg')
  })

  it('prefixa o nome do repositório no GitHub Pages', () => {
    process.env.NEXT_PUBLIC_BASE_PATH = '/precious-beauty/'
    expect(withBasePath('/images/emily/retrato.jpg')).toBe('/precious-beauty/images/emily/retrato.jpg')
  })
})
