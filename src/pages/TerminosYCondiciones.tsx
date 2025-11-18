import { useEffect } from "react"
import { Link } from "react-router-dom"
import PageLayout from "../components/layout/PageLayout"
import { FileText, Shield, ExternalLink, AlertCircle, Mail, Edit } from "lucide-react"

export default function TerminosYCondiciones() {
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
      {/* Hero Section */}
      <section className="pt-24 sm:pt-28 lg:pt-32 pb-4 px-4 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-32 h-32 bg-emerald-300 rounded-full blur-3xl"></div>
          <div className="absolute top-40 right-20 w-24 h-24 bg-teal-300 rounded-full blur-2xl"></div>
          <div className="absolute bottom-20 left-1/3 w-40 h-40 bg-green-300 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto max-w-4xl relative z-10">
          <div className="text-center mb-6 sm:mb-8">
            <div className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 bg-emerald-100 text-emerald-800 rounded-full text-xs sm:text-sm font-medium mb-3 sm:mb-4">
              Legal
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-3 sm:mb-4 leading-tight px-4">
              Términos y <span className="text-emerald-600">Condiciones</span>
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed px-4">
              El uso de este sitio web de Hidrocrin implica la aceptación de los siguientes términos y condiciones
            </p>
          </div>
        </div>
      </section>

      {/* Términos Section */}
      <section className="pt-4 pb-8 sm:pb-12 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="space-y-3 sm:space-y-4">
            {terminos.map((termino, index) => {
              const Icon = termino.icon
              return (
                <div
                  key={index}
                  className="p-5 sm:p-6 lg:p-8 rounded-2xl sm:rounded-3xl backdrop-blur-xl border border-emerald-200/30 shadow-2xl hover:shadow-2xl transition-all duration-300"
                  style={{
                    background: 'rgba(16, 185, 129, 0.08)',
                    backdropFilter: 'blur(20px)',
                  }}
                >
                  <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
                    <div className="h-12 w-12 sm:h-14 sm:w-14 lg:h-16 lg:w-16 bg-emerald-100 rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0">
                      <Icon className="h-6 w-6 sm:h-7 sm:w-7 lg:h-8 lg:w-8 text-emerald-600" />
                    </div>
                    <div className="flex-1">
                      <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-foreground mb-2 sm:mb-3">{termino.title}</h2>
                      <p className="text-sm sm:text-base lg:text-lg text-muted-foreground leading-relaxed">
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
      <section className="pt-6 sm:pt-8 pb-8 sm:pb-12 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <div 
            className="p-6 sm:p-8 rounded-2xl sm:rounded-3xl backdrop-blur-xl border border-emerald-200/30 shadow-2xl text-center"
            style={{
              background: 'rgba(16, 185, 129, 0.08)',
              backdropFilter: 'blur(20px)',
            }}
          >
            <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-2 sm:mb-3">¿Tienes preguntas?</h2>
            <p className="text-sm sm:text-base text-muted-foreground mb-4 sm:mb-6 px-4">
              Si tienes alguna consulta sobre estos términos y condiciones, no dudes en contactarnos
            </p>
            <Link 
              to="/#contacto-formulario"
              className="inline-block px-5 sm:px-6 py-2.5 sm:py-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg sm:rounded-xl font-semibold transition-colors duration-300 text-sm sm:text-base"
            >
              Ir a Contacto
            </Link>
          </div>
        </div>
      </section>
    </PageLayout>
  )
}

