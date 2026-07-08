import React, { useState, useEffect } from 'react'
import { useQuery } from '@tanstack/react-query'
import { searchProducts } from '@/services/api'
import { ProductCard } from '@/components/product/ProductCard'
import { useNavigate, useSearchParams } from 'react-router'

export const Search: React.FC = () => {
  const [query, setQuery] = useState('')
  const [searchTerm, setSearchTerm] = useState('')
  const [searchParams] = useSearchParams()
  const navigate = useNavigate()

  // Initialize search from URL params
  useEffect(() => {
    const urlQuery = searchParams.get('q')
    if (urlQuery) {
      setQuery(urlQuery)
      setSearchTerm(urlQuery)
    }
  }, [searchParams])

  const { data, isLoading } = useQuery({
    queryKey: ['search', searchTerm],
    queryFn: () => searchProducts(searchTerm),
    enabled: searchTerm.length > 0,
  })

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (query.trim()) {
      setSearchTerm(query)
      navigate(`/search?q=${encodeURIComponent(query)}`)
    }
  }

  const handleProductClick = (id: number) => {
    navigate(`/products/${id}`)
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 w-full">
      <div className="mb-10">
        <h1 className="text-4xl font-bold text-[var(--color-primary)] tracking-tight mb-4">Search</h1>
        <p className="text-gray-500 max-w-2xl">Find your perfect product from our collection.</p>
      </div>

      {/* Search Bar */}
      <div className="mb-12">
        <form onSubmit={handleSearch} className="relative max-w-2xl">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search for products..."
            className="w-full px-6 py-4 pr-14 border border-gray-200 rounded-xl focus:outline-none focus:border-[var(--color-accent)] transition-colors text-lg"
          />
          <button
            type="submit"
            className="absolute right-2 top-1/2 -translate-y-1/2 p-3 bg-[var(--color-primary)] text-white rounded-lg hover:bg-[var(--color-accent)] transition-colors"
          >
            <i className="ri-search-line text-xl"></i>
          </button>
        </form>
      </div>

      {/* Search Results */}
      {searchTerm && (
        <div>
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-semibold text-[var(--color-primary)]">
              {data?.products.length || 0} results for "{searchTerm}"
            </h2>
          </div>

          {isLoading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {Array.from({ length: 8 }).map((_, i) => (
                <div key={i} className="flex flex-col gap-4">
                  <div className="aspect-square bg-gray-100 animate-pulse rounded-xl"></div>
                  <div className="h-4 bg-gray-100 animate-pulse rounded w-3/4"></div>
                  <div className="h-4 bg-gray-100 animate-pulse rounded w-1/4"></div>
                </div>
              ))}
            </div>
          ) : data?.products.length === 0 ? (
            <div className="text-center py-20 border border-gray-100 rounded-xl bg-white">
              <i className="ri-search-2-line text-4xl text-gray-300 mb-4 inline-block"></i>
              <h3 className="text-lg font-medium text-[var(--color-primary)] mb-2">No results found</h3>
              <p className="text-gray-500 mb-6">Try different keywords or browse our products.</p>
              <button
                onClick={() => navigate('/products')}
                className="text-[var(--color-accent)] hover:underline font-medium"
              >
                Browse All Products
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {data?.products.map((product) => (
                <div key={product.id} onClick={() => handleProductClick(product.id)} className="cursor-pointer">
                  <ProductCard product={product} />
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {!searchTerm && (
        <div className="text-center py-20">
          <i className="ri-search-line text-4xl text-gray-300 mb-4 inline-block"></i>
          <h3 className="text-lg font-medium text-[var(--color-primary)] mb-2">Start your search</h3>
          <p className="text-gray-500">Enter a keyword above to find products.</p>
        </div>
      )}
    </div>
  )
}
