import React, { useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import { getProducts, getCategories } from '@/services/api'
import { ProductCard } from '@/components/product/ProductCard'

export const Products: React.FC = () => {
  const [page, setPage] = useState(1)
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [sortBy, setSortBy] = useState('featured')
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 1000])
  const limit = 12
  const skip = (page - 1) * limit

  const { data: productsData, isLoading, isError } = useQuery({
    queryKey: ['products', page, selectedCategory],
    queryFn: () => getProducts(limit, skip, selectedCategory || undefined),
    placeholderData: (previousData) => previousData,
  })

  const { data: categories } = useQuery({
    queryKey: ['categories'],
    queryFn: getCategories,
  })

  // Sort products
  const sortedProducts = React.useMemo(() => {
    if (!productsData?.products) return []
    
    let sorted = [...productsData.products]
    
    switch (sortBy) {
      case 'price-asc':
        sorted.sort((a, b) => a.price - b.price)
        break
      case 'price-desc':
        sorted.sort((a, b) => b.price - a.price)
        break
      case 'rating':
        sorted.sort((a, b) => b.rating.rate - a.rating.rate)
        break
      case 'newest':
        sorted.sort((a, b) => b.id - a.id)
        break
      default:
        break
    }
    
    // Filter by price range
    if (priceRange[1] < 1000) {
      sorted = sorted.filter(p => p.price >= priceRange[0] && p.price <= priceRange[1])
    }
    
    return sorted
  }, [productsData?.products, sortBy, priceRange])

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 w-full">
      <div className="mb-10">
        <h1 className="text-4xl font-bold text-[var(--color-primary)] tracking-tight mb-4">All Products</h1>
        <p className="text-gray-500 max-w-2xl">Browse our complete collection of premium items.</p>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Sidebar Filters */}
        <aside className="w-full lg:w-64 flex-shrink-0">
          <div className="sticky top-24 space-y-8 border border-gray-100 p-6 rounded-xl bg-white shadow-sm">
            <div>
              <h3 className="text-sm font-semibold text-[var(--color-primary)] uppercase tracking-wider mb-4">Categories</h3>
              <ul className="space-y-3">
                <li>
                  <button 
                    onClick={() => setSelectedCategory(null)}
                    className={`text-sm transition-colors text-left w-full ${selectedCategory === null ? 'text-[var(--color-accent)] font-medium' : 'text-gray-500 hover:text-[var(--color-primary)]'}`}
                  >
                    All Products
                  </button>
                </li>
                {categories?.map((cat) => (
                  <li key={cat.slug}>
                    <button 
                      onClick={() => setSelectedCategory(cat.slug)}
                      className={`text-sm transition-colors text-left w-full capitalize ${selectedCategory === cat.slug ? 'text-[var(--color-accent)] font-medium' : 'text-gray-500 hover:text-[var(--color-primary)]'}`}
                    >
                      {cat.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            <hr className="border-gray-100" />
            <div>
              <h3 className="text-sm font-semibold text-[var(--color-primary)] uppercase tracking-wider mb-4">Sort By</h3>
              <select 
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full border-gray-200 border text-sm p-2 bg-white text-[var(--color-primary)] focus:outline-none focus:border-[var(--color-primary)]"
              >
                <option value="featured">Featured</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="rating">Top Rated</option>
                <option value="newest">Newest</option>
              </select>
            </div>
            <hr className="border-gray-100" />
            <div>
              <h3 className="text-sm font-semibold text-[var(--color-primary)] uppercase tracking-wider mb-4">Price Range</h3>
              <div className="space-y-3">
                <input
                  type="range"
                  min="0"
                  max="1000"
                  value={priceRange[1]}
                  onChange={(e) => setPriceRange([0, Number(e.target.value)])}
                  className="w-full accent-[var(--color-accent)]"
                />
                <div className="flex justify-between text-sm text-gray-500">
                  <span>${priceRange[0]}</span>
                  <span>${priceRange[1]}</span>
                </div>
              </div>
            </div>
          </div>
        </aside>

        {/* Product Grid */}
        <div className="flex-grow">
          {isLoading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6">
              {Array.from({ length: 12 }).map((_, i) => (
                <div key={i} className="flex flex-col gap-4">
                  <div className="aspect-square bg-gray-100 animate-pulse rounded-xl"></div>
                  <div className="h-4 bg-gray-100 animate-pulse rounded w-3/4"></div>
                  <div className="h-4 bg-gray-100 animate-pulse rounded w-1/4"></div>
                </div>
              ))}
            </div>
          ) : isError ? (
            <div className="text-center py-20">
              <p className="text-red-500">Failed to load products. Please try again later.</p>
            </div>
          ) : sortedProducts.length === 0 ? (
            <div className="text-center py-20 border border-gray-100 rounded-xl bg-white">
              <i className="ri-inbox-line text-4xl text-gray-300 mb-4 inline-block"></i>
              <h3 className="text-lg font-medium text-[var(--color-primary)] mb-2">No products found</h3>
              <p className="text-gray-500">Try adjusting your filters or search terms.</p>
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 mb-12">
                {sortedProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
              
              {/* Pagination */}
              {productsData && productsData.total > limit && (
                <div className="flex justify-center items-center gap-2">
                  <button 
                    onClick={() => setPage(p => Math.max(1, p - 1))}
                    disabled={page === 1}
                    className="p-2 border border-gray-200 rounded disabled:opacity-50 text-[var(--color-primary)] hover:bg-gray-50 transition-colors"
                  >
                    <i className="ri-arrow-left-s-line"></i>
                  </button>
                  <span className="text-sm font-medium text-gray-500 px-4">
                    Page {page} of {Math.ceil(productsData.total / limit)}
                  </span>
                  <button 
                    onClick={() => setPage(p => p + 1)}
                    disabled={page >= Math.ceil(productsData.total / limit)}
                    className="p-2 border border-gray-200 rounded disabled:opacity-50 text-[var(--color-primary)] hover:bg-gray-50 transition-colors"
                  >
                    <i className="ri-arrow-right-s-line"></i>
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  )
}
