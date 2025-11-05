import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { AuthProvider, useAuth } from './contexts/AuthContext'
import SplashScreen from './components/SplashScreen'
import BottomNavigation from './components/BottomNavigation'
import Home from './pages/Home'
import Projects from './pages/Projects'
import ProjectDetailNew from './pages/ProjectDetailNew'
import LoginSimple from './pages/LoginSimple'
import RegisterSimple from './pages/RegisterSimple'
import Profile from './pages/Profile'
import Notifications from './pages/Notifications'
import DownloadApp from './pages/DownloadApp'
import HowItWorks from './pages/HowItWorks'
import InstallPrompt from './components/InstallPrompt'

function AppContent() {
  const { user } = useAuth()
  const [showSplash, setShowSplash] = useState(true)

  const handleSplashComplete = () => {
    setShowSplash(false)
  }

  if (showSplash) {
    return <SplashScreen onComplete={handleSplashComplete} />
  }

  // Si no hay usuario, mostrar login
  if (!user) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Routes>
          <Route path="/login" element={<LoginSimple />} />
          <Route path="/register" element={<RegisterSimple />} />
          <Route path="*" element={<Navigate to="/login" replace />} />
        </Routes>
      </div>
    )
  }

  // App principal con navegación
  return (
    <div className="min-h-screen bg-gray-50 pb-16">
      {/* Contenido principal */}
      <main className="min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:id" element={<ProjectDetailNew />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/download" element={<DownloadApp />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/login" element={<Navigate to="/" replace />} />
          <Route path="/register" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      
      {/* Navegación inferior */}
      <BottomNavigation />
      <InstallPrompt />
    </div>
  )
}

function App() {
  return (
    <AuthProvider>
      <Router>
        <AppContent />
      </Router>
    </AuthProvider>
  )
}

export default App