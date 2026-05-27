import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Replace 'raaga-portfolio' below with your exact GitHub repository name.
// Example: if your repo is github.com/raagasuravarapu/portfolio, use '/portfolio/'
const REPO_NAME = 'raaga-portfolio'

export default defineConfig({
  plugins: [react()],
  base: `/${REPO_NAME}/`,
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    // Ensure source maps are off for production
    sourcemap: false,
  },
})
