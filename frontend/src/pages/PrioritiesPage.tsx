import { useState, useEffect } from 'react';
import { BarChart3, Info, ThumbsUp, ChevronDown, ChevronUp, Filter } from 'lucide-react';
import { prioritiesData } from '../data/prioritiesData';

const PrioritiesPage = () => {
  const [priorities, setPriorities] = useState(prioritiesData);
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  
  // Update page title
  useEffect(() => {
    document.title = 'Vote on Development Priorities | CityPlan';
  }, []);
  
  // Filter priorities based on active category and search query
  const filteredPriorities = priorities.filter(priority => {
    const matchesCategory = activeCategory === 'all' || priority.category === activeCategory;
    const matchesSearch = priority.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          priority.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });
  
  // Handle voting
  const handleVote = (id: number) => {
    setPriorities(
      priorities.map(priority => 
        priority.id === id 
          ? { ...priority, votes: priority.voted ? priority.votes - 1 : priority.votes + 1, voted: !priority.voted } 
          : priority
      )
    );
  };
  
  // Calculate vote percentage for progress bars
  const maxVotes = Math.max(...priorities.map(p => p.votes));
  
  // Categories for filtering
  const categories = [
    { id: 'all', label: 'All Categories' },
    { id: 'infrastructure', label: 'Infrastructure' },
    { id: 'environment', label: 'Environment' },
    { id: 'social', label: 'Social Services' },
    { id: 'economic', label: 'Economic Development' },
    { id: 'safety', label: 'Safety & Security' }
  ];

  return (
    <div className="space-y-8 animate-fade-in">
      {/* Header section */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Development Priorities</h1>
        <p className="mt-2 text-gray-600">
          Vote on which development initiatives should be prioritized in the upcoming fiscal year.
          Your input helps shape municipal resource allocation and planning decisions.
        </p>
        
        {/* Info box */}
        <div className="mt-6 bg-primary-50 border border-primary-200 rounded-lg p-4 flex">
          <div className="flex-shrink-0 mr-3">
            <Info className="h-5 w-5 text-primary-500" />
          </div>
          <div>
            <h3 className="text-sm font-medium text-primary-800">How voting works</h3>
            <p className="mt-1 text-sm text-primary-700">
              Each resident can vote for multiple priorities. Votes are tallied monthly and presented to the 
              municipal planning committee. The top-ranked priorities receive special consideration during 
              budget allocation and implementation scheduling.
            </p>
          </div>
        </div>
      </div>
      
      {/* Filters and search */}
      <div className="bg-white shadow-sm rounded-lg p-4 sm:p-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
          <h2 className="text-lg font-semibold text-gray-900 mb-4 sm:mb-0">
            <span className="flex items-center">
              <BarChart3 className="h-5 w-5 mr-2 text-primary-500" />
              Priority Voting
            </span>
          </h2>
          
          <div className="flex items-center">
            <div className="relative w-full sm:w-64">
              <input
                type="text"
                placeholder="Search priorities..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full input pr-10"
              />
              <button 
                className="absolute inset-y-0 right-0 pr-3 flex items-center"
                onClick={() => setSearchQuery('')}
              >
                {searchQuery && (
                  <span className="text-gray-400 hover:text-gray-600">
                    ✕
                  </span>
                )}
              </button>
            </div>
            
            <button 
              className="ml-2 p-2 rounded-md border border-gray-300 text-gray-700 hover:bg-gray-50 sm:hidden"
              onClick={() => setShowFilters(!showFilters)}
            >
              <Filter className="h-5 w-5" />
            </button>
          </div>
        </div>
        
        {/* Category filters - mobile */}
        <div className={`sm:hidden mt-4 ${showFilters ? 'block' : 'hidden'}`}>
          <div className="space-y-2">
            {categories.map(category => (
              <button
                key={category.id}
                className={`block w-full text-left px-3 py-2 text-sm rounded-md transition
                         ${activeCategory === category.id 
                           ? 'bg-primary-100 text-primary-800 font-medium' 
                           : 'text-gray-700 hover:bg-gray-50'}`}
                onClick={() => setActiveCategory(category.id)}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>
        
        {/* Category filters - desktop */}
        <div className="hidden sm:flex sm:flex-wrap sm:mt-6 space-x-2">
          {categories.map(category => (
            <button
              key={category.id}
              className={`px-3 py-1.5 text-sm rounded-md transition
                       ${activeCategory === category.id 
                         ? 'bg-primary-100 text-primary-800 font-medium' 
                         : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
              onClick={() => setActiveCategory(category.id)}
            >
              {category.label}
            </button>
          ))}
        </div>
      </div>
      
      {/* Priorities list */}
      <div className="space-y-4">
        {filteredPriorities.length > 0 ? (
          filteredPriorities.map(priority => (
            <div 
              key={priority.id} 
              className="bg-white shadow-sm rounded-lg overflow-hidden border border-gray-200 hover:border-primary-300 transition"
            >
              <div className="p-6">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between">
                  <div className="flex-1 min-w-0">
                    <span className={`inline-block px-2.5 py-0.5 rounded-full text-xs font-medium mb-2
                                   ${priority.category === 'infrastructure' ? 'bg-blue-100 text-blue-800' :
                                     priority.category === 'environment' ? 'bg-green-100 text-green-800' :
                                     priority.category === 'social' ? 'bg-purple-100 text-purple-800' :
                                     priority.category === 'economic' ? 'bg-yellow-100 text-yellow-800' :
                                     priority.category === 'safety' ? 'bg-red-100 text-red-800' :
                                     'bg-gray-100 text-gray-800'}`}>
                      {priority.category.charAt(0).toUpperCase() + priority.category.slice(1)}
                    </span>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">{priority.title}</h3>
                    <p className="text-sm text-gray-600 mb-3">{priority.description}</p>
                    
                    <div className="flex flex-wrap items-center text-xs text-gray-500 space-x-4">
                      <span>Ward: {priority.ward}</span>
                      <span>Target year: {priority.targetYear}</span>
                      <span>Estimated cost: ${priority.estimatedCost.toLocaleString()}</span>
                    </div>
                  </div>
                  
                  <div className="mt-4 sm:mt-0 sm:ml-6 flex flex-col items-center">
                    <button
                      className={`flex items-center justify-center h-12 w-12 rounded-full transition
                               ${priority.voted 
                                 ? 'bg-primary-100 text-primary-600 hover:bg-primary-200' 
                                 : 'bg-gray-100 text-gray-500 hover:bg-gray-200'}`}
                      onClick={() => handleVote(priority.id)}
                      aria-label="Vote for this priority"
                    >
                      <ThumbsUp className={`h-6 w-6 ${priority.voted ? 'fill-primary-500' : ''}`} />
                    </button>
                    <span className="mt-1 font-medium text-sm">
                      {priority.votes} {priority.votes === 1 ? 'vote' : 'votes'}
                    </span>
                  </div>
                </div>
                
                {/* Progress bar */}
                <div className="mt-4">
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div 
                      className="bg-primary-600 h-2.5 rounded-full transition-all duration-500 ease-out" 
                      style={{ width: `${(priority.votes / maxVotes) * 100}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="bg-white shadow-sm rounded-lg p-8 text-center">
            <p className="text-gray-600">No priorities match your search criteria.</p>
            <button 
              className="mt-4 text-primary-600 hover:text-primary-800 font-medium"
              onClick={() => {
                setSearchQuery('');
                setActiveCategory('all');
              }}
            >
              Clear filters
            </button>
          </div>
        )}
      </div>
      
      {/* Pagination */}
      <div className="flex justify-between items-center">
        <div className="text-sm text-gray-600">
          Showing {filteredPriorities.length} of {priorities.length} priorities
        </div>
        
        <div className="flex space-x-2">
          <button className="btn btn-outline flex items-center">
            <ChevronUp className="h-4 w-4 mr-1" />
            Previous
          </button>
          <button className="btn btn-outline flex items-center">
            Next
            <ChevronDown className="h-4 w-4 ml-1" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default PrioritiesPage;