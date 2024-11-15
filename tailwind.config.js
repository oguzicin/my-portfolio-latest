/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,tsx,ts}"],
  theme: {
    extend: {
      fontFamily: {
        oguzFont: ['"Custom Font"', "sans-serif"],
        tiny5: ['"Tiny5"', "sans-serif"],
        redditMono: ['"Reddit Mono"', "monospace"],
        mooli: ['"Mooli"', "sans-serif"],
        poppins: ['"Poppins"', "sans-serif"],
        nunito: ['"Nunito"', "sans-serif"],
        exo: ['"Exo"', "sans-serif"],
        suse: ['"SUSE"', "sans-serif"],
      // Add more custom font families as needed
    },
    screens: {
      'custom-xs': { 'max': '480px' },
      'custom-xm': { 'max': '800px' },
      'custom-sm': { 'max': '1000px' },
      'custom-m': { 'max': '1500px' },
    },

  },
  },
  plugins: [],
}

