import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
    "./src/layout/**/*.{ts,tsx}",
    "./src/pages/**/*.{ts,tsx}",
    "./src/sections/**/*.{ts,tsx}"
  ],
  theme: {
    container: {
      center: true,
      padding: "1rem",
      screens: {
        "2xl": "1180px"
      }
    },
    extend: {
      colors: {
        construction: {
          yellow: "#FFC107",
          amber: "#FFB300",
          black: "#1A1A1A",
          graphite: "#242424",
          steel: "#2E2E2E"
        },
        border: "hsl(var(--border))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))"
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "sans-serif"],
        display: ["var(--font-poppins)", "Poppins", "sans-serif"]
      },
      boxShadow: {
        industrial: "0 24px 80px rgba(0, 0, 0, 0.28)",
        lift: "0 18px 45px rgba(0, 0, 0, 0.16)"
      },
      backgroundImage: {
        "yellow-black": "linear-gradient(135deg, #FFC107 0%, #FFB300 36%, #1A1A1A 100%)",
        "metal-grid": "linear-gradient(rgba(255,255,255,.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.06) 1px, transparent 1px)"
      },
      keyframes: {
        "pulse-ring": {
          "0%": { boxShadow: "0 0 0 0 rgba(255, 193, 7, .42)" },
          "70%": { boxShadow: "0 0 0 14px rgba(255, 193, 7, 0)" },
          "100%": { boxShadow: "0 0 0 0 rgba(255, 193, 7, 0)" }
        }
      },
      animation: {
        "pulse-ring": "pulse-ring 2.6s infinite"
      }
    }
  },
  plugins: []
};

export default config;
