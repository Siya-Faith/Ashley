import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  MapPin, CheckSquare, AlertTriangle, MessageSquare, 
  TrendingUp, Users, Calendar, ArrowRight 
} from 'lucide-react';

const HomePage = () => {
  // Update page title
  useEffect(() => {
    document.title = 'CityPlan - Integrated Development Plan';
  }, []);

  return (
    <div className="space-y-10 animate-fade-in">
      {/* Hero section */}
      <section className="relative -mt-12 py-20 px-6 sm:px-0 rounded-xl overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-800 to-primary-900 opacity-90"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30" 
          style={{ 
            backgroundImage: "url('https://images.pexels.com/photos/2129796/pexels-photo-2129796.png?auto=compress&cs=tinysrgb&w=1600')" 
          }}
        ></div>
        
        <div className="relative max-w-3xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Shape the Future of Our City Together
          </h1>
          <p className="text-xl text-white/90 mb-8">
            Get involved in your community's Integrated Development Plan. 
            Your voice matters in creating a more inclusive, sustainable, and vibrant city.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/priorities" 
              className="btn bg-accent-600 hover:bg-accent-700 text-white"
            >
              Vote on Priorities
            </Link>
            <Link 
              to="/ward/1" 
              className="btn bg-white text-primary-800 hover:bg-gray-100"
            >
              Explore Your Ward
            </Link>
          </div>
        </div>
      </section>
      
      {/* Key features section */}
      <section>
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-900">How You Can Participate</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            The Integrated Development Plan is a strategic tool that guides municipal 
            planning and resource allocation. Here's how you can get involved:
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="card group hover:border-l-4 hover:border-l-primary-500 transition-all">
            <div className="p-3 rounded-full bg-primary-100 text-primary-600 w-fit mb-4">
              <MapPin className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-semibold mb-2 group-hover:text-primary-700 transition-colors">
              Explore Ward Plans
            </h3>
            <p className="text-gray-600 mb-4">
              View detailed development plans specific to your ward and understand how they impact your neighborhood.
            </p>
            <Link 
              to="/ward/1" 
              className="inline-flex items-center text-primary-600 hover:text-primary-800"
            >
              View Your Ward <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
          
          <div className="card group hover:border-l-4 hover:border-l-primary-500 transition-all">
            <div className="p-3 rounded-full bg-secondary-100 text-secondary-600 w-fit mb-4">
              <CheckSquare className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-semibold mb-2 group-hover:text-primary-700 transition-colors">
              Vote on Priorities
            </h3>
            <p className="text-gray-600 mb-4">
              Rank development projects in your area based on your community's needs and preferences.
            </p>
            <Link 
              to="/priorities" 
              className="inline-flex items-center text-primary-600 hover:text-primary-800"
            >
              Cast Your Vote <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
          
          <div className="card group hover:border-l-4 hover:border-l-primary-500 transition-all">
            <div className="p-3 rounded-full bg-accent-100 text-accent-600 w-fit mb-4">
              <AlertTriangle className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-semibold mb-2 group-hover:text-primary-700 transition-colors">
              Report Issues
            </h3>
            <p className="text-gray-600 mb-4">
              Submit infrastructure problems, service delivery issues, or other concerns directly to municipal authorities.
            </p>
            <Link 
              to="/issues" 
              className="inline-flex items-center text-primary-600 hover:text-primary-800"
            >
              Report an Issue <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
          
          <div className="card group hover:border-l-4 hover:border-l-primary-500 transition-all">
            <div className="p-3 rounded-full bg-purple-100 text-purple-600 w-fit mb-4">
              <MessageSquare className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-semibold mb-2 group-hover:text-primary-700 transition-colors">
              Provide Feedback
            </h3>
            <p className="text-gray-600 mb-4">
              Share your thoughts on existing development projects and suggest improvements for future initiatives.
            </p>
            <Link 
              to="/feedback" 
              className="inline-flex items-center text-primary-600 hover:text-primary-800"
            >
              Give Feedback <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
      
      {/* Community engagement metrics */}
      <section className="bg-gray-100 py-12 px-6 rounded-xl">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-900">Community Impact Dashboard</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            See how citizen participation is making a difference in our city development.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white rounded-lg shadow-sm p-6 text-center">
            <div className="p-3 rounded-full bg-blue-100 text-blue-600 w-fit mx-auto mb-4">
              <Users className="h-6 w-6" />
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-2">12,458</div>
            <p className="text-gray-600">Active Participants</p>
          </div>
          
          <div className="bg-white rounded-lg shadow-sm p-6 text-center">
            <div className="p-3 rounded-full bg-green-100 text-green-600 w-fit mx-auto mb-4">
              <CheckSquare className="h-6 w-6" />
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-2">4,721</div>
            <p className="text-gray-600">Votes Cast</p>
          </div>
          
          <div className="bg-white rounded-lg shadow-sm p-6 text-center">
            <div className="p-3 rounded-full bg-yellow-100 text-yellow-600 w-fit mx-auto mb-4">
              <AlertTriangle className="h-6 w-6" />
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-2">893</div>
            <p className="text-gray-600">Issues Resolved</p>
          </div>
          
          <div className="bg-white rounded-lg shadow-sm p-6 text-center">
            <div className="p-3 rounded-full bg-purple-100 text-purple-600 w-fit mx-auto mb-4">
              <TrendingUp className="h-6 w-6" />
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-2">68%</div>
            <p className="text-gray-600">Increase in Engagement</p>
          </div>
        </div>
      </section>
      
      {/* Upcoming events */}
      <section>
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Upcoming Community Events</h2>
            <p className="text-gray-600 mt-2">
              Join us at these events to learn more and share your input.
            </p>
          </div>
          <Link 
            to="/events" 
            className="mt-4 md:mt-0 btn btn-outline text-primary-700 border-primary-300 hover:bg-primary-50"
          >
            View All Events
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: "Town Hall Meeting",
              description: "Discussion on the annual budget allocation for infrastructure development",
              date: "July 2, 2025",
              time: "6:00 PM - 8:00 PM",
              location: "City Hall, Main Auditorium"
            },
            {
              title: "Ward 3 Planning Workshop",
              description: "Collaborative session to identify key priorities for Ward 3 development",
              date: "July 15, 2025",
              time: "5:30 PM - 7:30 PM",
              location: "Community Center, Room 101"
            },
            {
              title: "Public Space Design Forum",
              description: "Help shape the redesign of Central Park and surrounding public spaces",
              date: "July 28, 2025",
              time: "4:00 PM - 6:00 PM",
              location: "Virtual Event (Zoom)"
            }
          ].map((event, index) => (
            <div key={index} className="card">
              <div className="p-3 rounded-full bg-primary-100 text-primary-600 w-fit mb-4">
                <Calendar className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{event.title}</h3>
              <p className="text-gray-600 mb-4">{event.description}</p>
              <div className="border-t border-gray-200 pt-4 mt-4">
                <div className="flex items-center text-gray-700 mb-2">
                  <span className="font-medium w-20">Date:</span> {event.date}
                </div>
                <div className="flex items-center text-gray-700 mb-2">
                  <span className="font-medium w-20">Time:</span> {event.time}
                </div>
                <div className="flex items-center text-gray-700">
                  <span className="font-medium w-20">Location:</span> {event.location}
                </div>
              </div>
              <div className="mt-4">
                <button className="btn btn-primary">Register to Attend</button>
              </div>
            </div>
          ))}
        </div>
      </section>
      
      {/* CTA section */}
      <section className="bg-gradient-to-r from-primary-700 to-primary-800 rounded-xl p-8 text-white text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Make a Difference?</h2>
        <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
          Join thousands of residents who are actively shaping the future of our city through the Integrated Development Plan.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            to="/register" 
            className="btn bg-white text-primary-800 hover:bg-gray-100"
          >
            Create an Account
          </Link>
          <Link 
            to="/about" 
            className="btn bg-transparent border border-white text-white hover:bg-white/10"
          >
            Learn More
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage;