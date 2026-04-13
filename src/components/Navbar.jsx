import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = ({ isMenuOpen, toggleMenu }) => {
  return (
    <nav className="fixed w-full z-10 gradient-to-r from-blue-500 to-cyan-500 bg-opacity-90 backdrop-blur-sm border-b border-cyan-500">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#" className="text-2xl font-bold text-grey-700" style={{ textShadow: '0 0 10px #ffff00' }}>
          SABRI
        </a>
        <div className="hidden md:flex space-x-6">
          {['Home', 'About', 'Skills', 'Projects', 'Services', 'Testimonials', 'Contact'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="hover:text-green-400 transition-colors duration-300"
              style={{ textShadow: '0 0 5px #00ff88' }}
            >
              {item}
            </a>
          ))}
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-2xl text-yellow-300 focus:outline-none">
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-gray-800 bg-opacity-95 text-center py-4">
          {['Home', 'About', 'Skills', 'Projects', 'Services', 'Testimonials', 'Contact'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="block py-2 hover:text-green-400 transition-colors duration-300"
              onClick={toggleMenu}
            >
              {item}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;