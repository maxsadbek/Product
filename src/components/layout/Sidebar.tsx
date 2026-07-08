export function Sidebar() {
  const categories = [
    { name: "All Products", count: 124 },
    { name: "Clothing", count: 45 },
    { name: "Shoes", count: 32 },
    { name: "Accessories", count: 28 },
    { name: "Electronics", count: 19 },
  ];

  return (
    <div className="w-64 flex-shrink-0 hidden lg:block">
      <div className="sticky top-24">
        <h3 className="font-semibold text-primary mb-4 text-sm uppercase tracking-wider">Categories</h3>
        <ul className="space-y-3">
          {categories.map((category) => (
            <li key={category.name}>
              <a 
                href="#" 
                className="flex items-center justify-between text-sm text-gray-600 hover:text-accent transition-colors group"
              >
                <span>{category.name}</span>
                <span className="text-xs bg-gray-100 text-gray-500 py-0.5 px-2 rounded-full group-hover:bg-accent/10 group-hover:text-accent transition-colors">
                  {category.count}
                </span>
              </a>
            </li>
          ))}
        </ul>

        <div className="mt-10">
          <h3 className="font-semibold text-primary mb-4 text-sm uppercase tracking-wider">Price Range</h3>
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <input type="checkbox" id="price-1" className="rounded border-gray-300 text-accent focus:ring-accent" />
              <label htmlFor="price-1" className="text-sm text-gray-600">Under $50</label>
            </div>
            <div className="flex items-center gap-2">
              <input type="checkbox" id="price-2" className="rounded border-gray-300 text-accent focus:ring-accent" />
              <label htmlFor="price-2" className="text-sm text-gray-600">$50 - $100</label>
            </div>
            <div className="flex items-center gap-2">
              <input type="checkbox" id="price-3" className="rounded border-gray-300 text-accent focus:ring-accent" />
              <label htmlFor="price-3" className="text-sm text-gray-600">$100 - $200</label>
            </div>
            <div className="flex items-center gap-2">
              <input type="checkbox" id="price-4" className="rounded border-gray-300 text-accent focus:ring-accent" />
              <label htmlFor="price-4" className="text-sm text-gray-600">Over $200</label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
