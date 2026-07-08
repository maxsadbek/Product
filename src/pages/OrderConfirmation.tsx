import React from 'react'
import { Link } from 'react-router'
import { Button } from '@/components/ui/Button'

export const OrderConfirmation: React.FC = () => {
  const orderNumber = `ORD-${Math.random().toString(36).substring(2, 9).toUpperCase()}`

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
      <div className="text-center mb-12">
        <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <i className="ri-check-line text-5xl text-green-600"></i>
        </div>
        <h1 className="text-4xl font-bold text-[var(--color-primary)] tracking-tight mb-4">Order Confirmed!</h1>
        <p className="text-gray-500 text-lg">Thank you for your purchase. Your order has been successfully placed.</p>
      </div>

      <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-8 mb-8">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold text-[var(--color-primary)]">Order Details</h2>
          <span className="text-sm text-gray-500">Order #{orderNumber}</span>
        </div>

        <div className="space-y-4">
          <div className="flex justify-between py-3 border-b border-gray-100">
            <span className="text-gray-500">Order Date</span>
            <span className="text-[var(--color-primary)] font-medium">{new Date().toLocaleDateString()}</span>
          </div>
          <div className="flex justify-between py-3 border-b border-gray-100">
            <span className="text-gray-500">Estimated Delivery</span>
            <span className="text-[var(--color-primary)] font-medium">
              {new Date(Date.now() + 5 * 24 * 60 * 60 * 1000).toLocaleDateString()}
            </span>
          </div>
          <div className="flex justify-between py-3 border-b border-gray-100">
            <span className="text-gray-500">Shipping Method</span>
            <span className="text-[var(--color-primary)] font-medium">Free Standard Shipping</span>
          </div>
          <div className="flex justify-between py-3">
            <span className="text-gray-500">Payment Method</span>
            <span className="text-[var(--color-primary)] font-medium">Credit Card</span>
          </div>
        </div>
      </div>

      <div className="bg-[var(--color-primary)] rounded-xl p-8 mb-8">
        <h3 className="text-white font-semibold mb-4">What's Next?</h3>
        <div className="space-y-4 text-gray-200">
          <div className="flex items-start gap-3">
            <i className="ri-mail-line text-[var(--color-accent)] mt-1"></i>
            <p className="text-sm">You'll receive an email confirmation with your order details shortly.</p>
          </div>
          <div className="flex items-start gap-3">
            <i className="ri-truck-line text-[var(--color-accent)] mt-1"></i>
            <p className="text-sm">We'll notify you when your order ships with tracking information.</p>
          </div>
          <div className="flex items-start gap-3">
            <i className="ri-customer-service-2-line text-[var(--color-accent)] mt-1"></i>
            <p className="text-sm">Need help? Contact our support team anytime.</p>
          </div>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-4">
        <Link to="/products" className="flex-grow">
          <Button size="lg" className="w-full uppercase tracking-wider font-semibold">
            Continue Shopping
          </Button>
        </Link>
        <Link to="/contact" className="flex-grow">
          <Button variant="secondary" size="lg" className="w-full uppercase tracking-wider font-semibold">
            Contact Support
          </Button>
        </Link>
      </div>
    </div>
  )
}
