import React, { useState } from 'react';
import { Package, Store, CheckCircle, AlertTriangle, ArrowRight } from 'lucide-react';

export const RestockingAssistant: React.FC = () => {
  const [selectedStore, setSelectedStore] = useState('store-1001');
  const [activeRestocks, setActiveRestocks] = useState<string[]>([]);

  const stores = [
    { id: 'store-1001', name: 'Miami Beach Supercenter', region: 'Florida', priority: 'high' },
    { id: 'store-1002', name: 'Orlando Central Store', region: 'Florida', priority: 'medium' },
    { id: 'store-1003', name: 'Tampa Bay Location', region: 'Florida', priority: 'high' },
    { id: 'store-1004', name: 'Jacksonville North', region: 'Florida', priority: 'low' },
  ];

  const restockRecommendations = {
    'store-1001': [
      { product: 'Sunscreen SPF 50+', currentStock: 45, recommended: 280, reason: 'High demand forecast (+94% confidence)', priority: 'urgent' },
      { product: 'Beach Umbrellas', currentStock: 12, recommended: 48, reason: 'Summer season + social trends', priority: 'high' },
      { product: 'Cold Beverages', currentStock: 156, recommended: 320, reason: 'Heat wave predicted', priority: 'high' },
      { product: 'Grilling Supplies', currentStock: 78, recommended: 125, reason: 'Memorial Day weekend', priority: 'medium' },
    ],
    'store-1002': [
      { product: 'Sunscreen SPF 50+', currentStock: 67, recommended: 180, reason: 'High demand forecast (+87% confidence)', priority: 'high' },
      { product: 'Swimwear', currentStock: 34, recommended: 89, reason: 'Summer break starting', priority: 'medium' },
      { product: 'Cold Beverages', currentStock: 203, recommended: 280, reason: 'Tourism increase', priority: 'medium' },
    ],
  };

  const currentRecommendations = restockRecommendations[selectedStore] || restockRecommendations['store-1001'];

  const handleInitiateRestock = (product: string) => {
    setActiveRestocks([...activeRestocks, product]);
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'urgent': return 'text-red-600 bg-red-100';
      case 'high': return 'text-orange-600 bg-orange-100';
      case 'medium': return 'text-yellow-600 bg-yellow-100';
      case 'low': return 'text-green-600 bg-green-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Smart Restocking Assistant</h1>
        <p className="text-gray-600">AI-powered inventory recommendations with one-click restocking</p>
      </div>

      {/* Store Selection */}
      <div className="bg-white rounded-lg shadow p-6 mb-8">
        <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
          <Store className="mr-2" size={20} />
          Select Store
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {stores.map((store) => (
            <button
              key={store.id}
              onClick={() => setSelectedStore(store.id)}
              className={`text-left p-4 rounded-lg transition-colors border-2 ${
                selectedStore === store.id
                  ? 'bg-blue-100 border-blue-500 text-blue-700'
                  : 'bg-gray-50 hover:bg-gray-100 border-transparent'
              }`}
            >
              <div className="font-medium">{store.name}</div>
              <div className="text-sm text-gray-600">{store.region}</div>
              <div className="mt-2">
                <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${
                  store.priority === 'high' ? 'bg-red-100 text-red-700' :
                  store.priority === 'medium' ? 'bg-yellow-100 text-yellow-700' :
                  'bg-green-100 text-green-700'
                }`}>
                  {store.priority} priority
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Recommendations */}
      <div className="bg-white rounded-lg shadow p-6 mb-8">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-semibold text-gray-900">Restocking Recommendations</h3>
          <div className="text-sm text-gray-600">
            {stores.find(s => s.id === selectedStore)?.name}
          </div>
        </div>

        <div className="space-y-4">
          {currentRecommendations.map((item, index) => (
            <div key={index} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center space-x-3">
                  <Package className="text-blue-500" size={20} />
                  <div>
                    <div className="font-medium text-gray-900">{item.product}</div>
                    <div className="text-sm text-gray-600">{item.reason}</div>
                  </div>
                </div>
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${getPriorityColor(item.priority)}`}>
                  {item.priority}
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                <div className="bg-gray-50 rounded-lg p-3">
                  <div className="text-sm text-gray-600">Current Stock</div>
                  <div className="text-xl font-bold text-gray-900">{item.currentStock}</div>
                </div>
                <div className="bg-blue-50 rounded-lg p-3">
                  <div className="text-sm text-blue-600">Recommended</div>
                  <div className="text-xl font-bold text-blue-900">{item.recommended}</div>
                </div>
                <div className="bg-green-50 rounded-lg p-3">
                  <div className="text-sm text-green-600">Restock Quantity</div>
                  <div className="text-xl font-bold text-green-900">{item.recommended - item.currentStock}</div>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div className="w-full bg-gray-200 rounded-full h-2 w-32">
                    <div 
                      className="bg-blue-500 h-2 rounded-full"
                      style={{ width: `${(item.currentStock / item.recommended) * 100}%` }}
                    ></div>
                  </div>
                  <span className="text-sm text-gray-600">
                    {Math.round((item.currentStock / item.recommended) * 100)}% stocked
                  </span>
                </div>
                
                {activeRestocks.includes(item.product) ? (
                  <div className="flex items-center space-x-2 text-green-600">
                    <CheckCircle size={20} />
                    <span className="font-medium">Restock Initiated</span>
                  </div>
                ) : (
                  <button
                    onClick={() => handleInitiateRestock(item.product)}
                    className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium flex items-center space-x-2"
                  >
                    <span>Initiate Restock</span>
                    <ArrowRight size={16} />
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Summary */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center space-x-3 mb-3">
            <AlertTriangle className="text-yellow-500" size={24} />
            <div>
              <div className="text-sm font-medium text-gray-600">Urgent Items</div>
              <div className="text-2xl font-bold text-gray-900">
                {currentRecommendations.filter(r => r.priority === 'urgent').length}
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center space-x-3 mb-3">
            <Package className="text-blue-500" size={24} />
            <div>
              <div className="text-sm font-medium text-gray-600">Total Recommendations</div>
              <div className="text-2xl font-bold text-gray-900">{currentRecommendations.length}</div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center space-x-3 mb-3">
            <CheckCircle className="text-green-500" size={24} />
            <div>
              <div className="text-sm font-medium text-gray-600">Restocks Initiated</div>
              <div className="text-2xl font-bold text-gray-900">{activeRestocks.length}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};