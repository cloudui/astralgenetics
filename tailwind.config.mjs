/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#eef7ff',
          100: '#d9edff',
          200: '#bce0ff',
          300: '#8eccff',
          400: '#59aeff',
          500: '#3b8eff',
          600: '#1e6bf5',
          700: '#1755e1',
          800: '#1945b6',
          900: '#1a3d8f',
          950: '#152757',
        },
        midnight: {
          800: '#0d1525',
          900: '#080e1a',
          950: '#040810',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
    },
  },
  plugins: [],
};
