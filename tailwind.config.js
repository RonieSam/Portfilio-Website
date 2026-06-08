/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "primary": "#ff4400",
        "background-light": "#f8f6f5",
        "neutral-dot": "#D8D3C8",
      },
      fontFamily: {
        "display": ["Space Grotesk", "sans-serif"],
        "serif-italic": ["IBM Plex Serif", "serif"],
        "mono": ["JetBrains Mono", "monospace"]
      },
      borderRadius: {
        "DEFAULT": "0px",
        "lg": "0px",
        "xl": "0px",
        "full": "9999px"
      },
    },
  },
  plugins: [],
}