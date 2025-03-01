import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';

const glow = keyframes`
  0%, 100% { box-shadow: 0 0 20px rgba(0, 255, 157, 0.3); }
  50% { box-shadow: 0 0 30px rgba(0, 255, 157, 0.6); }
`;

const pulse = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.1); }
  100% { transform: scale(1); }
`;

export const ExperienceSection = styled.section`
  position: relative;
  min-height: 100vh;
  padding: var(--section-spacing) 0;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  @media (max-width: 768px) {
    min-height: auto; /* Allow height to adjust based on content */
    padding: 2rem 0; /* Reduce padding on mobile */
  }
`;

export const ExperienceContainer = styled(motion.div)`
  max-width: 1200px;
  width: 100%;
  padding: 2rem;
  margin: 0 auto;

  @media (max-width: 768px) {
    padding: 1rem; /* Reduce padding on smaller screens */
  }
`;

export const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: 4rem;

  @media (max-width: 768px) {
    margin-bottom: 2rem; /* Reduce spacing on mobile */
  }
`;

export const Title = styled(motion.h2)`
  font-size: clamp(2rem, 5vw, 3.5rem);
  font-weight: 800;
  background: linear-gradient(45deg, var(--primary), #00ffff);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  margin-bottom: 1.5rem;

  @media (max-width: 768px) {
    margin-bottom: 1rem;
  }
`;

export const Subtitle = styled(motion.p)`
  font-size: clamp(1rem, 2vw, 1.25rem);
  color: var(--text-secondary);
  max-width: 600px;
  margin: 0 auto;
  margin-bottom: 3rem;

  @media (max-width: 768px) {
    margin-bottom: 1.5rem;
  }
`;

export const Timeline = styled.div`
  position: relative;
  max-width: 1000px;
  margin: 0 auto;
  padding: 2rem 0;

  &::before {
    content: '';
    position: absolute;
    left: 50%;
    top: 0;
    bottom: 0;
    width: 2px;
    background: linear-gradient(
      180deg,
      transparent,
      var(--primary) 10%,
      var(--primary) 90%,
      transparent
    );
    transform: translateX(-50%);
    z-index: 1;
  }

  @media (max-width: 768px) {
    padding: 1rem 0;
    &::before {
      left: 20px; /* Move timeline line closer to edge on mobile */
    }
  }
`;

export const TimelineItem = styled(motion.div)`
  display: flex;
  justify-content: flex-end;
  padding-right: 30px;
  margin-bottom: 4rem;
  width: 50%;
  position: relative;

  &:nth-child(even) {
    justify-content: flex-start;
    padding-right: 0;
    padding-left: 30px;
    margin-left: auto;
  }

  &::before {
    content: '';
    position: absolute;
    right: -8px;
    top: 24px;
    width: 16px;
    height: 16px;
    background: var(--primary);
    border-radius: 50%;
    z-index: 2;
    animation: ${pulse} 2s infinite;
  }

  &:nth-child(even)::before {
    right: auto;
    left: -8px;
  }

  @media (max-width: 768px) {
    width: 100%; /* Full width on mobile */
    margin-left: 0 !important; /* Remove offset */
    padding-left: 40px; /* Space for timeline dot and connector */
    padding-right: 0;
    margin-bottom: 2rem; /* Reduce spacing between items */

    &::before {
      left: 6px; /* Align dot with timeline line */
      right: auto !important;
      top: 20px; /* Adjust vertical position */
    }
  }
`;

export const TimelineConnector = styled.div`
  position: absolute;
  top: 32px;
  right: 8px;
  width: 22px;
  height: 2px;
  background: linear-gradient(to right, transparent, var(--primary));

  ${TimelineItem}:nth-child(even) & {
    right: auto;
    left: 8px;
    background: linear-gradient(to left, transparent, var(--primary));
  }

  @media (max-width: 768px) {
    left: 22px; /* Align with timeline line and dot */
    right: auto !important;
    width: 18px; /* Slightly shorter on mobile */
    top: 28px; /* Adjust vertical position */
    background: linear-gradient(to right, var(--primary), transparent) !important;
  }
`;

export const ExperienceCard = styled(motion.div)`
  background: rgba(0, 0, 0, 0.8);
  border: 1px solid rgba(0, 255, 157, 0.1);
  border-radius: 20px;
  padding: 2rem;
  width: calc(100% - 30px);
  backdrop-filter: blur(10px);
  position: relative;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    border-color: var(--primary);
    box-shadow: 0 10px 30px rgba(0, 255, 157, 0.1);
  }

  @media (max-width: 768px) {
    width: 100%; /* Full width on mobile */
    padding: 1.5rem; /* Reduce padding */
    border-radius: 15px; /* Slightly smaller radius */
  }

  @media (max-width: 480px) {
    padding: 1rem; /* Further reduce padding on very small screens */
  }
`;

export const Period = styled.span`
  display: inline-block;
  padding: 0.5rem 1rem;
  background: rgba(0, 255, 157, 0.1);
  border-radius: 9999px;
  font-size: 0.875rem;
  color: var(--primary);
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 0.75rem; /* Smaller text on mobile */
    padding: 0.4rem 0.8rem;
  }
`;

export const Role = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--primary);
  margin-bottom: 0.5rem;

  @media (max-width: 768px) {
    font-size: 1.25rem; /* Slightly smaller on mobile */
  }

  @media (max-width: 480px) {
    font-size: 1rem;
  }
`;

export const Company = styled.h4`
  font-size: 1.25rem;
  color: var(--text-primary);
  margin-bottom: 1.5rem;

  @media (max-width: 768px) {
    font-size: 1rem;
    margin-bottom: 1rem;
  }

  @media (max-width: 480px) {
    font-size: 0.875rem;
  }
`;

export const AchievementsList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const AchievementItem = styled(motion.li)`
  position: relative;
  padding-left: 1.5rem;
  margin-bottom: 0.75rem;
  color: var(--text-secondary);
  line-height: 1.6;
  font-size: clamp(0.875rem, 2vw, 1rem); /* Responsive font size */

  &::before {
    content: '→';
    position: absolute;
    left: 0;
    color: var(--primary);
    transition: transform 0.3s ease;
  }

  ${ExperienceCard}:hover &::before {
    transform: translateX(5px);
  }

  ${ExperienceCard}:hover & {
    color: var(--text-primary);
  }

  @media (max-width: 768px) {
    padding-left: 1.25rem;
    margin-bottom: 0.5rem;
  }
`;