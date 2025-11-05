import { useEffect, useState } from 'react'

interface SplashScreenProps {
  onComplete: () => void
}

export default function SplashScreen({ onComplete }: SplashScreenProps) {
  const [progress, setProgress] = useState(0)
  const [showLogo, setShowLogo] = useState(false)
  const [pulseAnimation, setPulseAnimation] = useState(false)

  useEffect(() => {
    // Animación del logo
    setTimeout(() => setShowLogo(true), 300)
    setTimeout(() => setPulseAnimation(true), 800)

    // Simulación de carga
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval)
          setTimeout(onComplete, 800)
          return 100
        }
        return prev + 1.5
      })
    }, 60)

    return () => clearInterval(interval)
  }, [onComplete])

  return (
    <div className="fixed inset-0 bg-white flex flex-col items-center justify-center z-50 overflow-hidden">
      {/* Ondas de fondo sutiles */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary-50/30 to-transparent"></div>
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary-100/20 rounded-full animate-bounce" style={{ animationDuration: '4s' }}></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gold-100/30 rounded-full animate-bounce" style={{ animationDuration: '5s', animationDelay: '1s' }}></div>
      </div>

      {/* Logo animado */}
      <div className={`relative transform transition-all duration-1500 ${showLogo ? 'scale-100 opacity-100 rotate-0' : 'scale-50 opacity-0 rotate-12'}`}>
        <div className={`w-28 h-28 bg-primary-600 rounded-3xl flex items-center justify-center mb-8 shadow-2xl ${pulseAnimation ? 'animate-pulse' : ''}`}>
          {/* Efecto de brillo sutil */}
          <div className="absolute inset-0 bg-gradient-to-tr from-white/20 to-transparent rounded-3xl"></div>
          
          {/* Logo CP */}
          <span className="text-4xl font-bold text-white relative z-10">
            CP
          </span>
          
          {/* Anillo de brillo */}
          <div className={`absolute inset-0 rounded-3xl border-2 border-primary-300/50 ${pulseAnimation ? 'animate-ping' : ''}`}></div>
        </div>
      </div>

      {/* Nombre de la app */}
      <h1 className={`text-primary-800 text-4xl font-bold mb-2 transform transition-all duration-1500 delay-300 ${showLogo ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
        <span className="bg-gradient-to-r from-primary-600 via-primary-700 to-primary-600 bg-clip-text text-transparent">
          CrowdProp
        </span>
      </h1>
      
      <p className={`text-gray-600 text-xl mb-16 transform transition-all duration-1500 delay-500 ${showLogo ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
        Inversión Inmobiliaria Inteligente
      </p>

      {/* Barra de progreso */}
      <div className={`w-72 transform transition-all duration-1500 delay-700 ${showLogo ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
        <div className="w-full bg-gray-200 rounded-full h-3 mb-4">
          <div 
            className="bg-gradient-to-r from-primary-500 to-primary-600 h-3 rounded-full transition-all duration-500 ease-out shadow-lg"
            style={{ width: `${progress}%` }}
          />
        </div>
        <p className="text-gray-500 text-center text-base font-medium">
          {progress < 30 ? 'Iniciando...' : progress < 70 ? 'Cargando datos...' : progress < 95 ? 'Casi listo...' : 'Completado'}
        </p>
      </div>

      {/* Partículas sutiles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className={`absolute rounded-full ${i % 3 === 0 ? 'bg-primary-200/40' : 'bg-gray-200/30'} animate-pulse`}
            style={{
              width: `${Math.random() * 4 + 2}px`,
              height: `${Math.random() * 4 + 2}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>
    </div>
  )
}