// components/common/GlobalStyles.js
import { createGlobalStyle } from 'styled-components';
import { theme } from './theme';

export const GlobalStyles = createGlobalStyle`
  :root {
    --primary: ${theme.colors.primary};
    --primary-dark: ${theme.colors.primaryDark};
    --primary-glow: ${theme.colors.primaryGlow};
    --background: ${theme.colors.background};
    --text-primary: ${theme.colors.textPrimary};
    --text-secondary: ${theme.colors.textSecondary};
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    scroll-behavior: smooth;
    scrollbar-width: thin;
    scrollbar-color: var(--primary-dark) var(--background);
  }

  body {
    margin: 0;
    padding: 0;
    background: var(--background);
    color: var(--text-primary);
    font-family: ${theme.fonts.primary};
    line-height: 1.5;
    overflow-x: hidden;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  ::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }

  ::-webkit-scrollbar-track {
    background: var(--background);
  }

  ::-webkit-scrollbar-thumb {
    background: var(--primary-dark);
    border-radius: 4px;

    &:hover {
      background: var(--primary);
    }
  }

  ::selection {
    background: var(--primary);
    color: var(--background);
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  button {
    cursor: pointer;
    border: none;
    outline: none;
    background: none;
    font-family: inherit;
  }

  img {
    max-width: 100%;
    height: auto;
  }
`;
