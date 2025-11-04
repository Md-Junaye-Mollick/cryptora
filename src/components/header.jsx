import React, { useState, useEffect } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.pageYOffset > 5);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = ['COIN DEVELOPMENT', 'NFT MARKETPLACE', 'EXCHANGE', 'ICO MARKETING', 'BLOCKCHAIN SOLUTION', 'CRYPTORA'];

  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      {/* Header */}
      <header className={`w-full transition-all duration-300 ${
        isScrolled 
          ? 'bg-black/90 backdrop-blur-sm border-b border-white/20' 
          : 'bg-transparent border-b border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center">
              <span className="text-white text-2xl font-bold">C</span>
            </div>
            <span className="text-white text-2xl font-semibold tracking-wide">Cryptora™</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-3">
            {navItems.map((item) => (
              <a 
                key={item} 
                href="#" 
                className="text-white text-[13px] font-semibold hover:text-orange-500 transition-colors whitespace-nowrap"
              >
                {item}
              </a>
            ))}
          </nav>

          {/* CTA Button & Hamburger */}
          <div className="flex items-center gap-4">
            <button className="hidden md:block bg-transparent border-2 border-white text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-white hover:text-black transition-all">
              GET A PROPOSAL
            </button>

            {/* Hamburger */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden text-white p-2 hover:text-orange-500 transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div 
          className="lg:hidden fixed inset-0 bg-black/70 z-40"
          onClick={() => setIsMenuOpen(false)}
        />
      )}

      {/* Mobile Menu */}
      <div 
        className={`lg:hidden fixed top-0 right-0 h-full w-80 bg-gradient-to-b from-gray-900 to-black border-l border-white/20 z-50 transform transition-transform duration-300 ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="p-6 h-full flex flex-col">
          {/* Close Button */}
          <button 
            onClick={() => setIsMenuOpen(false)}
            className="absolute top-4 right-4 text-white p-2 hover:text-orange-500"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Navigation */}
          <nav className="space-y-4 mt-16">
            {navItems.map((item) => (
              <a 
                key={item}
                href="#" 
                className="block text-white hover:text-orange-500 text-base py-3 px-3 rounded-xl border-b border-white/10 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </a>
            ))}
          </nav>

          {/* CTA Button in Mobile */}
          <div className="mt-auto mb-8">
            <button className="w-full bg-transparent border-2 border-white text-white px-6 py-3 rounded-full font-medium hover:bg-white hover:text-black transition-all">
              GET A PROPOSAL
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;