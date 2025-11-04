import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen flex items-center justify-center bg-gradient-to-br from-green-50 to-blue-50">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/2132250/pexels-photo-2132250.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop)'
        }}
      />
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        <h1 className="text-5xl md:text-7xl font-bold text-slate-900 mb-6">
          DeepDetect Project
        </h1>
        <p className="text-xl md:text-2xl text-slate-700 mb-8 leading-relaxed">
          Developing an image-based mobile diagnosis application for 
          <span className="text-green-600 font-semibold"> Early Disease Detection</span> in potato farming
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200 shadow-lg">
            Explore Project
          </button>
          <button className="border-2 border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-white px-8 py-4 rounded-lg font-semibold transition-all duration-200">
            Meet the Team
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;