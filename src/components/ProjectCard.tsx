import { Link } from 'react-router-dom'
import { MapPin, Clock, TrendingUp } from 'lucide-react'
import { Project } from '../types'

interface ProjectCardProps {
  project: Project
}

const ProjectCard = ({ project }: ProjectCardProps) => {
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

  const getTypeColor = (type: string) => {
    const colors = {
      remate: 'bg-red-100 text-red-800',
      desarrollo: 'bg-blue-100 text-blue-800',
      renta: 'bg-green-100 text-green-800'
    }
    return colors[type as keyof typeof colors] || 'bg-gray-100 text-gray-800'
  }

  return (
    <div className="card hover:shadow-lg transition-shadow duration-300">
      <div className="relative mb-4">
        <img
          src={project.imageUrl}
          alt={project.title}
          className="w-full h-48 object-cover rounded-lg"
        />
        <div className="absolute top-3 left-3">
          <span className={`px-2 py-1 rounded-full text-xs font-medium ${getTypeColor(project.type)}`}>
            {getTypeLabel(project.type)}
          </span>
        </div>
        <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full">
          <div className="flex items-center space-x-1 text-xs font-medium text-gray-700">
            <TrendingUp size={12} />
            <span>{project.expectedReturn}% ROI</span>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">{project.title}</h3>
          <div className="flex items-center text-gray-600 text-sm">
            <MapPin size={16} className="mr-1" />
            <span>{project.location}</span>
          </div>
        </div>

        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span className="text-gray-600">Progreso</span>
            <span className="font-medium">{progressPercentage.toFixed(1)}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-primary-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${Math.min(progressPercentage, 100)}%` }}
            ></div>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-gray-600">
              {formatCurrency(project.currentAmount)} de {formatCurrency(project.targetAmount)}
            </span>
          </div>
        </div>

        <div className="flex items-center justify-between text-sm text-gray-600">
          <div className="flex items-center">
            <Clock size={16} className="mr-1" />
            <span>{project.daysLeft} días restantes</span>
          </div>
          <span>Mín: {formatCurrency(project.minInvestment)}</span>
        </div>

        <Link
          to={`/projects/${project.id}`}
          className="block w-full btn-primary text-center"
        >
          Invertir ahora
        </Link>
      </div>
    </div>
  )
}

export default ProjectCard