import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import {
  Calendar,
  Users,
  Clock,
  CheckCircle,
  PauseCircle,
  PlayCircle
} from 'lucide-react';
import { projects } from '../data/mockData';
import { Project } from '../types';

const ProjectsView: React.FC = () => {
  const { t } = useTranslation();
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [filter, setFilter] = useState('all');

  const statusConfig = {
    active: { icon: PlayCircle, color: 'text-green-600', bg: 'bg-green-100', label: 'Active' },
    planning: { icon: Clock, color: 'text-blue-600', bg: 'bg-blue-100', label: 'Planning' },
    completed: { icon: CheckCircle, color: 'text-purple-600', bg: 'bg-purple-100', label: 'Completed' },
    paused: { icon: PauseCircle, color: 'text-orange-600', bg: 'bg-orange-100', label: 'Paused' },
  };

  const priorityConfig = {
    low: { color: 'text-gray-600', bg: 'bg-gray-100' },
    medium: { color: 'text-yellow-600', bg: 'bg-yellow-100' },
    high: { color: 'text-orange-600', bg: 'bg-orange-100' },
    critical: { color: 'text-red-600', bg: 'bg-red-100' },
  };

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.status === filter);

  const ProjectCard: React.FC<{ project: Project; index: number }> = ({ project, index }) => {
    const StatusIcon = statusConfig[project.status].icon;
    const completedMilestones = project.milestones.filter(m => m.completed).length;
    const totalMilestones = project.milestones.length;

    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.1 }}
        className="bg-white rounded-2xl shadow-lg border border-emerald-100 overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer"
        onClick={() => setSelectedProject(project)}
      >
        {/* Header */}
        <div className="p-6 pb-4">
          <div className="flex items-start mb-4">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                <h3 className="text-xl font-bold text-emerald-900">
                  {project.title}
                </h3>
                <span className={`px-2 py-1 rounded-full text-xs font-semibold ${priorityConfig[project.priority].bg} ${priorityConfig[project.priority].color}`}>
                  {project.priority.toUpperCase()}
                </span>
              </div>
              <p className="text-emerald-700 mb-3">
                {project.subtitle}
              </p>
              <p className="text-emerald-800 text-sm leading-relaxed">
                {project.description}
              </p>
              <div className="flex items-center gap-2 mt-3">
                <StatusIcon className={`w-4 h-4 ${statusConfig[project.status].color}`} />
                <span className={`text-sm font-semibold ${statusConfig[project.status].color}`}>
                  {statusConfig[project.status].label}
                </span>
              </div>
            </div>
          </div>

        {/* Progress Bar */}
          <div className="mb-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-semibold text-emerald-700">
                {t('projects.progress')}
              </span>
              <span className="text-sm font-bold text-emerald-900">
                {project.progress}%
              </span>
            </div>
            <div className="w-full bg-emerald-100 rounded-full h-2">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${project.progress}%` }}
                transition={{ duration: 1, delay: index * 0.1 }}
                className="bg-gradient-to-r from-emerald-500 to-lime-500 h-2 rounded-full"
              />
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div className="text-center">
              <div className="flex items-center justify-center gap-1 mb-1">
                <Users className="w-4 h-4 text-emerald-500" />
                <span className="text-lg font-bold text-emerald-900">
                  {project.team.length}
                </span>
              </div>
              <span className="text-xs text-emerald-500">{t('projects.team')}</span>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center gap-1 mb-1">
                <CheckCircle className="w-4 h-4 text-emerald-500" />
                <span className="text-lg font-bold text-emerald-900">
                  {completedMilestones}/{totalMilestones}
                </span>
              </div>
              <span className="text-xs text-emerald-500">{t('projects.milestones')}</span>
            </div>
          </div>

          {/* Technologies */}
          <div className="flex flex-wrap gap-2">
            {project.technologies.slice(0, 3).map((tech, techIndex) => (
              <span
                key={techIndex}
                className="px-2 py-1 bg-emerald-50 text-emerald-700 text-xs rounded-full"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 3 && (
              <span className="px-2 py-1 bg-emerald-50 text-emerald-500 text-xs rounded-full">
                +{project.technologies.length - 3} more
              </span>
            )}
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-4 bg-emerald-50 border-t border-emerald-100">
          <div className="flex items-center gap-2 text-sm text-emerald-600">
            <Calendar className="w-4 h-4" />
            <span>
              {new Date(project.startDate).toLocaleDateString()} - {' '}
              {project.endDate ? new Date(project.endDate).toLocaleDateString() : 'Ongoing'}
            </span>
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
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">{t('projects.title')}</h1>
          <p className="text-gray-600 dark:text-gray-400 mt-1">
            {t('projects.subtitle')}
          </p>
        </div>
      </div>

      {/* Filters */}
      <div className="flex gap-2 overflow-x-auto pb-2">
        {['all', 'active', 'planning', 'completed', 'paused'].map((filterOption) => (
          <motion.button
            key={filterOption}
            onClick={() => setFilter(filterOption)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`px-4 py-2 rounded-xl font-semibold transition-all duration-200 whitespace-nowrap ${
              filter === filterOption
                ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
            }`}
          >
            {t(`projects.filter${filterOption.charAt(0).toUpperCase() + filterOption.slice(1)}`)}
          </motion.button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <AnimatePresence mode="wait">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </AnimatePresence>
      </div>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white dark:bg-gray-800 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-6 border-b border-gray-200 dark:border-gray-700">
                <div className="flex items-center justify-between">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                    {selectedProject.title}
                  </h2>
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
                  >
                    ✕
                  </button>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-700 dark:text-gray-300 mb-6">
                  {selectedProject.description}
                </p>
                
                {/* Objectives */}
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                    Objectives
                  </h3>
                  <ul className="space-y-2">
                    {selectedProject.objectives.map((objective, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700 dark:text-gray-300">{objective}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Milestones */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                    Milestones
                  </h3>
                  <div className="space-y-3">
                    {selectedProject.milestones.map((milestone) => (
                      <div
                        key={milestone.id}
                        className={`p-4 rounded-lg border ${
                          milestone.completed
                            ? 'bg-green-50 border-green-200 dark:bg-green-900/20 dark:border-green-800'
                            : 'bg-gray-50 border-gray-200 dark:bg-gray-700 dark:border-gray-600'
                        }`}
                      >
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-semibold text-gray-900 dark:text-white">
                            {milestone.title}
                          </h4>
                          <div className="flex items-center gap-2">
                            {milestone.completed ? (
                              <CheckCircle className="w-5 h-5 text-green-600" />
                            ) : (
                              <Clock className="w-5 h-5 text-gray-500" />
                            )}
                            <span className="text-sm text-gray-500">
                              {milestone.completed ? milestone.completedDate : milestone.dueDate}
                            </span>
                          </div>
                        </div>
                        <p className="text-gray-600 dark:text-gray-400 text-sm">
                          {milestone.description}
                        </p>
                      </div>
                    ))}
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

export default ProjectsView;
