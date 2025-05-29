
import { Button } from '@/components/ui/button';
import HeroCarousel from './HeroCarousel';

const Hero = () => {
  return (
    <section className="relative overflow-hidden">
      {/* Main Hero Section */}
      <div className="relative h-[70vh] flex items-center justify-center">
        {/* Background with gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
          <div className="absolute inset-0 bg-gradient-to-r from-coral-500/20 to-pink-500/20"></div>
        </div>
        
        {/* Content */}
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight animate-fade-in">
            Elevate Your
            <span className="block bg-gradient-to-r from-coral-500 to-pink-500 bg-clip-text text-transparent">
              Style Game
            </span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-300 animate-fade-in delay-200">
            Discover premium fashion that defines modern elegance
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in delay-400">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-coral-500 to-pink-500 hover:from-coral-600 hover:to-pink-600 text-white px-8 py-3 rounded-full transform hover:scale-105 transition-all duration-200"
            >
              Shop New Collection
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3 rounded-full transform hover:scale-105 transition-all duration-200"
            >
              Explore Trends
            </Button>
          </div>
        </div>

        {/* Floating elements for visual interest */}
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-gradient-to-br from-coral-500/10 to-pink-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-br from-purple-500/10 to-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Image Carousel Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Featured Collections
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Explore our curated selection of the latest fashion trends and timeless classics
          </p>
        </div>
        <HeroCarousel />
      </div>
    </section>
  );
};

export default Hero;
