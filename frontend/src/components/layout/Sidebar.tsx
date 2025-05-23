import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  X, Home, Map, CheckSquare, AlertTriangle, 
  MessageSquare, User, Settings, HelpCircle, LogOut 
} from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar = ({ isOpen, onClose }: SidebarProps) => {
  const location = useLocation();
  const [activeItem, setActiveItem] = useState('/');
  
  // Update active item when location changes
  useEffect(() => {
    setActiveItem(location.pathname);
  }, [location]);
  
  // Close sidebar when clicking outside on mobile
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const sidebar = document.getElementById('sidebar');
      if (isOpen && sidebar && !sidebar.contains(event.target as Node)) {
        onClose();
      }
    };
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onClose]);

  // Prevent body scroll when sidebar is open on mobile
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const menuItems = [
    { path: '/', label: 'Home', icon: <Home className="h-5 w-5" /> },
    { path: '/ward/1', label: 'My Ward', icon: <Map className="h-5 w-5" /> },
    { path: '/priorities', label: 'Priorities', icon: <CheckSquare className="h-5 w-5" /> },
    { path: '/issues', label: 'Report Issues', icon: <AlertTriangle className="h-5 w-5" /> },
    { path: '/feedback', label: 'Feedback', icon: <MessageSquare className="h-5 w-5" /> },
    { path: '/profile', label: 'Profile', icon: <User className="h-5 w-5" /> }
  ];

  const secondaryItems = [
    { path: '/settings', label: 'Settings', icon: <Settings className="h-5 w-5" /> },
    { path: '/help', label: 'Help & Support', icon: <HelpCircle className="h-5 w-5" /> }
  ];

  return (
    <>
      {/* Mobile overlay */}
      <div 
        className={`fixed inset-0 bg-gray-900 bg-opacity-50 z-40 md:hidden 
                    transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={onClose}
      />
      
      {/* Sidebar */}
      <aside 
        id="sidebar"
        className={`fixed md:sticky top-0 left-0 z-50 md:z-0 h-full w-64 bg-white shadow-lg
                    transform transition-transform duration-300 ease-in-out
                    ${isOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}`}
      >
        <div className="h-full flex flex-col">
          {/* Sidebar header with close button */}
          <div className="px-4 py-4 border-b border-gray-200 flex items-center justify-between">
            <h2 className="text-xl font-bold text-primary-800">CityPlan</h2>
            <button 
              onClick={onClose}
              className="md:hidden p-2 rounded-md text-gray-500 hover:text-gray-700 
                        hover:bg-gray-100 focus:outline-none focus:ring-2 
                        focus:ring-primary-500"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
          
          {/* Main navigation */}
          <nav className="flex-1 px-2 py-4 overflow-y-auto">
            <ul className="space-y-1">
              {menuItems.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className={`group flex items-center px-2 py-2 text-sm font-medium rounded-md
                              transition-colors duration-150 ${
                                activeItem === item.path
                                  ? 'bg-primary-100 text-primary-700'
                                  : 'text-gray-700 hover:bg-gray-100 hover:text-primary-600'
                              }`}
                    onClick={() => {
                      setActiveItem(item.path);
                      onClose();
                    }}
                  >
                    <span className={`mr-3 ${
                      activeItem === item.path
                        ? 'text-primary-600'
                        : 'text-gray-500 group-hover:text-primary-500'
                    }`}>
                      {item.icon}
                    </span>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            
            <div className="mt-8">
              <h3 className="px-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                Support
              </h3>
              <ul className="mt-2 space-y-1">
                {secondaryItems.map((item) => (
                  <li key={item.path}>
                    <Link
                      to={item.path}
                      className="group flex items-center px-2 py-2 text-sm font-medium 
                                rounded-md text-gray-700 hover:bg-gray-100 
                                hover:text-primary-600 transition-colors duration-150"
                      onClick={onClose}
                    >
                      <span className="mr-3 text-gray-500 group-hover:text-primary-500">
                        {item.icon}
                      </span>
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </nav>
          
          {/* Logout button */}
          <div className="px-2 py-4 border-t border-gray-200">
            <button 
              className="w-full group flex items-center px-2 py-2 text-sm font-medium 
                        rounded-md text-gray-700 hover:bg-gray-100 hover:text-primary-600
                        transition-colors duration-150"
            >
              <span className="mr-3 text-gray-500 group-hover:text-primary-500">
                <LogOut className="h-5 w-5" />
              </span>
              Log Out
            </button>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;