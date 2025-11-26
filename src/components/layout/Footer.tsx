import { Link, useNavigate, useLocation } from "react-router-dom"
import { Mail, Leaf, Instagram, Facebook } from "lucide-react"
import { IMAGES, IMAGE_ALTS } from "../../assets/images"

export default function Footer() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleContactClick = (e: React.MouseEvent) => {
    e.preventDefault();
    
    // Si ya estamos en la página principal, hacer scroll
    if (location.pathname === '/') {
      const element = document.getElementById("contacto-formulario");
      if (element) {
        const headerOffset = 120;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        window.scrollTo({
          top: Math.max(0, offsetPosition),
          behavior: "smooth"
        });
      }
    } else {
      // Si estamos en otra página, navegar con state
      navigate('/', { state: { scrollToContact: true } });
    }
  };
  return (
    <footer className="relative py-6 sm:py-8 md:py-10 lg:py-12 px-3 sm:px-4 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 bg-emerald-300 rounded-full blur-3xl"></div>
        <div className="absolute top-20 right-20 w-24 h-24 bg-teal-300 rounded-full blur-2xl"></div>
        <div className="absolute bottom-10 left-1/3 w-40 h-40 bg-green-300 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto relative z-10">
        {/* Main Footer Content */}
        <div 
          className="rounded-xl sm:rounded-2xl lg:rounded-3xl backdrop-blur-xl border border-emerald-200/30 shadow-2xl p-4 sm:p-6 md:p-8 lg:p-12 mb-4 sm:mb-6 md:mb-8"
          style={{
            background: 'rgba(16, 185, 129, 0.08)',
            backdropFilter: 'blur(20px)',
          }}
        >
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-5 sm:gap-6 md:gap-8 lg:gap-12">
            {/* Brand Section */}
            <div className="lg:col-span-1 md:col-span-2 space-y-3 sm:space-y-4 md:space-y-6">
              <div className="flex items-center gap-2 sm:gap-3 md:gap-4">
                <img 
                  src={IMAGES.LOGO} 
                  alt={IMAGE_ALTS.LOGO} 
                  className="h-10 w-10 sm:h-12 sm:w-12 md:h-16 md:w-16 object-contain"
                />
                <span className="text-lg sm:text-xl md:text-2xl font-bold text-foreground">Hidrocrin</span>
              </div>
              <p className="text-xs sm:text-sm md:text-base text-muted-foreground leading-relaxed max-w-sm">
                Transformando residuos en soluciones sostenibles para la agricultura del futuro. 
                Innovación en economía circular para un mundo más verde.
              </p>
              <div className="flex items-center gap-2 sm:gap-3 md:gap-4">
                <a 
                  href="mailto:hidrocrin.dosmundo@gmail.com"
                  className="h-9 w-9 sm:h-10 sm:w-10 bg-emerald-100 rounded-lg flex items-center justify-center hover:bg-emerald-200 active:bg-emerald-300 transition-colors cursor-pointer"
                  aria-label="Enviar correo"
                >
                  <Mail className="h-4 w-4 sm:h-5 sm:w-5 text-emerald-600" />
                </a>
                <a 
                  href="https://www.instagram.com/hidrrcrin?igsh=MTJxdTJqdGtia3R2YQ=="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-9 w-9 sm:h-10 sm:w-10 bg-pink-100 rounded-lg flex items-center justify-center hover:bg-pink-200 active:bg-pink-300 transition-colors cursor-pointer"
                  aria-label="Instagram"
                >
                  <Instagram className="h-4 w-4 sm:h-5 sm:w-5 text-pink-600" />
                </a>
                <a 
                  href="https://www.facebook.com/share/1CiJxG658X/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-9 w-9 sm:h-10 sm:w-10 bg-blue-100 rounded-lg flex items-center justify-center hover:bg-blue-200 active:bg-blue-300 transition-colors cursor-pointer"
                  aria-label="Facebook"
                >
                  <Facebook className="h-4 w-4 sm:h-5 sm:w-5 text-blue-600" />
                </a>
              </div>
            </div>

            {/* Navigation Links */}
            <div className="space-y-3 sm:space-y-4 md:space-y-6">
              <h4 className="text-sm sm:text-base md:text-lg font-bold text-foreground mb-3 sm:mb-4 md:mb-6">Navegación</h4>
              <ul className="space-y-2 sm:space-y-3 md:space-y-4">
                <li>
                  <Link to="/" className="group flex items-center gap-2 sm:gap-3 text-muted-foreground hover:text-foreground active:text-emerald-700 transition-all duration-300">
                    <div className="h-1.5 w-1.5 sm:h-2 sm:w-2 bg-emerald-400 rounded-full group-hover:bg-emerald-600 transition-colors"></div>
                    <span className="text-sm sm:text-base">Inicio</span>
                  </Link>
                </li>
                <li>
                  <Link to="/historia" className="group flex items-center gap-2 sm:gap-3 text-muted-foreground hover:text-foreground active:text-emerald-700 transition-all duration-300">
                    <div className="h-1.5 w-1.5 sm:h-2 sm:w-2 bg-emerald-400 rounded-full group-hover:bg-emerald-600 transition-colors"></div>
                    <span className="text-sm sm:text-base">Historia</span>
                  </Link>
                </li>
                <li>
                  <Link to="/sobre-nosotros" className="group flex items-center gap-2 sm:gap-3 text-muted-foreground hover:text-foreground active:text-emerald-700 transition-all duration-300">
                    <div className="h-1.5 w-1.5 sm:h-2 sm:w-2 bg-emerald-400 rounded-full group-hover:bg-emerald-600 transition-colors"></div>
                    <span className="text-sm sm:text-base">Sobre Nosotros</span>
                  </Link>
                </li>
              </ul>
            </div>

            {/* Project Links */}
            <div className="space-y-3 sm:space-y-4 md:space-y-6">
              <h4 className="text-sm sm:text-base md:text-lg font-bold text-foreground mb-3 sm:mb-4 md:mb-6">Proyecto</h4>
              <ul className="space-y-2 sm:space-y-3 md:space-y-4">
                <li>
                  <Link to="/historia" className="group flex items-center gap-2 sm:gap-3 text-muted-foreground hover:text-foreground active:text-emerald-700 transition-all duration-300">
                    <div className="h-1.5 w-1.5 sm:h-2 sm:w-2 bg-teal-400 rounded-full group-hover:bg-teal-600 transition-colors"></div>
                    <span className="text-sm sm:text-base">Historia</span>
                  </Link>
                </li>
                <li>
                  <Link to="/sobre-nosotros" className="group flex items-center gap-2 sm:gap-3 text-muted-foreground hover:text-foreground active:text-emerald-700 transition-all duration-300">
                    <div className="h-1.5 w-1.5 sm:h-2 sm:w-2 bg-teal-400 rounded-full group-hover:bg-teal-600 transition-colors"></div>
                    <span className="text-sm sm:text-base">Sobre Nosotros</span>
                  </Link>
                </li>
                <li>
                  <a 
                    href="/#contacto-formulario"
                    onClick={handleContactClick}
                    className="group flex items-center gap-2 sm:gap-3 text-muted-foreground hover:text-foreground active:text-emerald-700 transition-all duration-300 cursor-pointer"
                  >
                    <div className="h-1.5 w-1.5 sm:h-2 sm:w-2 bg-teal-400 rounded-full group-hover:bg-teal-600 transition-colors"></div>
                    <span className="text-sm sm:text-base">Contacto</span>
                  </a>
                </li>
              </ul>
            </div>

            {/* Legal */}
            <div className="space-y-3 sm:space-y-4 md:space-y-6">
              <h4 className="text-sm sm:text-base md:text-lg font-bold text-foreground mb-3 sm:mb-4 md:mb-6">Legal</h4>
              <ul className="space-y-2 sm:space-y-3 md:space-y-4">
                <li>
                  <Link to="/terminos-y-condiciones" className="group flex items-center gap-2 sm:gap-3 text-muted-foreground hover:text-foreground active:text-emerald-700 transition-all duration-300">
                    <div className="h-1.5 w-1.5 sm:h-2 sm:w-2 bg-emerald-400 rounded-full group-hover:bg-emerald-600 transition-colors"></div>
                    <span className="text-sm sm:text-base">Términos y condiciones</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div 
          className="rounded-lg sm:rounded-xl md:rounded-2xl backdrop-blur-xl border border-emerald-200/20 shadow-xl p-4 sm:p-5 md:p-6 lg:p-8 text-center"
          style={{
            background: 'rgba(16, 185, 129, 0.05)',
            backdropFilter: 'blur(15px)',
          }}
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-2.5 sm:gap-3 md:gap-4">
            <p className="text-muted-foreground text-xs sm:text-sm md:text-base">
              © 2025 Hidrocrin. Todos los derechos reservados.
            </p>
            <div className="flex items-center gap-1.5 sm:gap-2 text-[10px] sm:text-xs md:text-sm text-muted-foreground">
              <span>Hecho con</span>
              <Leaf className="h-3 w-3 sm:h-3.5 sm:w-3.5 md:h-4 md:w-4 text-emerald-600" />
              <span>para un futuro sostenible</span>
            </div>
            <p className="text-[10px] sm:text-xs md:text-sm text-emerald-600 font-medium">
              Proyecto de Economía Circular
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

