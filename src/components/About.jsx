import React, { forwardRef, useRef } from 'react';
import styled from 'styled-components';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Styled component for the 3D card effect
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
  const imageRef = useRef(null);
  const cardRef = useRef(null);

  useGSAP(
    () => {
      // Title animation - slides from top with fade
      gsap.fromTo(titleRef.current,
        {
          y: -80,
          opacity: 0,
          scale: 0.8,
          rotationX: -15
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          rotationX: 0,
          duration: 1.2,
          ease: "power4.out",
          scrollTrigger: {
            trigger: titleRef.current,
            start: "top 85%",
            end: "bottom 15%",
            toggleActions: "play reverse play reverse"
          }
        }
      );

      // Image wrapper animation - slides from left with rotation
      gsap.fromTo(imageWrapRef.current,
        {
          x: -150,
          opacity: 0,
          rotation: -12,
          scale: 0.7,
          filter: "blur(10px)"
        },
        {
          x: 0,
          opacity: 1,
          rotation: 0,
          scale: 1,
          filter: "blur(0px)",
          duration: 1.3,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: imageWrapRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play reverse play reverse"
          }
        }
      );

      // Card animation - slides from right with 3D effect
      gsap.fromTo(cardRef.current,
        {
          x: 120,
          opacity: 0,
          rotationY: -25,
          scale: 0.8,
          transformOrigin: "right center"
        },
        {
          x: 0,
          opacity: 1,
          rotationY: 0,
          scale: 1,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: cardRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play reverse play reverse"
          }
        }
      );

      // Continuous floating animation for image
      gsap.to(imageWrapRef.current, {
        y: 14,
        duration: 3.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      // Continuous scale animation for image
      gsap.to(imageRef.current, {
        scale: 1.06,
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      // Continuous glow animation
      gsap.to(imageWrapRef.current, {
        boxShadow: '0 0 45px rgba(168, 85, 247, 0.45), 0 0 80px rgba(6, 182, 212, 0.3)',
        duration: 2.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      // Add subtle parallax effect to background blobs
      gsap.to(".bg-blob-1", {
        y: -30,
        duration: 6,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      });

      gsap.to(".bg-blob-2", {
        y: 30,
        duration: 7,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      });

      // Cleanup function
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
      {/* Animated background blobs */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="bg-blob-1 absolute -top-20 left-1/4 h-72 w-72 rounded-full bg-fuchsia-600 blur-3xl" />
        <div className="bg-blob-2 absolute bottom-0 right-1/4 h-72 w-72 rounded-full bg-cyan-500 blur-3xl" />
      </div>

      <div className="relative container mx-auto px-6">
        <h2
          ref={titleRef}
          className="text-5xl md:text-6xl font-black text-center mb-16 text-transparent bg-clip-text bg-linear-to-r from-fuchsia-400 via-white to-cyan-400"
          style={{ textShadow: '0 0 18px rgba(236, 72, 153, 0.35)' }}
        >
          About Me
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image Section */}
          <div className="flex justify-center">
            <div
              ref={imageWrapRef}
              className="relative p-2 rounded-4xl bg-linear-to-br from-fuchsia-500 via-indigo-500 to-cyan-400 shadow-2xl transform-gpu"
            >
              <div className="p-2 rounded-3xl bg-gray-950">
                <img
                  ref={imageRef}
                  src="me.jpeg"
                  alt="About Me"
                  className="h-80 w-80 md:h-96 md:w-96 object-cover rounded-[1.25rem]"
                />
              </div>

              {/* Floating badge */}
              <div className="absolute -bottom-4 -right-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/10 px-4 py-2 text-sm text-white shadow-lg transform hover:scale-105 transition-transform">
                Full-Stack Dev
              </div>
            </div>
          </div>

          {/* Card Section */}
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