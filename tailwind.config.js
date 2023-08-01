/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        accent: {
          1: 'hsl(var(--color-accent1) / <alpha-value>)',
          2: 'hsl(var(--color-accent2) / <alpha-value>)',
        },
        bkg: 'hsl(var(--color-bkg) / <alpha-value>)',
        content: 'hsl(var(--color-content) / <alpha-value>)',
      },
    },
    animation: {
      'spin-slower': 'spin 35s ease infinite',
      'spin-slow': 'spin 25s ease-in-out infinite reverse',
    },
  },
  plugins: [],
}
