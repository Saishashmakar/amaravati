import { useState, useEffect } from 'react'
import { Property } from '../../types'

function Dashboard() {
  const [properties, setProperties] = useState<Property[]>([])

  useEffect(() => {
    // TODO: Fetch properties from API
    setProperties([
      {
        id: '1',
        title: 'Modern Apartment',
        price: 250000,
        location: 'Downtown',
        area: 1200,
        type: 'Residential',
        images: ['https://placehold.co/600x400'],
      },
    ])
  }, [])

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-xl font-semibold mb-4">Properties</h2>
        <table className="min-w-full divide-y divide-gray-200">
          <thead>
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Title</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Price</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Location</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {properties.map((property) => (
              <tr key={property.id}>
                <td className="px-6 py-4">{property.title}</td>
                <td className="px-6 py-4">${property.price.toLocaleString()}</td>
                <td className="px-6 py-4">{property.location}</td>
                <td className="px-6 py-4">
                  <button className="text-blue-600 hover:text-blue-800 mr-4">Edit</button>
                  <button className="text-red-600 hover:text-red-800">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Dashboard
