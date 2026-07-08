import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router'
import { useCart } from '@/store/useCart'
import { Button } from '@/components/ui/Button'
import toast from 'react-hot-toast'

export const Checkout: React.FC = () => {
  const navigate = useNavigate()
  const { items, totalPrice, clearCart } = useCart()
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    // Shipping
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    country: 'United States',
    // Payment
    cardNumber: '',
    cardName: '',
    expiryDate: '',
    cvv: '',
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (step === 1) {
      setStep(2)
    } else {
      // Process order
      clearCart()
      toast.success('Order placed successfully!')
      navigate('/order-confirmation')
    }
  }

  if (items.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
        <div className="text-center">
          <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <i className="ri-shopping-cart-line text-4xl text-gray-300"></i>
          </div>
          <h2 className="text-2xl font-semibold text-[var(--color-primary)] mb-4">Your cart is empty</h2>
          <p className="text-gray-500 mb-8">Add some items to your cart before checkout.</p>
          <Link to="/products">
            <Button size="lg" className="uppercase tracking-wider font-semibold">
              Continue Shopping
            </Button>
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 w-full">
      <div className="mb-10">
        <h1 className="text-4xl font-bold text-[var(--color-primary)] tracking-tight mb-4">Checkout</h1>
        <div className="flex items-center gap-4">
          <div className={`flex items-center gap-2 ${step >= 1 ? 'text-[var(--color-accent)]' : 'text-gray-300'}`}>
            <div className={`w-8 h-8 rounded-full flex items-center justify-center ${step >= 1 ? 'bg-[var(--color-accent)] text-white' : 'bg-gray-200'}`}>
              1
            </div>
            <span className="font-medium">Shipping</span>
          </div>
          <div className="flex-1 h-0.5 bg-gray-200"></div>
          <div className={`flex items-center gap-2 ${step >= 2 ? 'text-[var(--color-accent)]' : 'text-gray-300'}`}>
            <div className={`w-8 h-8 rounded-full flex items-center justify-center ${step >= 2 ? 'bg-[var(--color-accent)] text-white' : 'bg-gray-200'}`}>
              2
            </div>
            <span className="font-medium">Payment</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Form */}
        <div className="lg:col-span-2">
          <form onSubmit={handleSubmit} className="bg-white rounded-xl border border-gray-100 shadow-sm p-8">
            {step === 1 ? (
              <>
                <h2 className="text-2xl font-semibold text-[var(--color-primary)] mb-6">Shipping Information</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-[var(--color-primary)] mb-2">First Name</label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-[var(--color-accent)]"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[var(--color-primary)] mb-2">Last Name</label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-[var(--color-accent)]"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[var(--color-primary)] mb-2">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-[var(--color-accent)]"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[var(--color-primary)] mb-2">Phone</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-[var(--color-accent)]"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-[var(--color-primary)] mb-2">Address</label>
                    <input
                      type="text"
                      name="address"
                      value={formData.address}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-[var(--color-accent)]"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[var(--color-primary)] mb-2">City</label>
                    <input
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-[var(--color-accent)]"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[var(--color-primary)] mb-2">State</label>
                    <input
                      type="text"
                      name="state"
                      value={formData.state}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-[var(--color-accent)]"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[var(--color-primary)] mb-2">ZIP Code</label>
                    <input
                      type="text"
                      name="zipCode"
                      value={formData.zipCode}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-[var(--color-accent)]"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[var(--color-primary)] mb-2">Country</label>
                    <select
                      name="country"
                      value={formData.country}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-[var(--color-accent)] bg-white"
                    >
                      <option value="United States">United States</option>
                      <option value="Canada">Canada</option>
                      <option value="United Kingdom">United Kingdom</option>
                    </select>
                  </div>
                </div>
              </>
            ) : (
              <>
                <h2 className="text-2xl font-semibold text-[var(--color-primary)] mb-6">Payment Information</h2>
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-[var(--color-primary)] mb-2">Card Number</label>
                    <input
                      type="text"
                      name="cardNumber"
                      value={formData.cardNumber}
                      onChange={handleInputChange}
                      placeholder="1234 5678 9012 3456"
                      required
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-[var(--color-accent)]"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[var(--color-primary)] mb-2">Cardholder Name</label>
                    <input
                      type="text"
                      name="cardName"
                      value={formData.cardName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-[var(--color-accent)]"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-[var(--color-primary)] mb-2">Expiry Date</label>
                      <input
                        type="text"
                        name="expiryDate"
                        value={formData.expiryDate}
                        onChange={handleInputChange}
                        placeholder="MM/YY"
                        required
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-[var(--color-accent)]"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[var(--color-primary)] mb-2">CVV</label>
                      <input
                        type="text"
                        name="cvv"
                        value={formData.cvv}
                        onChange={handleInputChange}
                        placeholder="123"
                        required
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-[var(--color-accent)]"
                      />
                    </div>
                  </div>
                </div>
              </>
            )}

            <div className="flex gap-4 mt-8">
              {step === 2 && (
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="px-6 py-3 border border-gray-200 rounded-lg text-[var(--color-primary)] font-medium hover:bg-gray-50 transition-colors"
                >
                  Back
                </button>
              )}
              <Button type="submit" size="lg" className="flex-grow uppercase tracking-wider font-semibold">
                {step === 1 ? 'Continue to Payment' : 'Place Order'}
              </Button>
            </div>
          </form>
        </div>

        {/* Order Summary */}
        <div>
          <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6 sticky top-24">
            <h2 className="text-xl font-semibold text-[var(--color-primary)] mb-6">Order Summary</h2>
            <div className="space-y-4 mb-6">
              {items.map((item) => (
                <div key={item.id} className="flex gap-4">
                  <div className="w-20 h-20 bg-gray-50 rounded-lg overflow-hidden flex-shrink-0">
                    <img src={item.image} alt={item.title} className="w-full h-full object-contain" />
                  </div>
                  <div className="flex-grow">
                    <h3 className="font-medium text-[var(--color-primary)] text-sm line-clamp-2">{item.title}</h3>
                    <p className="text-gray-500 text-sm">Qty: {item.quantity}</p>
                    <p className="text-[var(--color-primary)] font-semibold">${(item.price * item.quantity).toFixed(2)}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="border-t border-gray-100 pt-4 space-y-3">
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">Subtotal</span>
                <span className="text-[var(--color-primary)]">${totalPrice().toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">Shipping</span>
                <span className="text-[var(--color-primary)]">Free</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">Tax</span>
                <span className="text-[var(--color-primary)]">${(totalPrice() * 0.08).toFixed(2)}</span>
              </div>
              <div className="border-t border-gray-100 pt-3 flex justify-between">
                <span className="font-semibold text-[var(--color-primary)]">Total</span>
                <span className="font-bold text-xl text-[var(--color-primary)]%">${(totalPrice() * 1.08).toFixed(2)}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
