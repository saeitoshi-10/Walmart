import React, { useState } from 'react';
import { Brain, MapPin, Calendar, TrendingUp, AlertCircle } from 'lucide-react';

export const DemandPredictor: React.FC = () => {
  const [selectedRegion, setSelectedRegion] = useState('florida');
  const [selectedProduct, setSelectedProduct] = useState('sunscreen');

  const regions = [
    { id: 'florida', name: 'Florida', stores: 241 },
    { id: 'texas', name: 'Texas', stores: 596 },
    { id: 'california', name: 'California', stores: 383 },
    { id: 'newyork', name: 'New York', stores: 142 },
  ];

  const products = [
    { id: 'sunscreen', name: 'Sunscreen SPF 50+', category: 'Health & Beauty' },
    { id: 'grilling', name: 'Grilling Supplies', category: 'Seasonal' },
    { id: 'beverages', name: 'Cold Beverages', category: 'Grocery' },
    { id: 'swimwear', name: 'Swimwear', category: 'Apparel' },
  ];

  const predictionData = {
    florida: {
      sunscreen: { demand: 15400, confidence: 94, trend: 'up', factors: ['Weather: 95°F forecast', 'Event: Summer break', 'Social: +127% mentions'] },
      grilling: { demand: 8200, confidence: 87, trend: 'up', factors: ['Weather: Clear skies', 'Holiday: Memorial Day', 'Social: +89% mentions'] },
      beverages: { demand: 22100, confidence: 91, trend: 'up', factors: ['Weather: Heat wave', 'Season: Summer peak', 'Social: +156% mentions'] },
      swimwear: { demand: 5600, confidence: 82, trend: 'up', factors: ['Season: Summer', 'Social: +203% mentions', 'Event: Beach season'] },
    },
    texas: {
      sunscreen: { demand: 18200, confidence: 92, trend: 'up', factors: ['Weather: 98°F forecast', 'Event: Summer activities', 'Social: +98% mentions'] },
      grilling: { demand: 12400, confidence: 95, trend: 'up', factors: ['Culture: BBQ season', 'Weather: Perfect conditions', 'Social: +134% mentions'] },
      beverages: { demand: 28500, confidence: 93, trend: 'up', factors: ['Weather: Extreme heat', 'Population: High density', 'Social: +178% mentions'] },
      swimwear: { demand: 4200, confidence: 79, trend: 'stable', factors: ['Season: Summer', 'Social: +87% mentions', 'Event: Pool season'] },
    },
  };

  const currentData = predictionData[selectedRegion]?.[selectedProduct] || predictionData.florida.sunscreen;

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">AI Demand Predictor</h1>
        <p className="text-gray-600">Regional demand forecasting with confidence intervals and trend analysis</p>
      </div>

      {/* Controls */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
            <MapPin className="mr-2" size={20} />
            Select Region
          </h3>
          <div className="space-y-2">
            {regions.map((region) => (
              <button
                key={region.id}
                onClick={() => setSelectedRegion(region.id)}
                className={`w-full text-left p-3 rounded-lg transition-colors ${
                  selectedRegion === region.id
                    ? 'bg-blue-100 border-2 border-blue-500 text-blue-700'
                    : 'bg-gray-50 hover:bg-gray-100 border-2 border-transparent'
                }`}
              >
                <div className="font-medium">{region.name}</div>
                <div className="text-sm text-gray-600">{region.stores} stores</div>
              </button>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
            <Brain className="mr-2" size={20} />
            Select Product
          </h3>
          <div className="space-y-2">
            {products.map((product) => (
              <button
                key={product.id}
                onClick={() => setSelectedProduct(product.id)}
                className={`w-full text-left p-3 rounded-lg transition-colors ${
                  selectedProduct === product.id
                    ? 'bg-green-100 border-2 border-green-500 text-green-700'
                    : 'bg-gray-50 hover:bg-gray-100 border-2 border-transparent'
                }`}
              >
                <div className="font-medium">{product.name}</div>
                <div className="text-sm text-gray-600">{product.category}</div>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Prediction Results */}
      <div className="bg-white rounded-lg shadow p-6 mb-8">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-semibold text-gray-900">7-Day Demand Forecast</h3>
          <div className="flex items-center space-x-2">
            <Calendar size={20} className="text-gray-400" />
            <span className="text-sm text-gray-600">Next 7 days</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <div className="h-64 bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl font-bold text-blue-600 mb-2">
                  {currentData.demand.toLocaleString()}
                </div>
                <div className="text-gray-600 text-lg">Predicted Units</div>
                <div className="flex items-center justify-center space-x-2 mt-2">
                  <TrendingUp className="text-green-500" size={20} />
                  <span className="text-green-600 font-medium">+{Math.round(currentData.demand * 0.23)} from last week</span>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="bg-gray-50 rounded-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-gray-600">Confidence Level</span>
                <span className="text-sm font-bold text-gray-900">{currentData.confidence}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div 
                  className="bg-green-500 h-2 rounded-full transition-all duration-500"
                  style={{ width: `${currentData.confidence}%` }}
                ></div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-4">
              <div className="flex items-center space-x-2 mb-3">
                <AlertCircle size={16} className="text-yellow-500" />
                <span className="text-sm font-medium text-gray-700">Key Factors</span>
              </div>
              <ul className="space-y-2">
                {currentData.factors.map((factor, index) => (
                  <li key={index} className="text-sm text-gray-600 flex items-start">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-2 mt-1.5 flex-shrink-0"></span>
                    {factor}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Regional Comparison */}
      <div className="bg-white rounded-lg shadow p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Regional Demand Comparison</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {regions.map((region) => {
            const regionData = predictionData[region.id]?.[selectedProduct] || { demand: 0, confidence: 0 };
            return (
              <div key={region.id} className="bg-gray-50 rounded-lg p-4">
                <div className="text-sm font-medium text-gray-600 mb-1">{region.name}</div>
                <div className="text-xl font-bold text-gray-900">{regionData.demand.toLocaleString()}</div>
                <div className="text-sm text-gray-500">{regionData.confidence}% confidence</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};