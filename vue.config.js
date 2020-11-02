const autoprefixer = require('autoprefixer')
const pxtorem = require('postcss-pxtorem')
const tailwindcss = require('tailwindcss')

module.exports = {
  outputDir: 'dist',
  publicPath: process.env.NODE_ENV === 'production' ? '/h5-tempate/' : '/',
  css: {
    loaderOptions: {
      postcss: {
        plugins: [
          autoprefixer(),
          tailwindcss(),
          pxtorem({
            rootValue: 37.5,
            propList: ['*'],
          }),
        ],
      },
    },
  },
}
