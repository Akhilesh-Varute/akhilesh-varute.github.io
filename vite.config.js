import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './', // This should match your GitHub Pages URL
  server:{
    host:'0.0.0.0',
  }
})
