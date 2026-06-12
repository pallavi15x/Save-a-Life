/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'deep-forest': '#0A3D2E',
        'medical-green': '#1A6B4A',
        'life-green': '#1D9E75',
        'mint-tint': '#E1F5EE',
        'life-red': '#E24B4A',
        'blush-tint': '#FCEBEB',
        'trust-blue': '#378ADD',
        'off-white': '#F9FAFB',
        'rich-black': '#1A1A1A',
        'slate-gray': '#6B7280',
        'warm-amber': '#EF9F27',
        'soft-purple': '#7F77DD',
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      fontSize: {
        'h1': ['56px', { lineHeight: '1.2', fontWeight: '700' }],
        'h2': ['40px', { lineHeight: '1.25', fontWeight: '700' }],
        'h3': ['28px', { lineHeight: '1.3', fontWeight: '600' }],
        'h4': ['20px', { lineHeight: '1.4', fontWeight: '600' }],
      },
      animation: {
        'heartbeat': 'heartbeat 0.9s ease-in-out infinite',
        'float': 'float 8s ease-in-out infinite',
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'slide-up': 'slideUp 0.5s ease-out forwards',
      },
      keyframes: {
        heartbeat: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.08)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-120px)' },
        },
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideUp: {
          '0%': { transform: 'translateY(100%)' },
          '100%': { transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};
