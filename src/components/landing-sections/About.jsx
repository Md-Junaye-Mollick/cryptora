import React from 'react';

const About = () => {
  const leftColumnServices = [
    'NFT Marketplace',
    'NFT Smart Contract',
    'NFT Marketplace Support',
  ];

  const rightColumnServices = [
    'NFT Development',
    'Community Building',
    'Social Media Marketing',
  ];
  return (
    <div className="relative min-h-screen w-full bg-black overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }} />
      </div>

      {/* Content Container */}
      <div className="relative z-10 container mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Artistic Image */}
          <div className="relative">
            <div className="relative w-full max-w-lg mx-auto">
              {/* Glow Effect */}
              <div className="" />
              
              {/* Image Placeholder - Replace with actual image */}
              <div className="overflow-hidden">
               <img src="/images/AboutImages/AboutUsImg1.webp" alt="" />
              </div>
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="text-white">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              ABOUT{' '}
              <span className="relative inline-block">
                <span className="relative z-10">NFT</span>
                <span className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 opacity-20 blur-xl" />
              </span>
              <br />
              MARKETPLACE
            </h2>

            <p className="text-gray-300 text-lg md:text-xl leading-relaxed mb-6">
              We build robust NFT marketplaces, integrating multiple security layers and rich features to enhance users' trading experiences. We offer a full range of NFT marketplace development services, from front-end to back-end to smart contract development, all under one umbrella.
            </p>

            {/* Services Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 mb-8">
              {/* Left Column */}
              <div className="space-y-4">
                {leftColumnServices.map((service, index) => (
                  <div key={index} className="flex items-center gap-3 text-white text-base group">
                    <svg 
                      className="w-4 h-4 text-orange-500 flex-shrink-0 group-hover:scale-110 transition-transform" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="currentColor"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M12 4v16m8-8H4" 
                      />
                      <circle cx="12" cy="12" r="10" strokeWidth={2} />
                    </svg>
                    <span className="group-hover:text-orange-500 transition-colors">{service}</span>
                  </div>
                ))}
              </div>

              {/* Right Column */}
              <div className="space-y-4">
                {rightColumnServices.map((service, index) => (
                  <div key={index} className="flex items-center gap-3 text-white text-base group">
                    <svg 
                      className="w-4 h-4 text-orange-500 flex-shrink-0 group-hover:scale-110 transition-transform" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="currentColor"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M12 4v16m8-8H4" 
                      />
                      <circle cx="12" cy="12" r="10" strokeWidth={2} />
                    </svg>
                    <span className="group-hover:text-orange-500 transition-colors">{service}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="relative overflow-hidden bg-transparent border-2 border-orange-500 text-white px-8 py-3 rounded-lg font-medium uppercase tracking-wider hover:bg-orange-500 hover:shadow-[0_0_30px_rgba(249,115,22,0.6)] transition-all group">
              <span className="relative z-10">Expert Consultantly</span>
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/30 to-transparent" />
            </button>
              <button className="relative overflow-hidden bg-orange-500 text-white px-8 py-3 rounded-lg font-medium uppercase tracking-wider shadow-[0_0_30px_rgba(249,115,22,0.6)] hover:shadow-[0_0_50px_rgba(249,115,22,0.8)] transition-all group">
                <span className="relative z-10">DOWNLOAD BROUCHER</span>
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/30 to-transparent" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;