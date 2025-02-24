// components/Scene/styles.js
import styled from 'styled-components';
import { motion } from 'framer-motion';

export const SceneContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 1;
  pointer-events: none;
`;

export const CanvasContainer = styled.div`
  width: 100%;
  height: 100%;
  pointer-events: auto;
`;