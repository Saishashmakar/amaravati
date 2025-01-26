import { Link } from 'react-router-dom'
import { useState } from 'react'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="text-xl font-bold text-gray-800">
              Real Estate
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/" className="text-gray-600 hover:text-gray-900">Home</Link>
            <div className="relative group">
              <button className="text-gray-600 hover:text-gray-900 py-4">
                Property Management
              </button>
              <div className="absolute hidden group-hover:block w-48 bg-white shadow-lg py-2 rounded-md">
                <Link to="/residential" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Residential</Link>
                <Link to="/commercial" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Commercial</Link>
                <Link to="/plots" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Plots</Link>
              </div>
            </div>
            <Link to="/amaravati-updates" className="text-gray-600 hover:text-gray-900">Amaravati Updates</Link>
            <Link to="/blog" className="text-gray-600 hover:text-gray-900">Blog</Link>
            <Link to="/about" className="text-gray-600 hover:text-gray-900">About</Link>
            <Link to="/contact" className="text-gray-600 hover:text-gray-900">Contact</Link>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-gray-900"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link to="/" className="block px-3 py-2 text-gray-600 hover:text-gray-900">Home</Link>
            <div className="px-3 py-2">
              <span className="block text-gray-600 font-medium mb-1">Property Management</span>
              <Link to="/residential" className="block pl-4 py-1 text-sm text-gray-600 hover:text-gray-900">Residential</Link>
              <Link to="/commercial" className="block pl-4 py-1 text-sm text-gray-600 hover:text-gray-900">Commercial</Link>
              <Link to="/plots" className="block pl-4 py-1 text-sm text-gray-600 hover:text-gray-900">Plots</Link>
            </div>
            <Link to="/amaravati-updates" className="block px-3 py-2 text-gray-600 hover:text-gray-900">Amaravati Updates</Link>
            <Link to="/blog" className="block px-3 py-2 text-gray-600 hover:text-gray-900">Blog</Link>
            <Link to="/about" className="block px-3 py-2 text-gray-600 hover:text-gray-900">About</Link>
            <Link to="/contact" className="block px-3 py-2 text-gray-600 hover:text-gray-900">Contact</Link>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
