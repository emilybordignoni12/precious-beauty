import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import Home from '@/app/page'

describe('site Precious Beauty', () => {
  it('oferece contato flutuante acessível pelo WhatsApp da Emily', () => {
    render(<Home />)
    const link = screen.getByRole('link', { name: 'Fale com Emily pelo WhatsApp' })
    const destination = new URL(link.getAttribute('href')!)
    expect(destination.origin).toBe('https://wa.me')
    expect(destination.pathname).toBe('/5517996649423')
    expect(destination.searchParams.get('text')).toContain('gostaria de solicitar um atendimento')
    expect(link).toHaveAttribute('target', '_blank')
    expect(link).toHaveAttribute('rel', 'noopener noreferrer')
  })

  it('apresenta a marca, posicionamento e chamadas principais', () => {
    render(<Home />)
    expect(screen.getByRole('heading', { level: 1, name: /Emily Bordignoni/i })).toBeInTheDocument()
    expect(screen.getAllByText('Embelezamento com propósito.').length).toBeGreaterThanOrEqual(2)
    expect(screen.getByRole('link', { name: 'Conheça meu trabalho' })).toHaveAttribute('href', '#portfolio')
    expect(screen.getAllByRole('link', { name: /Agende/i }).length).toBeGreaterThan(0)
  })

  it('inclui toda a jornada de conteúdo e os serviços', () => {
    render(<Home />)
    expect(screen.getByRole('heading', { name: /Quem é Emily.*Bordignoni/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Como.*funciona o.*atendimento/i })).toBeInTheDocument()
    for (const title of ['Meu propósito', 'Precious Beauty', 'Maquiagem Social', 'Maquiagem para Noivas', 'Atendimento Coletivo', 'Precious Bride Experience', 'Precious Moments', 'Onde atendo', 'Pequenos cuidados', 'Agendamento', 'Dúvidas', 'Portfólio']) {
      expect(screen.getAllByText(title, { exact: false }).length).toBeGreaterThan(0)
    }
  })

  it('expõe as perguntas como controles acessíveis', () => {
    render(<Home />)
    expect(screen.getByRole('button', { name: 'E se eu não souber qual maquiagem combina comigo?' })).toHaveAttribute('aria-expanded', 'false')
  })
})
