import { useEffect, useState } from 'react'

interface SplashScreenProps {
  onComplete: () => void
}

export default function SplashScreen({ onComplete }: SplashScreenProps) {
  const [progress, setProgress] = useState(0)
  const [showLogo, setShowLogo] = useState(false)

  useEffect(() => {
    // Animación del logo
    setTimeout(() => setShowLogo(true), 300)

    // Simulación de carga
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval)
          setTimeout(onComplete, 500)
          return 100
        }
        return prev + 2
      })
    }, 50)

    return () => clearInterval(interval)
  }, [onComplete])

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-primary-600 via-purple-600 to-purple-700 flex flex-col items-center justify-center z-50">
      {/* Logo animado */}
      <div className={`transform transition-all duration-1000 ${showLogo ? 'scale-100 opacity-100' : 'scale-50 opacity-0'}`}>
        <div className="w-24 h-24 bg-white rounded-2xl flex items-center justify-center mb-8 shadow-2xl">
          <span className="text-3xl font-bold bg-gradient-to-r from-primary-600 to-purple-600 bg-clip-text text-transparent">
            CP
          </span>
        </div>
      </div>

      {/* Nombre de la app */}
      <h1 className={`text-white text-3xl font-bold mb-2 transform transition-all duration-1000 delay-300 ${showLogo ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
        CrowdProp
      </h1>
      
      <p className={`text-white/80 text-lg mb-12 transform transition-all duration-1000 delay-500 ${showLogo ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
        Inversión Inmobiliaria
      </p>

      {/* Barra de progreso */}
      <div className={`w-64 transform transition-all duration-1000 delay-700 ${showLogo ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
        <div className="w-full bg-white/20 rounded-full h-2 mb-4">
          <div 
            className="bg-gradient-to-r from-white to-purple-200 h-2 rounded-full transition-all duration-300 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
        <p className="text-white/60 text-center text-sm">
          Cargando... {progress}%
        </p>
      </div>

      {/* Partículas decorativas */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-white/10 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>
    </div>
  )
}