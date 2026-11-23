/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          50: '#F7F6F3',
          100: '#EFEDE8',
          200: '#E2E0DA',
          300: '#CCCAC2',
          400: '#A3A19A',
          500: '#75736C',
          600: '#52514C',
          700: '#3A3935',
          800: '#262623',
          900: '#1A1A18',
          950: '#101010',
        },
        accent: {
          50: '#EEF3F7',
          100: '#D6E2EC',
          200: '#AEC5D8',
          300: '#7FA1C0',
          400: '#527EA6',
          500: '#335F89',
          600: '#234B6E',
          700: '#1B3A56',
          800: '#162E43',
          900: '#122537',
        },
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['Fraunces', 'ui-serif', 'Georgia', 'serif'],
      },
      letterSpacing: {
        tightest: '-0.04em',
      },
      maxWidth: {
        prose: '68ch',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'scroll-hint': {
          '0%': { opacity: '0', transform: 'translateY(0)' },
          '30%': { opacity: '1' },
          '100%': { opacity: '0', transform: 'translateY(10px)' },
        },
        'drift-slow': {
          '0%, 100%': { transform: 'translate3d(0,0,0) scale(1)' },
          '50%': { transform: 'translate3d(0,-24px,0) scale(1.04)' },
        },
        'contour-pan': {
          '0%': { transform: 'translate3d(0,0,0)' },
          '100%': { transform: 'translate3d(-80px,-40px,0)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.9s cubic-bezier(0.22,1,0.36,1) both',
        'scroll-hint': 'scroll-hint 2.2s ease-in-out infinite',
        'drift-slow': 'drift-slow 18s ease-in-out infinite',
        'contour-pan': 'contour-pan 40s ease-in-out infinite alternate',
      },
      transitionDuration: {
        400: '400ms',
      },
      transitionTimingFunction: {
        smooth: 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
    },
  },
  plugins: [],
};
