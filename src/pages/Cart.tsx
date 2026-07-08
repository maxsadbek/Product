import React from 'react'
import { Link } from 'react-router'
import { useCart } from '@/store/useCart'
import { Button } from '@/components/ui/Button'

export const Cart: React.FC = () => {
  const { items, removeItem, updateQuantity, totalPrice } = useCart()

  if (items.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full text-center min-h-[60vh] flex flex-col items-center justify-center">
        <div className="w-24 h-24 bg-gray-50 rounded-full flex items-center justify-center mb-6">
          <i className="ri-shopping-cart-2-line text-4xl text-gray-300"></i>
        </div>
        <h2 className="text-2xl font-bold text-[var(--color-primary)] tracking-tight mb-4">Your cart is empty</h2>
        <p className="text-gray-500 mb-8">Looks like you haven't added anything to your cart yet.</p>
        <Button as="link" to="/products" size="lg" className="uppercase tracking-wide font-semibold px-8">
          Start Shopping
        </Button>
      </div>
    )
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 w-full">
      <h1 className="text-3xl font-bold text-[var(--color-primary)] tracking-tight mb-8">Shopping Cart</h1>
      
      <div className="flex flex-col lg:flex-row gap-12">
        <div className="flex-grow">
          <div className="hidden sm:grid grid-cols-12 gap-4 pb-4 border-b border-gray-200 text-sm font-semibold text-gray-500 uppercase tracking-wider">
            <div className="col-span-6">Product</div>
            <div className="col-span-3 text-center">Quantity</div>
            <div className="col-span-3 text-right">Total</div>
          </div>
          
          <div className="flex flex-col gap-6 py-6">
            {items.map((item) => (
              <div key={item.id} className="grid grid-cols-1 sm:grid-cols-12 gap-4 items-center border-b border-gray-100 pb-6 last:border-0">
                <div className="col-span-1 sm:col-span-6 flex items-center gap-4">
                  <div className="w-24 h-24 bg-gray-50 rounded-lg flex-shrink-0 border border-gray-100 p-2">
                    <img src={item.thumbnail} alt={item.title} className="w-full h-full object-contain" />
                  </div>
                  <div>
                    <Link to={`/products/${item.id}`} className="font-semibold text-[var(--color-primary)] hover:text-[var(--color-accent)] transition-colors line-clamp-2">
                      {item.title}
                    </Link>
                    <div className="text-sm text-gray-500 mt-1">${item.price.toFixed(2)}</div>
                    <button 
                      onClick={() => removeItem(item.id)}
                      className="text-sm text-gray-400 hover:text-red-500 transition-colors mt-2 flex items-center"
                    >
                      <i className="ri-delete-bin-line mr-1"></i> Remove
                    </button>
                  </div>
                </div>
                
                <div className="col-span-1 sm:col-span-3 flex justify-start sm:justify-center mt-4 sm:mt-0">
                  <div className="flex items-center border border-gray-200 rounded-lg h-10 w-28 justify-between px-2">
                    <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="text-gray-500 hover:text-[var(--color-primary)] px-1">
                      <i className="ri-subtract-line"></i>
                    </button>
                    <span className="font-medium text-sm text-[var(--color-primary)]">{item.quantity}</span>
                    <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="text-gray-500 hover:text-[var(--color-primary)] px-1">
                      <i className="ri-add-line"></i>
                    </button>
                  </div>
                </div>
                
                <div className="col-span-1 sm:col-span-3 text-left sm:text-right font-semibold text-[var(--color-primary)]">
                  ${(item.price * item.quantity).toFixed(2)}
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="w-full lg:w-96 flex-shrink-0">
          <div className="bg-gray-50 p-8 rounded-xl border border-gray-100">
            <h3 className="text-lg font-bold text-[var(--color-primary)] tracking-tight mb-6">Order Summary</h3>
            
            <div className="space-y-4 text-sm mb-6">
              <div className="flex justify-between">
                <span className="text-gray-500">Subtotal</span>
                <span className="font-medium text-[var(--color-primary)]">${totalPrice().toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Shipping</span>
                <span className="font-medium text-[var(--color-primary)]">Calculated at checkout</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Tax</span>
                <span className="font-medium text-[var(--color-primary)]">Calculated at checkout</span>
              </div>
            </div>
            
            <hr className="border-gray-200 mb-6" />
            
            <div className="flex justify-between mb-8">
              <span className="font-bold text-[var(--color-primary)]">Total</span>
              <span className="font-bold text-xl text-[var(--color-primary)]">${totalPrice().toFixed(2)}</span>
            </div>
            
            <Button size="lg" className="w-full uppercase tracking-wider font-semibold">
              Proceed to Checkout
            </Button>
            
            <div className="mt-6 text-center">
              <Link to="/products" className="text-sm font-medium text-[var(--color-primary)] hover:text-[var(--color-accent)] transition-colors">
                Continue Shopping
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
