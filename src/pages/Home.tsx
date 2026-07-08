import React from 'react'
import { useQuery } from '@tanstack/react-query'
import { Link } from 'react-router'
import { getProducts } from '@/services/api'
import { ProductCard } from '@/components/product/ProductCard'

export const Home: React.FC = () => {
  const { data, isLoading } = useQuery({
    queryKey: ['featured-products'],
    queryFn: () => getProducts(8),
  })

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[80vh] min-h-[600px] flex items-center justify-center overflow-hidden bg-[var(--color-primary)]">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/40 z-10"></div>
          <img 
            src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2070&auto=format&fit=crop" 
            alt="Hero background" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-20 text-center px-4 max-w-4xl mx-auto flex flex-col items-center">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6 leading-tight">
            Elevate Your <br /> Everyday
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-10 max-w-2xl text-balance">
            Discover a curated collection of premium essentials designed for the modern lifestyle. Uncompromising quality meets timeless design.
          </p>
          <Link 
            to="/products"
            className="inline-flex items-center justify-center bg-white text-[var(--color-primary)] px-8 py-4 text-sm font-semibold tracking-wide uppercase transition-colors hover:bg-gray-100"
          >
            Shop Collection
          </Link>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl font-bold text-[var(--color-primary)] mb-4 tracking-tight">Featured Curations</h2>
            <p className="text-gray-500 max-w-md">Exceptional pieces selected for their outstanding craftsmanship and design.</p>
          </div>
          <Link to="/products" className="hidden sm:inline-flex items-center text-sm font-medium text-[var(--color-primary)] hover:text-[var(--color-accent)] transition-colors group">
            View All <i className="ri-arrow-right-line ml-1 group-hover:translate-x-1 transition-transform"></i>
          </Link>
        </div>

        {isLoading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {Array.from({ length: 8 }).map((_, i) => (
              <div key={i} className="flex flex-col gap-4">
                <div className="aspect-square bg-gray-100 animate-pulse rounded-xl"></div>
                <div className="h-4 bg-gray-100 animate-pulse rounded w-3/4"></div>
                <div className="h-4 bg-gray-100 animate-pulse rounded w-1/4"></div>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {data?.products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </section>
      
      {/* Editorial Section */}
      <section className="bg-white py-24 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="aspect-[4/5] bg-gray-100 overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=2070&auto=format&fit=crop" 
              alt="Editorial" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex flex-col justify-center max-w-lg">
            <span className="text-[var(--color-accent)] font-medium tracking-widest uppercase text-sm mb-4">The Process</span>
            <h2 className="text-4xl font-bold text-[var(--color-primary)] tracking-tight mb-6 leading-tight">
              Craftsmanship <br /> Without Compromise
            </h2>
            <p className="text-gray-500 mb-8 leading-relaxed">
              Every item in our collection is a testament to the dedication of skilled artisans. We believe in creating pieces that not only look beautiful but are built to last, transcending seasonal trends.
            </p>
            <Link 
              to="/about"
              className="inline-flex items-center text-sm font-medium text-[var(--color-primary)] hover:text-[var(--color-accent)] transition-colors group self-start"
            >
              Read Our Story <i className="ri-arrow-right-line ml-1 group-hover:translate-x-1 transition-transform"></i>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
