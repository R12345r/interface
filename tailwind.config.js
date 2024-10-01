/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "heading-1": "var(--heading-1)",
        line: "var(--line)",
        "primary-1": "var(--primary-1)",
        "secondary-2": "var(--secondary-2)",
        smallfont: "var(--smallfont)",
      },
      minHeight: {
        'screen-75': '75vh', // Custom class for min-height 75vh
      },
    },
  },
  plugins: [],
};
