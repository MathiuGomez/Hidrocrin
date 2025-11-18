import { useState, useEffect } from "react"
import { Link, useLocation } from "react-router-dom"
import { Button } from "../ui/button"
import { Input } from "../ui/input"
import { Textarea } from "../ui/textarea"
import { Video } from "../ui/video"
import { Droplet, Leaf, Recycle, Users, ArrowRight, CheckCircle2, Mail, Phone, MapPin, Instagram, Facebook } from "lucide-react"
import AnimatedNav from "../layout/AnimatedNav"
import { IMAGES, IMAGE_ALTS } from "../../assets/images"

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
    }
  }, [location.state])

  const navItems = [
    { href: "#inicio", label: "Inicio" },
    { href: "#solucion", label: "Solución" },
    { href: "#beneficios", label: "Beneficios" },
    { href: "#proceso", label: "Proceso" },
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
      <AnimatedNav 
        items={navItems}
        baseColor="#ffffff"
        pillColor="#ffffff"
        hoveredPillTextColor="#10b981"
        pillTextColor="#10b981"
        initialLoadAnimation={true}
      />

      {/* Hero Section */}
      <section id="inicio" className="pt-32 pb-20 px-4 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-32 h-32 bg-emerald-300 rounded-full blur-3xl"></div>
          <div className="absolute top-40 right-20 w-24 h-24 bg-teal-300 rounded-full blur-2xl"></div>
          <div className="absolute bottom-20 left-1/3 w-40 h-40 bg-green-300 rounded-full blur-3xl"></div>
        </div>
        <div className="container mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-center gap-4 mb-6">
                <img 
                  src={IMAGES.LOGO} 
                  alt={IMAGE_ALTS.LOGO} 
                  className="h-16 w-16 object-contain"
                />
                <div className="inline-block px-4 py-2 bg-emerald-100 text-emerald-800 rounded-full text-sm font-medium">
                  Innovación Sostenible
                </div>
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold text-foreground leading-tight text-balance">
                Transformamos Cabello en Soluciones para la <span className="text-emerald-600">Agricultura</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed text-pretty">
                Hidrocrin convierte residuos de peluquerías en alfombras innovadoras que retienen agua y nutren el
                suelo, combatiendo la sequía y promoviendo la economía circular.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
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
                  <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white w-full sm:w-auto">
                    Conoce Más
                    <ArrowRight className="ml-2 h-5 w-5" />
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
                  <Button size="lg" variant="outline" className="w-full sm:w-auto bg-transparent">
                    Ver Proceso
                  </Button>
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden">
                <img 
                  src={IMAGES.HERO_IMAGE} 
                  alt={IMAGE_ALTS.HERO_IMAGE}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problema Section */}
      <section id="problema" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">El Problema que Enfrentamos</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
              Dos crisis ambientales que necesitan soluciones urgentes e innovadoras
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div 
              className="p-8 rounded-3xl backdrop-blur-xl border border-emerald-200/30 shadow-2xl hover:shadow-2xl transition-all duration-300"
              style={{
                background: 'rgba(16, 185, 129, 0.08)',
                backdropFilter: 'blur(20px)',
              }}
            >
              <div className="flex items-center gap-4 mb-4">
                <h3 className="text-2xl font-bold text-foreground">Residuos de Peluquerías</h3>
                <img 
                  src={IMAGES.LOGO} 
                  alt={IMAGE_ALTS.LOGO} 
                  className="h-12 object-contain"
                />
              </div>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Las peluquerías generan toneladas de cabello que terminan en vertederos, contribuyendo a la
                contaminación ambiental. Este recurso orgánico se desperdicia cuando podría tener un segundo uso
                valioso.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Miles de toneladas de cabello desechado anualmente</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Acumulación en vertederos y contaminación</span>
                </li>
              </ul>
            </div>

            <div 
              className="p-8 rounded-3xl backdrop-blur-xl border border-emerald-200/30 shadow-2xl hover:shadow-2xl transition-all duration-300"
              style={{
                background: 'rgba(16, 185, 129, 0.08)',
                backdropFilter: 'blur(20px)',
              }}
            >
              <div className="flex items-center gap-4 mb-4">
                <h3 className="text-2xl font-bold text-foreground">Crisis de Sequía</h3>
                <img 
                  src={IMAGES.LOGO} 
                  alt={IMAGE_ALTS.LOGO} 
                  className="h-12 object-contain"
                />
              </div>
              <p className="text-muted-foreground leading-relaxed mb-4">
                La escasez de agua afecta gravemente a la agricultura, reduciendo la productividad y amenazando la
                seguridad alimentaria. Los agricultores necesitan soluciones que optimicen el uso del agua.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-teal-600 mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Reducción de rendimientos agrícolas</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-teal-600 mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Necesidad de riego más eficiente</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Solución Section */}
      <section id="solucion" className="py-20 px-4 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-3">
          <div className="absolute top-10 right-10 w-28 h-28 bg-emerald-200 rounded-full blur-2xl"></div>
          <div className="absolute bottom-10 left-10 w-36 h-36 bg-teal-200 rounded-full blur-3xl"></div>
        </div>
        <div className="container mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
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
              <div className="aspect-video rounded-2xl overflow-hidden">
                <img 
                  src={IMAGES.SOLUTION_IMAGE} 
                  alt={IMAGE_ALTS.SOLUTION_IMAGE}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="order-1 lg:order-2 space-y-6">
              <div className="inline-block px-4 py-2 bg-emerald-100 text-emerald-800 rounded-full text-sm font-medium">
                Nuestra Solución
              </div>
              <h2 className="text-4xl font-bold text-foreground">Alfombras de Cabello Reciclado</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Hidrocrin transforma el cabello desechado en alfombras innovadoras que se colocan en cultivos agrícolas.
                Estas alfombras retienen hasta 5 veces su peso en agua y liberan nutrientes gradualmente al suelo.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Droplet className="h-5 w-5 text-emerald-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Retención de Agua</h4>
                    <p className="text-muted-foreground">
                      El cabello absorbe y retiene agua, liberándola gradualmente a las raíces de las plantas.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Leaf className="h-5 w-5 text-emerald-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Nutrición Natural</h4>
                    <p className="text-muted-foreground">
                      Rico en nitrógeno y otros nutrientes esenciales que mejoran la calidad del suelo.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Recycle className="h-5 w-5 text-emerald-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">100% Biodegradable</h4>
                    <p className="text-muted-foreground">
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
      <section id="beneficios" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Beneficios para Todos</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
              Una solución que genera valor para múltiples actores en la cadena
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div 
              className="p-8 rounded-3xl backdrop-blur-xl border border-emerald-200/30 shadow-2xl hover:shadow-2xl transition-all duration-300"
              style={{
                background: 'rgba(16, 185, 129, 0.08)',
                backdropFilter: 'blur(20px)',
              }}
            >
              <div className="flex items-center gap-4 mb-4">
                <h3 className="text-2xl font-bold text-foreground">Para Agricultores</h3>
                <img 
                  src={IMAGES.LOGO} 
                  alt={IMAGE_ALTS.LOGO} 
                  className="h-12 object-contain"
                />
              </div>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Los agricultores obtienen múltiples ventajas al implementar nuestras alfombras de cabello reciclado en sus cultivos.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Reducción del consumo de agua hasta 40%</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Mejora en la calidad del suelo</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Aumento de productividad</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Reducción de costos de riego</span>
                </li>
              </ul>
            </div>

            <div 
              className="p-8 rounded-3xl backdrop-blur-xl border border-emerald-200/30 shadow-2xl hover:shadow-2xl transition-all duration-300"
              style={{
                background: 'rgba(16, 185, 129, 0.08)',
                backdropFilter: 'blur(20px)',
              }}
            >
              <div className="flex items-center gap-4 mb-4">
                <h3 className="text-2xl font-bold text-foreground">Para Peluquerías</h3>
                <img 
                  src={IMAGES.LOGO} 
                  alt={IMAGE_ALTS.LOGO} 
                  className="h-12 object-contain"
                />
              </div>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Las peluquerías pueden contribuir activamente a la sostenibilidad mientras mejoran su imagen de marca.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-teal-600 mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Gestión responsable de residuos</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-teal-600 mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Imagen de marca sostenible</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-teal-600 mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Contribución al medio ambiente</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-teal-600 mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Certificación de sostenibilidad</span>
                </li>
              </ul>
            </div>

            <div 
              className="p-8 rounded-3xl backdrop-blur-xl border border-emerald-200/30 shadow-2xl hover:shadow-2xl transition-all duration-300"
              style={{
                background: 'rgba(16, 185, 129, 0.08)',
                backdropFilter: 'blur(20px)',
              }}
            >
              <div className="flex items-center gap-4 mb-4">
                <h3 className="text-2xl font-bold text-foreground">Para el Medio Ambiente</h3>
                <img 
                  src={IMAGES.LOGO} 
                  alt={IMAGE_ALTS.LOGO} 
                  className="h-12 object-contain"
                />
              </div>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Nuestra solución promueve la economía circular y reduce el impacto ambiental de manera significativa.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-teal-600 mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Reducción de residuos en vertederos</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-teal-600 mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Conservación de recursos hídricos</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-teal-600 mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Economía circular en acción</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-teal-600 mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Reducción de huella de carbono</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Proceso Section */}
      <section id="proceso" className="py-20 px-4 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-32 h-32 bg-emerald-300 rounded-full blur-3xl"></div>
          <div className="absolute top-40 right-20 w-24 h-24 bg-teal-300 rounded-full blur-2xl"></div>
          <div className="absolute bottom-20 left-1/3 w-40 h-40 bg-green-300 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Nuestro Proceso Circular</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
              Un ciclo sostenible que transforma residuos en recursos valiosos
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 items-center">
            {/* Paso 1 */}
            <div className="relative">
              <div 
                className="p-8 rounded-3xl backdrop-blur-xl border border-emerald-200/30 shadow-2xl text-center h-full"
                style={{
                  background: 'rgba(16, 185, 129, 0.08)',
                  backdropFilter: 'blur(20px)',
                }}
              >
                <div className="h-20 w-20 bg-gradient-to-br from-emerald-600 to-emerald-700 text-white rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold shadow-lg">
                  1
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">Recolección</h3>
                <p className="text-muted-foreground leading-relaxed">
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
                className="p-8 rounded-3xl backdrop-blur-xl border border-emerald-200/30 shadow-2xl text-center h-full"
                style={{
                  background: 'rgba(16, 185, 129, 0.08)',
                  backdropFilter: 'blur(20px)',
                }}
              >
                <div className="h-20 w-20 bg-gradient-to-br from-emerald-600 to-emerald-700 text-white rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold shadow-lg">
                  2
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">Procesamiento</h3>
                <p className="text-muted-foreground leading-relaxed">
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
                className="p-8 rounded-3xl backdrop-blur-xl border border-emerald-200/30 shadow-2xl text-center h-full"
                style={{
                  background: 'rgba(16, 185, 129, 0.08)',
                  backdropFilter: 'blur(20px)',
                }}
              >
                <div className="h-20 w-20 bg-gradient-to-br from-emerald-600 to-emerald-700 text-white rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold shadow-lg">
                  3
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">Fabricación</h3>
                <p className="text-muted-foreground leading-relaxed">
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
                className="p-8 rounded-3xl backdrop-blur-xl border border-emerald-200/30 shadow-2xl text-center h-full"
                style={{
                  background: 'rgba(16, 185, 129, 0.08)',
                  backdropFilter: 'blur(20px)',
                }}
              >
                <div className="h-20 w-20 bg-gradient-to-br from-emerald-600 to-emerald-700 text-white rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold shadow-lg">
                  4
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">Aplicación</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Los agricultores instalan las alfombras en sus cultivos, mejorando la eficiencia hídrica.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contacto Section */}
      <section id="contacto" className="py-20 px-4 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-32 h-32 bg-emerald-300 rounded-full blur-3xl"></div>
          <div className="absolute top-40 right-20 w-24 h-24 bg-teal-300 rounded-full blur-2xl"></div>
          <div className="absolute bottom-20 left-1/3 w-40 h-40 bg-green-300 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto max-w-5xl relative z-10">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-4 mb-8">
              <img 
                src={IMAGES.LOGO} 
                alt={IMAGE_ALTS.LOGO} 
                className="h-20 w-20 object-contain"
              />
              <div className="inline-block px-6 py-3 bg-emerald-100 text-emerald-800 rounded-full text-lg font-medium">
                Únete a la Revolución Verde
              </div>
            </div>
            <h2 className="text-5xl font-bold text-foreground mb-6 leading-tight">
              Transformemos Juntos el Futuro
            </h2>
            
            {/* Video Section */}
            <div className="mb-8 max-w-4xl mx-auto">
              <Video 
                src="https://vimeo.com/1128926756/2677ba2e0c?share=copy"
                title="Video sobre Hidrocrin"
                className="shadow-2xl"
              />
            </div>
            
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
              ¿Eres agricultor, peluquero o simplemente te interesa nuestro proyecto? 
              Formemos una comunidad comprometida con la sostenibilidad y la economía circular.
            </p>
          </div>
          <div id="contacto-formulario" className="grid lg:grid-cols-2 gap-12 items-stretch">
            {/* Formulario de Contacto */}
            <div 
              className="p-10 rounded-3xl backdrop-blur-xl border border-emerald-200/30 shadow-2xl h-full flex flex-col"
              style={{
                background: 'rgba(16, 185, 129, 0.08)',
                backdropFilter: 'blur(20px)',
              }}
            >
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-foreground mb-3">Envíanos un Mensaje</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Cuéntanos sobre tu proyecto, inquietudes o cómo te gustaría colaborar con nosotros.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6 flex-1 flex flex-col">
                <div className="space-y-3">
                  <label htmlFor="nombre" className="text-sm font-semibold text-foreground block">
                    Nombre Completo
                  </label>
                  <Input
                    id="nombre"
                    placeholder="Tu nombre completo"
                    value={formData.nombre}
                    onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                    required
                    className="h-12 bg-white/50 border-emerald-200 focus:border-emerald-400 focus:ring-emerald-400/20 rounded-xl transition-all duration-300"
                  />
                </div>
                
                <div className="space-y-3">
                  <label htmlFor="email" className="text-sm font-semibold text-foreground block">
                    Correo Electrónico
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="tu@email.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="h-12 bg-white/50 border-emerald-200 focus:border-emerald-400 focus:ring-emerald-400/20 rounded-xl transition-all duration-300"
                  />
                </div>
                
                <div className="space-y-3">
                  <label htmlFor="mensaje" className="text-sm font-semibold text-foreground block">
                    Mensaje
                  </label>
                  <Textarea
                    id="mensaje"
                    placeholder="Cuéntanos cómo podemos ayudarte o cómo te gustaría colaborar con Hidrocrin..."
                    rows={6}
                    value={formData.mensaje}
                    onChange={(e) => setFormData({ ...formData, mensaje: e.target.value })}
                    required
                    className="bg-white/50 border-emerald-200 focus:border-emerald-400 focus:ring-emerald-400/20 rounded-xl transition-all duration-300 resize-none"
                  />
                </div>
                
                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full h-14 bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white font-semibold text-lg rounded-xl shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition-all duration-300 mt-auto"
                >
                  <Mail className="mr-3 h-5 w-5" />
                  Enviar Mensaje
                </Button>
              </form>
            </div>

            {/* Información de Contacto */}
            <div 
              className="p-10 rounded-3xl backdrop-blur-xl border border-emerald-200/30 shadow-2xl h-full flex flex-col"
              style={{
                background: 'rgba(16, 185, 129, 0.08)',
                backdropFilter: 'blur(20px)',
              }}
            >
                <h3 className="text-2xl font-bold text-foreground mb-6">Conoce más y apóyanos en</h3>
                
                <div className="space-y-6 flex-1">
                  <div className="flex items-start gap-4 p-4 rounded-2xl bg-white/30 hover:bg-white/40 transition-all duration-300">
                    <div className="h-12 w-12 bg-emerald-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Instagram className="h-6 w-6 text-emerald-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1 text-lg">Instagram</h4>
                      <p className="text-muted-foreground">hidrrcrin</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4 p-4 rounded-2xl bg-white/30 hover:bg-white/40 transition-all duration-300">
                    <div className="h-12 w-12 bg-emerald-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Facebook className="h-6 w-6 text-emerald-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1 text-lg">Facebook</h4>
                      <p className="text-muted-foreground">Hidrocrin Dos Mundos</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4 p-4 rounded-2xl bg-white/30 hover:bg-white/40 transition-all duration-300">
                    <div className="h-12 w-12 bg-emerald-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Mail className="h-6 w-6 text-emerald-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1 text-lg">Correo</h4>
                      <p className="text-muted-foreground">hidrocrin.dosmundo@gmail.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4 p-4 rounded-2xl bg-white/30 hover:bg-white/40 transition-all duration-300">
                    <div className="h-12 w-12 bg-emerald-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Phone className="h-6 w-6 text-emerald-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1 text-lg">Contáctanos</h4>
                      <p className="text-muted-foreground">975266692 – 956113831</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4 p-4 rounded-2xl bg-white/30 hover:bg-white/40 transition-all duration-300">
                    <div className="h-12 w-12 bg-emerald-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Users className="h-6 w-6 text-emerald-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1 text-lg">Equipo</h4>
                      <p className="text-muted-foreground">Carolina Velasquez - Viviana González</p>
                    </div>
                  </div>
                </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-20 px-4 overflow-hidden">
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
                    className="h-10 w-10 bg-emerald-100 rounded-lg flex items-center justify-center hover:bg-emerald-200 transition-colors cursor-pointer"
                  >
                    <Mail className="h-5 w-5 text-emerald-600" />
                  </a>
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
                    className="h-10 w-10 bg-teal-100 rounded-lg flex items-center justify-center hover:bg-teal-200 transition-colors cursor-pointer"
                  >
                    <Phone className="h-5 w-5 text-teal-600" />
                  </a>
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
                    className="h-10 w-10 bg-emerald-100 rounded-lg flex items-center justify-center hover:bg-emerald-200 transition-colors cursor-pointer"
                  >
                    <MapPin className="h-5 w-5 text-emerald-600" />
                  </a>
                </div>
              </div>

              {/* Navigation Links */}
              <div className="space-y-6">
                <h4 className="text-lg font-bold text-foreground mb-6">Navegación</h4>
                <ul className="space-y-4">
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
              <div className="space-y-6">
                <h4 className="text-lg font-bold text-foreground mb-6">Proyecto</h4>
                <ul className="space-y-4">
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
              <div className="space-y-6">
                <h4 className="text-lg font-bold text-foreground mb-6">Legal</h4>
                <ul className="space-y-4">
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
    </div>
  )
}
