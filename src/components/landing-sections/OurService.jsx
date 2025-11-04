import React, { useState } from 'react';

const services = [
  { id: 1, title: 'Token Development', description: 'The Token Development Services aid in the development of Ethereum tokens. ERC20 and the BEP20 are some of the Ethereum Tokens.',},
  { id: 2, title: 'Crypto Exchange', description: 'DEXs, or decentralized exchanges, allow consumers to purchase and sell cryptocurrencies without the involvement of brokers.',},
  { id: 3, title: 'NFT Marketplace', description: 'NFT marketplaces built by us are feature-rich, decentralized, and facilitate tokenization of all kinds of assets, artwork, gaming cards.',},
  { id: 4, title: 'ICO Marketplace', description: 'Cryptora is the premier NFT game development company that can assist you in launching your gaming platform based on bespoke blockchain and NFTs.',},
  { id: 5, title: 'Wallet Development', description: 'Users have complete control over their private keys and funds with a decentralized wallet supported by institutional-grade security and ease of usage.',},
  { id: 6, title: 'Blockchain Consulting', description: 'Our blockchain consultants understand your project-specific needs and help you identify the right blockchain protocol that suits your business case.',},
  { id: 7, title: 'Staking Platform', description: 'Staking Platforms are in high demand alongside the NFT marketplaces and are the basis for a variety of NFT-based services. They are rich in its features.',},
  { id: 8, title: 'DAPP Development', description: 'We design and develop peer to peer Decentralised Applications for a wide array of industries, including healthcare, supply chain and logistics, utility and startups.',},
  { id: 9, title: "Smart Contract Development", description: "We create secure and efficient smart contracts that power decentralized applications and automate blockchain transactions.", },
];

const ServiceCard = ({ service, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative group perspective"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        perspective: '1000px',
      }}
    >
      <div
        className="relative w-full transition-all duration-500 ease-out"
        style={{
          transformStyle: 'preserve-3d',
          transform: isHovered ? 'translateZ(20px) rotateX(5deg) rotateY(-5deg)' : 'translateZ(0) rotateX(0) rotateY(0)',
        }}
      >
        {/* Card Background with Gradient */}
        <div
          className="absolute inset-0 rounded-[55px] overflow-hidden"
          style={{
            background: 'linear-gradient(135deg, #fe521d 0%, #FDA616 100%)',
            boxShadow: isHovered 
              ? '0 30px 60px rgba(255, 107, 53, 0.5)' 
              : '0 20px 40px rgba(255, 107, 53, 0.3)',
            transition: 'box-shadow 0.5s ease-out',
          }}
        >
          {/* Diagonal Shine Effect */}
          <div
            className="absolute top-3 left-3 right-3 bottom-3 rounded-[50px]"
            style={{
              background: 'linear-gradient(0deg,rgba(250,165,101,.349) 0%,rgba(255,153,75,.815) 100%)',
              borderRadius: '55px 100% 55px 55px',
              borderLeft: '1px solid #fff',
              borderBottom: '1px solid #fff',
            }}
          />
        </div>

        {/* Content */}
        <div className="relative h-full p-8 flex flex-col justify-between z-10">
          {/* Icon */}
          <div className="flex justify-end">
            <div
              className="w-12 h-12 rounded-full flex items-center justify-center"
              style={{
                background: 'rgba(255, 255, 255, 0.2)',
                backdropFilter: 'blur(10px)',
                border: '2px solid rgba(255, 255, 255, 0.3)',
              }}
            >
              <div className="w-6 h-6 rounded-full border-2 border-white relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Text Content */}
          <div className="space-y-4">
            <h3 className="text-white text-xl font-bold leading-tight">
              {service.title}
            </h3>
            <p className="text-white text-sm leading-relaxed opacity-90">
              {service.description}
            </p>
            <button className="flex items-center mx-auto gap-2 text-white text-lg font-semibold group-hover:gap-3 transition-all duration-300">
              View more
              <svg
                className="w-4 h-4 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const OurService = () => {
  return (
    <div className="min-h-screen bg-black py-20 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-gray-400 text-sm uppercase tracking-widest mb-2">
            OUR SERVICES
          </p>
          <h1 className="text-white text-4xl md:text-5xl font-bold mb-6">
            What we can do for you
          </h1>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto leading-relaxed">
            By using exclusive in-house ideas that have been tried and refined over time,
            we assist crypto and blockchain based company brands in achieving their
            goals and idea in business expansion through innovative & creative
            approaches.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurService;