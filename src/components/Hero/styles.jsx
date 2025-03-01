// components/Hero/styles.js
import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';

export const gridFloat = keyframes`
  0% { transform: rotate(-45deg) translateY(0); }
  100% { transform: rotate(-45deg) translateY(-50%); }
`;

export const gradient = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

export const typing = keyframes`
  from { width: 0 }
  to { width: 100% }
`;

export const blink = keyframes`
  from, to { border-color: transparent }
  50% { border-color: var(--primary); }
`;

export const HeroContainer = styled.section`
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 6rem 2rem;
  overflow: hidden;
`;

export const Background = styled.div`
  position: absolute;
  inset: 0;
  overflow: hidden;
  opacity: 0.4;
`;

export const Grid = styled.div`
  position: absolute;
  inset: -100%;
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  gap: 2px;
  transform: rotate(-45deg);
  animation: ${gridFloat} 20s linear infinite;
`;

export const GridItem = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(0, 255, 157, 0.1);
  transition: all 0.3s ease;
`;

export const Content = styled(motion.div)`
  position: relative;
  max-width: 1200px;
  width: 100%;
  z-index: 2;
  text-align: center;
`;

export const Badge = styled(motion.div)`
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.75rem 1.5rem;
  background: rgba(0, 255, 157, 0.1);
  border: 1px solid rgba(0, 255, 157, 0.2);
  border-radius: 9999px;
  color: var(--primary);
  font-weight: 500;
  margin-bottom: 2rem;
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    background: rgba(0, 255, 157, 0.15);
    border-color: var(--primary);
    box-shadow: 0 0 20px rgba(0, 255, 157, 0.2);
  }
`;

export const HeroTitle = styled(motion.h1)`
  font-size: clamp(2.5rem, 8vw, 4rem);
  font-weight: 800;
  line-height: 1.1;
  margin-bottom: 1.5rem;
  position: relative;
  color: var(--text-primary);
`;

export const TitleHighlight = styled.span`
  background: linear-gradient(
    45deg,
    var(--primary) 0%,
    #00ffff 50%,
    var(--primary) 100%
  );
  background-size: 200% auto;
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  animation: ${gradient} 6s linear infinite;
`;

export const SubtitleContainer = styled(motion.div)`
  margin-bottom: 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

export const Subtitle = styled.p`
  font-size: clamp(1.2rem, 3vw, 1.5rem);
  color: var(--text-secondary);
  margin: 0 0 0.5rem 0;
`;

export const StatsContainer = styled(motion.div)`
  display: flex;
  justify-content: center;
  gap: 4rem;
  margin-bottom: 3rem;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
    align-items: center;
  }
`;

export const StatItem = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  background: rgba(0, 0, 0, 0.3);
  border: 1px solid rgba(0, 255, 157, 0.1);
  border-radius: 16px;
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    border-color: var(--primary);
    box-shadow: 0 10px 30px rgba(0, 255, 157, 0.1);
  }
`;

export const StatContent = styled.div`
  text-align: left;
`;

export const StatNumber = styled.span`
  display: block;
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--primary);
`;

export const StatLabel = styled.span`
  font-size: 0.875rem;
  color: var(--text-secondary);
`;

export const HeroActions = styled(motion.div)`
  display: flex;
  gap: 1.5rem;
  justify-content: center;
  margin-bottom: 3rem;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
    padding: 0 2rem;
  }
`;

export const ActionButton = styled.a`
  padding: 1rem 2rem;
  border-radius: 12px;
  font-weight: 600;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
  
  background: ${props => props.primary ? 'var(--primary)' : 'rgba(0, 255, 157, 0.1)'};
  color: ${props => props.primary ? 'var(--background)' : 'var(--primary)'};
  border: ${props => props.primary ? 'none' : '1px solid var(--primary)'};

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 30px rgba(0, 255, 157, 0.2);
  }
`;

export const SocialLinks = styled(motion.div)`
  display: flex;
  gap: 1.5rem;
  justify-content: center;

  @media (max-width: 768px) {
    gap: 1rem;
  }
`;

export const SocialLink = styled(motion.a)`
  padding: 1rem;
  background: rgba(0, 255, 157, 0.1);
  border: 1px solid rgba(0, 255, 157, 0.1);
  border-radius: 12px;
  color: var(--text-secondary);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(0, 255, 157, 0.2);
    color: var(--primary);
    transform: translateY(-3px);
  }
`;

export const TypedTextContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 0 auto;
`;

export const TypingText = styled.span`
  font-size: clamp(1.2rem, 3vw, 1.5rem);
  font-weight: 600;
  color: var(--primary);
  border-right: 2px solid var(--primary);
  padding: 0.1rem 0.5rem 0.1rem 0.3rem;
  white-space: nowrap;
  overflow: hidden;
  background: rgba(0, 255, 157, 0.15);
  border-radius: 4px;
  box-shadow: 0 0 8px rgba(0, 255, 157, 0.3);
  animation: 
    ${typing} 3.5s steps(40, end),
    ${blink} 0.75s step-end infinite;
`;

export const CTAContainer = styled(motion.div)`
  display: flex;
  gap: 1.5rem;
  justify-content: center;
  margin-bottom: 3rem;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
    padding: 0 2rem;
  }
`;

// Rename ActionButton to CTAButton (optional)
export const CTAButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem 2rem;
  border-radius: 12px;
  font-weight: 600;
  transition: all 0.3s ease;
  text-decoration: none;
  
  ${props => props.$isPrimary ? `
    background: var(--primary);
    color: var(--background);
    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 10px 20px rgba(0, 255, 157, 0.2);
    }
  ` : `
    background: rgba(0, 255, 157, 0.1);
    color: var(--primary);
    &:hover {
      background: rgba(0, 255, 157, 0.2);
      transform: translateY(-2px);
    }
  `}
`;

export const SocialLabel = styled.span`
  display: none;
  margin-left: 0.5rem;
  font-size: 0.9rem;
  
  @media (min-width: 768px) {
    display: inline;
  }
`;

