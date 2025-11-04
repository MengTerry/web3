import React from 'react';
import { ExternalLink } from 'lucide-react';

const TeamSection: React.FC = () => {
  const teamMembers = [
    {
      name: 'Terry Tang',
      role: 'Project Lead',
      description: 'AI Research & Strategic Direction',
      avatar: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop'
    },
    {
      name: 'Luned Roberts',
      role: 'Research Coordinator',
      description: 'Field Research & Data Collection',
      avatar: 'https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop'
    },
    {
      name: 'Edore Akpokodje',
      role: 'AI Specialist',
      description: 'Machine Learning & Model Development',
      avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop'
    },
    {
      name: 'Praboda Rajapaksha',
      role: 'Data Scientist',
      description: 'Data Analysis & Validation',
      avatar: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop'
    },
    {
      name: 'Aiswarya Girija',
      role: 'Field Researcher',
      description: 'Agricultural Research & User Studies',
      avatar: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop'
    },
    {
      name: 'Omeva Consulting',
      role: 'Strategic Partner',
      description: 'Commercialization & Market Strategy',
      avatar: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
      isPartner: true
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">Research Team</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-white border border-slate-200 rounded-xl p-6 hover:shadow-lg transition-all duration-200 hover:-translate-y-1">
              <div className="text-center">
                <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden">
                  <img 
                    src={member.avatar} 
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-1">{member.name}</h3>
                <p className="text-green-600 font-semibold mb-2">{member.role}</p>
                <p className="text-slate-600 text-sm leading-relaxed">{member.description}</p>
                {member.isPartner && (
                  <div className="mt-4">
                    <span className="inline-flex items-center gap-1 text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
                      <ExternalLink className="w-3 h-3" />
                      Strategic Partner
                    </span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;