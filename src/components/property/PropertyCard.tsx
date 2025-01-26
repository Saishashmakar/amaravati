interface Property {
  id: string
  title: string
  description: string
  price: number
  location: string
  area: number
  bedrooms?: number
  bathrooms?: number
  type: string
  status: string
  image: string
}

interface PropertyCardProps {
  property: Property
}

function PropertyCard({ property }: PropertyCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition duration-300">
      <div className="relative">
        <img 
          src={property.image} 
          alt={property.title}
          className="w-full h-64 object-cover"
        />
        <div className="absolute top-4 right-4">
          <span className="px-3 py-1 bg-blue-600 text-white text-sm font-medium rounded-full">
            {property.type}
          </span>
        </div>
      </div>

      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">{property.title}</h3>
            <p className="text-gray-600 text-sm mb-2">{property.description}</p>
          </div>
          <div className="text-right">
            <div className="text-xl font-bold text-blue-600">
              ₹{(property.price / 10000000).toFixed(2)} Cr
            </div>
            <div className="text-sm text-gray-500">
              ₹{Math.round(property.price / property.area).toLocaleString()}/sq.ft
            </div>
          </div>
        </div>

        <div className="border-t border-gray-100 pt-4">
          <div className="flex items-center justify-between text-sm text-gray-600">
            <div className="flex items-center">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              {property.location}
            </div>
            <div>{property.area} sq.ft</div>
          </div>

          {(property.bedrooms && property.bathrooms) && (
            <div className="flex items-center justify-between mt-3 text-sm text-gray-600">
              <div className="flex items-center">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
                {property.bedrooms} Beds
              </div>
              <div className="flex items-center">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
                {property.bathrooms} Baths
              </div>
            </div>
          )}
        </div>

        <button className="w-full mt-6 px-4 py-2 bg-gray-100 text-gray-800 rounded-lg hover:bg-gray-200 transition duration-300">
          View Details
        </button>
      </div>
    </div>
  )
}

export default PropertyCard
