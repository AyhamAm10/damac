/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    letterSpacing: {
      "tighter": "-0.05em",
      "tight": "-0.02em" ,
      "normal": "0",
      "wide": "0.025em",
      "wider": "0.05em",
      "widest": "0.1em",
      "extraWide": '0.2em',
      "superWide": '0.3em',
    },
    colors: {
      'green': '#636c00',
      'ofgreen':'#636c00e6',
      'red': '#d98152',
      'black': '#0A0A0A',
      'ofblack': '#7c7c7cb5',
      'ofwhite': '#ECEDEF',
      'white': '#FFFFFF',
      'blue': "rgb(42, 165, 221)",
      'yalwe' : "#fcece2",
      'ofYalwe' : "#fcede3e6",

    },
      borderRadius: {
        'sm': '4px',
        'md': '8px',
        'lg': '16px',
        'xl': '24px',
        '2xl' : '30px' ,
        '3xl' : '36px' ,
        'full': '9999px', 
      },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    extend: {
     
    }
},
  plugins: [],
}