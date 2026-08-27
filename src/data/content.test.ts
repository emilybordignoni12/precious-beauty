import { describe, expect, it } from 'vitest'
import { differentials, experiences, faq, journey, navigation, preparation, services } from './content'
import { media } from './media'

describe('conteúdo Precious Beauty', () => {
  it('mantém a jornada, os serviços e as experiências do briefing', () => {
    expect(navigation.map((item) => item.label)).toEqual([
      'INÍCIO', 'SOBRE MIM', 'PRECIOUS BEAUTY', 'SERVIÇOS', 'EXPERIÊNCIAS', 'PORTFÓLIO', 'DÚVIDAS', 'AGENDAR',
    ])
    expect(services.map((service) => service.title)).toEqual([
      'Maquiagem Social', 'Maquiagem para Noivas', 'Atendimento Coletivo',
    ])
    expect(experiences).toHaveLength(2)
    expect(differentials).toHaveLength(6)
    expect(journey).toHaveLength(6)
    expect(preparation).toHaveLength(6)
    expect(faq.length).toBeGreaterThanOrEqual(15)
  })

  it('não mistura imagens da Emily com imagens de clientes', () => {
    expect(media.owner.every((item) => item.src.startsWith('/images/emily/'))).toBe(true)
    expect(media.clients.every((item) => item.src.startsWith('/images/clientes/'))).toBe(true)
    expect(media.owner).toHaveLength(9)
    expect(media.clients).toHaveLength(5)
  })

  it('preserva mensagens específicas de WhatsApp', () => {
    expect(services[0].message).toContain('interesse em Maquiagem Social')
    expect(services[1].message).toContain('interesse na Maquiagem para Noivas')
    expect(services[2].message).toContain('interesse em Atendimento Coletivo')
  })
})
