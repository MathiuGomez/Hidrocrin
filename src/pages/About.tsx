import { useEffect } from "react"
import PageLayout from "@/components/layout/PageLayout"
import { Users, Leaf, Recycle } from "lucide-react"
import { IMAGES, IMAGE_ALTS } from "@/assets/images"

export default function About() {
  useEffect(() => {
    // Hacer scroll al inicio de la página cuando se carga
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])

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
            <div className="flex flex-col sm:flex-row items-center justify-center gap-2.5 sm:gap-3 md:gap-4 mb-3 sm:mb-4 md:mb-6">
              <img 
                src={IMAGES.LOGO} 
                alt={IMAGE_ALTS.LOGO} 
                className="h-12 w-12 sm:h-16 sm:w-16 md:h-20 md:w-20 object-contain"
              />
              <div className="inline-block px-3 sm:px-4 md:px-6 py-1.5 sm:py-2 md:py-3 bg-emerald-100 text-emerald-800 rounded-full text-xs sm:text-sm md:text-base lg:text-lg font-medium">
                Sobre Nosotros
              </div>
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground mb-2 sm:mb-3 md:mb-4 leading-tight px-4">
              Conoce a <span className="text-emerald-600">Hidrocrin</span>
            </h1>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-4 sm:mb-6 md:mb-8 px-4">
              Innovación social que transforma realidades
            </p>
            
            {/* Imagen */}
            <div className="max-w-5xl mx-auto">
              <div className="rounded-xl sm:rounded-2xl lg:rounded-3xl overflow-hidden shadow-2xl bg-gray-100">
                <img 
                  src={IMAGES.SOBRE_NOSOTROS} 
                  alt={IMAGE_ALTS.SOBRE_NOSOTROS}
                  loading="eager"
                  decoding="async"
                  className="w-full h-auto object-cover"
                  style={{ maxWidth: '100%', height: 'auto' }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-5 sm:py-6 md:py-8 lg:py-10 px-3 sm:px-4">
        <div className="container mx-auto max-w-4xl">
          <div 
            className="p-4 sm:p-5 md:p-6 lg:p-8 rounded-xl sm:rounded-2xl lg:rounded-3xl backdrop-blur-xl border border-emerald-200/30 shadow-xl mb-4 sm:mb-5 md:mb-6 lg:mb-8"
            style={{
              background: 'rgba(16, 185, 129, 0.08)',
              backdropFilter: 'blur(20px)',
            }}
          >
            <div className="space-y-2.5 sm:space-y-3 md:space-y-4 text-xs sm:text-sm md:text-base lg:text-lg text-muted-foreground leading-relaxed">
              <p>
                En Hidrocrin creemos que la innovación social puede transformar realidades. Somos un proyecto nacido 
                en la carrera de Peluquería del Instituto AIEP en Puerto Montt, con la misión de darle una segunda 
                vida al cabello humano.
              </p>
              <p>
                Lo que antes era un residuo, hoy se convierte en alfombrillas ecológicas que ayudan a retener la 
                humedad en los suelos agrícolas, especialmente en zonas afectadas por la sequía en la Región de Los Lagos. 
                Nuestra propuesta une dos mundos que parecían distantes: la peluquería y la agricultura, generando una 
                solución sustentable que reduce residuos, disminuye el consumo de agua y apoya a pequeños agricultores.
              </p>
              <p className="text-foreground font-semibold text-sm sm:text-base md:text-lg">
                Creemos que las pequeñas acciones generan grandes cambios y trabajamos día a día para demostrar que la 
                sustentabilidad puede surgir desde lo cotidiano.
              </p>
            </div>
          </div>

          {/* Valores Section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 md:gap-5 lg:gap-6">
            <div 
              className="p-4 sm:p-5 md:p-6 lg:p-8 rounded-xl sm:rounded-2xl lg:rounded-3xl backdrop-blur-xl border border-emerald-200/30 shadow-xl text-center"
              style={{
                background: 'rgba(16, 185, 129, 0.08)',
                backdropFilter: 'blur(20px)',
              }}
            >
              <div className="h-12 w-12 sm:h-14 sm:w-14 md:h-16 md:w-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-2.5 sm:mb-3 md:mb-4">
                <Leaf className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 text-emerald-600" />
              </div>
              <div className="flex flex-row items-center justify-center gap-2 mb-2 sm:mb-2.5 md:mb-3">
                <h3 className="text-base sm:text-lg md:text-xl font-bold text-foreground">Sustentabilidad</h3>
                <img 
                  src={IMAGES.LOGO} 
                  alt={IMAGE_ALTS.LOGO} 
                  className="h-5 sm:h-6 md:h-7 object-contain"
                />
              </div>
              <p className="text-xs sm:text-sm md:text-base text-muted-foreground leading-relaxed">
                Transformamos residuos en recursos valiosos para el medio ambiente
              </p>
            </div>

            <div 
              className="p-4 sm:p-5 md:p-6 lg:p-8 rounded-xl sm:rounded-2xl lg:rounded-3xl backdrop-blur-xl border border-emerald-200/30 shadow-xl text-center"
              style={{
                background: 'rgba(16, 185, 129, 0.08)',
                backdropFilter: 'blur(20px)',
              }}
            >
              <div className="h-12 w-12 sm:h-14 sm:w-14 md:h-16 md:w-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-2.5 sm:mb-3 md:mb-4">
                <Recycle className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 text-teal-600" />
              </div>
              <div className="flex flex-row items-center justify-center gap-2 mb-2 sm:mb-2.5 md:mb-3">
                <h3 className="text-base sm:text-lg md:text-xl font-bold text-foreground">Economía Circular</h3>
                <img 
                  src={IMAGES.LOGO} 
                  alt={IMAGE_ALTS.LOGO} 
                  className="h-5 sm:h-6 md:h-7 object-contain"
                />
              </div>
              <p className="text-xs sm:text-sm md:text-base text-muted-foreground leading-relaxed">
                Cerramos el ciclo de los residuos creando valor para la comunidad
              </p>
            </div>

            <div 
              className="p-4 sm:p-5 md:p-6 lg:p-8 rounded-xl sm:rounded-2xl lg:rounded-3xl backdrop-blur-xl border border-emerald-200/30 shadow-xl text-center sm:col-span-2 md:col-span-1"
              style={{
                background: 'rgba(16, 185, 129, 0.08)',
                backdropFilter: 'blur(20px)',
              }}
            >
              <div className="h-12 w-12 sm:h-14 sm:w-14 md:h-16 md:w-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-2.5 sm:mb-3 md:mb-4">
                <Users className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 text-emerald-600" />
              </div>
              <div className="flex flex-row items-center justify-center gap-2 mb-2 sm:mb-2.5 md:mb-3">
                <h3 className="text-base sm:text-lg md:text-xl font-bold text-foreground">Impacto Social</h3>
                <img 
                  src={IMAGES.LOGO} 
                  alt={IMAGE_ALTS.LOGO} 
                  className="h-5 sm:h-6 md:h-7 object-contain"
                />
              </div>
              <p className="text-xs sm:text-sm md:text-base text-muted-foreground leading-relaxed">
                Apoyamos a pequeños agricultores y promovemos prácticas sostenibles
              </p>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  )
}

