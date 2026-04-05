import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  // --- YEH SMOOTH SCROLL KA CODE AB FUNCTION KE ANDAR HAI ---
  useEffect(() => {
    const handleSmoothScroll = (e) => {
      // Sirf un links par kaam kare jo # se shuru hoti hain aur same page par hain
      if (e.target.tagName === 'A' && e.target.hash && e.target.hash.startsWith('#')) {
        e.preventDefault(); // Default jump behavior ko rokna

        const targetId = e.target.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
          });
        }
      }
    };

    // Event listener add karna poore document par
    document.addEventListener('click', handleSmoothScroll);

    // Component unmount hone par event listener hata dena (good practice)
    return () => {
      document.removeEventListener('click', handleSmoothScroll);
    };
  }, []); // Empty array matlab yeh effect sirf ek baar run hoga jab component load ho
  // --- SMOOTH SCROLL CODE YAHAN TAK ---


  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="min-h-screen bg-black text-gray-100">
      <Navbar isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Services />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;