/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#f3efff",
          100: "#e3dbff",
          200: "#c2b7ff",
          300: "#a094ff",
          400: "#7e70ff",
          500: "#5c4cff",
          600: "#493ccc",
          700: "#3c00ff", // Main primary
          800: "#2f00cc",
          900: "#220099",
        },
        accent: {
          50: "#fef9eb",
          100: "#fdf3d7",
          200: "#fbe7b0",
          300: "#f9d888",
          400: "#f8c861",
          500: "#F8B13A", // Main accent
          600: "#c58e2e",
          900: "#624723",
        },
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      boxShadow: {
        custom: "0 4px 12px rgba(0, 0, 0, 0.08)",
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-in-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};
