const autoprefixer = require('autoprefixer')
const pxtorem = require('postcss-pxtorem')
const tailwindcss = require('tailwindcss')
const path = require('path')

const resolve = dir => {
  return path.resolve(__dirname, dir)
}

module.exports = {
  outputDir: 'dist',
  publicPath: process.env.NODE_ENV === 'production' ? '/h5-tempate/' : '/',
  configureWebpack: {
    resolve: {
      alias: {
        public: resolve('public'),
        src: resolve('src'),
        components: resolve('src/components'),
        service: resolve('src/services'),
        utils: resolve('src/utils'),
        store: resolve('src/store'),
      },
    },
  },
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
