import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import DiscussionForum from './components/DiscussionForum';
import ProjectsView from './components/ProjectsView';
import TeamView from './components/TeamView';
import ResearchView from './components/ResearchView';
import Footer from './components/Footer';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  const renderContent = () => {
    switch (activeSection) {
      case 'home':
        return <Dashboard onNavigateProjects={() => setActiveSection('projects')} onNavigateResearch={() => setActiveSection('research')} />;
      case 'projects':
        return <ProjectsView />;
      case 'team':
        return <TeamView />;
      case 'research':
        return <ResearchView />;
      case 'discussion':
        return <DiscussionForum />;
      default:
        return <Dashboard onNavigateProjects={() => setActiveSection('projects')} onNavigateResearch={() => setActiveSection('research')} />;
    }
  };

  const handleNavigate = (section: string) => {
    setActiveSection(section);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-emerald-50 flex flex-col">
      <Sidebar activeSection={activeSection} onSectionChange={handleNavigate} />

      <main className="ml-72 p-10 flex-grow bg-white shadow-sm rounded-tl-3xl">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeSection}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            {renderContent()}
          </motion.div>
        </AnimatePresence>
      </main>

      <div className="ml-72">
        <Footer onNavigate={handleNavigate} />
      </div>
    </div>
  );
}

export default App;
