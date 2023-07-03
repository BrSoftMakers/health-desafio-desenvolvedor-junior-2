/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'bg-image': "url('src/assets/Rectangle1.png'), url('src/assets/Rectangle2.png')",
        // 'rigth-image': "url('./assets/Rectangle2.png')",
      },
      backgroundPosition: {
        'left-rigth': 'left, right',
      },
      backgroundSize: {
        'leftS-rigthS': '50%, 50%',
      },
      colors: {
        'bg-rgba': 'rgba(57, 57, 57, 0.50)',
        primary: '#FFB800',
      },
    },
  },
  plugins: [],
};
