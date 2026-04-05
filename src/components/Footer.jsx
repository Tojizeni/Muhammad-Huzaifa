import React from 'react';

const Footer = () => {
  return (
    <footer className="py-8 bg-gray-900 border-t border-gray-800">
      <div className="container mx-auto px-5">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Alex Johnson. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-gray-500 hover:text-cyan-400 transition-colors" style={{ textShadow: '0 0 5px #00d4ff' }}>Privacy Policy</a>
            <a href="#" className="text-gray-500 hover:text-pink-400 transition-colors" style={{ textShadow: '0 0 5px #e91e63' }}>Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;