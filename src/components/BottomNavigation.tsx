import { Link, useLocation } from 'react-router-dom'
import { 
  HomeIcon, 
  BuildingOfficeIcon, 
  BellIcon, 
  UserCircleIcon 
} from '@heroicons/react/24/outline'
import {
  HomeIcon as HomeIconSolid,
  BuildingOfficeIcon as BuildingOfficeIconSolid,
  BellIcon as BellIconSolid,
  UserCircleIcon as UserCircleIconSolid
} from '@heroicons/react/24/solid'

export default function BottomNavigation() {
  const location = useLocation()

  const navItems = [
    {
      name: 'Inicio',
      path: '/',
      icon: HomeIcon,
      iconActive: HomeIconSolid
    },
    {
      name: 'Proyectos',
      path: '/projects',
      icon: BuildingOfficeIcon,
      iconActive: BuildingOfficeIconSolid
    },
    {
      name: 'Alertas',
      path: '/notifications',
      icon: BellIcon,
      iconActive: BellIconSolid
    },
    {
      name: 'Perfil',
      path: '/profile',
      icon: UserCircleIcon,
      iconActive: UserCircleIconSolid
    }
  ]

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-4 py-2 z-40">
      <div className="flex justify-around items-center max-w-md mx-auto">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path
          const Icon = isActive ? item.iconActive : item.icon
          
          return (
            <Link
              key={item.path}
              to={item.path}
              className={`flex flex-col items-center py-2 px-3 rounded-lg transition-all duration-200 ${
                isActive 
                  ? 'text-primary-600' 
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              <div className={`p-1 rounded-lg transition-all duration-200 ${
                isActive ? 'bg-primary-50' : ''
              }`}>
                <Icon className="w-6 h-6" />
              </div>
              <span className={`text-xs mt-1 font-medium transition-all duration-200 ${
                isActive ? 'text-primary-600' : 'text-gray-500'
              }`}>
                {item.name}
              </span>
            </Link>
          )
        })}
      </div>
    </div>
  )
}