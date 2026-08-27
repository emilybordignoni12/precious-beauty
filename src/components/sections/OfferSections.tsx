import Image from 'next/image'
import { Reveal } from '@/components/motion/Reveal'
import { experiences, services } from '@/data/content'
import { withBasePath } from '@/lib/paths'
import { WhatsAppLink } from '@/components/ui/WhatsAppLink'

export function Services() {
  return <section id="servicos" className="section-space services-section"><div className="container"><p className="eyebrow brown">07 · SERVIÇOS</p><div className="row mb-5"><div className="col-lg-8"><h2>Momentos que merecem<br/><em>ser lembrados.</em></h2></div><div className="col-lg-4"><p>Cada ocasião pede uma produção diferente, personalizada para o momento e para a imagem que você deseja transmitir.</p></div></div>{services.map((service,index)=><Reveal key={service.id}><article className={`service-row row g-0 ${index%2 ? 'flex-lg-row-reverse':''}`}><div className="col-lg-6 service-image"><Image src={withBasePath(service.image)} alt={`Trabalho Precious Beauty — ${service.title}`} fill sizes="(max-width: 991px) 100vw, 50vw" /></div><div className="col-lg-6 service-copy"><span>0{index+1}</span><p className="eyebrow brown">{service.eyebrow}</p><h3>{service.title}</h3>{service.description.map(p=><p key={p}>{p}</p>)}<WhatsAppLink message={service.message}>Tenho interesse</WhatsAppLink></div></article></Reveal>)}</div></section>
}

export function Experiences() {
  return <section id="experiencias" className="section-space dark-section experience-section"><div className="container"><p className="eyebrow gold">08—09 · EXPERIÊNCIAS</p><h2>Antes do evento,<br/>um momento <em>precioso.</em></h2>{experiences.map((item,index)=><Reveal key={item.title}><article className={`experience-card row g-0 ${index%2 ? 'flex-lg-row-reverse':''}`}><div className="col-lg-5 experience-image"><Image src={withBasePath(item.image)} alt={item.title} fill sizes="(max-width: 991px) 100vw, 42vw" /></div><div className="col-lg-7 experience-copy"><span className="experience-index">0{index+1}</span><h3>{item.title}</h3><p className="lead-serif">{item.subtitle}</p>{item.description.map(p=><p key={p}>{p}</p>)}<ul>{item.highlights.map(h=><li key={h}>{h}</li>)}</ul><WhatsAppLink message={item.message} className="editorial-link light">Quero viver essa experiência</WhatsAppLink></div></article></Reveal>)}</div></section>
}
