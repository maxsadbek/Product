import React, { useState } from 'react'
import { useParams, Link } from 'react-router'
import { useQuery } from '@tanstack/react-query'
import { getProduct } from '@/services/api'
import { useCart } from '@/store/useCart'
import { useWishlist } from '@/store/useWishlist'
import { Button } from '@/components/ui/Button'
import toast from 'react-hot-toast'

export const ProductDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>()
  const [quantity, setQuantity] = useState(1)
  const [activeImage, setActiveImage] = useState(0)

  const { data: product, isLoading, isError } = useQuery({
    queryKey: ['product', id],
    queryFn: () => getProduct(Number(id)),
    enabled: !!id,
  })

  const { addItem } = useCart()
  const { addItem: addWishlist, removeItem: removeWishlist, isInWishlist } = useWishlist()

  if (isLoading) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 w-full animate-pulse">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="aspect-square bg-gray-100 rounded-xl"></div>
          <div className="flex flex-col gap-6 pt-8">
            <div className="h-8 bg-gray-100 rounded w-1/2"></div>
            <div className="h-6 bg-gray-100 rounded w-1/4"></div>
            <div className="h-32 bg-gray-100 rounded w-full mt-8"></div>
          </div>
        </div>
      </div>
    )
  }

  if (isError || !product) {
    return (
      <div className="text-center py-32">
        <h2 className="text-2xl font-semibold text-[var(--color-primary)] mb-4">Product not found</h2>
        <Link to="/products" className="text-[var(--color-accent)] hover:underline">
          Return to products
        </Link>
      </div>
    )
  }

  const inWishlist = isInWishlist(product.id)

  const handleAddToCart = () => {
    addItem(product, quantity)
    toast.success('Added to cart')
  }

  const handleToggleWishlist = () => {
    if (inWishlist) {
      removeWishlist(product.id)
      toast.success('Removed from wishlist')
    } else {
      addWishlist(product)
      toast.success('Added to wishlist')
    }
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 w-full">
      {/* Breadcrumbs */}
      <nav className="flex text-sm text-gray-500 mb-8">
        <Link to="/" className="hover:text-[var(--color-primary)]">Home</Link>
        <span className="mx-2">/</span>
        <Link to="/products" className="hover:text-[var(--color-primary)]">Products</Link>
        <span className="mx-2">/</span>
        <span className="text-[var(--color-primary)]">{product.title}</span>
      </nav>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
        {/* Product Images */}
        <div className="flex flex-col-reverse md:flex-row gap-4">
          <div className="flex md:flex-col gap-4 overflow-x-auto md:overflow-y-auto max-h-[600px] pb-2 md:pb-0 hide-scrollbar flex-shrink-0">
            {product.images.map((img, idx) => (
              <button 
                key={idx} 
                onClick={() => setActiveImage(idx)}
                className={`w-20 h-20 bg-gray-50 rounded-lg overflow-hidden border-2 transition-colors ${activeImage === idx ? 'border-[var(--color-primary)]' : 'border-transparent hover:border-gray-200'}`}
              >
                <img src={img} alt={`${product.title} ${idx}`} className="w-full h-full object-contain" />
              </button>
            ))}
          </div>
          <div className="flex-grow aspect-square bg-gray-50 rounded-xl overflow-hidden flex items-center justify-center border border-gray-100">
            <img src={product.images[activeImage] || product.thumbnail} alt={product.title} className="w-full h-full object-contain" />
          </div>
        </div>

        {/* Product Info */}
        <div className="flex flex-col pt-2">
          <div className="mb-2 text-[var(--color-accent)] font-medium text-sm tracking-wider uppercase">
            {product.brand || product.category}
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-[var(--color-primary)] tracking-tight mb-4">
            {product.title}
          </h1>
          
          <div className="flex items-center mb-6">
            <div className="flex items-center text-[var(--color-accent)]">
              {[...Array(5)].map((_, i) => (
                <i key={i} className={i < Math.floor(product.rating) ? "ri-star-fill" : "ri-star-line"}></i>
              ))}
            </div>
            <span className="ml-2 text-sm text-gray-500">({product.rating} Rating)</span>
          </div>

          <div className="text-3xl font-semibold text-[var(--color-primary)] mb-8">
            ${product.price.toFixed(2)}
          </div>

          <p className="text-gray-600 mb-10 leading-relaxed">
            {product.description}
          </p>

          <hr className="border-gray-100 mb-8" />

          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <div className="flex items-center border border-gray-200 rounded-lg h-12 w-32 justify-between px-3">
              <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="text-gray-500 hover:text-[var(--color-primary)] px-2">
                <i className="ri-subtract-line"></i>
              </button>
              <span className="font-medium text-[var(--color-primary)]">{quantity}</span>
              <button onClick={() => setQuantity(quantity + 1)} className="text-gray-500 hover:text-[var(--color-primary)] px-2">
                <i className="ri-add-line"></i>
              </button>
            </div>
            <Button 
              size="lg" 
              className="flex-grow uppercase tracking-wider font-semibold"
              onClick={handleAddToCart}
            >
              Add to Cart
            </Button>
            <button 
              onClick={handleToggleWishlist}
              className={`h-12 w-12 flex items-center justify-center border rounded-lg transition-colors ${inWishlist ? 'border-[var(--color-accent)] text-[var(--color-accent)] bg-[var(--color-accent)]/10' : 'border-gray-200 text-gray-500 hover:border-gray-300 hover:text-[var(--color-primary)]'}`}
              aria-label="Wishlist"
            >
              <i className={inWishlist ? "ri-heart-3-fill text-xl" : "ri-heart-3-line text-xl"}></i>
            </button>
          </div>

          <div className="text-sm text-gray-500">
            <p className="mb-2"><span className="text-[var(--color-primary)] font-medium">Availability:</span> {product.stock > 0 ? `${product.stock} in stock` : 'Out of stock'}</p>
            <p><span className="text-[var(--color-primary)] font-medium">Shipping:</span> Usually ships within 24 hours.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
