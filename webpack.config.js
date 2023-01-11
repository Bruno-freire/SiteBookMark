const path = require('path')

module.exports = {
  entry: path.resolve(__dirname, './src/index.js'),
  mode: 'production',
  module: {
    rules: [{
      test: /\.css$/,
      use: ['style-loader', 'css-loader']
    }, {
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader'
  }]
  }
}