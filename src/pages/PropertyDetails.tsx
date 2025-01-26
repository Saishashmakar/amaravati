import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { Property } from '../types'

function PropertyDetails() {
  const { id } = useParams()
  const [property, setProperty] = useState<Property | null>(null)

  useEffect(() => {
    // TODO: Fetch property details from API
    setProperty({
      id: '1',
      title: 'Modern Apartment',
      price: 250000,
      location: 'Downtown',
      area: 1200,
      type: 'Residential',
      images: ['https://placehold.co/600x400'],
    })
  }, [id])

  if (!property) {
    return <div>Loading...</div>
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">{property.title}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <img 
            src={property.images[0]} 
            alt={property.title}
            className="w-full rounded-lg"
          />
        </div>
        <div>
          <div className="mb-4">
            <h2 className="text-xl font-semibold mb-2">Details</h2>
            <p className="text-gray-600">Location: {property.location}</p>
            <p className="text-gray-600">Area: {property.area} sq ft</p>
            <p className="text-gray-600">Type: {property.type}</p>
            <p className="text-2xl font-bold mt-4">${property.price.toLocaleString()}</p>
          </div>
          <button className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700">
            Contact Agent
          </button>
        </div>
      </div>
    </div>
  )
}

export default PropertyDetails
