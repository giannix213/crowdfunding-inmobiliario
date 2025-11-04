import { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { MapPin, Clock, TrendingUp, ArrowLeft, DollarSign } from 'lucide-react'
import { mockProjects } from '../data/mockData'
import InvestmentModalSimple from '../components/InvestmentModalSimple'

const ProjectDetailNew = () => {
  const { id } = useParams()
  const [showInvestmentModal, setShowInvestmentModal] = useState(false)
  
  const project = mockProjects.find(p => p.id === id)

  if (!project) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Proyecto no encontrado</h2>
          <Link to="/projects" className="bg-primary-600 text-white px-6 py-3 rounded-lg">
            Ver todos los proyectos
          </Link>
        </div>
      </div>
    )
  }

  const progressPercentage = (project.currentAmount / project.targetAmount) * 100

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        {/* Back Button */}
        <Link 
          to="/projects" 
          className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 mb-6"
        >
          <ArrowLeft size={20} />
          Volver a proyectos
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-sm overflow-hidden">
              <img 
                src={project.imageUrl} 
                alt={project.title}
                className="w-full h-64 object-cover"
              />
              
              <div className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    project.type === 'remate' ? 'bg-red-100 text-red-800' :
                    project.type === 'desarrollo' ? 'bg-blue-100 text-blue-800' :
                    'bg-green-100 text-green-800'
                  }`}>
                    {project.type === 'remate' ? 'Remate Judicial' :
                     project.type === 'desarrollo' ? 'Desarrollo' : 'Renta'}
                  </span>
                </div>

                <h1 className="text-3xl font-bold text-gray-900 mb-4">
                  {project.title}
                </h1>

                <div className="flex items-center gap-4 text-gray-600 mb-6">
                  <div className="flex items-center gap-1">
                    <MapPin size={16} />
                    <span>{project.location}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock size={16} />
                    <span>{project.daysLeft} días restantes</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <TrendingUp size={16} />
                    <span>{project.expectedReturn}% retorno esperado</span>
                  </div>
                </div>

                <p className="text-gray-700 leading-relaxed mb-6">
                  {project.description}
                </p>

                <div className="border-t pt-6">
                  <h3 className="text-xl font-semibold mb-4">Documentos del proyecto</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {project.documents.map((doc) => (
                      <a
                        key={doc.id}
                        href={doc.url}
                        className="flex items-center gap-3 p-3 border border-gray-200 rounded-lg hover:bg-gray-50"
                      >
                        <div className="text-primary-600">📄</div>
                        <span className="text-sm font-medium">{doc.name}</span>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-sm p-6 sticky top-8">
              <div className="mb-6">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm text-gray-600">Progreso</span>
                  <span className="text-sm font-medium">{progressPercentage.toFixed(1)}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div 
                    className="bg-primary-600 h-3 rounded-full transition-all duration-300"
                    style={{ width: `${Math.min(progressPercentage, 100)}%` }}
                  ></div>
                </div>
              </div>

              <div className="space-y-4 mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-600">Meta:</span>
                  <span className="font-semibold">S/{project.targetAmount.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Recaudado:</span>
                  <span className="font-semibold text-primary-600">S/{project.currentAmount.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Inversión mínima:</span>
                  <span className="font-semibold">S/{project.minInvestment}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Retorno esperado:</span>
                  <span className="font-semibold text-green-600">{project.expectedReturn}%</span>
                </div>
              </div>

              <button
                onClick={() => setShowInvestmentModal(true)}
                className="w-full bg-primary-600 hover:bg-primary-700 text-white font-semibold py-4 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2"
              >
                <DollarSign size={20} />
                Invertir ahora
              </button>

              <p className="text-xs text-gray-500 mt-4 text-center">
                Inversión mínima de S/{project.minInvestment}. Las inversiones conllevan riesgos.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Investment Modal */}
      <InvestmentModalSimple
        project={project}
        isOpen={showInvestmentModal}
        onClose={() => setShowInvestmentModal(false)}
      />
    </div>
  )
}

export default ProjectDetailNew