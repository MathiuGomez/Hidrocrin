import { useEffect } from "react"
import PageLayout from "../components/layout/PageLayout"
import { CheckCircle2, Calendar, MapPin, Users, GraduationCap, Leaf } from "lucide-react"

export default function Historia() {
  useEffect(() => {
    // Hacer scroll al inicio de la página cuando se carga
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])
  // TODO: Agregar imágenes reales del cliente aquí
  // Estructura sugerida para las imágenes:
  // const historiaImages = [
  //   { src: '/assets/images/historia-1.jpg', alt: 'Descripción de la imagen', description: 'Texto descriptivo' },
  //   { src: '/assets/images/historia-2.jpg', alt: 'Descripción de la imagen', description: 'Texto descriptivo' },
  // ]

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
      <section className="pt-32 pb-2 px-4 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-32 h-32 bg-emerald-300 rounded-full blur-3xl"></div>
          <div className="absolute top-40 right-20 w-24 h-24 bg-teal-300 rounded-full blur-2xl"></div>
          <div className="absolute bottom-20 left-1/3 w-40 h-40 bg-green-300 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto max-w-4xl relative z-10">
          <div className="text-center mb-8">
            <div className="inline-block px-4 py-2 bg-emerald-100 text-emerald-800 rounded-full text-sm font-medium mb-4">
              Nuestra Historia
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold text-foreground mb-4 leading-tight">
              Cómo Nació <span className="text-emerald-600">Hidrocrin</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Una idea innovadora que transforma residuos en soluciones para la agricultura
            </p>
          </div>
        </div>
      </section>

      {/* Origen Section */}
      <section className="pt-2 pb-2 px-4">
        <div className="container mx-auto max-w-4xl">
          <div 
            className="p-8 rounded-3xl backdrop-blur-xl border border-emerald-200/30 shadow-2xl mb-2"
            style={{
              background: 'rgba(16, 185, 129, 0.08)',
              backdropFilter: 'blur(20px)',
            }}
          >
            <h2 className="text-3xl font-bold text-foreground mb-4">El Origen de la Idea</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
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
      <section className="pt-0 pb-2 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <div 
            className="p-8 rounded-3xl backdrop-blur-xl border border-emerald-200/30 shadow-2xl mb-2"
            style={{
              background: 'rgba(16, 185, 129, 0.08)',
              backdropFilter: 'blur(20px)',
            }}
          >
            <h2 className="text-3xl font-bold text-foreground mb-4">La Investigación del Cabello Humano</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
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
      <section className="pt-0 pb-4 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="grid md:grid-cols-2 gap-3">
            {/* Misión */}
            <div 
              className="p-8 rounded-3xl backdrop-blur-xl border border-emerald-200/30 shadow-2xl"
              style={{
                background: 'rgba(16, 185, 129, 0.08)',
                backdropFilter: 'blur(20px)',
              }}
            >
              <div className="h-16 w-16 bg-emerald-100 rounded-full flex items-center justify-center mb-4">
                <Leaf className="h-8 w-8 text-emerald-600" />
              </div>
              <h2 className="text-3xl font-bold text-foreground mb-4">Nuestra Misión</h2>
              <p className="text-muted-foreground leading-relaxed">
                Darle una segunda vida al cabello humano, transformándolo en soluciones ecológicas que contribuyan 
                a la retención de humedad en suelos agrícolas, especialmente en zonas afectadas por la sequía. 
                Buscamos reducir residuos, apoyar a pequeños agricultores y promover prácticas sustentables, uniendo 
                la peluquería con la agricultura para generar un impacto positivo en la comunidad y el medio ambiente.
              </p>
            </div>

            {/* Visión */}
            <div 
              className="p-8 rounded-3xl backdrop-blur-xl border border-emerald-200/30 shadow-2xl"
              style={{
                background: 'rgba(16, 185, 129, 0.08)',
                backdropFilter: 'blur(20px)',
              }}
            >
              <div className="h-16 w-16 bg-teal-100 rounded-full flex items-center justify-center mb-4">
                <CheckCircle2 className="h-8 w-8 text-teal-600" />
              </div>
              <h2 className="text-3xl font-bold text-foreground mb-4">Nuestra Visión</h2>
              <p className="text-muted-foreground leading-relaxed">
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
      <section className="pt-4 pb-8 px-4 bg-muted/30">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-6">
            <h2 className="text-4xl font-bold text-foreground mb-3">Nuestros Eventos y Participaciones</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Compartiendo conocimiento y expandiendo nuestro impacto
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
            {eventos.map((evento, index) => {
              const Icon = evento.icon
              return (
                <div
                  key={index}
                  className="p-8 rounded-3xl backdrop-blur-xl border border-emerald-200/30 shadow-2xl hover:shadow-2xl transition-all duration-300"
                  style={{
                    background: 'rgba(16, 185, 129, 0.08)',
                    backdropFilter: 'blur(20px)',
                  }}
                >
                  <div className="h-12 w-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="h-6 w-6 text-emerald-600" />
                  </div>
                  <div className="flex items-center gap-2 mb-3">
                    <Calendar className="h-4 w-4 text-emerald-600" />
                    <span className="text-sm font-semibold text-emerald-600 uppercase tracking-wide">
                      {evento.tipo}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">{evento.lugar}</h3>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <MapPin className="h-4 w-4" />
                    <span>{evento.ubicacion}</span>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Galería Section - Preparada para imágenes */}
      <section className="pt-4 pb-8 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-6">
            <h2 className="text-4xl font-bold text-foreground mb-3">Imágenes de Nuestra Historia</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Momentos que han marcado nuestro camino
            </p>
          </div>

          {/* TODO: Agregar imágenes reales del cliente aquí */}
          {/* 
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {historiaImages.map((image, index) => (
              <div key={index} className="relative aspect-square rounded-2xl overflow-hidden group">
                <img 
                  src={image.src} 
                  alt={image.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                    <p className="font-semibold">{image.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          */}

          {/* Placeholder mientras se agregan imágenes */}
          <div 
            className="p-12 rounded-3xl backdrop-blur-xl border border-emerald-200/30 shadow-2xl text-center"
            style={{
              background: 'rgba(16, 185, 129, 0.08)',
              backdropFilter: 'blur(20px)',
            }}
          >
            <p className="text-muted-foreground">
              Las imágenes de nuestra historia se agregarán próximamente
            </p>
          </div>
        </div>
      </section>
    </PageLayout>
  )
}

