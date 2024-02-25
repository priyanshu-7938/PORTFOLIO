/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'comic-neue-light': ['"Comic Neue"', 'cursive'],
        'comic-neue-regular': ['"Comic Neue"', 'cursive'],
        'comic-neue-bold': ['"Comic Neue"', 'cursive'],
        'comic-neue-light-italic': ['"Comic Neue"', 'cursive'],
        'comic-neue-regular-italic': ['"Comic Neue"', 'cursive'],
        'comic-neue-bold-italic': ['"Comic Neue"', 'cursive'],
        'roboto-thin': ['Roboto', 'sans-serif'],
        'roboto-light': ['Roboto', 'sans-serif'],
        'roboto-regular': ['Roboto', 'sans-serif'],
        'roboto-medium': ['Roboto', 'sans-serif'],
        'roboto-bold': ['Roboto', 'sans-serif'],
        'roboto-black': ['Roboto', 'sans-serif'],
        'roboto-thin-italic': ['Roboto', 'sans-serif'],
        'roboto-light-italic': ['Roboto', 'sans-serif'],
        'roboto-regular-italic': ['Roboto', 'sans-serif'],
        'roboto-medium-italic': ['Roboto', 'sans-serif'],
        'roboto-bold-italic': ['Roboto', 'sans-serif'],
        'roboto-black-italic': ['Roboto', 'sans-serif'],
        'jetbrains-mono': ['"JetBrains Mono"', 'monospace'],
        'samarkan': ['Samarkan', 'cursive'],
      },
    },
  },
  plugins: [],
}

