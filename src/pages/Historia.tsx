import { useEffect } from "react"
import PageLayout from "../components/layout/PageLayout"
import { CheckCircle2, Calendar, MapPin, Users, GraduationCap, Leaf } from "lucide-react"

export default function Historia() {
  useEffect(() => {
    // Hacer scroll al inicio de la página cuando se carga
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])
  const historiaImages = [
    { 
      src: '/assets/images/WhatsApp Image 2025-11-16 at 09.12.36_5c08015f.jpg', 
      alt: 'Trabajo en invernadero con plantas', 
      description: 'Equipo trabajando en el cuidado de plantas en invernadero' 
    },
    { 
      src: '/assets/images/WhatsApp Image 2025-11-16 at 09.12.36_c57fb056.jpg', 
      alt: 'Trabajo en campo y jardín', 
      description: 'Actividades de campo y trabajo colaborativo en jardín' 
    },
  ]

  const eventos = [
    {
      tipo: "Presentación",
      lugar: "Instituto Profesional Agrario Adolfo Matthei",
      ubicacion: "Osorno",
      icon: GraduationCap
    },
    {
      tipo: "Charlas",
      lugar: "Instituto AIEP",
      ubicacion: "Puerto Montt",
      icon: Users
    },
    {
      tipo: "Seminario",
      lugar: "Universidad de Los Lagos",
      ubicacion: "Sede Castro",
      icon: GraduationCap
    },
    {
      tipo: "Charlas inductivas",
      lugar: "Campo los Cárdenas",
      ubicacion: "Casma",
      icon: Leaf
    },
    {
      tipo: "Charlas inductivas",
      lugar: "Viveros Ketrün Rayen",
      ubicacion: "Hornopirén",
      icon: Leaf
    }
  ]

  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="pt-20 sm:pt-24 md:pt-28 lg:pt-32 pb-6 sm:pb-8 lg:pb-10 px-4 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-32 h-32 bg-emerald-300 rounded-full blur-3xl"></div>
          <div className="absolute top-40 right-20 w-24 h-24 bg-teal-300 rounded-full blur-2xl"></div>
          <div className="absolute bottom-20 left-1/3 w-40 h-40 bg-green-300 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto max-w-4xl relative z-10">
          <div className="text-center mb-4 sm:mb-6 md:mb-8">
            <div className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 bg-emerald-100 text-emerald-800 rounded-full text-xs sm:text-sm font-medium mb-2 sm:mb-3 md:mb-4">
              Nuestra Historia
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground mb-2 sm:mb-3 md:mb-4 leading-tight px-4">
              Cómo Nació <span className="text-emerald-600">Hidrocrin</span>
            </h1>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed px-4">
              Una idea innovadora que transforma residuos en soluciones para la agricultura
            </p>
          </div>
        </div>
      </section>

      {/* Origen Section */}
      <section className="py-4 sm:py-6 lg:py-8 px-4">
        <div className="container mx-auto max-w-4xl">
          <div 
            className="p-4 sm:p-5 md:p-6 lg:p-8 rounded-xl sm:rounded-2xl lg:rounded-3xl backdrop-blur-xl border border-emerald-200/30 shadow-xl mb-4 sm:mb-6"
            style={{
              background: 'rgba(16, 185, 129, 0.08)',
              backdropFilter: 'blur(20px)',
            }}
          >
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground mb-2 sm:mb-3 md:mb-4">El Origen de la Idea</h2>
            <div className="space-y-2.5 sm:space-y-3 md:space-y-4 text-xs sm:text-sm md:text-base text-muted-foreground leading-relaxed">
              <p>
                Hidrocrin nació como una idea innovadora dentro de la carrera de Peluquería del Instituto AIEP en Puerto Montt. 
                Todo comenzó con una pregunta sencilla pero poderosa: <strong className="text-foreground">¿qué pasaría si el cabello 
                que normalmente se desecha pudiera convertirse en un recurso útil para la comunidad?</strong>
              </p>
              <p>
                A partir de nuestra inquietud, nos unimos a investigar las propiedades del cabello humano. 
                Descubrimos que, gracias a su estructura, podía retener agua y nutrientes, lo que lo hacía ideal 
                para apoyar la agricultura en zonas afectadas por la sequía.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Investigación Section */}
      <section className="py-4 sm:py-6 lg:py-8 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <div 
            className="p-4 sm:p-5 md:p-6 lg:p-8 rounded-xl sm:rounded-2xl lg:rounded-3xl backdrop-blur-xl border border-emerald-200/30 shadow-xl mb-4 sm:mb-6"
            style={{
              background: 'rgba(16, 185, 129, 0.08)',
              backdropFilter: 'blur(20px)',
            }}
          >
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground mb-2 sm:mb-3 md:mb-4">La Investigación del Cabello Humano</h2>
            <div className="space-y-2.5 sm:space-y-3 md:space-y-4 text-xs sm:text-sm md:text-base text-muted-foreground leading-relaxed">
              <p>
                De esa investigación surgió el proyecto Hidrocrin, que une dos mundos aparentemente opuestos: 
                la peluquería y la agricultura. Lo que antes era un residuo sin valor, ahora se transforma en 
                alfombrillas ecológicas que ayudan a conservar la humedad del suelo, reducen el consumo de agua 
                y apoyan a pequeños agricultores de la Región de Los Lagos.
              </p>
              <p>
                Con el tiempo, Hidrocrin se consolidó como un emprendimiento social sustentable, demostrando que 
                las soluciones más creativas pueden surgir de lugares inesperados. Hoy, seguimos creciendo con la 
                convicción de que las pequeñas acciones generan grandes cambios y que cada corte de cabello puede 
                convertirse en un aporte para el planeta.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Misión y Visión Section */}
      <section className="py-4 sm:py-6 lg:py-8 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
            {/* Misión */}
            <div 
              className="p-4 sm:p-5 md:p-6 lg:p-8 rounded-xl sm:rounded-2xl lg:rounded-3xl backdrop-blur-xl border border-emerald-200/30 shadow-xl"
              style={{
                background: 'rgba(16, 185, 129, 0.08)',
                backdropFilter: 'blur(20px)',
              }}
            >
              <div className="h-10 w-10 sm:h-12 sm:w-12 md:h-16 md:w-16 bg-emerald-100 rounded-full flex items-center justify-center mb-2 sm:mb-3 md:mb-4">
                <Leaf className="h-5 w-5 sm:h-6 sm:w-6 md:h-8 md:w-8 text-emerald-600" />
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground mb-2 sm:mb-3 md:mb-4">Nuestra Misión</h2>
              <p className="text-xs sm:text-sm md:text-base text-muted-foreground leading-relaxed">
                Darle una segunda vida al cabello humano, transformándolo en soluciones ecológicas que contribuyan 
                a la retención de humedad en suelos agrícolas, especialmente en zonas afectadas por la sequía. 
                Buscamos reducir residuos, apoyar a pequeños agricultores y promover prácticas sustentables, uniendo 
                la peluquería con la agricultura para generar un impacto positivo en la comunidad y el medio ambiente.
              </p>
            </div>

            {/* Visión */}
            <div 
              className="p-4 sm:p-5 md:p-6 lg:p-8 rounded-xl sm:rounded-2xl lg:rounded-3xl backdrop-blur-xl border border-emerald-200/30 shadow-xl"
              style={{
                background: 'rgba(16, 185, 129, 0.08)',
                backdropFilter: 'blur(20px)',
              }}
            >
              <div className="h-10 w-10 sm:h-12 sm:w-12 md:h-16 md:w-16 bg-teal-100 rounded-full flex items-center justify-center mb-2 sm:mb-3 md:mb-4">
                <CheckCircle2 className="h-5 w-5 sm:h-6 sm:w-6 md:h-8 md:w-8 text-teal-600" />
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground mb-2 sm:mb-3 md:mb-4">Nuestra Visión</h2>
              <p className="text-xs sm:text-sm md:text-base text-muted-foreground leading-relaxed">
                Convertir a Hidrocrin en un referente de innovación social y sustentabilidad, demostrando que los 
                residuos pueden transformarse en recursos valiosos. Aspiramos a expandir nuestro impacto más allá 
                de la Región de Los Lagos, inspirando a otras comunidades a replicar este modelo y construir un 
                futuro donde cada acción cotidiana contribuya a un planeta más equilibrado y resiliente.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Eventos Section */}
      <section className="py-6 sm:py-8 lg:py-10 px-4 bg-muted/30">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-4 sm:mb-5 md:mb-6">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-2 sm:mb-3 px-4">Nuestros Eventos y Participaciones</h2>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
              Compartiendo conocimiento y expandiendo nuestro impacto
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-5">
            {eventos.map((evento, index) => {
              const Icon = evento.icon
              return (
                <div
                  key={index}
                  className="p-5 sm:p-6 lg:p-8 rounded-2xl sm:rounded-3xl backdrop-blur-xl border border-emerald-200/30 shadow-2xl hover:shadow-2xl transition-all duration-300"
                  style={{
                    background: 'rgba(16, 185, 129, 0.08)',
                    backdropFilter: 'blur(20px)',
                  }}
                >
                  <div className="h-10 w-10 sm:h-12 sm:w-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-3 sm:mb-4">
                    <Icon className="h-5 w-5 sm:h-6 sm:w-6 text-emerald-600" />
                  </div>
                  <div className="flex items-center gap-2 mb-2 sm:mb-3">
                    <Calendar className="h-3 w-3 sm:h-4 sm:w-4 text-emerald-600" />
                    <span className="text-xs sm:text-sm font-semibold text-emerald-600 uppercase tracking-wide">
                      {evento.tipo}
                    </span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-foreground mb-2">{evento.lugar}</h3>
                  <div className="flex items-center gap-2 text-sm sm:text-base text-muted-foreground">
                    <MapPin className="h-3 w-3 sm:h-4 sm:w-4 flex-shrink-0" />
                    <span>{evento.ubicacion}</span>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Galería Section - Preparada para imágenes */}
      <section className="py-6 sm:py-8 lg:py-10 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-4 sm:mb-5 md:mb-6">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-2 sm:mb-3 px-4">Imágenes de Nuestra Historia</h2>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
              Momentos que han marcado nuestro camino
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4 sm:gap-5 md:gap-6">
            {historiaImages.map((image, index) => (
              <div 
                key={index} 
                className="relative aspect-[4/3] rounded-xl sm:rounded-2xl overflow-hidden group cursor-pointer"
                style={{
                  background: 'rgba(16, 185, 129, 0.08)',
                  backdropFilter: 'blur(20px)',
                }}
              >
                <img 
                  src={image.src} 
                  alt={image.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 text-white">
                    <p className="font-semibold text-sm sm:text-base lg:text-lg">{image.description}</p>
                  </div>
                </div>
                <div className="absolute inset-0 border border-emerald-200/30 rounded-xl sm:rounded-2xl pointer-events-none"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  )
}

