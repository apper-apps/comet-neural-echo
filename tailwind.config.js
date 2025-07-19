/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'serif': ['Georgia', 'serif'],
        'mono': ['Monaco', 'monospace'],
      },
      keyframes: {
        fadeIn: {
          'from': { opacity: '0' },
          'to': { opacity: '1' }
        },
        slideUp: {
          'from': { transform: 'translateY(10px)', opacity: '0' },
          'to': { transform: 'translateY(0)', opacity: '1' }
        },
        pulse: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.05)' }
        },
        bounce: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' }
        },
        glitch: {
          '0%': { transform: 'translateX(0)' },
          '20%': { transform: 'translateX(-2px)' },
          '40%': { transform: 'translateX(2px)' },
          '60%': { transform: 'translateX(-1px)' },
          '80%': { transform: 'translateX(1px)' },
          '100%': { transform: 'translateX(0)' }
        },
        textGlitch: {
          '0%': { filter: 'blur(0px)', transform: 'translateX(0)' },
          '25%': { filter: 'blur(1px)', transform: 'translateX(-2px)' },
          '50%': { filter: 'blur(0px)', transform: 'translateX(2px)' },
          '75%': { filter: 'blur(1px)', transform: 'translateX(-1px)' },
          '100%': { filter: 'blur(0px)', transform: 'translateX(0)' }
        },
        rainbowSweep: {
          '0%': { color: '#3B82F6' },
          '20%': { color: '#8B5CF6' },
          '40%': { color: '#EC4899' },
          '60%': { color: '#10B981' },
          '80%': { color: '#F59E0B' },
          '100%': { color: '#3B82F6' }
        }
      },
      animation: {
        fadeIn: 'fadeIn 0.3s ease-out',
        slideUp: 'slideUp 0.3s ease-out',
        pulse: 'pulse 2s infinite',
        bounce: 'bounce 1s infinite',
        glitch: 'glitch 0.3s infinite',
        textGlitch: 'textGlitch 0.5s infinite',
        rainbowSweep: 'rainbowSweep 2s linear infinite'
      }
    },
  },
  plugins: [],
}