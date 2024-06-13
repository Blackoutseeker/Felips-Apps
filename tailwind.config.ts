import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,css}',
    './src/components/**/*.{js,ts,jsx,tsx,css}',
    './src/styles/**/*.css'
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

export default config
