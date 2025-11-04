import { useState } from 'react'
import { Filter, Search } from 'lucide-react'
import ProjectCard from '../components/ProjectCard'
import { mockProjects } from '../data/mockData'

const Projects = () => {
    const [searchTerm, setSearchTerm] = useState('')
    const [selectedType, setSelectedType] = useState('all')
    const [sortBy, setSortBy] = useState('newest')

    const filteredProjects = mockProjects
        .filter(project => {
            const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                project.location.toLowerCase().includes(searchTerm.toLowerCase())
            const matchesType = selectedType === 'all' || project.type === selectedType
            const isActive = project.status === 'active'
            return matchesSearch && matchesType && isActive
        })
        .sort((a, b) => {
            switch (sortBy) {
                case 'newest':
                    return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
                case 'ending':
                    return a.daysLeft - b.daysLeft
                case 'progress':
                    return (b.currentAmount / b.targetAmount) - (a.currentAmount / a.targetAmount)
                case 'return':
                    return b.expectedReturn - a.expectedReturn
                default:
                    return 0
            }
        })

    return (
        <div className="min-h-screen bg-gray-50 py-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-12">
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        Proyectos de inversión
                    </h1>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Descubre oportunidades de inversión inmobiliaria verificadas y listas para financiar
                    </p>
                </div>

                {/* Filters */}
                <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-8">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                        {/* Search */}
                        <div className="relative">
                            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                            <input
                                type="text"
                                placeholder="Buscar proyectos..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                            />
                        </div>

                        {/* Type Filter */}
                        <select
                            value={selectedType}
                            onChange={(e) => setSelectedType(e.target.value)}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                        >
                            <option value="all">Todos los tipos</option>
                            <option value="remate">Remates judiciales</option>
                            <option value="desarrollo">Desarrollos</option>
                            <option value="renta">Propiedades de renta</option>
                        </select>

                        {/* Sort */}
                        <select
                            value={sortBy}
                            onChange={(e) => setSortBy(e.target.value)}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                        >
                            <option value="newest">Más recientes</option>
                            <option value="ending">Terminan pronto</option>
                            <option value="progress">Mayor progreso</option>
                            <option value="return">Mayor rentabilidad</option>
                        </select>

                        {/* Results count */}
                        <div className="flex items-center text-gray-600">
                            <Filter size={20} className="mr-2" />
                            <span>{filteredProjects.length} proyectos encontrados</span>
                        </div>
                    </div>
                </div>

                {/* Projects Grid */}
                {filteredProjects.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredProjects.map((project) => (
                            <ProjectCard key={project.id} project={project} />
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-12">
                        <div className="text-gray-400 mb-4">
                            <Filter size={48} className="mx-auto" />
                        </div>
                        <h3 className="text-lg font-medium text-gray-900 mb-2">
                            No se encontraron proyectos
                        </h3>
                        <p className="text-gray-600">
                            Intenta ajustar los filtros para ver más resultados
                        </p>
                    </div>
                )}

                {/* Info Section */}
                <div className="mt-16 bg-primary-50 rounded-xl p-8">
                    <div className="text-center">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">
                            ¿No encuentras lo que buscas?
                        </h2>
                        <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                            Nuestro equipo está constantemente evaluando nuevas oportunidades de inversión.
                            Regístrate para recibir notificaciones de nuevos proyectos que coincidan con tus intereses.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button className="btn-primary">
                                Configurar alertas
                            </button>
                            <button className="btn-secondary">
                                Contactar asesor
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects