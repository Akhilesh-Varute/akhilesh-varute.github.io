import styled, { css, keyframes } from 'styled-components';
import { motion } from 'framer-motion';

const pulseGlow = keyframes`
  0% { box-shadow: 0 0 5px rgba(0, 255, 157, 0.1); }
  50% { box-shadow: 0 0 15px rgba(0, 255, 157, 0.3); }
  100% { box-shadow: 0 0 5px rgba(0, 255, 157, 0.1); }
`;

const gradientText = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

export const NavContainer = styled(motion.nav)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  z-index: 1000;
  background: transparent;
  backdrop-filter: blur(5px);
  border-bottom: 1px solid rgba(0, 255, 157, 0.05);
`;

export const NavLinksContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  height: 75px;
  padding: 0 2rem;

  @media (max-width: 768px) {
    padding: 0 1.5rem;
  }
  
  @media (max-width: 480px) {
    height: 65px;
  }
`;

export const Logo = styled(motion.div)`
  font-weight: 700;
  font-size: 1.2rem;
  letter-spacing: 1px;
  background: linear-gradient(90deg, #00FF9D, #00BFFF);
  background-size: 200% auto;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: ${gradientText} 4s ease infinite;
  cursor: pointer;
  
  span {
  font-weight: 400;
  opacity: 0.8;
  background: white; /* Change this to any color you want */
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

  @media (max-width: 480px) {
    font-size: 1rem;
  }
`;

export const NavLinks = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
  
  @media (max-width: 768px) {
    gap: 1rem;
  }
  
  @media (max-width: 480px) {
    display: none;
  }
`;

export const NavLink = styled(motion.a)`
  color: white;
  text-decoration: none;
  padding: 0.5rem;
  font-weight: 500;
  font-size: 0.9rem;
  letter-spacing: 0.5px;
  transition: all 0.3s ease;
  position: relative;
  z-index: 1;
  
  &:before {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 50%;
    transform: translateX(-50%);
    width: 0;
    height: 3px;
    background: #00FF9D;
    transition: width 0.3s ease;
    border-radius: 4px;
  }

  &:hover {
    color: #00FF9D;
    transform: translateY(-2px);
    
    &:before {
      width: 80%;
    }
  }

  ${props => props.active && css`
    color: #00FF9D;
    
    &:before {
      width: 80%;
    }
  `}

  @media (max-width: 768px) {
    font-size: 0.85rem;
    padding: 0.5rem 0.3rem;
  }
`;

export const MobileMenuButton = styled(motion.button)`
  display: none;
  align-items: center;
  justify-content: center;
  background: rgba(0, 255, 157, 0.1);
  border: 1px solid rgba(0, 255, 157, 0.2);
  border-radius: 50%;
  color: #00FF9D;
  width: 40px;
  height: 40px;
  padding: 0;
  cursor: pointer;
  transition: all 0.3s ease;
  animation: ${pulseGlow} 3s infinite ease-in-out;
  
  &:hover {
    background: rgba(0, 255, 157, 0.2);
  }
  
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
  background: rgba(0, 0, 0, 0.9);
  z-index: 1001;
  padding: 4rem 2rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  backdrop-filter: blur(10px);
`;

export const MobileLogo = styled(Logo)`
  position: absolute;
  top: 2rem;
  left: 50%;
  transform: translateX(-50%);
  font-size: 1.2rem; // Reduced from 1.4rem for better mobile fitting
  width: 80%; // Ensure it doesn't overflow the container
  display: flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap; // Prevent wrapping
  
  @media (max-width: 350px) {
    font-size: 1rem; // Even smaller for very small screens
  }
`;

export const CodeBadge = styled.span`
  font-family: "Fira Code", monospace;
  color: var(--primary);
  font-weight: 600;
  margin-right: 8px;
  position: relative;
  overflow: hidden;
  
  @keyframes shine {
    10% { transform: translateX(100%); }
    100% { transform: translateX(100%); }
  }
`;

export const LogoText = styled.span`
  position: relative;
  
  &::after {
    content: "developer";
    position: absolute;
    bottom: -18px;
    left: 0;
    font-size: 0.6rem;
    font-weight: normal;
    letter-spacing: 2px;
    opacity: 0;
    transition: opacity 0.3s ease;
     background: linear-gradient(45deg, var(--primary), #00ffff);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
  }

  ${Logo}:hover &::after {
    opacity: 1;
  }
`;

// Then define MobileCodeBadge
export const MobileCodeBadge = styled(CodeBadge)`
  font-size: 0.9rem;
  margin-right: 6px;
  
  @media (max-width: 350px) {
    font-size: 0.8rem;
  }
`;

export const MobileLogoText = styled(LogoText)`
  font-size: 0.9rem;
  
  @media (max-width: 350px) {
    font-size: 0.8rem;
  }
`;

export const MobileNavLink = styled(motion.a)`
  color: white;
  text-decoration: none;
  font-size: 1.3rem;
  font-weight: 500;
  text-align: center;
  padding: 0.75rem 0;
  width: 80%;
  max-width: 300px;
  position: relative;
  overflow: hidden;
  
  &:before {
    content: '';
    position: absolute;
    top: 50%;
    left: 0;
    width: 15px;
    height: 2px;
    background: #00FF9D;
    transform: translateY(-50%);
    opacity: 0;
    transition: all 0.3s ease;
  }
  
  &:hover {
    color: #00FF9D;
    
    &:before {
      opacity: 1;
      left: -20px;
    }
  }
  
  ${props => props.active && css`
    color: #00FF9D;
    
    &:before {
      opacity: 1;
      left: -20px;
    }
  `}
`;

export const MobileCloseButton = styled(MobileMenuButton)`
  position: absolute;
  top: 1rem;
  right: 1rem;
  display: flex;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  animation: none;
  
  &:hover {
    background: rgba(255, 255, 255, 0.1);
    transform: rotate(90deg);
  }
`;

export const NavProgressBar = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  height: 3px;
  background: linear-gradient(90deg, #00FF9D, #00BFFF);
  transition: width 0.5s ease;
`;