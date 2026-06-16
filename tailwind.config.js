/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        cairo: ['Cairo', 'sans-serif'],
      },
      colors: {
        ink: '#0B0D12',
        gold: {
          DEFAULT: '#B89A56',
          light: '#C4A96B',
        },
        cream: '#F4F1EB',
        bodygrey: '#E8E8E8',
      },
    },
  },
  plugins: [],
};
