
import { useState } from 'react';
import ProductCard from './ProductCard';
import ProductFilters from './ProductFilters';

const mockProducts = [
  {
    id: 1,
    name: "Premium Cotton T-Shirt",
    price: 49.99,
    originalPrice: 69.99,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400",
    category: "tops",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["white", "black", "navy"],
    rating: 4.5,
    isNew: true
  },
  {
    id: 2,
    name: "Vintage Denim Jacket",
    price: 129.99,
    image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400",
    category: "outerwear",
    sizes: ["S", "M", "L", "XL"],
    colors: ["blue", "black"],
    rating: 4.8,
    isNew: false
  },
  {
    id: 3,
    name: "Floral Summer Dress",
    price: 89.99,
    image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400",
    category: "dresses",
    sizes: ["XS", "S", "M", "L"],
    colors: ["floral", "white"],
    rating: 4.6,
    isNew: true
  },
  {
    id: 4,
    name: "Classic Chino Pants",
    price: 79.99,
    image: "https://images.unsplash.com/photo-1506629905607-52e4ac8ba5f1?w=400",
    category: "bottoms",
    sizes: ["28", "30", "32", "34", "36"],
    colors: ["khaki", "navy", "black"],
    rating: 4.3,
    isNew: false
  },
  {
    id: 5,
    name: "Wool Blend Sweater",
    price: 99.99,
    originalPrice: 139.99,
    image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=400",
    category: "tops",
    sizes: ["S", "M", "L", "XL"],
    colors: ["cream", "gray", "navy"],
    rating: 4.7,
    isNew: false
  },
  {
    id: 6,
    name: "Athletic Sneakers",
    price: 159.99,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400",
    category: "shoes",
    sizes: ["7", "8", "9", "10", "11"],
    colors: ["white", "black", "gray"],
    rating: 4.4,
    isNew: true
  }
];

const ProductGrid = () => {
  const [products] = useState(mockProducts);
  const [filteredProducts, setFilteredProducts] = useState(mockProducts);

  const handleFilterChange = (filters: any) => {
    let filtered = products;

    if (filters.category && filters.category !== 'all') {
      filtered = filtered.filter(product => product.category === filters.category);
    }

    if (filters.priceRange) {
      filtered = filtered.filter(product => 
        product.price >= filters.priceRange[0] && product.price <= filters.priceRange[1]
      );
    }

    if (filters.sortBy) {
      switch (filters.sortBy) {
        case 'price-low':
          filtered = [...filtered].sort((a, b) => a.price - b.price);
          break;
        case 'price-high':
          filtered = [...filtered].sort((a, b) => b.price - a.price);
          break;
        case 'rating':
          filtered = [...filtered].sort((a, b) => b.rating - a.rating);
          break;
        case 'newest':
          filtered = [...filtered].sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0));
          break;
      }
    }

    setFilteredProducts(filtered);
  };

  return (
    <section className="py-16 px-4 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-4 dark:text-white">Featured Products</h2>
        <p className="text-gray-600 dark:text-gray-300 text-lg max-w-2xl mx-auto">
          Discover our carefully curated collection of premium apparel
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Filters */}
        <div className="lg:w-1/4">
          <ProductFilters onFilterChange={handleFilterChange} />
        </div>

        {/* Product Grid */}
        <div className="lg:w-3/4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;
