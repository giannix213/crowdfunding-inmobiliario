import { Link } from 'react-router-dom'
import { ArrowRight, Shield, TrendingUp, Users, Building, Clock, Target } from 'lucide-react'
import ProjectCard from '../components/ProjectCard'
import { mockProjects } from '../data/mockData'

const Home = () => {
  const featuredProjects = mockProjects.slice(0, 3)

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-600 via-primary-700 to-purple-700 text-white overflow-hidden">
        {/* Elementos decorativos animados */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-40 h-40 bg-white/5 rounded-full animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-32 h-32 bg-purple-400/15 rounded-full animate-bounce" style={{ animationDuration: '3s' }}></div>
          <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-primary-300/15 rounded-full animate-ping" style={{ animationDuration: '4s' }}></div>
          <div className="absolute bottom-1/4 right-1/3 w-16 h-16 bg-purple-300/20 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <div className="text-center">
            <div className="animate-fade-in-up">
              <h1 className="text-3xl md:text-5xl font-bold mb-8 leading-tight">
                Invierte desde{' '}
                <span className="bg-gradient-to-r from-gold-400 via-purple-400 to-gold-500 bg-clip-text text-transparent animate-pulse">
                  S/10
                </span>
                <br />
                en propiedades reales
              </h1>
            </div>
            
            <div className="animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              <p className="text-xl md:text-2xl mb-10 text-white/90 max-w-4xl mx-auto leading-relaxed">
                Crowdfunding inmobiliario inteligente con{' '}
                <span className="text-gold-300 font-semibold">transparencia total</span>.
                <br />
                Participa en la compra colectiva de propiedades premium y remates judiciales.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
              <Link 
                to="/projects" 
                className="group bg-gradient-to-r from-gold-400 to-gold-500 hover:from-gold-500 hover:to-gold-600 text-white font-semibold px-10 py-4 rounded-2xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 text-lg flex items-center justify-center"
              >
                Ver proyectos
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </Link>
              <Link 
                to="/register" 
                className="bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white hover:bg-white/20 font-semibold px-10 py-4 rounded-2xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 text-lg"
              >
                Regístrate gratis
              </Link>
            </div>
          </div>
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

      {/* How it Works */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Cómo funciona
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Invertir en propiedades nunca fue tan simple y accesible
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="text-primary-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-4">1. Elige un proyecto</h3>
              <p className="text-gray-600">
                Explora nuestros proyectos verificados de propiedades en ubicaciones estratégicas, 
                incluyendo remates judiciales con alto potencial.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-gold-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <TrendingUp className="text-gold-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-4">2. Invierte desde S/10</h3>
              <p className="text-gray-600">
                Realiza tu inversión de forma segura con montos mínimos accesibles. 
                Diversifica tu portafolio invirtiendo en múltiples propiedades.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Building className="text-green-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-4">3. Recibe tu retorno</h3>
              <p className="text-gray-600">
                Obtén ganancias cuando la propiedad se venda o genere ingresos por renta. 
                Transparencia total en cada paso del proceso.
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link to="/how-it-works" className="btn-primary">
              Conoce más detalles
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Proyectos destacados
            </h2>
            <p className="text-xl text-gray-600">
              Oportunidades de inversión verificadas y listas para financiar
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/projects" className="btn-primary">
              Ver todos los proyectos
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