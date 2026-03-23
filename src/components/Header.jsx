import { useState } from 'react'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setMenuOpen(false)
  }

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <img src="/logo.png" alt="We Sell Soluciones" className="h-12 w-12 object-contain" />
          <div className="leading-tight">
            <div className="text-xl font-black text-[#CC1818] tracking-tight uppercase">We Sell</div>
            <div className="text-xs font-semibold text-gray-500 tracking-widest uppercase">Soluciones</div>
          </div>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-semibold">
          {['servicios', 'nosotros', 'contacto'].map((item) => (
            <button
              key={item}
              onClick={() => scrollTo(item)}
              className="capitalize text-gray-600 hover:text-[#CC1818] transition-colors duration-200 cursor-pointer bg-transparent border-none"
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </button>
          ))}
          <button
            onClick={() => scrollTo('contacto')}
            className="px-5 py-2 bg-[#CC1818] hover:bg-[#a81212] text-white font-bold rounded-lg transition-colors cursor-pointer border-none text-sm"
          >
            Contactanos
          </button>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-1 cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-gray-700 transition-transform duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-6 h-0.5 bg-gray-700 transition-opacity duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-0.5 bg-gray-700 transition-transform duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white px-6 pb-4 flex flex-col gap-4 border-t border-gray-100">
          {['servicios', 'nosotros', 'contacto'].map((item) => (
            <button
              key={item}
              onClick={() => scrollTo(item)}
              className="capitalize text-gray-600 hover:text-[#CC1818] transition-colors text-left text-sm font-semibold cursor-pointer bg-transparent border-none"
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </button>
          ))}
        </div>
      )}
    </header>
  )
}
