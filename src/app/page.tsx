import { PropertyGrid } from '@/components/property/PropertyGrid'
import { PriceOverview } from '@/components/price/PriceOverview'

export default function Home() {
  return (
    <main className="min-h-screen p-4 md:p-8">
      <h1 className="text-4xl font-bold mb-8">Real Estate Platform</h1>
      <PriceOverview />
      <PropertyGrid />
    </main>
  )
}
