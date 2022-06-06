module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    backgroundImage: {
      'portfolio': "require('./src/resources/landingcopy.jpg')",
    },
    extend: {
      colors:{
        'button-blue':'#377DFF',
        'box-red':'#FF2D2D',
        'box-green':'#7CE761',
        'box-orange':'#FFA800'
      }
    },
    fontFamily: {
      'nunito': ['Nunito'],
      'quicksand': ['Quicksand'],
    }
  },
  plugins: [],
}