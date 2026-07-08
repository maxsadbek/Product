import axios from 'axios'
import type { ProductsResponse, Product, Category } from '@/types'

const api = axios.create({
  baseURL: 'https://fakestoreapi.com',
})

export const getProducts = async (limit = 12, skip = 0, category?: string): Promise<ProductsResponse> => {
  const url = category ? `/products/category/${category}` : '/products'
  const response = await api.get(url, { params: { limit, skip } })
  const products = Array.isArray(response.data) ? response.data : response.data.products || []
  return {
    products: products.slice(skip, skip + limit),
    total: products.length,
    skip,
    limit
  }
}

export const getProduct = async (id: number): Promise<Product> => {
  const response = await api.get(`/products/${id}`)
  return response.data
}

export const searchProducts = async (q: string, limit = 12, skip = 0): Promise<ProductsResponse> => {
  const response = await api.get('/products')
  const allProducts = response.data
  const filtered = allProducts.filter((p: Product) => 
    p.title.toLowerCase().includes(q.toLowerCase()) || 
    p.description.toLowerCase().includes(q.toLowerCase())
  )
  return {
    products: filtered.slice(skip, skip + limit),
    total: filtered.length,
    skip,
    limit
  }
}

export const getCategories = async (): Promise<Category[]> => {
  const response = await api.get('/products/categories')
  return response.data.map((cat: string) => ({
    slug: cat,
    name: cat,
    url: `/products/category/${cat}`
  }))
}
