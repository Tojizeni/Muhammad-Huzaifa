import React, { forwardRef, useState } from 'react';
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaGitAlt, FaNpm, FaFigma, FaBootstrap } from 'react-icons/fa';
import { SiJavascript, SiTypescript, SiTailwindcss, SiMongodb, SiRedux, SiNextdotjs, SiExpress, SiPostman, SiVercel } from 'react-icons/si';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

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

  useGSAP(() => {
    // Animate the title
    gsap.fromTo('#skills-title',
      {
        scale: 0,
        opacity: 0,
        y: -30
      },
      {
        scale: 1,
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: '#skills',
          start: 'top 80%',
          toggleActions: 'play reverse play reverse'
        }
      }
    );

    // Animate skill cards with stagger effect
    const cards = document.querySelectorAll('.skill-card');
    
    cards.forEach((card, index) => {
      gsap.fromTo(card,
        {
          scale: 0,
          opacity: 0,
          y: 50,
          rotation: 5
        },
        {
          scale: 1,
          opacity: 1,
          y: 0,
          rotation: 0,
          duration: 0.6,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: card,
            start: 'top 85%',
            end: 'bottom 15%',
            toggleActions: 'play reverse play reverse',
            // Add some delay based on index for staggered effect
            onEnter: () => {
              gsap.to(card, {
                scale: 1,
                opacity: 1,
                y: 0,
                rotation: 0,
                duration: 0.6,
                ease: "back.out(1.7)",
                delay: index * 0.05
              });
            },
            onLeave: () => {
              gsap.to(card, {
                scale: 0,
                opacity: 0,
                y: 50,
                rotation: 5,
                duration: 0.4,
                ease: "power2.in"
              });
            },
            onEnterBack: () => {
              gsap.to(card, {
                scale: 1,
                opacity: 1,
                y: 0,
                rotation: 0,
                duration: 0.6,
                ease: "back.out(1.7)",
                delay: index * 0.05
              });
            },
            onLeaveBack: () => {
              gsap.to(card, {
                scale: 0,
                opacity: 0,
                y: 50,
                rotation: 5,
                duration: 0.4,
                ease: "power2.in"
              });
            }
          }
        }
      );
    });

    // Cleanup ScrollTriggers
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section id="skills" ref={ref} className="py-20 bg-black">
      <div className="container mx-auto px-6">
        <h2 
          id="skills-title"
          className={`text-6xl font-bold text-center mb-12 transition-all duration-300 ${
            hoveredSkill !== null ? 'text-pink-300' : 'text-purple-400'
          }`} 
          style={{ 
            textShadow: hoveredSkill !== null ? intenseGlow : purpleGlow,
            transform: hoveredSkill !== null ? 'scale(1)' : 'scale(1)',
            transition: 'all 0.3s ease'
          }}
        >
          My Skills
        </h2>
        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8">
          {skills.map((skill, index) => (
            <div 
              key={index} 
              className="skill-card flex flex-col items-center justify-center p-4 bg-gray-900 rounded-lg shadow-lg transform hover:scale-110 transition-all duration-300 cursor-pointer" 
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