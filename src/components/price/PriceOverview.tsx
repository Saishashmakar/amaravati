import { useState } from 'react'

interface PriceData {
  area: string
  zone: string
  residentialPrice: number
  commercialPrice: number
  residentialChange: number
  commercialChange: number
  trend: 'up' | 'down' | 'stable'
}

const areaData: PriceData[] = [
  // Zone A - Near Core Capital
  { area: "Mandadam", zone: "A", residentialPrice: 45000, commercialPrice: 65000, residentialChange: 2.5, commercialChange: 3.2, trend: 'up' },
  { area: "Velagapudi", zone: "A", residentialPrice: 42000, commercialPrice: 62000, residentialChange: 2.1, commercialChange: 2.8, trend: 'up' },
  { area: "Venkatapalem", zone: "A", residentialPrice: 40000, commercialPrice: 60000, residentialChange: 1.9, commercialChange: 2.5, trend: 'up' },
  { area: "Uddandarayunipalem", zone: "A", residentialPrice: 38000, commercialPrice: 58000, residentialChange: 1.8, commercialChange: 2.3, trend: 'up' },
  { area: "Lingayapalem", zone: "A", residentialPrice: 37000, commercialPrice: 57000, residentialChange: 1.7, commercialChange: 2.2, trend: 'up' },
  
  // Zone B - Happy Nest & High Court
  { area: "Thulluru", zone: "B", residentialPrice: 35000, commercialPrice: 55000, residentialChange: 1.8, commercialChange: 2.1, trend: 'up' },
  { area: "Nelapadu", zone: "B", residentialPrice: 33000, commercialPrice: 53000, residentialChange: 1.6, commercialChange: 1.9, trend: 'up' },
  { area: "Inavolu", zone: "B", residentialPrice: 32000, commercialPrice: 52000, residentialChange: 1.5, commercialChange: 1.8, trend: 'stable' },
  
  // Zone C
  { area: "Dondapadu", zone: "C", residentialPrice: 40000, commercialPrice: 60000, residentialChange: -0.5, commercialChange: 1.5, trend: 'down' },
  { area: "Borupalem", zone: "C", residentialPrice: 38000, commercialPrice: 58000, residentialChange: -0.3, commercialChange: 1.3, trend: 'down' },
  
  // Zone D - Guntur Region
  { area: "Neerukonda", zone: "D", residentialPrice: 30000, commercialPrice: 50000, residentialChange: 1.2, commercialChange: 1.8, trend: 'up' },
  { area: "Kuragallu", zone: "D", residentialPrice: 28000, commercialPrice: 48000, residentialChange: 1.0, commercialChange: 1.6, trend: 'stable' }
]

function PriceOverview() {
  const [selectedZone, setSelectedZone] = useState<string>('all')
  const [sortConfig, setSortConfig] = useState<{ key: keyof PriceData; direction: 'asc' | 'desc' } | null>(null)

  const filteredData = selectedZone === 'all' 
    ? areaData 
    : areaData.filter(item => item.zone === selectedZone)

  const sortedData = [...filteredData].sort((a, b) => {
    if (!sortConfig) return 0
    
    const aValue = a[sortConfig.key]
    const bValue = b[sortConfig.key]
    
    if (aValue < bValue) return sortConfig.direction === 'asc' ? -1 : 1
    if (aValue > bValue) return sortConfig.direction === 'asc' ? 1 : -1
    return 0
  })

  const handleSort = (key: keyof PriceData) => {
    setSortConfig(current => ({
      key,
      direction: current?.key === key && current.direction === 'asc' ? 'desc' : 'asc'
    }))
  }

  const TrendIcon = ({ trend }: { trend: 'up' | 'down' | 'stable' }) => {
    if (trend === 'up') {
      return <span className="text-green-500">↑</span>
    }
    if (trend === 'down') {
      return <span className="text-red-500">↓</span>
    }
    return <span className="text-gray-500">→</span>
  }

  return (
    <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 p-6 text-white">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h2 className="text-3xl font-bold">Market Overview</h2>
            <p className="mt-2 opacity-90">Real-time property rates in Amaravati Capital Region</p>
          </div>
          <div className="flex items-center gap-4">
            <select 
              value={selectedZone}
              onChange={(e) => setSelectedZone(e.target.value)}
              className="px-4 py-2 bg-white text-gray-900 rounded-lg border border-white/20 focus:outline-none focus:ring-2 focus:ring-white/50"
              style={{ WebkitAppearance: 'menulist' }}
            >
              <option value="all" className="text-gray-900">All Zones</option>
              <option value="A" className="text-gray-900">Zone A - Core Capital</option>
              <option value="B" className="text-gray-900">Zone B - Mangalagiri</option>
              <option value="C" className="text-gray-900">Zone C - Vijayawada</option>
              <option value="D" className="text-gray-900">Zone D - Guntur</option>
            </select>
          </div>
        </div>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 p-6 bg-gray-50">
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <div className="text-sm font-medium text-gray-500 mb-1">Average Residential</div>
          <div className="text-2xl font-bold text-gray-900">₹32,500/sq.yd</div>
          <div className="flex items-center gap-1 mt-2">
            <span className="text-green-500">↑</span>
            <span className="text-sm font-medium text-green-600">+1.2%</span>
          </div>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <div className="text-sm font-medium text-gray-500 mb-1">Average Commercial</div>
          <div className="text-2xl font-bold text-gray-900">₹52,800/sq.yd</div>
          <div className="flex items-center gap-1 mt-2">
            <span className="text-green-500">↑</span>
            <span className="text-sm font-medium text-green-600">+1.8%</span>
          </div>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <div className="text-sm font-medium text-gray-500 mb-1">Monthly Volume</div>
          <div className="text-2xl font-bold text-gray-900">₹2.8B</div>
          <div className="flex items-center gap-1 mt-2">
            <span className="text-green-500">↑</span>
            <span className="text-sm font-medium text-green-600">+0.5%</span>
          </div>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <div className="text-sm font-medium text-gray-500 mb-1">Market Activity</div>
          <div className="text-2xl font-bold text-gray-900">426 Deals</div>
          <div className="flex items-center gap-1 mt-2">
            <span className="text-green-500">↑</span>
            <span className="text-sm font-medium text-green-600">+12</span>
          </div>
        </div>
      </div>

      {/* Price Table */}
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="bg-gray-50 border-y border-gray-100">
              <th className="px-6 py-4 text-left">
                <button 
                  onClick={() => handleSort('area')}
                  className="flex items-center gap-2 text-sm font-semibold text-gray-600 hover:text-gray-900"
                >
                  Area & Zone
                  {sortConfig?.key === 'area' && (
                    <span>{sortConfig.direction === 'asc' ? '↑' : '↓'}</span>
                  )}
                </button>
              </th>
              <th className="px-6 py-4">
                <button 
                  onClick={() => handleSort('residentialPrice')}
                  className="flex items-center gap-2 text-sm font-semibold text-gray-600 hover:text-gray-900"
                >
                  Residential (₹/sq.yd)
                  {sortConfig?.key === 'residentialPrice' && (
                    <span>{sortConfig.direction === 'asc' ? '↑' : '↓'}</span>
                  )}
                </button>
              </th>
              <th className="px-6 py-4 text-sm font-semibold text-gray-600">24h Change</th>
              <th className="px-6 py-4">
                <button 
                  onClick={() => handleSort('commercialPrice')}
                  className="flex items-center gap-2 text-sm font-semibold text-gray-600 hover:text-gray-900"
                >
                  Commercial (₹/sq.yd)
                  {sortConfig?.key === 'commercialPrice' && (
                    <span>{sortConfig.direction === 'asc' ? '↑' : '↓'}</span>
                  )}
                </button>
              </th>
              <th className="px-6 py-4 text-sm font-semibold text-gray-600">24h Change</th>
              <th className="px-6 py-4 text-sm font-semibold text-gray-600">Trend</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {sortedData.map((item, index) => (
              <tr 
                key={index} 
                className="hover:bg-blue-50/50 transition-colors group"
              >
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-semibold">
                      {item.zone}
                    </div>
                    <div>
                      <div className="font-medium text-gray-900">{item.area}</div>
                      <div className="text-sm text-gray-500">Zone {item.zone}</div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 text-center">
                  <span className="font-medium text-gray-900">
                    ₹{item.residentialPrice.toLocaleString()}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <div className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                    item.residentialChange >= 0 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-red-100 text-red-800'
                  }`}>
                    {item.residentialChange >= 0 ? '+' : ''}{item.residentialChange}%
                  </div>
                </td>
                <td className="px-6 py-4 text-center">
                  <span className="font-medium text-gray-900">
                    ₹{item.commercialPrice.toLocaleString()}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <div className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                    item.commercialChange >= 0 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-red-100 text-red-800'
                  }`}>
                    {item.commercialChange >= 0 ? '+' : ''}{item.commercialChange}%
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center justify-center">
                    <TrendIcon trend={item.trend} />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Footer */}
      <div className="p-6 border-t border-gray-100 bg-gray-50">
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-green-500"></span>
            <span>Last updated: {new Date().toLocaleString()}</span>
          </div>
          <div className="mt-2 md:mt-0 text-xs">
            * Prices are indicative and subject to market conditions
          </div>
        </div>
      </div>
    </div>
  )
}

export default PriceOverview
