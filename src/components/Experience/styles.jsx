// components/Experience/styles.js
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
`;

export const ExperienceContainer = styled(motion.div)`
  max-width: 1200px;
  width: 100%;
  padding: 2rem;
  margin: 0 auto;
`;

export const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: 4rem;
`;

export const Title = styled(motion.h2)`
  font-size: clamp(2rem, 5vw, 3.5rem);
  font-weight: 800;
  background: linear-gradient(45deg, var(--primary), #00ffff);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  margin-bottom: 1.5rem;
`;

export const Subtitle = styled(motion.p)`
  font-size: clamp(1rem, 2vw, 1.25rem);
  color: var(--text-secondary);
  max-width: 600px;
  margin: 0 auto;
  margin-bottom: 3rem;
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
    &::before {
      left: 30px;
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
    width: calc(100% - 60px);
    margin-left: 60px !important;
    padding-right: 0 !important;
    padding-left: 30px !important;

    &::before {
      left: -8px !important;
      right: auto !important;
    }
  }
`;

export const TimelineConnector = styled.div`
  position: absolute;
  top: 32px;
  right: 8px;
  width: 22px;
  height: 2px;
  background: linear-gradient(
    to right,
    transparent,
    var(--primary)
  );

  ${TimelineItem}:nth-child(even) & {
    right: auto;
    left: 8px;
    background: linear-gradient(
      to left,
      transparent,
      var(--primary)
    );
  }

  @media (max-width: 768px) {
    left: 8px !important;
    right: auto !important;
    background: linear-gradient(
      to right,
      var(--primary),
      transparent
    ) !important;
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
    width: 100%;
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
`;

export const Role = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--primary);
  margin-bottom: 0.5rem;
`;

export const Company = styled.h4`
  font-size: 1.25rem;
  color: var(--text-primary);
  margin-bottom: 1.5rem;
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
`;