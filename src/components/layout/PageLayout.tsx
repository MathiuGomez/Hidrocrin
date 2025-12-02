import type { ReactNode } from "react"
import AnimatedNav from "@/components/layout/AnimatedNav"
import Footer from "@/components/layout/Footer"

interface PageLayoutProps {
  children: ReactNode
  navItems?: Array<{ href: string; label: string }>
}

export default function PageLayout({ 
  children, 
  navItems = [
    { href: "/", label: "Inicio" },
    { href: "/historia", label: "Historia" },
    { href: "/sobre-nosotros", label: "Sobre Nosotros" },
    { href: "/#contacto-formulario", label: "Contacto" }
  ]
}: PageLayoutProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-background to-teal-50">
      {/* Animated Navigation */}
      <AnimatedNav 
        items={navItems}
      />
      
      {/* Page Content */}
      {children}
      
      {/* Footer */}
      <Footer />
    </div>
  )
}

