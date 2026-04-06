import React, { useState } from 'react';
import styled from 'styled-components';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <nav className="fixed w-full items-center z-50 gradient-to-r from-blue-500 to-cyan-500 bg-opacity-100 backdrop-blur-sm border-b border-cyan-500">
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
    <StyledWrapper>
      <div className="lg:hidden md:hidden">  
        <input 
          className="label-check" 
          id="label-check" 
          type="checkbox" 
          checked={isMobileMenuOpen}
          onChange={toggleMobileMenu}
        />
        <label htmlFor="label-check" className="hamburger-label">
          <div className="line1" />
          <div className="line2" />
          <div className="line3" />
        </label>
      </div>
    </StyledWrapper>
            
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

const StyledWrapper = styled.div`
  .label-check {
    display: none;
  }

  .hamburger-label {
    width: 30px;
    height: 30px;
    display: block;
    cursor: pointer;
  }

  .hamburger-label div {
    width: 27px;
    height: 4px;
    background-color: white;
    position: absolute;
  }

  .line1 {
    transition: all .3s;
  }

  .line2 {
    margin: 10px 0 0 0;
    transition: 0.3s;
  }

  .line3 {
    margin: 20px 0 0 0;
    transition: 0.3s;
  }

  #label-check:checked + .hamburger-label .line1 {
    transform: rotate(34deg) scaleX(.55) translate(34px, -4.5px);
    border-radius: 50px 50px 50px 0;
  }

  #label-check:checked + .hamburger-label .line3 {
    transform: rotate(-34deg) scaleX(.55) translate(34px, 4.5px);
    border-radius: 0 50px 50px 50px;
  }

  #label-check:checked + .hamburger-label .line2 {
    border-top-right-radius: 50px;
    border-bottom-right-radius: 50px;
    width: 28px;
  }`;



export default Navbar;