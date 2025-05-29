
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';

interface FilterProps {
  onFilterChange: (filters: any) => void;
}

const ProductFilters = ({ onFilterChange }: FilterProps) => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [priceRange, setPriceRange] = useState([0, 200]);
  const [sortBy, setSortBy] = useState('');

  const categories = [
    { id: 'all', name: 'All Products' },
    { id: 'tops', name: 'Tops' },
    { id: 'bottoms', name: 'Bottoms' },
    { id: 'dresses', name: 'Dresses' },
    { id: 'outerwear', name: 'Outerwear' },
    { id: 'shoes', name: 'Shoes' },
  ];

  const sortOptions = [
    { id: '', name: 'Default' },
    { id: 'price-low', name: 'Price: Low to High' },
    { id: 'price-high', name: 'Price: High to Low' },
    { id: 'rating', name: 'Highest Rated' },
    { id: 'newest', name: 'Newest First' },
  ];

  const handleFilterUpdate = (newFilters: any) => {
    const filters = {
      category: selectedCategory,
      priceRange,
      sortBy,
      ...newFilters
    };
    onFilterChange(filters);
  };

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    handleFilterUpdate({ category });
  };

  const handlePriceChange = (value: number[]) => {
    setPriceRange(value);
    handleFilterUpdate({ priceRange: value });
  };

  const handleSortChange = (sort: string) => {
    setSortBy(sort);
    handleFilterUpdate({ sortBy: sort });
  };

  const clearFilters = () => {
    setSelectedCategory('all');
    setPriceRange([0, 200]);
    setSortBy('');
    onFilterChange({
      category: 'all',
      priceRange: [0, 200],
      sortBy: ''
    });
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg sticky top-24">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold dark:text-white">Filters</h3>
        <Button
          variant="ghost"
          size="sm"
          onClick={clearFilters}
          className="text-coral-500 hover:text-coral-600"
        >
          Clear All
        </Button>
      </div>

      {/* Categories */}
      <div className="mb-6">
        <h4 className="font-medium mb-3 dark:text-white">Category</h4>
        <div className="space-y-2">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => handleCategoryChange(category.id)}
              className={`w-full text-left px-3 py-2 rounded-lg transition-all duration-200 ${
                selectedCategory === category.id
                  ? 'bg-coral-500 text-white'
                  : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>
      </div>

      {/* Price Range */}
      <div className="mb-6">
        <h4 className="font-medium mb-3 dark:text-white">Price Range</h4>
        <div className="px-2">
          <Slider
            value={priceRange}
            onValueChange={handlePriceChange}
            max={200}
            min={0}
            step={10}
            className="mb-3"
          />
          <div className="flex justify-between text-sm text-gray-600 dark:text-gray-400">
            <span>${priceRange[0]}</span>
            <span>${priceRange[1]}</span>
          </div>
        </div>
      </div>

      {/* Sort By */}
      <div className="mb-6">
        <h4 className="font-medium mb-3 dark:text-white">Sort By</h4>
        <select
          value={sortBy}
          onChange={(e) => handleSortChange(e.target.value)}
          className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-coral-500"
        >
          {sortOptions.map((option) => (
            <option key={option.id} value={option.id}>
              {option.name}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default ProductFilters;
