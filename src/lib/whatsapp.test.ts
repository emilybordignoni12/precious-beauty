import { describe, expect, it } from 'vitest'
import { createWhatsAppUrl } from './whatsapp'

describe('createWhatsAppUrl', () => {
  it('usa o número oficial e codifica a mensagem em português', () => {
    const url = createWhatsAppUrl('Olá, Emily! Maquiagem & visagismo.')
    expect(url).toBe(
      'https://wa.me/5517996649423?text=Ol%C3%A1%2C%20Emily!%20Maquiagem%20%26%20visagismo.',
    )
  })
})
