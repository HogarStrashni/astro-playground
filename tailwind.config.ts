/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      keyframes: {
        playground: {
          "0%": { transform: "scale(1) rotate(10deg)" },
          "25%": { transform: "scale(1.10) rotate(-10deg)" },
          "50%": { transform: "scale(1.15) rotate(10deg)" },
          "75%": { transform: "scale(1.10) rotate(-10deg)" },
          "100%": { transform: "scale(1) rotate(10deg)" },
        },
        dash: {
          from: { offsetDistance: "0%" },
          to: { offsetDistance: "100%" },
        },
      },
      animation: {
        "svg-playground": "playground 6s linear infinite",
        "svg-dash": "dash 2s linear alternate infinite",
      },
    },
  },
  plugins: [],
};
