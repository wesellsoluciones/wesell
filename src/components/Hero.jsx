export default function Hero() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative overflow-hidden bg-white py-24 px-6">
      {/* Red accent bar top */}
      <div className="absolute top-0 left-0 w-full h-1 bg-[#CC1818]" />

      {/* Background pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{ backgroundImage: 'radial-gradient(#CC1818 1px, transparent 1px)', backgroundSize: '30px 30px' }} />

      <div className="relative max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-16">
        {/* Text */}
        <div className="flex-1 text-center lg:text-left">
          <span className="inline-block mb-4 px-4 py-1.5 rounded-full bg-[#CC1818]/10 text-[#CC1818] text-xs font-bold tracking-widest uppercase border border-[#CC1818]/20">
            Consultoría en Negocios Digitales
          </span>
          <h1 className="text-5xl md:text-6xl font-black leading-tight mb-6 text-gray-900">
            Escalamos tu<br />
            <span className="text-[#CC1818]">negocio digital</span>
          </h1>
          <p className="text-lg text-gray-500 mb-10 leading-relaxed max-w-lg">
            Estrategia, tecnología y datos para hacer crecer tu empresa. Resultados medibles desde el primer mes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <button
              onClick={() => scrollTo('contacto')}
              className="px-8 py-4 bg-[#CC1818] hover:bg-[#a81212] text-white font-bold rounded-lg transition-all duration-200 shadow-lg hover:shadow-[#CC1818]/30 hover:scale-105"
            >
              Agendar llamada gratuita
            </button>
            <button
              onClick={() => scrollTo('servicios')}
              className="px-8 py-4 border-2 border-gray-200 hover:border-[#CC1818] text-gray-700 hover:text-[#CC1818] font-bold rounded-lg transition-all duration-200"
            >
              Ver servicios
            </button>
          </div>
        </div>

        {/* Logo grande */}
        <div className="flex-shrink-0">
          <div className="relative">
            <div className="absolute inset-0 bg-[#CC1818]/10 rounded-full blur-3xl scale-110" />
            <img
              src="/logo.png"
              alt="We Sell Soluciones"
              className="relative w-64 h-64 object-contain drop-shadow-xl"
            />
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="relative max-w-6xl mx-auto mt-20 grid grid-cols-3 gap-6 border-t border-gray-100 pt-10">
        {[
          { value: '+120', label: 'Clientes atendidos' },
          { value: '3x', label: 'ROI promedio' },
          { value: '+8 años', label: 'De experiencia' },
        ].map(({ value, label }) => (
          <div key={label} className="text-center">
            <div className="text-3xl font-black text-[#CC1818]">{value}</div>
            <div className="text-sm text-gray-400 mt-1 font-medium">{label}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
