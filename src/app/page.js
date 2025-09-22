import Navbar from '@/components/Navbar'
import Hero from '../components/Hero'
import Features from '@/components/Features'
import UseCases from '@/components/UseCases'
import FAQ from '@/components/FAQ'
import Footer from '@/components/Footer'
import WhatWeOffer from '@/components/WhatWeOffer'
import SubHero from '@/components/SubHero'

export default function Page() {
  return (
    <main>
      <Navbar />
      <Hero />
      <SubHero />
      <Features />
      <UseCases />
      <WhatWeOffer />
      <FAQ />
      <Footer />
    </main>
  )
}