/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      display: ["group-hover"],


      height: {
        '15': '0.9375rem',
      },
      // backgroundImage: {
      //   'food-bg': "url('./img/background2.png')"
      // }
      backgroundColor:{
        'white-blue': "linear-gradient(0deg, rgba(144,233,235,1) 0%, rgba(255,255,255,1) 100%)",
        'new-col' :"linear-gradient(0deg, rgba(223,113,235,1) 0%, rgba(255,255,255,1) 100%)",
        'black-white': "linear-gradient(77deg, rgba(136,136,136,1) 0%, rgba(255,255,255,1) 48%, rgba(105,105,105,1) 100%)",
        'new':"#e5e5e5"
      },
      dropShadow: {
        '3xl': '0 35px 35px rgba(255, 255, 255,0.25)',
        '4xl': [
            '0 35px 35px rgba(255, 255, 255, 0.50)',
            '0 45px 65px rgba(255, 255, 255, 0.65)'
        ]
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}

