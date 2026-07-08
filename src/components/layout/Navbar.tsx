import React from 'react'
import { Link, NavLink } from 'react-router'
import { useCart } from '@/store/useCart'
import { useWishlist } from '@/store/useWishlist'

export const Navbar: React.FC = () => {
  const { totalItems } = useCart()
  const { items: wishlistItems } = useWishlist()

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'Products', path: '/products' },
    { label: 'Categories', path: '/categories' },
  ]

  return (
    <header className="sticky top-0 z-50 w-full bg-[var(--color-background)]/90 backdrop-blur-md border-b border-gray-200/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <Link to="/" className="text-xl font-bold tracking-tight text-[var(--color-primary)] uppercase flex items-center">
             <i className="ri-box-3-fill mr-2 text-[var(--color-accent)]"></i>
             Luxe
          </Link>
          
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) => 
                  `text-sm font-medium transition-colors hover:text-[var(--color-accent)] ${
                    isActive ? 'text-[var(--color-primary)]' : 'text-gray-500'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>
        </div>

        <div className="flex items-center gap-4">
          <Link to="/search" className="p-2 text-gray-500 hover:text-[var(--color-primary)] transition-colors">
            <i className="ri-search-line text-lg"></i>
          </Link>
          
          <Link to="/wishlist" className="p-2 text-gray-500 hover:text-[var(--color-primary)] transition-colors relative">
            <i className="ri-heart-3-line text-lg"></i>
            {wishlistItems.length > 0 && (
              <span className="absolute top-1 right-1 w-2 h-2 bg-[var(--color-accent)] rounded-full"></span>
            )}
          </Link>
          
          <Link to="/cart" className="p-2 text-[var(--color-primary)] transition-colors relative flex items-center">
            <i className="ri-shopping-cart-2-line text-lg mr-1.5"></i>
            <span className="text-sm font-semibold">{totalItems()}</span>
          </Link>
        </div>
      </div>
    </header>
  )
}
