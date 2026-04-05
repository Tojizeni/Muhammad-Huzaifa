import React, { forwardRef, useState } from 'react';
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaGitAlt, FaNpm, FaFigma, FaBootstrap } from 'react-icons/fa';
import { SiJavascript, SiTypescript, SiTailwindcss, SiMongodb, SiRedux, SiNextdotjs, SiExpress, SiPostman, SiVercel } from 'react-icons/si';

const Skills = forwardRef((props, ref) => {
  // Define the purple/magenta glow effect
  const purpleGlow = '0 0 10px rgba(255, 0, 255, 0.8), 0 0 20px rgba(255, 0, 255, 0.5), 0 0 30px rgba(255, 0, 255, 0.3)';
  const intenseGlow = '0 0 15px rgba(255, 0, 255, 1), 0 0 25px rgba(255, 0, 255, 0.8), 0 0 35px rgba(255, 0, 255, 0.6), 0 0 45px rgba(255, 0, 255, 0.4)';
  
  const skills = [
    { name: 'React', icon: FaReact },
    { name: 'Node.js', icon: FaNodeJs },
    { name: 'JavaScript', icon: SiJavascript },
    { name: 'TypeScript', icon: SiTypescript },
    { name: 'HTML5', icon: FaHtml5 },
    { name: 'CSS3', icon: FaCss3Alt },
    { name: 'Tailwind CSS', icon: SiTailwindcss },
    { name: 'MongoDB', icon: SiMongodb },
    { name: 'Git', icon: FaGitAlt },
    { name: 'Redux', icon: SiRedux },
    { name: 'Next.js', icon: SiNextdotjs },
    { name: 'Express', icon: SiExpress },
    { name: 'NPM', icon: FaNpm },
    { name: 'Figma', icon: FaFigma },
    { name: 'Postman', icon: SiPostman },
    { name: 'Vercel', icon: SiVercel },
    { name: 'Bootstrap', icon: FaBootstrap },
  ];

  const [hoveredSkill, setHoveredSkill] = useState(null);

  return (
    <section id="skills" ref={ref} className="py-20 bg-black">
      <div className="container mx-auto px-6">
        <h2 
          className={`text-6xl font-bold text-center mb-12 transition-all duration-300 ${
            hoveredSkill ? 'text-pink-300' : 'text-purple-400'
          }`} 
          style={{ 
            textShadow: hoveredSkill ? intenseGlow : purpleGlow,
            transform: hoveredSkill ? 'scale(1.1)' : 'scale(1)',
            transition: 'all 0.3s ease'
          }}
        >
          My Skills
        </h2>
        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8">
          {skills.map((skill, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center justify-center p-4 bg-gray-900 rounded-lg shadow-lg transform hover:scale-110 transition-all duration-300 cursor-pointer" 
              style={{ 
                boxShadow: hoveredSkill === index ? intenseGlow : purpleGlow,
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={() => setHoveredSkill(index)}
              onMouseLeave={() => setHoveredSkill(null)}
            >
              <skill.icon 
                className={`text-5xl mb-2 transition-all duration-300 ${
                  hoveredSkill === index ? 'text-pink-300' : 'text-purple-400'
                }`} 
                style={{ 
                  filter: hoveredSkill === index ? `drop-shadow(${intenseGlow})` : `drop-shadow(${purpleGlow})`,
                  transform: hoveredSkill === index ? 'scale(1.2)' : 'scale(1)',
                  transition: 'all 0.3s ease'
                }} 
              />
              <span className={`text-sm transition-all duration-300 ${
                hoveredSkill === index ? 'text-pink-200' : 'text-purple-300'
              }`}>
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
});

Skills.displayName = 'Skills';

export default Skills;