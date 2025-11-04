import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Globe } from 'lucide-react';

const LanguageSwitcher: React.FC = () => {
  const { i18n } = useTranslation();
  const currentLang = i18n.language;

  const toggleLanguage = () => {
    const newLang = currentLang === 'en' ? 'cy' : 'en';
    i18n.changeLanguage(newLang);
  };

  return (
    <motion.button
      onClick={toggleLanguage}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-xl font-semibold transition-all duration-200 shadow-lg"
    >
      <Globe className="w-4 h-4" />
      <span className="text-sm uppercase font-bold">
        {currentLang === 'en' ? 'EN' : 'CY'}
      </span>
      <span className="text-xs opacity-75">|</span>
      <span className="text-xs opacity-75">
        {currentLang === 'en' ? 'Cymraeg' : 'English'}
      </span>
    </motion.button>
  );
};

export default LanguageSwitcher;