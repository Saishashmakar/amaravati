import Hero from '../components/hero/Hero'
import AboutUs from '../components/about/AboutUs'
import PriceOverview from '../components/price/PriceOverview'
import PropertyGrid from '../components/property/PropertyGrid'
import AmaravatiNews from '../components/news/AmaravatiNews'
import BlogSection from '../components/blog/BlogSection'
import Footer from '../components/layout/Footer'

function Home() {
  return (
    <main>
      <Hero />
      <div className="container mx-auto px-4">
        <PriceOverview />
        <PropertyGrid />
      </div>
      <AboutUs />
      <AmaravatiNews />
      <BlogSection />
      <Footer />
    </main>
  )
}

export default Home
