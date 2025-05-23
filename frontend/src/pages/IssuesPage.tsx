import { useState, useEffect } from 'react';
import { 
  AlertTriangle, Check, Camera, MapPin, Calendar, 
  ArrowUpRight, Upload, X, Plus 
} from 'lucide-react';

const IssuesPage = () => {
  const [step, setStep] = useState(1);
  const [location, setLocation] = useState('');
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');
  const [impact, setImpact] = useState('');
  const [photos, setPhotos] = useState<string[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  
  // Update page title
  useEffect(() => {
    document.title = 'Report Issues | CityPlan';
  }, []);
  
  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      
      // Reset form after 3 seconds
      setTimeout(() => {
        setStep(1);
        setLocation('');
        setCategory('');
        setDescription('');
        setImpact('');
        setPhotos([]);
        setIsSuccess(false);
      }, 3000);
    }, 1500);
  };
  
  // Handle photo upload
  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      // In a real application, you would upload the file to a server
      // Here we're just creating an object URL for preview
      const newPhotos = [...photos];
      
      for (let i = 0; i < e.target.files.length; i++) {
        if (newPhotos.length < 3) {
          newPhotos.push(URL.createObjectURL(e.target.files[i]));
        }
      }
      
      setPhotos(newPhotos);
    }
  };
  
  // Remove a photo
  const removePhoto = (index: number) => {
    const newPhotos = [...photos];
    newPhotos.splice(index, 1);
    setPhotos(newPhotos);
  };
  
  // Categories for issues
  const categories = [
    { id: 'infrastructure', label: 'Infrastructure', icon: '🚧' },
    { id: 'services', label: 'Municipal Services', icon: '🚮' },
    { id: 'safety', label: 'Safety & Security', icon: '🚨' },
    { id: 'environment', label: 'Environmental', icon: '🌳' },
    { id: 'other', label: 'Other', icon: '📋' }
  ];
  
  // Impact levels
  const impactLevels = [
    { id: 'low', label: 'Low - Minor inconvenience' },
    { id: 'medium', label: 'Medium - Affects daily activities' },
    { id: 'high', label: 'High - Urgent attention needed' },
    { id: 'critical', label: 'Critical - Safety hazard' }
  ];
  
  // Recent issues reported
  const recentIssues = [
    {
      id: 1,
      title: 'Pothole on Main Street',
      category: 'infrastructure',
      location: 'Main St & 5th Ave',
      status: 'in-progress',
      date: '2 days ago'
    },
    {
      id: 2,
      title: 'Broken streetlight',
      category: 'infrastructure',
      location: 'Park Road',
      status: 'reported',
      date: '3 days ago'
    },
    {
      id: 3,
      title: 'Illegal dumping',
      category: 'environment',
      location: 'River walkway',
      status: 'resolved',
      date: '1 week ago'
    }
  ];

  return (
    <div className="space-y-8 animate-fade-in">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Report an Issue</h1>
        <p className="mt-2 text-gray-600">
          Report infrastructure problems, service delivery issues, or other concerns in your ward.
          Your reports help us identify and address community needs more effectively.
        </p>
      </div>
      
      {/* Issue reporting form */}
      <div className="bg-white shadow-sm rounded-lg overflow-hidden">
        {isSuccess ? (
          <div className="p-8 text-center">
            <div className="h-16 w-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Check className="h-8 w-8" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Issue Reported!</h2>
            <p className="text-gray-600 mb-6">
              Thank you for bringing this to our attention. Your issue has been logged and will be addressed by municipal officials.
            </p>
            <p className="text-gray-600">
              You'll receive updates on the status of your report via email.
            </p>
          </div>
        ) : (
          <div>
            {/* Step indicator */}
            <div className="bg-gray-50 px-6 py-4 border-b">
              <div className="flex items-center">
                <div className={`flex items-center justify-center h-8 w-8 rounded-full ${
                  step >= 1 ? 'bg-primary-600 text-white' : 'bg-gray-300 text-gray-500'
                }`}>
                  1
                </div>
                <div className={`flex-1 h-0.5 ${
                  step >= 2 ? 'bg-primary-600' : 'bg-gray-300'
                }`}></div>
                <div className={`flex items-center justify-center h-8 w-8 rounded-full ${
                  step >= 2 ? 'bg-primary-600 text-white' : 'bg-gray-300 text-gray-500'
                }`}>
                  2
                </div>
                <div className={`flex-1 h-0.5 ${
                  step >= 3 ? 'bg-primary-600' : 'bg-gray-300'
                }`}></div>
                <div className={`flex items-center justify-center h-8 w-8 rounded-full ${
                  step >= 3 ? 'bg-primary-600 text-white' : 'bg-gray-300 text-gray-500'
                }`}>
                  3
                </div>
              </div>
              <div className="flex justify-between text-xs text-gray-500 mt-2">
                <span>Issue Details</span>
                <span>Location</span>
                <span>Review & Submit</span>
              </div>
            </div>
            
            <form onSubmit={handleSubmit}>
              <div className="p-6">
                {/* Step 1: Issue Details */}
                {step === 1 && (
                  <div className="space-y-6">
                    <div>
                      <label htmlFor="category" className="label">Issue Category</label>
                      <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
                        {categories.map(cat => (
                          <button
                            key={cat.id}
                            type="button"
                            className={`flex flex-col items-center p-4 border rounded-md transition ${
                              category === cat.id 
                                ? 'border-primary-500 bg-primary-50 text-primary-700' 
                                : 'border-gray-200 hover:bg-gray-50'
                            }`}
                            onClick={() => setCategory(cat.id)}
                          >
                            <span className="text-2xl mb-2">{cat.icon}</span>
                            <span className="text-sm font-medium">{cat.label}</span>
                          </button>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="description" className="label">Description</label>
                      <textarea
                        id="description"
                        rows={4}
                        className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-opacity-50"
                        placeholder="Please describe the issue in detail..."
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        required
                      ></textarea>
                    </div>
                    
                    <div>
                      <label htmlFor="impact" className="label">Impact Level</label>
                      <select
                        id="impact"
                        className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-opacity-50"
                        value={impact}
                        onChange={(e) => setImpact(e.target.value)}
                        required
                      >
                        <option value="">Select impact level</option>
                        {impactLevels.map(level => (
                          <option key={level.id} value={level.id}>{level.label}</option>
                        ))}
                      </select>
                    </div>
                    
                    <div>
                      <label className="label">Photos (Optional)</label>
                      <div className="flex flex-wrap gap-3 mb-3">
                        {photos.map((photo, index) => (
                          <div key={index} className="relative h-20 w-20 border rounded-md overflow-hidden">
                            <img 
                              src={photo} 
                              alt={`Photo ${index + 1}`} 
                              className="h-full w-full object-cover" 
                            />
                            <button
                              type="button"
                              className="absolute top-1 right-1 bg-black bg-opacity-50 rounded-full p-1 text-white"
                              onClick={() => removePhoto(index)}
                            >
                              <X className="h-3 w-3" />
                            </button>
                          </div>
                        ))}
                        
                        {photos.length < 3 && (
                          <label className="flex flex-col items-center justify-center h-20 w-20 border-2 border-dashed border-gray-300 rounded-md cursor-pointer hover:bg-gray-50 transition">
                            <Plus className="h-6 w-6 text-gray-400" />
                            <span className="mt-1 text-xs text-gray-500">Add Photo</span>
                            <input 
                              type="file" 
                              accept="image/*"
                              className="hidden"
                              onChange={handlePhotoUpload}
                            />
                          </label>
                        )}
                      </div>
                      <p className="text-xs text-gray-500">
                        Add up to 3 photos to help describe the issue (max 5MB each)
                      </p>
                    </div>
                  </div>
                )}
                
                {/* Step 2: Location */}
                {step === 2 && (
                  <div className="space-y-6">
                    <div>
                      <label htmlFor="location" className="label">Issue Location</label>
                      <div className="flex">
                        <input
                          id="location"
                          type="text"
                          className="w-full rounded-l-md border border-gray-300 px-3 py-2 text-sm focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-opacity-50"
                          placeholder="Enter street address or intersection..."
                          value={location}
                          onChange={(e) => setLocation(e.target.value)}
                          required
                        />
                        <button
                          type="button"
                          className="flex items-center justify-center px-4 border border-l-0 border-gray-300 bg-gray-50 rounded-r-md text-gray-700 hover:bg-gray-100"
                        >
                          <MapPin className="h-5 w-5" />
                        </button>
                      </div>
                      <p className="mt-2 text-xs text-gray-500">
                        You can enter an address or use your current location
                      </p>
                    </div>
                    
                    <div className="h-64 bg-gray-200 rounded-md overflow-hidden relative">
                      {/* This would be replaced with an actual map component in a real application */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <p className="text-gray-500">Interactive Map Would Display Here</p>
                      </div>
                      <div className="absolute bottom-4 right-4">
                        <button
                          type="button"
                          className="bg-white rounded-md shadow-md p-2 text-gray-700"
                        >
                          <MapPin className="h-5 w-5" />
                        </button>
                      </div>
                    </div>
                    
                    <div>
                      <p className="text-sm text-gray-600">
                        Click on the map to mark the exact location of the issue, or drag the pin to adjust the position.
                      </p>
                    </div>
                  </div>
                )}
                
                {/* Step 3: Review & Submit */}
                {step === 3 && (
                  <div className="space-y-6">
                    <h2 className="text-lg font-semibold text-gray-900">Review Your Report</h2>
                    
                    <div className="bg-gray-50 rounded-md p-4">
                      <div className="space-y-4">
                        <div className="flex justify-between">
                          <span className="text-sm font-medium text-gray-500">Category:</span>
                          <span className="text-sm text-gray-900">
                            {categories.find(cat => cat.id === category)?.label || ''}
                          </span>
                        </div>
                        
                        <div>
                          <span className="text-sm font-medium text-gray-500">Description:</span>
                          <p className="mt-1 text-sm text-gray-900">{description}</p>
                        </div>
                        
                        <div className="flex justify-between">
                          <span className="text-sm font-medium text-gray-500">Impact Level:</span>
                          <span className="text-sm text-gray-900">
                            {impactLevels.find(level => level.id === impact)?.label || ''}
                          </span>
                        </div>
                        
                        <div className="flex justify-between">
                          <span className="text-sm font-medium text-gray-500">Location:</span>
                          <span className="text-sm text-gray-900">{location}</span>
                        </div>
                        
                        {photos.length > 0 && (
                          <div>
                            <span className="text-sm font-medium text-gray-500">Photos:</span>
                            <div className="mt-2 flex gap-2">
                              {photos.map((photo, index) => (
                                <div key={index} className="h-16 w-16 rounded-md overflow-hidden">
                                  <img 
                                    src={photo} 
                                    alt={`Photo ${index + 1}`} 
                                    className="h-full w-full object-cover" 
                                  />
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="flex-shrink-0">
                        <input
                          id="agree"
                          name="agree"
                          type="checkbox"
                          className="h-4 w-4 rounded border-gray-300 text-primary-600 focus:ring-primary-500"
                          required
                        />
                      </div>
                      <div className="ml-3">
                        <label htmlFor="agree" className="text-sm text-gray-700">
                          I confirm that the information provided is accurate to the best of my knowledge and understand 
                          that municipal officials may contact me for additional details.
                        </label>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              
              {/* Form navigation */}
              <div className="bg-gray-50 px-6 py-4 flex justify-between">
                {step > 1 ? (
                  <button
                    type="button"
                    className="btn btn-outline"
                    onClick={() => setStep(step - 1)}
                  >
                    Back
                  </button>
                ) : (
                  <div></div>
                )}
                
                {step < 3 ? (
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={() => setStep(step + 1)}
                    disabled={
                      (step === 1 && (!category || !description || !impact)) ||
                      (step === 2 && !location)
                    }
                  >
                    Continue
                  </button>
                ) : (
                  <button
                    type="submit"
                    className="btn btn-primary flex items-center"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <span className="mr-2">Submitting...</span>
                        <div className="h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      </>
                    ) : (
                      'Submit Report'
                    )}
                  </button>
                )}
              </div>
            </form>
          </div>
        )}
      </div>
      
      {/* Recent issues */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold text-gray-900">Recent Issues in Your Ward</h2>
          <a href="#" className="text-primary-600 hover:text-primary-800 font-medium flex items-center">
            View All
            <ArrowUpRight className="ml-1 h-4 w-4" />
          </a>
        </div>
        
        <div className="bg-white shadow-sm rounded-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Issue
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Location
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Reported
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {recentIssues.map((issue) => (
                  <tr key={issue.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className={`p-2 rounded-full mr-3
                                      ${issue.category === 'infrastructure' ? 'bg-blue-100 text-blue-600' :
                                        issue.category === 'environment' ? 'bg-green-100 text-green-600' :
                                        issue.category === 'safety' ? 'bg-red-100 text-red-600' :
                                        'bg-gray-100 text-gray-600'}`}>
                          <AlertTriangle className="h-4 w-4" />
                        </div>
                        <div className="font-medium text-gray-900">{issue.title}</div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center text-sm text-gray-500">
                        <MapPin className="h-4 w-4 text-gray-400 mr-1" />
                        {issue.location}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 py-1 text-xs font-medium rounded-full
                                    ${issue.status === 'resolved' ? 'bg-green-100 text-green-800' :
                                      issue.status === 'in-progress' ? 'bg-blue-100 text-blue-800' :
                                      'bg-yellow-100 text-yellow-800'}`}>
                        {issue.status === 'resolved' ? 'Resolved' :
                         issue.status === 'in-progress' ? 'In Progress' :
                         'Reported'}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 text-gray-400 mr-1" />
                        {issue.date}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IssuesPage;