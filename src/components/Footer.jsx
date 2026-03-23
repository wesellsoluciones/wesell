export default function Footer() {
  return (
    <footer className="bg-gray-900 py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-8 pb-8 border-b border-gray-800">
          <div className="flex items-center gap-3">
            <img src="/logo.png" alt="We Sell Soluciones" className="h-14 w-14 object-contain" />
            <div>
              <div className="text-xl font-black text-[#CC1818] uppercase tracking-tight">We Sell</div>
              <div className="text-xs font-semibold text-gray-400 tracking-widest uppercase">Soluciones</div>
            </div>
          </div>
          <div className="flex gap-8 text-sm font-semibold text-gray-400">
            {['servicios', 'nosotros', 'contacto'].map((item) => (
              <a
                key={item}
                href={`#${item}`}
                className="capitalize hover:text-[#CC1818] transition-colors"
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </a>
            ))}
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>© 2026 We Sell Soluciones — Todos los derechos reservados</p>
          <p>wesellsoluciones@gmail.com</p>
        </div>
      </div>
    </footer>
  )
}
