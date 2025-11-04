import React, { useState } from 'react';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    budget: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = () => {
    console.log('Form submitted:', formData);
    alert('Form submitted successfully!');
  };

  return (
    <div className="min-h-screen relative bg-black flex items-center justify-center p-4 py-12">
      <img src="/images/ContactUsImages/ContactUsBg.webp" className="absolute inset-0 w-full h-full object-cover" alt="" />
      
      <div className="relative w-full max-w-6xl mx-auto bg-black/40 backdrop-blur-sm rounded-2xl shadow-2xl overflow-hidden flex flex-col lg:flex-row border border-gray-800/50">
        {/* Left Side - Visual Section */}
        <div className="relative lg:w-1/2 flex items-center justify-center p-8 lg:p-0 min-h-[400px] lg:min-h-[auto]">
          {/* Abstract colorful swirls and VR girl */}
          <div className="absolute inset-0 flex items-center justify-center">
            <img 
              src="images/ContactUsImages/ContactUsImg1.webp" 
              alt="Abstract VR swirls" 
              className="absolute inset-0 w-full h-full object-cover"
            />
            {/* Overlay added */}
            <div className="absolute inset-0 bg-black/70"></div>
          </div>

          {/* Vertical Text */}
          <div className="absolute inset-0 flex items-center z-30 hidden lg:flex">
            <div className="transform -rotate-90 text-center">
              <h2 className="text-5xl font-bold text-white tracking-wider mb-2 whitespace-nowrap">Contact Us</h2>
              <p className="text-lg text-gray-300 tracking-widest whitespace-nowrap">We are here to support you</p>
            </div>
          </div>
          
          {/* Vertical Text for smaller screens (horizontal) */}
          <div className="relative z-30 block lg:hidden text-center text-white pt-8">
            <h2 className="text-3xl font-bold tracking-wider">Contact Us</h2>
            <p className="text-md tracking-widest">We are here to support you</p>
          </div>
        </div>

        {/* Right Side - Form Section */}
        <div className="w-full lg:w-1/2 flex items-center justify-center p-8 lg:p-12 bg-gradient-to-br from-black/80 to-gray-900/80 backdrop-blur-md">
          <div className="w-full max-w-md">
            <div className="rounded-3xl p-0">
              <h1 className="text-4xl font-bold text-white mb-2">
                Get A Live Demo
              </h1>
              <p className="text-gray-400 text-base mb-8">
                Lets sky rocket your Dream project together
              </p>

              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-gray-800/50 border border-gray-700/50 rounded-lg px-4 py-3 text-gray-200 placeholder-gray-500 focus:outline-none focus:border-orange-500/50 focus:bg-gray-800/70 transition-all"
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-gray-800/50 border border-gray-700/50 rounded-lg px-4 py-3 text-gray-200 placeholder-gray-500 focus:outline-none focus:border-orange-500/50 focus:bg-gray-800/70 transition-all"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full bg-gray-800/50 border border-gray-700/50 rounded-lg px-4 py-3 text-gray-200 placeholder-gray-500 focus:outline-none focus:border-orange-500/50 focus:bg-gray-800/70 transition-all"
                  />
                  <input
                    type="text"
                    name="budget"
                    placeholder="Budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className="w-full bg-gray-800/50 border border-gray-700/50 rounded-lg px-4 py-3 text-gray-200 placeholder-gray-500 focus:outline-none focus:border-orange-500/50 focus:bg-gray-800/70 transition-all"
                  />
                </div>

                <textarea
                  name="message"
                  placeholder="Message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  className="w-full bg-gray-800/50 border border-gray-700/50 rounded-lg px-4 py-3 text-gray-200 placeholder-gray-500 focus:outline-none focus:border-orange-500/50 focus:bg-gray-800/70 transition-all resize-none"
                />

                <div className="flex justify-center pt-4">
                  <button 
                    onClick={handleSubmit}
                    className="relative overflow-hidden bg-orange-500 text-white px-8 py-3 rounded-lg font-medium uppercase tracking-wider shadow-[0_0_30px_rgba(249,115,22,0.6)] hover:shadow-[0_0_50px_rgba(249,115,22,0.8)] transition-all group"
                  >
                    <span className="relative z-10">Submit</span>
                    <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/30 to-transparent" />
                  </button>
                </div>
              </div>

              <p className="text-gray-400 text-sm text-center mt-8">
                Protect your data is our #1 priority Your information is safe with us
              </p>

              {/* Social Links */}
              <div className="flex justify-center items-center gap-8 mt-8">
                <div className="text-center">
                  <div className="w-12 h-12 rounded-full bg-gray-800/60 border border-gray-700/50 flex items-center justify-center mb-2 mx-auto hover:bg-gray-700/60 transition-all cursor-pointer">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                  </div>
                  <p className="text-xs text-gray-400">cryptora_Community</p>
                </div>

                <div className="text-center">
                  <div className="w-12 h-12 rounded-full bg-green-600 flex items-center justify-center mb-2 mx-auto hover:bg-green-500 transition-all cursor-pointer shadow-lg shadow-green-500/30">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                  </div>
                  <p className="text-xs text-gray-400">8770632170</p>
                </div>

                <div className="text-center">
                  <div className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center mb-2 mx-auto hover:bg-blue-400 transition-all cursor-pointer shadow-lg shadow-blue-500/30">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.295-.6.295-.002 0-.003 0-.005 0l.213-3.054 5.56-5.022c.24-.213-.054-.334-.373-.121l-6.869 4.326-2.96-.924c-.64-.203-.658-.64.135-.954l11.566-4.458c.538-.196 1.006.128.832.941z" />
                    </svg>
                  </div>
                  <p className="text-xs text-gray-400">Cryptora_text</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;