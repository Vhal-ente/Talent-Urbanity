/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        navy: {
          deep: "#0A1220",
          DEFAULT: "#101B2D",
          mid: "#1C2B44",
        },
        charcoal: {
          DEFAULT: "#262A2F",
          soft: "#5B6169",
        },
        gold: {
          DEFAULT: "#B08D3E",
          bright: "#C9A44E",
        },
        ivory: "#F6F6F4",
      },
      fontFamily: {
        serif: ["Fraunces", "Georgia", "serif"],
        sans: ["Public Sans", "Inter", "Arial", "sans-serif"],
        mono: ["IBM Plex Mono", "ui-monospace", "monospace"],
      },
      boxShadow: {
        refined: "0 24px 80px rgba(10, 18, 32, 0.16)",
      },
    },
  },
  plugins: [],
};
