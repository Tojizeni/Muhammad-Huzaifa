import React from 'react';

const Hero = () => {
  return (
    <section id="home" className="relative w-full h-screen overflow-hidden flex items-center justify-center">
      
      <video
        className="absolute inset-0 object-cover z-0 w-full h-screen"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/0337.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* <div className="absolute inset-0 bg-black/40 z-10"></div> */}

      <div className="relative z-20 text-center px-6">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-4 neon-purple-pink">
          Hi, I'm Muhammad Huzaifa Sabri
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-gray-300 neon-blue">
          Full-Stack Developer & UI/UX Enthusiast
        </p>
        <div className="space-x-4">
          <a
            href="#projects"
            className="px-8 py-3 bg-purple-800 text-white font-semibold rounded-full hover:scale-105 transition inline-block"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="px-8 py-3 border-2 border-blue-400 text-blue-400 font-semibold rounded-full hover:bg-blue-400 hover:text-black transition inline-block"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;