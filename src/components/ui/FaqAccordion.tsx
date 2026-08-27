'use client'

import { Plus } from 'lucide-react'
import { useState } from 'react'
import type { FaqItem } from '@/types/content'

export function FaqAccordion({ items }: { items: FaqItem[] }) {
  const [active, setActive] = useState<number | null>(null)
  return <div className="faq-list">{items.map((item, index) => {
    const open = active === index; const panelId = `faq-panel-${index}`
    return <article className={`faq-item ${open ? 'is-open' : ''}`} key={item.question}>
      <button aria-expanded={open} aria-controls={panelId} onClick={() => setActive(open ? null : index)}><span>{item.question}</span><Plus aria-hidden="true" /></button>
      <div id={panelId} className="faq-answer" hidden={!open}>{item.answer.map((text) => <p key={text}>{text}</p>)}</div>
    </article>
  })}</div>
}
