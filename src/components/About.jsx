import React, { forwardRef } from 'react';

const About = forwardRef((props, ref) => {
  return (
    <section id="about" ref={ref} className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 text-red-400" style={{ textShadow: '0 0 10px #f44336' }}>
          About Me
        </h2>
        <div className="flex flex-col md:flex-row items-center justify-center">
          <div className="md:w-1/3 mb-8 md:mb-0 flex justify-center">
            {/* --- Yahan Picture Frame Badla Gaya Hai --- */}
            <div className="relative p-2 bg-gradient-to-br from-red-600 to-pink-600 rounded-2xl shadow-2xl" style={{ boxShadow: '0 0 30px rgba(244, 67, 54, 0.6)' }}>
              <div className="p-1 bg-gray-900 rounded-xl">
                <img 
                  src="https://via.placeholder.com/350x350" // Thodi badi image
                  alt="About Me" 
                  className="rounded-xl w-72 h-72 md:w-80 md:h-80 object-cover" 
                />
              </div>
            </div>
          </div>
          <div className="md:w-2/3 md:pl-8">
            <p className="text-lg text-gray-300 mb-4">
              I'm a passionate full-stack developer with a love for creating innovative solutions. With experience in both frontend and backend technologies, I strive to build seamless user experiences.
            </p>
            <p className="text-lg text-gray-300">
              When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or enjoying the great outdoors.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
});

About.displayName = 'About';

export default About;