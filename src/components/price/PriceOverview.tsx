import { useState } from 'react'

interface PriceData {
  area: string
  zone: string
  residentialPrice: number
  commercialPrice: number
  residentialChange: number
  commercialChange: number
}

const areaData: PriceData[] = [
  // Zone A - Core Capital Region
  { area: "Amaravati Central", zone: "A", residentialPrice: 45000, commercialPrice: 65000, residentialChange: 2.5, commercialChange: 3.2 },
  { area: "Velagapudi", zone: "A", residentialPrice: 42000, commercialPrice: 62000, residentialChange: 2.1, commercialChange: 2.8 },
  { area: "Rayapudi", zone: "A", residentialPrice: 40000, commercialPrice: 60000, residentialChange: 1.9, commercialChange: 2.5 },
  { area: "Thullur", zone: "A", residentialPrice: 38000, commercialPrice: 58000, residentialChange: 1.8, commercialChange: 2.3 },
  { area: "Nelapadu", zone: "A", residentialPrice: 37000, commercialPrice: 57000, residentialChange: 1.7, commercialChange: 2.2 },

  // Zone B - Mangalagiri Region
  { area: "Mangalagiri Central", zone: "B", residentialPrice: 35000, commercialPrice: 55000, residentialChange: 1.8, commercialChange: 2.1 },
  { area: "Navuluru", zone: "B", residentialPrice: 33000, commercialPrice: 53000, residentialChange: 1.6, commercialChange: 1.9 },
  { area: "Bethapudi", zone: "B", residentialPrice: 32000, commercialPrice: 52000, residentialChange: 1.5, commercialChange: 1.8 },
  { area: "Chinakakani", zone: "B", residentialPrice: 31000, commercialPrice: 51000, residentialChange: 1.4, commercialChange: 1.7 },
  { area: "Tadepalli", zone: "B", residentialPrice: 34000, commercialPrice: 54000, residentialChange: 1.7, commercialChange: 2.0 },

  // Zone C - Vijayawada Region
  { area: "Vijayawada Central", zone: "C", residentialPrice: 40000, commercialPrice: 60000, residentialChange: -0.5, commercialChange: 1.5 },
  { area: "Gollapudi", zone: "C", residentialPrice: 38000, commercialPrice: 58000, residentialChange: -0.3, commercialChange: 1.3 },
  { area: "Gannavaram", zone: "C", residentialPrice: 36000, commercialPrice: 56000, residentialChange: -0.2, commercialChange: 1.2 },
  { area: "Ramavarappadu", zone: "C", residentialPrice: 35000, commercialPrice: 55000, residentialChange: -0.1, commercialChange: 1.1 },
  { area: "Gunadala", zone: "C", residentialPrice: 34000, commercialPrice: 54000, residentialChange: -0.4, commercialChange: 1.0 },

  // Zone D - Guntur Region
  { area: "Guntur Central", zone: "D", residentialPrice: 30000, commercialPrice: 50000, residentialChange: 1.2, commercialChange: 1.8 },
  { area: "Nallapadu", zone: "D", residentialPrice: 28000, commercialPrice: 48000, residentialChange: 1.0, commercialChange: 1.6 },
  { area: "Pedakakani", zone: "D", residentialPrice: 27000, commercialPrice: 47000, residentialChange: 0.9, commercialChange: 1.5 },
  { area: "Gorantla", zone: "D", residentialPrice: 26000, commercialPrice: 46000, residentialChange: 0.8, commercialChange: 1.4 },
  { area: "Etukuru", zone: "D", residentialPrice: 25000, commercialPrice: 45000, residentialChange: 0.7, commercialChange: 1.3 },

  // Zone E - Peripheral Areas
  { area: "Tenali", zone: "E", residentialPrice: 24000, commercialPrice: 44000, residentialChange: 0.6, commercialChange: 1.2 },
  { area: "Sattenapalli", zone: "E", residentialPrice: 22000, commercialPrice: 42000, residentialChange: 0.5, commercialChange: 1.1 },
  { area: "Ponnuru", zone: "E", residentialPrice: 21000, commercialPrice: 41000, residentialChange: 0.4, commercialChange: 1.0 },
  { area: "Chilakaluripet", zone: "E", residentialPrice: 20000, commercialPrice: 40000, residentialChange: 0.3, commercialChange: 0.9 },
  { area: "Bapatla", zone: "E", residentialPrice: 19000, commercialPrice: 39000, residentialChange: 0.2, commercialChange: 0.8 },

  // Zone F - Growth Corridor
  { area: "Nuzvid", zone: "F", residentialPrice: 18000, commercialPrice: 38000, residentialChange: 0.1, commercialChange: 0.7 },
  { area: "Gudivada", zone: "F", residentialPrice: 17000, commercialPrice: 37000, residentialChange: 0.0, commercialChange: 0.6 },
  { area: "Vuyyuru", zone: "F", residentialPrice: 16000, commercialPrice: 36000, residentialChange: -0.1, commercialChange: 0.5 },
  { area: "Avanigadda", zone: "F", residentialPrice: 15000, commercialPrice: 35000, residentialChange: -0.2, commercialChange: 0.4 }
];

function PriceOverview() {
  const [selectedZone, setSelectedZone] = useState('all')

  const filteredData = selectedZone === 'all' 
    ? areaData 
    : areaData.filter(item => item.zone === selectedZone)

  return (
    <div className="bg-white rounded-lg shadow-xl">
      {/* Header */}
      <div className="p-6 border-b border-gray-100">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h2 className="text-2xl font-bold text-gray-800">Market Overview</h2>
            <p className="text-gray-500 mt-1">Real-time property rates in Amaravati Capital Region</p>
          </div>
          <div className="flex items-center gap-4">
            <select 
              value={selectedZone}
              onChange={(e) => setSelectedZone(e.target.value)}
              className="px-4 py-2 border border-gray-200 rounded-lg text-gray-700 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="all">All Zones</option>
              <option value="A">Zone A - Core Capital</option>
              <option value="B">Zone B - Mangalagiri</option>
              <option value="C">Zone C - Vijayawada</option>
              <option value="D">Zone D - Guntur</option>
              <option value="E">Zone E - Peripheral</option>
              <option value="F">Zone F - Growth Corridor</option>
            </select>
          </div>
        </div>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 p-6 bg-gray-50">
        <div className="bg-white p-4 rounded-lg shadow">
          <div className="text-sm text-gray-500">Average Residential</div>
          <div className="text-xl font-bold text-gray-800 mt-1">₹32,500/sq.yd</div>
          <div className="text-sm text-green-600 mt-1">+1.2% ↑</div>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <div className="text-sm text-gray-500">Average Commercial</div>
          <div className="text-xl font-bold text-gray-800 mt-1">₹52,800/sq.yd</div>
          <div className="text-sm text-green-600 mt-1">+1.8% ↑</div>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <div className="text-sm text-gray-500">Total Volume</div>
          <div className="text-xl font-bold text-gray-800 mt-1">₹2.8B</div>
          <div className="text-sm text-green-600 mt-1">+0.5% ↑</div>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <div className="text-sm text-gray-500">Market Activity</div>
          <div className="text-xl font-bold text-gray-800 mt-1">426 Deals</div>
          <div className="text-sm text-green-600 mt-1">+12 ↑</div>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="bg-gray-50">
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Area</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Residential (₹/sq.yd)</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">24h Change</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Commercial (₹/sq.yd)</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">24h Change</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {filteredData.map((item, index) => (
              <tr key={index} className="hover:bg-gray-50">
                <td className="px-6 py-4">
                  <div className="text-sm font-medium text-gray-900">{item.area}</div>
                  <div className="text-xs text-gray-500">Zone {item.zone}</div>
                </td>
                <td className="px-6 py-4 text-sm text-gray-900">
                  ₹{item.residentialPrice.toLocaleString()}
                </td>
                <td className="px-6 py-4">
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                    item.residentialChange >= 0 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-red-100 text-red-800'
                  }`}>
                    {item.residentialChange >= 0 ? '+' : ''}{item.residentialChange}%
                  </span>
                </td>
                <td className="px-6 py-4 text-sm text-gray-900">
                  ₹{item.commercialPrice.toLocaleString()}
                </td>
                <td className="px-6 py-4">
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                    item.commercialChange >= 0 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-red-100 text-red-800'
                  }`}>
                    {item.commercialChange >= 0 ? '+' : ''}{item.commercialChange}%
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Footer */}
      <div className="p-6 border-t border-gray-100">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center text-sm text-gray-500">
          <div>Last updated: {new Date().toLocaleDateString()}</div>
          <div className="mt-2 md:mt-0">* Prices are indicative and subject to market conditions</div>
        </div>
      </div>
    </div>
  )
}

export default PriceOverview
