import React from 'react'
import { useQuery } from '@tanstack/react-query'
import { getProduct } from '@/services/api'
import { useCart } from '@/store/useCart'
import { useWishlist } from '@/store/useWishlist'
import { Button } from '@/components/ui/Button'
import toast from 'react-hot-toast'

interface QuickViewModalProps {
  productId: number
  onClose: () => void
}

export const QuickViewModal: React.FC<QuickViewModalProps> = ({ productId, onClose }) => {
  const [quantity, setQuantity] = React.useState(1)
  const { data: product, isLoading } = useQuery({
    queryKey: ['product', productId],
    queryFn: () => getProduct(productId),
    enabled: !!productId,
  })

  const { addItem } = useCart()
  const { addItem: addWishlist, removeItem: removeWishlist, isInWishlist } = useWishlist()

  const inWishlist = product ? isInWishlist(product.id) : false

  const handleAddToCart = () => {
    if (product) {
      addItem(product, quantity)
      toast.success('Added to cart')
      onClose()
    }
  }

  const handleToggleWishlist = () => {
    if (product) {
      if (inWishlist) {
        removeWishlist(product.id)
        toast.success('Removed from wishlist')
      } else {
        addWishlist(product)
        toast.success('Added to wishlist')
      }
    }
  }

  if (!productId) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm" onClick={onClose}>
      <div 
        className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-gray-500 hover:text-[var(--color-primary)] transition-colors z-10"
          aria-label="Close"
        >
          <i className="ri-close-line text-2xl"></i>
        </button>

        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
            <div className="aspect-square bg-gray-100 rounded-xl animate-pulse"></div>
            <div className="flex flex-col gap-4">
              <div className="h-8 bg-gray-100 animate-pulse rounded w-3/4"></div>
              <div className="h-4 bg-gray-100 animate-pulse rounded w-1/2"></div>
              <div className="h-32 bg-gray-100 animate-pulse rounded"></div>
            </div>
          </div>
        ) : product ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
            {/* Product Image */}
            <div className="aspect-square bg-gray-50 rounded-xl overflow-hidden flex items-center justify-center border border-gray-100">
              <img src={product.image} alt={product.title} className="w-full h-full object-contain max-w-md" />
            </div>

            {/* Product Info */}
            <div className="flex flex-col">
              <div className="mb-2 text-[var(--color-accent)] font-medium text-sm tracking-wider uppercase">
                {product.category}
              </div>
              <h2 className="text-2xl font-bold text-[var(--color-primary)] tracking-tight mb-4">
                {product.title}
              </h2>
              
              <div className="flex items-center mb-4">
                <div className="flex items-center text-[var(--color-accent)]">
                  {[...Array(5)].map((_, i) => (
                    <i key={i} className={i < Math.floor(product.rating.rate) ? "ri-star-fill" : "ri-star-line"}></i>
                  ))}
                </div>
                <span className="ml-2 text-sm text-gray-500">({product.rating.rate})</span>
              </div>

              <div className="text-3xl font-semibold text-[var(--color-primary)] mb-6">
                ${product.price.toFixed(2)}
              </div>

              <p className="text-gray-600 mb-8 leading-relaxed line-clamp-4">
                {product.description}
              </p>

              <div className="flex items-center gap-4 mb-6">
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
              </div>

              <button 
                onClick={handleToggleWishlist}
                className={`flex items-center justify-center gap-2 h-12 w-full border rounded-lg transition-colors ${inWishlist ? 'border-[var(--color-accent)] text-[var(--color-accent)] bg-[var(--color-accent)]/10' : 'border-gray-200 text-gray-500 hover:border-gray-300 hover:text-[var(--color-primary)]'}`}
              >
                <i className={inWishlist ? "ri-heart-3-fill text-xl" : "ri-heart-3-line text-xl"}></i>
                <span className="font-medium">{inWishlist ? 'Remove from Wishlist' : 'Add to Wishlist'}</span>
              </button>

              <div className="mt-6 pt-6 border-t border-gray-100">
                <a 
                  href={`/products/${product.id}`}
                  onClick={onClose}
                  className="inline-flex items-center text-sm font-medium text-[var(--color-primary)] hover:text-[var(--color-accent)] transition-colors group"
                >
                  View Full Details <i className="ri-arrow-right-line ml-1 group-hover:translate-x-1 transition-transform"></i>
                </a>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  )
}
