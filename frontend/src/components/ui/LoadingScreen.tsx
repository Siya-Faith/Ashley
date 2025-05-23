import { FileText } from 'lucide-react';

const LoadingScreen = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh]">
      <div className="relative h-16 w-16 mb-4">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="h-16 w-16 rounded-md bg-primary-600 text-white flex items-center justify-center">
            <FileText className="h-8 w-8" />
          </div>
        </div>
        <div className="absolute inset-0 border-4 border-t-primary-300 border-r-primary-600 border-b-primary-600 border-l-primary-300 rounded-md animate-spin"></div>
      </div>
      <h2 className="text-xl font-semibold text-gray-800 mb-2">Loading</h2>
      <p className="text-gray-500">Please wait while we load your community data...</p>
    </div>
  );
};

export default LoadingScreen;