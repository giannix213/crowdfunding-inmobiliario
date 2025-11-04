import { Project, Investment } from '../types'

export const mockProjects: Project[] = [
  {
    id: '1',
    title: 'Departamento en Lince – Remate Judicial',
    description: 'Departamento de 85m² en excelente ubicación en Lince, cerca del Parque Castilla. Propiedad en remate judicial con precio 30% por debajo del valor de mercado. Ideal para renta o reventa.',
    location: 'Lince, Lima',
    targetAmount: 280000,
    currentAmount: 168000,
    daysLeft: 15,
    imageUrl: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    type: 'remate',
    expectedReturn: 18.5,
    minInvestment: 50,
    documents: [
      { id: '1', name: 'Ficha registral', url: '#', type: 'certificate' },
      { id: '2', name: 'Tasación comercial', url: '#', type: 'report' },
      { id: '3', name: 'Contrato de fideicomiso', url: '#', type: 'contract' }
    ],
    createdAt: new Date('2024-01-15'),
    status: 'active'
  },
  {
    id: '2',
    title: 'Casa en Surco para Renta',
    description: 'Casa de 3 dormitorios en zona residencial de Santiago de Surco. Propiedad lista para generar ingresos por alquiler inmediatamente. Rentabilidad proyectada del 12% anual.',
    location: 'Santiago de Surco, Lima',
    targetAmount: 450000,
    currentAmount: 315000,
    daysLeft: 8,
    imageUrl: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    type: 'renta',
    expectedReturn: 12.0,
    minInvestment: 100,
    documents: [
      { id: '4', name: 'Título de propiedad', url: '#', type: 'certificate' },
      { id: '5', name: 'Estudio de mercado', url: '#', type: 'report' }
    ],
    createdAt: new Date('2024-01-20'),
    status: 'active'
  },
  {
    id: '3',
    title: 'Terreno Comercial en Ate',
    description: 'Terreno de 500m² en zona comercial de Ate Vitarte, ideal para desarrollo de proyecto comercial o residencial. Ubicación estratégica con alta proyección de crecimiento.',
    location: 'Ate Vitarte, Lima',
    targetAmount: 320000,
    currentAmount: 96000,
    daysLeft: 25,
    imageUrl: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    type: 'desarrollo',
    expectedReturn: 22.0,
    minInvestment: 20,
    documents: [
      { id: '6', name: 'Certificado de zonificación', url: '#', type: 'certificate' },
      { id: '7', name: 'Plano catastral', url: '#', type: 'other' }
    ],
    createdAt: new Date('2024-01-25'),
    status: 'active'
  },
  {
    id: '4',
    title: 'Oficina en San Isidro',
    description: 'Oficina de 120m² en edificio corporativo de San Isidro. Excelente oportunidad de inversión en el distrito financiero de Lima.',
    location: 'San Isidro, Lima',
    targetAmount: 680000,
    currentAmount: 680000,
    daysLeft: 0,
    imageUrl: 'https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    type: 'renta',
    expectedReturn: 14.5,
    minInvestment: 200,
    documents: [],
    createdAt: new Date('2024-01-10'),
    status: 'funded'
  }
]

export const mockInvestments: Investment[] = [
  {
    id: '1',
    userId: '1',
    projectId: '1',
    amount: 500,
    date: new Date('2024-01-20'),
    status: 'active',
    expectedReturn: 18.5
  },
  {
    id: '2',
    userId: '1',
    projectId: '2',
    amount: 1000,
    date: new Date('2024-01-22'),
    status: 'active',
    expectedReturn: 12.0
  },
  {
    id: '3',
    userId: '1',
    projectId: '4',
    amount: 2000,
    date: new Date('2024-01-15'),
    status: 'completed',
    expectedReturn: 14.5
  }
]