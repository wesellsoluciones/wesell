const services = [
  {
    icon: '🎯',
    title: 'Estrategia Digital',
    description: 'Diseñamos planes de crecimiento online adaptados a tu negocio, con objetivos claros y métricas de seguimiento.',
    tags: ['Análisis', 'Roadmap', 'KPIs'],
  },
  {
    icon: '⚙️',
    title: 'Automatización',
    description: 'Implementamos sistemas para escalar ventas sin esfuerzo manual. Workflows, CRMs y herramientas de productividad.',
    tags: ['CRM', 'Workflows', 'Integración'],
  },
  {
    icon: '📈',
    title: 'Marketing & Ads',
    description: 'Optimización de campañas en Google, Meta y más para maximizar ROI con presupuestos eficientes.',
    tags: ['Google Ads', 'Meta Ads', 'SEO'],
  },
  {
    icon: '📊',
    title: 'Data & Analytics',
    description: 'Dashboards personalizados para tomar decisiones basadas en datos, no en suposiciones.',
    tags: ['Dashboards', 'Reporting', 'Insights'],
  },
  {
    icon: '🛒',
    title: 'eCommerce',
    description: 'Optimizamos tu tienda para convertir visitantes en compradores con estrategias probadas.',
    tags: ['Conversión', 'UX', 'Funnel'],
  },
  {
    icon: '🤝',
    title: 'Consultoría 1:1',
    description: 'Sesiones personalizadas con nuestros expertos para resolver desafíos específicos de tu negocio.',
    tags: ['Mentoría', 'Estrategia', 'Seguimiento'],
  },
]

export default function Services() {
  return (
    <section id="servicios" className="py-24 px-6 bg-[#0f172a]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-[#22c55e] text-sm font-semibold uppercase tracking-widest">Lo que hacemos</span>
          <h2 className="text-4xl font-bold text-white mt-2 mb-4">Nuestros Servicios</h2>
          <p className="text-slate-400 max-w-xl mx-auto">
            Soluciones integrales para hacer crecer tu negocio digital de forma sostenible y escalable.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map(({ icon, title, description, tags }) => (
            <div
              key={title}
              className="group bg-[#020617] border border-white/5 rounded-2xl p-7 transition-all duration-300 hover:-translate-y-2 hover:border-[#22c55e]/30 hover:bg-[#022c22]/40 hover:shadow-xl hover:shadow-[#22c55e]/5"
            >
              <div className="text-3xl mb-4">{icon}</div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#22c55e] transition-colors">{title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-5">{description}</p>
              <div className="flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <span key={tag} className="px-3 py-1 bg-white/5 rounded-full text-xs text-slate-400 border border-white/10">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
