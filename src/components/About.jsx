import React, { forwardRef, useRef } from 'react';
import styled from 'styled-components';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const StyledAboutCard = styled.div`
  .parent {
    width: 100%;
    max-width: 400px;
    perspective: 1000px;
  }

  .card {
    background: linear-gradient(135deg, rgba(168, 85, 247, 0.1), rgba(6, 182, 212, 0.1));
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 20px;
    padding: 25px;
    position: relative;
    transition: all 0.4s ease;
    transform-style: preserve-3d;
  }

  .card:hover {
    transform: rotateY(5deg) rotateX(-5deg);
    box-shadow: 0 20px 40px rgba(168, 85, 247, 0.3);
  }

  .content-box {
    position: relative;
    z-index: 2;
  }

  .card-title {
    font-size: 28px;
    font-weight: bold;
    background: linear-gradient(135deg, #f472b6, #06b6d4);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    display: block;
    margin-bottom: 15px;
  }

  .card-content {
    color: #e5e7eb;
    line-height: 1.7;
    font-size: 15px;
    margin-bottom: 20px;
  }

  .see-more {
    color: #06b6d4;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
    display: inline-block;
  }

  .see-more:hover {
    color: #f472b6;
    transform: translateX(5px);
  }

  .date-box {
    position: absolute;
    top: 20px;
    right: 20px;
    background: linear-gradient(135deg, #f472b6, #06b6d4);
    border-radius: 15px;
    padding: 10px 15px;
    text-align: center;
    box-shadow: 0 10px 20px rgba(168, 85, 247, 0.3);
  }

  .month {
    display: block;
    color: white;
    font-size: 12px;
    font-weight: 600;
  }

  .date {
    display: block;
    color: white;
    font-size: 24px;
    font-weight: bold;
  }
`;

const About = forwardRef((props, ref) => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const imageWrapRef = useRef(null);
  const cardRef = useRef(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse"
        }
      });

      // Title - simple fade up
      tl.fromTo(titleRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, ease: "power2.out" }
      );

      // Image - simple fade in from left
      tl.fromTo(imageWrapRef.current,
        { x: -40, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.6, ease: "power2.out" },
        "-=0.3"
      );

      // Card - simple fade in from right
      tl.fromTo(cardRef.current,
        { x: 40, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.6, ease: "power2.out" },
        "-=0.3"
      );

      return () => {
        ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      };
    },
    { scope: sectionRef }
  );

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative overflow-hidden py-24 bg-linear-to-b from-gray-950 via-gray-900 to-black"
    >
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="bg-blob-1 absolute -top-20 left-1/4 h-72 w-72 rounded-full bg-fuchsia-600 blur-3xl" />
        <div className="bg-blob-2 absolute bottom-0 right-1/4 h-72 w-72 rounded-full bg-cyan-500 blur-3xl" />
      </div>

      <div className="relative container mx-auto px-6">
        <h2
          ref={titleRef}
          className="text-5xl md:text-6xl font-black text-center mb-16 text-transparent bg-clip-text bg-linear-to-r from-fuchsia-400 via-white to-cyan-400"
        >
          About Me
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center">
            <div
              ref={imageWrapRef}
              className="relative p-2 rounded-4xl bg-linear-to-br from-fuchsia-500 via-indigo-500 to-cyan-400 shadow-2xl transform-gpu"
            >
              <div className="p-2 rounded-3xl bg-gray-950">
                <img
                  src="me.jpeg"
                  alt="About Me"
                  className="h-80 w-80 md:h-96 md:w-96 object-cover rounded-[1.25rem]"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/10 px-4 py-2 text-sm text-white shadow-lg transform hover:scale-105 transition-transform">
                Full-Stack Dev
              </div>
            </div>
          </div>

          <div ref={cardRef} className="flex justify-center md:justify-start">
            <StyledAboutCard>
              <div className="parent">
                <div className="card">
                  <div className="content-box">
                    <span className="card-title">HELLO</span>
                    <p className="card-content">
                      I'm a full-stack developer who enjoys turning ideas into smooth, fast, and visually
                      compelling web experiences. I focus on clean design, strong performance, and modern
                      interactions that feel natural to users. With experience in React, Node.js, and
                      the latest web technologies, I build applications that balance functionality
                      with great design.
                    </p>
                    <span className="see-more">See More →</span>
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