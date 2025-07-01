import React from 'react'

interface Service {
  id: number
  title: string
  description: string
  icon: React.ReactNode
  features: string[]
}

const Services: React.FC = () => {
  const services: Service[] = [
    {
      id: 1,
      title: "Compra de Propiedades",
      description: "Te ayudamos a encontrar la propiedad perfecta que se adapte a tus necesidades y presupuesto.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z" />
        </svg>
      ),
      features: [
        "Asesoramiento personalizado",
        "Evaluación de propiedades",
        "Negociación de precios",
        "Tramitación de documentos"
      ]
    },
    {
      id: 2,
      title: "Venta de Propiedades",
      description: "Maximiza el valor de tu propiedad con nuestro servicio integral de venta.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
        </svg>
      ),
      features: [
        "Valoración profesional",
        "Marketing especializado",
        "Fotografía profesional",
        "Gestión de visitas"
      ]
    },
    {
      id: 3,
      title: "Alquiler de Propiedades",
      description: "Encuentra el lugar perfecto para vivir o trabajar con nuestras opciones de alquiler.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      features: [
        "Propiedades verificadas",
        "Contratos seguros",
        "Gestión de inquilinos",
        "Mantenimiento incluido"
      ]
    },
    {
      id: 4,
      title: "Inversión Inmobiliaria",
      description: "Maximiza tu patrimonio con nuestras estrategias de inversión inmobiliaria.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      ),
      features: [
        "Análisis de mercado",
        "Oportunidades de inversión",
        "Gestión de portafolio",
        "Rendimiento optimizado"
      ]
    },
    {
      id: 5,
      title: "Tasación de Propiedades",
      description: "Obtén una valoración precisa y profesional de tu propiedad.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
      features: [
        "Evaluación técnica",
        "Análisis comparativo",
        "Informe detallado",
        "Certificación oficial"
      ]
    },
    {
      id: 6,
      title: "Asesoría Legal",
      description: "Te acompañamos en todos los aspectos legales de tu transacción inmobiliaria.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      features: [
        "Revisión de contratos",
        "Tramitación legal",
        "Asesoría fiscal",
        "Resolución de conflictos"
      ]
    }
  ]

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Nuestros Servicios
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ofrecemos una gama completa de servicios inmobiliarios para satisfacer todas tus necesidades
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div key={service.id} className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
              {/* Service Icon */}
              <div className="w-16 h-16 bg-blue-600 rounded-xl flex items-center justify-center text-white mb-6">
                {service.icon}
              </div>

              {/* Service Content */}
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Service Features */}
              <ul className="space-y-3">
                {service.features.map((feature, index) => (
                  <li key={index} className="flex items-center text-sm text-gray-600">
                    <svg className="w-4 h-4 text-blue-600 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Service CTA */}
              <button className="mt-6 w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-lg font-medium transition-colors">
                Saber Más
              </button>
            </div>
          ))}
        </div>

        {/* Additional Services Banner */}
        <div className="mt-20 bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 md:p-12 text-white">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                ¿Necesitas un servicio personalizado?
              </h3>
              <p className="text-blue-100 mb-6 text-lg">
                Nuestro equipo de expertos está listo para ayudarte con cualquier consulta o necesidad específica que tengas.
              </p>
              <button className="bg-white text-blue-600 hover:bg-gray-100 px-6 py-3 rounded-lg font-medium transition-colors">
                Contactar Asesor
              </button>
            </div>
            <div className="text-center lg:text-right">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 rounded-full mb-4">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <p className="text-blue-100">
                Respuesta en menos de 24 horas
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services 