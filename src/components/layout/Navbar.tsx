import React, { useState } from 'react'
import { Search, ShoppingCart, User, Heart } from "lucide-react";
import { Link, useNavigate } from 'react-router'
import { useCart } from '@/store/useCart'
import { useWishlist } from '@/store/useWishlist'

export function Navbar() {
  const navigate = useNavigate()
  const [searchQuery, setSearchQuery] = useState('')
  const { totalItems } = useCart()
  const { items: wishlistItems } = useWishlist()
  const cartCount = totalItems()
  const wishlistCount = wishlistItems.length

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery)}`)
      setSearchQuery('')
    }
  }

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-gray-200 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-8">
            <Link to="/" className="text-xl font-bold tracking-tight text-primary">
              STORE<span className="text-accent">.</span>
            </Link>
            <div className="hidden md:flex gap-6">
              <Link to="/products" className="text-sm font-medium text-gray-600 hover:text-primary transition-colors">All Products</Link>
              <a href="/products?category=clothing" className="text-sm font-medium text-gray-600 hover:text-primary transition-colors">Men</a>
              <a href="/products?category=women" className="text-sm font-medium text-gray-600 hover:text-primary transition-colors">Women</a>
              <a href="/products?category=electronics" className="text-sm font-medium text-gray-600 hover:text-primary transition-colors">Electronics</a>
            </div>
          </div>

          <div className="flex items-center gap-6">
            <form onSubmit={handleSearch} className="hidden md:flex relative group">
              <input
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-64 rounded-full border border-gray-300 bg-gray-50 px-4 py-2 pl-10 text-sm focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent transition-all"
              />
              <button type="submit" className="absolute left-3 top-2.5 text-gray-400 group-focus-within:text-accent hover:text-accent transition-colors">
                <Search className="h-4 w-4" />
              </button>
            </form>

            <Link to="/login" className="text-gray-600 hover:text-primary transition-colors">
              <User className="h-5 w-5" />
            </Link>
            <Link to="/wishlist" className="text-gray-600 hover:text-primary transition-colors relative group">
              <Heart className="h-5 w-5" />
              {wishlistCount > 0 && (
                <span className="absolute -top-1.5 -right-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-[10px] font-bold text-white">
                  {wishlistCount}
                </span>
              )}
            </Link>
            <Link to="/cart" className="text-gray-600 hover:text-primary transition-colors relative group">
              <ShoppingCart className="h-5 w-5" />
              {cartCount > 0 && (
                <span className="absolute -top-1.5 -right-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-accent text-[10px] font-bold text-white">
                  {cartCount}
                </span>
              )}
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
