import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'


export default defineConfig({
<<<<<<< HEAD
  plugins: [react()],
})
=======
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
>>>>>>> c34faffbe67ff2076b1cd23da5e5e1cb1bdb2554
