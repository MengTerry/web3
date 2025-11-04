import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { projects, teamMembers } from '../data/mockData';

interface DashboardProps {
  onNavigateProjects: () => void;
  onNavigateResearch: () => void;
}

const Dashboard: React.FC<DashboardProps> = ({ onNavigateProjects, onNavigateResearch }) => {
  const { t } = useTranslation();
  const activeProjects = projects.filter(p => p.status === 'active').length;
  const totalBudget = projects.reduce((sum, p) => sum + p.budget.total, 0);
  const avgProgress = 75;

  const stats = [
    {
      title: t('dashboard.stats.activeProjects'),
      value: activeProjects,
      trend: 'up'
    },
    {
      title: t('dashboard.stats.teamMembers'),
      value: teamMembers.length,
      trend: 'up'
    },
    {
      title: t('dashboard.stats.avgProgress'),
      value: `${avgProgress}%`,
      trend: 'up'
    }
  ];

  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative overflow-hidden bg-gradient-to-br from-emerald-100 via-lime-100 to-sky-100 rounded-3xl p-8 text-emerald-900 border border-emerald-100 shadow-lg"
      >
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/2132250/pexels-photo-2132250.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop')] bg-cover bg-center opacity-20 mix-blend-multiply"></div>
        <div className="relative z-10">
          <motion.h1
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-6xl font-bold mb-4 text-emerald-900"
          >
            {t('dashboard.title')}
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-lime-500">
              {t('dashboard.subtitle')}
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="text-lg text-emerald-800 mb-8 max-w-2xl"
          >
            {t('dashboard.description')}
          </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="flex gap-4"
        >
          <button
            type="button"
            onClick={onNavigateProjects}
            className="bg-gradient-to-r from-emerald-500 to-lime-500 hover:from-emerald-600 hover:to-lime-600 px-8 py-3 rounded-xl font-semibold text-white transition-all duration-200 shadow-md hover:shadow-lg"
          >
            {t('dashboard.exploreBtn')}
          </button>
          <button
            type="button"
            onClick={onNavigateResearch}
            className="border border-emerald-300 text-emerald-700 hover:bg-emerald-50 px-8 py-3 rounded-xl font-semibold transition-all duration-200"
          >
            {t('dashboard.researchBtn')}
          </button>
        </motion.div>
        </div>
      </motion.div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => {
          
          return (
            <motion.div
              key={stat.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-200 border border-emerald-100"
            >
              <div className="flex items-center justify-between mb-2">
                <div className="text-sm text-emerald-700 font-medium">
                  {stat.title}
                </div>
              </div>
              <h3 className="text-2xl font-bold text-emerald-900">
                {stat.value}
              </h3>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default Dashboard;
