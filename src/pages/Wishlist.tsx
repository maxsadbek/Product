import React from 'react'
import { Link } from 'react-router'
import { useWishlist } from '@/store/useWishlist'
import { useCart } from '@/store/useCart'
import { ProductCard } from '@/components/product/ProductCard'
import { Button } from '@/components/ui/Button'
import toast from 'react-hot-toast'

export const Wishlist: React.FC = () => {
  const { items, removeItem, clearWishlist } = useWishlist()
  const { addItem } = useCart()

  const handleRemove = (id: number) => {
    removeItem(id)
    toast.success('Removed from wishlist')
  }

  const handleMoveAllToCart = () => {
    items.forEach(product => addItem(product))
    clearWishlist()
    toast.success('All items moved to cart')
  }

  if (items.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
        <div className="text-center">
          <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <i className="ri-heart-3-line text-4xl text-gray-300"></i>
          </div>
          <h2 className="text-2xl font-semibold text-[var(--color-primary)] mb-4">Your wishlist is empty</h2>
          <p className="text-gray-500 mb-8 max-w-md mx-auto">
            Save items you love by clicking the heart icon on any product.
          </p>
          <Link to="/products">
            <Button size="lg" className="uppercase tracking-wider font-semibold">
              Start Shopping
            </Button>
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 w-full">
      <div className="flex justify-between items-center mb-10">
        <div>
          <h1 className="text-4xl font-bold text-[var(--color-primary)] tracking-tight mb-4">Wishlist</h1>
          <p className="text-gray-500">{items.length} {items.length === 1 ? 'item' : 'items'}</p>
        </div>
        {items.length > 0 && (
          <Button 
            variant="secondary" 
            onClick={handleMoveAllToCart}
            className="uppercase tracking-wider font-semibold text-sm"
          >
            Move All to Cart
          </Button>
        )}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {items.map((product) => (
          <div key={product.id} className="relative group">
            <ProductCard product={product} />
            <button
              onClick={() => handleRemove(product.id)}
              className="absolute top-4 right-4 z-20 p-2 bg-white rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity hover:bg-red-50"
              aria-label="Remove from wishlist"
            >
              <i className="ri-delete-bin-line text-gray-500 hover:text-red-500"></i>
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}
