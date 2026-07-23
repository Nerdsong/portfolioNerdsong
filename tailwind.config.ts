import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: ['class'],
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#06070D',
        foreground: '#F5F5F5',
        card: {
          DEFAULT: '#111116',
          hover: '#18181F',
        },
        primary: {
          DEFAULT: '#FF3030',
          hover: '#FF5555',
        },
        muted: {
          DEFAULT: '#B4B4B8',
        },
        border: 'rgba(255,255,255,0.08)',
        glow: 'rgba(255,48,48,0.35)',
        navbar: 'rgba(10,10,15,0.70)',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        display: ['var(--font-space-grotesk)', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        card: '20px',
        button: '14px',
        input: '14px',
        image: '20px',
      },
      maxWidth: {
        site: '1280px',
      },
      spacing: {
        section: '150px',
      },
      boxShadow: {
        glow: '0 0 40px rgba(255,48,48,0.25)',
        'glow-sm': '0 0 20px rgba(255,48,48,0.15)',
      },
      letterSpacing: {
        title: '-0.02em',
      },
      backgroundImage: {
        'noise': "url('/noise.svg')",
      },
    },
  },
  plugins: [],
};

export default config;
