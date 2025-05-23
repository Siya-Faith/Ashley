import { useState, useEffect } from 'react';
import { X, Info } from 'lucide-react';

const NotificationBar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [notification, setNotification] = useState({
    message: "Community input needed: New development proposal for Ward 3 is open for feedback until June 15",
    type: "info" // can be 'info', 'success', 'warning', 'error'
  });

  useEffect(() => {
    // You could fetch real notifications from an API here
    const timer = setTimeout(() => {
      setNotification({
        message: "Upcoming town hall meeting on July 2nd at 6PM to discuss the annual budget allocation",
        type: "info"
      });
    }, 15000);

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  // Determine styles based on notification type
  const getStyles = () => {
    switch (notification.type) {
      case 'success':
        return 'bg-green-100 text-green-800 border-green-300';
      case 'warning':
        return 'bg-yellow-100 text-yellow-800 border-yellow-300';
      case 'error':
        return 'bg-red-100 text-red-800 border-red-300';
      case 'info':
      default:
        return 'bg-primary-50 text-primary-800 border-primary-200';
    }
  };

  const getIcon = () => {
    switch (notification.type) {
      case 'info':
      default:
        return <Info className="h-5 w-5 text-primary-500" />;
    }
  };

  return (
    <div className={`border-b ${getStyles()} transition-all duration-300`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
        <div className="flex items-center justify-between flex-wrap">
          <div className="flex items-center">
            <div className="flex-shrink-0 mr-2">
              {getIcon()}
            </div>
            <p className="text-sm font-medium">
              {notification.message}
            </p>
          </div>
          <div className="flex-shrink-0 ml-2">
            <button
              onClick={() => setIsVisible(false)}
              className="p-1 rounded-md hover:bg-white focus:outline-none focus:ring-2 focus:ring-primary-500"
            >
              <X className="h-4 w-4 text-gray-500" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotificationBar;