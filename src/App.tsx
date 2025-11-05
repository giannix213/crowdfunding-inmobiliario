import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { AuthProvider } from './contexts/AuthContext'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Projects from './pages/Projects'
import ProjectDetailNew from './pages/ProjectDetailNew'
import LoginSimple from './pages/LoginSimple'
import RegisterSimple from './pages/RegisterSimple'
import DownloadApp from './pages/DownloadApp'
import HowItWorks from './pages/HowItWorks'
import Footer from './components/Footer'
import InstallPrompt from './components/InstallPrompt'

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="min-h-screen bg-gray-50 flex flex-col">
          {/* Header fijo como app nativa */}
          <div className="sticky top-0 z-50 bg-white shadow-sm">
            <Navbar />
          </div>
          
          {/* Contenido principal con scroll */}
          <main className="flex-1 overflow-y-auto">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/projects/:id" element={<ProjectDetailNew />} />
              <Route path="/login" element={<LoginSimple />} />
              <Route path="/register" element={<RegisterSimple />} />
              <Route path="/download" element={<DownloadApp />} />
              <Route path="/how-it-works" element={<HowItWorks />} />
            </Routes>
          </main>
          
          {/* Footer fijo como app nativa */}
          <div className="bg-white border-t border-gray-200">
            <Footer />
          </div>
          
          <InstallPrompt />
        </div>
      </Router>
    </AuthProvider>
  )
}

export default App