import React, { useState } from 'react';
import { Zap, CheckCircle, Clock, Truck, AlertTriangle, ArrowRight } from 'lucide-react';

export const RestockOrchestration: React.FC = () => {
  const [activeOrchestration, setActiveOrchestration] = useState<string | null>(null);

  const orchestrationFlows = [
    {
      id: 'flow-1',
      title: 'High-Priority Sunscreen Restock',
      trigger: 'AI Demand Prediction + Social Trend Alert',
      status: 'ready',
      priority: 'urgent',
      affectedStores: 47,
      estimatedRevenue: '$125,000',
      products: ['Sunscreen SPF 50+', 'Aloe Vera Gel', 'Beach Umbrellas'],
      timeline: '2-4 hours'
    },
    {
      id: 'flow-2',
      title: 'Memorial Day Grilling Supplies',
      trigger: 'Seasonal Forecast + Holiday Calendar',
      status: 'in-progress',
      priority: 'high',
      affectedStores: 89,
      estimatedRevenue: '$340,000',
      products: ['Grilling Supplies', 'Charcoal', 'BBQ Sauce', 'Coolers'],
      timeline: '4-6 hours'
    },
    {
      id: 'flow-3',
      title: 'Cold Beverage Emergency Stock',
      trigger: 'Weather Alert + Demand Spike',
      status: 'completed',
      priority: 'medium',
      affectedStores: 156,
      estimatedRevenue: '$780,000',
      products: ['Cold Beverages', 'Ice', 'Coolers'],
      timeline: 'Completed'
    },
  ];

  const orchestrationSteps = [
    { step: 1, title: 'AI Analysis', description: 'Analyze demand patterns and social trends', status: 'completed' },
    { step: 2, title: 'Inventory Check', description: 'Real-time inventory assessment across regions', status: 'completed' },
    { step: 3, title: 'Supply Routing', description: 'Optimize distribution from warehouses', status: 'in-progress' },
    { step: 4, title: 'Store Allocation', description: 'Allocate products to specific stores', status: 'pending' },
    { step: 5, title: 'Delivery Coordination', description: 'Schedule delivery trucks and logistics', status: 'pending' },
    { step: 6, title: 'Confirmation', description: 'Confirm delivery and update inventory', status: 'pending' },
  ];

  const handleInitiateOrchestration = (flowId: string) => {
    setActiveOrchestration(flowId);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'ready': return 'bg-blue-100 text-blue-700';
      case 'in-progress': return 'bg-yellow-100 text-yellow-700';
      case 'completed': return 'bg-green-100 text-green-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'urgent': return 'bg-red-100 text-red-700';
      case 'high': return 'bg-orange-100 text-orange-700';
      case 'medium': return 'bg-yellow-100 text-yellow-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">AI Restock Orchestration</h1>
        <p className="text-gray-600">Automated end-to-end supply chain coordination powered by AI</p>
      </div>

      {/* Active Orchestration Flows */}
      <div className="bg-white rounded-lg shadow p-6 mb-8">
        <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
          <Zap className="mr-2" size={20} />
          Active Orchestration Flows
        </h3>
        <div className="space-y-4">
          {orchestrationFlows.map((flow) => (
            <div key={flow.id} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center space-x-3">
                  <div className="flex items-center space-x-2">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(flow.status)}`}>
                      {flow.status}
                    </span>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getPriorityColor(flow.priority)}`}>
                      {flow.priority}
                    </span>
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">{flow.title}</div>
                    <div className="text-sm text-gray-600">{flow.trigger}</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-sm font-medium text-gray-900">{flow.affectedStores} stores</div>
                  <div className="text-sm text-gray-600">{flow.estimatedRevenue}</div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <div className="text-sm text-gray-600 mb-1">Products:</div>
                  <div className="flex flex-wrap gap-1">
                    {flow.products.map((product, index) => (
                      <span key={index} className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs">
                        {product}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <div className="text-sm text-gray-600 mb-1">Timeline:</div>
                  <div className="flex items-center space-x-2">
                    <Clock size={16} className="text-gray-400" />
                    <span className="text-sm font-medium">{flow.timeline}</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  {flow.status === 'completed' && (
                    <div className="flex items-center space-x-2 text-green-600">
                      <CheckCircle size={16} />
                      <span className="text-sm font-medium">Completed</span>
                    </div>
                  )}
                  {flow.status === 'in-progress' && (
                    <div className="flex items-center space-x-2 text-yellow-600">
                      <Clock size={16} />
                      <span className="text-sm font-medium">In Progress</span>
                    </div>
                  )}
                </div>
                
                {flow.status === 'ready' && (
                  <button
                    onClick={() => handleInitiateOrchestration(flow.id)}
                    className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium flex items-center space-x-2"
                  >
                    <Zap size={16} />
                    <span>Initiate AI Orchestration</span>
                    <ArrowRight size={16} />
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Orchestration Process */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Orchestration Process</h3>
          <div className="space-y-4">
            {orchestrationSteps.map((step) => (
              <div key={step.step} className="flex items-start space-x-3">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                  step.status === 'completed' ? 'bg-green-100 text-green-700' :
                  step.status === 'in-progress' ? 'bg-blue-100 text-blue-700' :
                  'bg-gray-100 text-gray-700'
                }`}>
                  {step.status === 'completed' ? <CheckCircle size={16} /> : step.step}
                </div>
                <div className="flex-1">
                  <div className="font-medium text-gray-900">{step.title}</div>
                  <div className="text-sm text-gray-600">{step.description}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Real-time Logistics</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
              <div className="flex items-center space-x-2">
                <Truck className="text-blue-600" size={20} />
                <span className="font-medium">Trucks Dispatched</span>
              </div>
              <span className="text-blue-600 font-bold">23</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
              <div className="flex items-center space-x-2">
                <CheckCircle className="text-green-600" size={20} />
                <span className="font-medium">Deliveries Completed</span>
              </div>
              <span className="text-green-600 font-bold">156</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-yellow-50 rounded-lg">
              <div className="flex items-center space-x-2">
                <Clock className="text-yellow-600" size={20} />
                <span className="font-medium">In Transit</span>
              </div>
              <span className="text-yellow-600 font-bold">47</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-red-50 rounded-lg">
              <div className="flex items-center space-x-2">
                <AlertTriangle className="text-red-600" size={20} />
                <span className="font-medium">Urgent Deliveries</span>
              </div>
              <span className="text-red-600 font-bold">12</span>
            </div>
          </div>
        </div>
      </div>

      {/* Success Metrics */}
      <div className="bg-white rounded-lg shadow p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">AI Orchestration Performance</h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">98.7%</div>
            <div className="text-sm text-gray-600">Prediction Accuracy</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-green-600 mb-2">2.3hrs</div>
            <div className="text-sm text-gray-600">Average Response Time</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-600 mb-2">$2.1M</div>
            <div className="text-sm text-gray-600">Revenue Protected</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-orange-600 mb-2">15%</div>
            <div className="text-sm text-gray-600">Waste Reduction</div>
          </div>
        </div>
      </div>

      {/* Confirmation Modal */}
      {activeOrchestration && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="text-green-600" size={32} />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">AI Orchestration Initiated</h3>
              <p className="text-gray-600 mb-4">
                The AI system has initiated the supply chain orchestration process. 
                Real-time updates will be available on the dashboard.
              </p>
              <button
                onClick={() => setActiveOrchestration(null)}
                className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors font-medium"
              >
                Continue Monitoring
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};