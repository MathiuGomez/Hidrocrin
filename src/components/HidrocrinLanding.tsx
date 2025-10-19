import React, { useState } from "react"
import { Button } from "./ui/button"
import { Card } from "./ui/card"
import { Input } from "./ui/input"
import { Textarea } from "./ui/textarea"
import { Droplet, Leaf, Recycle, Users, ArrowRight, CheckCircle2, Mail, Phone, MapPin } from "lucide-react"
import AnimatedNav from "./AnimatedNav"

export default function HidrocrinLanding() {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    mensaje: "",
  })

  const navItems = [
    { href: "#inicio", label: "Inicio" },
    { href: "#solucion", label: "Solución" },
    { href: "#proceso", label: "Proceso" },
    { href: "#beneficios", label: "Beneficios" },
    { href: "#contacto", label: "Contacto" }
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
              <div className="inline-block px-4 py-2 bg-emerald-100 text-emerald-800 rounded-full text-sm font-medium">
                Innovación Sostenible
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold text-foreground leading-tight text-balance">
                Transformamos Cabello en Soluciones para la <span className="text-emerald-600">Agricultura</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed text-pretty">
                Hidrocrin convierte residuos de peluquerías en alfombras innovadoras que retienen agua y nutren el
                suelo, combatiendo la sequía y promoviendo la economía circular.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#contacto">
                  <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white w-full sm:w-auto">
                    Conoce Más
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </a>
                <a href="#proceso">
                  <Button size="lg" variant="outline" className="w-full sm:w-auto bg-transparent">
                    Ver Proceso
                  </Button>
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden">
                <img 
                  src="/image/Gemini_Generated_Image_qme85cqme85cqme8.png" 
                  alt="Hidrocrin - Transformando cabello en agua para el futuro de la agricultura"
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
            <Card className="p-8 hover:shadow-lg transition-shadow">
              <div className="h-12 w-12 bg-red-100 rounded-lg flex items-center justify-center mb-6">
                <Recycle className="h-6 w-6 text-red-600" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Residuos de Peluquerías</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Las peluquerías generan toneladas de cabello que terminan en vertederos, contribuyendo a la
                contaminación ambiental. Este recurso orgánico se desperdicia cuando podría tener un segundo uso
                valioso.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Miles de toneladas de cabello desechado anualmente</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Acumulación en vertederos y contaminación</span>
                </li>
              </ul>
            </Card>

            <Card className="p-8 hover:shadow-lg transition-shadow">
              <div className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <Droplet className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Crisis de Sequía</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                La escasez de agua afecta gravemente a la agricultura, reduciendo la productividad y amenazando la
                seguridad alimentaria. Los agricultores necesitan soluciones que optimicen el uso del agua.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Reducción de rendimientos agrícolas</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Necesidad de riego más eficiente</span>
                </li>
              </ul>
            </Card>
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
              <div className="aspect-video rounded-2xl overflow-hidden">
                <img 
                  src="/image/Gemini_Generated_Image_qme85cqme85cqme8 (1).png" 
                  alt="Hidrocrin - Alfombras de cabello reciclado para agricultura sostenible"
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
            <Card className="p-8 text-center hover:shadow-lg transition-shadow">
              <div className="h-16 w-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">Para Agricultores</h3>
              <ul className="space-y-3 text-left">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Reducción del consumo de agua hasta 40%</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Mejora en la calidad del suelo</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Aumento de productividad</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Reducción de costos de riego</span>
                </li>
              </ul>
            </Card>

            <Card className="p-8 text-center hover:shadow-lg transition-shadow">
              <div className="h-16 w-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Recycle className="h-8 w-8 text-teal-600" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">Para Peluquerías</h3>
              <ul className="space-y-3 text-left">
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
            </Card>

            <Card className="p-8 text-center hover:shadow-lg transition-shadow">
              <div className="h-16 w-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Leaf className="h-8 w-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">Para el Medio Ambiente</h3>
              <ul className="space-y-3 text-left">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Reducción de residuos en vertederos</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Conservación de recursos hídricos</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Economía circular en acción</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Reducción de huella de carbono</span>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Proceso Section */}
      <section id="proceso" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Nuestro Proceso Circular</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
              Un ciclo sostenible que transforma residuos en recursos valiosos
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="relative">
              <div className="text-center">
                <div className="h-20 w-20 bg-emerald-600 text-white rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                  1
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">Recolección</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Recogemos el cabello de peluquerías asociadas que participan en nuestro programa de reciclaje.
                </p>
              </div>
              <div className="hidden lg:block absolute top-10 -right-4 w-8 h-0.5 bg-emerald-300" />
            </div>

            <div className="relative">
              <div className="text-center">
                <div className="h-20 w-20 bg-emerald-600 text-white rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                  2
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">Procesamiento</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Limpiamos y procesamos el cabello, eliminando impurezas y preparándolo para su transformación.
                </p>
              </div>
              <div className="hidden lg:block absolute top-10 -right-4 w-8 h-0.5 bg-emerald-300" />
            </div>

            <div className="relative">
              <div className="text-center">
                <div className="h-20 w-20 bg-emerald-600 text-white rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                  3
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">Fabricación</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Tejemos las alfombras con técnicas especiales que maximizan la retención de agua y nutrientes.
                </p>
              </div>
              <div className="hidden lg:block absolute top-10 -right-4 w-8 h-0.5 bg-emerald-300" />
            </div>

            <div className="text-center">
              <div className="h-20 w-20 bg-emerald-600 text-white rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                4
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">Aplicación</h3>
              <p className="text-muted-foreground leading-relaxed">
                Los agricultores instalan las alfombras en sus cultivos, mejorando la eficiencia hídrica.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contacto Section */}
      <section id="contacto" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">Únete a la Revolución Verde</h2>
            <p className="text-xl text-muted-foreground text-pretty">
              ¿Eres agricultor, peluquero o simplemente te interesa nuestro proyecto? Contáctanos
            </p>
          </div>
          <Card className="p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="nombre" className="text-sm font-medium text-foreground">
                    Nombre Completo
                  </label>
                  <Input
                    id="nombre"
                    placeholder="Tu nombre"
                    value={formData.nombre}
                    onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-foreground">
                    Correo Electrónico
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="tu@email.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="mensaje" className="text-sm font-medium text-foreground">
                  Mensaje
                </label>
                <Textarea
                  id="mensaje"
                  placeholder="Cuéntanos cómo podemos ayudarte o cómo te gustaría colaborar..."
                  rows={5}
                  value={formData.mensaje}
                  onChange={(e) => setFormData({ ...formData, mensaje: e.target.value })}
                  required
                />
              </div>
              <Button type="submit" size="lg" className="w-full bg-emerald-600 hover:bg-emerald-700 text-white">
                Enviar Mensaje
              </Button>
            </form>

            <div className="mt-12 pt-8 border-t border-border">
              <div className="grid md:grid-cols-3 gap-6">
                <div className="flex items-start gap-3">
                  <Mail className="h-5 w-5 text-emerald-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Email</h4>
                    <p className="text-sm text-muted-foreground">contacto@hidrocrin.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Phone className="h-5 w-5 text-emerald-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Teléfono</h4>
                    <p className="text-sm text-muted-foreground">+56 9 89649463</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-emerald-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Ubicación</h4>
                    <p className="text-sm text-muted-foreground">Chile</p>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-border bg-[rgba(16, 185, 129, 0.1)]">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Leaf className="h-6 w-6 text-emerald-600" />
                <span className="text-xl font-bold text-foreground">Hidrocrin</span>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Transformando residuos en soluciones sostenibles para la agricultura del futuro.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-4">Navegación</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#problema" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    El Problema
                  </a>
                </li>
                <li>
                  <a href="#solucion" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    Solución
                  </a>
                </li>
                <li>
                  <a
                    href="#beneficios"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Beneficios
                  </a>
                </li>
                <li>
                  <a href="#proceso" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    Proceso
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-4">Proyecto</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    Sobre Nosotros
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    Equipo
                  </a>
                </li>
                <li>
                  <a href="#contacto" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    Contacto
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-4">Legal</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    Privacidad
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    Términos
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-border text-center">
            <p className="text-sm text-muted-foreground">
              © 2025 Hidrocrin. Todos los derechos reservados. Proyecto de Economía Circular.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
