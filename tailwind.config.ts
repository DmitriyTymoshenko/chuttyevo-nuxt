import type { Config } from 'tailwindcss'

export default {
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Source Serif 4"', 'Georgia', 'serif'],
        sans: ['Montserrat', 'Arial', 'sans-serif'],
      },
    },
  },
} satisfies Config
