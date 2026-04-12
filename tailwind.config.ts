import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0EA5E9",
        deep: "#0A2540",
        aqua: "#38BDF8",
        success: "#22C55E"
      },
      boxShadow: {
        glow: "0 25px 60px rgba(14, 165, 233, 0.22)",
        card: "0 20px 45px rgba(10, 37, 64, 0.16)"
      },
      backgroundImage: {
        "hero-radial":
          "radial-gradient(circle at top, rgba(56, 189, 248, 0.35), transparent 38%), radial-gradient(circle at 80% 20%, rgba(14, 165, 233, 0.25), transparent 28%)"
      },
      animation: {
        float: "float 5.5s ease-in-out infinite",
        fadeUp: "fadeUp 0.8s ease-out both",
        pulseSoft: "pulseSoft 2.8s ease-in-out infinite",
        scrollUp: "scrollUp 18s linear infinite",
        scrollLeft: "scrollLeft 14s linear infinite"
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" }
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" }
        },
        pulseSoft: {
          "0%, 100%": { transform: "scale(1)", opacity: "1" },
          "50%": { transform: "scale(1.04)", opacity: "0.92" }
        },
        scrollUp: {
          "0%": { transform: "translateY(0)" },
          "100%": { transform: "translateY(-50%)" }
        },
        scrollLeft: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" }
        }
      }
    }
  },
  plugins: []
};

export default config;
