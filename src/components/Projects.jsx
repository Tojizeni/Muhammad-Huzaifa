import React, { forwardRef } from 'react';

const Projects = forwardRef((props, ref) => {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-featured e-commerce site with payment integration.',
      image: 'https://via.placeholder.com/600x400',
      tech: ['React', 'Node.js', 'MongoDB'],
      link: '#',
    },
    {
      title: 'Task Management App',
      description: 'A collaborative task management tool with real-time updates.',
      image: 'https://via.placeholder.com/600x400',
      tech: ['React', 'Firebase', 'Tailwind CSS'],
      link: '#',
    },
    {
      title: 'Weather Dashboard',
      description: 'A weather app that displays current and forecast data.',
      image: 'https://via.placeholder.com/600x400',
      tech: ['HTML', 'CSS', 'JavaScript', 'API'],
      link: '#',
    },
  ];

  return (
    <section id="projects" ref={ref} className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <h2 
         className={`text-6xl font-bold text-center mb-12 transition-all duration-300`} 
          style={{ textShadow: '0 0 10px rgba(255, 0, 255, 0.8), 0 0 20px rgba(255, 0, 255, 0.5), 0 0 30px rgba(255, 0, 255, 0.3)' }}
        >
          My Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-gray-800 rounded-lg overflow-hidden shadow-xl group">
              <div className="relative">
                <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
                <div className="absolute inset-0 bg-blue-100 bg-opacity-0 group-hover:bg-opacity-70 transition-all duration-300 flex items-center justify-center">
                  <a href={project.link} className="opacity-0 group-hover:opacity-100 bg-white text-gray-900 px-6 py-2 rounded-full font-semibold transform scale-90 group-hover:scale-100 transition-all duration-300">
                    View Project
                  </a>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-white">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="px-3 py-1 bg-gray-700 text-xs text-green-400 rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
});

Projects.displayName = 'Projects';

export default Projects;