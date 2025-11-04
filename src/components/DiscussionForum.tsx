import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import emailjs from '@emailjs/browser';
import {
  MessageSquare,
  ThumbsUp,
  Send,
  User,
  Calendar,
  Hash,
  TrendingUp,
  Leaf,
  Bug,
  CloudRain,
  AlertCircle
} from 'lucide-react';

interface Discussion {
  id: string;
  title: string;
  author: string;
  date: string;
  category: string;
  content: string;
  likes: number;
  replies: number;
  tags: string[];
}

const DiscussionForum: React.FC = () => {
  const { t } = useTranslation();
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [topicTitle, setTopicTitle] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [newMessage, setNewMessage] = useState('');
  const [likedPosts, setLikedPosts] = useState<Set<string>>(new Set());
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [statusMessage, setStatusMessage] = useState('');

  const categories = [
    { id: 'all', labelKey: 'forum.categories.all', icon: MessageSquare, color: 'from-blue-500 to-purple-500' },
    { id: 'disease', labelKey: 'forum.categories.disease', icon: Bug, color: 'from-red-500 to-orange-500' },
    { id: 'climate', labelKey: 'forum.categories.climate', icon: CloudRain, color: 'from-cyan-500 to-blue-500' },
    { id: 'technology', labelKey: 'forum.categories.technology', icon: TrendingUp, color: 'from-green-500 to-emerald-500' },
    { id: 'sustainable', labelKey: 'forum.categories.sustainable', icon: Leaf, color: 'from-emerald-500 to-green-500' },
  ];

  const discussions: Discussion[] = [];

  const filteredDiscussions = selectedCategory === 'all'
    ? discussions
    : discussions.filter(d => d.category === selectedCategory);

  const handleLike = (id: string) => {
    setLikedPosts(prev => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  };

  const getCategoryIcon = (category: string) => {
    const cat = categories.find(c => c.id === category);
    return cat ? cat.icon : MessageSquare;
  };

  const getCategoryColor = (category: string) => {
    const cat = categories.find(c => c.id === category);
    return cat ? cat.color : 'from-gray-500 to-gray-600';
  };

  const handlePost = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!newMessage.trim()) {
      setStatus('error');
      setStatusMessage(t('forum.errors.emptyMessage'));
      return;
    }

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      setStatus('error');
      setStatusMessage(t('forum.errors.configMissing'));
      return;
    }

    setStatus('loading');
    setStatusMessage('');

    try {
      await emailjs.send(serviceId, templateId, {
        subject: topicTitle || t('forum.email.defaultSubject'),
        message: newMessage,
        category: selectedCategory,
        from_email: contactEmail || 'anonymous@deepdetect.community',
        email: contactEmail || 'met57@aber.ac.uk',
      }, publicKey);

      setStatus('success');
      setStatusMessage(t('forum.status.success'));
      setTopicTitle('');
      setContactEmail('');
      setNewMessage('');
    } catch (err) {
      setStatus('error');
      setStatusMessage(t('forum.status.error'));
      console.error('Email send error', err);
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white border border-emerald-100 rounded-3xl p-8 text-emerald-900 shadow-lg"
      >
        <div className="flex items-center gap-3 mb-4">
          <MessageSquare className="w-10 h-10 text-emerald-600" />
          <h1 className="text-3xl font-bold text-emerald-900">{t('forum.title')}</h1>
        </div>
        <p className="text-lg text-emerald-700 mb-6">
          {t('forum.subtitle')}
        </p>

        {/* Ask Question Section */}
        <form onSubmit={handlePost} className="bg-emerald-50 rounded-2xl p-4 space-y-3 border border-emerald-100">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <input
              type="text"
              value={topicTitle}
              onChange={(e) => setTopicTitle(e.target.value)}
              placeholder={t('forum.placeholders.topicTitle')}
              className="px-4 py-3 bg-white border border-emerald-200 rounded-xl text-emerald-900 placeholder:text-emerald-400 focus:outline-none focus:border-emerald-400 transition"
            />
            <input
              type="email"
              value={contactEmail}
              onChange={(e) => setContactEmail(e.target.value)}
              placeholder={t('forum.placeholders.email')}
              className="px-4 py-3 bg-white border border-emerald-200 rounded-xl text-emerald-900 placeholder:text-emerald-400 focus:outline-none focus:border-emerald-400 transition"
            />
          </div>
          <div className="flex flex-col md:flex-row gap-3">
            <input
              type="text"
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              placeholder={t('forum.placeholders.message')}
              className="flex-1 px-4 py-3 bg-white border border-emerald-200 rounded-xl text-emerald-900 placeholder:text-emerald-400 focus:outline-none focus:border-emerald-400 transition"
            />
            <motion.button
              type="submit"
              disabled={status === 'loading'}
              whileHover={{ scale: status === 'loading' ? 1 : 1.05 }}
              whileTap={{ scale: status === 'loading' ? 1 : 0.95 }}
              className={`px-6 py-3 bg-gradient-to-r from-emerald-500 to-lime-500 text-white rounded-xl font-semibold flex items-center gap-2 shadow-sm transition-colors ${
                status === 'loading' ? 'opacity-70 cursor-not-allowed' : 'hover:from-emerald-600 hover:to-lime-600'
              }`}
            >
              <Send className="w-5 h-5" />
              {status === 'loading' ? t('forum.buttons.sending') : t('forum.buttons.post')}
            </motion.button>
          </div>

          {status !== 'idle' && statusMessage && (
            <div
              className={`px-4 py-3 rounded-lg text-sm ${
                status === 'success'
                  ? 'bg-emerald-100 text-emerald-700 border border-emerald-200'
                  : 'bg-rose-100 text-rose-700 border border-rose-200'
              }`}
            >
              {statusMessage}
            </div>
          )}
        </form>
      </motion.div>

      {/* Category Filter */}
      <div className="flex gap-2 overflow-x-auto pb-2">
        {categories.map((category) => {
          const Icon = category.icon;
          return (
            <motion.button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-4 py-2 rounded-xl font-semibold transition-all duration-200 whitespace-nowrap flex items-center gap-2 ${
                selectedCategory === category.id
                  ? 'bg-gradient-to-r ' + category.color + ' text-white shadow-lg'
                  : 'bg-emerald-50 text-emerald-700 hover:bg-emerald-100'
              }`}
            >
              <Icon className="w-4 h-4" />
              {t(category.labelKey)}
            </motion.button>
          );
        })}
      </div>

      {/* Discussions List */}
      <div className="space-y-4">
        <AnimatePresence mode="wait">
          {filteredDiscussions.map((discussion, index) => {
            const CategoryIcon = getCategoryIcon(discussion.category);
            const isLiked = likedPosts.has(discussion.id);

            return (
              <motion.div
                key={discussion.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-sm border border-emerald-100 hover:shadow-lg transition-all duration-200"
              >
                <div className="p-6">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-start gap-3">
                      <div className={`w-10 h-10 rounded-lg bg-gradient-to-r ${getCategoryColor(discussion.category)} flex items-center justify-center`}>
                        <CategoryIcon className="w-5 h-5 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-bold text-emerald-900 mb-1">
                          {discussion.title}
                        </h3>
                        <div className="flex items-center gap-3 text-sm text-emerald-500">
                          <span className="flex items-center gap-1">
                            <User className="w-4 h-4" />
                            {discussion.author}
                          </span>
                          <span className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            {discussion.date}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <p className="text-emerald-800 mb-4 leading-relaxed">
                    {discussion.content}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {discussion.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-sky-100 text-sky-700 text-sm rounded-full flex items-center gap-1"
                      >
                        <Hash className="w-3 h-3" />
                        {tag.substring(1)}
                      </span>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="flex items-center justify-between pt-4 border-t border-emerald-100">
                    <div className="flex items-center gap-4">
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => handleLike(discussion.id)}
                        className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                          isLiked
                            ? 'bg-emerald-100 text-emerald-600'
                            : 'hover:bg-emerald-50 text-emerald-700'
                        }`}
                      >
                        <ThumbsUp className={`w-4 h-4 ${isLiked ? 'fill-current' : ''}`} />
                        <span className="font-semibold">{discussion.likes + (isLiked ? 1 : 0)}</span>
                      </motion.button>
                      <button className="flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-emerald-50 text-emerald-700 transition-colors">
                        <MessageSquare className="w-4 h-4" />
                        <span className="font-semibold">
                          {t('forum.labels.replies', { count: discussion.replies })}
                        </span>
                      </button>
                    </div>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-4 py-2 bg-gradient-to-r from-emerald-500 to-lime-500 text-white rounded-lg font-semibold hover:shadow-lg transition-all"
                    >
                      {t('forum.buttons.join')}
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>

      {/* Call to Action */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="bg-white rounded-3xl p-8 text-center border border-emerald-100 shadow-sm"
      >
        <AlertCircle className="w-12 h-12 text-emerald-600 mx-auto mb-4" />
        <h2 className="text-2xl font-bold text-emerald-900 mb-3">
          {t('forum.cta.title')}
        </h2>
        <p className="text-emerald-700 mb-6 max-w-2xl mx-auto">
          {t('forum.cta.description')}
        </p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-8 py-4 bg-gradient-to-r from-emerald-500 to-lime-500 text-white rounded-xl font-bold text-lg shadow-md hover:shadow-lg transition-all"
        >
          {t('forum.buttons.start')}
        </motion.button>
      </motion.div>
    </div>
  );
};

export default DiscussionForum;

