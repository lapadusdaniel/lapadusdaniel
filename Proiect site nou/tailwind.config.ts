import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}', './lib/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        porcelain: '#fffdfa',
        parchment: '#f5f1e8',
        ink: '#1f1b16',
        muted: '#6f675d',
        gold: '#bfa26a'
      },
      fontFamily: {
        serif: ['var(--font-serif)'],
        sans: ['var(--font-sans)']
      },
      boxShadow: {
        soft: '0 14px 30px -22px rgba(0, 0, 0, 0.28)'
      },
      maxWidth: {
        reading: '72ch'
      }
    }
  },
  plugins: []
};

export default config;
