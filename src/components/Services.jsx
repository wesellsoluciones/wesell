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
    <section id="servicios" className="py-24 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-[#CC1818] text-xs font-bold uppercase tracking-widest">Lo que hacemos</span>
          <h2 className="text-4xl font-black text-gray-900 mt-2 mb-4">Nuestros Servicios</h2>
          <div className="w-16 h-1 bg-[#CC1818] mx-auto mb-4" />
          <p className="text-gray-500 max-w-xl mx-auto">
            Soluciones integrales para hacer crecer tu negocio digital de forma sostenible y escalable.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map(({ icon, title, description, tags }) => (
            <div
              key={title}
              className="group bg-white border border-gray-100 rounded-2xl p-7 transition-all duration-300 hover:-translate-y-2 hover:border-[#CC1818]/30 hover:shadow-xl hover:shadow-[#CC1818]/5 shadow-sm"
            >
              <div className="text-3xl mb-4">{icon}</div>
              <h3 className="text-lg font-black text-gray-900 mb-3 group-hover:text-[#CC1818] transition-colors">{title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-5">{description}</p>
              <div className="flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <span key={tag} className="px-3 py-1 bg-[#CC1818]/8 rounded-full text-xs text-[#CC1818] font-semibold border border-[#CC1818]/15">
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
