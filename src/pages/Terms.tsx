import { useEffect } from "react"
import { Link } from "react-router-dom"
import PageLayout from "@/components/layout/PageLayout"
import { FileText, Shield, ExternalLink, AlertCircle, Mail, Edit } from "lucide-react"
import SEO from "@/components/seo/SEO"

export default function Terms() {
  useEffect(() => {
    // Hacer scroll al inicio de la página cuando se carga
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])
  const terminos = [
    {
      icon: FileText,
      title: "Propósito del sitio",
      content: "Entregar información sobre nuestro proyecto social, nuestras iniciativas y formas de apoyo."
    },
    {
      icon: Shield,
      title: "Propiedad intelectual",
      content: "Todo el contenido publicado (textos, imágenes, logotipos, diseños) pertenece a Hidrocrin y no puede ser reproducido sin autorización previa."
    },
    {
      icon: AlertCircle,
      title: "Uso responsable",
      content: "Los usuarios se comprometen a utilizar la información de manera ética y respetuosa, sin fines comerciales no autorizados."
    },
    {
      icon: ExternalLink,
      title: "Enlaces externos",
      content: "Este sitio puede incluir enlaces a redes sociales u otras páginas. Hidrocrin no se responsabiliza por el contenido de sitios externos."
    },
    {
      icon: Edit,
      title: "Modificaciones",
      content: "Hidrocrin se reserva el derecho de actualizar o modificar estos términos en cualquier momento, sin previo aviso."
    },
    {
      icon: Mail,
      title: "Contacto",
      content: "Para consultas o solicitudes, puedes comunicarte con nosotros a través de nuestras redes sociales oficiales o los canales de contacto publicados en el sitio."
    }
  ]

  return (
    <PageLayout>
      <SEO 
        title="Términos y Condiciones" 
        description="Términos y condiciones de uso del sitio web de Hidrocrin. Información legal sobre el uso de nuestros servicios y contenidos."
      />
      {/* Hero Section */}
      <section className="pt-20 sm:pt-24 md:pt-28 lg:pt-32 pb-4 sm:pb-6 px-3 sm:px-4 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-32 h-32 bg-emerald-300 rounded-full blur-3xl"></div>
          <div className="absolute top-40 right-20 w-24 h-24 bg-teal-300 rounded-full blur-2xl"></div>
          <div className="absolute bottom-20 left-1/3 w-40 h-40 bg-green-300 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto max-w-4xl relative z-10">
          <div className="text-center mb-5 sm:mb-6 md:mb-8">
            <div className="inline-block px-2.5 sm:px-3 md:px-4 py-1.5 sm:py-2 bg-emerald-100 text-emerald-800 rounded-full text-[10px] sm:text-xs md:text-sm font-medium mb-2.5 sm:mb-3 md:mb-4">
              Legal
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground mb-2.5 sm:mb-3 md:mb-4 leading-tight px-2 sm:px-4">
              Términos y <span className="text-emerald-600">Condiciones</span>
            </h1>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed px-2 sm:px-4">
              El uso de este sitio web de Hidrocrin implica la aceptación de los siguientes términos y condiciones
            </p>
          </div>
        </div>
      </section>

      {/* Términos Section */}
      <section className="pt-3 sm:pt-4 pb-6 sm:pb-8 md:pb-12 px-3 sm:px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="space-y-2.5 sm:space-y-3 md:space-y-4">
            {terminos.map((termino, index) => {
              const Icon = termino.icon
              return (
                <div
                  key={index}
                  className="p-4 sm:p-5 md:p-6 lg:p-8 rounded-xl sm:rounded-2xl lg:rounded-3xl backdrop-blur-xl border border-emerald-200/30 shadow-xl hover:shadow-2xl transition-all duration-300"
                  style={{
                    background: 'rgba(16, 185, 129, 0.08)',
                    backdropFilter: 'blur(20px)',
                  }}
                >
                  <div className="flex flex-col sm:flex-row items-start gap-3 sm:gap-4 md:gap-6">
                    <div className="h-10 w-10 sm:h-12 sm:w-12 md:h-14 md:w-14 lg:h-16 lg:w-16 bg-emerald-100 rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0">
                      <Icon className="h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7 lg:h-8 lg:w-8 text-emerald-600" />
                    </div>
                    <div className="flex-1">
                      <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-foreground mb-1.5 sm:mb-2 md:mb-3">{termino.title}</h2>
                      <p className="text-xs sm:text-sm md:text-base lg:text-lg text-muted-foreground leading-relaxed">
                        {termino.content}
                      </p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Información Adicional */}
      <section className="pt-5 sm:pt-6 md:pt-8 pb-6 sm:pb-8 md:pb-12 px-3 sm:px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <div 
            className="p-5 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl lg:rounded-3xl backdrop-blur-xl border border-emerald-200/30 shadow-2xl text-center"
            style={{
              background: 'rgba(16, 185, 129, 0.08)',
              backdropFilter: 'blur(20px)',
            }}
          >
            <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-foreground mb-2 sm:mb-2.5 md:mb-3">¿Tienes preguntas?</h2>
            <p className="text-xs sm:text-sm md:text-base text-muted-foreground mb-3.5 sm:mb-4 md:mb-6 px-2 sm:px-4 leading-relaxed">
              Si tienes alguna consulta sobre estos términos y condiciones, no dudes en contactarnos
            </p>
            <Link 
              to="/#contacto-formulario"
              className="inline-block px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 md:py-3 bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 text-white rounded-lg sm:rounded-xl font-semibold transition-colors duration-300 text-xs sm:text-sm md:text-base"
            >
              Ir a Contacto
            </Link>
          </div>
        </div>
      </section>
    </PageLayout>
  )
}

