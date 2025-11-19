import React, { useEffect, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { gsap } from 'gsap';
import { IMAGES, IMAGE_ALTS } from '../../assets/images';

interface NavItem {
  href: string;
  label: string;
  ariaLabel?: string;
}

interface AnimatedNavProps {
  items: NavItem[];
  className?: string;
}

const AnimatedNav: React.FC<AnimatedNavProps> = ({
  items,
  className = ''
}) => {
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const hamburgerRef = useRef<HTMLButtonElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const menu = mobileMenuRef.current;
    if (menu) {
      gsap.set(menu, { visibility: 'hidden', opacity: 0, scaleY: 1, y: 0 });
    }
  }, []);

  const handleNavClick = (href: string, e: React.MouseEvent) => {
    // Manejar enlaces tipo "/#hash" que combinan ruta y hash
    if (href.includes('/#')) {
      e.preventDefault();
      const [, hash] = href.split('/#');
      const elementId = hash;
      
      // Si ya estamos en la página principal, solo hacer scroll
      if (window.location.pathname === '/') {
        const element = document.getElementById(elementId);
        if (element) {
          const headerOffset = 120;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
          window.scrollTo({
            top: Math.max(0, offsetPosition),
            behavior: 'smooth'
          });
        }
      } else {
        // Si estamos en otra página, navegar a la página principal con state
        navigate('/', { state: { scrollToContact: true } });
      }
      return;
    }
    
    if (href.startsWith('#')) {
      e.preventDefault();
      // Si es un hash (sección en la misma página)
      const elementId = href.substring(1);
      const element = document.getElementById(elementId);
      if (element) {
        // Calcular la posición considerando el header fijo
        const headerOffset = 100;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }
    // Si es una ruta normal, Link de react-router se encarga automáticamente
  };

  const toggleMobileMenu = () => {
    const newState = !isMobileMenuOpen;
    setIsMobileMenuOpen(newState);

    const hamburger = hamburgerRef.current;
    const menu = mobileMenuRef.current;

    if (hamburger) {
      const lines = hamburger.querySelectorAll('.hamburger-line');
      if (newState) {
        gsap.to(lines[0], { rotation: 45, y: 3, duration: 0.3 });
        gsap.to(lines[1], { rotation: -45, y: -3, duration: 0.3 });
      } else {
        gsap.to(lines[0], { rotation: 0, y: 0, duration: 0.3 });
        gsap.to(lines[1], { rotation: 0, y: 0, duration: 0.3 });
      }
    }

    if (menu) {
      if (newState) {
        gsap.set(menu, { visibility: 'visible' });
        gsap.fromTo(
          menu,
          { opacity: 0, y: 10, scaleY: 1 },
          {
            opacity: 1,
            y: 0,
            scaleY: 1,
            duration: 0.3,
            transformOrigin: 'top center'
          }
        );
      } else {
        gsap.to(menu, {
          opacity: 0,
          y: 10,
          scaleY: 1,
          duration: 0.2,
          transformOrigin: 'top center',
          onComplete: () => {
            gsap.set(menu, { visibility: 'hidden' });
          }
        });
      }
    }
  };


  return (
    <div className="fixed top-4 z-[1000] w-full left-0 flex justify-center px-4">
      <nav
        className={`w-full max-w-6xl flex items-center justify-between box-border px-6 py-3 rounded-full ${className}`}
        aria-label="Primary"
        style={{
          background: 'rgba(16, 185, 129, 0.1)',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(16, 185, 129, 0.2)'
        }}
      >
        {/* Logo y nombre de marca a la izquierda */}
        <a
          href="#inicio"
          aria-label="Inicio"
          className="flex items-center gap-3"
          onClick={(e) => handleNavClick('#inicio', e)}
        >
          <img 
            src={IMAGES.LOGO} 
            alt={IMAGE_ALTS.LOGO} 
            className="h-10 w-10 object-contain"
          />
          <span className="text-xl font-bold text-emerald-600 whitespace-nowrap">
            Hidrocrin
          </span>
        </a>

        {/* Elementos de navegación */}
        <div className="hidden md:flex items-center gap-3">
          {items.map((item) => {
            const linkClasses = 'px-6 py-2.5 bg-emerald-600 text-white font-semibold text-[14px] uppercase tracking-wide whitespace-nowrap cursor-pointer hover:bg-emerald-700 transition-all duration-200 no-underline rounded-full';

            const isHash = item.href.startsWith('#') || item.href.includes('/#');
            return isHash ? (
              <a
                key={item.href}
                href={item.href}
                className={linkClasses}
                aria-label={item.ariaLabel || item.label}
                onClick={(e) => handleNavClick(item.href, e)}
              >
                {item.label}
              </a>
            ) : (
              <Link
                key={item.href}
                to={item.href}
                className={linkClasses}
                aria-label={item.ariaLabel || item.label}
                onClick={(e) => handleNavClick(item.href, e)}
              >
                {item.label}
              </Link>
            );
          })}
        </div>

        {/* Botón de menú móvil a la derecha */}
        <button
          ref={hamburgerRef}
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
          aria-expanded={isMobileMenuOpen}
          className="md:hidden rounded-full border-0 flex flex-col items-center justify-center gap-1 cursor-pointer p-0 relative w-10 h-10 bg-white"
        >
          <span
            className="hamburger-line w-4 h-0.5 rounded origin-center transition-all duration-[10ms] ease-[cubic-bezier(0.25,0.1,0.25,1)] bg-emerald-600"
          />
          <span
            className="hamburger-line w-4 h-0.5 rounded origin-center transition-all duration-[10ms] ease-[cubic-bezier(0.25,0.1,0.25,1)] bg-emerald-600"
          />
        </button>
      </nav>

      <div
        ref={mobileMenuRef}
        className="md:hidden absolute top-[4em] left-4 right-4 rounded-3xl shadow-[0_8px_32px_rgba(0,0,0,0.12)] z-[998] origin-top"
        style={{
          background: '#ffffff',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(16, 185, 129, 0.2)'
        }}
      >
        <ul className="list-none m-0 p-3 flex flex-col gap-1">
          {items.map(item => {
            const linkClasses = 'block py-3 px-4 text-[15px] font-semibold text-emerald-600 hover:text-emerald-700 hover:bg-emerald-50 rounded-xl transition-all duration-200 uppercase tracking-wide';

            const isHash = item.href.startsWith('#') || item.href.includes('/#');
            return (
              <li key={item.href}>
                {isHash ? (
                  <a
                    href={item.href}
                    className={linkClasses}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(item.href, e);
                      setIsMobileMenuOpen(false);
                    }}
                  >
                    {item.label}
                  </a>
                ) : (
                  <Link
                    to={item.href}
                    className={linkClasses}
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                    }}
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default AnimatedNav;
