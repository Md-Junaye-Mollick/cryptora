import React from 'react';

const FileSection = () => {
  const files = [
    { title: 'Pitch Desk', id: 1 },
    { title: 'Service Catalogue', id: 2 },
    { title: 'Product Catalogue', id: 3 }
  ];

  return (
    <div className="bg-black flex items-center justify-center p-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl w-full">
        {files.map((file) => (
          <div
            key={file.id}
            className="group relative bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl p-12 flex flex-col items-center justify-center cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20"
          >
            {/* Subtle border glow */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-slate-700/50 to-slate-800/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            
            {/* Content */}
            <div className="relative z-10 flex flex-col items-center">
              {/* Title */}
              <h3 className="text-xl font-medium text-white text-center">
                {file.title}
              </h3>
              {/* Folder Icon */}
              <div className="relative mt-6">
                {/* Main folder body */}
                <div className="w-32 h-24 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-lg rounded-tl-none shadow-lg">
                  {/* Folder tab */}
                  <div className="absolute -top-3 left-0 w-16 h-6 bg-gradient-to-r from-red-400 to-pink-500 rounded-t-lg"></div>
                  
                  {/* Inner folder detail */}
                  <div className="absolute inset-2 bg-gradient-to-br from-yellow-300/30 to-transparent rounded-lg"></div>
                  
                  {/* Folder edge highlight */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-yellow-600/50 rounded-b-lg"></div>
                </div>
                
                {/* Folder shadow */}
                <div className="absolute -bottom-2 left-2 right-2 h-2 bg-black/30 blur-md rounded-full"></div>
              </div>
            </div>

            {/* Hover effect overlay */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-500/0 to-purple-500/0 group-hover:from-blue-500/5 group-hover:to-purple-500/5 transition-all duration-300"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FileSection;