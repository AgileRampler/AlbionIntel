import flowbiteReact from "flowbite-react/plugin/tailwindcss";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",              // ✅ ADD THIS - Important for Vite
    "./src/**/*.{js,ts,jsx,tsx}", // ✅ FIXED - Added jsx/tsx extensions
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}" // ✅ FIXED - Correct path with forward slashes
  ],
  theme: {
    extend: {
      fontFamily: {
        opens: ["Open Sans", "sans-serif"], // ✅ FIXED - Typo: "sans-seri" → "sans-serif"
      }
    },
  },
  plugins: [flowbiteReact],
}
