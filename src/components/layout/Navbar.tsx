import React, { useState } from 'react'
import { Link, NavLink } from 'react-router'
import { useCart } from '@/store/useCart'
import { useWishlist } from '@/store/useWishlist'

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { totalItems } = useCart()
  const { items: wishlistItems } = useWishlist()

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'Products', path: '/products' },
    { label: 'About', path: '/about' },
    { label: 'Contact', path: '/contact' },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white">
      <div className="section-shell flex h-16 items-center justify-between">
        <div className="flex items-center gap-8">
          <Link to="/" className="text-lg font-semibold text-gray-900">
            STORE
          </Link>

          <nav className="hidden items-center gap-6 md:flex">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `text-sm transition-colors ${
                    isActive ? 'text-gray-900 font-medium' : 'text-gray-500 hover:text-gray-900'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>
        </div>

        <div className="flex items-center gap-4">
          <Link to="/search" className="p-2 text-gray-500 hover:text-gray-900 transition-colors">
            <i className="ri-search-line text-lg"></i>
          </Link>

          <Link to="/wishlist" className="relative p-2 text-gray-500 hover:text-gray-900 transition-colors">
            <i className="ri-heart-3-line text-lg"></i>
            {wishlistItems.length > 0 && (
              <span className="absolute top-1 right-1 h-2 w-2 rounded-full bg-gray-900"></span>
            )}
          </Link>

          <Link to="/cart" className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-gray-900 border border-gray-900 hover:bg-gray-900 hover:text-white transition-colors">
            <i className="ri-shopping-cart-2-line"></i>
            <span>{totalItems()}</span>
          </Link>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-gray-500 hover:text-gray-900 transition-colors md:hidden"
            aria-label="Toggle menu"
          >
            <i className={`${mobileMenuOpen ? 'ri-close-line' : 'ri-menu-line'} text-lg`}></i>
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="border-t border-gray-200 bg-white md:hidden">
          <nav className="section-shell space-y-4 py-4">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className={({ isActive }) =>
                  `block text-sm transition-colors ${
                    isActive ? 'text-gray-900 font-medium' : 'text-gray-500 hover:text-gray-900'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}
