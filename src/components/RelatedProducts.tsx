
import ProductCard from './ProductCard';

interface RelatedProductsProps {
  currentProductId: number;
  category: string;
}

// Mock related products
const mockRelatedProducts = [
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

const RelatedProducts = ({ currentProductId, category }: RelatedProductsProps) => {
  // Filter out current product and get related products
  const relatedProducts = mockRelatedProducts
    .filter(product => product.id !== currentProductId)
    .slice(0, 4);

  return (
    <section className="mt-16">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
        You May Also Like
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {relatedProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default RelatedProducts;
