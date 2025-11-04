export interface User {
  id: string
  email: string
  name: string
  createdAt: Date
  totalInvested: number
  activeInvestments: number
}

export interface Project {
  id: string
  title: string
  description: string
  location: string
  targetAmount: number
  currentAmount: number
  daysLeft: number
  imageUrl: string
  type: 'remate' | 'desarrollo' | 'renta'
  expectedReturn: number
  minInvestment: number
  documents: Document[]
  createdAt: Date
  status: 'active' | 'funded' | 'completed'
}

export interface Investment {
  id: string
  userId: string
  projectId: string
  amount: number
  date: Date
  status: 'active' | 'completed' | 'cancelled'
  expectedReturn: number
}

export interface Document {
  id: string
  name: string
  url: string
  type: 'contract' | 'certificate' | 'report' | 'other'
}