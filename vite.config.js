import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import flowbiteReact from "flowbite-react/plugin/vite";

export default defineConfig({
  base: './', // For Vercel/Netlify use './', for GitHub Pages use '/repo-name/'
  plugins: [react(), flowbiteReact()],
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false,
  },
  server: {
    port: 3000, // Optional: set dev server port
  }
})
