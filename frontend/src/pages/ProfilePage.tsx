import { useState, useEffect } from 'react';
import { 
  User, MapPin, Bell, Shield, FileText, 
  Settings, LogOut, ChevronRight 
} from 'lucide-react';

const ProfilePage = () => {
  const [activeTab, setActiveTab] = useState('profile');
  
  // Update page title
  useEffect(() => {
    document.title = 'My Profile | CityPlan';
  }, []);
  
  // Tabs for profile page
  const tabs = [
    { id: 'profile', label: 'Profile', icon: <User className="h-5 w-5" /> },
    { id: 'activities', label: 'My Activities', icon: <FileText className="h-5 w-5" /> },
    { id: 'notifications', label: 'Notifications', icon: <Bell className="h-5 w-5" /> },
    { id: 'settings', label: 'Settings', icon: <Settings className="h-5 w-5" /> }
  ];
  
  // Mock user data
  const userData = {
    name: 'Sarah Johnson',
    email: 'sarah.johnson@example.com',
    ward: '3',
    joinDate: 'March 15, 2025',
    avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    address: '123 Maple Street, Oakridge',
    phone: '(555) 123-4567',
    notifications: {
      email: true,
      sms: false,
      push: true
    },
    activities: [
      { 
        type: 'issue', 
        title: 'Reported pothole on Main Street', 
        date: '2 days ago',
        status: 'in-progress'
      },
      { 
        type: 'vote', 
        title: 'Voted on Ward 3 park renovation priority', 
        date: '1 week ago',
        status: 'completed'
      },
      { 
        type: 'feedback', 
        title: 'Provided feedback on community center proposal', 
        date: '2 weeks ago',
        status: 'reviewed'
      }
    ],
    recentNotifications: [
      {
        id: 1,
        title: 'Issue Status Update',
        message: 'Your reported pothole has been scheduled for repair next week.',
        date: '6 hours ago',
        read: false
      },
      {
        id: 2,
        title: 'Priority Voting Results',
        message: 'The Ward 3 park renovation has been approved based on community votes.',
        date: '2 days ago',
        read: true
      },
      {
        id: 3,
        title: 'New Development Plan',
        message: 'A new development plan has been proposed for your neighborhood. Review and provide feedback.',
        date: '5 days ago',
        read: true
      }
    ]
  };

  return (
    <div className="space-y-8 animate-fade-in">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">My Profile</h1>
        <p className="mt-2 text-gray-600">
          Manage your account, view your activities, and customize your notification preferences.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* Sidebar */}
        <div className="md:col-span-1">
          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            {/* User info */}
            <div className="p-6 text-center border-b border-gray-200">
              <div className="relative mx-auto h-24 w-24 rounded-full overflow-hidden mb-4">
                <img 
                  src={userData.avatar} 
                  alt={userData.name} 
                  className="h-full w-full object-cover"
                />
                <button className="absolute bottom-0 right-0 p-1 rounded-full bg-primary-600 text-white">
                  <User className="h-4 w-4" />
                </button>
              </div>
              <h2 className="text-xl font-semibold text-gray-900">{userData.name}</h2>
              <div className="flex items-center justify-center mt-1 text-sm text-gray-500">
                <MapPin className="h-4 w-4 mr-1" />
                Ward {userData.ward}
              </div>
              <p className="mt-1 text-sm text-gray-500">
                Member since {userData.joinDate}
              </p>
            </div>
            
            {/* Navigation tabs */}
            <nav className="p-2">
              <ul className="space-y-1">
                {tabs.map(tab => (
                  <li key={tab.id}>
                    <button
                      className={`w-full flex items-center px-3 py-2 text-sm rounded-md transition ${
                        activeTab === tab.id
                          ? 'bg-primary-50 text-primary-700 font-medium'
                          : 'text-gray-700 hover:bg-gray-100'
                      }`}
                      onClick={() => setActiveTab(tab.id)}
                    >
                      <span className={`mr-3 ${
                        activeTab === tab.id ? 'text-primary-600' : 'text-gray-400'
                      }`}>
                        {tab.icon}
                      </span>
                      {tab.label}
                    </button>
                  </li>
                ))}
              </ul>
              
              <div className="mt-6 pt-6 border-t border-gray-200">
                <button className="w-full flex items-center px-3 py-2 text-sm rounded-md text-gray-700 hover:bg-gray-100 transition">
                  <span className="mr-3 text-gray-400">
                    <Shield className="h-5 w-5" />
                  </span>
                  Privacy Policy
                </button>
                <button className="w-full flex items-center px-3 py-2 text-sm rounded-md text-red-600 hover:bg-red-50 transition">
                  <span className="mr-3 text-red-500">
                    <LogOut className="h-5 w-5" />
                  </span>
                  Log Out
                </button>
              </div>
            </nav>
          </div>
        </div>
        
        {/* Main content */}
        <div className="md:col-span-3">
          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            {/* Profile tab */}
            {activeTab === 'profile' && (
              <div className="p-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-6">Personal Information</h2>
                
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="label" htmlFor="name">Full Name</label>
                      <input 
                        type="text" 
                        id="name" 
                        className="input w-full" 
                        value={userData.name}
                        readOnly
                      />
                    </div>
                    <div>
                      <label className="label" htmlFor="email">Email Address</label>
                      <input 
                        type="email" 
                        id="email" 
                        className="input w-full" 
                        value={userData.email}
                        readOnly
                      />
                    </div>
                    <div>
                      <label className="label" htmlFor="phone">Phone Number</label>
                      <input 
                        type="tel" 
                        id="phone" 
                        className="input w-full" 
                        value={userData.phone}
                        readOnly
                      />
                    </div>
                    <div>
                      <label className="label" htmlFor="ward">Ward</label>
                      <input 
                        type="text" 
                        id="ward" 
                        className="input w-full" 
                        value={userData.ward}
                        readOnly
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="label" htmlFor="address">Address</label>
                    <input 
                      type="text" 
                      id="address" 
                      className="input w-full" 
                      value={userData.address}
                      readOnly
                    />
                  </div>
                  
                  <div className="flex justify-end">
                    <button className="btn btn-primary">
                      Edit Profile
                    </button>
                  </div>
                </div>
                
                <hr className="my-8 border-gray-200" />
                
                <h2 className="text-xl font-semibold text-gray-900 mb-6">Account Security</h2>
                
                <div className="space-y-6">
                  <div>
                    <label className="label" htmlFor="password">Password</label>
                    <input 
                      type="password" 
                      id="password" 
                      className="input w-full" 
                      value="••••••••"
                      readOnly
                    />
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <input
                        id="twoFactor"
                        name="twoFactor"
                        type="checkbox"
                        className="h-4 w-4 rounded border-gray-300 text-primary-600 focus:ring-primary-500"
                        checked={true}
                        readOnly
                      />
                    </div>
                    <div className="ml-3">
                      <label htmlFor="twoFactor" className="text-sm font-medium text-gray-700">
                        Enable two-factor authentication
                      </label>
                      <p className="text-sm text-gray-500">
                        Add an extra layer of security to your account by requiring a verification code when logging in.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex justify-end">
                    <button className="btn btn-primary">
                      Update Security Settings
                    </button>
                  </div>
                </div>
              </div>
            )}
            
            {/* Activities tab */}
            {activeTab === 'activities' && (
              <div className="p-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-6">My Activities</h2>
                
                <div className="space-y-6">
                  <div className="overflow-hidden bg-white shadow-sm sm:rounded-md">
                    <ul className="divide-y divide-gray-200">
                      {userData.activities.map((activity, index) => (
                        <li key={index}>
                          <a href="#" className="block hover:bg-gray-50">
                            <div className="px-4 py-4 sm:px-6">
                              <div className="flex items-center justify-between">
                                <p className="truncate text-sm font-medium text-gray-900">
                                  {activity.title}
                                </p>
                                <div className="ml-2 flex flex-shrink-0">
                                  <span className={`inline-flex rounded-full px-2 text-xs font-semibold leading-5 ${
                                    activity.status === 'in-progress' ? 'bg-blue-100 text-blue-800' :
                                    activity.status === 'completed' ? 'bg-green-100 text-green-800' :
                                    'bg-purple-100 text-purple-800'
                                  }`}>
                                    {activity.status === 'in-progress' ? 'In Progress' :
                                     activity.status === 'completed' ? 'Completed' :
                                     'Reviewed'}
                                  </span>
                                </div>
                              </div>
                              <div className="mt-2 sm:flex sm:justify-between">
                                <div className="sm:flex">
                                  <p className="flex items-center text-sm text-gray-500">
                                    {activity.type === 'issue' ? (
                                      <AlertTriangle className="mr-1.5 h-4 w-4 flex-shrink-0 text-gray-400" />
                                    ) : activity.type === 'vote' ? (
                                      <ThumbsUp className="mr-1.5 h-4 w-4 flex-shrink-0 text-gray-400" />
                                    ) : (
                                      <MessageSquare className="mr-1.5 h-4 w-4 flex-shrink-0 text-gray-400" />
                                    )}
                                    {activity.type.charAt(0).toUpperCase() + activity.type.slice(1)}
                                  </p>
                                </div>
                                <div className="mt-2 flex items-center text-sm text-gray-500 sm:mt-0">
                                  <Calendar className="mr-1.5 h-4 w-4 flex-shrink-0 text-gray-400" />
                                  <p>{activity.date}</p>
                                </div>
                              </div>
                            </div>
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex justify-center">
                    <button className="btn btn-outline">
                      View All Activities
                    </button>
                  </div>
                </div>
                
                <hr className="my-8 border-gray-200" />
                
                <h2 className="text-xl font-semibold text-gray-900 mb-6">Participation Metrics</h2>
                
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                  <div className="bg-gray-50 p-4 rounded-md">
                    <h3 className="text-sm font-medium text-gray-500 mb-1">Issues Reported</h3>
                    <p className="text-2xl font-bold text-gray-900">7</p>
                    <div className="mt-1 text-xs text-gray-500">
                      5 resolved, 2 in progress
                    </div>
                  </div>
                  
                  <div className="bg-gray-50 p-4 rounded-md">
                    <h3 className="text-sm font-medium text-gray-500 mb-1">Priorities Voted</h3>
                    <p className="text-2xl font-bold text-gray-900">12</p>
                    <div className="mt-1 text-xs text-gray-500">
                      4 implemented, 8 pending
                    </div>
                  </div>
                  
                  <div className="bg-gray-50 p-4 rounded-md">
                    <h3 className="text-sm font-medium text-gray-500 mb-1">Feedback Provided</h3>
                    <p className="text-2xl font-bold text-gray-900">5</p>
                    <div className="mt-1 text-xs text-gray-500">
                      All acknowledged
                    </div>
                  </div>
                </div>
              </div>
            )}
            
            {/* Notifications tab */}
            {activeTab === 'notifications' && (
              <div className="p-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-6">Notifications</h2>
                
                <div className="space-y-6">
                  <div className="overflow-hidden bg-white shadow-sm sm:rounded-md">
                    <ul className="divide-y divide-gray-200">
                      {userData.recentNotifications.map((notification) => (
                        <li key={notification.id} className={notification.read ? '' : 'bg-primary-50'}>
                          <a href="#" className="block hover:bg-gray-50">
                            <div className="px-4 py-4 sm:px-6">
                              <div className="flex items-center justify-between">
                                <p className={`truncate text-sm font-medium ${notification.read ? 'text-gray-900' : 'text-primary-800'}`}>
                                  {notification.title}
                                </p>
                                <div className="ml-2 flex flex-shrink-0">
                                  {!notification.read && (
                                    <span className="inline-flex rounded-full bg-primary-100 px-2 text-xs font-semibold leading-5 text-primary-800">
                                      New
                                    </span>
                                  )}
                                </div>
                              </div>
                              <p className="mt-1 text-sm text-gray-600">
                                {notification.message}
                              </p>
                              <div className="mt-2 flex items-center justify-between">
                                <p className="text-xs text-gray-500">
                                  {notification.date}
                                </p>
                                <div>
                                  <button className="text-xs text-primary-600 hover:text-primary-800">
                                    Mark as {notification.read ? 'unread' : 'read'}
                                  </button>
                                </div>
                              </div>
                            </div>
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex justify-center">
                    <button className="btn btn-outline">
                      View All Notifications
                    </button>
                  </div>
                </div>
                
                <hr className="my-8 border-gray-200" />
                
                <h2 className="text-xl font-semibold text-gray-900 mb-6">Notification Preferences</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <input
                        id="emailNotif"
                        name="emailNotif"
                        type="checkbox"
                        className="h-4 w-4 rounded border-gray-300 text-primary-600 focus:ring-primary-500"
                        checked={userData.notifications.email}
                        readOnly
                      />
                    </div>
                    <div className="ml-3">
                      <label htmlFor="emailNotif" className="text-sm font-medium text-gray-700">
                        Email Notifications
                      </label>
                      <p className="text-sm text-gray-500">
                        Receive updates on your reported issues, priority votes, and municipal announcements via email.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <input
                        id="smsNotif"
                        name="smsNotif"
                        type="checkbox"
                        className="h-4 w-4 rounded border-gray-300 text-primary-600 focus:ring-primary-500"
                        checked={userData.notifications.sms}
                        readOnly
                      />
                    </div>
                    <div className="ml-3">
                      <label htmlFor="smsNotif" className="text-sm font-medium text-gray-700">
                        SMS Notifications
                      </label>
                      <p className="text-sm text-gray-500">
                        Receive text message alerts for urgent updates and important announcements.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <input
                        id="pushNotif"
                        name="pushNotif"
                        type="checkbox"
                        className="h-4 w-4 rounded border-gray-300 text-primary-600 focus:ring-primary-500"
                        checked={userData.notifications.push}
                        readOnly
                      />
                    </div>
                    <div className="ml-3">
                      <label htmlFor="pushNotif" className="text-sm font-medium text-gray-700">
                        Push Notifications
                      </label>
                      <p className="text-sm text-gray-500">
                        Receive browser notifications when you're using the IDP portal.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex justify-end">
                    <button className="btn btn-primary">
                      Update Preferences
                    </button>
                  </div>
                </div>
              </div>
            )}
            
            {/* Settings tab */}
            {activeTab === 'settings' && (
              <div className="p-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-6">Account Settings</h2>
                
                <div className="space-y-4">
                  <a href="#" className="flex items-center justify-between p-4 rounded-md hover:bg-gray-50 transition">
                    <div>
                      <h3 className="text-sm font-medium text-gray-900">Language Preferences</h3>
                      <p className="text-sm text-gray-500">
                        Change the language of the portal interface
                      </p>
                    </div>
                    <ChevronRight className="h-5 w-5 text-gray-400" />
                  </a>
                  
                  <a href="#" className="flex items-center justify-between p-4 rounded-md hover:bg-gray-50 transition">
                    <div>
                      <h3 className="text-sm font-medium text-gray-900">Accessibility Settings</h3>
                      <p className="text-sm text-gray-500">
                        Customize your experience for better accessibility
                      </p>
                    </div>
                    <ChevronRight className="h-5 w-5 text-gray-400" />
                  </a>
                  
                  <a href="#" className="flex items-center justify-between p-4 rounded-md hover:bg-gray-50 transition">
                    <div>
                      <h3 className="text-sm font-medium text-gray-900">Privacy Settings</h3>
                      <p className="text-sm text-gray-500">
                        Control how your information is used and shared
                      </p>
                    </div>
                    <ChevronRight className="h-5 w-5 text-gray-400" />
                  </a>
                  
                  <a href="#" className="flex items-center justify-between p-4 rounded-md hover:bg-gray-50 transition">
                    <div>
                      <h3 className="text-sm font-medium text-gray-900">Data Export</h3>
                      <p className="text-sm text-gray-500">
                        Download a copy of your data and activity history
                      </p>
                    </div>
                    <ChevronRight className="h-5 w-5 text-gray-400" />
                  </a>
                </div>
                
                <hr className="my-8 border-gray-200" />
                
                <h2 className="text-xl font-semibold text-gray-900 mb-6">Danger Zone</h2>
                
                <div className="bg-red-50 border border-red-200 rounded-md p-4">
                  <h3 className="text-sm font-medium text-red-800">Delete Account</h3>
                  <p className="mt-1 text-sm text-red-700">
                    Permanently delete your account and all associated data. This action cannot be undone.
                  </p>
                  <div className="mt-4">
                    <button className="bg-white border border-red-600 text-red-600 hover:bg-red-50 px-4 py-2 text-sm font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2">
                      Delete Account
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;