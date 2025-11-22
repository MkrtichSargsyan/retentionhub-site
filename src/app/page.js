import Navbar from '@/components/Navbar'
import Hero from '../components/Hero'
import ProductDescription from '@/components/ProductDescription'
import ResultsForClients from '@/components/ResultsForClients'
import FAQ from '@/components/FAQ'
import Footer from '@/components/Footer'
import SubHero from '@/components/SubHero'
import ContactUs from '@/components/ContactUs'
import WhyChooseUs from '@/components/WhyChooseUs'
import AboutUs from '@/components/AboutUs'

export default function Page() {
  return (
    <main className="overflow-visible relative flex flex-col">
      <Navbar />
      <Hero />
      <SubHero />
      <ProductDescription />
      <ResultsForClients />
      <WhyChooseUs/>
      <AboutUs/>
      <FAQ />
      <ContactUs/>
      <Footer />
    </main>
  )
}