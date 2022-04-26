module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['Roboto', 'sans-serif']
      },
      colors: {
        primary: '#23252E',
        secondary: '#B7B8C3',
        background: '#272A34'
      }
    }
  },
  plugins: []
}
