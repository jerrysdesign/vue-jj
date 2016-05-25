var config = require('./webpack.config.js')

config.entry = {
  'vue-jj': './src/index.js',
}

config.output = {
  filename: './dist/[name].js',
  library: 'VueJJ',
  libraryTarget: 'umd'
}


module.exports = config