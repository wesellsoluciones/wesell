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
    <section id="nosotros" className="py-24 px-6 bg-[#020617]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-[#22c55e] text-sm font-semibold uppercase tracking-widest">Quiénes somos</span>
          <h2 className="text-4xl font-bold text-white mt-2 mb-4">Sobre Nosotros</h2>
          <p className="text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Somos un equipo de expertos en crecimiento digital con más de 8 años ayudando a empresas
            a escalar con estrategias modernas basadas en datos. Hemos trabajado con más de 120 clientes
            en LATAM y España.
          </p>
        </div>

        {/* Values */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {values.map(({ icon, title, desc }) => (
            <div key={title} className="flex flex-col items-center text-center p-6 rounded-2xl bg-white/3 border border-white/5">
              <span className="text-3xl mb-3">{icon}</span>
              <h3 className="text-white font-semibold mb-2">{title}</h3>
              <p className="text-slate-400 text-sm">{desc}</p>
            </div>
          ))}
        </div>

        {/* Team */}
        <div className="text-center mb-10">
          <h3 className="text-2xl font-bold text-white">Nuestro Equipo</h3>
        </div>
        <div className="flex flex-wrap justify-center gap-8">
          {team.map(({ name, role, initials }) => (
            <div key={name} className="flex flex-col items-center text-center group">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#22c55e]/40 to-[#16a34a]/20 border border-[#22c55e]/30 flex items-center justify-center text-xl font-bold text-[#22c55e] mb-3 group-hover:scale-105 transition-transform">
                {initials}
              </div>
              <div className="font-semibold text-white">{name}</div>
              <div className="text-slate-400 text-sm">{role}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
