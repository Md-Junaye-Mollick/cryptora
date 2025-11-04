import React from 'react';

const Footer = () => {
  const quickLinks = [
    'NFT Marketplace Development',
    'Cryptocurrency Token Development',
    'Decentralized Exchange',
    'ICO Marketing'
  ];

  const aboutLinks = [
    'Services',
    'About Us',
    'Contact Us',
    'Landing'
  ];

  return (
    <footer className="bg-black text-white">
      {/* Contact Now Button Section */}
      <div className="bg-gradient-to-b from-black via-gray-900 to-black py-8">
        <div className="flex justify-center">
          <button className="group relative bg-white text-black font-bold text-xs tracking-[0.2em] px-20 py-5 rounded-full hover:bg-gray-100 transition-all duration-300 flex items-center gap-3">
            CONTACT NOW
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="group-hover:translate-x-1 transition-transform duration-300">
              <path d="M4 10H16M16 10L11 5M16 10L11 15" stroke="#EF4444" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 py-16">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-16">
            {/* Company Info - Column 1 */}
            <div className="space-y-6">
              {/* Logo */}
              <div className="flex items-center gap-3 mb-8">
                <div className="relative">
                  <div className="w-14 h-14 bg-gradient-to-br from-orange-400 via-orange-500 to-orange-600 rounded-full flex items-center justify-center shadow-xl">
                    <span className="text-white font-bold text-2xl">C</span>
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold tracking-wide">
                    Cryptora<span className="text-xs align-super">™</span>
                  </h3>
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-400 leading-relaxed text-sm pr-4">
                We provide crypto and blockchain development company with experience in NFT marketplace development, token development, crypto wallet development.
              </p>

              {/* Contact Info */}
              <div className="space-y-4 pt-4">
                <p className="text-gray-300 text-sm font-medium">
                  Whatsapp & Call Number (Worldwide 24*7)
                </p>
                <div className="space-y-2 text-gray-400 text-sm">
                  <p>+91 88174 36778</p>
                  <p>+91 72239 27732</p>
                  <p className="pt-2">digitalonebox.com@gmail.com</p>
                </div>
              </div>
            </div>

            {/* Quick Links - Column 2 */}
            <div className="space-y-6">
              <h4 className="text-xl font-semibold mb-6">Quick Links</h4>
              <ul className="space-y-4">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 text-sm block">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* About - Column 3 */}
            <div className="space-y-6">
              <h4 className="text-xl font-semibold mb-6">About</h4>
              <ul className="space-y-4">
                {aboutLinks.map((link, index) => (
                  <li key={index}>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 text-sm block">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Privacy & Social - Column 4 */}
            <div className="space-y-10">
              {/* Privacy */}
              <div className="space-y-6">
                <h4 className="text-xl font-semibold">Privacy</h4>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 text-sm block">
                  Terms and condition &<br />Privacy Policy
                </a>
              </div>

              {/* Social */}
              <div className="space-y-6">
                <h4 className="text-xl font-semibold">Social</h4>
                <div className="space-y-4">
                  <a href="#" className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors duration-300 group">
                    <div className="w-6 h-6 bg-green-500 rounded flex items-center justify-center text-white text-xs group-hover:scale-110 transition-transform duration-300">
                      W
                    </div>
                    <span className="text-sm">WhatsApp</span>
                  </a>
                  <a href="#" className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors duration-300 group">
                    <div className="w-6 h-6 bg-white rounded flex items-center justify-center text-black text-xs font-bold group-hover:scale-110 transition-transform duration-300">
                      X
                    </div>
                    <span className="text-sm">Twitter-X</span>
                  </a>
                  <a href="#" className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors duration-300 group">
                    <div className="w-6 h-6 bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500 rounded flex items-center justify-center text-white text-xs group-hover:scale-110 transition-transform duration-300">
                      IG
                    </div>
                    <span className="text-sm">Instagram</span>
                  </a>
                  <a href="#" className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors duration-300 group">
                    <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs group-hover:scale-110 transition-transform duration-300">
                      T
                    </div>
                    <span className="text-sm">Telegram</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;