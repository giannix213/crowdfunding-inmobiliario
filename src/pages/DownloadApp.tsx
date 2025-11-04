import { useState, useEffect } from 'react'
import { Smartphone, Download, Star, Shield, Zap } from 'lucide-react'

const DownloadApp = () => {
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null)
  const [showInstallButton, setShowInstallButton] = useState(false)

  useEffect(() => {
    const handler = (e: Event) => {
      e.preventDefault()
      setDeferredPrompt(e)
      setShowInstallButton(true)
    }

    window.addEventListener('beforeinstallprompt', handler)

    return () => window.removeEventListener('beforeinstallprompt', handler)
  }, [])

  const handleInstallClick = async () => {
    if (!deferredPrompt) return

    deferredPrompt.prompt()
    const { outcome } = await deferredPrompt.userChoice
    
    if (outcome === 'accepted') {
      setDeferredPrompt(null)
      setShowInstallButton(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Header */}
        <div className="text-center text-white mb-16">
          <div className="flex justify-center mb-6">
            <div className="bg-white/10 p-4 rounded-2xl">
              <Smartphone size={64} className="text-white" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Descarga la App de CrowdProp
          </h1>
          <p className="text-xl text-primary-100 max-w-2xl mx-auto">
            Invierte en propiedades desde tu móvil. Acceso rápido, notificaciones en tiempo real 
            y toda la funcionalidad en la palma de tu mano.
          </p>
        </div>

        {/* Install PWA Button */}
        {showInstallButton && (
          <div className="bg-white rounded-2xl p-8 mb-8 shadow-xl">
            <div className="text-center">
              <Download className="mx-auto mb-4 text-primary-600" size={48} />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                ¡Instala la App Ahora!
              </h3>
              <p className="text-gray-600 mb-6">
                Instala CrowdProp directamente en tu dispositivo para una experiencia nativa.
              </p>
              <button
                onClick={handleInstallClick}
                className="bg-primary-600 hover:bg-primary-700 text-white font-bold py-4 px-8 rounded-xl text-lg transition-colors duration-200"
              >
                Instalar App
              </button>
            </div>
          </div>
        )}

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-white">
            <Zap className="mb-4 text-gold-400" size={40} />
            <h3 className="text-xl font-semibold mb-3">Acceso Instantáneo</h3>
            <p className="text-primary-100">
              Abre la app directamente desde tu pantalla de inicio, sin necesidad de navegador.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-white">
            <Shield className="mb-4 text-gold-400" size={40} />
            <h3 className="text-xl font-semibold mb-3">Notificaciones Push</h3>
            <p className="text-primary-100">
              Recibe alertas instantáneas sobre nuevos proyectos y actualizaciones de tus inversiones.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-white">
            <Star className="mb-4 text-gold-400" size={40} />
            <h3 className="text-xl font-semibold mb-3">Funciona Offline</h3>
            <p className="text-primary-100">
              Consulta tus inversiones y proyectos guardados incluso sin conexión a internet.
            </p>
          </div>
        </div>

        {/* Coming Soon Section */}
        <div className="bg-white rounded-2xl p-8 shadow-xl">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Próximamente en Tiendas de Apps
            </h2>
            <p className="text-gray-600 mb-8">
              Estamos trabajando para llevar CrowdProp a Google Play Store y App Store. 
              Mientras tanto, puedes instalar nuestra Progressive Web App.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <div className="bg-gray-100 px-6 py-3 rounded-xl flex items-center gap-3">
                <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">▶</span>
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Google Play</div>
                  <div className="text-sm text-gray-500">Próximamente</div>
                </div>
              </div>

              <div className="bg-gray-100 px-6 py-3 rounded-xl flex items-center gap-3">
                <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">🍎</span>
                </div>
                <div>
                  <div className="font-semibold text-gray-900">App Store</div>
                  <div className="text-sm text-gray-500">Próximamente</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Instructions */}
        <div className="mt-12 bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-white">
          <h3 className="text-2xl font-bold mb-6 text-center">
            ¿Cómo instalar la App Web?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-semibold mb-3 text-gold-400">En Android (Chrome):</h4>
              <ol className="space-y-2 text-primary-100">
                <li>1. Abre CrowdProp en Chrome</li>
                <li>2. Toca el menú (⋮) → "Instalar app"</li>
                <li>3. Confirma la instalación</li>
                <li>4. ¡Listo! Encuentra el ícono en tu pantalla</li>
              </ol>
            </div>
            <div>
              <h4 className="font-semibold mb-3 text-gold-400">En iPhone (Safari):</h4>
              <ol className="space-y-2 text-primary-100">
                <li>1. Abre CrowdProp en Safari</li>
                <li>2. Toca el botón compartir (□↗)</li>
                <li>3. Selecciona "Añadir a pantalla de inicio"</li>
                <li>4. ¡Listo! Encuentra el ícono en tu pantalla</li>
              </ol>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default DownloadApp