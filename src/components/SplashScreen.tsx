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
    <div className="fixed inset-0 bg-gradient-to-br from-primary-600 via-purple-600 to-purple-800 flex flex-col items-center justify-center z-50 overflow-hidden">
      {/* Ondas de fondo animadas */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-500/20 to-transparent animate-pulse"></div>
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/5 rounded-full animate-bounce" style={{ animationDuration: '3s' }}></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gold-400/10 rounded-full animate-bounce" style={{ animationDuration: '4s', animationDelay: '1s' }}></div>
      </div>

      {/* Logo animado con efecto de brillo */}
      <div className={`relative transform transition-all duration-1500 ${showLogo ? 'scale-100 opacity-100 rotate-0' : 'scale-50 opacity-0 rotate-12'}`}>
        <div className={`w-28 h-28 bg-white/10 backdrop-blur-sm rounded-3xl flex items-center justify-center mb-8 shadow-2xl border border-white/20 ${pulseAnimation ? 'animate-pulse' : ''}`}>
          {/* Efecto de brillo */}
          <div className="absolute inset-0 bg-gradient-to-tr from-white/20 to-transparent rounded-3xl"></div>
          
          {/* Logo CP en blanco */}
          <span className="text-4xl font-bold text-white relative z-10 drop-shadow-lg">
            CP
          </span>
          
          {/* Anillo de brillo */}
          <div className={`absolute inset-0 rounded-3xl border-2 border-white/30 ${pulseAnimation ? 'animate-ping' : ''}`}></div>
        </div>
      </div>

      {/* Nombre de la app con efecto dorado */}
      <h1 className={`text-white text-4xl font-bold mb-2 transform transition-all duration-1500 delay-300 ${showLogo ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
        <span className="bg-gradient-to-r from-white via-gold-200 to-white bg-clip-text text-transparent">
          CrowdProp
        </span>
      </h1>
      
      <p className={`text-white/90 text-xl mb-16 transform transition-all duration-1500 delay-500 ${showLogo ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
        Inversión Inmobiliaria Inteligente
      </p>

      {/* Barra de progreso mejorada */}
      <div className={`w-72 transform transition-all duration-1500 delay-700 ${showLogo ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
        <div className="w-full bg-white/20 rounded-full h-3 mb-4 backdrop-blur-sm border border-white/30">
          <div 
            className="bg-gradient-to-r from-gold-400 via-white to-gold-400 h-3 rounded-full transition-all duration-500 ease-out shadow-lg"
            style={{ width: `${progress}%` }}
          />
        </div>
        <p className="text-white/80 text-center text-base font-medium">
          {progress < 30 ? 'Iniciando...' : progress < 70 ? 'Cargando datos...' : progress < 95 ? 'Casi listo...' : 'Completado'}
        </p>
      </div>

      {/* Partículas doradas flotantes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className={`absolute rounded-full ${i % 3 === 0 ? 'bg-gold-400/30' : 'bg-white/20'} animate-pulse`}
            style={{
              width: `${Math.random() * 6 + 2}px`,
              height: `${Math.random() * 6 + 2}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          />
        ))}
      </div>
    </div>
  )
}