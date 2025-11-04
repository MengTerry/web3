import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import {
  Heart,
  MessageCircle,
  Share,
  MoreHorizontal,
  TrendingUp,
  Award,
  Zap,
  Users
} from 'lucide-react';
import { allUpdates } from '../data/mockData';

const ActivityFeed: React.FC = () => {
  const { t } = useTranslation();
  const [filter, setFilter] = useState('all');
  const [likedPosts, setLikedPosts] = useState<Set<string>>(new Set());

  const filters = [
    { id: 'all', label: 'All Updates', icon: TrendingUp },
    { id: 'milestone', label: 'Milestones', icon: Award },
    { id: 'progress', label: 'Progress', icon: Zap },
    { id: 'research', label: 'Research', icon: Users },
  ];

  const filteredUpdates = filter === 'all' 
    ? allUpdates 
    : allUpdates.filter(update => update.type === filter);

  const handleLike = (updateId: string) => {
    setLikedPosts(prev => {
      const newSet = new Set(prev);
      if (newSet.has(updateId)) {
        newSet.delete(updateId);
      } else {
        newSet.add(updateId);
      }
      return newSet;
    });
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'milestone': return 'from-green-500 to-emerald-600';
      case 'progress': return 'from-blue-500 to-cyan-600';
      case 'research': return 'from-purple-500 to-violet-600';
      case 'announcement': return 'from-orange-500 to-amber-600';
      default: return 'from-gray-500 to-slate-600';
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'milestone': return Award;
      case 'progress': return Zap;
      case 'research': return Users;
      case 'announcement': return TrendingUp;
      default: return TrendingUp;
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Activity Feed</h1>
          <p className="text-gray-600 dark:text-gray-400 mt-1">
            Latest updates from our research projects
          </p>
        </div>
      </div>

      {/* Filters */}
      <div className="flex gap-2 overflow-x-auto pb-2">
        {filters.map((filterOption) => {
          const Icon = filterOption.icon;
          return (
            <motion.button
              key={filterOption.id}
              onClick={() => setFilter(filterOption.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl font-semibold transition-all duration-200 whitespace-nowrap ${
                filter === filterOption.id
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
            >
              <Icon className="w-4 h-4" />
              {filterOption.label}
            </motion.button>
          );
        })}
      </div>

      {/* Feed */}
      <div className="space-y-6">
        <AnimatePresence mode="wait">
          {filteredUpdates.map((update, index) => {
            const TypeIcon = getTypeIcon(update.type);
            const isLiked = likedPosts.has(update.id);
            
            return (
              <motion.div
                key={update.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                {/* Header */}
                <div className="p-6 pb-4">
                  <div className="flex items-start gap-4">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${getTypeColor(update.type)} flex items-center justify-center text-white shadow-lg`}>
                      <TypeIcon className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="font-bold text-gray-900 dark:text-white">
                          {update.author}
                        </h3>
                        <span className="text-gray-500 dark:text-gray-400">
                          {update.authorHandle}
                        </span>
                        <span className="text-gray-400">•</span>
                        <span className="text-gray-500 dark:text-gray-400 text-sm">
                          {update.date}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className={`px-2 py-1 rounded-full text-xs font-semibold bg-gradient-to-r ${getTypeColor(update.type)} text-white`}>
                          {update.type.charAt(0).toUpperCase() + update.type.slice(1)}
                        </span>
                        {'projectTitle' in update && (
                          <span className="px-2 py-1 rounded-full text-xs font-semibold bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300">
                            {update.projectTitle}
                          </span>
                        )}
                      </div>
                    </div>
                    <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors">
                      <MoreHorizontal className="w-5 h-5 text-gray-500" />
                    </button>
                  </div>
                </div>

                {/* Content */}
                <div className="px-6 pb-4">
                  <p className="text-gray-800 dark:text-gray-200 leading-relaxed mb-3">
                    {update.content}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {update.hashtags.map((tag, tagIndex) => (
                      <motion.span
                        key={tagIndex}
                        whileHover={{ scale: 1.05 }}
                        className="text-blue-600 dark:text-blue-400 hover:underline cursor-pointer font-medium"
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="px-6 py-4 border-t border-gray-100 dark:border-gray-700 bg-gray-50 dark:bg-gray-750">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-6">
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => handleLike(update.id)}
                        className={`flex items-center gap-2 transition-colors ${
                          isLiked 
                            ? 'text-red-600' 
                            : 'text-gray-500 hover:text-red-600'
                        }`}
                      >
                        <Heart className={`w-5 h-5 ${isLiked ? 'fill-current' : ''}`} />
                        <span className="text-sm font-semibold">
                          {update.likes + (isLiked ? 1 : 0)}
                        </span>
                      </motion.button>
                      
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="flex items-center gap-2 text-gray-500 hover:text-blue-600 transition-colors"
                      >
                        <MessageCircle className="w-5 h-5" />
                        <span className="text-sm font-semibold">{update.comments}</span>
                      </motion.button>
                      
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="flex items-center gap-2 text-gray-500 hover:text-green-600 transition-colors"
                      >
                        <Share className="w-5 h-5" />
                        <span className="text-sm font-semibold">{update.shares}</span>
                      </motion.button>
                    </div>
                    
                    <div className="text-xs text-gray-400">
                      {Math.floor(Math.random() * 1000)} views
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default ActivityFeed;