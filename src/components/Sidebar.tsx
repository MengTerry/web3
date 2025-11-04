import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './LanguageSwitcher';

interface SidebarProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ activeSection, onSectionChange }) => {
  const { t } = useTranslation();

  const menuItems = [
    { id: 'home', label: t('nav.home') },
    { id: 'projects', label: t('nav.projects') },
    { id: 'team', label: t('nav.team') },
    { id: 'research', label: t('nav.research') },
    { id: 'discussion', label: t('nav.discussion') },
  ];

  return (
    <motion.nav 
      initial={{ x: -280 }}
      animate={{ x: 0 }}
      className="fixed left-0 top-0 h-full w-72 bg-white text-emerald-900 overflow-y-auto z-50 border-r border-emerald-100 shadow-md"
    >
      {/* Header */}
      <div className="p-6 border-b border-emerald-100">
        <div className="flex items-center gap-3 mb-2">
          <img
            src="/logos/main-logo.png"
            alt="DeepDetect Logo"
            className="w-12 h-12 object-contain"
          />
          <div>
            <h1 className="text-xl font-bold bg-gradient-to-r from-emerald-500 to-lime-500 bg-clip-text text-transparent">
              {t('sidebar.title')}
            </h1>
            <p className="text-emerald-600 text-sm">{t('sidebar.subtitle')}</p>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="p-4">
        <div className="space-y-1">
          {menuItems.map((item) => {
            const isActive = activeSection === item.id;
            
            return (
              <motion.button
                key={item.id}
                onClick={() => onSectionChange(item.id)}
                whileHover={{ x: 4 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full flex items-center gap-4 px-4 py-3 rounded-xl transition-all duration-200 text-left relative ${
                  isActive
                    ? 'bg-gradient-to-r from-emerald-500 to-lime-500 text-white shadow-lg'
                    : 'text-emerald-700 hover:bg-emerald-50'
                }`}
              >
                <span className="font-medium">{item.label}</span>
                {isActive && (
                  <motion.div
                    layoutId="activeIndicator"
                    className="absolute right-2 w-2 h-2 bg-white rounded-full shadow-sm"
                  />
                )}
              </motion.button>
            );
          })}
        </div>

        {/* Language Switcher */}
        <div className="mt-8 pt-6 border-t border-emerald-100">
          <div className="px-4">
            <LanguageSwitcher />
          </div>
        </div>

        {/* Info Card */}
        <div className="mt-6 mx-4 p-4 bg-gradient-to-br from-emerald-100 to-lime-100 rounded-xl border border-emerald-200">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-3 h-3 bg-emerald-400 rounded-full animate-pulse"></div>
            <span className="text-emerald-700 text-sm font-semibold">{t('sidebar.activeResearch')}</span>
          </div>
          <p className="text-emerald-600 text-xs leading-relaxed">
            {t('sidebar.activeResearchDesc')}
          </p>
        </div>
      </div>
    </motion.nav>
  );
};

export default Sidebar;
