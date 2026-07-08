export interface Product {
  id: number
  title: string
  description: string
  price: number
  category: string
  image: string
  rating: {
    rate: number
    count: number
  }
}

export interface ProductsResponse {
  products: Product[]
  total: number
  skip: number
  limit: number
}

export interface Category {
  slug: string
  name: string
  url: string
}
