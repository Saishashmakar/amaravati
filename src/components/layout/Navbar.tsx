import { Link } from 'react-router-dom'
import { useState } from 'react'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <img src="/logo.png" alt="Logo" className="h-8 w-auto" />
              <span className="text-xl font-bold text-gray-800">Amaravati Gateways</span>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/" className="text-gray-600 hover:text-gray-900">Home</Link>
            
            {/* Buy Dropdown */}
            <div className="relative group">
              <button className="text-gray-600 hover:text-gray-900 py-4 flex items-center">
                Buy
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute hidden group-hover:block w-48 bg-white shadow-lg py-2 rounded-md">
                <Link to="/buy/residential" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Residential Properties</Link>
                <Link to="/buy/commercial" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Commercial Properties</Link>
                <Link to="/buy/plots" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Plots</Link>
              </div>
            </div>

            {/* Sell Dropdown */}
            <div className="relative group">
              <button className="text-gray-600 hover:text-gray-900 py-4 flex items-center">
                Sell
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute hidden group-hover:block w-48 bg-white shadow-lg py-2 rounded-md">
                <Link to="/sell/list-property" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">List Your Property</Link>
                <Link to="/sell/property-valuation" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Property Valuation</Link>
                <Link to="/sell/seller-guide" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Seller's Guide</Link>
              </div>
            </div>

            <Link to="/amaravati-updates" className="text-gray-600 hover:text-gray-900">Amaravati Updates</Link>
            <Link to="/blog" className="text-gray-600 hover:text-gray-900">Blog</Link>
            <Link to="/about" className="text-gray-600 hover:text-gray-900">About</Link>
            <Link to="/contact" className="text-gray-600 hover:text-gray-900">Contact</Link>
            
            {/* Login/Register */}
            <div className="flex items-center space-x-2">
              <button className="px-4 py-2 text-gray-600 hover:text-gray-900">Login</button>
              <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300">
                Register
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
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

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link to="/" className="block px-3 py-2 text-gray-600 hover:text-gray-900">Home</Link>
            <div className="px-3 py-2">
              <span className="block text-gray-600 font-medium mb-1">Buy</span>
              <Link to="/buy/residential" className="block pl-4 py-1 text-sm text-gray-600 hover:text-gray-900">Residential Properties</Link>
              <Link to="/buy/commercial" className="block pl-4 py-1 text-sm text-gray-600 hover:text-gray-900">Commercial Properties</Link>
              <Link to="/buy/plots" className="block pl-4 py-1 text-sm text-gray-600 hover:text-gray-900">Plots</Link>
            </div>
            <div className="px-3 py-2">
              <span className="block text-gray-600 font-medium mb-1">Sell</span>
              <Link to="/sell/list-property" className="block pl-4 py-1 text-sm text-gray-600 hover:text-gray-900">List Your Property</Link>
              <Link to="/sell/property-valuation" className="block pl-4 py-1 text-sm text-gray-600 hover:text-gray-900">Property Valuation</Link>
              <Link to="/sell/seller-guide" className="block pl-4 py-1 text-sm text-gray-600 hover:text-gray-900">Seller's Guide</Link>
            </div>
            <Link to="/amaravati-updates" className="block px-3 py-2 text-gray-600 hover:text-gray-900">Amaravati Updates</Link>
            <Link to="/blog" className="block px-3 py-2 text-gray-600 hover:text-gray-900">Blog</Link>
            <Link to="/about" className="block px-3 py-2 text-gray-600 hover:text-gray-900">About</Link>
            <Link to="/contact" className="block px-3 py-2 text-gray-600 hover:text-gray-900">Contact</Link>
            <div className="px-3 py-2 space-y-2">
              <button className="w-full px-4 py-2 text-gray-600 hover:text-gray-900 border border-gray-300 rounded-lg">
                Login
              </button>
              <button className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                Register
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
