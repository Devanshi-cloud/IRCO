/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        shoulders: ['Big Shoulders Stencil', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
      },
      colors: {
        aurora: "#7f5af0",
        navyBlue: "#1e3a8a",
        gradientStart: "#4c1d95",
        gradientEnd: "#2563eb",
      },
      animation: {
        borderGlowLoop: "borderGlowLoop 3s infinite linear",
      },
      keyframes: {
        borderGlowLoop: {
          "0%": {
            boxShadow: "inset 0 0 10px rgba(127, 90, 240, 0.8)",
          },
          "25%": {
            boxShadow: "inset 10px 0 10px rgba(127, 90, 240, 0.8), inset 0 0 10px rgba(37, 99, 235, 0.8)",
          },
          "50%": {
            boxShadow: "inset 0 10px 10px rgba(37, 99, 235, 0.8), inset 0 0 10px rgba(127, 90, 240, 0.8)",
          },
          "75%": {
            boxShadow: "inset -10px 0 10px rgba(127, 90, 240, 0.8), inset 0 0 10px rgba(37, 99, 235, 0.8)",
          },
          "100%": {
            boxShadow: "inset 0 0 10px rgba(127, 90, 240, 0.8)",
          },
        },
      },
      backgroundImage: {
        "aurora-gradient": "linear-gradient(90deg, #4c1d95, #7f5af0, #2563eb)",
      },
    },
  },
  plugins: [],
};