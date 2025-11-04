import { Link } from 'react-router-dom'
import { ArrowRight, Shield, TrendingUp, Users, Building, Clock, Target } from 'lucide-react'
import ProjectCard from '../components/ProjectCard'
import { mockProjects } from '../data/mockData'

const Home = () => {
  const featuredProjects = mockProjects.slice(0, 3)

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700 text-white">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Invierte desde <span className="text-gold-400">S/10</span> en propiedades reales del Perú
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto">
              Crowdfunding comunitario con transparencia total. Participa en la compra colectiva 
              de propiedades, incluyendo remates judiciales y activos subvaluados.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/projects" className="btn-primary text-lg px-8 py-3">
                Ver proyectos
                <ArrowRight className="ml-2" size={20} />
              </Link>
              <Link to="/register" className="btn-secondary text-lg px-8 py-3 bg-white/10 border-white/30 text-white hover:bg-white/20">
                Regístrate gratis
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-6">
              <div className="text-3xl font-bold text-primary-600 mb-2">S/ 2.5M+</div>
              <div className="text-gray-600">Invertido en propiedades</div>
            </div>
            <div className="p-6">
              <div className="text-3xl font-bold text-primary-600 mb-2">1,200+</div>
              <div className="text-gray-600">Inversores activos</div>
            </div>
            <div className="p-6">
              <div className="text-3xl font-bold text-primary-600 mb-2">15.2%</div>
              <div className="text-gray-600">Rentabilidad promedio</div>
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

      {/* CTA Section */}
      <section className="py-20 bg-primary-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Comienza a invertir hoy mismo
          </h2>
          <p className="text-xl mb-8 text-primary-100">
            Únete a miles de peruanos que ya están construyendo su patrimonio 
            a través del crowdfunding inmobiliario.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/register" className="btn-secondary bg-white text-primary-600 hover:bg-gray-100 text-lg px-8 py-3">
              Crear cuenta gratuita
            </Link>
            <Link to="/download" className="btn-secondary bg-white/10 border-white/30 text-white hover:bg-white/20 text-lg px-8 py-3">
              📱 Descargar App
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home