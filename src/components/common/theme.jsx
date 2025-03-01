// components/common/theme.js
export const theme = {
    colors: {
      primary: '#00ff9d',
      primaryDark: '#00cc7d',
      primaryGlow: 'rgba(0, 255, 157, 0.5)',
      background: '#000000',
      backgroundLight: '#1a1a1a',
      textPrimary: '#ffffff',
      textSecondary: 'rgba(255, 255, 255, 0.7)',
      glassBackground: 'rgba(0, 0, 0, 0.8)',
      glassBorder: 'rgba(0, 255, 157, 0.1)',
      error: '#ff4d4d',
      success: '#00ff9d'
    },
    
    fonts: {
      primary: "'JetBrains Mono', monospace", // Changed from Inter to JetBrains Mono
      heading: "'Space Mono', monospace",      // Added a heading font
      code: "'Fira Code', monospace",         // Kept your existing code font
      alt: "'IBM Plex Mono', monospace"       // Alternative font for variety
    },
  
    breakpoints: {
      xs: '480px',
      sm: '768px',
      md: '1024px',
      lg: '1200px',
      xl: '1400px'
    },
  
    transitions: {
      default: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
      smooth: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
      bounce: 'all 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55)'
    },
  
    shadows: {
      primary: '0 10px 30px rgba(0, 255, 157, 0.2)',
      glass: '0 8px 32px rgba(0, 255, 157, 0.1)',
      text: '0 0 10px rgba(0, 255, 157, 0.5)'
    },
  
    spacing: {
      section: '6rem',
      container: '2rem'
    },
  
    layout: {
      maxWidth: '1400px',
      sectionSpacing: '6rem'
    },
  
    zIndex: {
      scene: 1,
      content: 2,
      navigation: 1000,
      modal: 1100,
      toast: 1200
    }
  };
  