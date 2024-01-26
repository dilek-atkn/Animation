/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'intro-1': "url('/laptop.jpg')",
        'intro-2': "url('/startseite.jpg')",
      },
      boxShadow: {
        'bottom': '0px 12px 13px -1px rgba(0,0,0,0.89)',
      }
    },
  },
  plugins: [],
};
