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
    // Simulación de login - en producción aquí validarías el password
    console.log('Login attempt with password:', password.length, 'characters')
    const mockUser: User = {
      id: '1',
      email,
      name: email.split('@')[0],
      createdAt: new Date(),
      totalInvested: 2450,
      activeInvestments: 3
    }
    setUser(mockUser)
    localStorage.setItem('crowdprop_user', JSON.stringify(mockUser))
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
    // Simulación de registro - en producción aquí validarías y guardarías el password
    console.log('Register attempt with password:', password.length, 'characters')
    const mockUser: User = {
      id: Date.now().toString(),
      email,
      name,
      createdAt: new Date(),
      totalInvested: 0,
      activeInvestments: 0
    }
    setUser(mockUser)
    localStorage.setItem('crowdprop_user', JSON.stringify(mockUser))
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