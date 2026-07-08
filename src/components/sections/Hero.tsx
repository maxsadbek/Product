import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <div className="relative bg-white overflow-hidden border-b border-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-16 md:py-24 lg:py-32 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="max-w-xl">
            <span className="inline-block py-1 px-3 rounded-full bg-blue-50 text-accent text-sm font-medium mb-6">
              New Collection 2026
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary leading-tight mb-6 tracking-tight">
              Essentials for the <br />
              <span className="text-accent">modern</span> minimalist.
            </h1>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Discover our latest collection of premium essentials. Designed with purpose, crafted with quality materials, and built to last.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="inline-flex items-center justify-center px-6 py-3.5 bg-primary text-white rounded-md font-medium hover:bg-primary/90 transition-colors shadow-sm">
                Shop Collection
                <ArrowRight className="ml-2 h-4 w-4" />
              </button>
              <button className="inline-flex items-center justify-center px-6 py-3.5 bg-white text-primary border border-gray-200 rounded-md font-medium hover:bg-gray-50 transition-colors">
                View Lookbook
              </button>
            </div>
          </div>
          
          <div className="relative aspect-[4/3] lg:aspect-square bg-gray-50 rounded-2xl overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1491553895911-0055eca6402d?auto=format&fit=crop&q=80&w=1200" 
              alt="Hero Showcase" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
