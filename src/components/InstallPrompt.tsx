import { useState, useEffect } from 'react'
import { X, Download, Smartphone } from 'lucide-react'

const InstallPrompt = () => {
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null)
  const [showPrompt, setShowPrompt] = useState(false)
  const [isIOS, setIsIOS] = useState(false)

  useEffect(() => {
    // Detectar iOS
    const iOS = /iPad|iPhone|iPod/.test(navigator.userAgent)
    setIsIOS(iOS)

    // Escuchar el evento beforeinstallprompt
    const handler = (e: Event) => {
      e.preventDefault()
      setDeferredPrompt(e)
      setShowPrompt(true)
    }

    window.addEventListener('beforeinstallprompt', handler)

    // Verificar si ya está instalada
    if (window.matchMedia('(display-mode: standalone)').matches) {
      setShowPrompt(false)
    }

    return () => window.removeEventListener('beforeinstallprompt', handler)
  }, [])

  const handleInstall = async () => {
    if (!deferredPrompt) return

    deferredPrompt.prompt()
    const { outcome } = await deferredPrompt.userChoice
    
    if (outcome === 'accepted') {
      setDeferredPrompt(null)
      setShowPrompt(false)
    }
  }

  const handleDismiss = () => {
    setShowPrompt(false)
    localStorage.setItem('installPromptDismissed', 'true')
  }

  // No mostrar si ya fue descartado
  if (localStorage.getItem('installPromptDismissed')) {
    return null
  }

  // No mostrar si ya está instalada
  if (window.matchMedia('(display-mode: standalone)').matches) {
    return null
  }

  if (!showPrompt && !isIOS) return null

  return (
    <div className="fixed bottom-4 left-4 right-4 bg-white border border-gray-200 rounded-lg shadow-lg p-4 z-50 max-w-sm mx-auto">
      <div className="flex items-start gap-3">
        <div className="bg-primary-100 p-2 rounded-lg">
          <Smartphone className="text-primary-600" size={20} />
        </div>
        
        <div className="flex-1">
          <h4 className="font-semibold text-gray-900 mb-1">
            Instalar CrowdProp
          </h4>
          <p className="text-sm text-gray-600 mb-3">
            {isIOS 
              ? 'Añade CrowdProp a tu pantalla de inicio para ocultar la barra de direcciones'
              : 'Instala la app para ocultar la barra de direcciones y tener experiencia nativa'
            }
          </p>
          
          <div className="flex gap-2">
            {!isIOS ? (
              <button
                onClick={handleInstall}
                className="flex items-center gap-1 bg-primary-600 text-white px-3 py-1.5 rounded text-sm font-medium hover:bg-primary-700"
              >
                <Download size={14} />
                Instalar
              </button>
            ) : (
              <div className="text-xs text-gray-500">
                Toca <span className="font-medium">Compartir</span> → <span className="font-medium">Añadir a pantalla de inicio</span>
              </div>
            )}
            
            <button
              onClick={handleDismiss}
              className="text-gray-500 hover:text-gray-700 p-1"
            >
              <X size={16} />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default InstallPrompt