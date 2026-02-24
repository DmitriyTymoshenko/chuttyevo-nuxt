import type { Config } from 'tailwindcss'

export default {
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Source Serif 4"', 'Georgia', 'serif'],
        sans: ['Montserrat', 'Arial', 'sans-serif'],
      },
      colors: {
        brand: {
          black: '#080808',
          dark: '#333333',
          gray: '#666666',
          light: '#f5f5f5',
          mint: '#d4e4d3',
          blush: '#f0e0d8',
        },
      },
    },
  },
} satisfies Config
