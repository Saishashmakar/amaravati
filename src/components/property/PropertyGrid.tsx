import PropertyCard from './PropertyCard'

const featuredProperties = [
  {
    id: '1',
    title: 'Premium Villa in Amaravati Central',
    description: 'Luxurious 4BHK villa with modern amenities and garden',
    price: 18500000,
    location: 'Amaravati Central',
    area: 3600,
    bedrooms: 4,
    bathrooms: 4,
    type: 'Villa',
    status: 'For Sale',
    image: 'https://images.unsplash.com/photo-1613977257363-707ba9348227?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: '2',
    title: 'Commercial Space in Mangalagiri',
    description: 'Prime commercial property with excellent connectivity',
    price: 25000000,
    location: 'Mangalagiri',
    area: 5000,
    type: 'Commercial',
    status: 'For Sale',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: '3',
    title: 'Modern Apartment in Vijayawada',
    description: '3BHK apartment with premium amenities',
    price: 7500000,
    location: 'Vijayawada',
    area: 1800,
    bedrooms: 3,
    bathrooms: 3,
    type: 'Apartment',
    status: 'For Sale',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: '4',
    title: 'Premium Plot in Velagapudi',
    description: 'CRDA approved residential plot in prime location',
    price: 12000000,
    location: 'Velagapudi',
    area: 2400,
    type: 'Plot',
    status: 'For Sale',
    image: 'https://images.unsplash.com/photo-1524813686514-a57563d77965?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: '5',
    title: 'Retail Space in Guntur',
    description: 'Prime retail space in high-traffic area',
    price: 15000000,
    location: 'Guntur',
    area: 3000,
    type: 'Commercial',
    status: 'For Sale',
    image: 'https://images.unsplash.com/photo-1479839672679-a46483c0e7c8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: '6',
    title: 'Luxury Villa in Tadepalli',
    description: 'Riverside villa with premium finishes',
    price: 22000000,
    location: 'Tadepalli',
    area: 4200,
    bedrooms: 5,
    bathrooms: 5,
    type: 'Villa',
    status: 'For Sale',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: '7',
    title: 'Office Space in Vijayawada',
    description: 'Modern office space with parking',
    price: 19000000,
    location: 'Vijayawada',
    area: 3500,
    type: 'Commercial',
    status: 'For Sale',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: '8',
    title: 'Residential Plot in Thullur',
    description: 'Corner plot with excellent appreciation potential',
    price: 9000000,
    location: 'Thullur',
    area: 1800,
    type: 'Plot',
    status: 'For Sale',
    image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: '9',
    title: 'Premium Apartment in Mangalagiri',
    description: 'Luxury 4BHK apartment with club house access',
    price: 11000000,
    location: 'Mangalagiri',
    area: 2200,
    bedrooms: 4,
    bathrooms: 4,
    type: 'Apartment',
    status: 'For Sale',
    image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: '10',
    title: 'Commercial Complex in Guntur',
    description: 'Multi-story commercial complex with assured returns',
    price: 35000000,
    location: 'Guntur',
    area: 8000,
    type: 'Commercial',
    status: 'For Sale',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80'
  }
]

function PropertyGrid() {
  return (
    <section className="mt-16">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Featured Properties</h2>
          <p className="text-gray-600 mt-1">Exclusive properties in prime locations</p>
        </div>
        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300">
          View All Properties
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {featuredProperties.map((property) => (
          <PropertyCard key={property.id} property={property} />
        ))}
      </div>
    </section>
  )
}

export default PropertyGrid
