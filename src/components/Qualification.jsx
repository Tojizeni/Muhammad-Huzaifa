import React, { useState, useEffect, useRef } from 'react';
import styled, { keyframes } from 'styled-components';

/* ──────────────── data ──────────────── */
const qualifications = [
  {
    id: 1,
    icon: 'fa-school',
    title: 'Matriculation',
    institution: 'Warsal Model School',
    year: '2019 – 2021',
    grade: 'Grade A++',
    detail:
      'Completed Secondary School Certificate (SSC) with Science subjects — Mathematics, Physics, Chemistry, and Biology.',
    glow: '#a855f7',
  },
  {
    id: 2,
    icon: 'fa-building-columns',
    title: 'Intermediate',
    institution: 'Govt. Superior Science College',
    year: '2022 – 2023',
    grade: 'Grade A',
    detail:
      'Higher Secondary School Certificate (HSSC) with Pre-Engineering. Distinction in Mathematics and Physics.',
    glow: '#8b5cf6',
  },
  {
    id: 3,
    icon: 'fa-graduation-cap',
    title: 'University',
    institution: 'University of Agricultuer Peshawer',
    year: '2024 – 2028',
    grade: '3.5 GPA',
    detail:
      "Bachelor's in Artificial Intelligence — Data Structures, Algorithms, Databases, Software Engineering.",
    glow: '#6366f1',
  },
  {
    id: 4,
    icon: 'fa-laptop-code',
    title: 'Web Development',
    institution: 'SMIT (Saylani Mass IT)',
    year: '2024 – 2026',
    grade: 'Certified',
    detail:
      'Full-stack web development — HTML5, CSS3, JavaScript, React.js, Node.js, MongoDB.',
    glow: '#3b82f6',
  },
  {
    id: 5,
    icon: 'fa-microchip',
    title: 'DIT Diploma',
    institution: 'Technical College',
    year: '2022 – 2023',
    grade: 'Diploma Holder',
    detail:
      'Diploma in IT — Office Automation, Networks, Hardware, OS, and Basic Programming.',
    glow: '#0ea5e9',
  },
];

/* ──────────────── animations ──────────────── */
const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(36px); }
  to   { opacity: 1; transform: translateY(0); }
`;

const pulseGlow = keyframes`
  0%, 100% { opacity: 0.4; }
  50%      { opacity: 0.7; }
`;

const scanLine = keyframes`
  0%   { top: -2px; }
  100% { top: 100%; }
`;

/* ──────────────── flip card ──────────────── */
const FlipCard = ({ q, index }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 120 * index);
    return () => clearTimeout(t);
  }, [index]);

  return (
    <CardWrap
      visible={visible}
      style={{ animationDelay: `${120 * index}ms` }}
    >
      <CardShell>
        <CardInner>
          {/* FRONT */}
          <Front>
            <ScanLine />
            <Corner tl top left />
            <Corner tr top right />
            <Corner bl bottom left />
            <Corner br bottom right />
            <IconRing color={q.glow}>
              <i className={`fa-solid ${q.icon}`} />
            </IconRing>
            <FrontTitle>{q.title}</FrontTitle>
            <FrontInst>{q.institution}</FrontInst>
            <FrontHint>
              <i className="fa-solid fa-rotate" /> hover to reveal
            </FrontHint>
          </Front>

          {/* BACK */}
          <Back color={q.glow}>
            <ScanLine />
            <Corner tl top left />
            <Corner tr top right />
            <Corner bl bottom left />
            <Corner br bottom right />
            <BackTitle>{q.title}</BackTitle>
            <BackRow>
              <i className="fa-solid fa-building" /> {q.institution}
            </BackRow>
            <BackRow>
              <i className="fa-regular fa-calendar" /> {q.year}
            </BackRow>
            <BackRow>
              <i className="fa-solid fa-award" /> {q.grade}
            </BackRow>
            <Divider />
            <BackDetail>{q.detail}</BackDetail>
          </Back>
        </CardInner>
      </CardShell>
    </CardWrap>
  );
};

/* ──────────────── main ──────────────── */
const Qualifications = () => {
  return (
    <Section>
      {/* background layers */}
      <BgGrid />
      <BgBlob1 />
      <BgBlob2 />
      <BgBlob3 />

      <Header>
        <Tag>
          <i className="fa-solid fa-bolt" /> Qualifications
        </Tag>
        <Heading>My Academic Journey</Heading>
        <Sub>
          Every step that shaped my skills — hover each card to explore the
          details.
        </Sub>
      </Header>

      <Grid>
        {qualifications.map((q, i) => (
          <FlipCard key={q.id} q={q} index={i} />
        ))}
      </Grid>

      <Footer>
        <FooterLine />
        <FooterText>flip to explore</FooterText>
        <FooterLine />
      </Footer>
    </Section>
  );
};

/* ═══════════════════ STYLED ═══════════════════ */

const Section = styled.section`
  position: relative;
  min-height: 100vh;
  padding: 100px 24px 80px;
  background: #06060e;
  overflow: hidden;
  font-family: 'DM Sans', -apple-system, sans-serif;
  color: #e2e2f0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

/* background grid pattern */
const BgGrid = styled.div`
  position: absolute;
  inset: 0;
  z-index: 0;
  background-image: 
    linear-gradient(rgba(139, 92, 246, 0.04) 1px, transparent 1px),
    linear-gradient(90deg, rgba(139, 92, 246, 0.04) 1px, transparent 1px);
  background-size: 60px 60px;
  pointer-events: none;
`;

/* background glow blobs */
const BgBlob1 = styled.div`
  position: absolute;
  width: 600px;
  height: 600px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(139, 92, 246, 0.18), transparent 70%);
  top: -200px;
  left: -150px;
  filter: blur(80px);
  pointer-events: none;
  z-index: 0;
  animation: ${pulseGlow} 6s ease-in-out infinite;
`;
const BgBlob2 = styled.div`
  position: absolute;
  width: 500px;
  height: 500px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(59, 130, 246, 0.15), transparent 70%);
  bottom: -150px;
  right: -100px;
  filter: blur(80px);
  pointer-events: none;
  z-index: 0;
  animation: ${pulseGlow} 8s ease-in-out infinite 2s;
`;
const BgBlob3 = styled.div`
  position: absolute;
  width: 350px;
  height: 350px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(14, 165, 233, 0.1), transparent 70%);
  top: 40%;
  left: 50%;
  transform: translateX(-50%);
  filter: blur(100px);
  pointer-events: none;
  z-index: 0;
  animation: ${pulseGlow} 7s ease-in-out infinite 1s;
`;

/* header */
const Header = styled.header`
  position: relative;
  z-index: 1;
  text-align: center;
  margin-bottom: 72px;
`;
const Tag = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-size: 11px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 3px;
  color: #a78bfa;
  background: rgba(139, 92, 246, 0.08);
  border: 1px solid rgba(139, 92, 246, 0.2);
  padding: 8px 22px;
  border-radius: 50px;
  margin-bottom: 24px;
`;
const Heading = styled.h1`
  font-family: 'Playfair Display', serif;
  font-weight: 900;
  font-size: clamp(34px, 5.5vw, 60px);
  line-height: 1.1;
  margin: 0 0 18px;
  background: linear-gradient(
    135deg,
    #e0d4fc 0%,
    #a78bfa 30%,
    #818cf8 55%,
    #60a5fa 80%,
    #38bdf8 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;
const Sub = styled.p`
  color: #6b6b8a;
  font-size: 15px;
  max-width: 480px;
  margin: 0 auto;
  line-height: 1.7;
`;

/* grid */
const Grid = styled.div`
  position: relative;
  z-index: 1;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 28px;
  max-width: 1080px;
  width: 100%;

  /* center the last 2 cards in a 3-col grid */
  & > div:nth-child(4) {
    grid-column: 1 / 2;
    justify-self: end;
    width: calc(100% - 14px);
  }
  & > div:nth-child(5) {
    grid-column: 2 / 4;
    justify-self: start;
    width: calc(100% - 14px);
  }

  @media (max-width: 860px) {
    grid-template-columns: repeat(2, 1fr);
    & > div:nth-child(4),
    & > div:nth-child(5) {
      grid-column: auto;
      justify-self: stretch;
      width: 100%;
    }
  }
  @media (max-width: 580px) {
    grid-template-columns: 1fr;
    & > div:nth-child(4),
    & > div:nth-child(5) {
      grid-column: auto;
      justify-self: stretch;
      width: 100%;
    }
  }
`;

/* card wrapper (stagger animation) */
const CardWrap = styled.div`
  opacity: ${(p) => (p.visible ? 1 : 0)};
  transform: ${(p) => (p.visible ? 'translateY(0)' : 'translateY(36px)')};
  transition: opacity 0.5s ease, transform 0.5s ease;
`;

/* the perspective container — ONLY this has perspective, no extra transforms */
const CardShell = styled.div`
  width: 100%;
  height: 330px;
  perspective: 1000px;
  cursor: pointer;
`;

/* the element that actually rotates — clean rotateY only */
const CardInner = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  transform-style: preserve-3d;
  transition: transform 0.8s cubic-bezier(0.4, 0.0, 0.2, 1);

  ${CardShell}:hover & {
    transform: rotateY(180deg);
  }
`;

/* shared face styles */
const faceBase = `
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
  border-radius: 16px;
  overflow: hidden;
  box-sizing: border-box;
`;

/* front face */
const Front = styled.div`
  ${faceBase}
  background: linear-gradient(
    160deg,
    rgba(15, 12, 30, 0.95) 0%,
    rgba(20, 16, 42, 0.98) 100%
  );
  border: 1px solid rgba(139, 92, 246, 0.2);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 14px;
  padding: 28px 20px;
  transition: border-color 0.3s;

  ${CardShell}:hover & {
    border-color: rgba(139, 92, 246, 0.4);
  }
`;

const IconRing = styled.div`
  width: 68px;
  height: 68px;
  border-radius: 50%;
  border: 2px solid ${(p) => p.color || '#a855f7'};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  color: ${(p) => p.color || '#a855f7'};
  background: ${(p) => `${p.color}10` || 'rgba(168,85,247,0.06)'};
  box-shadow: 0 0 20px ${(p) => `${p.color}25` || 'rgba(168,85,247,0.15)'};
  transition: box-shadow 0.3s, transform 0.3s;
  margin-bottom: 4px;

  ${CardShell}:hover & {
    box-shadow: 0 0 30px ${(p) => `${p.color}40` || 'rgba(168,85,247,0.25)'};
  }
`;

const FrontTitle = styled.h3`
  font-family: 'Playfair Display', serif;
  font-weight: 700;
  font-size: 21px;
  margin: 0;
  color: #f0ecff;
  letter-spacing: 0.3px;
`;

const FrontInst = styled.span`
  font-size: 13px;
  color: #7c7c9a;
  font-weight: 500;
`;

const FrontHint = styled.span`
  margin-top: 10px;
  font-size: 10px;
  color: #50506a;
  display: flex;
  align-items: center;
  gap: 6px;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-weight: 700;
`;

/* back face */
const Back = styled.div`
  ${faceBase}
  transform: rotateY(180deg);
  background: linear-gradient(
    160deg,
    rgba(15, 12, 30, 0.97) 0%,
    rgba(20, 16, 42, 0.99) 100%
  );
  border: 1px solid ${(p) => `${p.color}35` || 'rgba(139,92,246,0.2)'};
  display: flex;
  flex-direction: column;
  gap: 11px;
  padding: 28px 24px;
  transition: border-color 0.3s;

  ${CardShell}:hover & {
    border-color: ${(p) => `${p.color}55` || 'rgba(139,92,246,0.35)'};
  }
`;

const BackTitle = styled.h4`
  font-family: 'Playfair Display', serif;
  font-weight: 700;
  font-size: 19px;
  margin: 0 0 2px;
  color: #f0ecff;
  padding-bottom: 12px;
  border-bottom: 1px solid rgba(139, 92, 246, 0.12);
`;

const BackRow = styled.p`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 13px;
  margin: 0;
  color: #b0b0cc;
  font-weight: 500;

  i {
    font-size: 11px;
    width: 16px;
    text-align: center;
    color: #7c7c9a;
  }
`;

const Divider = styled.div`
  height: 1px;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(139, 92, 246, 0.15),
    transparent
  );
  margin: 4px 0;
`;

const BackDetail = styled.p`
  margin: auto 0 0;
  font-size: 12.5px;
  line-height: 1.7;
  color: #8888a8;
`;

/* corner accents */
const Corner = styled.div`
  position: absolute;
  width: 14px;
  height: 14px;
  z-index: 2;
  pointer-events: none;

  ${(p) => p.top && 'top: 8px;'}
  ${(p) => p.bottom && 'bottom: 8px;'}
  ${(p) => p.left && 'left: 8px;'}
  ${(p) => p.right && 'right: 8px;'}

  border-color: rgba(139, 92, 246, 0.3);
  border-style: solid;

  ${(p) => p.top && p.left && 'border-width: 2px 0 0 2px; border-radius: 4px 0 0 0;'}
  ${(p) => p.top && p.right && 'border-width: 2px 2px 0 0; border-radius: 0 4px 0 0;'}
  ${(p) => p.bottom && p.left && 'border-width: 0 0 2px 2px; border-radius: 0 0 0 4px;'}
  ${(p) => p.bottom && p.right && 'border-width: 0 2px 2px 0; border-radius: 0 0 4px 0;'}
`;

/* scan line effect */
const ScanLine = styled.div`
  position: absolute;
  left: 0;
  width: 100%;
  height: 1px;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(139, 92, 246, 0.12),
    transparent
  );
  z-index: 1;
  pointer-events: none;
  animation: ${scanLine} 4s linear infinite;
`;

/* footer */
const Footer = styled.footer`
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 18px;
  margin-top: 72px;
`;
const FooterLine = styled.div`
  width: 50px;
  height: 1px;
  background: linear-gradient(90deg, transparent, rgba(139, 92, 246, 0.3), transparent);
`;
const FooterText = styled.span`
  font-size: 10px;
  text-transform: uppercase;
  letter-spacing: 3px;
  font-weight: 700;
  color: #3d3d5c;
`;

export default Qualifications;