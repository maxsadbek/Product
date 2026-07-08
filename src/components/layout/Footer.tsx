import React from 'react'
import { Link } from 'react-router'

export const Footer: React.FC = () => {
  return (
    <footer className="mt-auto border-t border-gray-200 bg-white">
      <div className="section-shell py-12">
        <div className="grid gap-8 md:grid-cols-3 lg:grid-cols-4">
          <div>
            <Link to="/" className="mb-4 inline-block text-lg font-semibold tracking-wide text-gray-900">
              STORE
            </Link>
            <p className="mb-5 max-w-sm text-sm leading-relaxed text-gray-600">
              Clean, minimal design for modern shopping.
            </p>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold text-gray-900">Shop</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><Link to="/products" className="transition-colors hover:text-gray-900">All Products</Link></li>
              <li><Link to="/wishlist" className="transition-colors hover:text-gray-900">Wishlist</Link></li>
              <li><Link to="/cart" className="transition-colors hover:text-gray-900">Cart</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold text-gray-900">Company</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><Link to="/about" className="transition-colors hover:text-gray-900">About</Link></li>
              <li><Link to="/contact" className="transition-colors hover:text-gray-900">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold text-gray-900">Legal</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><a href="#" className="transition-colors hover:text-gray-900">Privacy</a></li>
              <li><a href="#" className="transition-colors hover:text-gray-900">Terms</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-200 pt-6">
          <p className="text-center text-sm text-gray-600">© {new Date().getFullYear()} Store. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

