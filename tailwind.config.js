/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "rgba(var(--color-primary))",
        secondary: "rgba(var(--color-secondary))",
        text: "rgba(var(--color-text))",
        background: "rgba(var(--color-bg))",
      },
    },
  },
  plugins: [],
};
