// components/common/Section.js
import styled from 'styled-components';

export const Section = styled.section`
  position: relative;
  min-height: 100vh;
  padding: ${({ theme }) => theme.spacing.section} 0;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;