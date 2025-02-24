// components/Projects/styles.js
import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';

const shine = keyframes`
  0% { transform: translateX(-100%) rotate(45deg); }
  100% { transform: translateX(100%) rotate(45deg); }
`;

const float = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0px); }
`;

export const ProjectsSection = styled.section`
  position: relative;
  min-height: 100vh;
  padding: var(--section-spacing) 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ProjectsContainer = styled(motion.div)`
  max-width: 1400px;
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
`;

export const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2.5rem;
  width: 100%;
  perspective: 1000px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

export const ProjectCard = styled(motion.div)`
  position: relative;
  background: rgba(0, 0, 0, 0.8);
  border: 1px solid rgba(0, 255, 157, 0.1);
  border-radius: 20px;
  padding: 2.5rem;
  backdrop-filter: blur(10px);
  overflow: hidden;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);

  &:hover {
    transform: translateY(-10px);
    border-color: rgba(0, 255, 157, 0.3);
    box-shadow: 0 15px 35px rgba(0, 255, 157, 0.1);
  }
`;

export const IconContainer = styled.div`
  width: 60px;
  height: 60px;
  background: rgba(0, 255, 157, 0.1);
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
  transition: all 0.3s ease;

  svg {
    color: var(--primary);
    transition: all 0.3s ease;
  }

  ${ProjectCard}:hover & {
    transform: scale(1.1);
    background: rgba(0, 255, 157, 0.15);
    box-shadow: 0 0 20px rgba(0, 255, 157, 0.2);
  }
`;


export const ProjectTitle = styled.h3`
  font-size: 1.75rem;
  font-weight: 700;
  color: #ffffff;
  margin-bottom: 1rem;
  transition: all 0.3s ease;

  ${ProjectCard}:hover & {
    transform: translateY(-2px);
    color: var(--primary);
  }
`;

export const ProjectImpact = styled.div`
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--text-secondary);
  padding: 0.75rem 1.25rem;
  background: rgba(0, 255, 157, 0.08);
  border-radius: 12px;
  display: inline-block;
  margin-bottom: 1.5rem;
  transition: all 0.3s ease;

  ${ProjectCard}:hover & {
    background: rgba(0, 255, 157, 0.12);
    color: var(--primary);
    transform: scale(1.05);
  }
`;

export const ProjectDescription = styled.p`
  font-size: 1rem;
  line-height: 1.7;
  color: var(--text-secondary);
  margin-bottom: 2rem;
  transition: color 0.3s ease;

  ${ProjectCard}:hover & {
    color: var(--text-primary);
  }
`;

export const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-top: auto;
  padding-top: 1.5rem;
  border-top: 1px solid rgba(0, 255, 157, 0.1);
`;

export const TechTag = styled(motion.span)`
  padding: 0.5rem 1rem;
  background: rgba(0, 255, 157, 0.05);
  border: 1px solid rgba(0, 255, 157, 0.1);
  border-radius: 8px;
  font-size: 0.875rem;
  color: var(--text-secondary);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;

  ${ProjectCard}:hover & {
    &:hover {
      transform: translateY(-2px);
      background: rgba(0, 255, 157, 0.1);
      border-color: rgba(0, 255, 157, 0.2);
      color: var(--primary);
    }
  }
`;