import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import {
  Award,
  Users,
  User,
  Search,
  Star,
  Code,
  Brain,
  Microscope,
  X
} from 'lucide-react';
import { teamMembers } from '../data/mockData';
import { TeamMember } from '../types';

const TeamView: React.FC = () => {
  const { t } = useTranslation();
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [roleFilter, setRoleFilter] = useState('all');

  const roles = ['all', ...new Set(teamMembers.map(member => member.role.toLowerCase()))];
  const roleLabels: Record<string, string> = {
    all: t('team.filters.allRoles'),
    'principal investigator (pi)': t('team.roles.principalInvestigator'),
    'co-investigator': t('team.roles.coInvestigator'),
    'co-investigator, ibers': t('team.roles.coInvestigatorIbers'),
    'research fellow': t('team.roles.researchFellow'),
    'researcher & phd candidate': t('team.roles.researcherPhd')
  };
  
  const filteredMembers = teamMembers.filter(member => {
    const matchesSearch = member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         member.role.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         member.specialization.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesRole = roleFilter === 'all' || member.role.toLowerCase().includes(roleFilter);
    return matchesSearch && matchesRole;
  });

  const getRoleIcon = (role: string) => {
    if (role.includes('AI') || role.includes('ML')) return Brain;
    if (role.includes('Developer') || role.includes('Engineer')) return Code;
    if (role.includes('Scientist')) return Microscope;
    return Users;
  };

  const TeamCard: React.FC<{ member: TeamMember; index: number }> = ({ member, index }) => {
    const RoleIcon = getRoleIcon(member.role);

    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.1 }}
        className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer group"
        onClick={() => setSelectedMember(member)}
      >
        {/* Header with Avatar */}
        <div className="relative p-6 pb-4">
          {member.isLead && (
            <div className="absolute top-4 right-4">
              <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-2 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                <Star className="w-3 h-3" />
                {t('team.badgeLead')}
              </div>
            </div>
          )}
          
          <div className="flex items-start gap-4">
            <div className="relative">
              {member.avatar ? (
                <img
                  src={member.avatar}
                  alt={member.name}
                  className="w-16 h-16 rounded-xl object-cover ring-4 ring-white dark:ring-gray-700 shadow-lg"
                />
              ) : (
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-600 dark:to-gray-700 ring-4 ring-white dark:ring-gray-700 shadow-lg flex items-center justify-center">
                  <User className="w-8 h-8 text-gray-400 dark:text-gray-500" />
                </div>
              )}
              <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center shadow-lg">
                <RoleIcon className="w-4 h-4 text-white" />
              </div>
            </div>
            
            <div className="flex-1">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1 group-hover:text-blue-600 transition-colors">
                {member.name}
              </h3>
              <p className="text-blue-600 dark:text-blue-400 font-semibold mb-2">
                {member.role}
              </p>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                {member.specialization}
              </p>
            </div>
          </div>
        </div>


        {/* Footer */}
        <div className="px-6 py-4 bg-gray-50 dark:bg-gray-750 border-t border-gray-100 dark:border-gray-700">
          <div className="flex justify-end">
            <div className="text-xs text-gray-500">{t('team.viewProfile')}</div>
          </div>
        </div>
      </motion.div>
    );
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">{t('team.title')}</h1>
          <p className="text-gray-600 dark:text-gray-400 mt-1">
            {t('team.subtitle')}
          </p>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder={t('team.searchPlaceholder')}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
          />
        </div>
        <div className="flex gap-2">
          {roles.map((role) => (
            <motion.button
              key={role}
              onClick={() => setRoleFilter(role)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-4 py-3 rounded-xl font-semibold transition-all duration-200 whitespace-nowrap ${
                roleFilter === role
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
            >
              {roleLabels[role] || role.charAt(0).toUpperCase() + role.slice(1)}
            </motion.button>
          ))}
        </div>
      </div>

      {/* Team Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl p-6 text-white">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-blue-100 text-sm">{t('team.stats.totalMembers')}</p>
              <p className="text-3xl font-bold">{teamMembers.length}</p>
            </div>
            <Users className="w-8 h-8 text-blue-200" />
          </div>
        </div>
        <div className="bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl p-6 text-white">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-purple-100 text-sm">{t('team.stats.teamLeads')}</p>
              <p className="text-3xl font-bold">{teamMembers.filter(m => m.isLead).length}</p>
            </div>
            <Award className="w-8 h-8 text-purple-200" />
          </div>
        </div>
        <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-xl p-6 text-white">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-green-100 text-sm">{t('team.stats.specializations')}</p>
              <p className="text-3xl font-bold">{new Set(teamMembers.map(m => m.specialization)).size}</p>
            </div>
            <Brain className="w-8 h-8 text-green-200" />
          </div>
        </div>
        <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl p-6 text-white">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-orange-100 text-sm">{t('team.stats.totalSkills')}</p>
              <p className="text-3xl font-bold">{new Set(teamMembers.flatMap(m => m.skills)).size}</p>
            </div>
            <Code className="w-8 h-8 text-orange-200" />
          </div>
        </div>
      </div>

      {/* Team Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence mode="wait">
          {filteredMembers.map((member, index) => (
            <TeamCard key={member.id} member={member} index={index} />
          ))}
        </AnimatePresence>
      </div>

      {/* Member Detail Modal */}
      <AnimatePresence>
        {selectedMember && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
            onClick={() => setSelectedMember(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white dark:bg-gray-800 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-4">
                    <img
                      src={selectedMember.avatar}
                      alt={selectedMember.name}
                      className="w-20 h-20 rounded-xl object-cover ring-4 ring-white dark:ring-gray-700 shadow-lg"
                    />
                    <div>
                      <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                        {selectedMember.name}
                      </h2>
                      <p className="text-blue-600 dark:text-blue-400 font-semibold">
                        {selectedMember.role}
                      </p>
                      <p className="text-gray-600 dark:text-gray-400">
                        {selectedMember.specialization}
                      </p>
                    </div>
                  </div>
                                    <button
                    onClick={() => setSelectedMember(null)}
                    className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
                    aria-label={t('team.modal.close')}
                  >
                    <X className="w-5 h-5 text-gray-500" />
                  </button>
                </div>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                      {t('team.modal.about')}
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                      {selectedMember.bio}
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                      {t('team.modal.skills')}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedMember.skills.map((skill, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 text-blue-700 dark:text-blue-300 rounded-full font-medium"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default TeamView;



