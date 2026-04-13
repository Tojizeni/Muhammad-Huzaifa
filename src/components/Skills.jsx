import React, { forwardRef } from 'react';
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaGitAlt, FaNpm, FaFigma, FaBootstrap } from 'react-icons/fa';
import { SiJavascript, SiTypescript, SiTailwindcss, SiMongodb, SiRedux, SiNextdotjs, SiExpress, SiPostman, SiVercel } from 'react-icons/si';

const Skills = forwardRef((props, ref) => {
  const skills = [
    { name: 'React', icon: FaReact, color: 'text-cyan-400', glow: '0 0 15px #00d4ff' },
    { name: 'Node.js', icon: FaNodeJs, color: 'text-green-500', glow: '0 0 15px #00ff88' },
    { name: 'JavaScript', icon: SiJavascript, color: 'text-yellow-400', glow: '0 0 15px #ffff00' },
    { name: 'TypeScript', icon: SiTypescript, color: 'text-blue-500', glow: '0 0 15px #0099ff' },
    { name: 'HTML5', icon: FaHtml5, color: 'text-orange-500', glow: '0 0 15px #ff8800' },
    { name: 'CSS3', icon: FaCss3Alt, color: 'text-blue-600', glow: '0 0 15px #0066ff' },
    { name: 'Tailwind CSS', icon: SiTailwindcss, color: 'text-teal-400', glow: '0 0 15px #00bcd4' },
    { name: 'MongoDB', icon: SiMongodb, color: 'text-green-600', glow: '0 0 15px #4caf50' },
    { name: 'Git', icon: FaGitAlt, color: 'text-red-500', glow: '0 0 15px #f44336' },
    { name: 'Redux', icon: SiRedux, color: 'text-purple-500', glow: '0 0 15px #9c27b0' },
    { name: 'Next.js', icon: SiNextdotjs, color: 'text-gray-100', glow: '0 0 15px #ffffff' },
    { name: 'Express', icon: SiExpress, color: 'text-gray-300', glow: '0 0 15px #e0e0e0' },
    { name: 'NPM', icon: FaNpm, color: 'text-red-600', glow: '0 0 15px #d32f2f' },
    { name: 'Figma', icon: FaFigma, color: 'text-pink-500', glow: '0 0 15px #e91e63' },
    { name: 'Postman', icon: SiPostman, color: 'text-orange-600', glow: '0 0 15px #ff9800' },
    { name: 'Vercel', icon: SiVercel, color: 'text-white', glow: '0 0 15px #ffffff' },
    { name: 'Bootstrap', icon: FaBootstrap, color: 'text-purple-600', glow: '0 0 15px #673ab7' },
  ];

  return (
    <section id="skills" ref={ref} className="py-20 bg-black">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 text-yellow-300" style={{ textShadow: '0 0 10px #ffff00' }}>
          My Skills
        </h2>
        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8">
          {skills.map((skill, index) => (
            <div key={index} className="flex flex-col items-center justify-center p-4 bg-gray-900 rounded-lg shadow-lg transform hover:scale-110 transition-all duration-300" style={{ boxShadow: skill.glow }}>
              <skill.icon className={`text-5xl mb-2 ${skill.color}`} style={{ filter: `drop-shadow(${skill.glow})` }} />
              <span className="text-sm text-gray-300">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
});

Skills.displayName = 'Skills';

export default Skills;