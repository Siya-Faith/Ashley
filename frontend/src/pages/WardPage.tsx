import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  MapPin, CheckSquare, AlertTriangle, BarChart, 
  Users, Calendar, ArrowRight, Clock
} from 'lucide-react';
import { wardData } from '../data/wardData';

const WardPage = () => {
  const { wardId } = useParams<{ wardId: string }>();
  const [activeTab, setActiveTab] = useState('overview');
  
  // Find ward data based on the wardId parameter
  const ward = wardData.find(w => w.id === parseInt(wardId || '1', 10)) || wardData[0];
  
  // Update page title
  useEffect(() => {
    document.title = `Ward ${ward.number} - ${ward.name} | CityPlan`;
  }, [ward]);

  return (
    <div className="space-y-8 animate-fade-in">
      {/* Ward header */}
      <section className="relative -mt-12 py-16 px-6 sm:px-0 rounded-xl overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-800 to-primary-900 opacity-90"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30" 
          style={{ 
            backgroundImage: `url(${ward.coverImage})` 
          }}
        ></div>
        
        <div className="relative max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div>
              <div className="inline-flex items-center bg-white/20 text-white px-3 py-1 rounded-full text-sm mb-4">
                <MapPin className="h-4 w-4 mr-1" />
                Ward {ward.number}
              </div>
              <h1 className="text-3xl sm:text-4xl font-bold text-white mb-2">
                {ward.name}
              </h1>
              <p className="text-white/90 text-lg">
                Population: {ward.population.toLocaleString()} | Area: {ward.area} km²
              </p>
            </div>
            
            <div className="mt-6 md:mt-0 flex space-x-3">
              <Link 
                to="/issues" 
                className="btn bg-accent-600 hover:bg-accent-700 text-white"
              >
                Report Issue
              </Link>
              <Link 
                to="/feedback" 
                className="btn bg-white text-primary-800 hover:bg-gray-100"
              >
                Submit Feedback
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Navigation tabs */}
      <div className="border-b border-gray-200">
        <nav className="-mb-px flex space-x-8">
          {[
            { id: 'overview', label: 'Overview' },
            { id: 'plans', label: 'Development Plans' },
            { id: 'projects', label: 'Active Projects' },
            { id: 'budget', label: 'Budget Allocation' },
            { id: 'issues', label: 'Community Issues' }
          ].map((tab) => (
            <button
              key={tab.id}
              className={`
                whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm
                ${activeTab === tab.id
                  ? 'border-primary-600 text-primary-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}
              `}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </nav>
      </div>
      
      {/* Tab content */}
      <div className="mt-6">
        {activeTab === 'overview' && (
          <div className="space-y-8">
            {/* Ward overview */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Ward Overview</h2>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2">
                  <div className="prose max-w-none">
                    <p>
                      {ward.description}
                    </p>
                    <h3>Key Demographics</h3>
                    <ul>
                      <li>Population density: {ward.demographics.density} people per km²</li>
                      <li>Median age: {ward.demographics.medianAge} years</li>
                      <li>Households: {ward.demographics.households.toLocaleString()}</li>
                      <li>Employment rate: {ward.demographics.employmentRate}%</li>
                    </ul>
                    <h3>Major Landmarks</h3>
                    <ul>
                      {ward.landmarks.map((landmark, index) => (
                        <li key={index}>{landmark}</li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                <div>
                  <div className="bg-gray-100 rounded-lg p-6">
                    <h3 className="text-lg font-semibold mb-4">Ward Councillor</h3>
                    <div className="flex items-center mb-4">
                      <img
                        src={ward.councillor.image}
                        alt={ward.councillor.name}
                        className="h-16 w-16 rounded-full object-cover mr-4"
                      />
                      <div>
                        <h4 className="font-medium">{ward.councillor.name}</h4>
                        <p className="text-gray-600 text-sm">{ward.councillor.party}</p>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center text-sm">
                        <span className="font-medium w-20">Email:</span>
                        <a href={`mailto:${ward.councillor.email}`} className="text-primary-600 hover:underline">
                          {ward.councillor.email}
                        </a>
                      </div>
                      <div className="flex items-center text-sm">
                        <span className="font-medium w-20">Phone:</span>
                        <a href={`tel:${ward.councillor.phone}`} className="text-primary-600 hover:underline">
                          {ward.councillor.phone}
                        </a>
                      </div>
                      <div className="flex items-center text-sm">
                        <span className="font-medium w-20">Office:</span>
                        <span>{ward.councillor.office}</span>
                      </div>
                    </div>
                    <div className="mt-4 pt-4 border-t border-gray-200">
                      <h4 className="text-sm font-medium mb-2">Office Hours</h4>
                      <p className="text-sm text-gray-600">
                        Monday - Friday: 9:00 AM - 4:00 PM
                      </p>
                      <button className="mt-4 btn btn-outline w-full">
                        Schedule Meeting
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            
            {/* Development priorities */}
            <section>
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-2xl font-bold text-gray-900">Development Priorities</h2>
                <Link 
                  to="/priorities" 
                  className="text-primary-600 hover:text-primary-800 font-medium flex items-center"
                >
                  Vote on Priorities
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {ward.priorities.map((priority, index) => (
                  <div key={index} className="card">
                    <div className="flex items-center mb-4">
                      <div 
                        className={`p-3 rounded-full w-fit
                          ${index === 0 ? 'bg-accent-100 text-accent-600' : 
                           index === 1 ? 'bg-primary-100 text-primary-600' :
                           'bg-secondary-100 text-secondary-600'}`}
                      >
                        <CheckSquare className="h-5 w-5" />
                      </div>
                      <div className="ml-3">
                        <span className="text-sm font-medium text-gray-500">Priority {index + 1}</span>
                        <h3 className="font-semibold text-gray-900">{priority.title}</h3>
                      </div>
                    </div>
                    <p className="text-gray-600 mb-4">{priority.description}</p>
                    <div className="mt-2 flex items-center justify-between">
                      <div className="flex items-center text-sm text-gray-500">
                        <Users className="h-4 w-4 mr-1" />
                        <span>{priority.votes} votes</span>
                      </div>
                      <div className="text-sm font-medium text-primary-600">
                        {priority.status}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
            
            {/* Upcoming ward events */}
            <section>
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-2xl font-bold text-gray-900">Upcoming Ward Events</h2>
                <Link 
                  to="/events" 
                  className="text-primary-600 hover:text-primary-800 font-medium flex items-center"
                >
                  All Events
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
              
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Event
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Date & Time
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Location
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Type
                      </th>
                      <th scope="col" className="relative px-6 py-3">
                        <span className="sr-only">Actions</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {ward.events.map((event, index) => (
                      <tr key={index} className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="font-medium text-gray-900">{event.title}</div>
                          <div className="text-sm text-gray-500">{event.description}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <Calendar className="h-4 w-4 text-gray-400 mr-1" />
                            <span className="text-sm text-gray-900">{event.date}</span>
                          </div>
                          <div className="flex items-center mt-1">
                            <Clock className="h-4 w-4 text-gray-400 mr-1" />
                            <span className="text-sm text-gray-500">{event.time}</span>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {event.location}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`px-2 py-1 text-xs font-medium rounded-full
                            ${event.type === 'Town Hall' ? 'bg-primary-100 text-primary-800' :
                             event.type === 'Workshop' ? 'bg-secondary-100 text-secondary-800' :
                             event.type === 'Public Hearing' ? 'bg-accent-100 text-accent-800' :
                             'bg-gray-100 text-gray-800'}`}>
                            {event.type}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                          <button className="text-primary-600 hover:text-primary-900">
                            Register
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>
          </div>
        )}
        
        {activeTab === 'plans' && (
          <div className="space-y-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Ward Development Plans</h2>
            {/* Development Plans content would go here */}
            <p className="text-gray-600">
              This section contains strategic development plans for Ward {ward.number}. 
              Here you can review current plans, provide feedback, and track implementation progress.
            </p>
          </div>
        )}
        
        {activeTab === 'projects' && (
          <div className="space-y-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Active Projects in Ward {ward.number}</h2>
            {/* Active Projects content would go here */}
            <p className="text-gray-600">
              View all ongoing municipal projects in your ward, including infrastructure improvements, 
              community initiatives, and public works.
            </p>
          </div>
        )}
        
        {activeTab === 'budget' && (
          <div className="space-y-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Budget Allocation</h2>
            {/* Budget content would go here */}
            <p className="text-gray-600">
              Explore how municipal funds are allocated for Ward {ward.number}, including capital projects,
              operational expenses, and community initiatives.
            </p>
          </div>
        )}
        
        {activeTab === 'issues' && (
          <div className="space-y-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Community Issues</h2>
            {/* Issues content would go here */}
            <p className="text-gray-600">
              View reported community issues, track their resolution status, and submit new concerns.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default WardPage;