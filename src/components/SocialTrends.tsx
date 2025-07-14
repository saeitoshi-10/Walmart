import React, { useState } from 'react';
import { TrendingUp, Hash, MessageCircle, Heart, Share, AlertCircle } from 'lucide-react';

export const SocialTrends: React.FC = () => {
  const [selectedTrend, setSelectedTrend] = useState('sunscreen');

  const trendingTopics = [
    { 
      id: 'sunscreen', 
      hashtag: '#SummerSkinCare', 
      mentions: 15600, 
      growth: '+127%', 
      sentiment: 'positive',
      impact: 'high',
      products: ['Sunscreen SPF 50+', 'Moisturizer', 'Aloe Vera']
    },
    { 
      id: 'grilling', 
      hashtag: '#GrillingMaster', 
      mentions: 8900, 
      growth: '+89%', 
      sentiment: 'positive',
      impact: 'medium',
      products: ['Grilling Supplies', 'Charcoal', 'BBQ Sauce']
    },
    { 
      id: 'poolparty', 
      hashtag: '#PoolPartyVibes', 
      mentions: 12300, 
      growth: '+156%', 
      sentiment: 'positive',
      impact: 'high',
      products: ['Pool Floats', 'Swimwear', 'Coolers']
    },
    { 
      id: 'hydration', 
      hashtag: '#StayHydrated', 
      mentions: 7200, 
      growth: '+67%', 
      sentiment: 'positive',
      impact: 'medium',
      products: ['Water Bottles', 'Electrolyte Drinks', 'Coconut Water']
    },
  ];

  const socialPosts = {
    sunscreen: [
      { platform: 'Twitter', user: '@beachbabe2024', content: 'Never leaving the house without SPF 50+ again! This heat is no joke 🌞', likes: 1200, shares: 340 },
      { platform: 'Instagram', user: '@skincareguru', content: 'PSA: Sunscreen is not optional this summer! Stock up now 📸', likes: 3400, shares: 890 },
      { platform: 'TikTok', user: '@summertips', content: 'Showing my sunscreen routine for this crazy heat wave ☀️', likes: 8900, shares: 2100 },
    ],
    grilling: [
      { platform: 'Twitter', user: '@daddoesbbq', content: 'Memorial Day grilling prep starts NOW! Who else is ready? 🔥', likes: 890, shares: 234 },
      { platform: 'Instagram', user: '@grillinglife', content: 'Perfect weather for BBQ season! Time to fire up the grill 🥩', likes: 2100, shares: 567 },
    ],
  };

  const selectedTrendData = trendingTopics.find(t => t.id === selectedTrend) || trendingTopics[0];
  const selectedPosts = socialPosts[selectedTrend] || socialPosts.sunscreen;

  const getSentimentColor = (sentiment: string) => {
    switch (sentiment) {
      case 'positive': return 'text-green-600 bg-green-100';
      case 'negative': return 'text-red-600 bg-red-100';
      case 'neutral': return 'text-gray-600 bg-gray-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const getImpactColor = (impact: string) => {
    switch (impact) {
      case 'high': return 'text-red-600 bg-red-100';
      case 'medium': return 'text-yellow-600 bg-yellow-100';
      case 'low': return 'text-green-600 bg-green-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Social Trend Insights</h1>
        <p className="text-gray-600">Real-time social media monitoring for strategic inventory decisions</p>
      </div>

      {/* Trending Topics */}
      <div className="bg-white rounded-lg shadow p-6 mb-8">
        <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
          <TrendingUp className="mr-2" size={20} />
          Trending Topics
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {trendingTopics.map((topic) => (
            <button
              key={topic.id}
              onClick={() => setSelectedTrend(topic.id)}
              className={`text-left p-4 rounded-lg transition-colors border-2 ${
                selectedTrend === topic.id
                  ? 'bg-purple-100 border-purple-500 text-purple-700'
                  : 'bg-gray-50 hover:bg-gray-100 border-transparent'
              }`}
            >
              <div className="flex items-center space-x-2 mb-2">
                <Hash size={16} />
                <span className="font-medium">{topic.hashtag}</span>
              </div>
              <div className="text-sm text-gray-600 mb-2">{topic.mentions.toLocaleString()} mentions</div>
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-green-600">{topic.growth}</span>
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${getImpactColor(topic.impact)}`}>
                  {topic.impact} impact
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Detailed Analysis */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Trend Analysis</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-gray-600">Hashtag:</span>
              <span className="font-medium">{selectedTrendData.hashtag}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-600">Mentions:</span>
              <span className="font-medium">{selectedTrendData.mentions.toLocaleString()}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-600">Growth:</span>
              <span className="font-medium text-green-600">{selectedTrendData.growth}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-600">Sentiment:</span>
              <span className={`px-2 py-1 rounded-full text-xs font-medium ${getSentimentColor(selectedTrendData.sentiment)}`}>
                {selectedTrendData.sentiment}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-600">Business Impact:</span>
              <span className={`px-2 py-1 rounded-full text-xs font-medium ${getImpactColor(selectedTrendData.impact)}`}>
                {selectedTrendData.impact}
              </span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Related Products</h3>
          <div className="space-y-3">
            {selectedTrendData.products.map((product, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <span className="font-medium">{product}</span>
                <div className="flex items-center space-x-2">
                  <TrendingUp size={16} className="text-green-500" />
                  <span className="text-sm text-green-600 font-medium">+{Math.floor(Math.random() * 50) + 30}%</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Social Posts */}
      <div className="bg-white rounded-lg shadow p-6 mb-8">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Real-time Social Posts</h3>
        <div className="space-y-4">
          {selectedPosts.map((post, index) => (
            <div key={index} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full flex items-center justify-center text-white font-bold">
                    {post.platform.charAt(0)}
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">{post.user}</div>
                    <div className="text-sm text-gray-600">{post.platform}</div>
                  </div>
                </div>
                <span className="text-xs text-gray-500">{Math.floor(Math.random() * 60) + 1}m ago</span>
              </div>
              <p className="text-gray-700 mb-3">{post.content}</p>
              <div className="flex items-center space-x-6 text-sm text-gray-500">
                <div className="flex items-center space-x-1">
                  <Heart size={16} />
                  <span>{post.likes.toLocaleString()}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Share size={16} />
                  <span>{post.shares.toLocaleString()}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <MessageCircle size={16} />
                  <span>{Math.floor(post.likes * 0.1).toLocaleString()}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Strategic Recommendations */}
      <div className="bg-white rounded-lg shadow p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
          <AlertCircle className="mr-2" size={20} />
          Strategic Recommendations
        </h3>
        <div className="space-y-4">
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <div className="flex items-center space-x-2 mb-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <span className="font-medium text-blue-900">Immediate Action Required</span>
            </div>
            <p className="text-blue-800">
              Increase {selectedTrendData.products[0]} inventory by 40% in Florida and Texas regions due to trending topic {selectedTrendData.hashtag} with {selectedTrendData.growth} growth.
            </p>
          </div>
          <div className="bg-green-50 border border-green-200 rounded-lg p-4">
            <div className="flex items-center space-x-2 mb-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span className="font-medium text-green-900">Marketing Opportunity</span>
            </div>
            <p className="text-green-800">
              Launch targeted social media campaign featuring {selectedTrendData.products.join(', ')} to capitalize on current trend momentum.
            </p>
          </div>
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
            <div className="flex items-center space-x-2 mb-2">
              <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
              <span className="font-medium text-yellow-900">Monitor Closely</span>
            </div>
            <p className="text-yellow-800">
              Track sentiment changes and engagement rates. If trend continues for 48+ hours, consider emergency restocking protocols.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};