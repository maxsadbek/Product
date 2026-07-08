import { Star } from "lucide-react";

interface ProductCardProps {
  id: string | number;
  title: string;
  price: number;
  rating: number;
  reviews: number;
  image: string;
  category: string;
}

export function ProductCard({ title, price, rating, reviews, image, category }: ProductCardProps) {
  return (
    <div className="group flex flex-col bg-white rounded-lg border border-gray-100 overflow-hidden hover:border-gray-200 transition-colors">
      <div className="relative aspect-square bg-gray-50 overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <button className="absolute bottom-4 left-4 right-4 bg-primary text-white py-2.5 rounded-md font-medium text-sm opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 shadow-sm hover:bg-primary/90">
          Add to Cart
        </button>
      </div>
      <div className="p-4 flex flex-col flex-grow">
        <div className="text-xs text-gray-500 mb-1">{category}</div>
        <h3 className="font-medium text-primary text-sm mb-2 line-clamp-1">{title}</h3>
        <div className="flex items-center gap-1 mb-3">
          <Star className="w-3.5 h-3.5 fill-accent text-accent" />
          <span className="text-xs font-medium text-primary">{rating}</span>
          <span className="text-xs text-gray-400">({reviews})</span>
        </div>
        <div className="mt-auto">
          <span className="font-semibold text-primary">${price.toFixed(2)}</span>
        </div>
      </div>
    </div>
  );
}
