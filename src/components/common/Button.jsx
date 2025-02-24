// components/common/Button.js
import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';

export const Button = styled(motion.button)`
  padding: 1rem 2rem;
  background: ${({ primary, theme }) =>
    primary ? theme.colors.primary : 'transparent'};
  color: ${({ primary, theme }) =>
    primary ? theme.colors.background : theme.colors.primary};
  border: ${({ primary, theme }) =>
    primary ? 'none' : `1px solid ${theme.colors.primary}`};
  border-radius: 12px;
  font-weight: 600;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  transition: ${({ theme }) => theme.transitions.default};
  cursor: pointer;
  position: relative;
  overflow: hidden;

  &:hover {
    transform: translateY(-2px);
    box-shadow: ${({ theme }) => theme.shadows.primary};
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }

  ${({ small }) =>
    small &&
    css`
      padding: 0.75rem 1.5rem;
      font-size: 0.875rem;
    `}

  ${({ large }) =>
    large &&
    css`
      padding: 1.25rem 2.5rem;
      font-size: 1.125rem;
    `}
`;