import { Header } from '@/components/navigation/Header'
import { Hero, AboutPurpose } from '@/components/sections/IntroSections'
import { ExpertiseMethod, Differentials } from '@/components/sections/BrandSections'
import { Services, Experiences } from '@/components/sections/OfferSections'
import { Practical } from '@/components/sections/PracticalSections'
import { FaqPortfolio, ContactFooter } from '@/components/sections/ClosingSections'

export default function Home() {
  return <><Header/><main id="conteudo"><Hero/><AboutPurpose/><ExpertiseMethod/><Differentials/><Services/><Experiences/><Practical/><FaqPortfolio/><ContactFooter/></main></>
}
