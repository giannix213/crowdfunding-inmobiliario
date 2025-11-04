import { Link } from 'react-router-dom'
import { Target, TrendingUp, Building, Shield, Users, Clock } from 'lucide-react'

const HowItWorks = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            ¿Cómo funciona CrowdProp?
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Invertir en propiedades nunca fue tan simple y accesible. 
            Descubre cómo puedes formar parte del mercado inmobiliario peruano.
          </p>
        </div>

        {/* Proceso paso a paso */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="text-center">
            <div className="bg-primary-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Target className="text-primary-600" size={40} />
            </div>
            <h3 className="text-2xl font-semibold mb-4">1. Elige un proyecto</h3>
            <p className="text-gray-600">
              Explora nuestros proyectos verificados de propiedades en ubicaciones estratégicas, 
              incluyendo remates judiciales con alto potencial de rentabilidad.
            </p>
          </div>

          <div className="text-center">
            <div className="bg-gold-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
              <TrendingUp className="text-gold-600" size={40} />
            </div>
            <h3 className="text-2xl font-semibold mb-4">2. Invierte desde S/10</h3>
            <p className="text-gray-600">
              Realiza tu inversión de forma segura con montos mínimos accesibles. 
              Diversifica tu portafolio invirtiendo en múltiples propiedades.
            </p>
          </div>

          <div className="text-center">
            <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Building className="text-green-600" size={40} />
            </div>
            <h3 className="text-2xl font-semibold mb-4">3. Recibe tu retorno</h3>
            <p className="text-gray-600">
              Obtén ganancias cuando la propiedad se venda o genere ingresos por renta. 
              Transparencia total en cada paso del proceso.
            </p>
          </div>
        </div>

        {/* Beneficios */}
        <div className="bg-white rounded-2xl p-8 shadow-sm mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">¿Por qué elegir CrowdProp?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex items-start gap-4">
              <Shield className="text-primary-600 mt-1" size={24} />
              <div>
                <h4 className="font-semibold mb-2">Regulado y seguro</h4>
                <p className="text-gray-600">
                  Supervisados por la SBS del Perú. Todos los proyectos pasan por 
                  rigurosos procesos de due diligence legal y financiero.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Users className="text-primary-600 mt-1" size={24} />
              <div>
                <h4 className="font-semibold mb-2">Transparencia total</h4>
                <p className="text-gray-600">
                  Acceso completo a documentos, contratos y reportes de cada proyecto. 
                  Seguimiento en tiempo real de tu inversión.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Clock className="text-primary-600 mt-1" size={24} />
              <div>
                <h4 className="font-semibold mb-2">Experiencia comprobada</h4>
                <p className="text-gray-600">
                  Más de 50 proyectos exitosos completados. Equipo con más de 10 años 
                  de experiencia en el mercado inmobiliario peruano.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <TrendingUp className="text-primary-600 mt-1" size={24} />
              <div>
                <h4 className="font-semibold mb-2">Rentabilidad atractiva</h4>
                <p className="text-gray-600">
                  Retornos promedio del 15-20% anual, superiores a los instrumentos 
                  financieros tradicionales del mercado peruano.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-4">¿Listo para comenzar?</h3>
          <p className="text-gray-600 mb-8">
            Únete a miles de peruanos que ya están construyendo su patrimonio 
            a través del crowdfunding inmobiliario.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/projects" className="bg-primary-600 hover:bg-primary-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors">
              Ver proyectos disponibles
            </Link>
            <Link to="/register" className="border border-primary-600 text-primary-600 hover:bg-primary-50 font-semibold py-3 px-8 rounded-lg transition-colors">
              Crear cuenta gratuita
            </Link>
          </div>
        </div>

      </div>
    </div>
  )
}

export default HowItWorks