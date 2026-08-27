import type { PropsWithChildren } from 'react'
import { ArrowUpRight } from 'lucide-react'
import { createWhatsAppUrl } from '@/lib/whatsapp'

export function WhatsAppLink({ message, className = 'editorial-link', children }: PropsWithChildren<{ message: string; className?: string }>) {
  return <a className={className} href={createWhatsAppUrl(message)} target="_blank" rel="noopener noreferrer">{children}<ArrowUpRight size={17} aria-hidden="true" /></a>
}
