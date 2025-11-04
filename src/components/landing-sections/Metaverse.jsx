import React from 'react';

const Metaverse = () => {
  return (
    <div className="relative min-h-screen w-full bg-black px-6 py-20 overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Visual */}
          <div className="relative lg:pr-12">
            <div className="relative rounded-lg overflow-hidden shadow-2xl">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-auto rounded-lg"
              >
                <source src="/images/videos/MetaverseVideo.mp4" type="video/mp4" />
              </video>

              {/* Gradient overlays */}
              <div className="absolute inset-0"
                style={{
                  background: 'linear-gradient(180deg,rgba(0,0,0,1) 0%,rgba(0,0,0,0) 29%,rgba(0,0,0,.006127450980392135) 52%,rgba(0,0,0,1) 100%)'
                }} />
              <div className="absolute inset-0"
                style={{
                  background: 'linear-gradient(90deg,rgba(0,0,0,1) 0%,rgba(0,0,0,0) 29%,rgba(0,0,0,.006127450980392135) 52%,rgba(0,0,0,1) 100%)'
                }} />
            </div>
          </div>

          {/* Right Content */}
          <div className="space-y-5">
            <h2 className="text-4xl lg:text-5xl font-bold">
              <span className="text-orange-500">METAVERSE</span>{' '}
              <span className="text-white">DEVELOPMENT</span>
            </h2>

            <p className="text-gray-300 text-lg md:text-xl leading-relaxed max-w-2xl">
              Cryptora's real-world expertise allows us to provide our clients with comprehensive token
              production tools across industry hosts. Here are the features of Token Development Services.
            </p>

            {/* Token List */}
            <div className="space-y-4">
              {[
                'Etherem Token',
                'Tron Token',
                'Solana Token',
                'BEP Token',
                'Polygon Token',
                'NFT Token'
              ].map((token, index) => (
                <div key={index} className="flex items-center gap-3 text-white text-lg group">
                  <svg 
                    className="w-5 h-5 text-orange-500 flex-shrink-0 group-hover:scale-110 transition-transform" 
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
                  <span className="group-hover:text-orange-500 transition-colors">{token}</span>
                </div>
              ))}
            </div>

            {/* Button */}
            <button className="relative overflow-hidden bg-transparent border-2 border-orange-500 text-white px-8 py-3 rounded-lg font-medium uppercase tracking-wider hover:bg-orange-500 hover:shadow-[0_0_30px_rgba(249,115,22,0.6)] transition-all group">
              <span className="relative z-10">EXPERT CONSULTANTLY</span>
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/30 to-transparent" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Metaverse;