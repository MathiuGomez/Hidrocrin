import { useState, useEffect } from "react"
import { Link, useLocation } from "react-router-dom"
import { Button } from "../ui/button"
import { Input } from "../ui/input"
import { Textarea } from "../ui/textarea"
import { Video } from "../ui/video"
import { Carousel } from "../ui/carousel"
import { Droplet, Leaf, Recycle, Users, ArrowRight, CheckCircle2, Mail, Phone, Instagram, Facebook } from "lucide-react"
import AnimatedNav from "../layout/AnimatedNav"
import { IMAGES, IMAGE_ALTS } from "../../assets/images"
import ActivityCalendar from "./ActivityCalendar"

export default function HidrocrinLanding() {
  const location = useLocation()
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    mensaje: "",
  })

  useEffect(() => {
    // Verificar si venimos de ContactoRedirect y debemos hacer scroll al contacto
    const shouldScrollToContact = (location.state as { scrollToContact?: boolean })?.scrollToContact
    
    if (shouldScrollToContact) {
      // Esperar a que la página se cargue completamente
      const scrollToContact = () => {
        // Buscar la sección del formulario de contacto
        const contactoFormSection = document.getElementById("contacto-formulario")
        if (contactoFormSection) {
          // Calcular la posición considerando el header fijo
          const headerOffset = 120
          const elementPosition = contactoFormSection.getBoundingClientRect().top
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset

          window.scrollTo({
            top: Math.max(0, offsetPosition),
            behavior: "smooth"
          })
        } else {
          // Fallback a la sección contacto si no se encuentra
          const contactoSection = document.getElementById("contacto")
          if (contactoSection) {
            const headerOffset = 120
            const elementPosition = contactoSection.getBoundingClientRect().top
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset

            window.scrollTo({
              top: Math.max(0, offsetPosition),
              behavior: "smooth"
            })
          }
        }
      }

      // Intentar hacer scroll después de múltiples intentos para asegurar que funcione
      const timeout1 = setTimeout(scrollToContact, 100)
      const timeout2 = setTimeout(scrollToContact, 500)
      const timeout3 = setTimeout(scrollToContact, 1000)
      
      return () => {
        clearTimeout(timeout1)
        clearTimeout(timeout2)
        clearTimeout(timeout3)
      }
    } else {
      // Si no hay instrucción de scroll, asegurar que iniciamos en la parte superior
      window.scrollTo({ top: 0, left: 0, behavior: "instant" })
    }
  }, [location.state])

  // Efecto adicional para asegurar que siempre iniciamos en la parte superior al montar el componente
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" })
  }, [])

  const navItems = [
    { href: "#inicio", label: "Inicio" },
    { href: "/sobre-nosotros", label: "Sobre Nosotros" },
    { href: "/historia", label: "Historia" },
    { href: "#contacto-formulario", label: "Contacto" }
  ]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Formulario enviado:", formData)
    // Aquí se puede agregar la lógica de envío
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-background to-teal-50">
      {/* Animated Navigation */}
      <AnimatedNav items={navItems} />

      {/* Hero Section */}
      <section id="inicio" className="pt-20 sm:pt-24 md:pt-28 lg:pt-32 pb-10 sm:pb-16 lg:pb-20 px-4 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-32 h-32 bg-emerald-300 rounded-full blur-3xl"></div>
          <div className="absolute top-40 right-20 w-24 h-24 bg-teal-300 rounded-full blur-2xl"></div>
          <div className="absolute bottom-20 left-1/3 w-40 h-40 bg-green-300 rounded-full blur-3xl"></div>
        </div>
        <div className="container mx-auto relative z-10 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
            <div className="space-y-3 sm:space-y-4 md:space-y-6">
              <div className="flex flex-col sm:flex-row items-center sm:items-center gap-2.5 sm:gap-3 md:gap-4 mb-3 sm:mb-4 md:mb-6">
                <img 
                  src={IMAGES.LOGO} 
                  alt={IMAGE_ALTS.LOGO} 
                  className="h-10 w-10 sm:h-12 sm:w-12 md:h-16 md:w-16 object-contain"
                />
                <div className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 bg-emerald-100 text-emerald-800 rounded-full text-xs sm:text-sm font-medium">
                  Innovación Sostenible
                </div>
              </div>
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground leading-tight text-balance">
                Transformamos Cabello en Soluciones para la <span className="text-emerald-600">Agricultura</span>
              </h1>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground leading-relaxed text-pretty">
                Hidrocrin convierte residuos de peluquerías en alfombras innovadoras que retienen agua y nutren el
                suelo, combatiendo la sequía y promoviendo la economía circular.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2">
                <a 
                  href="#contacto-formulario"
                  onClick={(e) => {
                    e.preventDefault();
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
                  }}
                >
                  <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white w-full sm:w-auto h-11 sm:h-12 text-sm sm:text-base">
                    Conoce Más
                    <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                  </Button>
                </a>
                <a 
                  href="#proceso"
                  onClick={(e) => {
                    e.preventDefault();
                    const element = document.getElementById("proceso");
                    if (element) {
                      const headerOffset = 120;
                      const elementPosition = element.getBoundingClientRect().top;
                      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                      window.scrollTo({
                        top: Math.max(0, offsetPosition),
                        behavior: "smooth"
                      });
                    }
                  }}
                >
                  <Button size="lg" variant="outline" className="w-full sm:w-auto bg-transparent h-11 sm:h-12 text-sm sm:text-base">
                    Ver Proceso
                  </Button>
                </a>
              </div>
            </div>
            <div className="relative mt-6 lg:mt-0">
              <Carousel 
                images={[
                  {
                    src: IMAGES.COLEGIO_RURAL,
                    alt: IMAGE_ALTS.COLEGIO_RURAL
                  },
                  {
                    src: IMAGES.SEMINARIO_CHILOE,
                    alt: IMAGE_ALTS.SEMINARIO_CHILOE
                  },
                  {
                    src: IMAGES.SOCIO_COMUNITARIO,
                    alt: IMAGE_ALTS.SOCIO_COMUNITARIO
                  }
                ]}
                autoPlayInterval={5000}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Problema Section */}
      <section id="problema" className="py-10 sm:py-14 lg:py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-6 sm:mb-10 lg:mb-16">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-2 sm:mb-3 md:mb-4">El Problema que Enfrentamos</h2>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto text-pretty px-4">
              Dos crisis ambientales que necesitan soluciones urgentes e innovadoras
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
            <div 
              className="p-4 sm:p-5 md:p-6 lg:p-8 rounded-xl sm:rounded-2xl lg:rounded-3xl backdrop-blur-xl border border-emerald-200/30 shadow-xl hover:shadow-2xl transition-all duration-300"
              style={{
                background: 'rgba(16, 185, 129, 0.08)',
                backdropFilter: 'blur(20px)',
              }}
            >
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2.5 sm:gap-3 md:gap-4 mb-3 sm:mb-4">
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-foreground">Residuos de Peluquerías</h3>
                <img 
                  src={IMAGES.LOGO} 
                  alt={IMAGE_ALTS.LOGO} 
                  className="h-8 sm:h-10 md:h-12 object-contain"
                />
              </div>
              <p className="text-xs sm:text-sm md:text-base text-muted-foreground leading-relaxed mb-3 sm:mb-4">
                Las peluquerías generan toneladas de cabello que terminan en vertederos, contribuyendo a la
                contaminación ambiental. Este recurso orgánico se desperdicia cuando podría tener un segundo uso
                valioso.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 sm:h-5 sm:w-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                  <span className="text-xs sm:text-sm md:text-base text-muted-foreground">Miles de toneladas de cabello desechado anualmente</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 sm:h-5 sm:w-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                  <span className="text-xs sm:text-sm md:text-base text-muted-foreground">Acumulación en vertederos y contaminación</span>
                </li>
              </ul>
            </div>

            <div 
              className="p-4 sm:p-5 md:p-6 lg:p-8 rounded-xl sm:rounded-2xl lg:rounded-3xl backdrop-blur-xl border border-emerald-200/30 shadow-xl hover:shadow-2xl transition-all duration-300"
              style={{
                background: 'rgba(16, 185, 129, 0.08)',
                backdropFilter: 'blur(20px)',
              }}
            >
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2.5 sm:gap-3 md:gap-4 mb-3 sm:mb-4">
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-foreground">Crisis de Sequía</h3>
                <img 
                  src={IMAGES.LOGO} 
                  alt={IMAGE_ALTS.LOGO} 
                  className="h-8 sm:h-10 md:h-12 object-contain"
                />
              </div>
              <p className="text-xs sm:text-sm md:text-base text-muted-foreground leading-relaxed mb-3 sm:mb-4">
                La escasez de agua afecta gravemente a la agricultura, reduciendo la productividad y amenazando la
                seguridad alimentaria. Los agricultores necesitan soluciones que optimicen el uso del agua.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 sm:h-5 sm:w-5 text-teal-600 mt-0.5 flex-shrink-0" />
                  <span className="text-xs sm:text-sm md:text-base text-muted-foreground">Reducción de rendimientos agrícolas</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 sm:h-5 sm:w-5 text-teal-600 mt-0.5 flex-shrink-0" />
                  <span className="text-xs sm:text-sm md:text-base text-muted-foreground">Necesidad de riego más eficiente</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Solución Section */}
      <section id="solucion" className="py-10 sm:py-14 lg:py-20 px-4 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-3">
          <div className="absolute top-10 right-10 w-28 h-28 bg-emerald-200 rounded-full blur-2xl"></div>
          <div className="absolute bottom-10 left-10 w-36 h-36 bg-teal-200 rounded-full blur-3xl"></div>
        </div>
        <div className="container mx-auto relative z-10 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
            <div className="order-2 lg:order-1">
              {/* Opción 1: Usar Video con link de YouTube/Vimeo o URL directa */}
              {/* 
              <Video 
                src="https://www.youtube.com/watch?v=TU_VIDEO_ID_AQUI"
                title="Video sobre nuestra solución"
                className="shadow-2xl"
              />
              */}
              
              {/* Opción 2: Mantener la imagen (por defecto) */}
              <div className="aspect-video rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src={IMAGES.SOLUTION_IMAGE} 
                  alt={IMAGE_ALTS.SOLUTION_IMAGE}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="order-1 lg:order-2 space-y-3 sm:space-y-4 md:space-y-6">
              <div className="space-y-2 sm:space-y-3">
                <div className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 bg-emerald-100 text-emerald-800 rounded-full text-xs sm:text-sm font-medium">
                  Nuestra Solución
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-foreground">Alfombras de Cabello Reciclado</h2>
              </div>
              <p className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed">
                Hidrocrin transforma el cabello desechado en alfombras innovadoras que se colocan en cultivos agrícolas.
                Estas alfombras retienen hasta 5 veces su peso en agua y liberan nutrientes gradualmente al suelo.
              </p>
              <div className="space-y-3 sm:space-y-4">
                <div className="flex items-start gap-2.5 sm:gap-3 md:gap-4">
                  <div className="h-9 w-9 sm:h-10 sm:w-10 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Droplet className="h-4 w-4 sm:h-5 sm:w-5 text-emerald-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1 text-sm sm:text-base">Retención de Agua</h4>
                    <p className="text-xs sm:text-sm md:text-base text-muted-foreground">
                      El cabello absorbe y retiene agua, liberándola gradualmente a las raíces de las plantas.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-2.5 sm:gap-3 md:gap-4">
                  <div className="h-9 w-9 sm:h-10 sm:w-10 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Leaf className="h-4 w-4 sm:h-5 sm:w-5 text-emerald-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1 text-sm sm:text-base">Nutrición Natural</h4>
                    <p className="text-xs sm:text-sm md:text-base text-muted-foreground">
                      Rico en nitrógeno y otros nutrientes esenciales que mejoran la calidad del suelo.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-2.5 sm:gap-3 md:gap-4">
                  <div className="h-9 w-9 sm:h-10 sm:w-10 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Recycle className="h-4 w-4 sm:h-5 sm:w-5 text-emerald-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1 text-sm sm:text-base">100% Biodegradable</h4>
                    <p className="text-xs sm:text-sm md:text-base text-muted-foreground">
                      Material completamente natural que se descompone sin dejar residuos tóxicos.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Beneficios Section */}
      <section id="beneficios" className="py-10 sm:py-14 lg:py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-6 sm:mb-10 lg:mb-16">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-2 sm:mb-3 md:mb-4">Beneficios para Todos</h2>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto text-pretty px-4">
              Una solución que genera valor para múltiples actores en la cadena
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            <div 
              className="p-5 sm:p-6 lg:p-8 rounded-2xl sm:rounded-3xl backdrop-blur-xl border border-emerald-200/30 shadow-2xl hover:shadow-2xl transition-all duration-300"
              style={{
                background: 'rgba(16, 185, 129, 0.08)',
                backdropFilter: 'blur(20px)',
              }}
            >
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-foreground">Para Agricultores</h3>
                <img 
                  src={IMAGES.LOGO} 
                  alt={IMAGE_ALTS.LOGO} 
                  className="h-10 sm:h-12 object-contain"
                />
              </div>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-3 sm:mb-4">
                Los agricultores obtienen múltiples ventajas al implementar nuestras alfombras de cabello reciclado en sus cultivos.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 sm:h-5 sm:w-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm sm:text-base text-muted-foreground">Reducción del consumo de agua hasta 40%</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 sm:h-5 sm:w-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm sm:text-base text-muted-foreground">Mejora en la calidad del suelo</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 sm:h-5 sm:w-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm sm:text-base text-muted-foreground">Aumento de productividad</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 sm:h-5 sm:w-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm sm:text-base text-muted-foreground">Reducción de costos de riego</span>
                </li>
              </ul>
            </div>

            <div 
              className="p-5 sm:p-6 lg:p-8 rounded-2xl sm:rounded-3xl backdrop-blur-xl border border-emerald-200/30 shadow-2xl hover:shadow-2xl transition-all duration-300"
              style={{
                background: 'rgba(16, 185, 129, 0.08)',
                backdropFilter: 'blur(20px)',
              }}
            >
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-foreground">Para Peluquerías</h3>
                <img 
                  src={IMAGES.LOGO} 
                  alt={IMAGE_ALTS.LOGO} 
                  className="h-10 sm:h-12 object-contain"
                />
              </div>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-3 sm:mb-4">
                Las peluquerías pueden contribuir activamente a la sostenibilidad mientras mejoran su imagen de marca.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 sm:h-5 sm:w-5 text-teal-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm sm:text-base text-muted-foreground">Gestión responsable de residuos</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 sm:h-5 sm:w-5 text-teal-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm sm:text-base text-muted-foreground">Imagen de marca sostenible</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 sm:h-5 sm:w-5 text-teal-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm sm:text-base text-muted-foreground">Contribución al medio ambiente</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 sm:h-5 sm:w-5 text-teal-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm sm:text-base text-muted-foreground">Certificación de sostenibilidad</span>
                </li>
              </ul>
            </div>

            <div 
              className="p-5 sm:p-6 lg:p-8 rounded-2xl sm:rounded-3xl backdrop-blur-xl border border-emerald-200/30 shadow-2xl hover:shadow-2xl transition-all duration-300 md:col-span-2 lg:col-span-1"
              style={{
                background: 'rgba(16, 185, 129, 0.08)',
                backdropFilter: 'blur(20px)',
              }}
            >
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-foreground">Para el Medio Ambiente</h3>
                <img 
                  src={IMAGES.LOGO} 
                  alt={IMAGE_ALTS.LOGO} 
                  className="h-10 sm:h-12 object-contain"
                />
              </div>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-3 sm:mb-4">
                Nuestra solución promueve la economía circular y reduce el impacto ambiental de manera significativa.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 sm:h-5 sm:w-5 text-teal-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm sm:text-base text-muted-foreground">Reducción de residuos en vertederos</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 sm:h-5 sm:w-5 text-teal-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm sm:text-base text-muted-foreground">Conservación de recursos hídricos</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 sm:h-5 sm:w-5 text-teal-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm sm:text-base text-muted-foreground">Economía circular en acción</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 sm:h-5 sm:w-5 text-teal-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm sm:text-base text-muted-foreground">Reducción de huella de carbono</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Proceso Section */}
      <section id="proceso" className="py-10 sm:py-14 lg:py-20 px-4 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-32 h-32 bg-emerald-300 rounded-full blur-3xl"></div>
          <div className="absolute top-40 right-20 w-24 h-24 bg-teal-300 rounded-full blur-2xl"></div>
          <div className="absolute bottom-20 left-1/3 w-40 h-40 bg-green-300 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto relative z-10 max-w-7xl">
          <div className="text-center mb-6 sm:mb-10 lg:mb-16">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-2 sm:mb-3 md:mb-4">Nuestro Proceso Circular</h2>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto text-pretty px-4">
              Un ciclo sostenible que transforma residuos en recursos valiosos
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 items-center">
            {/* Paso 1 */}
            <div className="relative">
              <div 
                className="p-5 sm:p-6 lg:p-8 rounded-2xl sm:rounded-3xl backdrop-blur-xl border border-emerald-200/30 shadow-2xl text-center h-full"
                style={{
                  background: 'rgba(16, 185, 129, 0.08)',
                  backdropFilter: 'blur(20px)',
                }}
              >
                <div className="h-16 w-16 sm:h-20 sm:w-20 bg-gradient-to-br from-emerald-600 to-emerald-700 text-white rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 text-xl sm:text-2xl font-bold shadow-lg">
                  1
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-foreground mb-2 sm:mb-3">Recolección</h3>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  Recogemos el cabello de peluquerías asociadas que participan en nuestro programa de reciclaje.
                </p>
              </div>
              {/* Flecha - Centrada en el espacio entre cards */}
              <div className="hidden lg:flex absolute top-1/2 right-0 -translate-y-1/2 translate-x-4 z-20 items-center justify-center pointer-events-none">
                <div className="bg-emerald-100 rounded-full p-2 shadow-lg border border-emerald-200">
                  <ArrowRight className="h-6 w-6 text-emerald-600" />
                </div>
              </div>
            </div>

            {/* Paso 2 */}
            <div className="relative">
              <div 
                className="p-5 sm:p-6 lg:p-8 rounded-2xl sm:rounded-3xl backdrop-blur-xl border border-emerald-200/30 shadow-2xl text-center h-full"
                style={{
                  background: 'rgba(16, 185, 129, 0.08)',
                  backdropFilter: 'blur(20px)',
                }}
              >
                <div className="h-16 w-16 sm:h-20 sm:w-20 bg-gradient-to-br from-emerald-600 to-emerald-700 text-white rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 text-xl sm:text-2xl font-bold shadow-lg">
                  2
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-foreground mb-2 sm:mb-3">Procesamiento</h3>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  Limpiamos y procesamos el cabello, eliminando impurezas y preparándolo para su transformación.
                </p>
              </div>
              {/* Flecha - Centrada en el espacio entre cards */}
              <div className="hidden lg:flex absolute top-1/2 right-0 -translate-y-1/2 translate-x-4 z-20 items-center justify-center pointer-events-none">
                <div className="bg-emerald-100 rounded-full p-2 shadow-lg border border-emerald-200">
                  <ArrowRight className="h-6 w-6 text-emerald-600" />
                </div>
              </div>
            </div>

            {/* Paso 3 */}
            <div className="relative">
              <div 
                className="p-5 sm:p-6 lg:p-8 rounded-2xl sm:rounded-3xl backdrop-blur-xl border border-emerald-200/30 shadow-2xl text-center h-full"
                style={{
                  background: 'rgba(16, 185, 129, 0.08)',
                  backdropFilter: 'blur(20px)',
                }}
              >
                <div className="h-16 w-16 sm:h-20 sm:w-20 bg-gradient-to-br from-emerald-600 to-emerald-700 text-white rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 text-xl sm:text-2xl font-bold shadow-lg">
                  3
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-foreground mb-2 sm:mb-3">Fabricación</h3>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  Tejemos las alfombras con técnicas especiales que maximizan la retención de agua y nutrientes.
                </p>
              </div>
              {/* Flecha - Centrada en el espacio entre cards */}
              <div className="hidden lg:flex absolute top-1/2 right-0 -translate-y-1/2 translate-x-4 z-20 items-center justify-center pointer-events-none">
                <div className="bg-emerald-100 rounded-full p-2 shadow-lg border border-emerald-200">
                  <ArrowRight className="h-6 w-6 text-emerald-600" />
                </div>
              </div>
            </div>

            {/* Paso 4 */}
            <div className="relative">
              <div 
                className="p-5 sm:p-6 lg:p-8 rounded-2xl sm:rounded-3xl backdrop-blur-xl border border-emerald-200/30 shadow-2xl text-center h-full"
                style={{
                  background: 'rgba(16, 185, 129, 0.08)',
                  backdropFilter: 'blur(20px)',
                }}
              >
                <div className="h-16 w-16 sm:h-20 sm:w-20 bg-gradient-to-br from-emerald-600 to-emerald-700 text-white rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 text-xl sm:text-2xl font-bold shadow-lg">
                  4
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-foreground mb-2 sm:mb-3">Aplicación</h3>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  Los agricultores instalan las alfombras en sus cultivos, mejorando la eficiencia hídrica.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contacto Section */}
      <section id="contacto" className="py-10 sm:py-14 lg:py-20 px-4 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-32 h-32 bg-emerald-300 rounded-full blur-3xl"></div>
          <div className="absolute top-40 right-20 w-24 h-24 bg-teal-300 rounded-full blur-2xl"></div>
          <div className="absolute bottom-20 left-1/3 w-40 h-40 bg-green-300 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center mb-6 sm:mb-10 lg:mb-16">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-2.5 sm:gap-3 md:gap-4 mb-4 sm:mb-6 md:mb-8">
              <img 
                src={IMAGES.LOGO} 
                alt={IMAGE_ALTS.LOGO} 
                className="h-12 w-12 sm:h-16 sm:w-16 md:h-20 md:w-20 object-contain"
              />
              <div className="inline-block px-3 sm:px-4 md:px-6 py-1.5 sm:py-2 md:py-3 bg-emerald-100 text-emerald-800 rounded-full text-xs sm:text-sm md:text-base lg:text-lg font-medium">
                Únete a la Revolución Verde
              </div>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3 sm:mb-4 md:mb-6 leading-tight px-4">
              Transformemos Juntos el Futuro
            </h2>
            
            {/* Video Section */}
            <div className="mb-4 sm:mb-6 md:mb-8 max-w-4xl mx-auto">
              <Video 
                src="https://vimeo.com/1128926756/2677ba2e0c?share=copy"
                title="Video sobre Hidrocrin"
                className="shadow-2xl"
              />
            </div>
            
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed px-4">
              ¿Eres agricultor, peluquero o simplemente te interesa nuestro proyecto? 
              Formemos una comunidad comprometida con la sostenibilidad y la economía circular.
            </p>
          </div>

          {/* Calendario de Actividades */}
          <div className="mb-12 sm:mb-16">
            <ActivityCalendar />
          </div>

          <div id="contacto-formulario" className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-stretch">
            {/* Formulario de Contacto */}
            <div 
              className="p-6 sm:p-8 lg:p-10 rounded-2xl sm:rounded-3xl backdrop-blur-xl border border-emerald-200/30 shadow-2xl h-full flex flex-col"
              style={{
                background: 'rgba(16, 185, 129, 0.08)',
                backdropFilter: 'blur(20px)',
              }}
            >
              <div className="mb-6 sm:mb-8">
                <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-2 sm:mb-3">Envíanos un Mensaje</h3>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  Cuéntanos sobre tu proyecto, inquietudes o cómo te gustaría colaborar con nosotros.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6 flex-1 flex flex-col">
                <div className="space-y-2 sm:space-y-3">
                  <label htmlFor="nombre" className="text-xs sm:text-sm font-semibold text-foreground block">
                    Nombre Completo
                  </label>
                  <Input
                    id="nombre"
                    placeholder="Tu nombre completo"
                    value={formData.nombre}
                    onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                    required
                    className="h-10 sm:h-12 text-sm sm:text-base bg-white/50 border-emerald-200 focus:border-emerald-400 focus:ring-emerald-400/20 rounded-lg sm:rounded-xl transition-all duration-300"
                  />
                </div>
                
                <div className="space-y-2 sm:space-y-3">
                  <label htmlFor="email" className="text-xs sm:text-sm font-semibold text-foreground block">
                    Correo Electrónico
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="tu@email.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="h-10 sm:h-12 text-sm sm:text-base bg-white/50 border-emerald-200 focus:border-emerald-400 focus:ring-emerald-400/20 rounded-lg sm:rounded-xl transition-all duration-300"
                  />
                </div>
                
                <div className="space-y-2 sm:space-y-3">
                  <label htmlFor="mensaje" className="text-xs sm:text-sm font-semibold text-foreground block">
                    Mensaje
                  </label>
                  <Textarea
                    id="mensaje"
                    placeholder="Cuéntanos cómo podemos ayudarte o cómo te gustaría colaborar con Hidrocrin..."
                    rows={5}
                    value={formData.mensaje}
                    onChange={(e) => setFormData({ ...formData, mensaje: e.target.value })}
                    required
                    className="text-sm sm:text-base bg-white/50 border-emerald-200 focus:border-emerald-400 focus:ring-emerald-400/20 rounded-lg sm:rounded-xl transition-all duration-300 resize-none"
                  />
                </div>
                
                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full h-12 sm:h-14 bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white font-semibold text-base sm:text-lg rounded-lg sm:rounded-xl shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition-all duration-300 mt-auto"
                >
                  <Mail className="mr-2 sm:mr-3 h-4 w-4 sm:h-5 sm:w-5" />
                  Enviar Mensaje
                </Button>
              </form>
            </div>

            {/* Información de Contacto */}
            <div 
              className="p-6 sm:p-8 lg:p-10 rounded-2xl sm:rounded-3xl backdrop-blur-xl border border-emerald-200/30 shadow-2xl h-full flex flex-col"
              style={{
                background: 'rgba(16, 185, 129, 0.08)',
                backdropFilter: 'blur(20px)',
              }}
            >
                <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-4 sm:mb-6">Conoce más y apóyanos en</h3>
                
                <div className="space-y-3 sm:space-y-4 lg:space-y-6 flex-1">
                  <a 
                    href="https://www.instagram.com/hidrrcrin?igsh=MTJxdTJqdGtia3R2YQ==" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-start gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-white/30 hover:bg-white/50 transition-all duration-300 cursor-pointer group"
                  >
                    <div className="h-10 w-10 sm:h-12 sm:w-12 bg-emerald-100 rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-emerald-200 transition-colors">
                      <Instagram className="h-5 w-5 sm:h-6 sm:w-6 text-emerald-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1 text-sm sm:text-base lg:text-lg group-hover:text-emerald-700 transition-colors">Instagram</h4>
                      <p className="text-xs sm:text-sm lg:text-base text-muted-foreground group-hover:text-emerald-600 transition-colors">@hidrrcrin</p>
                    </div>
                  </a>
                  
                  <a 
                    href="https://www.facebook.com/share/1CiJxG658X/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-start gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-white/30 hover:bg-white/50 transition-all duration-300 cursor-pointer group"
                  >
                    <div className="h-10 w-10 sm:h-12 sm:w-12 bg-emerald-100 rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-emerald-200 transition-colors">
                      <Facebook className="h-5 w-5 sm:h-6 sm:w-6 text-emerald-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1 text-sm sm:text-base lg:text-lg group-hover:text-emerald-700 transition-colors">Facebook</h4>
                      <p className="text-xs sm:text-sm lg:text-base text-muted-foreground group-hover:text-emerald-600 transition-colors">Hidrocrin Dos Mundos</p>
                    </div>
                  </a>
                  
                  <a 
                    href="mailto:hidrocrin.dosmundo@gmail.com"
                    className="flex items-start gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-white/30 hover:bg-white/50 transition-all duration-300 cursor-pointer group"
                  >
                    <div className="h-10 w-10 sm:h-12 sm:w-12 bg-emerald-100 rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-emerald-200 transition-colors">
                      <Mail className="h-5 w-5 sm:h-6 sm:w-6 text-emerald-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1 text-sm sm:text-base lg:text-lg group-hover:text-emerald-700 transition-colors">Correo</h4>
                      <p className="text-xs sm:text-sm lg:text-base text-muted-foreground break-all group-hover:text-emerald-600 transition-colors">hidrocrin.dosmundo@gmail.com</p>
                    </div>
                  </a>
                  
                  <a 
                    href="tel:+56975266692"
                    className="flex items-start gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-white/30 hover:bg-white/50 transition-all duration-300 cursor-pointer group"
                  >
                    <div className="h-10 w-10 sm:h-12 sm:w-12 bg-emerald-100 rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-emerald-200 transition-colors">
                      <Phone className="h-5 w-5 sm:h-6 sm:w-6 text-emerald-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1 text-sm sm:text-base lg:text-lg group-hover:text-emerald-700 transition-colors">Contáctanos</h4>
                      <p className="text-xs sm:text-sm lg:text-base text-muted-foreground group-hover:text-emerald-600 transition-colors">975266692 – 956113831</p>
                    </div>
                  </a>
                  
                  <div className="flex items-start gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-white/30 hover:bg-white/40 transition-all duration-300">
                    <div className="h-10 w-10 sm:h-12 sm:w-12 bg-emerald-100 rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0">
                      <Users className="h-5 w-5 sm:h-6 sm:w-6 text-emerald-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1 text-sm sm:text-base lg:text-lg">Equipo</h4>
                      <p className="text-xs sm:text-sm lg:text-base text-muted-foreground">Carolina Velasquez - Viviana González</p>
                    </div>
                  </div>
                </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-12 sm:py-16 lg:py-20 px-4 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-10 w-32 h-32 bg-emerald-300 rounded-full blur-3xl"></div>
          <div className="absolute top-20 right-20 w-24 h-24 bg-teal-300 rounded-full blur-2xl"></div>
          <div className="absolute bottom-10 left-1/3 w-40 h-40 bg-green-300 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto relative z-10">
          {/* Main Footer Content */}
          <div 
            className="rounded-2xl sm:rounded-3xl backdrop-blur-xl border border-emerald-200/30 shadow-2xl p-6 sm:p-8 lg:p-12 mb-6 sm:mb-8"
            style={{
              background: 'rgba(16, 185, 129, 0.08)',
              backdropFilter: 'blur(20px)',
            }}
          >
            <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
              {/* Brand Section */}
              <div className="lg:col-span-1 md:col-span-2 space-y-4 sm:space-y-6">
                <div className="flex items-center gap-3 sm:gap-4">
                  <img 
                    src={IMAGES.LOGO} 
                    alt={IMAGE_ALTS.LOGO} 
                    className="h-12 w-12 sm:h-16 sm:w-16 object-contain"
                  />
                  <span className="text-xl sm:text-2xl font-bold text-foreground">Hidrocrin</span>
                </div>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed max-w-sm">
                  Transformando residuos en soluciones sostenibles para la agricultura del futuro. 
                  Innovación en economía circular para un mundo más verde.
                </p>
                <div className="flex items-center gap-3 sm:gap-4">
                  <a 
                    href="mailto:hidrocrin.dosmundo@gmail.com"
                    className="h-10 w-10 bg-emerald-100 rounded-lg flex items-center justify-center hover:bg-emerald-200 transition-colors cursor-pointer"
                    aria-label="Enviar correo"
                  >
                    <Mail className="h-5 w-5 text-emerald-600" />
                  </a>
                  <a 
                    href="https://www.instagram.com/hidrrcrin?igsh=MTJxdTJqdGtia3R2YQ=="
                    target="_blank"
                    rel="noopener noreferrer"
                    className="h-10 w-10 bg-pink-100 rounded-lg flex items-center justify-center hover:bg-pink-200 transition-colors cursor-pointer"
                    aria-label="Instagram"
                  >
                    <Instagram className="h-5 w-5 text-pink-600" />
                  </a>
                  <a 
                    href="https://www.facebook.com/share/1CiJxG658X/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="h-10 w-10 bg-blue-100 rounded-lg flex items-center justify-center hover:bg-blue-200 transition-colors cursor-pointer"
                    aria-label="Facebook"
                  >
                    <Facebook className="h-5 w-5 text-blue-600" />
                  </a>
                </div>
              </div>

              {/* Navigation Links */}
              <div className="space-y-4 sm:space-y-6">
                <h4 className="text-base sm:text-lg font-bold text-foreground mb-4 sm:mb-6">Navegación</h4>
                <ul className="space-y-3 sm:space-y-4">
                  <li>
                    <a 
                      href="#problema"
                      onClick={(e) => {
                        e.preventDefault();
                        const element = document.getElementById("problema");
                        if (element) {
                          const headerOffset = 100;
                          const elementPosition = element.getBoundingClientRect().top;
                          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                          window.scrollTo({
                            top: offsetPosition,
                            behavior: "smooth"
                          });
                        }
                      }}
                      className="group flex items-center gap-3 text-muted-foreground hover:text-foreground transition-all duration-300"
                    >
                      <div className="h-2 w-2 bg-emerald-400 rounded-full group-hover:bg-emerald-600 transition-colors"></div>
                      <span className="text-base">El Problema</span>
                    </a>
                  </li>
                  <li>
                    <a 
                      href="#solucion"
                      onClick={(e) => {
                        e.preventDefault();
                        const element = document.getElementById("solucion");
                        if (element) {
                          const headerOffset = 100;
                          const elementPosition = element.getBoundingClientRect().top;
                          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                          window.scrollTo({
                            top: offsetPosition,
                            behavior: "smooth"
                          });
                        }
                      }}
                      className="group flex items-center gap-3 text-muted-foreground hover:text-foreground transition-all duration-300"
                    >
                      <div className="h-2 w-2 bg-emerald-400 rounded-full group-hover:bg-emerald-600 transition-colors"></div>
                      <span className="text-base">Solución</span>
                    </a>
                  </li>
                  <li>
                    <a 
                      href="#beneficios"
                      onClick={(e) => {
                        e.preventDefault();
                        const element = document.getElementById("beneficios");
                        if (element) {
                          const headerOffset = 100;
                          const elementPosition = element.getBoundingClientRect().top;
                          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                          window.scrollTo({
                            top: offsetPosition,
                            behavior: "smooth"
                          });
                        }
                      }}
                      className="group flex items-center gap-3 text-muted-foreground hover:text-foreground transition-all duration-300"
                    >
                      <div className="h-2 w-2 bg-emerald-400 rounded-full group-hover:bg-emerald-600 transition-colors"></div>
                      <span className="text-base">Beneficios</span>
                    </a>
                  </li>
                  <li>
                    <a 
                      href="#proceso"
                      onClick={(e) => {
                        e.preventDefault();
                        const element = document.getElementById("proceso");
                        if (element) {
                          const headerOffset = 100;
                          const elementPosition = element.getBoundingClientRect().top;
                          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                          window.scrollTo({
                            top: offsetPosition,
                            behavior: "smooth"
                          });
                        }
                      }}
                      className="group flex items-center gap-3 text-muted-foreground hover:text-foreground transition-all duration-300"
                    >
                      <div className="h-2 w-2 bg-emerald-400 rounded-full group-hover:bg-emerald-600 transition-colors"></div>
                      <span className="text-base">Proceso</span>
                    </a>
                  </li>
                </ul>
              </div>

              {/* Project Links */}
              <div className="space-y-4 sm:space-y-6">
                <h4 className="text-base sm:text-lg font-bold text-foreground mb-4 sm:mb-6">Proyecto</h4>
                <ul className="space-y-3 sm:space-y-4">
                  <li>
                    <Link to="/historia" className="group flex items-center gap-3 text-muted-foreground hover:text-foreground transition-all duration-300">
                      <div className="h-2 w-2 bg-teal-400 rounded-full group-hover:bg-teal-600 transition-colors"></div>
                      <span className="text-base">Historia</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/sobre-nosotros" className="group flex items-center gap-3 text-muted-foreground hover:text-foreground transition-all duration-300">
                      <div className="h-2 w-2 bg-teal-400 rounded-full group-hover:bg-teal-600 transition-colors"></div>
                      <span className="text-base">Sobre Nosotros</span>
                    </Link>
                  </li>
                  <li>
                    <a 
                      href="#contacto-formulario"
                      onClick={(e) => {
                        e.preventDefault();
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
                      }}
                      className="group flex items-center gap-3 text-muted-foreground hover:text-foreground transition-all duration-300 cursor-pointer"
                    >
                      <div className="h-2 w-2 bg-teal-400 rounded-full group-hover:bg-teal-600 transition-colors"></div>
                      <span className="text-base">Contacto</span>
                    </a>
                  </li>
                </ul>
              </div>

              {/* Legal */}
              <div className="space-y-4 sm:space-y-6">
                <h4 className="text-base sm:text-lg font-bold text-foreground mb-4 sm:mb-6">Legal</h4>
                <ul className="space-y-3 sm:space-y-4">
                  <li>
                    <Link to="/terminos-y-condiciones" className="group flex items-center gap-3 text-muted-foreground hover:text-foreground transition-all duration-300">
                      <div className="h-2 w-2 bg-emerald-400 rounded-full group-hover:bg-emerald-600 transition-colors"></div>
                      <span className="text-base">Términos y condiciones</span>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Bottom Footer */}
          <div 
            className="rounded-xl sm:rounded-2xl backdrop-blur-xl border border-emerald-200/20 shadow-xl p-5 sm:p-6 lg:p-8 text-center"
            style={{
              background: 'rgba(16, 185, 129, 0.05)',
              backdropFilter: 'blur(15px)',
            }}
          >
            <div className="flex flex-col md:flex-row items-center justify-between gap-3 sm:gap-4">
              <p className="text-muted-foreground text-sm sm:text-base">
                © 2025 Hidrocrin. Todos los derechos reservados.
              </p>
              <div className="flex items-center gap-2 text-xs sm:text-sm text-muted-foreground">
                <span>Hecho con</span>
                <Leaf className="h-3 w-3 sm:h-4 sm:w-4 text-emerald-600" />
                <span>para un futuro sostenible</span>
              </div>
              <p className="text-xs sm:text-sm text-emerald-600 font-medium">
                Proyecto de Economía Circular
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
