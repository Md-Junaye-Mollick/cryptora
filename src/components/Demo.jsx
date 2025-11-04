import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, ChevronDown } from 'lucide-react';

export default function CryptoLanding() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const services = [
    { title: 'Smart Contract Development', desc: 'Build secure and efficient smart contracts' },
    { title: 'DeFi Solutions', desc: 'Decentralized finance platforms' },
    { title: 'NFT Marketplace', desc: 'Create and trade digital assets' },
    { title: 'Token Development', desc: 'Custom cryptocurrency tokens' },
    { title: 'Blockchain Consulting', desc: 'Expert advisory services' },
    { title: 'dApp Development', desc: 'Full-stack decentralized apps' },
    { title: 'Web3 Integration', desc: 'Connect with blockchain networks' },
    { title: 'Security Audits', desc: 'Comprehensive smart contract audits' }
  ];

  return (
    <div className="bg-black text-white min-h-screen overflow-x-hidden">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-black/80 backdrop-blur-lg py-4' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
            DAPP
          </div>
          
          <div className="hidden md:flex space-x-8">
            {['Home', 'Services', 'About', 'Blog', 'Contact'].map(item => (
              <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-purple-400 transition-colors">
                {item}
              </a>
            ))}
          </div>

          <button className="hidden md:block px-6 py-2 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full hover:shadow-lg hover:shadow-purple-500/50 transition-all">
            Get Started
          </button>

          <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden bg-black/95 backdrop-blur-lg px-6 py-4 space-y-4">
            {['Home', 'Services', 'About', 'Blog', 'Contact'].map(item => (
              <a key={item} href={`#${item.toLowerCase()}`} className="block hover:text-purple-400">
                {item}
              </a>
            ))}
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 via-black to-black"></div>
        
        {/* Animated background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/30 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-600/30 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        </div>

        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
          <div className="mb-6 inline-block px-4 py-2 bg-purple-900/30 border border-purple-500/30 rounded-full text-sm">
            Welcome to the Future
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            CRYPTO AND BLOCKCHAIN
            <br />
            <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-purple-600 bg-clip-text text-transparent">
              DEVELOPMENT
            </span>
          </h1>
          
          <p className="text-gray-400 text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            Empowering innovation through cutting-edge Web3 solutions
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all flex items-center justify-center gap-2">
              Explore Services <ArrowRight size={20} />
            </button>
            <button className="px-8 py-4 border border-purple-500/50 rounded-full font-semibold hover:bg-purple-900/20 transition-all">
              Learn More
            </button>
          </div>

          <div className="mt-12 animate-bounce">
            <ChevronDown size={32} className="mx-auto text-purple-400" />
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section id="services" className="py-20 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            What we can do for you
          </h2>
          <p className="text-gray-400 text-center mb-16 max-w-2xl mx-auto">
            Comprehensive blockchain solutions tailored to your needs
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, idx) => (
              <div
                key={idx}
                className="p-6 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl hover:scale-105 transition-transform cursor-pointer group"
              >
                <div className="h-full flex flex-col justify-between">
                  <div>
                    <div className="w-12 h-12 bg-white/20 rounded-lg mb-4 group-hover:bg-white/30 transition-colors"></div>
                    <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                    <p className="text-sm text-white/90">{service.desc}</p>
                  </div>
                  <ArrowRight className="mt-4 group-hover:translate-x-2 transition-transform" size={20} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 relative">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                ABOUT NFT
                <br />
                <span className="bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
                  MARKETPLACE
                </span>
              </h2>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Our NFT marketplace provides a secure and user-friendly platform for creators and collectors to mint, buy, sell, and trade unique digital assets on the blockchain.
              </p>
              <p className="text-gray-400 mb-8 leading-relaxed">
                With advanced features like royalty management, multi-chain support, and gas optimization, we're building the future of digital ownership.
              </p>
              <button className="px-8 py-3 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full font-semibold hover:shadow-lg hover:shadow-orange-500/50 transition-all">
                Discover More
              </button>
            </div>
            
            <div className="relative">
              <div className="w-full h-96 bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-3xl flex items-center justify-center">
                <div className="text-6xl">🎨</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Token Development Section */}
      <section className="py-20 px-6 relative">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative order-2 md:order-1">
              <div className="w-full h-96 bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-3xl flex items-center justify-center">
                <div className="text-6xl">🪙</div>
              </div>
            </div>

            <div className="order-1 md:order-2">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                TOKEN
                <br />
                <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
                  DEVELOPMENT
                </span>
              </h2>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Create custom tokens with our comprehensive development services. From ERC-20 to BEP-20, we handle all aspects of token creation and deployment.
              </p>
              <button className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition-all">
                Start Building
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 relative">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-purple-900/30 to-pink-900/30 border border-purple-500/30 rounded-3xl p-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Ready to Build Your Crypto Project?
            </h2>
            <p className="text-gray-400 mb-8 text-lg">
              Join thousands of innovators who trust us with their blockchain development needs
            </p>
            <button className="px-10 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full font-semibold text-lg hover:shadow-2xl hover:shadow-purple-500/50 transition-all">
              Get Started Today
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 py-12 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent mb-4">
              DAPP
            </div>
            <p className="text-gray-400 text-sm">
              Building the decentralized future, one block at a time.
            </p>
          </div>
          
          {[
            { title: 'Company', links: ['About', 'Careers', 'Blog', 'Press'] },
            { title: 'Services', links: ['Smart Contracts', 'DeFi', 'NFT', 'Consulting'] },
            { title: 'Support', links: ['Help Center', 'Contact', 'FAQ', 'Documentation'] }
          ].map(col => (
            <div key={col.title}>
              <h3 className="font-semibold mb-4">{col.title}</h3>
              <ul className="space-y-2">
                {col.links.map(link => (
                  <li key={link}>
                    <a href="#" className="text-gray-400 hover:text-purple-400 text-sm transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-gray-800 text-center text-gray-400 text-sm">
          © 2025 DAPP. All rights reserved.
        </div>
      </footer>
    </div>
  );
}