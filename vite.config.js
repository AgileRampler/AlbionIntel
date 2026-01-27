import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import flowbiteReact from "flowbite-react/plugin/vite";

// https://vite.dev/config/
export default defineConfig({
  base: './', // ✅ ADD THIS - Use relative paths for deployment
  plugins: [react(), flowbiteReact()],
  build: {
    outDir: 'dist', // ✅ Output directory (default, but explicit is good)
    sourcemap: false, // ✅ Optional: disable sourcemaps for smaller build
    rollupOptions: {
      output: {
        manualChunks: undefined, // ✅ Prevent chunk splitting issues
      }
    }
  }
})
