import React, { useState } from "react"
import { Button } from "./ui/button"
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
            <div 
              className="p-8 rounded-3xl backdrop-blur-xl border border-emerald-200/30 shadow-2xl hover:shadow-2xl transition-all duration-300"
              style={{
                background: 'rgba(16, 185, 129, 0.08)',
                backdropFilter: 'blur(20px)',
              }}
            >
              <div className="h-12 w-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-6">
                <Recycle className="h-6 w-6 text-emerald-600" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Residuos de Peluquerías</h3>
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
              <div className="h-12 w-12 bg-teal-100 rounded-lg flex items-center justify-center mb-6">
                <Droplet className="h-6 w-6 text-teal-600" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Crisis de Sequía</h3>
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
            <div 
              className="p-8 text-center rounded-3xl backdrop-blur-xl border border-emerald-200/30 shadow-2xl hover:shadow-2xl transition-all duration-300"
              style={{
                background: 'rgba(16, 185, 129, 0.08)',
                backdropFilter: 'blur(20px)',
              }}
            >
              <div className="h-16 w-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="h-8 w-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">Para Agricultores</h3>
              <ul className="space-y-3 text-left">
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
              className="p-8 text-center rounded-3xl backdrop-blur-xl border border-emerald-200/30 shadow-2xl hover:shadow-2xl transition-all duration-300"
              style={{
                background: 'rgba(16, 185, 129, 0.08)',
                backdropFilter: 'blur(20px)',
              }}
            >
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
            </div>

            <div 
              className="p-8 text-center rounded-3xl backdrop-blur-xl border border-emerald-200/30 shadow-2xl hover:shadow-2xl transition-all duration-300"
              style={{
                background: 'rgba(16, 185, 129, 0.08)',
                backdropFilter: 'blur(20px)',
              }}
            >
              <div className="h-16 w-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Leaf className="h-8 w-8 text-teal-600" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">Para el Medio Ambiente</h3>
              <ul className="space-y-3 text-left">
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
      <section id="contacto" className="py-20 px-4 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-32 h-32 bg-emerald-300 rounded-full blur-3xl"></div>
          <div className="absolute top-40 right-20 w-24 h-24 bg-teal-300 rounded-full blur-2xl"></div>
          <div className="absolute bottom-20 left-1/3 w-40 h-40 bg-green-300 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto max-w-5xl relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block px-6 py-3 bg-emerald-100 text-emerald-800 rounded-full text-lg font-medium mb-6">
              Únete a la Revolución Verde
            </div>
            <h2 className="text-5xl font-bold text-foreground mb-6 leading-tight">
              Transformemos Juntos el Futuro
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
              ¿Eres agricultor, peluquero o simplemente te interesa nuestro proyecto? 
              Formemos una comunidad comprometida con la sostenibilidad y la economía circular.
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Formulario de Contacto */}
            <div 
              className="p-10 rounded-3xl backdrop-blur-xl border border-emerald-200/30 shadow-2xl"
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

              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid md:grid-cols-2 gap-6">
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
                  className="w-full h-14 bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white font-semibold text-lg rounded-xl shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition-all duration-300"
                >
                  <Mail className="mr-3 h-5 w-5" />
                  Enviar Mensaje
                </Button>
              </form>
            </div>

            {/* Información de Contacto */}
            <div className="space-y-8">
              <div 
                className="p-8 rounded-3xl backdrop-blur-xl border border-emerald-200/30 shadow-2xl"
                style={{
                  background: 'rgba(16, 185, 129, 0.08)',
                  backdropFilter: 'blur(20px)',
                }}
              >
                <h3 className="text-2xl font-bold text-foreground mb-6">Información de Contacto</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4 p-4 rounded-2xl bg-white/30 hover:bg-white/40 transition-all duration-300">
                    <div className="h-12 w-12 bg-emerald-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Mail className="h-6 w-6 text-emerald-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1 text-lg">Email</h4>
                      <p className="text-muted-foreground">contacto@hidrocrin.com</p>
                      <p className="text-sm text-emerald-600 mt-1">Respuesta en 24 horas</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4 p-4 rounded-2xl bg-white/30 hover:bg-white/40 transition-all duration-300">
                    <div className="h-12 w-12 bg-emerald-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Phone className="h-6 w-6 text-emerald-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1 text-lg">Teléfono</h4>
                      <p className="text-muted-foreground">+56 9 89649463</p>
                      <p className="text-sm text-emerald-600 mt-1">Lunes a Viernes 9:00 - 18:00</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4 p-4 rounded-2xl bg-white/30 hover:bg-white/40 transition-all duration-300">
                    <div className="h-12 w-12 bg-emerald-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <MapPin className="h-6 w-6 text-emerald-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1 text-lg">Ubicación</h4>
                      <p className="text-muted-foreground">Chile</p>
                      <p className="text-sm text-emerald-600 mt-1">Servicio a nivel nacional</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card de Beneficios */}
              <div 
                className="p-8 rounded-3xl backdrop-blur-xl border border-emerald-200/30 shadow-2xl"
                style={{
                  background: 'rgba(16, 185, 129, 0.08)',
                  backdropFilter: 'blur(20px)',
                }}
              >
                <h3 className="text-xl font-bold text-foreground mb-4">¿Por qué Contactarnos?</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-emerald-600 flex-shrink-0" />
                    <span className="text-muted-foreground">Asesoría personalizada en agricultura sostenible</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-emerald-600 flex-shrink-0" />
                    <span className="text-muted-foreground">Programas de reciclaje para peluquerías</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-emerald-600 flex-shrink-0" />
                    <span className="text-muted-foreground">Colaboraciones y alianzas estratégicas</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-emerald-600 flex-shrink-0" />
                    <span className="text-muted-foreground">Soporte técnico y seguimiento</span>
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
                <div className="flex items-center gap-3">
                  <div className="h-12 w-12 bg-emerald-100 rounded-xl flex items-center justify-center">
                    <Leaf className="h-7 w-7 text-emerald-600" />
                  </div>
                  <span className="text-2xl font-bold text-foreground">Hidrocrin</span>
                </div>
                <p className="text-muted-foreground leading-relaxed text-base max-w-sm">
                  Transformando residuos en soluciones sostenibles para la agricultura del futuro. 
                  Innovación en economía circular para un mundo más verde.
                </p>
                <div className="flex items-center gap-4">
                  <div className="h-10 w-10 bg-emerald-100 rounded-lg flex items-center justify-center hover:bg-emerald-200 transition-colors cursor-pointer">
                    <Mail className="h-5 w-5 text-emerald-600" />
                  </div>
                  <div className="h-10 w-10 bg-teal-100 rounded-lg flex items-center justify-center hover:bg-teal-200 transition-colors cursor-pointer">
                    <Phone className="h-5 w-5 text-teal-600" />
                  </div>
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
                    <a href="#problema" className="group flex items-center gap-3 text-muted-foreground hover:text-foreground transition-all duration-300">
                      <div className="h-2 w-2 bg-emerald-400 rounded-full group-hover:bg-emerald-600 transition-colors"></div>
                      <span className="text-base">El Problema</span>
                    </a>
                  </li>
                  <li>
                    <a href="#solucion" className="group flex items-center gap-3 text-muted-foreground hover:text-foreground transition-all duration-300">
                      <div className="h-2 w-2 bg-emerald-400 rounded-full group-hover:bg-emerald-600 transition-colors"></div>
                      <span className="text-base">Solución</span>
                    </a>
                  </li>
                  <li>
                    <a href="#beneficios" className="group flex items-center gap-3 text-muted-foreground hover:text-foreground transition-all duration-300">
                      <div className="h-2 w-2 bg-emerald-400 rounded-full group-hover:bg-emerald-600 transition-colors"></div>
                      <span className="text-base">Beneficios</span>
                    </a>
                  </li>
                  <li>
                    <a href="#proceso" className="group flex items-center gap-3 text-muted-foreground hover:text-foreground transition-all duration-300">
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
                    <a href="#" className="group flex items-center gap-3 text-muted-foreground hover:text-foreground transition-all duration-300">
                      <div className="h-2 w-2 bg-teal-400 rounded-full group-hover:bg-teal-600 transition-colors"></div>
                      <span className="text-base">Sobre Nosotros</span>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="group flex items-center gap-3 text-muted-foreground hover:text-foreground transition-all duration-300">
                      <div className="h-2 w-2 bg-teal-400 rounded-full group-hover:bg-teal-600 transition-colors"></div>
                      <span className="text-base">Equipo</span>
                    </a>
                  </li>
                  <li>
                    <a href="#contacto" className="group flex items-center gap-3 text-muted-foreground hover:text-foreground transition-all duration-300">
                      <div className="h-2 w-2 bg-teal-400 rounded-full group-hover:bg-teal-600 transition-colors"></div>
                      <span className="text-base">Contacto</span>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="group flex items-center gap-3 text-muted-foreground hover:text-foreground transition-all duration-300">
                      <div className="h-2 w-2 bg-teal-400 rounded-full group-hover:bg-teal-600 transition-colors"></div>
                      <span className="text-base">Inversores</span>
                    </a>
                  </li>
                </ul>
              </div>

              {/* Legal & Newsletter */}
              <div className="space-y-6">
                <h4 className="text-lg font-bold text-foreground mb-6">Legal</h4>
                <ul className="space-y-4 mb-8">
                  <li>
                    <a href="#" className="group flex items-center gap-3 text-muted-foreground hover:text-foreground transition-all duration-300">
                      <div className="h-2 w-2 bg-emerald-400 rounded-full group-hover:bg-emerald-600 transition-colors"></div>
                      <span className="text-base">Privacidad</span>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="group flex items-center gap-3 text-muted-foreground hover:text-foreground transition-all duration-300">
                      <div className="h-2 w-2 bg-emerald-400 rounded-full group-hover:bg-emerald-600 transition-colors"></div>
                      <span className="text-base">Términos</span>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="group flex items-center gap-3 text-muted-foreground hover:text-foreground transition-all duration-300">
                      <div className="h-2 w-2 bg-emerald-400 rounded-full group-hover:bg-emerald-600 transition-colors"></div>
                      <span className="text-base">Cookies</span>
                    </a>
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
    </div>
  )
}
