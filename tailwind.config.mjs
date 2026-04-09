/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f3f8f4',
          100: '#e0ede3',
          200: '#c3dbc9',
          300: '#9ac3a4',
          400: '#6da67b',
          500: '#4d7c5e',
          600: '#3d6a4e',
          700: '#325540',
          800: '#2b4536',
          900: '#253a2e',
          950: '#111f19',
        },

        // --- PALETTES TO TRY ---
        // Copy any of these into 'brand' above to switch

        ocean: {
          50: '#effcfd',
          100: '#d6f5f8',
          200: '#b2ebf1',
          300: '#7ddce6',
          400: '#41c4d3',
          500: '#2ba5b0',
          600: '#1a7f8a',
          700: '#196a73',
          800: '#1b565e',
          900: '#1c4850',
          950: '#0c2e35',
        },

        sage: {
          50: '#f3f8f4',
          100: '#e0ede3',
          200: '#c3dbc9',
          300: '#9ac3a4',
          400: '#6da67b',
          500: '#4d7c5e',
          600: '#3d6a4e',
          700: '#325540',
          800: '#2b4536',
          900: '#253a2e',
          950: '#111f19',
        },

        indigo: {
          50: '#eef0fb',
          100: '#dfe2f7',
          200: '#c5c9f0',
          300: '#a3a9e5',
          400: '#8488d8',
          500: '#6e72cc',
          600: '#5c6ac4',
          700: '#4f56a3',
          800: '#424885',
          900: '#393f6b',
          950: '#232540',
        },

        rose: {
          50: '#fdf2f5',
          100: '#fce7ed',
          200: '#f9d0dc',
          300: '#f4adc1',
          400: '#ec7fa0',
          500: '#e05580',
          600: '#cc3564',
          700: '#b06078',
          800: '#8f2141',
          900: '#7a1f3b',
          950: '#440c1e',
        },

        coral: {
          50: '#fdf5f1',
          100: '#fbe8de',
          200: '#f5cfbc',
          300: '#edb092',
          400: '#e28b65',
          500: '#d4714e',
          600: '#c06b4e',
          700: '#a04f38',
          800: '#834132',
          900: '#6b382c',
          950: '#3a1b15',
        },

        amber: {
          50: '#fdfaed',
          100: '#f9f0cc',
          200: '#f3e094',
          300: '#eccc5e',
          400: '#e6b835',
          500: '#d4a030',
          600: '#b8860b',
          700: '#93620e',
          800: '#794e13',
          900: '#654115',
          950: '#3a2108',
        },

        warm: {
          50: '#fdfcfb',
          100: '#f8f6f3',
          200: '#f0ece6',
          300: '#e5dfd6',
          400: '#d1c8bb',
          500: '#b8ad9e',
          600: '#9a8d7d',
          700: '#7d7265',
          800: '#675e53',
          900: '#564f46',
          950: '#2e2924',
        },
      },
      fontFamily: {
        serif: ['"Instrument Serif"', 'Georgia', 'serif'],
        sans: ['"DM Sans"', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
