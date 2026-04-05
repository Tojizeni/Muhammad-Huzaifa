import React, { forwardRef, useRef } from 'react';
import styled from 'styled-components';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Styled component moved outside the main component
const StyledAboutCard = styled.div`
  .parent {
    width: 100%;
    max-width: 400px;
    perspective: 1000px;
  }`;

  
const About = forwardRef((props, ref) => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const imageWrapRef = useRef(null);
  const imageRef = useRef(null);
  const cardRef = useRef(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
          toggleActions: 'play none none reverse',
        },
      });

      tl.from(titleRef.current, {
        y: 60,
        opacity: 0,
        scale: 0.85,
        duration: 1,
        ease: 'power3.out',
      })
        .from(
          imageWrapRef.current,
          {
            x: -120,
            opacity: 0,
            rotate: -8,
            scale: 0.8,
            duration: 1.1,
            ease: 'power4.out',
          },
          '-=0.5'
        )
        .from(
          cardRef.current,
          {
            x: 70,
            opacity: 0,
            duration: 0.9,
            ease: 'power3.out',
          },
          '-=0.7'
        );

      gsap.to(imageWrapRef.current, {
        y: 14,
        duration: 3.5,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      });

      gsap.to(imageRef.current, {
        scale: 1.06,
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      });

      gsap.to(imageWrapRef.current, {
        boxShadow: '0 0 45px rgba(168, 85, 247, 0.45)',
        duration: 2.5,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      });
    },
    { scope: sectionRef }
  );

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative overflow-hidden py-24 bg-gradient-to-b from-gray-950 via-gray-900 to-black"
    >
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute -top-20 left-1/4 h-72 w-72 rounded-full bg-fuchsia-600 blur-3xl" />
        <div className="absolute bottom-0 right-1/4 h-72 w-72 rounded-full bg-cyan-500 blur-3xl" />
      </div>

      <div className="relative container mx-auto px-6">
        <h2
          ref={titleRef}
          className="text-5xl md:text-6xl font-black text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 via-white to-cyan-400"
          style={{ textShadow: '0 0 18px rgba(236, 72, 153, 0.35)' }}
        >
          About Me
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center">
            <div
              ref={imageWrapRef}
              className="relative p-2 rounded-4xl bg-gradient-to-br from-fuchsia-500 via-indigo-500 to-cyan-400 shadow-2xl"
            >
              <div className="p-2 rounded-3xl bg-gray-950">
                <img
                  ref={imageRef}
                  src="me.jpeg"
                  alt="About Me"
                  className="h-80 w-80 md:h-96 md:w-96 object-cover rounded-[1.25rem]"
                />
              </div>

              <div className="absolute -bottom-4 -right-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/10 px-4 py-2 text-sm text-white shadow-lg">
                Full-Stack Dev
              </div>
            </div>
          </div>
          <div ref={cardRef}>
            <StyledAboutCard>
              <div className="parent">
                <div className="card">
                  <div className="content-box">
                    <span className="card-title">HELLO</span>
                    <p className="card-content">
                     I’m a full-stack developer who enjoys turning ideas into smooth, fast, and visually
                      compelling web experiences. I focus on clean design, strong performance, and modern
                       interactions that feel natural to users. With experience in React, Node.js, and
                        the latest web technologies, I build applications that balance functionality
                         with great design..
                    </p>
                    <span className="see-more">See More</span>
                  </div>
                  <div className="date-box">
                    <span className="month">EXP</span>
                    <span className="date">3+</span>
                  </div>
                </div>
              </div>
            </StyledAboutCard>
          </div>
        </div>
      </div>
    </section>
  );
});

About.displayName = 'About';

export default About;