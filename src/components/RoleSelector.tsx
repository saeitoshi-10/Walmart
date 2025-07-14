import React from 'react';
import { UserRole } from '../App';
import { Globe, MapPin, Store } from 'lucide-react';

interface RoleSelectorProps {
  currentRole: UserRole;
  onRoleChange: (role: UserRole) => void;
}

export const RoleSelector: React.FC<RoleSelectorProps> = ({ currentRole, onRoleChange }) => {
  const roles = [
    { id: 'national', label: 'National Coordinator', icon: Globe, color: 'bg-purple-600' },
    { id: 'regional', label: 'Regional Coordinator', icon: MapPin, color: 'bg-blue-600' },
    { id: 'store', label: 'Store Manager', icon: Store, color: 'bg-green-600' },
  ];

  return (
    <div className="bg-white border-b border-gray-200 fixed top-16 left-0 right-0 z-30">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-center space-x-1 py-2">
          <span className="text-sm text-gray-600 mr-3">Demo Role:</span>
          {roles.map((role) => {
            const Icon = role.icon;
            return (
              <button
                key={role.id}
                onClick={() => onRoleChange(role.id as UserRole)}
                className={`flex items-center space-x-2 px-3 py-1.5 rounded-lg transition-colors text-sm ${
                  currentRole === role.id
                    ? `${role.color} text-white`
                    : 'hover:bg-gray-100 text-gray-700'
                }`}
              >
                <Icon size={14} />
                <span className="font-medium">{role.label}</span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};