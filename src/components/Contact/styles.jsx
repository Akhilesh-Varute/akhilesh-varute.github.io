import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';

const glow = keyframes`
  0%, 100% { box-shadow: 0 0 10px rgba(0, 255, 157, 0.3); }
  50% { box-shadow: 0 0 20px rgba(0, 255, 157, 0.6); }
`;

const float = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0px); }
`;

const pulse = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.05); }
  100% { transform: scale(1); }
`;

// Base section and container
export const ContactSection = styled.section`
  position: relative;
  min-height: 100vh;
  padding: var(--section-spacing) 0;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

export const ContactContainer = styled(motion.div)`
  max-width: 1200px;
  width: 100%;
  padding: 2rem;
  margin: 0 auto;
`;

// Header components
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

// Grid layout
export const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  align-items: start;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

// Form components
export const ContactForm = styled(motion.form)`
  background: rgba(0, 0, 0, 0.8);
  border: 1px solid rgba(0, 255, 157, 0.1);
  border-radius: 24px;
  padding: 2.5rem;
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;

  &:hover {
    border-color: var(--primary);
    box-shadow: 0 10px 30px rgba(0, 255, 157, 0.1);
  }

  @media (max-width: 768px) {
    padding: 1.5rem;
  }
`;

export const FormGroup = styled.div`
  margin-bottom: 1.5rem;
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  color: var(--text-secondary);
  font-size: 0.9rem;
  transition: color 0.3s ease;

  ${FormGroup}:focus-within & {
    color: var(--primary);
  }
`;

export const Input = styled.input`
  width: 100%;
  padding: 1rem;
  background: rgba(0, 255, 157, 0.05);
  border: 1px solid rgba(0, 255, 157, 0.1);
  border-radius: 12px;
  color: var(--text-primary);
  transition: all 0.3s ease;
  outline: none;

  &:focus {
    border-color: var(--primary);
    background: rgba(0, 255, 157, 0.1);
    box-shadow: 0 0 20px rgba(0, 255, 157, 0.1);
    transform: translateY(-2px);
  }

  &::placeholder {
    color: rgba(255, 255, 255, 0.3);
  }
`;

export const Textarea = styled(Input).attrs({ as: 'textarea' })`
  min-height: 150px;
  resize: vertical;
`;

export const SubmitButton = styled(motion.button)`
  width: 100%;
  padding: 1.2rem;
  background: var(--primary);
  color: var(--background);
  border: none;
  border-radius: 12px;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 20px rgba(0, 255, 157, 0.2);
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`;

// Contact info components
export const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const IconWrapper = styled.div`
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 255, 157, 0.1);
  border-radius: 16px;
  color: var(--primary);
  transition: all 0.3s ease;
`;

export const ContactCard = styled(motion.div)`
  background: rgba(0, 0, 0, 0.8);
  border: 1px solid rgba(0, 255, 157, 0.1);
  border-radius: 20px;
  padding: 2rem;
  display: flex;
  align-items: center;
  gap: 1.5rem;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    border-color: rgba(0, 255, 157, 0.3);
    box-shadow: 0 10px 30px rgba(0, 255, 157, 0.1);
  }

  &:hover ${IconWrapper} {
    background: rgba(0, 255, 157, 0.2);
    transform: scale(1.1) rotate(10deg);
  }
`;

export const ContactDetails = styled.div`
  flex: 1;
`;

export const ContactTitle = styled.h3`
  font-size: 1.25rem;
  color: var(--text-primary);
  margin-bottom: 0.5rem;
`;

export const ContactText = styled.p`
  color: var(--text-secondary);
  font-size: 0.9rem;
  margin: 0;
`;

// Social components
export const SocialLinks = styled(motion.div)`
  display: flex;
  gap: 1rem;
  margin-top: 2rem;
  justify-content: center;
`;

export const SocialButton = styled(motion.a)`
  padding: 1rem;
  background: rgba(0, 255, 157, 0.1);
  border: 1px solid rgba(0, 255, 157, 0.1);
  border-radius: 12px;
  color: var(--text-secondary);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(0, 255, 157, 0.2);
    color: var(--primary);
    transform: translateY(-3px);
    box-shadow: 0 5px 15px rgba(0, 255, 157, 0.2);
  }
`;

// Message components
export const ErrorMessage = styled.span`
  color: #ff4d4d;
  font-size: 0.8rem;
  margin-top: 0.5rem;
  display: block;
`;

export const SuccessMessage = styled(motion.div)`
  position: fixed;
  top: 2rem;
  right: 2rem;
  background: var(--primary);
  color: var(--background);
  padding: 1rem 2rem;
  border-radius: 12px;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  animation: ${glow} 2s infinite;
`;