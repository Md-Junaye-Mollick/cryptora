import React, { useState } from 'react';

const TechStack = () => {
  const [activeCategory, setActiveCategory] = useState('Framework');

  const categories = [
    'Framework',
    'Frontend/Backend',
    'Tools',
    'Language',
    'Database',
    'Blockchain'
  ];

  const frameworks = [
    { name: 'Hyperledger Iroha', img: 'images/TechStack/btnImg1.webp' },
    { name: 'Hyperledger Fabric', img: 'images/TechStack/btnImg2.webp' },
    { name: 'Android Studio', img: 'images/TechStack/btnImg3.webp' },
    { name: 'Swift', img: 'images/TechStack/btnImg4.webp' },
    { name: 'Hyperledger Sawtooth', img: 'images/TechStack/btnImg5.webp' },
    { name: 'Hyperledger Besu', img: 'images/TechStack/btnImg6.webp' }
  ];

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      <div className="absolute insert-0">
        <img src="/images/TechStack/TechStackbgImg.webp" className='w-full h-full' alt="" />
      </div>
      <div className="absolute inset-0" 
        style={{
          background: 'linear-gradient(180deg,rgba(0,0,0,0) 0%,rgba(0,0,0,.505) 39%,rgba(0,0,0,.308) 77%,rgba(0,0,0,1) 100%)'
        }}/>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 py-16">
        {/* Title */}
        <div className="text-center mb-16">
          <h1 className="max-w-4xl mx-auto text-4xl md:text-5xl font-bold mb-4">
            Empowering Innovation Through Our Cutting-Edge Tech Stack
          </h1>
          
          {/* Neon Accent Lines */}
          <div className="flex justify-center items-center gap-4 mt-8">
            <div className="w-32 h-1 bg-gradient-to-r from-transparent via-pink-500 to-pink-600 rounded-full shadow-lg shadow-pink-500/50"></div>
            <div className="w-48 h-1 bg-gradient-to-r from-pink-600 via-purple-500 to-transparent rounded-full shadow-lg shadow-purple-500/50"></div>
          </div>
        </div>

        {/* Main Grid */}
        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto mt-20">
          {/* Left Side - Categories */}
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-br from-pink-500/10 via-purple-500/10 to-transparent rounded-3xl blur-xl"></div>
            <div className="relative bg-black/40 backdrop-blur-sm border border-pink-500/30 rounded-2xl p-8 shadow-2xl">
              <div className="space-y-4">
                {categories.map((category, index) => (
                  <button
                    key={category}
                    onClick={() => setActiveCategory(category)}
                    className={`w-full text-left px-6 py-2 rounded-xl font-semibold text-lg transition-all duration-300 ${
                      activeCategory === category
                        ? 'bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white shadow-lg shadow-purple-500/50 transform scale-105'
                        : 'bg-white/5 text-gray-300 hover:bg-white/10 hover:text-white border border-white/10'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right Side - Frameworks */}
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-bl from-purple-500/10 via-pink-500/10 to-transparent rounded-3xl blur-xl"></div>
            <div className="relative bg-black/40 backdrop-blur-sm border border-purple-500/30 rounded-2xl p-8 shadow-2xl">
              <h2 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
                FRAMEWORKS
              </h2>
              
              <div className="grid grid-cols-3 gap-4">
                {frameworks.map((framework, index) => (
                  <div
                    key={index}
                    className="group relative bg-white rounded-xl p-4 flex items-center justify-center  cursor-pointer transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:shadow-purple-500/50"
                  >
                    <img
                      src={framework.img}
                      alt={framework.name}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default TechStack;