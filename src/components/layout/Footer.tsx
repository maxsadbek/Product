import React from 'react'
import { Link } from 'react-router'

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-gray-200 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
             <Link to="/" className="text-xl font-bold tracking-tight text-[var(--color-primary)] uppercase flex items-center mb-4">
               <i className="ri-box-3-fill mr-2 text-[var(--color-accent)]"></i>
               Luxe
            </Link>
            <p className="text-sm text-gray-500 max-w-xs text-balance">
              Premium e-commerce platform offering the finest selection of products with uncompromising quality.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold text-[var(--color-primary)] mb-4">Shop</h4>
            <ul className="space-y-3">
              <li><Link to="/products" className="text-sm text-gray-500 hover:text-[var(--color-primary)] transition-colors">All Products</Link></li>
              <li><Link to="/categories" className="text-sm text-gray-500 hover:text-[var(--color-primary)] transition-colors">Categories</Link></li>
              <li><Link to="/products?sort=new" className="text-sm text-gray-500 hover:text-[var(--color-primary)] transition-colors">New Arrivals</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-[var(--color-primary)] mb-4">Support</h4>
            <ul className="space-y-3">
              <li><Link to="/faq" className="text-sm text-gray-500 hover:text-[var(--color-primary)] transition-colors">FAQ</Link></li>
              <li><Link to="/shipping" className="text-sm text-gray-500 hover:text-[var(--color-primary)] transition-colors">Shipping & Returns</Link></li>
              <li><Link to="/contact" className="text-sm text-gray-500 hover:text-[var(--color-primary)] transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-[var(--color-primary)] mb-4">Newsletter</h4>
            <p className="text-sm text-gray-500 mb-4">Subscribe to receive updates, access to exclusive deals, and more.</p>
            <form className="flex" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-grow px-3 py-2 text-sm border border-gray-200 focus:outline-none focus:border-[var(--color-primary)]"
              />
              <button type="submit" className="bg-[var(--color-primary)] text-white px-4 py-2 text-sm font-medium hover:bg-black transition-colors">
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <div className="border-t border-gray-100 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-xs text-gray-400">© {new Date().getFullYear()} Luxe. All rights reserved.</p>
          <div className="flex items-center gap-4 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-[var(--color-primary)]"><i className="ri-instagram-line text-lg"></i></a>
            <a href="#" className="text-gray-400 hover:text-[var(--color-primary)]"><i className="ri-twitter-x-line text-lg"></i></a>
            <a href="#" className="text-gray-400 hover:text-[var(--color-primary)]"><i className="ri-facebook-circle-line text-lg"></i></a>
          </div>
        </div>
      </div>
    </footer>
  )
}
