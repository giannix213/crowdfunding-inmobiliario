import { useState } from 'react'
import { X, DollarSign, TrendingUp, AlertCircle } from 'lucide-react'
import { Project } from '../types'

interface InvestmentModalProps {
  project: Project
  isOpen: boolean
  onClose: () => void
}

const InvestmentModal = ({ project, isOpen, onClose }: InvestmentModalProps) => {
  const [amount, setAmount] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  if (!isOpen) return null

  const handleInvest = async () => {
    setIsLoading(true)
    // Simular inversión
    await new Promise(resolve => setTimeout(resolve, 2000))
    setIsLoading(false)
    alert(`¡Inversión de S/${amount} realizada exitosamente!`)
    onClose()
  }

  const expectedReturn = parseFloat(amount) * (project.expectedReturn / 100)

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl max-w-md w-full p-6">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-2xl font-bold text-gray-900">Invertir en Proyecto</h3>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600"
          >
            <X size={24} />
          </button>
        </div>

        <div className="mb-6">
          <h4 className="font-semibold text-gray-900 mb-2">{project.title}</h4>
          <p className="text-gray-600 text-sm">{project.location}</p>
        </div>

        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Monto a invertir (S/)
          </label>
          <div className="relative">
            <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder={`Mínimo S/${project.minInvestment}`}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              min={project.minInvestment}
            />
          </div>
        </div>

        {amount && parseFloat(amount) >= project.minInvestment && (
          <div className="bg-primary-50 rounded-lg p-4 mb-6">
            <div className="flex items-center gap-2 mb-2">
              <TrendingUp className="text-primary-600" size={20} />
              <span className="font-semibold text-primary-900">Proyección de retorno</span>
            </div>
            <div className="text-sm text-primary-700">
              <p>Inversión: S/{amount}</p>
              <p>Retorno esperado ({project.expectedReturn}%): S/{expectedReturn.toFixed(2)}</p>
              <p className="font-semibold">Total estimado: S/{(parseFloat(amount) + expectedReturn).toFixed(2)}</p>
            </div>
          </div>
        )}

        <div className="bg-yellow-50 rounded-lg p-4 mb-6">
          <div className="flex items-start gap-2">
            <AlertCircle className="text-yellow-600 mt-0.5" size={16} />
            <div className="text-sm text-yellow-800">
              <p className="font-semibold mb-1">Importante:</p>
              <p>Las inversiones inmobiliarias conllevan riesgos. Los retornos proyectados no están garantizados.</p>
            </div>
          </div>
        </div>

        <div className="flex gap-3">
          <button
            onClick={onClose}
            className="flex-1 py-3 px-4 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
          >
            Cancelar
          </button>
          <button
            onClick={handleInvest}
            disabled={!amount || parseFloat(amount) < project.minInvestment || isLoading}
            className="flex-1 py-3 px-4 bg-primary-600 text-white rounded-lg hover:bg-primary-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            {isLoading ? 'Procesando...' : 'Invertir'}
          </button>
        </div>
      </div>
    </div>
  )
}

export default InvestmentModal