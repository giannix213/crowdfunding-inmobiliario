import { Link } from 'react-router-dom'
import { Mail } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-primary-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo y descripción */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">CrowdProp</h3>
            <p className="text-gray-300 mb-4">
              Plataforma de crowdfunding inmobiliario que democratiza el acceso a la inversión 
              en propiedades en Perú. Invierte desde S/10 con total transparencia.
            </p>
            <div className="flex space-x-4">
              <div className="flex items-center space-x-2">
                <Mail size={16} />
                <span className="text-sm">contacto@crowdprop.pe</span>
              </div>
            </div>
          </div>

          {/* Enlaces rápidos */}
          <div>
            <h4 className="font-semibold mb-4">Enlaces</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/projects" className="text-gray-300 hover:text-white transition-colors">
                  Proyectos
                </Link>
              </li>
              <li>
                <Link to="/download" className="text-gray-300 hover:text-white transition-colors">
                  Descargar App
                </Link>
              </li>
              <li>
                <Link to="/login" className="text-gray-300 hover:text-white transition-colors">
                  Iniciar Sesión
                </Link>
              </li>
              <li>
                <Link to="/register" className="text-gray-300 hover:text-white transition-colors">
                  Registrarse
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  Términos y condiciones
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  Política de privacidad
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  Política de riesgos
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-800 mt-8 pt-8 text-center">
          <p className="text-gray-300">
            © 2024 CrowdProp. Todos los derechos reservados. 
            <span className="block mt-1 text-sm">
              Plataforma regulada y supervisada por la SBS del Perú.
            </span>
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer