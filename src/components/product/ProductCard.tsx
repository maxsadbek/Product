import React from 'react'
import { Link } from 'react-router'
import type { Product } from '@/types'
import { useCart } from '@/store/useCart'
import { useWishlist } from '@/store/useWishlist'
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
      className="group flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-white transition-all duration-200 hover:border-gray-400"
    >
      <div className="relative flex aspect-square items-center justify-center overflow-hidden bg-gray-50 p-4">
        <img
          src={product.image}
          alt={product.title}
          className="h-full w-full object-contain"
          loading="lazy"
        />
        <button
          onClick={handleToggleWishlist}
          className="absolute right-2 top-2 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-white text-gray-400 transition-colors hover:text-red-500"
          aria-label="Toggle wishlist"
        >
          <i className={`text-sm ${inWishlist ? 'ri-heart-3-fill text-red-500' : 'ri-heart-3-line'}`}></i>
        </button>
      </div>

      <div className="flex flex-grow flex-col p-3">
        <h3 className="line-clamp-2 text-xs font-medium text-gray-900">
          {product.title}
        </h3>

        <div className="mt-auto flex items-center justify-between pt-2">
          <span className="text-sm font-semibold text-gray-900">
            ${product.price.toFixed(2)}
          </span>
          <div className="flex items-center gap-1 text-xs text-gray-500">
            <i className="ri-star-fill text-gray-400"></i>
            <span>{product.rating.rate.toFixed(1)}</span>
          </div>
        </div>

        <button
          onClick={handleAddToCart}
          className="mt-2 w-full rounded border border-gray-900 bg-white px-2 py-1.5 text-xs font-medium text-gray-900 transition-all hover:bg-gray-900 hover:text-white"
        >
          Add to Cart
        </button>
      </div>
    </Link>
  )
}
