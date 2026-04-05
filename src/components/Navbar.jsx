import React from 'react';

const Navbar = () => {
  return (
    <nav className="fixed w-full z-10 gradient-to-r from-blue-500 to-cyan-500 bg-opacity-90 backdrop-blur-sm border-b border-cyan-500">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <a href="#" className="text-xl sm:text-2xl font-bold neon-blue">
            SABRI
          </a>
          <div className="hidden sm:flex grow justify-center">
            <div className="flex space-x-4 md:space-x-6">
              {['Home', 'About', 'Skills', 'Projects', 'Services', 'Testimonials', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="hover:text-fuchsia-300 transition-colors duration-300 text-sm md:text-base"
                  style={{ textShadow: '0 0 5px #00ff88' }}
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
          <div className="hidden sm:block w-16 md:w-20"></div> {/* Empty div to balance the layout */}
          
          {/* Mobile navigation */}
          <div className="sm:hidden grow flex justify-center ml-4">
            <div className="flex overflow-x-auto scrollbar-hide space-x-3 pb-1">
              {['Home', 'About', 'Skills', 'Projects', 'Services', 'Testimonials', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="hover:text-fuchsia-300 transition-colors duration-300 text-sm whitespace-nowrap shrink-0"
                  style={{ textShadow: '0 0 5px #00ff88' }}
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      {/* Hide scrollbar styles */}
      <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </nav>
  );
};

export default Navbar;