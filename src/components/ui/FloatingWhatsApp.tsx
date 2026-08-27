import { generalMessage } from '@/data/content'
import { createWhatsAppUrl } from '@/lib/whatsapp'
import styles from './FloatingWhatsApp.module.css'

export function FloatingWhatsApp() {
  return (
    <a className={styles.button} href={createWhatsAppUrl(generalMessage)}
      target="_blank" rel="noopener noreferrer"
      aria-label="Fale com Emily pelo WhatsApp" title="Fale com Emily pelo WhatsApp">
      <svg viewBox="0 0 32 32" width="32" height="32" fill="none" aria-hidden="true">
        <path d="M27 15.5A11 11 0 0 1 10.7 25.2L4 27l1.8-6.5A11 11 0 1 1 27 15.5Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
        <path d="m11.4 9.4 2 3.7-1.6 1.6c1 2.1 2.7 3.8 4.9 4.8l1.6-1.6 3.7 2c-.4 2.4-2 3.1-4.2 2.4-4.7-1.4-8.4-5.2-9.6-9.4-.6-2.1.5-3.4 3.2-3.5Z" fill="currentColor" />
      </svg>
    </a>
  )
}
