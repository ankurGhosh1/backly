/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#F96931",
        secondary: "#0072EF",
        tertiary: "#F2F4F3",
        gray: "#848484",
      },
      screens: {
        "max-xl": { max: "1540px" },
        "max-lg": { max: "1024px" },
        "max-md": { max: "768px" },
        "max-sm": { max: "548px" },
      },
    },
  },
  plugins: [],
};
