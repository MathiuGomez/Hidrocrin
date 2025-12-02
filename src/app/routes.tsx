import { Routes, Route } from 'react-router-dom'
import LandingSection from '@/features/landing/LandingSection'
import ContactRedirect from '@/components/ContactRedirect'
import History from '@/pages/History'
import About from '@/pages/About'
import Terms from '@/pages/Terms'

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<LandingSection />} />
      <Route path="/historia" element={<History />} />
      <Route path="/sobre-nosotros" element={<About />} />
      <Route path="/terminos-y-condiciones" element={<Terms />} />
      {/* Redirigir /contacto a la sección de contacto de la página principal */}
      <Route path="/contacto" element={<ContactRedirect />} />
    </Routes>
  )
}

