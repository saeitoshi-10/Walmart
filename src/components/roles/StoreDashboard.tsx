import React, { useState } from 'react';
import { ViewType } from '../../App';
import { Package, TrendingUp, TrendingDown, AlertTriangle, CheckCircle, Truck, Clock, DollarSign, Users, Target } from 'lucide-react';

interface StoreDashboardProps {
  currentView: ViewType;
  onNavigate: (view: ViewType) => void;
}

export const StoreDashboard: React.FC<StoreDashboardProps> = ({ currentView, onNavigate }) => {
  const [activeRequests, setActiveRequests] = useState<string[]>([]);

  if (currentView === 'inventory') {
    const inventoryItems = [
      { product: 'Sunscreen SPF 50+', current: 45, minimum: 100, maximum: 300, status: 'critical', lastUpdated: '2 hours ago' },
      { product: 'Cold Beverages', current: 156, minimum: 200, maximum: 500, status: 'low', lastUpdated: '1 hour ago' },
      { product: 'Beach Umbrellas', current: 12, minimum: 25, maximum: 75, status: 'critical', lastUpdated: '30 min ago' },
      { product: 'Grilling Supplies', current: 78, minimum: 50, maximum: 150, status: 'good', lastUpdated: '3 hours ago' },
      { product: 'Pool Floats', current: 34, minimum: 40, maximum: 120, status: 'low', lastUpdated: '1 hour ago' },
      { product: 'Coolers', current: 23, minimum: 30, maximum: 90, status: 'low', lastUpdated: '45 min ago' },
    ];

    return (
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Store Inventory Management</h1>
          <p className="text-gray-600">Real-time inventory levels for Miami Beach Supercenter #1001</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          {[
            { title: 'Critical Items', value: '3', color: 'text-red-600', bg: 'bg-red-50' },
            { title: 'Low Stock Items', value: '3', color: 'text-yellow-600', bg: 'bg-yellow-50' },
            { title: 'Well Stocked', value: '1', color: 'text-green-600', bg: 'bg-green-50' },
            { title: 'Total SKUs', value: '2,847', color: 'text-blue-600', bg: 'bg-blue-50' },
          ].map((metric, index) => (
            <div key={index} className={`${metric.bg} rounded-lg p-6`}>
              <div className={`text-3xl font-bold ${metric.color} mb-2`}>{metric.value}</div>
              <div className="text-sm font-medium text-gray-700">{metric.title}</div>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Current Inventory Status</h3>
          <div className="space-y-4">
            {inventoryItems.map((item, index) => (
              <div key={index} className="border rounded-lg p-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-3">
                    <Package className="text-blue-500" size={20} />
                    <div>
                      <div className="font-medium text-gray-900">{item.product}</div>
                      <div className="text-sm text-gray-600">Last updated: {item.lastUpdated}</div>
                    </div>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    item.status === 'critical' ? 'bg-red-100 text-red-700' :
                    item.status === 'low' ? 'bg-yellow-100 text-yellow-700' :
                    'bg-green-100 text-green-700'
                  }`}>
                    {item.status}
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-3">
                  <div className="bg-gray-50 rounded-lg p-3">
                    <div className="text-sm text-gray-600">Current Stock</div>
                    <div className="text-xl font-bold text-gray-900">{item.current}</div>
                  </div>
                  <div className="bg-yellow-50 rounded-lg p-3">
                    <div className="text-sm text-yellow-600">Minimum Level</div>
                    <div className="text-xl font-bold text-yellow-900">{item.minimum}</div>
                  </div>
                  <div className="bg-green-50 rounded-lg p-3">
                    <div className="text-sm text-green-600">Maximum Level</div>
                    <div className="text-xl font-bold text-green-900">{item.maximum}</div>
                  </div>
                  <div className="bg-blue-50 rounded-lg p-3">
                    <div className="text-sm text-blue-600">Reorder Point</div>
                    <div className="text-xl font-bold text-blue-900">{Math.round(item.minimum * 1.2)}</div>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className="w-full bg-gray-200 rounded-full h-2 w-48">
                      <div 
                        className={`h-2 rounded-full ${
                          item.status === 'critical' ? 'bg-red-500' :
                          item.status === 'low' ? 'bg-yellow-500' :
                          'bg-green-500'
                        }`}
                        style={{ width: `${Math.min((item.current / item.maximum) * 100, 100)}%` }}
                      ></div>
                    </div>
                    <span className="text-sm text-gray-600">
                      {Math.round((item.current / item.maximum) * 100)}% capacity
                    </span>
                  </div>
                  
                  {(item.status === 'critical' || item.status === 'low') && (
                    <button
                      onClick={() => onNavigate('restocking')}
                      className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium text-sm"
                    >
                      Request Restock
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (currentView === 'restocking') {
    const restockRequests = [
      { id: 'req-001', product: 'Sunscreen SPF 50+', quantity: 235, priority: 'urgent', status: 'pending', estimatedArrival: '2-4 hours' },
      { id: 'req-002', product: 'Beach Umbrellas', quantity: 36, priority: 'high', status: 'approved', estimatedArrival: '4-6 hours' },
      { id: 'req-003', product: 'Cold Beverages', quantity: 164, priority: 'high', status: 'in-transit', estimatedArrival: '1-2 hours' },
      { id: 'req-004', product: 'Pool Floats', quantity: 28, priority: 'medium', status: 'pending', estimatedArrival: '6-8 hours' },
    ];

    const handleRequestRestock = (requestId: string) => {
      setActiveRequests([...activeRequests, requestId]);
    };

    return (
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Restock Request Center</h1>
          <p className="text-gray-600">Manage inventory replenishment for your store</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          {[
            { title: 'Pending Requests', value: '2', icon: Clock, color: 'text-yellow-600' },
            { title: 'Approved Requests', value: '1', icon: CheckCircle, color: 'text-green-600' },
            { title: 'In Transit', value: '1', icon: Truck, color: 'text-blue-600' },
            { title: 'Total Value', value: '$12,400', icon: DollarSign, color: 'text-purple-600' },
          ].map((metric, index) => {
            const Icon = metric.icon;
            return (
              <div key={index} className="bg-white rounded-lg shadow p-6">
                <div className="flex items-center space-x-3">
                  <Icon className={metric.color} size={24} />
                  <div>
                    <div className="text-sm font-medium text-gray-600">{metric.title}</div>
                    <div className={`text-2xl font-bold ${metric.color}`}>{metric.value}</div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="bg-white rounded-lg shadow p-6 mb-8">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Active Restock Requests</h3>
          <div className="space-y-4">
            {restockRequests.map((request) => (
              <div key={request.id} className="border rounded-lg p-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-3">
                    <Package className="text-blue-500" size={20} />
                    <div>
                      <div className="font-medium text-gray-900">{request.product}</div>
                      <div className="text-sm text-gray-600">Request ID: {request.id}</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      request.priority === 'urgent' ? 'bg-red-100 text-red-700' :
                      request.priority === 'high' ? 'bg-orange-100 text-orange-700' :
                      'bg-yellow-100 text-yellow-700'
                    }`}>
                      {request.priority}
                    </span>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      request.status === 'pending' ? 'bg-yellow-100 text-yellow-700' :
                      request.status === 'approved' ? 'bg-green-100 text-green-700' :
                      'bg-blue-100 text-blue-700'
                    }`}>
                      {request.status}
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-3">
                  <div className="bg-gray-50 rounded-lg p-3">
                    <div className="text-sm text-gray-600">Quantity Requested</div>
                    <div className="text-xl font-bold text-gray-900">{request.quantity}</div>
                  </div>
                  <div className="bg-blue-50 rounded-lg p-3">
                    <div className="text-sm text-blue-600">Estimated Arrival</div>
                    <div className="text-xl font-bold text-blue-900">{request.estimatedArrival}</div>
                  </div>
                  <div className="bg-green-50 rounded-lg p-3">
                    <div className="text-sm text-green-600">Status</div>
                    <div className="text-xl font-bold text-green-900 capitalize">{request.status.replace('-', ' ')}</div>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="text-sm text-gray-600">
                    {request.status === 'pending' && 'Awaiting regional approval'}
                    {request.status === 'approved' && 'Preparing for shipment'}
                    {request.status === 'in-transit' && 'On the way to your store'}
                  </div>
                  
                  {request.status === 'pending' && (
                    <button className="bg-gray-400 text-white px-4 py-2 rounded-lg cursor-not-allowed font-medium text-sm">
                      Pending Approval
                    </button>
                  )}
                  {request.status === 'approved' && (
                    <div className="flex items-center space-x-2 text-green-600">
                      <CheckCircle size={16} />
                      <span className="text-sm font-medium">Approved</span>
                    </div>
                  )}
                  {request.status === 'in-transit' && (
                    <div className="flex items-center space-x-2 text-blue-600">
                      <Truck size={16} />
                      <span className="text-sm font-medium">In Transit</span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Restock</h3>
          <p className="text-gray-600 mb-4">Request immediate restocking for critical items</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <button className="bg-red-600 text-white py-3 px-4 rounded-lg hover:bg-red-700 transition-colors font-medium">
              Emergency Sunscreen Restock
            </button>
            <button className="bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors font-medium">
              Standard Beverage Restock
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (currentView === 'performance') {
    return (
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Store Performance Dashboard</h1>
          <p className="text-gray-600">Performance metrics for Miami Beach Supercenter #1001</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          {[
            { title: 'Daily Revenue', value: '$47,200', change: '+8.3%', trend: 'up' },
            { title: 'Customer Traffic', value: '2,847', change: '+12.1%', trend: 'up' },
            { title: 'Inventory Accuracy', value: '96.8%', change: '+2.3%', trend: 'up' },
            { title: 'Stock Availability', value: '94.2%', change: '-1.2%', trend: 'down' },
          ].map((metric, index) => (
            <div key={index} className="bg-white rounded-lg shadow p-6">
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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Top Selling Products Today</h3>
            <div className="space-y-3">
              {[
                { product: 'Cold Beverages', sales: '$3,200', units: 847 },
                { product: 'Sunscreen SPF 50+', sales: '$2,800', units: 234 },
                { product: 'Grilling Supplies', sales: '$1,900', units: 156 },
                { product: 'Beach Umbrellas', sales: '$1,200', units: 89 },
              ].map((item, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div className="font-medium text-gray-900">{item.product}</div>
                  <div className="text-right">
                    <div className="font-bold text-gray-900">{item.sales}</div>
                    <div className="text-sm text-gray-600">{item.units} units</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Store Alerts</h3>
            <div className="space-y-3">
              {[
                { type: 'warning', message: 'Sunscreen inventory critically low (45 units remaining)', time: '15 min ago' },
                { type: 'success', message: 'Cold beverage delivery completed successfully', time: '2 hours ago' },
                { type: 'info', message: 'Peak shopping hours starting soon (2-4 PM)', time: '30 min ago' },
              ].map((alert, index) => (
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
      </div>
    );
  }

  // Default overview
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Store Manager Dashboard</h1>
        <p className="text-gray-600">Miami Beach Supercenter #1001 - Daily Operations</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {[
          { title: 'Today\'s Revenue', value: '$47,200', change: '+8.3%', trend: 'up', icon: DollarSign },
          { title: 'Customer Count', value: '2,847', change: '+12.1%', trend: 'up', icon: Users },
          { title: 'Critical Items', value: '3', change: '+1', trend: 'up', icon: AlertTriangle },
          { title: 'Restock Requests', value: '4', change: '+2', trend: 'up', icon: Package },
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
                  <Icon className={`${
                    metric.title === 'Critical Items' ? 'text-red-500' : 'text-blue-500'
                  }`} size={24} />
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
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Urgent Actions Required</h3>
          <div className="space-y-3">
            {[
              { type: 'critical', message: 'Sunscreen inventory at 15% capacity - immediate restock needed', action: 'Request Restock' },
              { type: 'warning', message: 'Beach umbrellas running low - 12 units remaining', action: 'Monitor' },
              { type: 'info', message: 'Peak hours approaching - ensure staff coverage', action: 'Schedule' },
            ].map((item, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 mt-1">
                    {item.type === 'critical' && <AlertTriangle size={18} className="text-red-500" />}
                    {item.type === 'warning' && <AlertTriangle size={18} className="text-yellow-500" />}
                    {item.type === 'info' && <TrendingUp size={18} className="text-blue-500" />}
                  </div>
                  <p className="text-sm text-gray-900 flex-1">{item.message}</p>
                </div>
                <button className={`px-3 py-1 rounded-lg text-xs font-medium ${
                  item.type === 'critical' ? 'bg-red-600 text-white hover:bg-red-700' :
                  item.type === 'warning' ? 'bg-yellow-600 text-white hover:bg-yellow-700' :
                  'bg-blue-600 text-white hover:bg-blue-700'
                } transition-colors`}>
                  {item.action}
                </button>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
          <div className="space-y-3">
            <button
              onClick={() => onNavigate('inventory')}
              className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors font-medium"
            >
              Check Inventory Levels
            </button>
            <button
              onClick={() => onNavigate('restocking')}
              className="w-full bg-green-600 text-white py-3 px-4 rounded-lg hover:bg-green-700 transition-colors font-medium"
            >
              Manage Restock Requests
            </button>
            <button
              onClick={() => onNavigate('performance')}
              className="w-full bg-purple-600 text-white py-3 px-4 rounded-lg hover:bg-purple-700 transition-colors font-medium"
            >
              View Store Performance
            </button>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Store Performance Today</h3>
        <div className="h-64 bg-gradient-to-br from-green-50 to-blue-50 rounded-lg flex items-center justify-center">
          <div className="text-center">
            <div className="text-6xl font-bold text-green-600 mb-2">94.2%</div>
            <div className="text-gray-600 text-lg">Store Efficiency Score</div>
            <div className="text-sm text-gray-500 mt-2">Above regional average of 91.8%</div>
          </div>
        </div>
      </div>
    </div>
  );
};