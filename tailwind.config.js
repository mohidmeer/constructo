/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './layouts/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors:{
        primary:'#FFc329',
        secondary:'#292929',
      },
      // colors:{
      //   'primary':'#FFc329',
      //   'secondary':'#292929',
      // }
    },
  },
  plugins: [],
}
