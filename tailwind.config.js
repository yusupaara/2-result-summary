/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          red: {
            100: 'hsl(0, 100%, 67%)',
            50: 'hsla(0, 100%, 67%, 0.1)'
          },
          orange: {
            100: 'hsl(39, 100%, 56%)',
            50: 'hsla(39, 100%, 56%, 0.1)'
          },
          green: {
            100: 'hsl(166, 100%, 37%)',
            50: 'hsla(166, 100%, 37%, 0.1)'
          },
          blue: {
            100: 'hsl(234, 85%, 45%)',
            50: 'hsla(234, 85%, 45%, 0.1)'
          }
        },
        gradient: {
          bglight: 'hsl(252, 100%, 67%)',
          bgdark: 'hsl(241, 81%, 54%)',
          cclight: 'hsla(241, 72%, 46%, 0)',
          ccdark: 'hsla(256, 72%, 46%, 1)'
        },
        neutral: {
          white: 'hsl(0, 0%, 100%)',
          paleblue: 'hsl(221, 100%, 96%)',
          lavender: 'hsl(241, 100%, 89%)',
          darkblue: 'hsl(224, 30%, 27%)'
        }
      },
      fontFamily: {
        hanken: ['Hanken Grotesk', 'Sans-serif']
      },
      fontSize: {
        default: '18px'
      },
    },
    fontWeight: {
      light: '500',
      normal: '700',
      bold: '800'
    }
    // screens: {
    //   mobile: '375px',
    //   dekstop: '1440px'
    // }
  },
  plugins: [],
}

