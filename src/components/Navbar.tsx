
import { useState } from 'react';
import { Search, User, Heart, ShoppingBag, Moon, Sun, Menu, X, LogOut, UserRound } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { useCart } from '@/contexts/CartContext';
import { useWishlist } from '@/contexts/WishlistContext';
import { useToast } from '@/hooks/use-toast';

interface NavbarProps {
  isDarkMode: boolean;
  setIsDarkMode: (value: boolean) => void;
}

const Navbar = ({ isDarkMode, setIsDarkMode }: NavbarProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const { getTotalItems, toggleCart } = useCart();
  const { getTotalItems: getWishlistItems, toggleWishlist } = useWishlist();
  const { toast } = useToast();
  const navigate = useNavigate();

  // Check if user is logged in
  const userData = localStorage.getItem('user');
  const user = userData ? JSON.parse(userData) : null;

  const handleLogout = () => {
    localStorage.removeItem('user');
    toast({
      title: "Logged out",
      description: "You have been successfully logged out.",
    });
    navigate('/');
  };

  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map(n => n[0])
      .join('')
      .toUpperCase();
  };

  return (
    <nav className={`sticky top-0 z-50 backdrop-blur-md border-b transition-all duration-300 ${
      isDarkMode 
        ? 'bg-gray-900/90 border-gray-700 text-white' 
        : 'bg-white/90 border-gray-200 text-gray-900'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-coral-500 to-pink-500 bg-clip-text text-transparent">
                ModernWear
              </h1>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="hover:text-coral-500 transition-colors duration-200">New Arrivals</a>
            <a href="#" className="hover:text-coral-500 transition-colors duration-200">Women</a>
            <a href="#" className="hover:text-coral-500 transition-colors duration-200">Men</a>
            <a href="#" className="hover:text-coral-500 transition-colors duration-200">Accessories</a>
            <a href="#" className="hover:text-coral-500 transition-colors duration-200">Sale</a>
          </div>

          {/* Search Bar */}
          <div className="hidden md:flex flex-1 max-w-xs mx-8">
            <div className="relative w-full">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-4 w-4 text-gray-400" />
              </div>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search products..."
                className={`w-full pl-10 pr-4 py-2 rounded-full border transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-coral-500 ${
                  isDarkMode 
                    ? 'bg-gray-800 border-gray-600 text-white placeholder-gray-400' 
                    : 'bg-gray-100 border-gray-300 text-gray-900 placeholder-gray-500'
                }`}
              />
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsDarkMode(!isDarkMode)}
              className="hidden sm:flex"
            >
              {isDarkMode ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </Button>
            
            {/* User Profile Dropdown or Login Button */}
            {user ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="sm" className="hidden sm:flex">
                    <Avatar className="h-6 w-6">
                      <AvatarImage src="" />
                      <AvatarFallback className="text-xs">
                        {getInitials(user.name)}
                      </AvatarFallback>
                    </Avatar>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56">
                  <div className="px-2 py-1.5">
                    <p className="text-sm font-medium">{user.name}</p>
                    <p className="text-xs text-gray-500">{user.email}</p>
                  </div>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={() => navigate('/profile')}>
                    <UserRound className="mr-2 h-4 w-4" />
                    Profile
                  </DropdownMenuItem>
                  {user.role === 'admin' && (
                    <DropdownMenuItem onClick={() => navigate('/admin')}>
                      <User className="mr-2 h-4 w-4" />
                      Admin Dashboard
                    </DropdownMenuItem>
                  )}
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={handleLogout}>
                    <LogOut className="mr-2 h-4 w-4" />
                    Logout
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Link to="/login">
                <Button variant="ghost" size="sm" className="hidden sm:flex">
                  <User className="h-4 w-4" />
                </Button>
              </Link>
            )}
            
            <Button variant="ghost" size="sm" className="hidden sm:flex relative" onClick={toggleWishlist}>
              <Heart className="h-4 w-4" />
              {getWishlistItems() > 0 && (
                <span className="absolute -top-1 -right-1 bg-coral-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                  {getWishlistItems()}
                </span>
              )}
            </Button>
            
            <Button variant="ghost" size="sm" className="relative" onClick={toggleCart}>
              <ShoppingBag className="h-4 w-4" />
              {getTotalItems() > 0 && (
                <span className="absolute -top-1 -right-1 bg-coral-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                  {getTotalItems()}
                </span>
              )}
            </Button>

            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden"
            >
              {isMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-200 dark:border-gray-700">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="#" className="block px-3 py-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md">New Arrivals</a>
              <a href="#" className="block px-3 py-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md">Women</a>
              <a href="#" className="block px-3 py-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md">Men</a>
              <a href="#" className="block px-3 py-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md">Accessories</a>
              <a href="#" className="block px-3 py-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md">Sale</a>
              {user ? (
                <>
                  <Link to="/profile" className="block px-3 py-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md">Profile</Link>
                  {user.role === 'admin' && (
                    <Link to="/admin" className="block px-3 py-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md">Admin Dashboard</Link>
                  )}
                  <button onClick={handleLogout} className="block w-full text-left px-3 py-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md">Logout</button>
                </>
              ) : (
                <>
                  <Link to="/login" className="block px-3 py-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md">Login</Link>
                  <Link to="/signup" className="block px-3 py-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md">Sign Up</Link>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
