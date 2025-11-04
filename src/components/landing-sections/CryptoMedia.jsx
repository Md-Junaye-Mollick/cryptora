import React from 'react';

const CryptoMedia = () => {
  const cryptoMediaLogos = [
    { name: 'Cointelegraph', src: '/images/CryptoImages/CryptoMediaImg1.svg' },
    { name: 'Hackernoon', src: '/images/CryptoImages/CryptoMediaImg2.svg'},
    { name: 'CryptoDaily', src: '/images/CryptoImages/CryptoMediaImg3.svg'},
    { name: 'Bloomberg', src: '/images/CryptoImages/CryptoMediaImg4.svg'},
    { name: 'NewsBTC', src: '/images/CryptoImages/CryptoMediaImg5.svg' },
    { name: 'Bitcoin.com', src: '/images/CryptoImages/CryptoMediaImg6.svg'}
  ];

  const businessMediaLogos = [
    { name: 'Yahoo Finance', src: '/images/CryptoImages/CryptoMediaImg7.svg' },
    { name: 'Business Insider', src: '/images/CryptoImages/CryptoMediaImg8.svg' },
    { name: 'MarketWatch', src: '/images/CryptoImages/CryptoMediaImg9.svg' },
    { name: 'Nasdaq', src: '/images/CryptoImages/CryptoMediaImg10.svg' }
  ];

  return (
    <div className="relative w-full bg-black py-20 px-6">
      {/* Content Container */}
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-white mb-8 leading-tight">
            Get Access To Business & Crypto Media
          </h2>
          <p className="text-gray-400 text-base md:text-lg max-w-4xl mx-auto leading-relaxed">
            With a robust and adaptable technology foundation, we empower our teams and clients to
            push boundaries, embrace creativity, and pioneer the future. Join us on this exciting
            journey, where innovation knows no bounds, and together, we'll shape a world defined by
            limitless possibilities.
          </p>
        </div>

        {/* Logos Grid */}
        <div className="space-y-12">
          {/* First Row - Crypto Media */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center">
            {cryptoMediaLogos.map((logo, index) => (
              <div
                key={index}
                className="grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100 hover:scale-110 cursor-pointer"
              >
                <img
                  src={logo.src}
                  alt={logo.name}
                  className="h-40 w-auto object-contain"
                />
              </div>
            ))}
          </div>

          {/* Second Row - Business Media */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 items-center justify-items-center pt-8">
            {businessMediaLogos.map((logo, index) => (
              <div
                key={index}
                className="grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100 hover:scale-110 cursor-pointer"
              >
                <img
                  src={logo.src}
                  alt={logo.name}
                  className="h-40 w-auto object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CryptoMedia;