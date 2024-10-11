import defaultTheme from 'tailwindcss/defaultTheme'
import forms from '@tailwindcss/forms'
import typography from '@tailwindcss/typography'

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Urbanist', ...defaultTheme.fontFamily.sans],
      },
      height: {
        128: '32rem',
      },
    },
  },
  plugins: [forms, typography],
}
