/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // Tarzan Trimming palette: modern arborist
        // forest (primary) + bark (warm accent) + sky (cool secondary)
        forest: {
          DEFAULT: '#2D4A36', // deep forest green: primary
          dark:    '#1F3327',
          light:   '#456A52',
        },
        bark: {
          DEFAULT: '#8B6F47', // warm bark / wood tone: warm accent
          dark:    '#6B5235',
          light:   '#A88B66',
        },
        sky: {
          DEFAULT: '#5B7B8C', // looking-up-through-the-canopy blue: secondary
          dark:    '#3F5969',
          light:   '#7E9AAA',
        },
        moss: {
          DEFAULT: '#9DAE7F', // soft moss: third accent for highlights
          dark:    '#7A8C62',
        },
        cream: {
          DEFAULT: '#FAF7F0', // warm cream: page background
          dark:    '#F0EAD9',
          deep:    '#E4DCC2',
        },
        ink: {
          DEFAULT: '#2A2E2A', // deep slate: primary text
          muted:   '#6B6E6A', // soft gray: secondary text
        },
      },
      fontFamily: {
        sans:    ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        accent:  ['"Grand Hotel"', '"Billabong"', 'cursive'],
      },
      maxWidth: {
        prose: '70ch',
        content: '1200px',
        narrow: '780px',
      },
      letterSpacing: {
        widest2: '0.25em',
      },
      boxShadow: {
        soft: '0 10px 40px -10px rgba(45, 74, 54, 0.18)',
        card: '0 4px 24px -6px rgba(42, 46, 42, 0.12)',
      },
      backgroundImage: {
        'grain': "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.5'/%3E%3C/svg%3E\")",
      },
    },
  },
  plugins: [],
};
