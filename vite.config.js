import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/',  // For user site (username.github.io)
  server: {
    host: '0.0.0.0',
  }
})