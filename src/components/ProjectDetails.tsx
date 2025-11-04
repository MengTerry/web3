import React, { useState } from 'react';
import { Brain, MapPin, Users, PoundSterling } from 'lucide-react';

const ProjectDetails: React.FC = () => {
  const [activeTab, setActiveTab] = useState('technology');

  const tabs = [
    { id: 'technology', label: 'Core Technology', icon: Brain },
    { id: 'activities', label: 'Key Activities', icon: MapPin },
    { id: 'team-budget', label: 'Team & Budget', icon: PoundSterling },
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case 'technology':
        return (
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Next-Generation Vision-Language Models</h3>
            <p className="text-slate-700 leading-relaxed mb-6">
              Our core innovation lies in developing an Agent-AI that integrates cutting-edge Vision-Language Models (VLMs). 
              This system goes beyond simple image identification by combining visual analysis with environmental data 
              to provide comprehensive diagnostics and actionable recommendations.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-green-50 p-6 rounded-lg">
                <h4 className="font-semibold text-slate-900 mb-3">Advanced Image Analysis</h4>
                <p className="text-slate-700">
                  Utilizing state-of-the-art computer vision to detect early-stage potato diseases with high accuracy.
                </p>
              </div>
              <div className="bg-blue-50 p-6 rounded-lg">
                <h4 className="font-semibold text-slate-900 mb-3">Contextual Intelligence</h4>
                <p className="text-slate-700">
                  Integration of environmental factors and farming conditions for more precise diagnostic recommendations.
                </p>
              </div>
            </div>
          </div>
        );
      case 'activities':
        return (
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Research & Development Activities</h3>
            <div className="space-y-6">
              <div className="border-l-4 border-green-600 pl-6">
                <h4 className="font-semibold text-slate-900 mb-2">Field Trips</h4>
                <p className="text-slate-700 mb-3">
                  Multiple visits to 3 partner farms to collect comprehensive data across different stages 
                  of the potato growth cycle. This real-world data is critical for training robust AI models.
                </p>
              </div>
              <div className="border-l-4 border-blue-600 pl-6">
                <h4 className="font-semibold text-slate-900 mb-2">Conference Participation</h4>
                <p className="text-slate-700 mb-3">
                  Attendance at the British Potato Event 2025 to validate market needs, explore existing 
                  technologies, and network with industry stakeholders.
                </p>
              </div>
              <div className="border-l-4 border-purple-600 pl-6">
                <h4 className="font-semibold text-slate-900 mb-2">User Workshops</h4>
                <p className="text-slate-700 mb-3">
                  A comprehensive 2-day workshop with 30 participants to gather direct user feedback 
                  and co-create the application with farmers and agronomists.
                </p>
              </div>
            </div>
          </div>
        );
      case 'team-budget':
        return (
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Project Team & Financial Overview</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold text-slate-900 mb-4">Core Team Members</h4>
                <ul className="space-y-2 text-slate-700">
                  <li>• Terry Tang - Project Lead</li>
                  <li>• Luned Roberts - Research Coordinator</li>
                  <li>• Edore Akpokodje - AI Specialist</li>
                  <li>• Praboda Rajapaksha - Data Scientist</li>
                  <li>• Aiswarya Girija - Field Researcher</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-slate-900 mb-4">Budget Allocation (£47,786.34)</h4>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-slate-700">Salaries</span>
                    <span className="font-semibold">£28,736.22</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-700">Overheads</span>
                    <span className="font-semibold">£12,931.30</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-700">Travel & Other</span>
                    <span className="font-semibold">£5,968.82</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-700">Materials</span>
                    <span className="font-semibold">£150.00</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <section className="py-16 bg-slate-50">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">Project Details</h2>
        
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="flex flex-wrap border-b border-slate-200">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-6 py-4 font-semibold transition-all duration-200 ${
                    activeTab === tab.id
                      ? 'bg-green-600 text-white'
                      : 'text-slate-600 hover:bg-slate-50'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  {tab.label}
                </button>
              );
            })}
          </div>
          
          <div className="p-8">
            {renderTabContent()}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectDetails;