import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router'
import { Button } from '@/components/ui/Button'
import toast from 'react-hot-toast'

export const Register: React.FC = () => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    agreeToTerms: false,
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    if (formData.password !== formData.confirmPassword) {
      toast.error('Passwords do not match')
      return
    }
    
    if (!formData.agreeToTerms) {
      toast.error('Please agree to the terms and conditions')
      return
    }
    
    // Simulate registration
    toast.success('Account created successfully!')
    navigate('/login')
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
  }

  return (
    <div className="min-h-[calc(100vh-80px)] flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-[var(--color-primary)] tracking-tight mb-2">Create Account</h1>
          <p className="text-gray-500">Join us to start your shopping journey</p>
        </div>

        <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-[var(--color-primary)] mb-2">First Name</label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                  placeholder="John"
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-[var(--color-accent)]"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-[var(--color-primary)] mb-2">Last Name</label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                  placeholder="Doe"
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-[var(--color-accent)]"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-[var(--color-primary)] mb-2">Email Address</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="you@example.com"
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-[var(--color-accent)]"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-[var(--color-primary)] mb-2">Password</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
                placeholder="••••••••"
                minLength={8}
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-[var(--color-accent)]"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-[var(--color-primary)] mb-2">Confirm Password</label>
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
                placeholder="••••••••"
                minLength={8}
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-[var(--color-accent)]"
              />
            </div>

            <div className="flex items-start">
              <input
                type="checkbox"
                name="agreeToTerms"
                checked={formData.agreeToTerms}
                onChange={handleChange}
                required
                className="w-4 h-4 mt-1 text-[var(--color-accent)] border-gray-300 rounded focus:ring-[var(--color-accent)]"
              />
              <label className="ml-2 text-sm text-gray-500">
                I agree to the{' '}
                <a href="#" className="text-[var(--color-accent)] hover:underline">
                  Terms of Service
                </a>{' '}
                and{' '}
                <a href="#" className="text-[var(--color-accent)] hover:underline">
                  Privacy Policy
                </a>
              </label>
            </div>

            <Button type="submit" size="lg" className="w-full uppercase tracking-wider font-semibold">
              Create Account
            </Button>
          </form>

          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-200"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-4 bg-white text-gray-500">Or sign up with</span>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-4">
              <button className="flex items-center justify-center px-4 py-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                <i className="ri-google-fill text-lg mr-2"></i>
                <span className="text-sm font-medium text-gray-700">Google</span>
              </button>
              <button className="flex items-center justify-center px-4 py-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                <i className="ri-facebook-fill text-lg mr-2"></i>
                <span className="text-sm font-medium text-gray-700">Facebook</span>
              </button>
            </div>
          </div>
        </div>

        <p className="mt-8 text-center text-sm text-gray-500">
          Already have an account?{' '}
          <Link to="/login" className="font-medium text-[var(--color-accent)] hover:underline">
            Sign in
          </Link>
        </p>
      </div>
    </div>
  )
}
