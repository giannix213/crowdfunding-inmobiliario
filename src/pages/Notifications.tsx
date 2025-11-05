import { BellIcon, CheckCircleIcon, ExclamationTriangleIcon, InformationCircleIcon } from '@heroicons/react/24/outline'

export default function Notifications() {
  const notifications = [
    {
      id: 1,
      type: 'success',
      title: 'Inversión Confirmada',
      message: 'Tu inversión de S/ 500 en Torre Miraflores ha sido procesada exitosamente.',
      time: '2 min',
      read: false,
      icon: CheckCircleIcon,
      color: 'text-green-600 bg-green-50'
    },
    {
      id: 2,
      type: 'info',
      title: 'Nuevo Proyecto Disponible',
      message: 'Edificio San Isidro ya está disponible para inversión. ¡No te lo pierdas!',
      time: '1 hora',
      read: false,
      icon: InformationCircleIcon,
      color: 'text-blue-600 bg-blue-50'
    },
    {
      id: 3,
      type: 'warning',
      title: 'Pago de Dividendos',
      message: 'Recibirás S/ 45.50 de dividendos el próximo viernes.',
      time: '3 horas',
      read: true,
      icon: ExclamationTriangleIcon,
      color: 'text-yellow-600 bg-yellow-50'
    },
    {
      id: 4,
      type: 'success',
      title: 'Proyecto Completado',
      message: 'Torre Miraflores ha alcanzado el 100% de financiamiento.',
      time: '1 día',
      read: true,
      icon: CheckCircleIcon,
      color: 'text-green-600 bg-green-50'
    },
    {
      id: 5,
      type: 'info',
      title: 'Actualización de Perfil',
      message: 'Completa tu perfil para acceder a proyectos exclusivos.',
      time: '2 días',
      read: true,
      icon: InformationCircleIcon,
      color: 'text-purple-600 bg-purple-50'
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Header */}
      <div className="bg-gradient-to-r from-primary-600 to-purple-600 px-6 pt-12 pb-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-white text-2xl font-bold">Notificaciones</h1>
            <p className="text-white/80">Mantente al día con tus inversiones</p>
          </div>
          <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
            <BellIcon className="w-6 h-6 text-white" />
          </div>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="px-6 py-4 bg-white border-b border-gray-200">
        <div className="flex space-x-4">
          <button className="px-4 py-2 bg-primary-600 text-white rounded-full text-sm font-medium">
            Todas
          </button>
          <button className="px-4 py-2 bg-gray-100 text-gray-600 rounded-full text-sm font-medium">
            No leídas
          </button>
          <button className="px-4 py-2 bg-gray-100 text-gray-600 rounded-full text-sm font-medium">
            Inversiones
          </button>
        </div>
      </div>

      {/* Notifications List */}
      <div className="px-6 py-4 space-y-3">
        {notifications.map((notification) => (
          <div
            key={notification.id}
            className={`bg-white rounded-xl p-4 shadow-sm border-l-4 ${
              notification.read 
                ? 'border-gray-200 opacity-75' 
                : 'border-primary-500'
            }`}
          >
            <div className="flex items-start space-x-3">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center ${notification.color}`}>
                <notification.icon className="w-5 h-5" />
              </div>
              
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <h3 className={`font-medium ${notification.read ? 'text-gray-700' : 'text-gray-900'}`}>
                    {notification.title}
                  </h3>
                  <span className="text-xs text-gray-500">{notification.time}</span>
                </div>
                
                <p className={`mt-1 text-sm ${notification.read ? 'text-gray-500' : 'text-gray-700'}`}>
                  {notification.message}
                </p>
                
                {!notification.read && (
                  <div className="mt-2 flex items-center space-x-2">
                    <button className="text-xs text-primary-600 font-medium hover:text-primary-700">
                      Marcar como leída
                    </button>
                    <span className="text-gray-300">•</span>
                    <button className="text-xs text-gray-500 hover:text-gray-700">
                      Ver detalles
                    </button>
                  </div>
                )}
              </div>
              
              {!notification.read && (
                <div className="w-2 h-2 bg-primary-600 rounded-full mt-2"></div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Empty State (if no notifications) */}
      {notifications.length === 0 && (
        <div className="flex flex-col items-center justify-center py-16">
          <BellIcon className="w-16 h-16 text-gray-300 mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">No hay notificaciones</h3>
          <p className="text-gray-500 text-center">
            Te notificaremos cuando haya actualizaciones sobre tus inversiones.
          </p>
        </div>
      )}
    </div>
  )
}