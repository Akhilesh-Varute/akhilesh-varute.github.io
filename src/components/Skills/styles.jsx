import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';

const float = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0px); }
`;

const glow = keyframes`
  0%, 100% { box-shadow: 0 0 5px rgba(0, 255, 157, 0.3); }
  50% { box-shadow: 0 0 20px rgba(0, 255, 157, 0.6); }
`;

const borderFlow = keyframes`
  0% { background-position: 0% 50%; }
  100% { background-position: 100% 50%; }
`;

export const SkillsSection = styled.section`
  position: relative;
  min-height: 100vh;
  padding: var(--section-spacing) 0;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

export const MainContainer = styled(motion.div)`
  max-width: 1200px; // Synced with Projects
  width: 100%;
  padding: 2rem;
  margin: 0 auto;
`;

export const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: 5rem; // Increased from 4rem
`;

export const Title = styled(motion.h2)`
  font-size: clamp(2rem, 5vw, 3.5rem);
  font-weight: 800;
  background: linear-gradient(45deg, var(--primary), #00ffff);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  margin-bottom: 1.5rem;
  text-shadow: 0 0 10px rgba(0, 255, 157, 0.3); // Added glow
`;

export const Subtitle = styled(motion.p)`
  font-size: clamp(1rem, 2vw, 1.25rem);
  color: var(--text-secondary);
  max-width: 600px;
  margin: 0 auto;
  margin-bottom: 3rem;
`;

export const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); // Kept adaptive
  gap: 3rem; // Increased from 2.5rem
  width: 100%;
  perspective: 1500px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

export const SkillCard = styled(motion.div)`
  position: relative;
  background: rgba(0, 0, 0, 0.85); // Synced with Projects
  border: 1px solid rgba(0, 255, 157, 0.2); // Synced with Projects
  border-radius: 20px;
  padding: 2.5rem;
  backdrop-filter: blur(10px);
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 35px rgba(0, 255, 157, 0.15);
    border-color: rgba(0, 255, 157, 0.4);
  }
`;

export const CategoryIcon = styled.div`
  width: 60px;
  height: 60px;
  background: rgba(0, 255, 157, 0.1);
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
  color: var(--primary);
  transition: all 0.3s ease;

  ${SkillCard}:hover & {
    transform: scale(1.1);
    background: rgba(0, 255, 157, 0.2);
    box-shadow: 0 0 20px rgba(0, 255, 157, 0.25);
  }
`;

export const CategoryTitle = styled.h3`
  font-size: 1.75rem;
  font-weight: 700;
  color: #ffffff;
  margin-bottom: 1.5rem;
  text-shadow: 0 0 5px rgba(0, 255, 157, 0.3); // Added for readability

  ${SkillCard}:hover & {
    transform: translateY(-5px);
    color: var(--primary);
  }
`;

export const SkillsList = styled.div`
  display: flex;
  flex-direction: column; // Changed to column for cleaner flow
  gap: 1rem;
  margin-top: 1rem;
`;

export const SkillTag = styled(motion.div)`
  padding: 0.75rem 1.25rem;
  background: rgba(0, 255, 157, 0.05);
  border: 1px solid rgba(0, 255, 157, 0.15);
  border-radius: 12px;
  font-size: 0.95rem;
  color: var(--text-secondary);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;

  &:hover {
    transform: translateY(-2px);
    background: rgba(0, 255, 157, 0.1);
    border-color: rgba(0, 255, 157, 0.3);
    color: var(--primary);
  }
`;

export const ProgressBar = styled.div`
  height: 2px;
  background: rgba(0, 255, 157, 0.1);
  border-radius: 2px;
  margin-top: 0.5rem;
  overflow: hidden;
`;

export const Progress = styled.div`
  height: 100%;
  background: var(--primary);
  width: ${props => props.value}%;
  transition: width 1s ease-in-out;
`;