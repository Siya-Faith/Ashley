import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, Bell, User, Search, MapPin } from 'lucide-react';
import Logo from '../ui/Logo';

interface HeaderProps {
  onMenuClick: () => void;
}

const Header = ({ onMenuClick }: HeaderProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Dynamic header styles based on scroll position and current page
  const headerClasses = `
    sticky top-0 z-50 w-full transition-all duration-300 
    ${isScrolled || !isHomePage 
      ? 'bg-white shadow-md py-2' 
      : 'bg-transparent py-4'}
  `;

  return (
    <header className={headerClasses}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Left: Logo and Menu button */}
          <div className="flex items-center">
            <button 
              onClick={onMenuClick}
              className="inline-flex md:hidden items-center justify-center p-2 rounded-md 
                        text-gray-700 hover:text-primary-600 hover:bg-gray-100 
                        focus:outline-none focus:ring-2 focus:ring-primary-500"
              aria-label="Open menu"
            >
              <Menu className="h-6 w-6" />
            </button>
            
            <Link to="/" className="flex-shrink-0 flex items-center ml-2 md:ml-0">
              <Logo />
              <span className="ml-2 text-xl font-semibold text-primary-800">
                CityPlan
              </span>
            </Link>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:ml-8 md:flex md:space-x-6">
              <Link 
                to="/" 
                className={`px-3 py-2 text-sm font-medium rounded-md transition
                          ${location.pathname === '/' 
                            ? 'text-primary-700 bg-primary-50' 
                            : 'text-gray-700 hover:text-primary-600 hover:bg-gray-100'}`}
              >
                Home
              </Link>
              <Link 
                to="/priorities" 
                className={`px-3 py-2 text-sm font-medium rounded-md transition
                          ${location.pathname === '/priorities' 
                            ? 'text-primary-700 bg-primary-50' 
                            : 'text-gray-700 hover:text-primary-600 hover:bg-gray-100'}`}
              >
                Priorities
              </Link>
              <Link 
                to="/issues" 
                className={`px-3 py-2 text-sm font-medium rounded-md transition
                          ${location.pathname === '/issues' 
                            ? 'text-primary-700 bg-primary-50' 
                            : 'text-gray-700 hover:text-primary-600 hover:bg-gray-100'}`}
              >
                Report Issues
              </Link>
              <Link 
                to="/feedback" 
                className={`px-3 py-2 text-sm font-medium rounded-md transition
                          ${location.pathname === '/feedback' 
                            ? 'text-primary-700 bg-primary-50' 
                            : 'text-gray-700 hover:text-primary-600 hover:bg-gray-100'}`}
              >
                Feedback
              </Link>
            </nav>
          </div>
          
          {/* Right: Search, Ward, Notifications, Profile */}
          <div className="flex items-center space-x-1 sm:space-x-3">
            <button 
              className="p-2 rounded-full text-gray-600 hover:text-primary-600 
                        hover:bg-gray-100 focus:outline-none focus:ring-2 
                        focus:ring-primary-500"
              aria-label="Search"
            >
              <Search className="h-5 w-5" />
            </button>
            
            <Link 
              to="/ward/1" 
              className="hidden sm:flex items-center p-2 rounded-full text-gray-600 
                        hover:text-primary-600 hover:bg-gray-100 focus:outline-none 
                        focus:ring-2 focus:ring-primary-500"
              aria-label="Your ward"
            >
              <MapPin className="h-5 w-5" />
            </Link>
            
            <button 
              className="p-2 rounded-full text-gray-600 hover:text-primary-600 
                        hover:bg-gray-100 focus:outline-none focus:ring-2 
                        focus:ring-primary-500 relative"
              aria-label="Notifications"
            >
              <Bell className="h-5 w-5" />
              <span className="absolute top-0 right-0 h-2 w-2 rounded-full bg-accent-500"></span>
            </button>
            
            <Link 
              to="/profile" 
              className="p-2 rounded-full text-gray-600 hover:text-primary-600 
                        hover:bg-gray-100 focus:outline-none focus:ring-2 
                        focus:ring-primary-500"
              aria-label="Your profile"
            >
              <User className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;