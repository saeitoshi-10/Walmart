import React from 'react';
import { UserRole, ViewType } from '../App';
import { Brain, Package, TrendingUp, Zap, BarChart3, Globe, MapPin, Store, Users, Target, Truck } from 'lucide-react';

interface NavigationProps {
  currentRole: UserRole;
  currentView: ViewType;
  onNavigate: (view: ViewType) => void;
}

export const Navigation: React.FC<NavigationProps> = ({ currentRole, currentView, onNavigate }) => {
  const getNavItems = () => {
    switch (currentRole) {
      case 'national':
        return [
          { id: 'overview', label: 'National Overview', icon: Globe },
          { id: 'analytics', label: 'Market Analytics', icon: BarChart3 },
          { id: 'trends', label: 'Social Intelligence', icon: TrendingUp },
          { id: 'orchestration', label: 'AI Orchestration', icon: Zap },
          { id: 'performance', label: 'Performance', icon: Target },
        ];
      case 'regional':
        return [
          { id: 'overview', label: 'Regional Overview', icon: MapPin },
          { id: 'demand', label: 'Demand Forecasting', icon: Brain },
          { id: 'restocking', label: 'Store Coordination', icon: Package },
          { id: 'trends', label: 'Regional Trends', icon: TrendingUp },
          { id: 'performance', label: 'Regional Performance', icon: BarChart3 },
        ];
      case 'store':
        return [
          { id: 'overview', label: 'Store Dashboard', icon: Store },
          { id: 'inventory', label: 'My Inventory', icon: Package },
          { id: 'restocking', label: 'Restock Requests', icon: Truck },
          { id: 'performance', label: 'Store Performance', icon: Target },
        ];
      default:
        return [];
    }
  };

  const getRoleInfo = () => {
    switch (currentRole) {
      case 'national':
        return { title: 'National Coordinator', subtitle: 'All Regions • 4,743 Stores' };
      case 'regional':
        return { title: 'Regional Coordinator', subtitle: 'Southeast Region • 847 Stores' };
      case 'store':
        return { title: 'Store Manager', subtitle: 'Miami Beach Supercenter #1001' };
      default:
        return { title: '', subtitle: '' };
    }
  };

  const navItems = getNavItems();
  const roleInfo = getRoleInfo();

  return (
    <nav className="bg-blue-600 text-white shadow-lg fixed top-0 left-0 right-0 z-40">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-4">
            <div className="bg-yellow-400 text-blue-600 p-2 rounded-lg font-bold text-lg">
              W
            </div>
            <div>
              <h1 className="text-xl font-bold">AI Supply Brain</h1>
              <div className="text-xs text-blue-100">{roleInfo.subtitle}</div>
            </div>
          </div>
          
          <div className="flex items-center space-x-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => onNavigate(item.id as ViewType)}
                  className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-colors text-sm ${
                    currentView === item.id
                      ? 'bg-blue-700 text-white'
                      : 'hover:bg-blue-500 text-blue-100 hover:text-white'
                  }`}
                >
                  <Icon size={16} />
                  <span className="font-medium">{item.label}</span>
                </button>
              );
            })}
          </div>

          <div className="text-right">
            <div className="text-sm font-medium">{roleInfo.title}</div>
            <div className="text-xs text-blue-100">
              {currentRole === 'national' ? 'Sarah Chen' : 
               currentRole === 'regional' ? 'Mike Rodriguez' : 'Jennifer Park'}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};