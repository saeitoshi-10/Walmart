import React from 'react';
import { ViewType } from '../App';
import { TrendingUp, TrendingDown, AlertTriangle, CheckCircle } from 'lucide-react';

interface DashboardOverviewProps {
  onNavigate: (view: ViewType) => void;
}

export const DashboardOverview: React.FC<DashboardOverviewProps> = ({ onNavigate }) => {
  const metrics = [
    { title: 'Total Stores', value: '4,743', change: '+12', trend: 'up' },
    { title: 'Active Predictions', value: '2,847', change: '+156', trend: 'up' },
    { title: 'Auto-Restocks Today', value: '1,234', change: '+89', trend: 'up' },
    { title: 'Trending Products', value: '127', change: '-23', trend: 'down' },
  ];

  const alerts = [
    { type: 'warning', message: 'High demand predicted for sunscreen in Florida region', time: '2 min ago' },
    { type: 'success', message: 'Auto-restock completed for 24 stores in Texas', time: '15 min ago' },
    { type: 'info', message: 'Social trend detected: "summer grilling" gaining momentum', time: '1 hour ago' },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Supply Chain Intelligence Dashboard</h1>
        <p className="text-gray-600">Real-time AI-powered inventory management across all Walmart locations</p>
      </div>

      {/* Metrics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {metrics.map((metric, index) => (
          <div key={index} className="bg-white rounded-lg shadow p-6 hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">{metric.title}</p>
                <p className="text-2xl font-bold text-gray-900">{metric.value}</p>
              </div>
              <div className={`flex items-center space-x-1 ${
                metric.trend === 'up' ? 'text-green-600' : 'text-red-600'
              }`}>
                {metric.trend === 'up' ? <TrendingUp size={20} /> : <TrendingDown size={20} />}
                <span className="text-sm font-medium">{metric.change}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
          <div className="space-y-3">
            <button
              onClick={() => onNavigate('demand')}
              className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors font-medium"
            >
              View Regional Demand Forecasts
            </button>
            <button
              onClick={() => onNavigate('restocking')}
              className="w-full bg-green-600 text-white py-3 px-4 rounded-lg hover:bg-green-700 transition-colors font-medium"
            >
              Manage Store Restocking
            </button>
            <button
              onClick={() => onNavigate('trends')}
              className="w-full bg-purple-600 text-white py-3 px-4 rounded-lg hover:bg-purple-700 transition-colors font-medium"
            >
              Monitor Social Trends
            </button>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Alerts</h3>
          <div className="space-y-3">
            {alerts.map((alert, index) => (
              <div key={index} className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg">
                <div className="flex-shrink-0 mt-1">
                  {alert.type === 'warning' && <AlertTriangle size={18} className="text-yellow-500" />}
                  {alert.type === 'success' && <CheckCircle size={18} className="text-green-500" />}
                  {alert.type === 'info' && <TrendingUp size={18} className="text-blue-500" />}
                </div>
                <div className="flex-1">
                  <p className="text-sm text-gray-900">{alert.message}</p>
                  <p className="text-xs text-gray-500 mt-1">{alert.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Performance Chart */}
      <div className="bg-white rounded-lg shadow p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Weekly Performance Overview</h3>
        <div className="h-64 bg-gray-100 rounded-lg flex items-center justify-center">
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-600 mb-2">94.7%</div>
            <div className="text-gray-600">Forecast Accuracy</div>
            <div className="text-sm text-gray-500 mt-2">+2.3% from last week</div>
          </div>
        </div>
      </div>
    </div>
  );
};