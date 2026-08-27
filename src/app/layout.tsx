import type { Metadata } from 'next'
import 'bootstrap/dist/css/bootstrap.min.css'
import './globals.css'
import './hero-responsive.css'

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? 'https://example.com'),
  title: 'Emily Bordignoni | Precious Beauty',
  description: 'Especialista em maquiagem, visagismo e embelezamento com propósito em Fernandópolis — SP.',
  keywords: ['maquiadora Fernandópolis', 'maquiagem para noivas', 'maquiagem social', 'visagismo', 'Precious Beauty'],
  openGraph: { title: 'Emily Bordignoni | Precious Beauty', description: 'Uma experiência de beleza criada para revelar sua identidade e fortalecer sua confiança.', type: 'website', locale: 'pt_BR' },
  alternates: { canonical: '/' },
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const schema = { '@context': 'https://schema.org', '@type': ['Person','LocalBusiness'], name: 'Emily Bordignoni — Precious Beauty', description: metadata.description, telephone: '+55 17 99664-9423', address: { '@type': 'PostalAddress', addressLocality: 'Fernandópolis', addressRegion: 'SP', addressCountry: 'BR' }, areaServed: 'Fernandópolis e região', jobTitle: 'Especialista em Maquiagem' }
  return <html lang="pt-BR"><body><a className="skip-link" href="#conteudo">Ir para o conteúdo</a>{children}<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}/></body></html>
}
