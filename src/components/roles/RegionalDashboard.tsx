import React, { useState } from 'react';
import { ViewType } from '../../App';
import { TrendingUp, TrendingDown, MapPin, Store, Package, Brain, AlertTriangle, CheckCircle, Target } from 'lucide-react';

interface RegionalDashboardProps {
  currentView: ViewType;
  onNavigate: (view: ViewType) => void;
}

export const RegionalDashboard: React.FC<RegionalDashboardProps> = ({ currentView, onNavigate }) => {
  const [selectedState, setSelectedState] = useState('florida');

  if (currentView === 'demand') {
    const states = [
      { id: 'florida', name: 'Florida', stores: 241, priority: 'high' },
      { id: 'georgia', name: 'Georgia', stores: 189, priority: 'medium' },
      { id: 'alabama', name: 'Alabama', stores: 156, priority: 'medium' },
      { id: 'south-carolina', name: 'South Carolina', stores: 134, priority: 'low' },
    ];

    const demandData = {
      florida: [
        { product: 'Sunscreen SPF 50+', demand: 15400, confidence: 94, trend: 'up' },
        { product: 'Cold Beverages', demand: 22100, confidence: 91, trend: 'up' },
        { product: 'Grilling Supplies', demand: 8200, confidence: 87, trend: 'up' },
      ],
      georgia: [
        { product: 'Sunscreen SPF 50+', demand: 12200, confidence: 89, trend: 'up' },
        { product: 'Cold Beverages', demand: 18900, confidence: 88, trend: 'up' },
        { product: 'Pool Supplies', demand: 6700, confidence: 85, trend: 'up' },
      ],
    };

    const currentData = demandData[selectedState] || demandData.florida;

    return (
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Regional Demand Forecasting</h1>
          <p className="text-gray-600">AI-powered demand predictions for Southeast region states</p>
        </div>

        <div className="bg-white rounded-lg shadow p-6 mb-8">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Select State</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {states.map((state) => (
              <button
                key={state.id}
                onClick={() => setSelectedState(state.id)}
                className={`text-left p-4 rounded-lg transition-colors border-2 ${
                  selectedState === state.id
                    ? 'bg-blue-100 border-blue-500 text-blue-700'
                    : 'bg-gray-50 hover:bg-gray-100 border-transparent'
                }`}
              >
                <div className="font-medium">{state.name}</div>
                <div className="text-sm text-gray-600">{state.stores} stores</div>
                <div className="mt-2">
                  <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${
                    state.priority === 'high' ? 'bg-red-100 text-red-700' :
                    state.priority === 'medium' ? 'bg-yellow-100 text-yellow-700' :
                    'bg-green-100 text-green-700'
                  }`}>
                    {state.priority} priority
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">7-Day Demand Forecast - {states.find(s => s.id === selectedState)?.name}</h3>
          <div className="space-y-4">
            {currentData.map((item, index) => (
              <div key={index} className="border rounded-lg p-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-3">
                    <Brain className="text-blue-500" size={20} />
                    <div className="font-medium text-gray-900">{item.product}</div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <TrendingUp className="text-green-500" size={16} />
                    <span className="text-green-600 font-medium">{item.confidence}% confidence</span>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-blue-50 rounded-lg p-3">
                    <div className="text-sm text-blue-600">Predicted Demand</div>
                    <div className="text-xl font-bold text-blue-900">{item.demand.toLocaleString()}</div>
                  </div>
                  <div className="bg-green-50 rounded-lg p-3">
                    <div className="text-sm text-green-600">Confidence Level</div>
                    <div className="text-xl font-bold text-green-900">{item.confidence}%</div>
                  </div>
                  <div className="bg-purple-50 rounded-lg p-3">
                    <div className="text-sm text-purple-600">Trend</div>
                    <div className="text-xl font-bold text-purple-900">Strong ↗</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (currentView === 'restocking') {
    return (
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Store Coordination Center</h1>
          <p className="text-gray-600">Coordinate restocking across all stores in Southeast region</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Priority Stores</h3>
            <div className="space-y-3">
              {[
                { store: 'Miami Beach Supercenter', id: '#1001', priority: 'urgent', items: 8 },
                { store: 'Orlando Central Store', id: '#1002', priority: 'high', items: 5 },
                { store: 'Tampa Bay Location', id: '#1003', priority: 'high', items: 6 },
                { store: 'Jacksonville North', id: '#1004', priority: 'medium', items: 3 },
              ].map((store, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div>
                    <div className="font-medium text-gray-900">{store.store}</div>
                    <div className="text-sm text-gray-600">{store.id}</div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="text-sm text-gray-600">{store.items} items needed</span>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      store.priority === 'urgent' ? 'bg-red-100 text-red-700' :
                      store.priority === 'high' ? 'bg-orange-100 text-orange-700' :
                      'bg-yellow-100 text-yellow-700'
                    }`}>
                      {store.priority}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Regional Inventory Status</h3>
            <div className="space-y-4">
              {[
                { category: 'Sunscreen Products', level: 23, status: 'critical' },
                { category: 'Cold Beverages', level: 67, status: 'low' },
                { category: 'Grilling Supplies', level: 84, status: 'good' },
                { category: 'Pool Supplies', level: 91, status: 'excellent' },
              ].map((item, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-gray-700">{item.category}</span>
                    <span className={`text-sm font-medium ${
                      item.status === 'critical' ? 'text-red-600' :
                      item.status === 'low' ? 'text-yellow-600' :
                      item.status === 'good' ? 'text-blue-600' :
                      'text-green-600'
                    }`}>
                      {item.level}% stocked
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className={`h-2 rounded-full ${
                        item.status === 'critical' ? 'bg-red-500' :
                        item.status === 'low' ? 'bg-yellow-500' :
                        item.status === 'good' ? 'bg-blue-500' :
                        'bg-green-500'
                      }`}
                      style={{ width: `${item.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Bulk Actions</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <button className="bg-red-600 text-white py-3 px-4 rounded-lg hover:bg-red-700 transition-colors font-medium">
              Emergency Restock All Critical Items
            </button>
            <button className="bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors font-medium">
              Schedule Regional Delivery
            </button>
            <button className="bg-green-600 text-white py-3 px-4 rounded-lg hover:bg-green-700 transition-colors font-medium">
              Generate Regional Report
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (currentView === 'trends') {
    return (
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Southeast Regional Trends</h1>
          <p className="text-gray-600">Social media and market trends specific to Southeast region</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Regional Trending Topics</h3>
            <div className="space-y-4">
              {[
                { trend: '#FloridaSummer', mentions: '456K', growth: '+89%', impact: 'High' },
                { trend: '#HurricanePrep', mentions: '234K', growth: '+156%', impact: 'Critical' },
                { trend: '#BeachReady', mentions: '189K', growth: '+67%', impact: 'Medium' },
              ].map((trend, index) => (
                <div key={index} className="border rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <div className="font-medium text-gray-900">{trend.trend}</div>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      trend.impact === 'Critical' ? 'bg-red-100 text-red-700' :
                      trend.impact === 'High' ? 'bg-orange-100 text-orange-700' :
                      'bg-yellow-100 text-yellow-700'
                    }`}>
                      {trend.impact}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">{trend.mentions} mentions</span>
                    <span className="text-sm font-medium text-green-600">{trend.growth}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Weather Impact Analysis</h3>
            <div className="space-y-4">
              <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                <div className="flex items-center space-x-2 mb-2">
                  <AlertTriangle className="text-red-500" size={16} />
                  <span className="font-medium text-red-900">Heat Wave Alert</span>
                </div>
                <p className="text-red-800 text-sm">
                  Temperatures reaching 98°F across Florida. Expect 200% increase in cooling product demand.
                </p>
              </div>
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                <div className="flex items-center space-x-2 mb-2">
                  <TrendingUp className="text-yellow-500" size={16} />
                  <span className="font-medium text-yellow-900">Seasonal Demand</span>
                </div>
                <p className="text-yellow-800 text-sm">
                  Memorial Day weekend approaching. Grilling and outdoor supplies demand increasing.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (currentView === 'performance') {
    return (
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Southeast Regional Performance</h1>
          <p className="text-gray-600">Performance metrics and KPIs for Southeast region</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          {[
            { title: 'Regional Revenue', value: '$2.4B', change: '+12.3%', trend: 'up' },
            { title: 'Store Performance', value: '94.2%', change: '+3.1%', trend: 'up' },
            { title: 'Inventory Accuracy', value: '97.8%', change: '+1.2%', trend: 'up' },
            { title: 'Customer Satisfaction', value: '96.1%', change: '+2.4%', trend: 'up' },
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
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Top Performing Stores</h3>
          <div className="space-y-3">
            {[
              { store: 'Miami Beach Supercenter', revenue: '$2.4M', growth: '+15.2%', rank: 1 },
              { store: 'Orlando Central Store', revenue: '$2.1M', growth: '+12.8%', rank: 2 },
              { store: 'Tampa Bay Location', revenue: '$1.9M', growth: '+11.4%', rank: 3 },
              { store: 'Jacksonville North', revenue: '$1.7M', growth: '+9.6%', rank: 4 },
            ].map((store, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                    {store.rank}
                  </div>
                  <div className="font-medium text-gray-900">{store.store}</div>
                </div>
                <div className="text-right">
                  <div className="font-bold text-gray-900">{store.revenue}</div>
                  <div className="text-sm text-green-600 font-medium">{store.growth}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // Default overview
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Southeast Regional Dashboard</h1>
        <p className="text-gray-600">Regional coordination for 847 stores across 4 states</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {[
          { title: 'Total Stores', value: '847', change: '+8', trend: 'up', icon: Store },
          { title: 'States Covered', value: '4', change: '0', trend: 'stable', icon: MapPin },
          { title: 'Active Predictions', value: '2,847', change: '+234', trend: 'up', icon: Brain },
          { title: 'Restock Requests', value: '156', change: '+23', trend: 'up', icon: Package },
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
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Regional Alerts</h3>
          <div className="space-y-3">
            {[
              { type: 'urgent', message: 'Heat wave warning: Sunscreen demand spike predicted in Florida', time: '10 min ago' },
              { type: 'success', message: 'Regional restocking completed for 89 stores in Georgia', time: '2 hours ago' },
              { type: 'warning', message: 'Hurricane season prep: Monitor coastal store inventory levels', time: '4 hours ago' },
            ].map((alert, index) => (
              <div key={index} className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg">
                <div className="flex-shrink-0 mt-1">
                  {alert.type === 'urgent' && <AlertTriangle size={18} className="text-red-500" />}
                  {alert.type === 'success' && <CheckCircle size={18} className="text-green-500" />}
                  {alert.type === 'warning' && <TrendingUp size={18} className="text-yellow-500" />}
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
              onClick={() => onNavigate('demand')}
              className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors font-medium"
            >
              View State Demand Forecasts
            </button>
            <button
              onClick={() => onNavigate('restocking')}
              className="w-full bg-green-600 text-white py-3 px-4 rounded-lg hover:bg-green-700 transition-colors font-medium"
            >
              Coordinate Store Restocking
            </button>
            <button
              onClick={() => onNavigate('trends')}
              className="w-full bg-purple-600 text-white py-3 px-4 rounded-lg hover:bg-purple-700 transition-colors font-medium"
            >
              Monitor Regional Trends
            </button>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Regional Performance Overview</h3>
        <div className="h-64 bg-gradient-to-br from-blue-50 to-green-50 rounded-lg flex items-center justify-center">
          <div className="text-center">
            <div className="text-6xl font-bold text-blue-600 mb-2">94.2%</div>
            <div className="text-gray-600 text-lg">Regional Efficiency Score</div>
            <div className="text-sm text-gray-500 mt-2">Across 847 stores in Southeast region</div>
          </div>
        </div>
      </div>
    </div>
  );
};