import { Link } from 'react-router-dom';
import { Home, AlertTriangle } from 'lucide-react';

const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
      <div className="p-6 rounded-full bg-primary-100 text-primary-600 mb-6">
        <AlertTriangle className="h-12 w-12" />
      </div>
      <h1 className="text-4xl font-bold text-gray-900 mb-4">Page Not Found</h1>
      <p className="text-lg text-gray-600 max-w-md mb-8">
        We can't seem to find the page you're looking for. It might have been moved or deleted.
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <Link to="/" className="btn btn-primary flex items-center justify-center">
          <Home className="mr-2 h-5 w-5" />
          Return Home
        </Link>
        <Link to="/issues" className="btn btn-outline flex items-center justify-center">
          Report an Issue
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;