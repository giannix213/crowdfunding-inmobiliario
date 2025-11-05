import { Project, Investment } from '../types'

export const mockProjects: Project[] = [
  {
    id: '1',
    title: 'Remate Judicial Trujillo - Oficina Comercial',
    description: 'Oficina de 47.82m² en cuarto piso de edificio comercial en Trujillo. Remate judicial con precio base S/ 24,866. Excelente oportunidad de inversión con potencial de revalorización del 45%.',
    location: 'Trujillo, La Libertad',
    targetAmount: 35000,
    currentAmount: 21000,
    daysLeft: 12,
    imageUrl: '/prop1.png',
    type: 'remate',
    expectedReturn: 45.2,
    minInvestment: 500,
    documents: [
      { id: '1', name: 'Ficha registral SUNARP', url: '#', type: 'certificate' },
      { id: '2', name: 'Resolución judicial', url: '#', type: 'contract' },
      { id: '3', name: 'Tasación pericial', url: '#', type: 'report' }
    ],
    createdAt: new Date('2024-11-01'),
    status: 'active'
  },
  {
    id: '2',
    title: 'Casa Huánuco - Remate Judicial',
    description: 'Inmueble residencial en Huánuco, distrito del Cusco. Precio base S/ 67,045. Propiedad con potencial para renta vacacional o residencial. Zona en crecimiento urbano.',
    location: 'Huánuco, Cusco',
    targetAmount: 95000,
    currentAmount: 47500,
    daysLeft: 18,
    imageUrl: '/prop2.png',
    type: 'remate',
    expectedReturn: 38.5,
    minInvestment: 800,
    documents: [
      { id: '4', name: 'Certificado registral', url: '#', type: 'certificate' },
      { id: '5', name: 'Plano de ubicación', url: '#', type: 'other' },
      { id: '6', name: 'Estudio de títulos', url: '#', type: 'report' }
    ],
    createdAt: new Date('2024-10-28'),
    status: 'active'
  },
  {
    id: '3',
    title: 'Terreno Pichanaqui - Desarrollo Agroindustrial',
    description: 'Lote de 3 sectores en zona urbana informal de Pichanaqui, Chanchamayo, Junín. Precio base S/ 55,850. Ideal para desarrollo agroindustrial o ecoturismo.',
    location: 'Pichanaqui, Chanchamayo, Junín',
    targetAmount: 78000,
    currentAmount: 23400,
    daysLeft: 25,
    imageUrl: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    type: 'desarrollo',
    expectedReturn: 52.8,
    minInvestment: 600,
    documents: [
      { id: '7', name: 'Partida electrónica', url: '#', type: 'certificate' },
      { id: '8', name: 'Certificado de zonificación', url: '#', type: 'certificate' },
      { id: '9', name: 'Estudio de suelos', url: '#', type: 'report' }
    ],
    createdAt: new Date('2024-10-25'),
    status: 'active'
  },
  {
    id: '4',
    title: 'Casa Carabayllo - Renta Residencial',
    description: 'Propiedad residencial en Los Álamos de Carabayllo. Valor S/ 57,000. Casa lista para generar ingresos por alquiler. Zona residencial consolidada.',
    location: 'Carabayllo, Lima Norte',
    targetAmount: 80000,
    currentAmount: 64000,
    daysLeft: 5,
    imageUrl: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    type: 'renta',
    expectedReturn: 15.2,
    minInvestment: 700,
    documents: [
      { id: '10', name: 'Título de propiedad', url: '#', type: 'certificate' },
      { id: '11', name: 'Certificado de habitabilidad', url: '#', type: 'certificate' }
    ],
    createdAt: new Date('2024-10-20'),
    status: 'active'
  },
  {
    id: '5',
    title: 'Casa Pilco Marca - Proyecto Completado',
    description: 'Casa de campo en Pilco Marca, Huánuco. Proyecto de inversión completado exitosamente. Rentabilidad obtenida: 28.5% en 8 meses.',
    location: 'Pilco Marca, Huánuco',
    targetAmount: 42000,
    currentAmount: 42000,
    daysLeft: 0,
    imageUrl: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    type: 'renta',
    expectedReturn: 28.5,
    minInvestment: 500,
    documents: [],
    createdAt: new Date('2024-03-15'),
    status: 'completed'
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