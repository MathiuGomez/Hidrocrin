import { ReactNode } from "react"
import AnimatedNav from "./AnimatedNav"
import Footer from "./Footer"

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
        baseColor="#ffffff"
        pillColor="#ffffff"
        hoveredPillTextColor="#10b981"
        pillTextColor="#10b981"
        initialLoadAnimation={true}
      />
      
      {/* Page Content */}
      {children}
      
      {/* Footer */}
      <Footer />
    </div>
  )
}

