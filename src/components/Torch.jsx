import React from 'react';
import styled from 'styled-components';

const Checkbox = () => {
    return (
        <StyledWrapper>
            <label className="container">
                <input type="checkbox" defaultChecked />
                <div className="torch">
                    <div className="light-effect" />
                    <div className="glow-effect" />
                    <div className="ambient-light" />
                    <div className="particles">
                        <span /><span /><span /><span /> <span /><span /><span /><span /> <span /><span /><span /><span />
                    </div>
                    <div className="smoke">
                        <span /><span /><span /><span />
                    </div>
                    <div className="head">
                        <div className="face top">
                            <div /><div /><div /><div />
                        </div>
                        <div className="face left">
                            <div /><div /><div /><div />
                        </div>
                        <div className="face right">
                            <div /><div /><div /><div />
                        </div>
                    </div>
                    <div className="stick">
                        <div className="side side-left">
                            <div /><div /><div /><div /><div /><div /><div /><div /><div /><div /><div /><div /><div /><div /><div /><div />
                        </div>
                        <div className="side side-right">
                            <div /><div /><div /><div /><div /><div /><div /><div /><div /><div /><div /><div /><div /><div /><div /><div />
                        </div>
                    </div>
                </div>
            </label>
        </StyledWrapper>
    );
}

const StyledWrapper = styled.div`
  /* Full Screen Setup - Fixed overflow issue */
  width: 100vw;
  max-width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #050507; 
  overflow: hidden; /* Prevents any light spill from causing scrollbars */
  position: relative;

  .container input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }

  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    cursor: pointer;
    user-select: none;
    margin-top: -40px; /* Optical centering adjustment */
  }

  .simple-text {
    position: absolute;
    bottom: -80px;
    width: 200px;
    text-align: center;
    color: #444; 
    font-size: 16pt;
    font-weight: 800;
    font-family: monospace;
    transition: all 0.4s ease;
    letter-spacing: 1px;
  }

  .torch {
    display: flex;
    justify-content: center;
    height: 150px;
    position: relative;
    transition: transform 0.3s ease;
  }

  .head,
  .stick {
    position: absolute;
    width: 30px;
    transform-style: preserve-3d;
    transform: rotateX(-30deg) rotateY(45deg);
  }

  .stick {
    position: relative;
    height: 120px;
  }

  .face {
    position: absolute;
    transform-style: preserve-3d;
    width: 30px;
    height: 30px;
    display: grid;
    grid-template-columns: 50% 50%;
    grid-template-rows: 50% 50%;
    background-color: #000000;
    transition: all 0.3s ease;
  }

  .top { transform: rotateX(90deg) translateZ(15px); }
  .left { transform: rotateY(-90deg) translateZ(15px); }
  .right { transform: rotateY(0deg) translateZ(15px); }

  .top div, .left div, .right div {
    width: 102%;
    height: 102%;
    transition: all 0.4s ease;
  }

  /* Unlit Torch Head */
  .top div:nth-child(1), .left div:nth-child(3), .right div:nth-child(3) { background-color: #1a1a1a; }
  .top div:nth-child(2), .left div:nth-child(1), .right div:nth-child(1) { background-color: #111111; }
  .top div:nth-child(3), .left div:nth-child(4), .right div:nth-child(4) { background-color: #222222; }
  .top div:nth-child(4), .left div:nth-child(2), .right div:nth-child(2) { background-color: #0a0a0a; }

  /* Lit Torch Head - Neon Core */
  .container input:checked ~ .torch .top div:nth-child(1), 
  .container input:checked ~ .torch .left div:nth-child(3), 
  .container input:checked ~ .torch .right div:nth-child(3) { background-color: #e9d5ff; box-shadow: 0 0 15px #a855f7; }
  
  .container input:checked ~ .torch .top div:nth-child(2), 
  .container input:checked ~ .torch .left div:nth-child(1), 
  .container input:checked ~ .torch .right div:nth-child(1) { background-color: #8b5cf6; box-shadow: 0 0 15px #8b5cf6; }
  
  .container input:checked ~ .torch .top div:nth-child(3), 
  .container input:checked ~ .torch .left div:nth-child(4), 
  .container input:checked ~ .torch .right div:nth-child(4) { background-color: #f0abfc; box-shadow: 0 0 25px #f0abfc; }
  
  .container input:checked ~ .torch .top div:nth-child(4), 
  .container input:checked ~ .torch .left div:nth-child(2), 
  .container input:checked ~ .torch .right div:nth-child(2) { background-color: #3b82f6; box-shadow: 0 0 15px #3b82f6; }

  .side {
    position: absolute;
    width: 30px;
    height: 120px;
    display: grid;
    grid-template-columns: 50% 50%;
    grid-template-rows: repeat(8, 12.5%);
    cursor: pointer;
    translate: 0 12px;
  }

  .side-left { transform: rotateY(-90deg) translateZ(15px) translateY(8px); }
  .side-right { transform: rotateY(0deg) translateZ(15px) translateY(8px); }

  .side-left div, .side-right div {
    width: 103%;
    height: 103%;
    transition: all 0.3s ease;
  }

  .side div:nth-child(1) { background-color: #443622; }
  .side div:nth-child(2) { background-color: #2e2517; }
  .side div:nth-child(3), .side div:nth-child(5) { background-color: #4b3b23; }
  .side div:nth-child(4), .side div:nth-child(10) { background-color: #251e12; }
  .side div:nth-child(6) { background-color: #292115; }
  .side div:nth-child(7) { background-color: #4b3c26; }
  .side div:nth-child(8) { background-color: #292115; }
  .side div:nth-child(9) { background-color: #4b3a21; }
  .side div:nth-child(11), .side div:nth-child(15) { background-color: #3d311d; }
  .side div:nth-child(12) { background-color: #2c2315; }
  .side div:nth-child(13) { background-color: #493a22; }
  .side div:nth-child(14) { background-color: #2b2114; }
  .side div:nth-child(16) { background-color: #271e10; }

  /* MASSIVELY EXTENDED NEON LIGHT EFFECTS */
  .light-effect {
    position: absolute;
    top: 15px; /* Aligned with torch head */
    left: 50%;
    transform: translate(-50%, -50%);
    width: 350px;
    height: 350px;
    background: radial-gradient(
      circle at center,
      rgba(216, 180, 254, 1) 0%,     
      rgba(168, 85, 247, 0.8) 20%,   
      rgba(59, 130, 246, 0.5) 40%,   
      rgba(30, 64, 175, 0.2) 60%,    
      transparent 75%
    );
    filter: blur(12px);
    opacity: 0;
    transition: opacity 0.2s ease;
    pointer-events: none;
  }

  .glow-effect {
    position: absolute;
    top: 15px;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 600px;
    height: 600px;
    background: radial-gradient(
      circle at center,
      rgba(139, 92, 246, 0.5) 0%,    
      rgba(59, 130, 246, 0.2) 30%,   
      transparent 65%
    );
    filter: blur(30px);
    opacity: 0;
    transition: opacity 0.2s ease;
    pointer-events: none;
  }

  .ambient-light {
    position: absolute;
    top: 15px;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 800px; /* Huge ambient spread */
    height: 800px;
    background: radial-gradient(
      circle at center,
      rgba(109, 40, 217, 0.15) 0%,   
      rgba(30, 58, 138, 0.05) 40%,
      transparent 60%
    );
    opacity: 0;
    transition: opacity 0.4s ease;
    pointer-events: none;
  }

  .particles {
    position: absolute;
    top: -10px;
    left: -20px;
    width: 70px;
    height: 70px;
    pointer-events: none;
  }

  .particles span {
    position: absolute;
    width: 4px;
    height: 4px;
    background: #d8b4fe; 
    border-radius: 50%;
    opacity: 0;
    pointer-events: none;
    box-shadow: 0 0 10px #a855f7, 0 0 20px #3b82f6; 
    filter: blur(1px);
  }

  @keyframes particleFloat {
    0% {
      transform: translate(0, 0) scale(1) rotate(0deg);
      opacity: 0;
    }
    20% { opacity: 1; }
    100% {
      transform: translate(calc(var(--x) * 30px), calc(var(--y) * -60px)) scale(0) rotate(360deg);
      opacity: 0;
    }
  }

  .particles span:nth-child(1) { --x: 1; --y: 1; }
  .particles span:nth-child(2) { --x: -1; --y: 1; }
  .particles span:nth-child(3) { --x: 0.5; --y: 1; }
  .particles span:nth-child(4) { --x: -0.5; --y: 1; }
  .particles span:nth-child(5) { --x: 0.7; --y: 1; }
  .particles span:nth-child(6) { --x: -0.7; --y: 1; }
  .particles span:nth-child(7) { --x: 0.3; --y: 1; }
  .particles span:nth-child(8) { --x: -0.3; --y: 1; }

  /* ACTIVE STATE */
  .container input:checked ~ .torch .light-effect {
    opacity: 1;
    animation: neonFlicker 0.15s infinite;
  }

  .container input:checked ~ .torch .glow-effect {
    opacity: 1;
    animation: glowPulse 3s infinite;
  }

  .container input:checked ~ .torch .ambient-light {
    opacity: 1;
  }

  .container input:checked ~ .torch .particles span {
    animation: particleFloat 2s infinite;
  }

  .container input:checked ~ .torch .particles span:nth-child(1) { animation-delay: 0s; }
  .container input:checked ~ .torch .particles span:nth-child(2) { animation-delay: 0.2s; }
  .container input:checked ~ .torch .particles span:nth-child(3) { animation-delay: 0.4s; }
  .container input:checked ~ .torch .particles span:nth-child(4) { animation-delay: 0.6s; }
  .container input:checked ~ .torch .particles span:nth-child(5) { animation-delay: 0.8s; }
  .container input:checked ~ .torch .particles span:nth-child(6) { animation-delay: 1s; }
  .container input:checked ~ .torch .particles span:nth-child(7) { animation-delay: 1.2s; }
  .container input:checked ~ .torch .particles span:nth-child(8) { animation-delay: 1.4s; }

  @keyframes neonFlicker {
    0%, 100% { opacity: 1; }
    25% { opacity: 0.85; }
    50% { opacity: 0.95; }
    75% { opacity: 0.8; }
  }

  .container:hover .simple-text {
    color: #6d28d9;
    transition: all 0.3s ease;
  }

  .container input:checked ~ .torch .face {
    filter: drop-shadow(0px 0px 15px #a855f7)
      drop-shadow(0px 0px 40px rgba(139, 92, 246, 1))
      drop-shadow(0px 0px 60px rgba(59, 130, 246, 0.8));
  }

  .container input:checked ~ .torch .side {
    filter: brightness(1.5);
  }

  .container input:checked ~ .torch .side div {
    box-shadow: inset 0 -5px 15px rgba(139, 92, 246, 0.5); 
  }

  .container input:checked ~ .simple-text {
    color: #c084fc;
    text-shadow: 0 0 10px rgba(168, 85, 247, 0.8), 0 0 20px rgba(59, 130, 246, 0.4), 0 0 40px rgba(168, 85, 247, 0.2);
    letter-spacing: 2px;
  }

  .smoke {
    position: absolute;
    top: -30px;
    left: -10px;
    width: 50px;
    height: 50px;
    pointer-events: none;
  }

  .smoke span {
    position: absolute;
    width: 6px;
    height: 6px;
    background: rgba(168, 85, 247, 0.4); 
    border-radius: 50%;
    filter: blur(3px);
    opacity: 0;
    pointer-events: none;
  }

  @keyframes glowPulse {
    0%, 100% { transform: translate(-50%, -50%) scale(1); opacity: 0.8; }
    50% { transform: translate(-50%, -50%) scale(1.1); opacity: 1; }
  }

  @keyframes smokeRise {
    0% { transform: translate(0, 0) scale(1); opacity: 0; }
    20% { opacity: 0.6; }
    100% { transform: translate(calc(var(--x) * 30px), calc(var(--y) * -60px)) scale(3); opacity: 0; }
  }

  .smoke span:nth-child(1) { --x: 0.5; --y: 1; }
  .smoke span:nth-child(2) { --x: -0.5; --y: 1; }
  .smoke span:nth-child(3) { --x: 0.2; --y: 1; }
  .smoke span:nth-child(4) { --x: -0.2; --y: 1; }

  .container input:checked ~ .torch .smoke span { animation: smokeRise 3s infinite; }
  .container input:checked ~ .torch .smoke span:nth-child(1) { animation-delay: 0s; }
  .container input:checked ~ .torch .smoke span:nth-child(2) { animation-delay: 0.8s; }
  .container input:checked ~ .torch .smoke span:nth-child(3) { animation-delay: 1.6s; }
  .container input:checked ~ .torch .smoke span:nth-child(4) { animation-delay: 2.4s; }
`;

export default Checkbox;