import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HidrocrinLanding from './components/sections/HidrocrinLanding'
import ContactoRedirect from './components/ContactoRedirect'
import Historia from './pages/Historia'
import SobreNosotros from './pages/SobreNosotros'
import TerminosYCondiciones from './pages/TerminosYCondiciones'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HidrocrinLanding />} />
        <Route path="/historia" element={<Historia />} />
        <Route path="/sobre-nosotros" element={<SobreNosotros />} />
        <Route path="/terminos-y-condiciones" element={<TerminosYCondiciones />} />
        {/* Redirigir /contacto a la sección de contacto de la página principal */}
        <Route path="/contacto" element={<ContactoRedirect />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
