import { useState } from 'react'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setMenuOpen(false)
  }

  return (
    <header className="sticky top-0 z-50 bg-[#020617] border-b border-white/5 shadow-lg">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <span className="text-2xl font-bold text-[#22c55e] tracking-wide">Orchids</span>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8 text-sm font-medium">
          {['servicios', 'nosotros', 'contacto'].map((item) => (
            <button
              key={item}
              onClick={() => scrollTo(item)}
              className="capitalize text-white/80 hover:text-[#22c55e] transition-colors duration-200 cursor-pointer bg-transparent border-none"
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </button>
          ))}
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-1 cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-white transition-transform duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-6 h-0.5 bg-white transition-opacity duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-0.5 bg-white transition-transform duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#020617] px-6 pb-4 flex flex-col gap-4 border-t border-white/5">
          {['servicios', 'nosotros', 'contacto'].map((item) => (
            <button
              key={item}
              onClick={() => scrollTo(item)}
              className="capitalize text-white/80 hover:text-[#22c55e] transition-colors text-left text-sm font-medium cursor-pointer bg-transparent border-none"
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </button>
          ))}
        </div>
      )}
    </header>
  )
}
