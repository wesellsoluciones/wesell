export default function Hero() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#020617] via-[#0f172a] to-[#020617] py-28 px-6 text-center">
      {/* Subtle glow effect */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[600px] h-[600px] rounded-full bg-[#22c55e]/5 blur-3xl" />
      </div>

      <div className="relative max-w-3xl mx-auto">
        <span className="inline-block mb-4 px-4 py-1.5 rounded-full bg-[#22c55e]/10 text-[#22c55e] text-sm font-semibold tracking-widest uppercase border border-[#22c55e]/20">
          Consultoría Digital
        </span>
        <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6 text-white">
          Consultoría en{' '}
          <span className="text-[#22c55e]">Negocios Digitales</span>
        </h1>
        <p className="text-lg md:text-xl text-slate-400 mb-10 leading-relaxed">
          Escalamos tu negocio con estrategia, tecnología y datos.
          <br className="hidden md:block" />
          Resultados medibles desde el primer mes.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => scrollTo('contacto')}
            className="px-8 py-4 bg-[#22c55e] hover:bg-[#16a34a] text-black font-bold rounded-lg transition-all duration-200 shadow-lg hover:shadow-[#22c55e]/30 hover:scale-105"
          >
            Agendar llamada
          </button>
          <button
            onClick={() => scrollTo('servicios')}
            className="px-8 py-4 border border-white/20 hover:border-[#22c55e]/50 text-white font-semibold rounded-lg transition-all duration-200 hover:bg-white/5"
          >
            Ver servicios
          </button>
        </div>

        {/* Stats bar */}
        <div className="mt-16 grid grid-cols-3 gap-6 border-t border-white/10 pt-10">
          {[
            { value: '+120', label: 'Clientes atendidos' },
            { value: '3x', label: 'ROI promedio' },
            { value: '+8 años', label: 'De experiencia' },
          ].map(({ value, label }) => (
            <div key={label} className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-[#22c55e]">{value}</div>
              <div className="text-xs md:text-sm text-slate-500 mt-1">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
