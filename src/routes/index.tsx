import { Routes, Route } from 'react-router'
import { MainLayout } from '@/layouts/MainLayout'
import { Home } from '@/pages/Home'
import { Products } from '@/pages/Products'
import { ProductDetails } from '@/pages/ProductDetails'
import { Cart } from '@/pages/Cart'

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<ProductDetails />} />
        <Route path="/cart" element={<Cart />} />
        
        {/* Placeholder for other routes like /wishlist, /login */}
        
        <Route path="*" element={
          <div className="flex-grow flex flex-col items-center justify-center p-8 text-center min-h-[60vh]">
            <h1 className="text-6xl font-bold text-[var(--color-primary)] mb-4">404</h1>
            <p className="text-xl text-gray-500 mb-8">Page not found</p>
            <a href="/" className="px-6 py-3 bg-[var(--color-primary)] text-white text-sm font-medium hover:bg-black transition-colors">
              Return Home
            </a>
          </div>
        } />
      </Route>
    </Routes>
  )
}
