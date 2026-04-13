import React, { forwardRef } from 'react';

const Services = forwardRef((props, ref) => {
  const services = [
    {
      title: 'Web Development',
      description: 'Building responsive and performant websites from scratch.',
      icon: '🚀',
    },
    {
      title: 'UI/UX Design',
      description: 'Creating intuitive and visually appealing user interfaces.',
      icon: '🎨',
    },
    {
      title: 'API Integration',
      description: 'Connecting your application to third-party services and APIs.',
      icon: '🔌',
    },
  ];

  return (
    <section id="services" ref={ref} className="py-20 bg-black">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 text-orange-400" style={{ textShadow: '0 0 10px #ff8800' }}>
          My Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-gray-900 p-8 rounded-lg shadow-xl text-center hover:shadow-orange-500/50 transition-all duration-300" style={{ border: '1px solid #ff8800' }}>
              <div className="text-5xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-4 text-white">{service.title}</h3>
              <p className="text-gray-400">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
});

Services.displayName = 'Services';

export default Services;