module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      minHeight : {
        "footer": "80vh"
      },
      padding : {
        "footer": "35vh"
      },
      fontFamily: {
        "body": "Poppins",
      },
      spacing: {
        '200': '90rem'
      },
      backgroundColor: theme => ({
        ...theme('colors'),
        'primary': '#DFB6E0'
       })
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
