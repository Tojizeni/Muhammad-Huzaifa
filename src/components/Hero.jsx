import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const Hero = () => {
  const [columns, setColumns] = useState(40);

  useEffect(() => {
    const calculateColumns = () => {
      const columnWidth = 25; // Width of each column in pixels
      const viewportWidth = window.innerWidth;
      const newColumns = Math.ceil(viewportWidth / columnWidth) + 5; // Add extra columns for safety
      setColumns(newColumns);
    };

    calculateColumns();
    window.addEventListener('resize', calculateColumns);
    return () => window.removeEventListener('resize', calculateColumns);
  }, []);

  return (
    <HeroSection id="home">
      <StyledWrapper>
        <div className="matrix-container">
          {[...Array(5)].map((_, patternIndex) => (
            <div key={patternIndex} className="matrix-pattern">
              {[...Array(columns)].map((_, i) => (
                <div 
                  key={i} 
                  className="matrix-column" 
                  style={{
                    left: `${i * 25}px`,
                    animationDelay: `${Math.random() * -5}s`,
                    animationDuration: `${3 + Math.random() * 3}s`
                  }}
                />
              ))}
            </div>
          ))}
        </div>
      </StyledWrapper>

      <HeroContent>
        <h1 className="hero-title">
          Hi, I'm Muhammad Huzaifa Sabri
        </h1>
        <p className="hero-subtitle">
          Full-Stack Developer & UI/UX Enthusiast
        </p>
        <div className="hero-buttons">
          <a
            href="#projects"
            className="btn-primary"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="btn-secondary"
          >
            Contact Me
          </a>
        </div>
      </HeroContent>
    </HeroSection>
  );
};

const HeroSection = styled.section`
  position: relative;
  width: 98vw;
  height: 100vh;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
`;

const HeroContent = styled.div`
  position: relative;
  z-index: 20;
  text-align: center;
  padding: 0 1.5rem;
  max-width: 1200px;
  
  .hero-title {
    font-size: clamp(2.5rem, 5vw, 3.75rem);
    font-weight: 800;
    margin-bottom: 1rem;
    background: linear-gradient(135deg, #a855f7, #ec4899);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    text-shadow: 0 0 30px rgba(168, 85, 247, 0.5);
    animation: glow 2s ease-in-out infinite alternate;
  }
  
  .hero-subtitle {
    font-size: clamp(1.25rem, 3vw, 1.5rem);
    margin-bottom: 2rem;
    color: #e0e0e0;
    text-shadow: 0 0 10px rgba(0, 255, 255, 0.5);
  }
  
  .hero-buttons {
    display: flex;
    gap: 1rem;
    justify-content: center;
    flex-wrap: wrap;
  }
  
  .btn-primary {
    display: inline-block;
    padding: 0.75rem 2rem;
    background: linear-gradient(135deg, #9333ea, #7c3aed);
    color: white;
    font-weight: 600;
    border-radius: 9999px;
    text-decoration: none;
    transition: all 0.3s ease;
    box-shadow: 0 4px 15px rgba(147, 51, 234, 0.4);
    
    &:hover {
      transform: translateY(-2px) scale(1.05);
      box-shadow: 0 6px 20px rgba(147, 51, 234, 0.6);
    }
  }
  
  .btn-secondary {
    display: inline-block;
    padding: 0.75rem 2rem;
    border: 2px solid #60a5fa;
    color: #60a5fa;
    font-weight: 600;
    border-radius: 9999px;
    text-decoration: none;
    transition: all 0.3s ease;
    
    &:hover {
      background: #60a5fa;
      color: #000;
      transform: translateY(-2px);
      box-shadow: 0 6px 20px rgba(96, 165, 250, 0.4);
    }
  }
  
  @keyframes glow {
    from {
      filter: drop-shadow(0 0 20px rgba(168, 85, 247, 0.5));
    }
    to {
      filter: drop-shadow(0 0 30px rgba(236, 72, 153, 0.8));
    }
  }
  
  @media (max-width: 640px) {
    .hero-buttons {
      flex-direction: column;
      align-items: center;
    }
    
    .btn-primary, .btn-secondary {
      width: 100%;
      max-width: 280px;
    }
  }
`;

const StyledWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 10;
  pointer-events: none;
  overflow: hidden;

`;

export default Hero;