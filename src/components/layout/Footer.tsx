import { Link } from "react-router-dom"
import { Mail, Phone, MapPin, ArrowRight, Leaf } from "lucide-react"
import { Button } from "../ui/button"
import { IMAGES, IMAGE_ALTS } from "../../assets/images"

export default function Footer() {
  return (
    <footer className="relative py-12 px-4 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 bg-emerald-300 rounded-full blur-3xl"></div>
        <div className="absolute top-20 right-20 w-24 h-24 bg-teal-300 rounded-full blur-2xl"></div>
        <div className="absolute bottom-10 left-1/3 w-40 h-40 bg-green-300 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto relative z-10">
        {/* Main Footer Content */}
        <div 
          className="rounded-3xl backdrop-blur-xl border border-emerald-200/30 shadow-2xl p-12 mb-8"
          style={{
            background: 'rgba(16, 185, 129, 0.08)',
            backdropFilter: 'blur(20px)',
          }}
        >
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12">
            {/* Brand Section */}
            <div className="lg:col-span-1 md:col-span-2 space-y-6">
              <div className="flex items-center gap-4">
                <img 
                  src={IMAGES.LOGO} 
                  alt={IMAGE_ALTS.LOGO} 
                  className="h-16 w-16 object-contain"
                />
                <span className="text-2xl font-bold text-foreground">Hidrocrin</span>
              </div>
              <p className="text-muted-foreground leading-relaxed text-base max-w-sm">
                Transformando residuos en soluciones sostenibles para la agricultura del futuro. 
                Innovación en economía circular para un mundo más verde.
              </p>
              <div className="flex items-center gap-4">
                <a 
                  href="mailto:hidrocrin.dosmundo@gmail.com"
                  className="h-10 w-10 bg-emerald-100 rounded-lg flex items-center justify-center hover:bg-emerald-200 transition-colors cursor-pointer"
                  aria-label="Email"
                >
                  <Mail className="h-5 w-5 text-emerald-600" />
                </a>
                <a 
                  href="tel:+56975266692"
                  className="h-10 w-10 bg-teal-100 rounded-lg flex items-center justify-center hover:bg-teal-200 transition-colors cursor-pointer"
                  aria-label="Teléfono"
                >
                  <Phone className="h-5 w-5 text-teal-600" />
                </a>
                <div className="h-10 w-10 bg-emerald-100 rounded-lg flex items-center justify-center hover:bg-emerald-200 transition-colors cursor-pointer">
                  <MapPin className="h-5 w-5 text-emerald-600" />
                </div>
              </div>
            </div>

            {/* Navigation Links */}
            <div className="space-y-6">
              <h4 className="text-lg font-bold text-foreground mb-6">Navegación</h4>
              <ul className="space-y-4">
                <li>
                  <Link to="/" className="group flex items-center gap-3 text-muted-foreground hover:text-foreground transition-all duration-300">
                    <div className="h-2 w-2 bg-emerald-400 rounded-full group-hover:bg-emerald-600 transition-colors"></div>
                    <span className="text-base">Inicio</span>
                  </Link>
                </li>
                <li>
                  <Link to="/historia" className="group flex items-center gap-3 text-muted-foreground hover:text-foreground transition-all duration-300">
                    <div className="h-2 w-2 bg-emerald-400 rounded-full group-hover:bg-emerald-600 transition-colors"></div>
                    <span className="text-base">Historia</span>
                  </Link>
                </li>
                <li>
                  <Link to="/sobre-nosotros" className="group flex items-center gap-3 text-muted-foreground hover:text-foreground transition-all duration-300">
                    <div className="h-2 w-2 bg-emerald-400 rounded-full group-hover:bg-emerald-600 transition-colors"></div>
                    <span className="text-base">Sobre Nosotros</span>
                  </Link>
                </li>
              </ul>
            </div>

            {/* Project Links */}
            <div className="space-y-6">
              <h4 className="text-lg font-bold text-foreground mb-6">Proyecto</h4>
              <ul className="space-y-4">
                <li>
                  <Link to="/sobre-nosotros" className="group flex items-center gap-3 text-muted-foreground hover:text-foreground transition-all duration-300">
                    <div className="h-2 w-2 bg-teal-400 rounded-full group-hover:bg-teal-600 transition-colors"></div>
                    <span className="text-base">Sobre Nosotros</span>
                  </Link>
                </li>
                <li>
                  <Link to="/#contacto-formulario" className="group flex items-center gap-3 text-muted-foreground hover:text-foreground transition-all duration-300">
                    <div className="h-2 w-2 bg-teal-400 rounded-full group-hover:bg-teal-600 transition-colors"></div>
                    <span className="text-base">Contacto</span>
                  </Link>
                </li>
              </ul>
            </div>

            {/* Legal & Newsletter */}
            <div className="space-y-6">
              <h4 className="text-lg font-bold text-foreground mb-6">Legal</h4>
              <ul className="space-y-4 mb-8">
                <li>
                  <Link to="/terminos-y-condiciones" className="group flex items-center gap-3 text-muted-foreground hover:text-foreground transition-all duration-300">
                    <div className="h-2 w-2 bg-emerald-400 rounded-full group-hover:bg-emerald-600 transition-colors"></div>
                    <span className="text-base">Términos y condiciones</span>
                  </Link>
                </li>
              </ul>
              
              {/* Newsletter */}
              <div className="p-4 bg-white/20 rounded-2xl backdrop-blur-sm border border-emerald-200/20">
                <h5 className="font-semibold text-foreground mb-3">Mantente al día</h5>
                <p className="text-sm text-muted-foreground mb-3">Recibe las últimas novedades sobre Hidrocrin</p>
                <div className="flex gap-2">
                  <input 
                    type="email" 
                    placeholder="tu@email.com" 
                    className="flex-1 px-3 py-2 bg-white/50 border border-emerald-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-emerald-400/20 focus:border-emerald-400"
                  />
                  <Button size="sm" className="bg-emerald-600 hover:bg-emerald-700 text-white px-4">
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div 
          className="rounded-2xl backdrop-blur-xl border border-emerald-200/20 shadow-xl p-8 text-center"
          style={{
            background: 'rgba(16, 185, 129, 0.05)',
            backdropFilter: 'blur(15px)',
          }}
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-muted-foreground text-base">
              © 2025 Hidrocrin. Todos los derechos reservados.
            </p>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span>Hecho con</span>
              <Leaf className="h-4 w-4 text-emerald-600" />
              <span>para un futuro sostenible</span>
            </div>
            <p className="text-sm text-emerald-600 font-medium">
              Proyecto de Economía Circular
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

