import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // Generate source maps for better debugging
    sourcemap: true,
    // Optimize chunk size for better loading performance
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'styled-components', 'framer-motion'],
        },
      },
    },
  },
  server: {
    // Configure CORS for local development
    cors: true,
  },
  // Resolve aliases for cleaner imports
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
  // Ensure we copy robots.txt, sitemap.xml and other static assets
  publicDir: 'public',
})
