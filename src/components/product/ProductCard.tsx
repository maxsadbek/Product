import React from 'react'
import { Link } from 'react-router'
import type { Product } from '@/types'
import { useCart } from '@/store/useCart'
import { useWishlist } from '@/store/useWishlist'
import { Button } from '@/components/ui/Button'
import toast from 'react-hot-toast'

interface ProductCardProps {
  product: Product
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addItem } = useCart()
  const { addItem: addWishlist, removeItem: removeWishlist, isInWishlist } = useWishlist()
  
  const inWishlist = isInWishlist(product.id)

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault()
    addItem(product)
    toast.success('Added to cart')
  }

  const handleToggleWishlist = (e: React.MouseEvent) => {
    e.preventDefault()
    if (inWishlist) {
      removeWishlist(product.id)
      toast.success('Removed from wishlist')
    } else {
      addWishlist(product)
      toast.success('Added to wishlist')
    }
  }

  return (
    <Link 
      to={`/products/${product.id}`}
      className="group relative flex flex-col bg-white rounded-xl border border-gray-100 shadow-[0_2px_8px_rgba(0,0,0,0.04)] transition-all duration-250 hover:border-gray-200 hover:shadow-[0_8px_24px_rgba(0,0,0,0.08)] overflow-hidden"
    >
      <div className="relative aspect-square overflow-hidden bg-gray-50 flex items-center justify-center p-4">
        <img 
          src={product.thumbnail} 
          alt={product.title}
          className="object-contain w-full h-full"
          loading="lazy"
        />
        <button
          onClick={handleToggleWishlist}
          className="absolute top-3 right-3 z-10 p-2 rounded-full bg-white shadow-sm transition-opacity opacity-0 group-hover:opacity-100 focus:opacity-100 hover:bg-gray-50 flex items-center justify-center text-[var(--color-primary)]"
          aria-label="Toggle wishlist"
        >
          <i className={`text-lg ${inWishlist ? 'ri-heart-3-fill text-red-500' : 'ri-heart-3-line'}`}></i>
        </button>
      </div>
      
      <div className="flex flex-col p-4 flex-grow">
        <div className="flex justify-between items-start mb-2 gap-2">
          <h3 className="font-medium text-[var(--color-primary)] text-sm line-clamp-2 leading-tight">
            {product.title}
          </h3>
          <span className="font-semibold text-[var(--color-primary)] whitespace-nowrap">
            ${product.price.toFixed(2)}
          </span>
        </div>
        
        <div className="flex items-center text-xs text-gray-500 mb-4 mt-auto">
          <div className="flex items-center">
            <i className="ri-star-fill text-[var(--color-accent)] mr-1"></i>
            <span>{product.rating.toFixed(1)}</span>
          </div>
          <span className="mx-2">•</span>
          <span>{product.brand || product.category}</span>
        </div>

        <Button 
          variant="secondary" 
          size="sm" 
          className="w-full text-xs font-medium uppercase tracking-wider"
          onClick={handleAddToCart}
        >
          Add to Cart
        </Button>
      </div>
    </Link>
  )
}
