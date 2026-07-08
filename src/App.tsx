import { Navbar } from "./components/layout/Navbar";
import { Sidebar } from "./components/layout/Sidebar";
import { Hero } from "./components/sections/Hero";
import { ProductCard } from "./components/ui/ProductCard";

const MOCK_PRODUCTS = [
  {
    id: 1,
    title: "Premium Cotton T-Shirt",
    price: 45.00,
    rating: 4.8,
    reviews: 124,
    category: "Clothing",
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 2,
    title: "Minimalist Leather Watch",
    price: 185.00,
    rating: 4.9,
    reviews: 89,
    category: "Accessories",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 3,
    title: "Classic Canvas Sneakers",
    price: 85.00,
    rating: 4.7,
    reviews: 256,
    category: "Shoes",
    image: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 4,
    title: "Wool Blend Overcoat",
    price: 295.00,
    rating: 4.9,
    reviews: 42,
    category: "Clothing",
    image: "https://images.unsplash.com/photo-1539533113208-f6df8cc8b543?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 5,
    title: "Leather Crossbody Bag",
    price: 145.00,
    rating: 4.6,
    reviews: 78,
    category: "Accessories",
    image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 6,
    title: "Wireless Over-Ear Headphones",
    price: 250.00,
    rating: 4.8,
    reviews: 312,
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=800"
  }
];

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-background font-sans text-primary">
      <Navbar />
      
      <main className="flex-grow">
        <Hero />
        
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="flex items-baseline justify-between border-b border-gray-200 pb-6 mb-8">
            <h2 className="text-2xl font-bold tracking-tight text-primary">New Arrivals</h2>
            <div className="flex items-center">
              <div className="text-sm text-gray-500 hidden sm:block">Showing 1-6 of 24 results</div>
            </div>
          </div>
          
          <div className="flex gap-8">
            <Sidebar />
            
            <div className="flex-1">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {MOCK_PRODUCTS.map((product) => (
                  <ProductCard key={product.id} {...product} />
                ))}
              </div>
              
              <div className="mt-12 flex justify-center">
                <button className="px-8 py-3 border border-gray-200 rounded-md text-sm font-medium hover:bg-gray-50 transition-colors">
                  Load More
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <footer className="bg-white border-t border-gray-100 py-12 mt-auto">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} STORE. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;