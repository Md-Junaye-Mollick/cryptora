import React from 'react';

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "What is a cryptocurrency?",
      description: "A cryptocurrency, also known as crypto, is a type of digital asset with multiple use cases. It's primarily a way to transfer value between people digitally, including monetary value, ownership rights, or even voting privileges. Crypto differs from other digital payment.",
      image: "/images/BlogImages/BlogImg1.webp",
      type: "crypto"
    },
    {
      id: 2,
      title: "Blockchain Technology",
      description: "A cryptocurrency, also known as crypto, is a type of digital asset with multiple use cases. It's primarily a way to transfer value between people digitally, including monetary value, ownership rights, or even voting privileges. Crypto differs from other digital payment.",
      image: "/images/BlogImages/BlogImg2.webp",
      type: "blockchain"
    },
    {
      id: 3,
      title: "What is a cryptocurrency?",
      description: "A cryptocurrency, also known as crypto, is a type of digital asset with multiple use cases. It's primarily a way to transfer value between people digitally, including monetary value, ownership rights, or even voting privileges. Crypto differs from other digital payment.",
      image: "/images/BlogImages/BlogImg1.webp",
      type: "crypto"
    }
  ];

  return (
    <div className="relative min-h-screen w-full bg-black py-20 px-4">
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-5xl md:text-6xl font-bold text-white uppercase tracking-wider">
          OUR BLOGS
        </h2>
      </div>

      {/* Blog Cards Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post) => (
          <div
            key={post.id}
            className="group relative flex flex-col gap-0"
          >
{/* Image Container */}
            <div className="relative h-64 overflow-hidden rounded-2xl border border-gray-800 transition-all duration-300">
              <img 
                src={post.image} 
                alt={post.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
            </div>

            {/* Content Container */}
            <div className="mt-6 bg-transparent">
              <h3 className="text-2xl font-bold text-white mb-4 transition-colors">
                {post.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                {post.description}
              </p>

              {/* Read More Button */}
              <button className="relative group/btn flex items-center gap-2">
                <span className="text-orange-500 font-semibold uppercase tracking-wider text-sm">
                  READ MORE
                </span>
                <div className="relative w-12 h-12">
                  {/* Rotating Circle Text */}
                  <svg className="w-full h-full animate-spin-slow" viewBox="0 0 100 100">
                    <defs>
                      <path
                        id={`circle-${post.id}`}
                        d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                      />
                    </defs>
                    <text className="text-[8px] fill-orange-500 uppercase tracking-widest">
                      <textPath href={`#circle-${post.id}`}>
                        READ MORE • READ MORE • 
                      </textPath>
                    </text>
                  </svg>
                  
                  {/* Center Arrow */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <svg 
                      className="w-5 h-5 text-orange-500 transition-transform" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </div>
                </div>
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Custom Animation */}
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
    </div>
  );
};

export default Blog;