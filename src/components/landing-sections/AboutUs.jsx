import React from 'react';

const AboutUs = () => {
  const features = [
    "Adaptable corporate solutions.",
    "Different network access options to expedite company processes.",
    "Assistance in implementing novel blockchain technologies.",
    "NFT Marketplace, Crypto Exchange, Staking, Defi Platform, dApp, Custom Solution.",
    "Adaptable corporate solutions.",
    "Adaptable corporate solutions."
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="grid md:grid-cols-2 gap-8 items-center max-w-7xl mx-auto px-8 py-16">
        {/* Left Side - Content */}
        <div className="space-y-4">
          {/* Tag */}
          <div className="inline-block">
            <span className="text-while-400 text-md font-light tracking-wider">About Us</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-4xl font-bold leading-tight">
            UNLIMITED SKILLS FOR
            <br />
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text">
              BLOCKCHAIN PROJECTS
            </span>
          </h1>

          {/* Description */}
          <p className="text-gray-300 text-lg leading-relaxed">
            We are a leading new blockchain business with a team of credible programmers,
            licensed blockchain strategists, professional advisors, and seasoned creative
            experts. As your business partner, we can provide:
          </p>

          {/* Features List */}
          <div className="space-y-4">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start gap-4 group">
                {/* Diamond Icon */}
                <div className="flex-shrink-0 mt-1">
                  <svg 
                    width="20" 
                    height="20" 
                    viewBox="0 0 20 20" 
                    fill="none"
                    className="text-blue-400 group-hover:text-blue-300 transition-colors duration-300"
                  >
                    <path 
                      d="M10 0L12.5 7.5L20 10L12.5 12.5L10 20L7.5 12.5L0 10L7.5 7.5L10 0Z" 
                      fill="currentColor"
                    />
                  </svg>
                </div>
                {/* Feature Text */}
                <p className="text-gray-200 text-base leading-relaxed group-hover:text-white transition-colors duration-300">
                  {feature}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side - Video */}
        <div className="relative h-full">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="/images/videos/AboutUsVideo.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;