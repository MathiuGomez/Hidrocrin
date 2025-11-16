import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

export default function ContactoRedirect() {
  const navigate = useNavigate()

  useEffect(() => {
    // Redirigir a la página principal con un estado que indica que debe hacer scroll al contacto
    navigate("/", { 
      replace: true,
      state: { scrollToContact: true }
    })
  }, [navigate])

  // No renderizar nada, solo redirigir
  return null
}

