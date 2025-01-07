/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ['class'],
  content: ['./index.html', './src/**/*.{ts,tsx,js,jsx}'],
  theme: {
    extend: {
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      colors: {
        primary: '#000000',
        muted: {
          foreground: '#6B7280',
          background: '#F3F4F6',
        }
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};
