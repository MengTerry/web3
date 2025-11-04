import React from 'react';
import { Lightbulb, TrendingUp } from 'lucide-react';

const FutureOutlook: React.FC = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-slate-50 to-green-50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">Future Outlook</h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          {/* Research Vision */}
          <div className="bg-white rounded-xl p-8 shadow-lg">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                <Lightbulb className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900">Research Vision</h3>
            </div>
            
            <div className="space-y-4">
              <p className="text-slate-700 leading-relaxed">
                After the successful completion of the potato disease detection project, our vision extends 
                far beyond a single crop application.
              </p>
              
              <div className="bg-blue-50 p-6 rounded-lg">
                <h4 className="font-semibold text-slate-900 mb-3">Expansion Roadmap</h4>
                <ul className="space-y-2 text-slate-700">
                  <li>• <strong>Oats:</strong> Disease detection in cereal crops</li>
                  <li>• <strong>Wheat:</strong> Large-scale grain crop monitoring</li>
                  <li>• <strong>Peas:</strong> Legume disease identification</li>
                  <li>• <strong>Multi-crop platform:</strong> Universal agricultural AI</li>
                </ul>
              </div>
              
              <p className="text-slate-700 leading-relaxed">
                Our ultimate goal is to create a comprehensive AI platform that supports sustainable 
                agriculture across multiple crop types, helping farmers worldwide make informed decisions 
                for better yields and environmental stewardship.
              </p>
            </div>
          </div>

          {/* Business Plan */}
          <div className="bg-white rounded-xl p-8 shadow-lg">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900">Business Strategy</h3>
            </div>
            
            <div className="space-y-4">
              <p className="text-slate-700 leading-relaxed">
                In partnership with <strong>Omeva Consulting</strong>, we're developing a sustainable 
                business model that makes advanced agricultural AI accessible to all stakeholders.
              </p>
              
              <div className="bg-green-50 p-6 rounded-lg">
                <h4 className="font-semibold text-slate-900 mb-3">Tiered Subscription Model</h4>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <p className="font-medium text-slate-900">Farmer Tier</p>
                      <p className="text-sm text-slate-600">Low-cost subscription for individual farmers</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <p className="font-medium text-slate-900">Premium Tier</p>
                      <p className="text-sm text-slate-600">Advanced services for government agencies</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <p className="font-medium text-slate-900">Enterprise Tier</p>
                      <p className="text-sm text-slate-600">Custom solutions for agricultural companies</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <p className="text-slate-700 leading-relaxed">
                This approach ensures that cutting-edge technology remains accessible to small-scale farmers 
                while providing comprehensive solutions for larger agricultural operations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FutureOutlook;