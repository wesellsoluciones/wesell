const values = [
  { icon: '🔍', title: 'Basado en datos', desc: 'Cada decisión está respaldada por métricas reales.' },
  { icon: '🚀', title: 'Orientado a resultados', desc: 'Nos comprometemos con objetivos concretos y medibles.' },
  { icon: '🤝', title: 'Colaborativo', desc: 'Trabajamos como una extensión de tu equipo.' },
]

const team = [
  { name: 'Sofía Reyes', role: 'CEO & Estrategia Digital', initials: 'SR' },
  { name: 'Mateo Herrera', role: 'Head of Growth & Ads', initials: 'MH' },
  { name: 'Laura Campos', role: 'Lead Data Analyst', initials: 'LC' },
]

export default function About() {
  return (
    <section id="nosotros" className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-[#CC1818] text-xs font-bold uppercase tracking-widest">Quiénes somos</span>
          <h2 className="text-4xl font-black text-gray-900 mt-2 mb-4">Sobre Nosotros</h2>
          <div className="w-16 h-1 bg-[#CC1818] mx-auto mb-6" />
          <p className="text-gray-500 max-w-2xl mx-auto leading-relaxed">
            Somos un equipo de expertos en crecimiento digital con más de 8 años ayudando a empresas
            a escalar con estrategias modernas basadas en datos. Hemos trabajado con más de 120 clientes
            en LATAM y España.
          </p>
        </div>

        {/* Values */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {values.map(({ icon, title, desc }) => (
            <div key={title} className="flex flex-col items-center text-center p-8 rounded-2xl bg-gray-50 border border-gray-100 hover:border-[#CC1818]/20 hover:shadow-md transition-all">
              <span className="text-4xl mb-4">{icon}</span>
              <h3 className="text-gray-900 font-black mb-2 text-lg">{title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>

        {/* Red banner */}
        <div className="bg-[#CC1818] rounded-2xl p-10 text-center text-white mb-20">
          <h3 className="text-2xl font-black mb-3">¿Listo para escalar tu negocio?</h3>
          <p className="text-white/80 mb-6">Agendá una llamada gratuita de 30 minutos con nuestro equipo.</p>
          <button
            onClick={() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-3 bg-white text-[#CC1818] font-black rounded-lg hover:bg-gray-100 transition-colors"
          >
            Agendar ahora
          </button>
        </div>

        {/* Team */}
        <div className="text-center mb-10">
          <h3 className="text-2xl font-black text-gray-900">Nuestro Equipo</h3>
          <div className="w-10 h-1 bg-[#CC1818] mx-auto mt-3" />
        </div>
        <div className="flex flex-wrap justify-center gap-10">
          {team.map(({ name, role, initials }) => (
            <div key={name} className="flex flex-col items-center text-center group">
              <div className="w-20 h-20 rounded-full bg-[#CC1818] flex items-center justify-center text-xl font-black text-white mb-3 group-hover:scale-105 transition-transform shadow-lg shadow-[#CC1818]/20">
                {initials}
              </div>
              <div className="font-black text-gray-900">{name}</div>
              <div className="text-gray-400 text-sm mt-1">{role}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
