import { useState, useEffect } from 'react';
import {
  BarChart3, Users, AlertTriangle, MessageSquare,
  Calendar, FileText, ChevronRight, ArrowUpRight,
  TrendingUp, TrendingDown
} from 'lucide-react';
import { format } from 'date-fns';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip,
  ResponsiveContainer, LineChart, Line
} from 'recharts';

const DashboardPage = () => {
  const [dateRange, setDateRange] = useState('week');
  const [selectedMetric, setSelectedMetric] = useState('engagement');

  useEffect(() => {
    document.title = 'Ward Official Dashboard | CityPlan';
  }, []);

  // Mock data for demonstration
  const metrics = {
    totalResidents: 42750,
    activeUsers: 12458,
    openIssues: 47,
    resolvedIssues: 893,
    newFeedback: 156,
    priorityVotes: 4721,
    engagementRate: 29.2,
    responseRate: 94.5
  };

  const issueData = [
    { month: 'Jan', infrastructure: 45, services: 32, safety: 28, environment: 15 },
    { month: 'Feb', infrastructure: 38, services: 28, safety: 24, environment: 18 },
    { month: 'Mar', infrastructure: 42, services: 35, safety: 31, environment: 22 },
    { month: 'Apr', infrastructure: 40, services: 30, safety: 26, environment: 20 },
    { month: 'May', infrastructure: 35, services: 25, safety: 22, environment: 16 },
    { month: 'Jun', infrastructure: 48, services: 38, safety: 34, environment: 25 }
  ];

  const engagementData = [
    { date: '2025-01', value: 2400 },
    { date: '2025-02', value: 3600 },
    { date: '2025-03', value: 3200 },
    { date: '2025-04', value: 4500 },
    { date: '2025-05', value: 4200 },
    { date: '2025-06', value: 5100 }
  ];

  const recentActivities = [
    {
      id: 1,
      type: 'issue',
      title: 'Pothole repair on Main Street completed',
      date: '2 hours ago',
      status: 'completed'
    },
    {
      id: 2,
      type: 'feedback',
      title: 'Community center proposal feedback reviewed',
      date: '4 hours ago',
      status: 'reviewed'
    },
    {
      id: 3,
      type: 'priority',
      title: 'New park development priority approved',
      date: '1 day ago',
      status: 'approved'
    }
  ];

  const upcomingTasks = [
    {
      id: 1,
      title: 'Monthly Ward Committee Meeting',
      date: '2025-03-15',
      time: '14:00',
      type: 'meeting'
    },
    {
      id: 2,
      title: 'Infrastructure Report Review',
      date: '2025-03-18',
      time: '10:00',
      type: 'review'
    },
    {
      id: 3,
      title: 'Community Feedback Session',
      date: '2025-03-20',
      time: '16:00',
      type: 'engagement'
    }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Ward Official Dashboard</h1>
          <p className="mt-1 text-sm text-gray-500">
            Overview and management of Ward 3 activities and engagement
          </p>
        </div>
        <div className="flex items-center space-x-3">
          <select
            className="input"
            value={dateRange}
            onChange={(e) => setDateRange(e.target.value)}
          >
            <option value="week">Last 7 Days</option>
            <option value="month">Last 30 Days</option>
            <option value="quarter">Last Quarter</option>
            <option value="year">Last Year</option>
          </select>
          <button className="btn btn-primary">
            Generate Report
          </button>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex items-center justify-between">
            <div className="p-3 rounded-full bg-primary-100 text-primary-600">
              <Users className="h-6 w-6" />
            </div>
            <span className="text-sm font-medium text-gray-400">Total Residents</span>
          </div>
          <div className="mt-4">
            <h3 className="text-2xl font-bold text-gray-900">
              {metrics.totalResidents.toLocaleString()}
            </h3>
            <p className="mt-1 text-sm text-green-600 flex items-center">
              <TrendingUp className="h-4 w-4 mr-1" />
              +2.5% from last month
            </p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex items-center justify-between">
            <div className="p-3 rounded-full bg-accent-100 text-accent-600">
              <AlertTriangle className="h-6 w-6" />
            </div>
            <span className="text-sm font-medium text-gray-400">Open Issues</span>
          </div>
          <div className="mt-4">
            <h3 className="text-2xl font-bold text-gray-900">{metrics.openIssues}</h3>
            <p className="mt-1 text-sm text-red-600 flex items-center">
              <TrendingUp className="h-4 w-4 mr-1" />
              +12% from last week
            </p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex items-center justify-between">
            <div className="p-3 rounded-full bg-green-100 text-green-600">
              <MessageSquare className="h-6 w-6" />
            </div>
            <span className="text-sm font-medium text-gray-400">Response Rate</span>
          </div>
          <div className="mt-4">
            <h3 className="text-2xl font-bold text-gray-900">{metrics.responseRate}%</h3>
            <p className="mt-1 text-sm text-green-600 flex items-center">
              <TrendingUp className="h-4 w-4 mr-1" />
              +5.2% from target
            </p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex items-center justify-between">
            <div className="p-3 rounded-full bg-purple-100 text-purple-600">
              <BarChart3 className="h-6 w-6" />
            </div>
            <span className="text-sm font-medium text-gray-400">Engagement Rate</span>
          </div>
          <div className="mt-4">
            <h3 className="text-2xl font-bold text-gray-900">{metrics.engagementRate}%</h3>
            <p className="mt-1 text-sm text-green-600 flex items-center">
              <TrendingUp className="h-4 w-4 mr-1" />
              +3.1% from last month
            </p>
          </div>
        </div>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold text-gray-900">Issues by Category</h2>
            <select
              className="input"
              value={selectedMetric}
              onChange={(e) => setSelectedMetric(e.target.value)}
            >
              <option value="daily">Daily</option>
              <option value="weekly">Weekly</option>
              <option value="monthly">Monthly</option>
            </select>
          </div>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={issueData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="infrastructure" fill="#3B82F6" />
                <Bar dataKey="services" fill="#10B981" />
                <Bar dataKey="safety" fill="#F59E0B" />
                <Bar dataKey="environment" fill="#6366F1" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold text-gray-900">Community Engagement</h2>
            <button className="text-primary-600 hover:text-primary-800 text-sm font-medium">
              View Details
            </button>
          </div>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={engagementData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis
                  dataKey="date"
                  tickFormatter={(value) => format(new Date(value), 'MMM')}
                />
                <YAxis />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="value"
                  stroke="#3B82F6"
                  strokeWidth={2}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Recent Activities & Tasks */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow-sm">
          <div className="p-6 border-b border-gray-200">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold text-gray-900">Recent Activities</h2>
              <button className="text-primary-600 hover:text-primary-800 text-sm font-medium flex items-center">
                View All
                <ArrowUpRight className="ml-1 h-4 w-4" />
              </button>
            </div>
          </div>
          <div className="divide-y divide-gray-200">
            {recentActivities.map((activity) => (
              <div key={activity.id} className="p-6 hover:bg-gray-50">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className={`p-2 rounded-full
                      ${activity.type === 'issue'
                        ? 'bg-accent-100 text-accent-600'
                        : activity.type === 'feedback'
                        ? 'bg-green-100 text-green-600'
                        : 'bg-purple-100 text-purple-600'
                      }`}
                    >
                      {activity.type === 'issue' ? (
                        <AlertTriangle className="h-4 w-4" />
                      ) : activity.type === 'feedback' ? (
                        <MessageSquare className="h-4 w-4" />
                      ) : (
                        <BarChart3 className="h-4 w-4" />
                      )}
                    </div>
                    <div>
                      <h3 className="text-sm font-medium text-gray-900">
                        {activity.title}
                      </h3>
                      <p className="text-sm text-gray-500">{activity.date}</p>
                    </div>
                  </div>
                  <span className={`text-xs font-medium px-2.5 py-0.5 rounded-full
                    ${activity.status === 'completed'
                      ? 'bg-green-100 text-green-800'
                      : activity.status === 'reviewed'
                      ? 'bg-blue-100 text-blue-800'
                      : 'bg-purple-100 text-purple-800'
                    }`}
                  >
                    {activity.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm">
          <div className="p-6 border-b border-gray-200">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold text-gray-900">Upcoming Tasks</h2>
              <button className="text-primary-600 hover:text-primary-800 text-sm font-medium flex items-center">
                View Calendar
                <ArrowUpRight className="ml-1 h-4 w-4" />
              </button>
            </div>
          </div>
          <div className="divide-y divide-gray-200">
            {upcomingTasks.map((task) => (
              <div key={task.id} className="p-6 hover:bg-gray-50">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className={`p-2 rounded-full
                      ${task.type === 'meeting'
                        ? 'bg-primary-100 text-primary-600'
                        : task.type === 'review'
                        ? 'bg-purple-100 text-purple-600'
                        : 'bg-green-100 text-green-600'
                      }`}
                    >
                      {task.type === 'meeting' ? (
                        <Users className="h-4 w-4" />
                      ) : task.type === 'review' ? (
                        <FileText className="h-4 w-4" />
                      ) : (
                        <MessageSquare className="h-4 w-4" />
                      )}
                    </div>
                    <div>
                      <h3 className="text-sm font-medium text-gray-900">
                        {task.title}
                      </h3>
                      <p className="text-sm text-gray-500">
                        {format(new Date(task.date), 'MMM d, yyyy')} at {task.time}
                      </p>
                    </div>
                  </div>
                  <button className="text-gray-400 hover:text-gray-500">
                    <ChevronRight className="h-5 w-5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;