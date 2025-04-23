module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: { 
      transitionDuration: {
        300: '300ms',
        500: '500ms',
      },
      scale: {
        110: '1.1',
      },
      colors: {
      hero:'#212121',
      accent: '#3FBFFF',
      text: '#3FBFFF',
    },
  },
    keyframes: {
      'fade-down': {
        '0%': { opacity: 0, transform: 'translateY(-20px)' },
        '100%': { opacity: 1, transform: 'translateY(0)' },
      },
    },
    animation: {
      'fade-down': 'fade-down 0.8 ease-out',
    },
  },
 plugins: [],
  purge: {
    enabled: process.env.NODE_ENV === 'production',
    content: ['./src/**/*.{html,ts}'],
  },
}