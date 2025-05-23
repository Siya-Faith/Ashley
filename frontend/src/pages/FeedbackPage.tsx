import { useState, useEffect } from 'react';
import { 
  MessageSquare, Smile, Meh, Frown, ThumbsUp, 
  ThumbsDown, Send, Check 
} from 'lucide-react';

const FeedbackPage = () => {
  const [feedbackType, setFeedbackType] = useState('');
  const [satisfaction, setSatisfaction] = useState<number | null>(null);
  const [topic, setTopic] = useState('');
  const [comments, setComments] = useState('');
  const [isAnonymous, setIsAnonymous] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  
  // Update page title
  useEffect(() => {
    document.title = 'Provide Feedback | CityPlan';
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
        setFeedbackType('');
        setSatisfaction(null);
        setTopic('');
        setComments('');
        setIsAnonymous(false);
        setIsSuccess(false);
      }, 3000);
    }, 1500);
  };
  
  // Topics for feedback
  const topics = [
    { id: 'infrastructure', label: 'Infrastructure & Services' },
    { id: 'planning', label: 'Urban Planning & Development' },
    { id: 'environment', label: 'Environmental Initiatives' },
    { id: 'community', label: 'Community Programs' },
    { id: 'transparency', label: 'Municipal Transparency' },
    { id: 'communication', label: 'Communication & Engagement' },
    { id: 'portal', label: 'IDP Portal Experience' },
    { id: 'other', label: 'Other' }
  ];
  
  // Feedback types
  const feedbackTypes = [
    { id: 'suggestion', label: 'Suggestion', icon: <ThumbsUp className="h-6 w-6" /> },
    { id: 'concern', label: 'Concern', icon: <ThumbsDown className="h-6 w-6" /> },
    { id: 'question', label: 'Question', icon: <MessageSquare className="h-6 w-6" /> }
  ];

  return (
    <div className="space-y-8 animate-fade-in">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Feedback</h1>
        <p className="mt-2 text-gray-600">
          Share your thoughts, suggestions, or concerns about municipal plans and initiatives.
          Your feedback helps us improve our services and better address community needs.
        </p>
      </div>
      
      {/* Feedback form */}
      <div className="bg-white shadow-sm rounded-lg overflow-hidden">
        {isSuccess ? (
          <div className="p-8 text-center">
            <div className="h-16 w-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Check className="h-8 w-8" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Feedback Submitted!</h2>
            <p className="text-gray-600 mb-6">
              Thank you for sharing your thoughts with us. Your input is valuable and helps us improve our municipal services.
            </p>
            <p className="text-gray-600">
              We appreciate your participation in making our community better.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="p-6 space-y-6">
              {/* Feedback type */}
              <div>
                <label className="label">What type of feedback would you like to provide?</label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {feedbackTypes.map(type => (
                    <button
                      key={type.id}
                      type="button"
                      className={`flex items-center justify-center p-4 border rounded-md transition ${
                        feedbackType === type.id 
                          ? 'border-primary-500 bg-primary-50 text-primary-700' 
                          : 'border-gray-200 hover:bg-gray-50'
                      }`}
                      onClick={() => setFeedbackType(type.id)}
                    >
                      <div className={`mr-3 ${
                        feedbackType === type.id ? 'text-primary-600' : 'text-gray-400'
                      }`}>
                        {type.icon}
                      </div>
                      <span className="font-medium">{type.label}</span>
                    </button>
                  ))}
                </div>
              </div>
              
              {/* Satisfaction level */}
              <div>
                <label className="label">How satisfied are you with the municipal services?</label>
                <div className="flex flex-wrap gap-3">
                  {[
                    { value: 1, icon: <Frown className="h-6 w-6" />, label: 'Very Dissatisfied' },
                    { value: 2, icon: <Frown className="h-6 w-6" />, label: 'Dissatisfied' },
                    { value: 3, icon: <Meh className="h-6 w-6" />, label: 'Neutral' },
                    { value: 4, icon: <Smile className="h-6 w-6" />, label: 'Satisfied' },
                    { value: 5, icon: <Smile className="h-6 w-6" />, label: 'Very Satisfied' }
                  ].map((option) => (
                    <button
                      key={option.value}
                      type="button"
                      className={`flex flex-col items-center p-3 border rounded-md transition ${
                        satisfaction === option.value 
                          ? 'border-primary-500 bg-primary-50 text-primary-700' 
                          : 'border-gray-200 hover:bg-gray-50'
                      }`}
                      onClick={() => setSatisfaction(option.value)}
                    >
                      <div className={`mb-2 ${
                        satisfaction === option.value 
                          ? option.value <= 2 ? 'text-red-500' : 
                            option.value === 3 ? 'text-yellow-500' : 'text-green-500'
                          : 'text-gray-400'
                      }`}>
                        {option.icon}
                      </div>
                      <span className="text-sm">{option.label}</span>
                    </button>
                  ))}
                </div>
              </div>
              
              {/* Topic */}
              <div>
                <label htmlFor="topic" className="label">What area would you like to provide feedback on?</label>
                <select
                  id="topic"
                  className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-opacity-50"
                  value={topic}
                  onChange={(e) => setTopic(e.target.value)}
                  required
                >
                  <option value="">Select a topic</option>
                  {topics.map(topicOption => (
                    <option key={topicOption.id} value={topicOption.id}>
                      {topicOption.label}
                    </option>
                  ))}
                </select>
              </div>
              
              {/* Comments */}
              <div>
                <label htmlFor="comments" className="label">Your Feedback</label>
                <textarea
                  id="comments"
                  rows={6}
                  className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-opacity-50"
                  placeholder="Please share your thoughts, suggestions, or concerns..."
                  value={comments}
                  onChange={(e) => setComments(e.target.value)}
                  required
                ></textarea>
              </div>
              
              {/* Anonymous option */}
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <input
                    id="anonymous"
                    name="anonymous"
                    type="checkbox"
                    className="h-4 w-4 rounded border-gray-300 text-primary-600 focus:ring-primary-500"
                    checked={isAnonymous}
                    onChange={(e) => setIsAnonymous(e.target.checked)}
                  />
                </div>
                <div className="ml-3">
                  <label htmlFor="anonymous" className="text-sm text-gray-700">
                    Submit anonymously (note: we won't be able to follow up with you directly)
                  </label>
                </div>
              </div>
              
              <div className="bg-yellow-50 border border-yellow-200 rounded-md p-4">
                <p className="text-sm text-yellow-800">
                  Your feedback will be reviewed by municipal officials and may be used to inform future planning decisions. 
                  Personal information will be handled in accordance with our privacy policy.
                </p>
              </div>
            </div>
            
            {/* Form submission */}
            <div className="bg-gray-50 px-6 py-4 flex justify-end">
              <button
                type="submit"
                className="btn btn-primary flex items-center"
                disabled={isSubmitting || !feedbackType || !topic || !comments}
              >
                {isSubmitting ? (
                  <>
                    <span className="mr-2">Submitting...</span>
                    <div className="h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  </>
                ) : (
                  <>
                    Submit Feedback
                    <Send className="ml-2 h-4 w-4" />
                  </>
                )}
              </button>
            </div>
          </form>
        )}
      </div>
      
      {/* Feedback process */}
      <div>
        <h2 className="text-xl font-semibold text-gray-900 mb-4">How We Process Your Feedback</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex items-center justify-center h-12 w-12 rounded-full bg-primary-100 text-primary-600 mb-4">
              <span className="text-lg font-bold">1</span>
            </div>
            <h3 className="text-lg font-semibold mb-2">Collection</h3>
            <p className="text-gray-600">
              Your feedback is securely recorded in our system and categorized based on the topic and type.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex items-center justify-center h-12 w-12 rounded-full bg-primary-100 text-primary-600 mb-4">
              <span className="text-lg font-bold">2</span>
            </div>
            <h3 className="text-lg font-semibold mb-2">Analysis</h3>
            <p className="text-gray-600">
              Municipal planners and relevant department officials review and analyze the feedback to identify trends and priorities.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex items-center justify-center h-12 w-12 rounded-full bg-primary-100 text-primary-600 mb-4">
              <span className="text-lg font-bold">3</span>
            </div>
            <h3 className="text-lg font-semibold mb-2">Implementation</h3>
            <p className="text-gray-600">
              Insights from feedback are incorporated into planning decisions and service improvements where appropriate.
            </p>
          </div>
        </div>
      </div>
      
      {/* Feedback stats */}
      <div className="bg-gray-100 rounded-lg p-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Community Feedback Impact</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-white p-4 rounded-md shadow-sm">
            <div className="flex items-center">
              <div className="p-2 rounded-full bg-blue-100 text-blue-600">
                <MessageSquare className="h-5 w-5" />
              </div>
              <div className="ml-3">
                <div className="text-2xl font-bold">2,845</div>
                <div className="text-sm text-gray-500">Feedback Submissions</div>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-4 rounded-md shadow-sm">
            <div className="flex items-center">
              <div className="p-2 rounded-full bg-green-100 text-green-600">
                <Check className="h-5 w-5" />
              </div>
              <div className="ml-3">
                <div className="text-2xl font-bold">72%</div>
                <div className="text-sm text-gray-500">Implementation Rate</div>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-4 rounded-md shadow-sm">
            <div className="flex items-center">
              <div className="p-2 rounded-full bg-yellow-100 text-yellow-600">
                <ThumbsUp className="h-5 w-5" />
              </div>
              <div className="ml-3">
                <div className="text-2xl font-bold">138</div>
                <div className="text-sm text-gray-500">Service Improvements</div>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-4 rounded-md shadow-sm">
            <div className="flex items-center">
              <div className="p-2 rounded-full bg-purple-100 text-purple-600">
                <Smile className="h-5 w-5" />
              </div>
              <div className="ml-3">
                <div className="text-2xl font-bold">85%</div>
                <div className="text-sm text-gray-500">Satisfaction Rate</div>
              </div>
            </div>
          </div>
        </div>
        
        <p className="mt-4 text-sm text-gray-600 text-center">
          Last updated: June 1, 2025 | Data reflects feedback collected over the past 12 months
        </p>
      </div>
    </div>
  );
};

export default FeedbackPage;