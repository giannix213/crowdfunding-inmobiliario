import { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { MapPin, Clock, TrendingUp, FileText, Download, ArrowLeft, DollarSign } from 'lucide-react'
import { mockProjects } from '../data/mockData'
import InvestmentModalSimple from '../components/InvestmentModalSimple'

const ProjectDetail = () => {
  const { id } = useParams()
  const [showInvestmentModal, setShowInvestmentModal] = useState(false)
  
  const project = mockProjects.find(p => p.id === id)

  if (!project) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Proyecto no encontrado</h2>
          <Link to="/projects" className="btn-primary">
            Ver todos los proyectos
          </Link>
        </div>
      </div>
    )
  }

  const progressPercentage = (project.currentAmount / project.targetAmount) * 100

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('es-PE', {
      style: 'currency',
      currency: 'PEN',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount)
  }

  const getTypeLabel = (type: string) => {
    const labels = {
      remate: 'Remate Judicial',
      desarrollo: 'Desarrollo',
      renta: 'Renta'
    }
    return labels[type as keyof typeof labels] || type
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <Link to="/projects" className="inline-flex items-center text-primary-600 hover:text-primary-700 mb-4">
            <ArrowLeft size={20} className="mr-2" />
            Volver a proyectos
          </Link>
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">{project.title}</h1>
              <div className="flex items-center mt-2 text-gray-600">
                <MapPin size={20} className="mr-2" />
                <span>{project.location}</span>
                <span className="mx-3">•</span>
                <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-sm font-medium">
                  {getTypeLabel(project.type)}
                </span>
              </div>
            </div>
            <div className="mt-4 lg:mt-0">
              <button
                onClick={() => setShowInvestmentModal(true)}
                className="btn-primary text-lg px-8 py-3"
              >
                Invertir ahora
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Project Image */}
            <div className="bg-white rounded-xl shadow-sm overflow-hidden">
              <img
                src={project.imageUrl}
                alt={project.title}
                className="w-full h-64 md:h-96 object-cover"
              />
            </div>

            {/* Description */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Descripción del proyecto</h2>
              <p className="text-gray-700 leading-relaxed">{project.description}</p>
            </div>

            {/* Documents */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Documentos</h2>
              {project.documents.length > 0 ? (
                <div className="space-y-3">
                  {project.documents.map((doc) => (
                    <div key={doc.id} className="flex items-center justify-between p-3 border border-gray-200 rounded-lg">
                      <div className="flex items-center">
                        <FileText className="text-gray-400 mr-3" size={20} />
                        <span className="font-medium text-gray-900">{doc.name}</span>
                      </div>
                      <button className="flex items-center text-primary-600 hover:text-primary-700">
                        <Download size={16} className="mr-1" />
                        Descargar
                      </button>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-gray-600">Los documentos estarán disponibles próximamente.</p>
              )}
            </div>

            {/* Map Placeholder */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Ubicación</h2>
              <div className="bg-gray-100 rounded-lg h-64 flex items-center justify-center">
                <div className="text-center text-gray-500">
                  <MapPin size={48} className="mx-auto mb-2" />
                  <p>Mapa interactivo próximamente</p>
                  <p className="text-sm">{project.location}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Investment Summary */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Resumen de inversión</h3>
              
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-gray-600">Meta de inversión</span>
                  <span className="font-semibold">{formatCurrency(project.targetAmount)}</span>
                </div>
                
                <div className="flex justify-between">
                  <span className="text-gray-600">Recaudado</span>
                  <span className="font-semibold">{formatCurrency(project.currentAmount)}</span>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Progreso</span>
                    <span className="font-medium">{progressPercentage.toFixed(1)}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div
                      className="bg-primary-600 h-3 rounded-full transition-all duration-300"
                      style={{ width: `${Math.min(progressPercentage, 100)}%` }}
                    ></div>
                  </div>
                </div>

                <div className="flex justify-between">
                  <span className="text-gray-600">Días restantes</span>
                  <span className="font-semibold flex items-center">
                    <Clock size={16} className="mr-1" />
                    {project.daysLeft}
                  </span>
                </div>

                <div className="flex justify-between">
                  <span className="text-gray-600">Rentabilidad esperada</span>
                  <span className="font-semibold text-green-600 flex items-center">
                    <TrendingUp size={16} className="mr-1" />
                    {project.expectedReturn}%
                  </span>
                </div>

                <div className="flex justify-between">
                  <span className="text-gray-600">Inversión mínima</span>
                  <span className="font-semibold flex items-center">
                    <DollarSign size={16} className="mr-1" />
                    {formatCurrency(project.minInvestment)}
                  </span>
                </div>
              </div>

              <button
                onClick={() => setShowInvestmentModal(true)}
                className="w-full btn-primary mt-6"
              >
                Invertir en este proyecto
              </button>
            </div>

            {/* Risk Warning */}
            <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6">
              <h4 className="font-semibold text-yellow-800 mb-2">Advertencia de riesgo</h4>
              <p className="text-sm text-yellow-700">
                Toda inversión conlleva riesgos. El valor de las inversiones puede subir o bajar. 
                Lee toda la documentación antes de invertir.
              </p>
            </div>

            {/* Contact */}
            <div className="bg-primary-50 rounded-xl p-6">
              <h4 className="font-semibold text-primary-900 mb-2">¿Tienes preguntas?</h4>
              <p className="text-sm text-primary-700 mb-4">
                Nuestro equipo está aquí para ayudarte con cualquier duda sobre este proyecto.
              </p>
              <button className="btn-secondary w-full">
                Contactar asesor
              </button>
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

export default ProjectDetail