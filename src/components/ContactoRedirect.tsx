import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import HidrocrinLanding from "./sections/HidrocrinLanding"

export default function ContactoRedirect() {
  const navigate = useNavigate()

  useEffect(() => {
    // Redirigir a la página principal
    navigate("/", { replace: true })
    
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
  }, [navigate])

  return <HidrocrinLanding />
}

