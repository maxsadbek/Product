import React from 'react'
import { useQuery } from '@tanstack/react-query'
import { Link } from 'react-router'
import { getProducts } from '@/services/api'
import { ProductCard } from '@/components/product/ProductCard'
import toast from 'react-hot-toast'

export const Home: React.FC = () => {
  const { data, isLoading } = useQuery({
    queryKey: ['featured-products'],
    queryFn: () => getProducts(8),
  })

  const features = [
    { icon: 'ri-truck-line', title: 'Fast Delivery', description: 'Express shipping on every order' },
    { icon: 'ri-shield-check-line', title: 'Secure Checkout', description: 'Protected payments with full confidence' },
    { icon: 'ri-refresh-line', title: 'Easy Returns', description: '30-day hassle-free returns' },
    { icon: 'ri-customer-service-2-line', title: 'Support 24/7', description: 'Friendly help whenever you need it' },
  ]

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative py-20 sm:py-28 lg:py-32 bg-white">
        <div className="section-shell max-w-3xl">
          <h1 className="mb-6 text-4xl font-semibold leading-tight tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
            Premium products for everyday living.
          </h1>
          <p className="mb-8 max-w-2xl text-lg leading-8 text-gray-600">
            Discover our curated collection of quality essentials designed to enhance your daily life.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link
              to="/products"
              className="inline-flex items-center justify-center rounded border border-gray-900 bg-gray-900 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-black"
            >
              Shop Collection
            </Link>
            <Link
              to="/about"
              className="inline-flex items-center justify-center rounded border border-gray-900 bg-white px-6 py-3 text-sm font-medium text-gray-900 transition-colors hover:bg-gray-50"
            >
              About Us
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="section-shell py-20 sm:py-24">
        <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">Featured Products</h2>
          </div>
          <Link to="/products" className="inline-flex items-center text-sm font-medium text-gray-900 transition-colors hover:text-gray-600">
            View all <i className="ri-arrow-right-line ml-2"></i>
          </Link>
        </div>

        {isLoading ? (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {Array.from({ length: 8 }).map((_, i) => (
              <div key={i} className="flex flex-col gap-4">
                <div className="aspect-square animate-pulse rounded bg-gray-100"></div>
                <div className="h-4 w-3/4 animate-pulse rounded bg-gray-100"></div>
                <div className="h-4 w-1/4 animate-pulse rounded bg-gray-100"></div>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {data?.products.map((product) => (
              <div key={product.id}>
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        )}
      </section>

      {/* Features Section */}
      <section className="border-y border-gray-200 bg-white py-20 sm:py-24">
        <div className="section-shell">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => (
              <div key={feature.title} className="text-center">
                <div className="mb-4 flex justify-center">
                  <i className={`${feature.icon} text-4xl text-gray-900`}></i>
                </div>
                <h3 className="mb-2 text-lg font-semibold text-gray-900">{feature.title}</h3>
                <p className="text-sm text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="section-shell py-20 sm:py-24">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div className="overflow-hidden rounded bg-gray-100">
            <img
              src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=2070&auto=format&fit=crop"
              alt="Our Story"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="max-w-xl">
            <h2 className="mb-6 text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">Quality is our priority.</h2>
            <p className="mb-8 text-lg leading-8 text-gray-600">
              We carefully select every product for its lasting quality and design. Each piece is chosen to bring value and comfort to everyday life.
            </p>
            <Link to="/about" className="inline-flex items-center text-sm font-medium text-gray-900 transition-colors hover:text-gray-600">
              Learn more <i className="ri-arrow-right-line ml-2"></i>
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="section-shell py-20 sm:py-24">
        <div className="mx-auto max-w-2xl rounded border border-gray-200 bg-white p-8 text-center sm:p-12">
          <h2 className="mb-4 text-3xl font-semibold tracking-tight text-gray-900">Stay updated.</h2>
          <p className="mb-8 text-lg leading-8 text-gray-600">
            Subscribe to receive updates on new products and special offers.
          </p>
          <form className="flex flex-col gap-3 sm:flex-row" onSubmit={(e) => { e.preventDefault(); toast.success('Subscribed successfully!') }}>
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-grow rounded border border-gray-200 px-4 py-3 text-sm text-gray-900 outline-none transition-colors focus:border-gray-900"
              required
            />
            <button
              type="submit"
              className="rounded border border-gray-900 bg-gray-900 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-black"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  )
}