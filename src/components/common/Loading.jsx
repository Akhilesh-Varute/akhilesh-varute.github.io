// components/common/Loading.js
import styled, { keyframes } from 'styled-components';

const spin = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

export const LoadingSpinner = styled.div`
  width: 40px;
  height: 40px;
  border: 3px solid rgba(0, 255, 157, 0.1);
  border-top-color: var(--primary);
  border-radius: 50%;
  animation: ${spin} 1s linear infinite;
`;
