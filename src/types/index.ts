export interface Property {
  id: string
  title: string
  price: number
  location: string
  area: number
  type: string
  images: string[]
}

export interface User {
  id: string
  name: string
  email: string
  role: string
}

export interface Inquiry {
  id: string
  propertyId: string
  userId: string
  status: string
  message: string
  createdAt: string
}
