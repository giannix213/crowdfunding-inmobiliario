import { useState } from 'react'
import { X, DollarSign } from 'lucide-react'
import { Project } from '../types'

interface InvestmentModalProps {
  project: Project
  isOpen: boolean
  onClose: () => void
}

const InvestmentModalSimple = ({ project, isOpen, onClose }: InvestmentModalProps) => {
  const [amount, setAmount] = useState('')

  if (!isOpen) return null

  const handleInvest = () => {
    if (amount && parseFloat(amount) >= project.minInvestment) {
      alert(`¡Inversión de S/${amount} realizada exitosamente!`)
      onClose()
    } else {
      alert(`El monto mínimo es S/${project.minInvestment}`)
    }
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl max-w-md w-full p-6">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-2xl font-bold text-gray-900">Invertir en Proyecto</h3>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
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

        <div className="flex gap-3">
          <button
            onClick={onClose}
            className="flex-1 py-3 px-4 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50"
          >
            Cancelar
          </button>
          <button
            onClick={handleInvest}
            className="flex-1 py-3 px-4 bg-primary-600 text-white rounded-lg hover:bg-primary-700"
          >
            Invertir
          </button>
        </div>
      </div>
    </div>
  )
}

export default InvestmentModalSimple