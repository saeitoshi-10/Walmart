import React, { useState } from 'react';
import { Navigation } from './components/Navigation';
import { RoleSelector } from './components/RoleSelector';
import { NationalDashboard } from './components/roles/NationalDashboard';
import { RegionalDashboard } from './components/roles/RegionalDashboard';
import { StoreDashboard } from './components/roles/StoreDashboard';

export type UserRole = 'national' | 'regional' | 'store';
export type ViewType = 'overview' | 'demand' | 'restocking' | 'trends' | 'orchestration' | 'analytics' | 'inventory' | 'performance';

function App() {
  const [currentRole, setCurrentRole] = useState<UserRole>('national');
  const [currentView, setCurrentView] = useState<ViewType>('overview');

  const renderDashboard = () => {
    switch (currentRole) {
      case 'national':
        return <NationalDashboard currentView={currentView} onNavigate={setCurrentView} />;
      case 'regional':
        return <RegionalDashboard currentView={currentView} onNavigate={setCurrentView} />;
      case 'store':
        return <StoreDashboard currentView={currentView} onNavigate={setCurrentView} />;
      default:
        return <NationalDashboard currentView={currentView} onNavigate={setCurrentView} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation 
        currentRole={currentRole} 
        currentView={currentView} 
        onNavigate={setCurrentView} 
      />
      <RoleSelector currentRole={currentRole} onRoleChange={setCurrentRole} />
      <div className="pt-32">
        {renderDashboard()}
      </div>
    </div>
  );
}

export default App;