import React, { forwardRef } from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Contact = forwardRef((props, ref) => {
  return (
    <section id="contact" ref={ref} className="py-20 bg-black">
      <div className="container mx-auto px-6">
        <h2    className={`text-6xl font-bold text-center mb-12 transition-all duration-300`} 
          style={{ textShadow: '0 0 10px rgba(255, 0, 255, 0.8), 0 0 20px rgba(255, 0, 255, 0.5), 0 0 30px rgba(255, 0, 255, 0.3)' }}>
          Contact Me
        </h2>
        <div className="flex flex-col md:flex-row gap-12">
          <div className="md:w-1/2">
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Name</label>
                <input type="text" className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:outline-none focus:border-red-500 text-white" style={{ boxShadow: '0 0 10px rgba(244, 67, 54, 0.2) inset' }} />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Email</label>
                <input type="email" className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:outline-none focus:border-red-500 text-white" style={{ boxShadow: '0 0 10px rgba(244, 67, 54, 0.2) inset' }} />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Message</label>
                <textarea rows="5" className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:outline-none focus:border-red-500 text-white" style={{ boxShadow: '0 0 10px rgba(244, 67, 54, 0.2) inset' }}></textarea>
              </div>
              <button type="submit" className="w-full py-3 bg-red-500 text-white font-semibold rounded-lg shadow-lg hover:shadow-red-500/50 transform hover:-translate-y-1 transition-all duration-300" style={{ boxShadow: '0 0 20px #f44336' }}>
                Send Message
              </button>
            </form>
          </div>
          <div className="md:w-1/2 space-y-6">
            <div className="flex items-center gap-4">
              <FaEnvelope className="text-2xl text-cyan-400" style={{ textShadow: '0 0 10px #00d4ff' }} />
              <div>
                <h4 className="font-semibold text-gray-200">Email</h4>
                <p className="text-gray-400">mhsabri27@gmail.com</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <FaPhone className="text-2xl text-green-400" style={{ textShadow: '0 0 10px #00ff88' }} />
              <div>
                <h4 className="font-semibold text-gray-200">Phone</h4>
                <p className="text-gray-400">+92 (347) 9858-077</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <FaMapMarkerAlt className="text-2xl text-yellow-400" style={{ textShadow: '0 0 10px #ffff00' }} />
              <div>
                <h4 className="font-semibold text-gray-200">Location</h4>
                <p className="text-gray-400">Peshawer, Pakistan</p>
              </div>
            </div>
            <div className="flex gap-4 pt-4">
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:bg-gray-700 hover:text-white transition-all" style={{ boxShadow: '0 0 10px rgba(255, 255, 255, 0.1)' }}>
                <FaGithub />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:bg-blue-600 hover:text-white transition-all">
                <FaLinkedin />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:bg-sky-500 hover:text-white transition-all">
                <FaTwitter />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

Contact.displayName = 'Contact';

export default Contact;