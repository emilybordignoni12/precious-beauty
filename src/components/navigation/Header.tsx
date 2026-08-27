'use client'

import { Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { navigation } from '@/data/content'

export function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll(); window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  useEffect(() => {
    document.body.classList.toggle('menu-open', open)
    const onKey = (event: KeyboardEvent) => event.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => { document.body.classList.remove('menu-open'); window.removeEventListener('keydown', onKey) }
  }, [open])
  return (
    <header className={`site-header ${scrolled ? 'is-scrolled' : ''}`}>
      <div className="container-fluid px-3 px-lg-5 d-flex align-items-center justify-content-between">
        <a className="brand-mark" href="#inicio" aria-label="Precious Beauty — início"><span>PB</span><small>PRECIOUS BEAUTY</small></a>
        <button className="menu-toggle d-xl-none" aria-label={open ? 'Fechar menu' : 'Abrir menu'} aria-expanded={open} aria-controls="main-menu" onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
        <nav id="main-menu" aria-label="Navegação principal" className={open ? 'is-open' : ''}>
          {navigation.map((item) => <a key={item.href} className={item.label === 'AGENDAR' ? 'nav-cta' : ''} href={item.href} onClick={() => setOpen(false)}>{item.label}</a>)}
        </nav>
      </div>
    </header>
  )
}
