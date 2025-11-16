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
      <section className="pt-32 pb-4 px-4 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-32 h-32 bg-emerald-300 rounded-full blur-3xl"></div>
          <div className="absolute top-40 right-20 w-24 h-24 bg-teal-300 rounded-full blur-2xl"></div>
          <div className="absolute bottom-20 left-1/3 w-40 h-40 bg-green-300 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto max-w-4xl relative z-10">
          <div className="text-center mb-8">
            <div className="inline-block px-4 py-2 bg-emerald-100 text-emerald-800 rounded-full text-sm font-medium mb-4">
              Legal
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold text-foreground mb-4 leading-tight">
              Términos y <span className="text-emerald-600">Condiciones</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              El uso de este sitio web de Hidrocrin implica la aceptación de los siguientes términos y condiciones
            </p>
          </div>
        </div>
      </section>

      {/* Términos Section */}
      <section className="pt-4 pb-12 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="space-y-4">
            {terminos.map((termino, index) => {
              const Icon = termino.icon
              return (
                <div
                  key={index}
                  className="p-8 rounded-3xl backdrop-blur-xl border border-emerald-200/30 shadow-2xl hover:shadow-2xl transition-all duration-300"
                  style={{
                    background: 'rgba(16, 185, 129, 0.08)',
                    backdropFilter: 'blur(20px)',
                  }}
                >
                  <div className="flex items-start gap-6">
                    <div className="h-16 w-16 bg-emerald-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Icon className="h-8 w-8 text-emerald-600" />
                    </div>
                    <div className="flex-1">
                      <h2 className="text-2xl font-bold text-foreground mb-3">{termino.title}</h2>
                      <p className="text-muted-foreground leading-relaxed text-lg">
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
      <section className="pt-8 pb-12 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <div 
            className="p-8 rounded-3xl backdrop-blur-xl border border-emerald-200/30 shadow-2xl text-center"
            style={{
              background: 'rgba(16, 185, 129, 0.08)',
              backdropFilter: 'blur(20px)',
            }}
          >
            <h2 className="text-2xl font-bold text-foreground mb-3">¿Tienes preguntas?</h2>
            <p className="text-muted-foreground mb-4">
              Si tienes alguna consulta sobre estos términos y condiciones, no dudes en contactarnos
            </p>
            <Link 
              to="/#contacto-formulario"
              className="inline-block px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl font-semibold transition-colors duration-300"
            >
              Ir a Contacto
            </Link>
          </div>
        </div>
      </section>
    </PageLayout>
  )
}

