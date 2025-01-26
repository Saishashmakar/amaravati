import { BrowserRouter, Routes, Route } from 'react-router-dom'
import TopBar from './components/layout/TopBar'
import Navbar from './components/layout/Navbar'
import WhatsAppFloat from './components/common/WhatsAppFloat'
import Home from './pages/Home'
import PropertyDetails from './pages/PropertyDetails'
import Dashboard from './pages/admin/Dashboard'

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen">
        <TopBar />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/property/:id" element={<PropertyDetails />} />
          <Route path="/admin/dashboard" element={<Dashboard />} />
        </Routes>
        <WhatsAppFloat />
      </div>
    </BrowserRouter>
  )
}

export default App
