import React from 'react';

const About = () => {
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
              <div className=" overflow-hidden">
               <img src="/images/AboutImages/AboutUsImg1.webp" alt="" />
              </div>
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="text-white">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              ABOUT{' '}
              <span className="relative inline-block">
                <span className="relative z-10">NFT</span>
                <span className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 opacity-20 blur-xl" />
              </span>
              <br />
              MARKETPLACE
            </h2>

            <p className="text-gray-300 text-lg mb-10 leading-relaxed">
              We build robust NFT marketplaces, integrating multiple security layers and rich features to enhance users' trading experiences. We offer a full range of NFT marketplace development services, from front-end to back-end to smart contract development, all under one umbrella.
            </p>

            {/* Features Grid */}
            <div className="grid grid-cols-2 gap-x-12 gap-y-6 mb-10">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-orange-500 mt-2 flex-shrink-0" />
                <span className="text-gray-200">NFT Marketplace</span>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-orange-500 mt-2 flex-shrink-0" />
                <span className="text-gray-200">NFT Development</span>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-orange-500 mt-2 flex-shrink-0" />
                <span className="text-gray-200">NFT Smart Contract</span>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-orange-500 mt-2 flex-shrink-0" />
                <span className="text-gray-200">Community Building</span>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-orange-500 mt-2 flex-shrink-0" />
                <span className="text-gray-200">NFT Marketplace Support</span>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-orange-500 mt-2 flex-shrink-0" />
                <span className="text-gray-200">Social Media Marketing</span>
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