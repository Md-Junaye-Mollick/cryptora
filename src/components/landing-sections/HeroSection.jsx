import React from 'react';

const HeroSection = () => {
  const scrollDown = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  return (
    <div className="relative h-screen w-full px-6 overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/images/videos/herobgVideo.mp4" type="video/mp4" />
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0" 
        style={{
          background: 'linear-gradient(180deg,rgba(0,0,0,0) 0%,rgba(0,0,0,.505) 39%,rgba(0,0,0,.308) 77%,rgba(0,0,0,1) 100%)'
        }}/>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center">
        <div className="max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            CRYPTO AND BLOCKCHAIN<br />DEVELOPMENT
          </h1>
          <p className="text-gray-300 text-lg md:text-xl mb-12 max-w-3xl mx-auto">
            Are you looking for ICO Marketing? We provide crypto and blockchain development company with experience in NFT marketplace development, token development, crypto wallet development.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="relative overflow-hidden bg-orange-500 text-white px-8 py-3 rounded-lg font-medium uppercase tracking-wider shadow-[0_0_30px_rgba(249,115,22,0.6)] hover:shadow-[0_0_50px_rgba(249,115,22,0.8)] transition-all group">
              <span className="relative z-10">CRYPTORA SERVICE</span>
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/30 to-transparent" />
            </button>
            <button className="relative overflow-hidden bg-transparent border-2 border-orange-500 text-white px-8 py-3 rounded-lg font-medium uppercase tracking-wider hover:bg-orange-500 hover:shadow-[0_0_30px_rgba(249,115,22,0.6)] transition-all group">
              <span className="relative z-10">CRYPTORA PRODUCT</span>
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/30 to-transparent" />
            </button>
          </div>
        </div>

        {/* Scroll Down Button */}
        <button
          onClick={scrollDown}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 group cursor-pointer"
          aria-label="Scroll down"
        >
          <div className="relative w-20 h-20">
            {/* Rotating Circle Text */}
            <svg className="w-full h-full animate-spin-slow" viewBox="0 0 100 100">
              <defs>
                <path
                  id="circle"
                  d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                />
              </defs>
              <text className="text-[10px] fill-white uppercase tracking-widest">
                <textPath href="#circle">
                  SCROLL DOWN • SCROLL DOWN • 
                </textPath>
              </text>
            </svg>
            
            {/* Center Arrow */}
            <div className="absolute inset-0 flex items-center justify-center">
              <svg 
                className="w-6 h-6 text-white group-hover:translate-y-1 transition-transform" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>
          </div>
        </button>
      </div>

      {/* Add custom animation for slow spin */}
      <style jsx>{`
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        .animate-spin-slow {
          animation: spin-slow 10s linear infinite;
        }
      `}</style>

      {/* Next Section for Scroll Demo */}
      <div className="h-screen bg-gradient-to-b from-gray-900 to-black flex items-center justify-center">
        <h2 className="text-white text-4xl font-bold">Next Section</h2>
      </div>
    </div>
  );
};

export default HeroSection;