/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      textColor: {
        greenClient: "#001B1B",
        orangeClient: "#EC5900",
        darkBlueClient: "#16213E",
      },
      backgroundColor: {
        greenClient: "#001B1B",
        orangeClient: "#EC5900",
        darkBlueClient: "#16213E",
      },
      fontFamily: {
        gilroyLight: ['Gilroy-Light', 'sans-serif'],
        gilroyExtraBold: ['Gilroy-ExtraBold', 'sans-serif']
      },
    },
  },
  plugins: [],
}