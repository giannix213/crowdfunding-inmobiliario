import React, { createContext, useContext, useState, useEffect } from 'react'
import { User } from '../types'

interface AuthContextType {
  user: User | null
  login: (email: string, password: string) => Promise<void>
  loginWithGoogle: () => Promise<void>
  register: (email: string, password: string, name: string) => Promise<void>
  logout: () => void
  loading: boolean
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simular carga de usuario desde localStorage
    const savedUser = localStorage.getItem('crowdprop_user')
    if (savedUser) {
      setUser(JSON.parse(savedUser))
    }
    setLoading(false)
  }, [])

  const login = async (email: string, password: string) => {
    // Validar credenciales contra usuarios registrados
    const registeredUsers = JSON.parse(localStorage.getItem('crowdprop_registered_users') || '[]')
    const user = registeredUsers.find((u: any) => u.email === email && u.password === password)
    
    if (!user) {
      throw new Error('Credenciales inválidas')
    }
    
    // Remover password del objeto usuario antes de guardarlo en sesión
    const { password: _, ...userWithoutPassword } = user
    setUser(userWithoutPassword)
    localStorage.setItem('crowdprop_user', JSON.stringify(userWithoutPassword))
  }

  const loginWithGoogle = async () => {
    // Simulación de login con Google
    const mockGoogleUser: User = {
      id: 'google_' + Date.now(),
      email: 'usuario@gmail.com',
      name: 'Usuario Google',
      createdAt: new Date(),
      totalInvested: 2450,
      activeInvestments: 3,
      avatar: 'https://via.placeholder.com/100'
    }
    setUser(mockGoogleUser)
    localStorage.setItem('crowdprop_user', JSON.stringify(mockGoogleUser))
  }

  const register = async (email: string, password: string, name: string) => {
    // Validar que el email no esté registrado
    const registeredUsers = JSON.parse(localStorage.getItem('crowdprop_registered_users') || '[]')
    const existingUser = registeredUsers.find((u: any) => u.email === email)
    
    if (existingUser) {
      throw new Error('Este email ya está registrado')
    }
    
    // Crear nuevo usuario
    const newUser = {
      id: Date.now().toString(),
      email,
      password, // En producción esto debería estar hasheado
      name,
      createdAt: new Date(),
      totalInvested: 0,
      activeInvestments: 0
    }
    
    // Guardar en lista de usuarios registrados
    registeredUsers.push(newUser)
    localStorage.setItem('crowdprop_registered_users', JSON.stringify(registeredUsers))
    
    // Iniciar sesión automáticamente
    const { password: _, ...userWithoutPassword } = newUser
    setUser(userWithoutPassword)
    localStorage.setItem('crowdprop_user', JSON.stringify(userWithoutPassword))
  }

  const logout = () => {
    setUser(null)
    localStorage.removeItem('crowdprop_user')
  }

  const value = {
    user,
    login,
    loginWithGoogle,
    register,
    logout,
    loading
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}