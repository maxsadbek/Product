import axios from 'axios'
import type { ProductsResponse, Product, Category } from '@/types'

const api = axios.create({
  baseURL: 'https://dummyjson.com',
})

export const getProducts = async (limit = 12, skip = 0, category?: string): Promise<ProductsResponse> => {
  const url = category ? `/products/category/${category}` : '/products'
  const response = await api.get(url, { params: { limit, skip } })
  return response.data
}

export const getProduct = async (id: number): Promise<Product> => {
  const response = await api.get(`/products/${id}`)
  return response.data
}

export const searchProducts = async (q: string, limit = 12, skip = 0): Promise<ProductsResponse> => {
  const response = await api.get('/products/search', { params: { q, limit, skip } })
  return response.data
}

export const getCategories = async (): Promise<Category[]> => {
  const response = await api.get('/products/categories')
  return response.data
}
