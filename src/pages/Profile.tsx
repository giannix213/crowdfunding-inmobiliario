import { useAuth } from '../contexts/AuthContext'
import { 
  UserIcon, 
  CogIcon, 
  DocumentTextIcon,
  QuestionMarkCircleIcon,
  ArrowRightOnRectangleIcon,
  ChartBarIcon
} from '@heroicons/react/24/outline'

export default function Profile() {
  const { user, logout } = useAuth()

  const menuItems = [
    {
      icon: ChartBarIcon,
      title: 'Mis Inversiones',
      subtitle: 'Ver portafolio y rendimientos',
      action: () => {}
    },
    {
      icon: DocumentTextIcon,
      title: 'Documentos',
      subtitle: 'Contratos y certificados',
      action: () => {}
    },
    {
      icon: CogIcon,
      title: 'Configuración',
      subtitle: 'Preferencias y seguridad',
      action: () => {}
    },
    {
      icon: QuestionMarkCircleIcon,
      title: 'Ayuda',
      subtitle: 'Soporte y preguntas frecuentes',
      action: () => {}
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Header con gradiente */}
      <div className="bg-gradient-to-br from-primary-600 via-purple-600 to-purple-700 px-6 pt-12 pb-8">
        <div className="flex items-center space-x-4">
          <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center">
            <UserIcon className="w-10 h-10 text-gray-600" />
          </div>
          <div>
            <h1 className="text-white text-2xl font-bold">
              {user?.name || 'Usuario'}
            </h1>
            <p className="text-white/80">
              {user?.email || 'usuario@ejemplo.com'}
            </p>
            <div className="flex items-center mt-2">
              <div className="bg-green-500 w-3 h-3 rounded-full mr-2"></div>
              <span className="text-white/80 text-sm">Cuenta Verificada</span>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="px-6 -mt-6 mb-6">
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-white rounded-xl p-4 shadow-sm">
            <p className="text-gray-500 text-sm">Total Invertido</p>
            <p className="text-2xl font-bold text-gray-900">S/ 2,450</p>
            <p className="text-green-600 text-sm">+12.5%</p>
          </div>
          <div className="bg-white rounded-xl p-4 shadow-sm">
            <p className="text-gray-500 text-sm">Proyectos</p>
            <p className="text-2xl font-bold text-gray-900">3</p>
            <p className="text-purple-600 text-sm">Activos</p>
          </div>
        </div>
      </div>

      {/* Menu Items */}
      <div className="px-6 space-y-2">
        {menuItems.map((item, index) => (
          <button
            key={index}
            onClick={item.action}
            className="w-full bg-white rounded-xl p-4 flex items-center justify-between shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
                <item.icon className="w-5 h-5 text-gray-600" />
              </div>
              <div className="text-left">
                <p className="font-medium text-gray-900">{item.title}</p>
                <p className="text-sm text-gray-500">{item.subtitle}</p>
              </div>
            </div>
            <div className="w-6 h-6 text-gray-400">
              →
            </div>
          </button>
        ))}
      </div>

      {/* Logout Button */}
      <div className="px-6 mt-8">
        <button
          onClick={logout}
          className="w-full bg-red-50 text-red-600 rounded-xl p-4 flex items-center justify-center space-x-2 hover:bg-red-100 transition-colors"
        >
          <ArrowRightOnRectangleIcon className="w-5 h-5" />
          <span className="font-medium">Cerrar Sesión</span>
        </button>
      </div>
    </div>
  )
}