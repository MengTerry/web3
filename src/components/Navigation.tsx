import React from 'react';
import { Home, Activity, FileText, Users, TrendingUp, Sprout } from 'lucide-react';

interface NavigationProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

const Navigation: React.FC<NavigationProps> = ({ activeSection, onSectionChange }) => {
  const menuItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'feed', label: 'Project Feed', icon: Activity },
    { id: 'details', label: 'Project Details', icon: FileText },
    { id: 'team', label: 'The Team', icon: Users },
    { id: 'future', label: 'Future Outlook', icon: TrendingUp },
  ];

  return (
    <nav className="fixed left-0 top-0 h-full w-64 bg-slate-900 text-white p-6 overflow-y-auto z-50">
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-2">
          <Sprout className="w-8 h-8 text-green-400" />
          <h1 className="text-xl font-bold">Aber Agri-Health</h1>
        </div>
        <p className="text-slate-400 text-sm">DeepDetect Project</p>
      </div>
      
      <ul className="space-y-2">
        {menuItems.map((item) => {
          const Icon = item.icon;
          return (
            <li key={item.id}>
              <button
                onClick={() => onSectionChange(item.id)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 text-left ${
                  activeSection === item.id
                    ? 'bg-green-600 text-white'
                    : 'text-slate-300 hover:bg-slate-800 hover:text-white'
                }`}
              >
                <Icon className="w-5 h-5" />
                {item.label}
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navigation;