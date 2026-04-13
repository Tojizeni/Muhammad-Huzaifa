import React, { forwardRef } from 'react';

const Testimonials = forwardRef((props, ref) => {
  const testimonials = [
    {
      name: 'Jane Doe',
      position: 'CEO at TechCorp',
      text: 'Alex is an incredibly talented developer. He delivered our project on time and exceeded our expectations.',
      avatar: 'https://via.placeholder.com/100x100',
    },
    {
      name: 'John Smith',
      position: 'Product Manager at StartupXYZ',
      text: 'Working with Alex was a great experience. His attention to detail and problem-solving skills are top-notch.',
      avatar: 'https://via.placeholder.com/100x100',
    },
  ];

  return (
    <section id="testimonials" ref={ref} className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 text-green-400" style={{ textShadow: '0 0 10px #00ff88' }}>
          Testimonials
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-xl">
              <p className="text-lg mb-4 text-gray-300 italic" style={{ borderLeft: '4px solid #00ff88', paddingLeft: '1rem' }}>
                "{testimonial.text}"
              </p>
              <div className="flex items-center">
                <img src={testimonial.avatar} alt={testimonial.name} className="w-12 h-12 rounded-full mr-4" />
                <div>
                  <h4 className="font-semibold text-white">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">{testimonial.position}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
});

Testimonials.displayName = 'Testimonials';

export default Testimonials;