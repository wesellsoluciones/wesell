export default function Footer() {
  return (
    <footer className="bg-[#020617] border-t border-white/5 py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div>
          <span className="text-2xl font-bold text-[#22c55e]">Orchids</span>
          <p className="text-slate-500 text-sm mt-1">Consultoría en Negocios Digitales</p>
        </div>
        <div className="flex gap-8 text-sm text-slate-500">
          {['servicios', 'nosotros', 'contacto'].map((item) => (
            <a
              key={item}
              href={`#${item}`}
              className="capitalize hover:text-[#22c55e] transition-colors"
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </a>
          ))}
        </div>
        <p className="text-slate-600 text-sm">
          © 2026 Orchids Consulting — Todos los derechos reservados
        </p>
      </div>
    </footer>
  )
}
