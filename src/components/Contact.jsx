import { useState } from 'react'

export default function Contact() {
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [message, setMessage] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!email) {
      setError('Por favor ingresá un email.')
      return
    }
    setError('')
    setSubmitted(true)
  }

  return (
    <section id="contacto" className="py-24 px-6 bg-gray-50">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <span className="text-[#CC1818] text-xs font-bold uppercase tracking-widest">Hablemos</span>
          <h2 className="text-4xl font-black text-gray-900 mt-2 mb-3">Contacto</h2>
          <div className="w-16 h-1 bg-[#CC1818] mx-auto mb-4" />
          <p className="text-gray-500">Completá el formulario y te contactamos en menos de 24 horas.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Info */}
          <div className="space-y-8">
            <div>
              <img src="/logo.png" alt="We Sell Soluciones" className="h-24 w-24 object-contain mb-6" />
              <h3 className="text-2xl font-black text-gray-900 mb-2">We Sell Soluciones</h3>
              <p className="text-gray-500 leading-relaxed">
                Ayudamos a empresas a crecer en el mundo digital con estrategia, automatización y datos.
              </p>
            </div>
            {[
              { icon: '📧', label: 'Email', value: 'wesellsoluciones@gmail.com' },
              { icon: '📍', label: 'Ubicación', value: 'LATAM & España' },
              { icon: '🕐', label: 'Respuesta', value: 'En menos de 24 horas' },
            ].map(({ icon, label, value }) => (
              <div key={label} className="flex items-start gap-4">
                <div className="w-10 h-10 bg-[#CC1818]/10 rounded-xl flex items-center justify-center text-lg flex-shrink-0">
                  {icon}
                </div>
                <div>
                  <div className="text-xs font-bold text-gray-400 uppercase tracking-wider">{label}</div>
                  <div className="text-gray-700 font-semibold mt-0.5">{value}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Form */}
          {submitted ? (
            <div className="bg-white border border-gray-100 rounded-2xl p-10 flex flex-col items-center gap-4 text-center shadow-sm">
              <div className="w-16 h-16 bg-[#CC1818]/10 rounded-full flex items-center justify-center text-3xl">✅</div>
              <h3 className="text-2xl font-black text-gray-900">¡Gracias!</h3>
              <p className="text-gray-500">Te contactaremos a la brevedad.</p>
              <button
                onClick={() => { setSubmitted(false); setEmail(''); setName(''); setMessage('') }}
                className="mt-2 text-sm text-[#CC1818] hover:underline font-semibold"
              >
                Enviar otro mensaje
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-white border border-gray-100 rounded-2xl p-8 flex flex-col gap-5 shadow-sm">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1.5" htmlFor="name">Nombre</label>
                <input
                  id="name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Tu nombre"
                  className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-[#CC1818] transition-colors text-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1.5" htmlFor="email">Email *</label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => { setEmail(e.target.value); setError('') }}
                  placeholder="tucorreo@ejemplo.com"
                  className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-[#CC1818] transition-colors text-sm"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1.5" htmlFor="message">Mensaje</label>
                <textarea
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Contanos sobre tu negocio..."
                  rows={4}
                  className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-[#CC1818] transition-colors resize-none text-sm"
                />
              </div>
              {error && <p className="text-[#CC1818] text-sm font-semibold">{error}</p>}
              <button
                type="submit"
                className="w-full py-4 bg-[#CC1818] hover:bg-[#a81212] text-white font-black rounded-lg transition-all duration-200 hover:scale-[1.02] shadow-lg hover:shadow-[#CC1818]/30 mt-1"
              >
                Enviar mensaje
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
