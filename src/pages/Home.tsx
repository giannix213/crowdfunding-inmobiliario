import { Link } from 'react-router-dom'
import { Shield, TrendingUp, Users, Building, Clock, Target } from 'lucide-react'
import { mockProjects } from '../data/mockData'

const Home = () => {
  const featuredProjects = mockProjects.slice(0, 3)

  return (
    <div className="min-h-screen">
      {/* Hero Section - Crowdfunding Landing */}
      <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white overflow-hidden flex items-center">
        {/* Fondo con imagen difuminada */}
        <div className="absolute inset-0 bg-black/70 z-10"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80")'
          }}
        ></div>
        
        {/* Logo en esquina superior izquierda */}
        <div className="absolute top-6 left-6 z-20">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-r from-gold-400 to-gold-500 rounded-xl flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
              </svg>
            </div>
            <span className="text-2xl font-bold text-white">CROWDPROP</span>
          </div>
        </div>
        
        {/* Contenido principal centrado */}
        <div className="relative z-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in-up">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
              💬 Haz que tu dinero{' '}
              <span className="bg-gradient-to-r from-gold-400 via-gold-300 to-gold-500 bg-clip-text text-transparent">
                construya el futuro
              </span>
            </h1>
          </div>
          
          <div className="animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <p className="text-xl md:text-2xl mb-12 text-gray-200 max-w-4xl mx-auto leading-relaxed font-light">
              <strong className="text-white">CROWDPROP</strong> es la app de crowdfunding inmobiliario que transforma 
              pequeños aportes en grandes inversiones.
            </p>
          </div>
          
          {/* CTA Principal */}
          <div className="animate-fade-in-up mb-12" style={{ animationDelay: '0.6s' }}>
            <button className="group bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold px-12 py-5 rounded-2xl shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300 text-xl">
              🔘 Comienza a invertir hoy
              <div className="text-sm font-normal mt-1 opacity-90">
                Desde S/ 500 por proyecto
              </div>
            </button>
          </div>
          
          {/* Elementos de confianza */}
          <div className="animate-fade-in-up flex flex-col md:flex-row items-center justify-center gap-8 text-sm" style={{ animationDelay: '0.9s' }}>
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-green-500/20 rounded-full flex items-center justify-center">
                🔒
              </div>
              <span className="text-gray-300">Inversión segura y transparente</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-blue-500/20 rounded-full flex items-center justify-center">
                💼
              </div>
              <span className="text-gray-300">Gestión profesional del inmueble</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-gold-500/20 rounded-full flex items-center justify-center">
                📈
              </div>
              <span className="text-gray-300">Rentabilidad desde el primer proyecto</span>
            </div>
          </div>
        </div>
        
        {/* Elementos decorativos sutiles */}
        <div className="absolute inset-0 z-10">
          <div className="absolute top-1/4 left-10 w-32 h-32 bg-gold-400/5 rounded-full animate-pulse"></div>
          <div className="absolute bottom-1/4 right-10 w-24 h-24 bg-green-400/5 rounded-full animate-bounce" style={{ animationDuration: '4s' }}></div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-white via-primary-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 border border-primary-100">
              <div className="text-4xl font-bold bg-gradient-to-r from-primary-600 to-primary-700 bg-clip-text text-transparent mb-3">
                S/ 2.5M+
              </div>
              <div className="text-gray-600 font-medium">Invertido en propiedades</div>
              <div className="w-12 h-1 bg-gradient-to-r from-gold-400 to-gold-500 mx-auto mt-4 rounded-full"></div>
            </div>
            <div className="text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 border border-purple-100">
              <div className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-primary-600 bg-clip-text text-transparent mb-3">
                1,200+
              </div>
              <div className="text-gray-600 font-medium">Inversores activos</div>
              <div className="w-12 h-1 bg-gradient-to-r from-purple-400 to-purple-500 mx-auto mt-4 rounded-full"></div>
            </div>
            <div className="text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 border border-primary-100">
              <div className="text-4xl font-bold bg-gradient-to-r from-gold-500 to-gold-600 bg-clip-text text-transparent mb-3">
                15.2%
              </div>
              <div className="text-gray-600 font-medium">Rentabilidad promedio</div>
              <div className="w-12 h-1 bg-gradient-to-r from-gold-400 to-gold-500 mx-auto mt-4 rounded-full"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Calcula tu retorno */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Calcula tu retorno de inversión
            </h2>
            <p className="text-xl text-gray-600">
              Simula cuánto podrías ganar invirtiendo en nuestros proyectos
            </p>
          </div>

          <div className="bg-gradient-to-br from-primary-50 to-purple-50 rounded-2xl p-8 shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Monto de inversión (S/)
                  </label>
                  <input
                    type="range"
                    min="500"
                    max="50000"
                    step="500"
                    defaultValue="5000"
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                    id="investment-amount"
                  />
                  <div className="flex justify-between text-sm text-gray-500 mt-1">
                    <span>S/ 500</span>
                    <span id="amount-display" className="font-semibold text-primary-600">S/ 5,000</span>
                    <span>S/ 50,000</span>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Plazo de inversión
                  </label>
                  <select className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent" id="investment-term">
                    <option value="6">6 meses</option>
                    <option value="12" selected>12 meses</option>
                    <option value="18">18 meses</option>
                    <option value="24">24 meses</option>
                  </select>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Proyección de retorno</h3>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Inversión inicial:</span>
                    <span className="font-semibold" id="initial-investment">S/ 5,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Rentabilidad estimada:</span>
                    <span className="font-semibold text-green-600" id="return-rate">18.5% anual</span>
                  </div>
                  <div className="border-t pt-4">
                    <div className="flex justify-between">
                      <span className="text-gray-900 font-medium">Retorno total estimado:</span>
                      <span className="font-bold text-2xl text-green-600" id="total-return">S/ 5,925</span>
                    </div>
                    <div className="flex justify-between mt-2">
                      <span className="text-gray-600">Ganancia neta:</span>
                      <span className="font-semibold text-gold-600" id="net-profit">S/ 925</span>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6 p-4 bg-yellow-50 rounded-lg border border-yellow-200">
                  <p className="text-xs text-yellow-800">
                    * Esta simulación es referencial y no garantiza rendimientos futuros. 
                    Los retornos pueden variar según el proyecto y las condiciones del mercado.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Beneficios del Crowdfunding */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Beneficios del crowdfunding inmobiliario
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Democratizamos la inversión inmobiliaria para que todos puedan participar
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="bg-gradient-to-r from-green-100 to-green-200 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <TrendingUp className="text-green-600" size={36} />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900">Inversión accesible</h3>
              <p className="text-gray-600 leading-relaxed">
                Desde montos bajos puedes acceder a inversiones inmobiliarias que antes 
                requerían grandes capitales. Democratizamos el mercado inmobiliario.
              </p>
            </div>

            <div className="text-center bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="bg-gradient-to-r from-purple-100 to-purple-200 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Target className="text-purple-600" size={36} />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900">Diversificación inteligente</h3>
              <p className="text-gray-600 leading-relaxed">
                Invierte en varios proyectos a la vez para reducir riesgos. 
                Combina remates judiciales, propiedades de renta y desarrollos.
              </p>
            </div>

            <div className="text-center bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="bg-gradient-to-r from-blue-100 to-blue-200 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Building className="text-blue-600" size={36} />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900">Gestión profesional</h3>
              <p className="text-gray-600 leading-relaxed">
                Nosotros nos encargamos de toda la administración, legal y operativa. 
                Tú solo inviertes y recibes los retornos.
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link 
              to="/how-it-works" 
              className="bg-gradient-to-r from-primary-600 to-purple-600 hover:from-primary-700 hover:to-purple-700 text-white font-semibold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              Conoce más detalles
            </Link>
          </div>
        </div>
      </section>

      {/* Oportunidades de Inversión Activas */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Proyectos de inversión activos
            </h2>
            <p className="text-xl text-gray-600">
              Oportunidades reales de crowdfunding inmobiliario con alta rentabilidad
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredProjects.map((project) => (
              <div key={project.id} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100">
                <div className="relative">
                  <img 
                    src={project.imageUrl} 
                    alt={project.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 right-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      project.type === 'remate' ? 'bg-red-100 text-red-700' :
                      project.type === 'renta' ? 'bg-green-100 text-green-700' :
                      'bg-blue-100 text-blue-700'
                    }`}>
                      {project.type === 'remate' ? 'Remate Judicial' :
                       project.type === 'renta' ? 'Renta' : 'Desarrollo'}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="font-bold text-lg text-gray-900 mb-2">{project.title}</h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">{project.description}</p>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-500">Monto mínimo:</span>
                      <span className="font-semibold text-green-600">S/ {project.minInvestment.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-500">Rentabilidad proyectada:</span>
                      <span className="font-bold text-gold-600">{project.expectedReturn}%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-500">Plazo estimado:</span>
                      <span className="font-semibold text-gray-700">
                        {project.type === 'remate' ? '6-12 meses' : 
                         project.type === 'renta' ? '12-24 meses' : '18-36 meses'}
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-500">Ubicación:</span>
                      <span className="font-medium text-gray-700">{project.location}</span>
                    </div>
                  </div>
                  
                  {/* Barra de progreso */}
                  <div className="mb-4">
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-gray-500">Progreso</span>
                      <span className="font-semibold">{Math.round((project.currentAmount / project.targetAmount) * 100)}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-primary-500 to-purple-500 h-2 rounded-full transition-all duration-500"
                        style={{ width: `${(project.currentAmount / project.targetAmount) * 100}%` }}
                      />
                    </div>
                  </div>
                  
                  <button className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-semibold py-3 px-6 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                    Invertir ahora
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link 
              to="/projects" 
              className="bg-gradient-to-r from-primary-600 to-purple-600 hover:from-primary-700 hover:to-purple-700 text-white font-semibold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              Ver todas las oportunidades
            </Link>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-20 bg-primary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              ¿Por qué confiar en CrowdProp?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <Shield className="text-primary-600 mx-auto mb-4" size={48} />
              <h3 className="text-xl font-semibold mb-4">Regulado y seguro</h3>
              <p className="text-gray-600">
                Supervisados por la SBS del Perú. Todos los proyectos pasan por 
                rigurosos procesos de due diligence legal y financiero.
              </p>
            </div>

            <div className="text-center">
              <Users className="text-primary-600 mx-auto mb-4" size={48} />
              <h3 className="text-xl font-semibold mb-4">Transparencia total</h3>
              <p className="text-gray-600">
                Acceso completo a documentos, contratos y reportes de cada proyecto. 
                Seguimiento en tiempo real de tu inversión.
              </p>
            </div>

            <div className="text-center">
              <Clock className="text-primary-600 mx-auto mb-4" size={48} />
              <h3 className="text-xl font-semibold mb-4">Experiencia comprobada</h3>
              <p className="text-gray-600">
                Más de 50 proyectos exitosos completados. Equipo con más de 10 años 
                de experiencia en el mercado inmobiliario peruano.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Solo para usuarios autenticados */}
      <section className="py-20 bg-gradient-to-r from-primary-600 via-purple-600 to-primary-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            ¡Explora nuevas oportunidades!
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Descubre proyectos exclusivos y maximiza tu portafolio de inversión inmobiliaria.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/projects" className="bg-gradient-to-r from-gold-400 to-gold-500 hover:from-gold-500 hover:to-gold-600 text-white font-semibold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
              Ver todos los proyectos
            </Link>
            <Link to="/profile" className="bg-white/10 backdrop-blur-sm border border-white/30 text-white hover:bg-white/20 font-semibold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
              Mi perfil de inversión
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home