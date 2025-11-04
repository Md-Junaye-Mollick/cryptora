import React from 'react';

const Wallet = () => {
  const leftColumnWallets = [
    'DeFi Wallet',
    'Wallet For PC',
    'Hardware Wallet',
    'Coin-Specific Wallet',
    'TRON Wallet',
    'Wallet For PC'
  ];

  const rightColumnWallets = [
    'DeFi Wallet',
    'Centralized Wallet',
    'Multi-Currency Wallet',
    'Mobile Wallet',
    'Web Wallet'
  ];

  return (
    <div className="relative min-h-screen w-full bg-black px-6 py-20 overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <h2 className="text-4xl lg:text-5xl font-bold">
              <span className="text-orange-500">WALLET</span>{' '}
              <span className="text-white">DEVELOPMENT</span>
            </h2>

            <p className="text-gray-300 text-lg md:text-xl leading-relaxed max-w-2xl">
              Cryptora cryptocurrency wallet development services make it simple to link wallets
              with various trading platforms. We are always aiming for more significant goals and
              delivering remarkable achievements.
            </p>

            {/* Wallet Types Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
              {/* Left Column */}
              <div className="space-y-4">
                {leftColumnWallets.map((wallet, index) => (
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
                    <span className="group-hover:text-orange-500 transition-colors">{wallet}</span>
                  </div>
                ))}
              </div>

              {/* Right Column */}
              <div className="space-y-4">
                {rightColumnWallets.map((wallet, index) => (
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
                    <span className="group-hover:text-orange-500 transition-colors">{wallet}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Button */}
            <button className="relative overflow-hidden bg-transparent border-2 border-orange-500 text-white px-8 py-3 rounded-lg font-medium uppercase tracking-wider hover:bg-orange-500 hover:shadow-[0_0_30px_rgba(249,115,22,0.6)] transition-all group">
              <span className="relative z-10">EXPERT CONSULTANTLY</span>
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/30 to-transparent" />
            </button>
          </div>

          {/* Right Visual - Futuristic City/Wallet */}
          <div className="relative lg:pl-12">
            <div className="relative rounded-lg overflow-hidden shadow-2xl">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-auto rounded-lg"
              >
                <source src="/images/videos/WalletVideo.mp4" type="video/mp4" />
              </video>

              {/* Gradient overlays */}
              <div className="absolute inset-0"
                style={{
                  background: 'linear-gradient(180deg,rgba(0,0,0,1) 0%,rgba(0,0,0,0) 29%,rgba(0,0,0,.006127450980392135) 52%,rgba(0,0,0,1) 100%)'
                }} />
              <div className="absolute inset-0"
                style={{
                  background: 'linear-gradient(270deg,rgba(0,0,0,1) 0%,rgba(0,0,0,0) 29%,rgba(0,0,0,.006127450980392135) 52%,rgba(0,0,0,1) 100%)'
                }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wallet;