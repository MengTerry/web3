import React from 'react';
import { Calendar, Heart, MessageCircle, Share } from 'lucide-react';

const ProjectFeed: React.FC = () => {
  const feedItems = [
    {
      id: 1,
      author: 'Aber Agri-Health',
      handle: '@AberAgriHealth',
      date: 'May 30, 2025',
      content: 'FUNDING APPROVED! We are thrilled to announce that our DeepDetect project (Ref: 2025/SFIS Level 1/208) has been approved for support of up to £47,787. This is a major validation of our vision to solve real-world agricultural problems with AI!',
      hashtags: ['#AgriTech', '#Funding'],
      likes: 24,
      comments: 8,
      shares: 12
    },
    {
      id: 2,
      author: 'Aber Agri-Health',
      handle: '@AberAgriHealth',
      date: 'June 1, 2025',
      content: 'PROJECT KICK-OFF. As planned, our project activities officially begin today. The project will have a duration of 6 months, ending on November 31, 2025. The team is ready to start field visits and model development.',
      hashtags: ['#AIforGood', '#DeepDetect'],
      likes: 18,
      comments: 5,
      shares: 7
    },
    {
      id: 3,
      author: 'Aber Agri-Health',
      handle: '@AberAgriHealth',
      date: 'June 5, 2025',
      content: 'WHAT MAKES US DIFFERENT? We don\'t just identify images. Our long-term vision is to develop an Agent-AI based mobile application that not only provides a diagnosis but also delivers genuinely useful, actionable feedback to the farmer.',
      hashtags: ['#Innovation', '#AgentAI'],
      likes: 31,
      comments: 12,
      shares: 15
    },
    {
      id: 4,
      author: 'Aber Agri-Health',
      handle: '@AberAgriHealth',
      date: 'June 10, 2025',
      content: 'WHY ARE FIELD TRIPS SO IMPORTANT? Visiting farms helps us: 1. Understand real-world farming conditions. 2. Validate our AI model\'s relevance. 3. Build trust and get direct feedback from farmers. This ensures our technology solves practical problems.',
      hashtags: ['#UserFocused', '#FieldResearch'],
      likes: 27,
      comments: 9,
      shares: 11
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-2xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">Project Updates</h2>
        <div className="space-y-6">
          {feedItems.map((item) => (
            <div key={item.id} className="bg-white border border-slate-200 rounded-xl p-6 hover:shadow-lg transition-shadow duration-200">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                  A
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="font-bold text-slate-900">{item.author}</h3>
                    <span className="text-slate-500">{item.handle}</span>
                    <span className="text-slate-500">·</span>
                    <span className="text-slate-500 text-sm">{item.date}</span>
                  </div>
                  <p className="text-slate-800 mb-3 leading-relaxed">{item.content}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {item.hashtags.map((tag, index) => (
                      <span key={index} className="text-green-600 hover:underline cursor-pointer">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center gap-6 text-slate-500">
                    <button className="flex items-center gap-2 hover:text-green-600 transition-colors">
                      <MessageCircle className="w-4 h-4" />
                      <span className="text-sm">{item.comments}</span>
                    </button>
                    <button className="flex items-center gap-2 hover:text-red-600 transition-colors">
                      <Heart className="w-4 h-4" />
                      <span className="text-sm">{item.likes}</span>
                    </button>
                    <button className="flex items-center gap-2 hover:text-blue-600 transition-colors">
                      <Share className="w-4 h-4" />
                      <span className="text-sm">{item.shares}</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectFeed;