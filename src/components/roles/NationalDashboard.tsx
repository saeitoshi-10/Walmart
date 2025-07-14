import React, { useState } from 'react';
import { ViewType } from '../../App';
import { TrendingUp, TrendingDown, Globe, DollarSign, AlertTriangle, CheckCircle, Clock, MapPin, Brain, BarChart3, X } from 'lucide-react';

interface NationalDashboardProps {
  currentView: ViewType;
  onNavigate: (view: ViewType) => void;
}

export const NationalDashboard: React.FC<NationalDashboardProps> = ({ currentView, onNavigate }) => {
  // Orchestration state and data for AI Orchestration view
  const [selectedOrchestration, setSelectedOrchestration] = useState<number | null>(null);
  const orchestrations = [
    { title: 'Summer Product Surge', regions: 8, stores: 1247, status: 'Pending' },
    { title: 'Hurricane Prep - Southeast', regions: 3, stores: 456, status: 'Active' },
    { title: 'Back-to-School Rollout', regions: 12, stores: 2891, status: 'Completed' },
  ];
  const orchestrationDetails = [
    { id: 'ORCH-001', name: 'Sample Orchestration 1', description: 'This pipeline handles product surge scenarios.', status: 'Pending', createdDate: '2025-07-01', owner: 'Team 1', region: 'Region 1' },
    { id: 'ORCH-002', name: 'Sample Orchestration 2', description: 'This pipeline handles hurricane preparation.', status: 'Active', createdDate: '2025-07-02', owner: 'Team 2', region: 'Region 2' },
    { id: 'ORCH-003', name: 'Sample Orchestration 3', description: 'This pipeline handles back-to-school rollout.', status: 'Completed', createdDate: '2025-07-03', owner: 'Team 3', region: 'Region 3' },
  ];
  
  if (currentView === 'analytics') {
    return (
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">National Market Analytics</h1>
          <p className="text-gray-600">Comprehensive market intelligence across all regions and product categories</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Top Performing Regions</h3>
            <div className="space-y-4">
              {[
                { region: 'Southeast', revenue: '$2.4B', growth: '+12.3%', stores: 847 },
                { region: 'Southwest', revenue: '$2.1B', growth: '+8.7%', stores: 723 },
                { region: 'Northeast', revenue: '$1.9B', growth: '+15.2%', stores: 612 },
                { region: 'Midwest', revenue: '$1.7B', growth: '+6.4%', stores: 891 },
              ].map((region, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div>
                    <div className="font-medium text-gray-900">{region.region}</div>
                    <div className="text-sm text-gray-600">{region.stores} stores</div>
                  </div>
                  <div className="text-right">
                    <div className="font-bold text-gray-900">{region.revenue}</div>
                    <div className="text-sm text-green-600 font-medium">{region.growth}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Category Performance</h3>
            <div className="space-y-4">
              {[
                { category: 'Grocery', share: '34%', trend: 'up', value: '$8.2B' },
                { category: 'Health & Beauty', share: '18%', trend: 'up', value: '$4.3B' },
                { category: 'Electronics', share: '16%', trend: 'down', value: '$3.8B' },
                { category: 'Apparel', share: '12%', trend: 'up', value: '$2.9B' },
              ].map((category, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div>
                      <div className="font-medium text-gray-900">{category.category}</div>
                      <div className="text-sm text-gray-600">{category.share} market share</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="font-bold text-gray-900">{category.value}</span>
                    {category.trend === 'up' ? 
                      <TrendingUp className="text-green-500" size={16} /> : 
                      <TrendingDown className="text-red-500" size={16} />
                    }
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">National Supply Chain Health</h3>
          <div className="h-64 bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg flex items-center justify-center">
            <div className="text-center">
              <div className="text-6xl font-bold text-blue-600 mb-2">96.8%</div>
              <div className="text-gray-600 text-lg">Overall Efficiency Score</div>
              <div className="text-sm text-gray-500 mt-2">+3.2% from last quarter</div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (currentView === 'trends') {
    return (
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">National Social Intelligence</h1>
          <p className="text-gray-600">Real-time social media insights driving nationwide inventory decisions</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {[
            { trend: '#SummerReady', mentions: '2.4M', impact: 'High', regions: ['Southeast', 'Southwest'] },
            { trend: '#BackToSchool', mentions: '1.8M', impact: 'Medium', regions: ['All Regions'] },
            { trend: '#HealthyLiving', mentions: '3.1M', impact: 'High', regions: ['Northeast', 'West'] },
          ].map((trend, index) => (
            <div key={index} className="bg-white rounded-lg shadow p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold text-gray-900">{trend.trend}</h3>
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                  trend.impact === 'High' ? 'bg-red-100 text-red-700' : 'bg-yellow-100 text-yellow-700'
                }`}>
                  {trend.impact} Impact
                </span>
              </div>
              <div className="text-2xl font-bold text-blue-600 mb-2">{trend.mentions}</div>
              <div className="text-sm text-gray-600">Mentions nationwide</div>
              <div className="mt-3">
                <div className="text-xs text-gray-500 mb-1">Affected Regions:</div>
                <div className="flex flex-wrap gap-1">
                  {trend.regions.map((region, idx) => (
                    <span key={idx} className="bg-blue-100 text-blue-700 px-2 py-1 rounded-full text-xs">
                      {region}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Strategic Recommendations</h3>
          <div className="space-y-4">
            <div className="bg-red-50 border border-red-200 rounded-lg p-4">
              <div className="flex items-center space-x-2 mb-2">
                <AlertTriangle className="text-red-500" size={16} />
                <span className="font-medium text-red-900">Critical Action Required</span>
              </div>
              <p className="text-red-800">
                Nationwide sunscreen shortage predicted due to #SummerReady trend. Recommend 200% inventory increase across all regions within 48 hours.
              </p>
            </div>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <div className="flex items-center space-x-2 mb-2">
                <TrendingUp className="text-blue-500" size={16} />
                <span className="font-medium text-blue-900">Market Opportunity</span>
              </div>
              <p className="text-blue-800">
                #HealthyLiving trend creating 40% increase in organic product demand. Consider expanding organic SKUs in Northeast and West regions.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (currentView === 'orchestration') {
    return (
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">National AI Orchestration</h1>
          <p className="text-gray-600">Enterprise-wide supply chain automation and coordination</p>
        </div>

        <div className="mb-8 overflow-hidden">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Active Orchestrations</h3>
          {selectedOrchestration === null ? (
            <div className="space-y-8">
              {orchestrations.map((orchestration, index) => (
                <div key={index} className="border rounded-lg p-4 bg-white">
                  <div className="flex items-center justify-between mb-2">
                    <div className="font-medium text-gray-900">{orchestration.title}</div>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      orchestration.status === 'Active' ? 'bg-green-100 text-green-700' :
                      orchestration.status === 'Pending' ? 'bg-yellow-100 text-yellow-700' :
                      'bg-blue-100 text-blue-700'
                    }`}>{orchestration.status}</span>
                  </div>
                  <div className="text-sm text-gray-600">{orchestration.regions} regions • {orchestration.stores} stores</div>
                  <div className="flex justify-end mt-4">
                    <button onClick={() => setSelectedOrchestration(index)} className="text-blue-600 font-medium">Detail</button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="flex space-x-4">
              {/* Left pane: selected card */}
              <div className="w-3/5 border rounded-lg p-4 bg-white transition-all duration-300">
                {(() => {
                  const orchestration = orchestrations[selectedOrchestration];
                  return (
                    <>
                      <div className="flex items-center justify-between mb-2">
                        <div className="font-medium text-gray-900">{orchestration.title}</div>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                          orchestration.status === 'Active' ? 'bg-green-100 text-green-700' :
                          orchestration.status === 'Pending' ? 'bg-yellow-100 text-yellow-700' :
                          'bg-blue-100 text-blue-700'
                        }`}>{orchestration.status}</span>
                      </div>
                      <div className="text-sm text-gray-600">{orchestration.regions} regions • {orchestration.stores} stores</div>
                    </>
                  );
                })()}
              </div>
              {/* Right pane: detail panel */}
              <div className="w-2/5 bg-white shadow-lg rounded-lg p-6 z-20 transition-all duration-300 relative">
                <button onClick={() => setSelectedOrchestration(null)} className="absolute top-2 right-2 text-gray-500 hover:text-gray-800 z-30">
                  <X size={16} />
                </button>
                <div className="space-y-2">
                  {(() => {
                    const details = orchestrationDetails[selectedOrchestration];
                    return (
                      <>
                        <div><span className="font-medium">ID:</span> {details.id}</div>
                        <div><span className="font-medium">Name:</span> {details.name}</div>
                        <div><span className="font-medium">Description:</span> {details.description}</div>
                        <div><span className="font-medium">Status:</span> {details.status}</div>
                        <div><span className="font-medium">Created Date:</span> {details.createdDate}</div>
                        <div><span className="font-medium">Owner:</span> {details.owner}</div>
                        <div><span className="font-medium">Region:</span> {details.region}</div>
                      </>
                    );
                  })()}
                </div>
                {/* Action buttons */}
                <div className="mt-6 flex flex-col md:flex-row gap-2">
                  <button
                    onClick={() => console.log(`Approved ${orchestrationDetails[selectedOrchestration].id}`)}
                    className="flex-1 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium"
                  >
                    Approve
                  </button>
                  <button
                    onClick={() => console.log(`Disapproved ${orchestrationDetails[selectedOrchestration].id}`)}
                    className="flex-1 w-full bg-gray-200 text-gray-700 py-2 rounded-lg hover:bg-gray-300 transition-colors font-medium"
                  >
                    Disapprove
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }

  if (currentView === 'performance') {
    return (
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">National Performance Dashboard</h1>
          <p className="text-gray-600">Key performance indicators across all regions and stores</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          {[
            { title: 'Total Revenue', value: '$24.1B', change: '+8.3%', trend: 'up' },
            { title: 'Inventory Turnover', value: '12.4x', change: '+2.1x', trend: 'up' },
            { title: 'Waste Reduction', value: '18%', change: '+5%', trend: 'up' },
            { title: 'Customer Satisfaction', value: '94.2%', change: '+1.8%', trend: 'up' },
          ].map((metric, index) => (
            <div key={index} className="bg-white rounded-lg shadow p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">{metric.title}</p>
                  <p className="text-2xl font-bold text-gray-900">{metric.value}</p>
                </div>
                <div className="flex items-center space-x-1 text-green-600">
                  <TrendingUp size={20} />
                  <span className="text-sm font-medium">{metric.change}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Regional Performance Comparison</h3>
          <div className="h-64 bg-gray-100 rounded-lg flex items-center justify-center">
            <div className="text-center text-gray-600">
              <BarChart3 size={48} className="mx-auto mb-2" />
              <div>Regional Performance Chart</div>
              <div className="text-sm">Interactive visualization would appear here</div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Default overview
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">National Command Center</h1>
        <p className="text-gray-600">Enterprise-wide supply chain intelligence and coordination</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {[
          { title: 'Total Stores', value: '4,743', change: '+12', trend: 'up', icon: Globe },
          { title: 'Active Regions', value: '12', change: '0', trend: 'stable', icon: MapPin },
          { title: 'AI Predictions', value: '15,847', change: '+2,156', trend: 'up', icon: Brain },
          { title: 'Revenue Impact', value: '$2.1B', change: '+$340M', trend: 'up', icon: DollarSign },
        ].map((metric, index) => {
          const Icon = metric.icon;
          return (
            <div key={index} className="bg-white rounded-lg shadow p-6 hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">{metric.title}</p>
                  <p className="text-2xl font-bold text-gray-900">{metric.value}</p>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon className="text-blue-500" size={24} />
                  <div className={`flex items-center space-x-1 ${
                    metric.trend === 'up' ? 'text-green-600' : 'text-gray-600'
                  }`}>
                    {metric.trend === 'up' && <TrendingUp size={16} />}
                    <span className="text-sm font-medium">{metric.change}</span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Critical Alerts</h3>
          <div className="space-y-3">
            {[
              { type: 'urgent', message: 'Hurricane warning: Emergency restocking initiated for Southeast region', time: '5 min ago' },
              { type: 'success', message: 'AI orchestration completed: 2,847 stores restocked successfully', time: '1 hour ago' },
              { type: 'warning', message: 'Social trend alert: #SummerSkinCare trending nationwide (+340% mentions)', time: '2 hours ago' },
            ].map((alert, index) => (
              <div key={index} className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg">
                <div className="flex-shrink-0 mt-1">
                  {alert.type === 'urgent' && <AlertTriangle size={18} className="text-red-500" />}
                  {alert.type === 'success' && <CheckCircle size={18} className="text-green-500" />}
                  {alert.type === 'warning' && <Clock size={18} className="text-yellow-500" />}
                </div>
                <div className="flex-1">
                  <p className="text-sm text-gray-900">{alert.message}</p>
                  <p className="text-xs text-gray-500 mt-1">{alert.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
          <div className="space-y-3">
            <button
              onClick={() => onNavigate('analytics')}
              className="w-full bg-purple-600 text-white py-3 px-4 rounded-lg hover:bg-purple-700 transition-colors font-medium"
            >
              View National Market Analytics
            </button>
            <button
              onClick={() => onNavigate('trends')}
              className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors font-medium"
            >
              Monitor Social Intelligence
            </button>
            <button
              onClick={() => onNavigate('orchestration')}
              className="w-full bg-green-600 text-white py-3 px-4 rounded-lg hover:bg-green-700 transition-colors font-medium"
            >
              Manage AI Orchestration
            </button>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">National Supply Chain Health</h3>
        <div className="h-64 bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg flex items-center justify-center">
          <div className="text-center">
            <div className="text-6xl font-bold text-blue-600 mb-2">96.8%</div>
            <div className="text-gray-600 text-lg">Overall System Efficiency</div>
            <div className="text-sm text-gray-500 mt-2">Across all 4,743 stores nationwide</div>
          </div>
        </div>
      </div>
    </div>
  );
};