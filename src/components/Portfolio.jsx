// components/Portfolio.jsx
import React, { Suspense } from 'react';
import { ThemeProvider } from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { ParallaxProvider } from 'react-scroll-parallax';

// Common Components and Utilities
import { 
  theme, 
  GlobalStyles, 
  ErrorBoundary,
  LoadingSpinner
} from './common';

// Section Components
import Hero from './Hero';
import Navigation from './Navigation';
import Projects from './Projects';
import Experience from './Experience';
import Skills from './Skills';
import Contact from './Contact';
import Scene from './Scene';

// Styled Components for Portfolio
import styled from 'styled-components';

const PortfolioContainer = styled.div`
  position: relative;
  width: 100vw;
  min-height: 100vh;
  overflow-x: hidden;
  background: transparent;
`;

const CanvasContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: ${({ theme }) => theme.zIndex.scene};
  pointer-events: none;

  canvas {
    pointer-events: auto;
  }
`;

const MainContent = styled(motion.main)`
  position: relative;
  z-index: ${({ theme }) => theme.zIndex.content};
`;

// Loading Screen Component
const LoadingScreen = styled(motion.div)`
  position: fixed;
  inset: 0;
  background: ${({ theme }) => theme.colors.background};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: ${({ theme }) => theme.zIndex.modal};
`;

const LoadingText = styled.div`
  color: ${({ theme }) => theme.colors.primary};
  font-family: ${({ theme }) => theme.fonts.code};
  margin-top: 1rem;
  font-size: 1rem;
`;

const LoadingProgress = styled.div`
  width: 300px;
  height: 4px;
  background: rgba(0, 255, 157, 0.1);
  border-radius: 9999px;
  margin-bottom: 1.5rem;
  overflow: hidden;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, ${({ theme }) => theme.colors.primary}, transparent);
    animation: loading-shine 1.5s ease-in-out infinite;
  }

  @keyframes loading-shine {
    0% { transform: translateX(-100%); }
    100% { transform: translateX(100%); }
  }
`;

const Portfolio = () => {
  const [isLoading, setIsLoading] = React.useState(true);
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => setIsLoading(false), 500);
          return 100;
        }
        return prev + 1;
      });
    }, 20);

    return () => clearInterval(timer);
  }, []);

  return (
    <ErrorBoundary>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <ParallaxProvider>
          <PortfolioContainer>
            {/* Loading Screen */}
            <AnimatePresence mode="wait">
              {isLoading && (
                <LoadingScreen
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <LoadingProgress style={{ width: `${progress}%` }} />
                  <LoadingText>{progress}%</LoadingText>
                </LoadingScreen>
              )}
            </AnimatePresence>

            {/* Navigation */}
            <Navigation />

            {/* 3D Scene Background */}
            <CanvasContainer>
              <Suspense fallback={null}>
                <Scene />
              </Suspense>
            </CanvasContainer>

            {/* Main Content */}
            <MainContent
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              {/* Hero Section */}
              <Hero />

              {/* Projects Section */}
              <Projects />

              {/* Skills Section */}
              <Skills />

              {/* Experience Section */}
              <Experience />

              {/* Contact Section */}
              <Contact />
            </MainContent>
          </PortfolioContainer>
        </ParallaxProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
};

export default Portfolio;