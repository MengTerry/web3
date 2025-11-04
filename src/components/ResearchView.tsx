import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import {
  BookOpen,
  FileText,
  Award,
  TrendingUp,
  Users,
  Target,
  Zap,
  Leaf
} from 'lucide-react';

const ResearchView: React.FC = () => {
  const { t } = useTranslation();
  const researchAreas = [
    {
      title: 'Computer Vision & AI',
      description: 'Advanced deep learning models for agricultural disease detection using state-of-the-art computer vision techniques.',
      icon: Zap,
      color: 'from-blue-500 to-cyan-500',
      achievements: ['97.3% accuracy', '15+ disease types', 'Real-time detection']
    },
    {
      title: 'Plant Pathology',
      description: 'Comprehensive study of potato diseases, their patterns, and environmental factors affecting crop health.',
      icon: Leaf,
      color: 'from-green-500 to-emerald-500',
      achievements: ['50+ farm partnerships', '10,000+ samples', 'Field validation']
    },
    {
      title: 'Precision Agriculture',
      description: 'Integration of AI with IoT sensors and environmental data for optimized farming practices.',
      icon: Target,
      color: 'from-purple-500 to-pink-500',
      achievements: ['23% loss reduction', '31% pesticide reduction', 'Sustainable impact']
    },
    {
      title: 'Mobile Technology',
      description: 'User-friendly mobile applications that bring AI technology directly to farmers in the field.',
      icon: Users,
      color: 'from-orange-500 to-red-500',
      achievements: ['Cross-platform', 'Offline capability', 'Farmer-centered design']
    }
  ];

  const publications: any[] = [];

  const impact = [
    {
      value: '50+',
      label: t('research.impactStats.farms'),
      icon: Users,
      description: t('research.impactStats.farmsDesc')
    },
    {
      value: '23%',
      label: t('research.impactStats.lossReduction'),
      icon: TrendingUp,
      description: t('research.impactStats.lossReductionDesc')
    },
    {
      value: '31%',
      label: t('research.impactStats.pesticideReduction'),
      icon: Leaf,
      description: t('research.impactStats.pesticideReductionDesc')
    },
    {
      value: '£47K',
      label: t('research.impactStats.funding'),
      icon: Award,
      description: t('research.impactStats.fundingDesc')
    }
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-gradient-to-br from-blue-900 via-purple-900 to-pink-900 rounded-2xl p-8 text-white"
      >
        <div className="flex items-center gap-3 mb-4">
          <BookOpen className="w-10 h-10" />
          <h1 className="text-4xl font-bold">{t('research.title')}</h1>
        </div>
        <p className="text-xl text-gray-200 max-w-3xl">
          {t('research.subtitle')}
        </p>
      </motion.div>

      {/* Impact Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {impact.map((item, index) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-200"
            >
              <Icon className="w-8 h-8 text-blue-600 mb-3" />
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-1">
                {item.value}
              </h3>
              <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1">
                {item.label}
              </p>
              <p className="text-xs text-gray-500">
                {item.description}
              </p>
            </motion.div>
          );
        })}
      </div>

      {/* Research Areas */}
      <div>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">{t('research.areasTitle')}</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {researchAreas.map((area, index) => {
            const Icon = area.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + index * 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-200"
              >
                <div className={`w-12 h-12 bg-gradient-to-r ${area.color} rounded-xl flex items-center justify-center mb-4`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {area.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                  {area.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {area.achievements.map((achievement, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 text-blue-700 dark:text-blue-300 text-xs rounded-full font-semibold"
                    >
                      {achievement}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Publications */}
      <div>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">{t('research.publicationsTitle')}</h2>
      </div>

      {/* Methodology */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2 }}
        className="bg-gradient-to-br from-gray-900 to-blue-900 rounded-2xl p-8 text-white"
      >
        <h2 className="text-2xl font-bold mb-4">{t('research.methodologyTitle')}</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div>
            <h3 className="font-semibold mb-2 text-blue-300">1. {t('research.methodology.step1Title')}</h3>
            <p className="text-sm text-gray-300">
              {t('research.methodology.step1Desc')}
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-2 text-purple-300">2. {t('research.methodology.step2Title')}</h3>
            <p className="text-sm text-gray-300">
              {t('research.methodology.step2Desc')}
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-2 text-pink-300">3. {t('research.methodology.step3Title')}</h3>
            <p className="text-sm text-gray-300">
              {t('research.methodology.step3Desc')}
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ResearchView;