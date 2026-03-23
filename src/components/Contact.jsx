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
    <section id="contacto" className="py-24 px-6 bg-[#0f172a]">
      <div className="max-w-xl mx-auto text-center">
        <span className="text-[#22c55e] text-sm font-semibold uppercase tracking-widest">Hablemos</span>
        <h2 className="text-4xl font-bold text-white mt-2 mb-4">Contacto</h2>
        <p className="text-slate-400 mb-10">
          Completá el formulario y nuestro equipo te contacta en menos de 24 horas.
        </p>

        {submitted ? (
          <div className="bg-[#022c22]/60 border border-[#22c55e]/30 rounded-2xl p-10 flex flex-col items-center gap-4">
            <div className="text-5xl">✅</div>
            <h3 className="text-2xl font-bold text-white">¡Gracias!</h3>
            <p className="text-slate-400">Te contactaremos a la brevedad.</p>
            <button
              onClick={() => { setSubmitted(false); setEmail(''); setName(''); setMessage('') }}
              className="mt-2 text-sm text-[#22c55e] hover:underline"
            >
              Enviar otro mensaje
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="bg-[#020617] border border-white/5 rounded-2xl p-8 flex flex-col gap-4 text-left">
            <div>
              <label className="block text-sm text-slate-400 mb-1.5" htmlFor="name">Nombre</label>
              <input
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Tu nombre"
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-slate-600 focus:outline-none focus:border-[#22c55e]/50 transition-colors"
              />
            </div>
            <div>
              <label className="block text-sm text-slate-400 mb-1.5" htmlFor="email">Email *</label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => { setEmail(e.target.value); setError('') }}
                placeholder="tucorreo@ejemplo.com"
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-slate-600 focus:outline-none focus:border-[#22c55e]/50 transition-colors"
                required
              />
            </div>
            <div>
              <label className="block text-sm text-slate-400 mb-1.5" htmlFor="message">Mensaje</label>
              <textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Contanos sobre tu negocio..."
                rows={4}
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-slate-600 focus:outline-none focus:border-[#22c55e]/50 transition-colors resize-none"
              />
            </div>

            {error && <p className="text-red-400 text-sm">{error}</p>}

            <button
              type="submit"
              className="w-full py-4 bg-[#22c55e] hover:bg-[#16a34a] text-black font-bold rounded-lg transition-all duration-200 hover:scale-[1.02] shadow-lg hover:shadow-[#22c55e]/30 mt-2"
            >
              Enviar mensaje
            </button>
          </form>
        )}
      </div>
    </section>
  )
}
