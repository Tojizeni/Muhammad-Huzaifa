import React, { useState } from 'react';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <nav className="fixed w-full z-50 gradient-to-r from-blue-500 to-cyan-500 bg-opacity-100 backdrop-blur-sm border-b border-cyan-500">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <a href="#" className="text-xl sm:text-2xl font-bold neon-blue">
              SABRI
            </a>
            
            {/* Desktop navigation */}
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
            
            {/* Mobile menu button */}
            <button
              className="sm:hidden flex items-center justify-center w-8 h-8 rounded-lg bg-blue-600 bg-opacity-30 text-white focus:outline-none"
              onClick={toggleMobileMenu}
              aria-label="Toggle navigation menu"
            >
              <div className="relative w-5 h-4">
                <span className={`absolute block h-0.5 w-5 bg-current transform transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : 'translate-y-0'}`}></span>
                <span className={`absolute block h-0.5 w-5 bg-current transform transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : 'translate-y-1.5'}`}></span>
                <span className={`absolute block h-0.5 w-5 bg-current transform transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 translate-y-1.5' : 'translate-y-3'}`}></span>
              </div>
            </button>
            
            <div className="hidden sm:block w-16 md:w-20"></div> {/* Empty div to balance the layout */}
          </div>
        </div>
      </nav>
      
      {/* Mobile sidebar menu */}
      <div 
        className={`fixed top-0 right-0 h-full w-35~ gradient-to-r from-blue-500 to-cyan-500 bg-opacity-70 backdrop-blur-md shadow-2xl z-40 transform transition-transform duration-300 ease-in-out sm:hidden ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Sidebar header - matching navbar height */}
          <div className="flex items-center justify-between px-4 py-3 border-b border-cyan-400 border-opacity-30">
            <span className="text-xl font-bold text-white">Menu</span>
            <button
              className="flex items-center justify-center w-8 h-8 rounded-lg bg-blue-600 bg-opacity-30 text-white focus:outline-none"
              onClick={() => setIsMobileMenuOpen(false)}
              aria-label="Close navigation menu"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          
          {/* Menu items */}
          <div className="flex-1 overflow-y-auto py-4">
            <div className="flex flex-col space-y-1 px-4">
              {['Home', 'About', 'Skills', 'Projects', 'Services', 'Testimonials', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="hover:text-fuchsia-300 transition-colors duration-300 text-base py-3 px-4 rounded-lg hover:bg-white hover:bg-opacity-10 text-white"
                  style={{ textShadow: '0 0 5px #00ff88' }}
                  onClick={() => setIsMobileMenuOpen(false)} // Close menu after clicking a link
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;