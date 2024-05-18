/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: "#1b1b1b",
        light: "#FFFFFF",
        accent: "#7B00D3",
        accentDark: "#ffdb4d",
        gray: "#747474",
      },
    },
  },
  plugins: ["@tailwindcss/forms"],
};
