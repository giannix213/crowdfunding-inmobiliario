import { useParams, Link } from 'react-router-dom'

const ProjectDetailSimple = () => {
  const { id } = useParams()

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <h1 className="text-4xl font-bold mb-4">Detalle del Proyecto</h1>
      <p className="text-xl mb-4">ID del proyecto: {id}</p>
      <Link to="/projects" className="bg-blue-500 text-white px-4 py-2 rounded">
        Volver a proyectos
      </Link>
    </div>
  )
}

export default ProjectDetailSimple