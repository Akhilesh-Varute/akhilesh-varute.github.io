import styled, { css, keyframes } from 'styled-components';
import { motion } from 'framer-motion';

const glowPulse = keyframes`
  0% { box-shadow: 0 0 5px rgba(0, 255, 157, 0.2); }
  50% { box-shadow: 0 0 20px rgba(0, 255, 157, 0.4); }
  100% { box-shadow: 0 0 5px rgba(0, 255, 157, 0.2); }
`;

export const NavContainer = styled(motion.nav)`
  position: fixed;
  top: 1rem;
  left: 60%; // Changed from 50% to 60% to move it right
  transform: translateX(-50%);
  z-index: 1000;
  padding: 0.75rem;
  border-radius: 9999px;
  background: rgba(0, 0, 0, 0.95);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(0, 255, 157, 0.1);
  width: auto;
  max-width: 90vw;
  box-shadow: 0 0 20px rgba(0, 255, 157, 0.1);

  @media (max-width: 1200px) {
    left: 55%; // Slightly less offset on medium screens
  }

  @media (max-width: 768px) {
    left: 50%; // Center on mobile
    padding: 0.5rem;
    top: 1rem;
  }
`;

export const NavLinksContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.75rem; // Increased gap slightly
  flex-wrap: nowrap;
  padding: 0 0.5rem; // Added horizontal padding

  @media (max-width: 768px) {
    gap: 0.25rem;
  }
`;

export const NavLink = styled(motion.a)`
  color: var(--text-primary);
  text-decoration: none;
  padding: 0.5rem 1rem; // Increased horizontal padding
  position: relative;
  font-weight: 500;
  font-size: 0.9rem;
  letter-spacing: 0.025em;
  transition: all 0.3s ease;
  white-space: nowrap;

  @media (max-width: 1024px) {
    padding: 0.4rem 0.8rem;
    font-size: 0.85rem;
  }

  @media (max-width: 768px) {
    padding: 0.3rem 0.5rem;
    font-size: 0.8rem;
  }

  &:hover {
    color: var(--primary);
  }

  ${props => props.active && css`
    color: var(--primary);
    background: rgba(0, 255, 157, 0.1);
    border-radius: 6px;
  `}
`;

// Rest of the styles remain the same
export const MobileMenuButton = styled(motion.button)`
  display: none;
  align-items: center;
  justify-content: center;
  background: transparent;
  border: none;
  color: var(--text-primary);
  padding: 0.5rem;
  cursor: pointer;
  
  @media (max-width: 480px) {
    display: flex;
  }
`;

export const MobileMenu = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.98);
  backdrop-filter: blur(10px);
  z-index: 1001;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: 1rem;
`;

export const MobileNavLink = styled(NavLink)`
  font-size: 1.1rem;
  width: 100%;
  text-align: center;
  padding: 1rem;
  border-radius: 12px;
  background: rgba(0, 255, 157, 0.05);
  border: 1px solid rgba(0, 255, 157, 0.1);
  margin: 0.25rem 0;
  
  &:hover {
    background: rgba(0, 255, 157, 0.1);
    transform: translateY(-2px);
  }
  
  ${props => props.active && css`
    background: rgba(0, 255, 157, 0.15);
    border-color: var(--primary);
  `}
`;

export const MobileCloseButton = styled(MobileMenuButton)`
  position: absolute;
  top: 1rem;
  right: 1rem;
  display: flex;
  color: var(--primary);
`;