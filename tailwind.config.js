/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        'primary': '#004BA8',
        'secondary': '#7161EF',
        'base': 'white',
        'content': '#0D160B',
      }
    },
  },
  plugins: [],
}

