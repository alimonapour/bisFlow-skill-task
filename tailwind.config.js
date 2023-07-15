/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        greenRectangle: 'url(/src/assets/images/GreenRectangle.svg)',
        bgInfoColor: 'linear-gradient(44deg, #50C9C3 0%, #96DEDA 100%)',
        jarBackground: 'url(/src/assets/images/JAR.png)',
        addButton: 'url(/src/assets/images/add.png)',
        addButtonWhite: 'url(/src/assets/images/add-white.png)',
        basketIcon: 'url(/src/assets/images/basket.png)',
      },
      boxShadow: {
        '3xl': '-9px 0px 29px 0px rgba(229, 229, 229, 0.50)',
      },
      fontFamily: {
        future: ['Future', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
