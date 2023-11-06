/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx,mjs,cjs}"],
  theme: {
    extend: {},
    fontFamily: {
      sans: ["Roboto", "sans-serif"],
    },
    // height : {
    //   '550':'34rem'
    // }
  },
  plugins: [],
};

// tailwind.config.{js,cjs,mjs,ts} 